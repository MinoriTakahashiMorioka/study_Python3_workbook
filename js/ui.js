// =========================================================
// 画面づくりの共通部品
// =========================================================
window.U = {
  // 試験範囲（Pythonチュートリアル）の章ごとのカテゴリ
  CATS: {
    ch1: '1〜2章 はじめに',
    ch3: '3章 気楽な入門編',
    ch4: '4章 制御構造・関数',
    ch5: '5章 データ構造',
    ch6: '6章 モジュール',
    ch7: '7章 入出力',
    ch8: '8章 エラーと例外',
    ch9: '9章 クラス',
    ch10: '10〜11章 標準ライブラリ',
    ch12: '12章〜 venv・浮動小数点',
  },

  catName(key) { return this.CATS[key] || key; },

  // データに含まれているカテゴリだけを章の順番で返す
  catsOf(items) {
    const used = new Set(items.map(i => i.cat));
    return Object.keys(this.CATS).filter(k => used.has(k));
  },

  esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  codeBlock(code) {
    return `<pre class="code"><code class="language-python">${this.esc(code)}</code></pre>`;
  },

  highlight(root) {
    if (!window.hljs) return;
    root.querySelectorAll('pre.code code').forEach(el => {
      if (!el.dataset.hl) { hljs.highlightElement(el); el.dataset.hl = '1'; }
    });
  },

  // 出力比較用：改行コード統一・各行末の空白と末尾の空行を無視
  normOut(s) {
    return String(s).replace(/\r\n?/g, '\n')
      .split('\n').map(l => l.replace(/[ \t]+$/, '')).join('\n')
      .replace(/\n+$/, '');
  },

  // カテゴリ絞り込みのチップ
  //   selected: Set（空なら「すべて」）
  renderChips(container, cats, selected, onChange) {
    const draw = () => {
      container.innerHTML =
        `<button class="chip ${selected.size === 0 ? 'on' : ''}" data-cat="">すべて</button>` +
        cats.map(c => `<button class="chip ${selected.has(c) ? 'on' : ''}" data-cat="${c}">${this.esc(this.catName(c))}</button>`).join('');
    };
    container.classList.add('chips');
    container.onclick = e => {
      const b = e.target.closest('.chip');
      if (!b) return;
      const c = b.dataset.cat;
      if (!c) selected.clear();
      else if (selected.has(c)) selected.delete(c);
      else selected.add(c);
      draw();
      onChange();
    };
    draw();
  },

  // ---------------------------------------------------------
  // textarea を簡易コードエディタにする
  //   Tab=4スペース / Shift+Tab=字下げ解除 / Enter=自動インデント（: の後は+4）
  //   Backspace=インデントを4つずつ戻す / Ctrl(⌘)+Enter=実行
  // ---------------------------------------------------------
  attachEditor(ta, opts = {}) {
    const IND = '    ';
    ['spellcheck', 'autocorrect', 'autocapitalize', 'autocomplete'].forEach(a => ta.setAttribute(a, 'off'));
    ta.setAttribute('spellcheck', 'false');

    const insert = text => {
      ta.focus();
      // execCommand を使うと Ctrl+Z で元に戻せる
      if (!document.execCommand('insertText', false, text)) {
        ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end');
        ta.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };
    const removeSelection = () => {
      if (!document.execCommand('delete', false)) {
        ta.setRangeText('', ta.selectionStart, ta.selectionEnd, 'end');
        ta.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    ta.addEventListener('keydown', e => {
      if (e.isComposing || e.keyCode === 229) return; // 日本語入力中は何もしない
      const s = ta.selectionStart, t = ta.selectionEnd, v = ta.value;
      const lineStart = v.lastIndexOf('\n', s - 1) + 1;

      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (opts.onRun) opts.onRun();
        return;
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        if (s !== t && v.slice(s, t).includes('\n')) {
          // 複数行をまとめてインデント／解除
          const block = v.slice(lineStart, t);
          const lines = block.split('\n');
          const changed = e.shiftKey ? lines.map(l => l.replace(/^ {1,4}/, '')) : lines.map(l => IND + l);
          const text = changed.join('\n');
          ta.setSelectionRange(lineStart, t);
          insert(text);
          ta.setSelectionRange(lineStart, lineStart + text.length);
        } else if (e.shiftKey) {
          const m = v.slice(lineStart).match(/^ {1,4}/);
          if (m) {
            const keep = s - lineStart;
            ta.setSelectionRange(lineStart, lineStart + m[0].length);
            removeSelection();
            const pos = Math.max(lineStart, lineStart + keep - m[0].length);
            ta.setSelectionRange(pos, pos);
          }
        } else {
          insert(IND);
        }
        return;
      }

      if (e.key === 'Enter' && !e.shiftKey && !opts.noAutoIndent) {
        e.preventDefault();
        const line = v.slice(lineStart, s);
        let indent = line.match(/^ */)[0];
        if (/:\s*(#.*)?$/.test(line)) indent += IND;
        insert('\n' + indent);
        return;
      }

      if (e.key === 'Backspace' && s === t) {
        const before = v.slice(lineStart, s);
        if (before.length > 0 && /^ +$/.test(before)) {
          e.preventDefault();
          const n = before.length % 4 || 4;
          ta.setSelectionRange(s - n, s);
          removeSelection();
        }
      }
    });
  },

  // 実行ボタン＋出力欄を作る（読解・穴埋め・写経で共通）
  //   getCode: 実行するコードを返す関数
  runnerBox(getCode, label = '▶ 実行して確かめる') {
    const box = document.createElement('div');
    box.innerHTML = `
      <div class="row" style="margin-top:14px">
        <button class="btn primary run-btn">${label}</button>
        <span class="muted small run-note"></span>
      </div>
      <div class="run-out hidden">
        <div class="output-label">実行結果</div>
        <pre class="output"></pre>
      </div>`;
    const btn = box.querySelector('.run-btn');
    const out = box.querySelector('.output');
    const wrap = box.querySelector('.run-out');
    const note = box.querySelector('.run-note');
    btn.onclick = async () => {
      btn.disabled = true;
      wrap.classList.remove('hidden');
      out.classList.remove('err');
      out.textContent = '実行中…';
      if (!PyRunner.isReady()) note.textContent = '初回は Python の読み込みに数秒〜十数秒かかります';
      const res = await PyRunner.run(getCode(), '');
      note.textContent = '';
      out.textContent = res.output === '' ? '（出力なし）' : res.output;
      out.classList.toggle('err', res.error);
      btn.disabled = false;
    };
    return box;
  },
};
