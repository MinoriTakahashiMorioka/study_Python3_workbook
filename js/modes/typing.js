// =========================================================
// 写経（タイピング）：お手本と同じコードを打ち込む
// 記録: Store 'typing' → { best(秒), plays, bestAcc }
// =========================================================
(function () {
App.register('typing', (root, [id]) => {
  if (!id) return renderList(root);
  const item = TYPING.find(t => t.id === id);
  if (!item) return renderList(root);
  return renderPlay(root, item);
});

function renderList(root) {
  const selected = new Set();
  root.innerHTML = `
    <h1 class="page-title">写経（タイピング） <small>打ち込んで手で覚える</small></h1>
    <p class="lead">お手本のコードをそのまま打ち込みます。打ち終わったら実行して動きを確認し、「何をしているコードか」の解説を読みましょう。</p>
    <div class="panel" style="margin-bottom:16px"><div id="chips"></div></div>
    <div class="list" id="list"></div>`;
  const draw = () => {
    const items = TYPING.filter(t => selected.size === 0 || selected.has(t.cat));
    root.querySelector('#list').innerHTML = items.map(t => {
      const r = Store.get('typing', t.id);
      return `<a class="item-card" href="#/typing/${t.id}">
        <div class="row"><span class="tag">${U.esc(U.catName(t.cat))}</span>${r && r.best ? `<span class="tag done">✓ ベスト ${r.best}秒</span>` : ''}</div>
        <h4>${U.esc(t.title)}</h4>
        <div class="sub">${t.code.split('\n').length}行 ・ ${t.code.length}文字</div>
      </a>`;
    }).join('');
  };
  U.renderChips(root.querySelector('#chips'), U.catsOf(TYPING), selected, draw);
  draw();
}

function renderPlay(root, item) {
  PyRunner.warmup();
  const target = item.code.replace(/\s+$/, '');
  const pos = TYPING.indexOf(item);
  const next = TYPING[pos + 1];

  root.innerHTML = `
    <div class="row" style="margin-bottom:8px">
      <a href="#/typing" class="btn ghost sm">← 一覧</a>
      <span class="tag">${U.esc(U.catName(item.cat))}</span>
    </div>
    <h1 class="page-title">${U.esc(item.title)}</h1>
    <div class="panel">
      <div class="stats" style="margin-bottom:10px">
        <span>時間<b id="time">0.0</b>秒</span>
        <span>ミス<b id="miss">0</b></span>
        <span>進捗<b id="prog">0</b>%</span>
        <span class="spacer"></span>
        <span class="small"><span class="kbd">Tab</span> 4スペース ・ <span class="kbd">Enter</span> 自動インデント ・ <span class="kbd">BS</span> インデントを戻す</span>
      </div>
      <pre class="typing-target" id="target"></pre>
      <div class="output-label">ここに入力 ↓</div>
      <textarea class="code-input" id="input" placeholder="上のコードと同じように打ち込もう（クリックしてスタート）"></textarea>
      <div class="row" style="margin-top:10px">
        <button class="btn ghost sm" id="retry">↺ 最初から</button>
        <span class="spacer"></span>
        <label class="small muted"><input type="checkbox" id="autoindent" checked> 自動インデント</label>
      </div>
    </div>
    <div class="panel hidden" id="done"></div>
    <details class="explain panel" id="explain">
      <summary>このコードは何をしている？（先に読んでもOK）</summary>
      <div class="body">${U.esc(item.explain)}</div>
    </details>
  `;

  const targetEl = root.querySelector('#target');
  const input = root.querySelector('#input');
  const timeEl = root.querySelector('#time');
  const missEl = root.querySelector('#miss');
  const progEl = root.querySelector('#prog');
  const doneEl = root.querySelector('#done');
  let editorOpts = { noAutoIndent: false };
  U.attachEditor(input, editorOpts);
  root.querySelector('#autoindent').onchange = e => { editorOpts.noAutoIndent = !e.target.checked; input.focus(); };

  // お手本を1文字ずつ span にする
  targetEl.innerHTML = [...target].map(ch => {
    if (ch === '\n') return '<span class="nl">↵\n</span>';
    if (ch === ' ') return '<span class="sp"> </span>';
    return `<span>${U.esc(ch)}</span>`;
  }).join('') + '<span class="end"> </span>';
  const spans = targetEl.querySelectorAll('span');

  let startAt = 0, timer = null, misses = 0, keystrokes = 0, prev = '', finished = false;

  function paint() {
    const typed = input.value;
    let correctPrefix = 0;
    spans.forEach((sp, i) => {
      sp.classList.remove('ok', 'ng', 'cur');
      if (i < typed.length && i < target.length) {
        const good = typed[i] === target[i];
        sp.classList.add(good ? 'ok' : 'ng');
        if (good && correctPrefix === i) correctPrefix++;
      } else if (i === typed.length) {
        sp.classList.add('cur');
      }
    });
    progEl.textContent = Math.floor(correctPrefix / target.length * 100);
    const cur = targetEl.querySelector('.cur');
    if (cur) {
      const top = cur.offsetTop - targetEl.offsetTop;
      if (top > targetEl.scrollTop + targetEl.clientHeight - 30 || top < targetEl.scrollTop) targetEl.scrollTop = top - 40;
    }
  }

  input.addEventListener('input', () => {
    if (finished) return;
    const v = input.value;
    if (!startAt && v.length) {
      startAt = performance.now();
      timer = setInterval(() => { timeEl.textContent = ((performance.now() - startAt) / 1000).toFixed(1); }, 100);
    }
    // 増えた文字だけミス判定
    if (v.length > prev.length && v.startsWith(prev)) {
      for (let i = prev.length; i < v.length; i++) {
        keystrokes++;
        if (v[i] !== target[i]) misses++;
      }
    } else if (v.length > prev.length) {
      keystrokes += v.length - prev.length;
    }
    prev = v;
    missEl.textContent = misses;
    paint();
    if (v.replace(/\s+$/, '') === target) complete();
  });

  function complete() {
    finished = true;
    clearInterval(timer);
    const sec = Math.round((performance.now() - startAt) / 100) / 10;
    const acc = keystrokes ? Math.max(0, Math.round((1 - misses / keystrokes) * 100)) : 100;
    const before = Store.get('typing', item.id) || {};
    const isBest = !before.best || sec < before.best;
    Store.update('typing', item.id, r => ({
      ...r, plays: (r.plays || 0) + 1,
      best: isBest ? sec : r.best,
      bestAcc: Math.max(r.bestAcc || 0, acc),
    }));
    input.readOnly = true;
    doneEl.classList.remove('hidden');
    doneEl.innerHTML = `
      <h2 style="margin:0 0 6px">完走！ ${isBest ? '🎉 自己ベスト' : ''}</h2>
      <div class="stats"><span>タイム<b>${sec}</b>秒</span><span>正確さ<b>${acc}</b>%</span><span>ミス<b>${misses}</b></span>
      ${before.best ? `<span>前回までのベスト<b>${before.best}</b>秒</span>` : ''}</div>
      <div id="run"></div>
      <div class="row" style="margin-top:14px">
        <button class="btn" id="again">もう一度</button>
        <span class="spacer"></span>
        ${next ? `<a class="btn accent" href="#/typing/${next.id}">次のコードへ →</a>` : `<a class="btn" href="#/typing">一覧へ</a>`}
      </div>`;
    doneEl.querySelector('#run').appendChild(U.runnerBox(() => target, '▶ このコードを実行'));
    doneEl.querySelector('#again').onclick = reset;
    root.querySelector('#explain').open = true;
    doneEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function reset() {
    clearInterval(timer);
    startAt = 0; misses = 0; keystrokes = 0; prev = ''; finished = false;
    input.value = ''; input.readOnly = false;
    timeEl.textContent = '0.0'; missEl.textContent = '0';
    doneEl.classList.add('hidden');
    paint();
    input.focus();
  }
  root.querySelector('#retry').onclick = reset;

  paint();
  return () => clearInterval(timer);
}
})();
