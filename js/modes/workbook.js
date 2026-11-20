// =========================================================
// 問題集：公式問題集の問題（official/workbook.js）を解く
//   #/workbook            → 章の一覧
//   #/workbook/ch/3       → 第3章を本の順番で
//   #/workbook/wrong      → 間違えた問題だけ
//   #/workbook/random     → 全章からランダム20問
//   #/workbook/mock       → 総仕上げ問題40問を本番形式（60分）で
// 記録: Store 'workbook' → { ok, ng, last }, Store 'workbookMock' → 模試の結果
// 設定: Store 'settings' 'wbShuffle' → 選択肢をランダムな順番にするか
// =========================================================
(function () {
  const KEYS = 'ABCDE';
  const MOCK_CH = 13;
  const MOCK_MIN = 60;

  App.register('workbook', (root, [mode, arg]) => {
    if (!window.WORKBOOK) return missing(root);
    const Q = WORKBOOK.questions;
    if (mode === 'ch') {
      const ch = +arg;
      return practice(root, Q.filter(q => q.ch === ch), `第${ch}章 ${chTitle(ch)}`);
    }
    if (mode === 'wrong') {
      const list = Q.filter(q => (rec(q).last === false));
      return practice(root, list, '間違えた問題だけ', true);
    }
    if (mode === 'random') {
      return practice(root, U.shuffle(Q).slice(0, 20), '全章からランダム20問');
    }
    if (mode === 'mock') return mock(root, Q.filter(q => q.ch === MOCK_CH));
    return list(root);
  });

  const rec = q => Store.get('workbook', q.id) || {};
  const chTitle = ch => (WORKBOOK.chapters.find(c => c.ch === ch) || {}).title || '';
  const chLabel = ch => ch === MOCK_CH ? chTitle(ch) : `第${ch}章 ${chTitle(ch)}`;
  const hasJa = s => /[ぁ-んァ-ヶ一-龠]/.test(s);

  // ---------------------------------------------------------
  // 選択肢のシャッフル
  //   view(q) は「画面に出す用」の問題を返す。シャッフルONなら選択肢を並べ替え、
  //   answer（正解の記号）も並べ替え後の記号に付け替える。bookAnswer は本の記号。
  // ---------------------------------------------------------
  const isShuffle = () => !!Store.get('settings', 'wbShuffle');
  function view(q) {
    const src = q.src || q;
    if (!isShuffle()) return src;
    const order = U.shuffle(src.choices.map((_, j) => j));
    return {
      ...src, src,
      choices: order.map(j => src.choices[j]),
      answer: KEYS[order.indexOf(KEYS.indexOf(src.answer))],
      bookAnswer: src.answer,
    };
  }
  // 正解の表示（シャッフル中は本での記号も添える）
  const ansLabel = q => `<b>${q.answer}</b>${q.bookAnswer && q.bookAnswer !== q.answer ? `<span class="muted small">（本では ${q.bookAnswer}）</span>` : ''}`;
  // 切り替えスイッチ。onChange があれば切り替え直後に呼ぶ
  function shuffleSwitch(onChange) {
    const label = document.createElement('label');
    label.className = 'wb-switch small';
    label.title = 'ONにすると、選択肢の並び（A〜E）が毎回ランダムになります。記号の位置で答えを覚えてしまうのを防げます。';
    label.innerHTML = `<input type="checkbox" ${isShuffle() ? 'checked' : ''}> 選択肢をシャッフル`;
    label.querySelector('input').onchange = e => {
      Store.set('settings', 'wbShuffle', e.target.checked);
      if (onChange) onChange();
    };
    return label;
  }

  function missing(root) {
    root.innerHTML = `
      <h1 class="page-title">問題集</h1>
      <div class="panel">
        <p style="margin-top:0">問題集のデータ（<code>official/workbook.js</code>）が見つかりません。</p>
        <p class="muted small" style="margin-bottom:0">問題集のデータは著作物なので、GitHub にはアップロードしない設定（.gitignore）にしています。
        別のPCで使うときは、<code>official</code> フォルダごとコピーしてください。</p>
      </div>`;
  }

  // ---------------------------------------------------------
  // 一覧
  // ---------------------------------------------------------
  function list(root) {
    const Q = WORKBOOK.questions;
    const wrong = Q.filter(q => rec(q).last === false).length;
    const mocks = Object.values(Store.all('workbookMock')).sort((a, b) => b.at - a.at);
    const best = mocks.reduce((m, r) => Math.max(m, r.score), 0);

    root.innerHTML = `
      <h1 class="page-title">問題集 <small>公式問題集 全${Q.length}問</small></h1>
      <p class="lead">章ごとに本の順番で解けます。答えると正解と「解説ページの写真」が見られ、コードの問題はその場で実行して確かめられます。</p>
      <div class="row" id="opts" style="margin-bottom:14px"></div>

      <div class="grid wb-actions">
        <a class="mode-card" href="#/workbook/mock">
          <span class="num">本番形式</span>
          <h3>総仕上げ模試</h3>
          <p>総仕上げ問題40問を60分で。最後にまとめて採点（70%で合格）。</p>
          <div class="meta"><span>${mocks.length ? `受験 ${mocks.length}回` : '未受験'}</span><span>${mocks.length ? `ベスト ${best}%` : ''}</span></div>
        </a>
        <a class="mode-card ${wrong ? '' : 'disabled'}" href="${wrong ? '#/workbook/wrong' : '#/workbook'}">
          <span class="num">復習</span>
          <h3>間違えた問題だけ</h3>
          <p>最後に間違えたままの問題を全章から集めて解き直す。</p>
          <div class="meta"><span>${wrong}問</span><span></span></div>
        </a>
        <a class="mode-card" href="#/workbook/random">
          <span class="num">腕だめし</span>
          <h3>ランダム20問</h3>
          <p>全章からランダムに20問。苦手な章を見つけるのに。</p>
          <div class="meta"><span>すぐ採点</span><span></span></div>
        </a>
      </div>

      <h2 class="section-title">章ごとに解く</h2>
      <div class="list" id="chs"></div>
      ${mocks.length ? `<h2 class="section-title">模試の記録</h2>
        <div class="panel"><table class="wb-table">
          <tr><th>日時</th><th>得点</th><th>時間</th><th>判定</th></tr>
          ${mocks.slice(0, 10).map(m => `<tr><td>${new Date(m.at).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
            <td>${m.ok}/${m.total}（${m.score}%）</td><td>${Math.floor(m.sec / 60)}分${m.sec % 60}秒</td>
            <td class="${m.score >= 70 ? 'v-AC' : 'v-RE'}">${m.score >= 70 ? '合格' : '不合格'}</td></tr>`).join('')}
        </table></div>` : ''}
    `;

    const opts = root.querySelector('#opts');
    opts.appendChild(shuffleSwitch());
    opts.insertAdjacentHTML('beforeend', '<span class="muted small">選択肢の並び（A〜E）を毎回ランダムにします。記号の位置で答えを覚えてしまうのを防げます。</span>');

    root.querySelector('#chs').innerHTML = WORKBOOK.chapters.map(c => {
      const items = Q.filter(q => q.ch === c.ch);
      const ok = items.filter(q => rec(q).last === true).length;
      const tried = items.filter(q => rec(q).last !== undefined).length;
      const pct = Math.round(ok / items.length * 100);
      return `<a class="item-card" href="#/workbook/ch/${c.ch}">
        <div class="row"><span class="tag">${c.ch === MOCK_CH ? '総仕上げ' : `第${c.ch}章`}</span>
          ${ok === items.length ? '<span class="tag done">✓ 全問正解</span>' : ''}</div>
        <h4>${U.esc(c.title)}</h4>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <div class="sub">${items.length}問 ・ 正解中 ${ok} ・ 挑戦 ${tried}</div>
      </a>`;
    }).join('');
  }

  // ---------------------------------------------------------
  // 問題の表示（練習・模試で共通）
  // ---------------------------------------------------------
  function questionHtml(q, header) {
    const qText = q.q.split('\n\n');
    return `
      ${header || ''}
      <h3 class="wb-q">${U.esc(qText[0])}<span class="muted small">（1つ選択）</span></h3>
      ${qText.slice(1).map(t => {
        const [title, ...body] = t.split('\n');
        return /^【/.test(title)
          ? `<div class="wb-expect"><div class="output-label">${U.esc(title)}</div><pre class="output">${U.esc(body.join('\n'))}</pre></div>`
          : `<p class="wb-note">${U.esc(t)}</p>`;
      }).join('')}
      ${q.code ? `<div class="wb-code">${U.codeBlock(q.code)}</div>` : ''}
      <div class="choices">
        ${q.choices.map((c, i) => {
          const mono = !hasJa(c);
          return `<button class="choice ${mono ? 'mono' : ''}" data-i="${i}"><span class="key">${KEYS[i]}.</span>${U.esc(c)}</button>`;
        }).join('')}
      </div>`;
  }

  // コードを色付けしてから、【①】の空欄を目立たせる
  function decorate(el) {
    U.highlight(el);
    el.querySelectorAll('.wb-code pre.code code').forEach(c => {
      c.innerHTML = c.innerHTML.replace(/【([①-⑤])】/g, '<span class="wb-blank">$1</span>');
    });
  }

  // 実行してよいコードか（入力・ファイル・自作モジュールなどを使うものは除く）
  function runnable(code) {
    return code && !/^#|input\(|open\(|argparse|import mod\b|sys\.argv|unittest|from calc|【ディレクトリ/.test(code);
  }

  // 空欄に選択肢を入れたコードを作る（①〜⑤の組み合わせにも対応）
  function fillBlanks(code, choice) {
    const blanks = code.match(/【[①-⑤]】/g) || [];
    if (!blanks.length) return null;
    let parts;
    if (blanks.length === 1 && !/^[①-⑤]/.test(choice)) parts = { '①': choice };
    else {
      parts = {};
      const re = /([①-⑤])\s*([\s\S]*?)(?=\s*[①-⑤]|$)/g;
      let m;
      while ((m = re.exec(choice))) parts[m[1]] = m[2].replace(/　+$/, '').trim();
    }
    let out = code;
    for (const b of blanks) {
      const k = b[1];
      if (parts[k] === undefined) return null;
      // 空欄が行頭にあるときは、選択肢が複数行でもインデントをそろえる
      out = out.replace(new RegExp('^([ \\t]*)' + b + '$|' + b, 'm'), (all, ind) => {
        const v = parts[k];
        return ind !== undefined ? v.split('\n').map(l => ind + l).join('\n') : v;
      });
    }
    return out;
  }

  function photos(q) {
    const box = document.createElement('div');
    box.className = 'wb-photos';
    box.innerHTML = `
      <button class="btn ghost sm">📖 解説ページの写真を見る（${q.ansPages.length}枚）</button>
      <div class="wb-photo-list hidden"></div>`;
    const btn = box.querySelector('button');
    const listEl = box.querySelector('.wb-photo-list');
    btn.onclick = () => {
      const open = listEl.classList.toggle('hidden');
      btn.textContent = open ? `📖 解説ページの写真を見る（${q.ansPages.length}枚）` : '📖 写真を閉じる';
      if (!listEl.dataset.loaded) {
        listEl.innerHTML = q.ansPages.map(p => `<a href="official/answers/${p}" target="_blank" rel="noopener">
          <img loading="lazy" src="official/answers/${p}" alt="解説ページ ${p}"></a>`).join('');
        listEl.dataset.loaded = '1';
      }
      if (!open) listEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    return box;
  }

  // 正誤の後に出す「解説」エリア
  function feedback(q, picked) {
    const correct = KEYS.indexOf(q.answer);
    const ok = picked === correct;
    const fb = document.createElement('div');
    fb.innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ng'}">
        <h4>${ok ? '正解！' : '不正解…'}　正解は ${ansLabel(q)}</h4>
        <p class="muted small">問題集 ${chLabel(q.ch)} 問${q.no}（p.${q.page}）</p>
      </div>`;
    if (runnable(q.code)) {
      const filled = fillBlanks(q.code, q.choices[picked]);
      if (filled !== null) {
        fb.appendChild(U.runnerBox(() => fillBlanks(q.code, q.choices[picked]), `▶ あなたの答え（${KEYS[picked]}）を入れて実行`));
        if (!ok) fb.appendChild(U.runnerBox(() => fillBlanks(q.code, q.choices[correct]), `▶ 正解（${q.answer}）を入れて実行`));
      } else if (!/【/.test(q.code)) {
        fb.appendChild(U.runnerBox(() => q.code));
      }
    }
    fb.appendChild(photos(q));
    U.highlight(fb);
    return fb;
  }

  function choiceKeys(container) {
    return e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const map = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, a: 0, b: 1, c: 2, d: 3, e: 4 };
      const k = e.key.toLowerCase();
      if (k in map) {
        const btns = container.querySelectorAll('.choice:not(:disabled)');
        if (btns[map[k]]) btns[map[k]].click();
      }
    };
  }

  // ---------------------------------------------------------
  // 練習モード（1問ずつすぐ答え合わせ）
  // ---------------------------------------------------------
  function practice(root, questions, title, isReview) {
    PyRunner.warmup();
    if (!questions.length) {
      root.innerHTML = `<a href="#/workbook" class="btn ghost sm">← 問題集</a>
        <div class="panel" style="margin-top:12px;text-align:center"><p>${isReview ? '間違えた問題はありません 🎉' : '問題がありません'}</p></div>`;
      return;
    }
    let i = 0;
    const results = [];
    root.innerHTML = `
      <div class="row" style="margin-bottom:8px">
        <a href="#/workbook" class="btn ghost sm">← 問題集</a>
        <span class="tag">${U.esc(title)}</span>
        <span class="spacer"></span>
      </div>
      <div class="panel" id="stage"></div>`;
    const stage = root.querySelector('#stage');
    let answered = false;
    // 解答前なら、切り替えた瞬間に今の問題を並べ直す
    root.querySelector('.row').appendChild(shuffleSwitch(() => { if (!answered) draw(); }));

    function draw() {
      if (i >= questions.length) return finish();
      const q = view(questions[i]);
      answered = false;
      const r = rec(q);
      const header = `
        <div class="row small muted" style="margin-bottom:8px">
          <span>${i + 1} / ${questions.length}</span>
          <span class="tag">${U.esc(chLabel(q.ch))} 問${q.no}</span>
          ${r.last === true ? '<span class="tag done">前回 ○</span>' : r.last === false ? '<span class="tag wb-ng">前回 ×</span>' : ''}
          <span class="spacer"></span>
          <span>正解 ${results.filter(x => x.ok).length}</span>
        </div>
        <div class="progress" style="margin-bottom:14px"><span style="width:${i / questions.length * 100}%"></span></div>`;
      stage.innerHTML = questionHtml(q, header) + '<div id="fb"></div>';
      decorate(stage);
      stage.querySelectorAll('.choice').forEach(btn => {
        btn.onclick = () => {
          const picked = +btn.dataset.i;
          answered = true;
          const correct = KEYS.indexOf(q.answer);
          const ok = picked === correct;
          stage.querySelectorAll('.choice').forEach(b => {
            b.disabled = true;
            if (+b.dataset.i === correct) b.classList.add('correct');
          });
          if (!ok) btn.classList.add('wrong');
          results.push({ q, ok, picked });
          Store.update('workbook', q.id, r => ({ ...r, last: ok, ok: (r.ok || 0) + (ok ? 1 : 0), ng: (r.ng || 0) + (ok ? 0 : 1) }));
          const fbBox = stage.querySelector('#fb');
          fbBox.appendChild(feedback(q, picked));
          const nav = document.createElement('div');
          nav.className = 'row';
          nav.style.marginTop = '14px';
          nav.innerHTML = `<span class="spacer"></span><button class="btn accent">${i + 1 < questions.length ? '次へ →' : '結果を見る'}</button>`;
          fbBox.appendChild(nav);
          const next = nav.querySelector('button');
          next.focus({ preventScroll: true });
          next.onclick = () => { i++; draw(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        };
      });
    }

    function finish() {
      const ok = results.filter(r => r.ok).length;
      const pct = Math.round(ok / results.length * 100);
      const wrong = results.filter(r => !r.ok);
      stage.innerHTML = `
        <div style="text-align:center">
          <div class="score-big ${pct >= 70 ? 'pass' : 'fail'}">${pct}%</div>
          <p>${results.length}問中 ${ok}問 正解</p>
        </div>
        ${wrong.length ? `<h3 style="font-size:15px">間違えた問題</h3><ul class="wb-wrong">
          ${wrong.map(w => `<li>${U.esc(chLabel(w.q.ch))} 問${w.q.no}：あなた ${KEYS[w.picked]} → 正解 ${ansLabel(w.q)}</li>`).join('')}</ul>` : ''}
        <div class="row" style="justify-content:center;margin-top:16px">
          <a class="btn" href="#/workbook">問題集に戻る</a>
          ${wrong.length ? '<button class="btn accent" id="retry">間違えた問題だけもう一度</button>' : ''}
        </div>`;
      const retry = stage.querySelector('#retry');
      if (retry) retry.onclick = () => practice(root, wrong.map(w => w.q), title + '（解き直し）');
    }

    const onKey = choiceKeys(stage);
    document.addEventListener('keydown', onKey);
    draw();
    return () => document.removeEventListener('keydown', onKey);
  }

  // ---------------------------------------------------------
  // 模試モード（40問・60分・最後に採点）
  // ---------------------------------------------------------
  function mock(root, questions) {
    const answers = new Array(questions.length).fill(null);
    const flags = new Set();
    let i = 0;
    let started = 0, timer = null, finished = false;

    root.innerHTML = `
      <div class="row" style="margin-bottom:8px"><a href="#/workbook" class="btn ghost sm">← 問題集</a><span class="tag">総仕上げ模試</span></div>
      <div class="panel" id="intro" style="text-align:center">
        <h2 style="margin-top:0">総仕上げ模試</h2>
        <p>全${questions.length}問 ・ 制限時間${MOCK_MIN}分 ・ 正答率70%（${Math.ceil(questions.length * 0.7)}問）以上で合格</p>
        <p class="muted small">途中で答え合わせはありません。問題番号から自由に移動でき、あとで見直したい問題には「見直し」印を付けられます。</p>
        <div class="row" id="mock-opts" style="justify-content:center;margin-bottom:12px"></div>
        <button class="btn accent" id="go">スタート</button>
      </div>
      <div id="exam" class="hidden">
        <div class="panel wb-bar">
          <div class="row">
            <b id="clock" class="wb-clock">60:00</b>
            <span class="muted small" id="done-count"></span>
            <span class="spacer"></span>
            <button class="btn sm" id="submit">提出して採点</button>
          </div>
          <div class="wb-grid" id="grid"></div>
        </div>
        <div class="panel" id="stage"></div>
      </div>`;
    const stage = root.querySelector('#stage');
    const grid = root.querySelector('#grid');
    const clock = root.querySelector('#clock');
    root.querySelector('#mock-opts').appendChild(shuffleSwitch());

    root.querySelector('#go').onclick = () => {
      // 選択肢の並びはスタート時に決めて、試験中は変えない
      questions = questions.map(view);
      root.querySelector('#intro').classList.add('hidden');
      root.querySelector('#exam').classList.remove('hidden');
      started = Date.now();
      timer = setInterval(tick, 500);
      tick(); draw();
    };

    function tick() {
      const left = Math.max(0, MOCK_MIN * 60 - Math.floor((Date.now() - started) / 1000));
      clock.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
      clock.classList.toggle('warn', left <= 300);
      if (left === 0 && !finished) { alert('時間になりました。採点します。'); grade(); }
    }

    function drawGrid() {
      grid.innerHTML = questions.map((q, k) =>
        `<button class="wb-num ${answers[k] !== null ? 'answered' : ''} ${k === i ? 'cur' : ''} ${flags.has(k) ? 'flag' : ''}" data-k="${k}">${k + 1}</button>`).join('');
      root.querySelector('#done-count').textContent = `回答済み ${answers.filter(a => a !== null).length} / ${questions.length}`;
    }
    grid.onclick = e => { const b = e.target.closest('.wb-num'); if (b) { i = +b.dataset.k; draw(); } };

    function draw() {
      const q = questions[i];
      stage.innerHTML = questionHtml(q, `<div class="row small muted" style="margin-bottom:8px"><span>問${i + 1}</span></div>`) + `
        <div class="row" style="margin-top:16px">
          <button class="btn" id="prev" ${i === 0 ? 'disabled' : ''}>← 前へ</button>
          <button class="btn ghost" id="flag">${flags.has(i) ? '★ 見直し印を外す' : '☆ 見直し印'}</button>
          <span class="spacer"></span>
          <button class="btn primary" id="next">${i + 1 < questions.length ? '次へ →' : '最後の問題です'}</button>
        </div>`;
      decorate(stage);
      stage.querySelectorAll('.choice').forEach(b => {
        if (answers[i] === +b.dataset.i) b.classList.add('picked');
        b.onclick = () => {
          answers[i] = +b.dataset.i;
          stage.querySelectorAll('.choice').forEach(x => x.classList.toggle('picked', x === b));
          drawGrid();
        };
      });
      stage.querySelector('#prev').onclick = () => { i--; draw(); };
      stage.querySelector('#next').onclick = () => { if (i + 1 < questions.length) { i++; draw(); } };
      stage.querySelector('#flag').onclick = () => { flags.has(i) ? flags.delete(i) : flags.add(i); draw(); };
      drawGrid();
    }

    root.querySelector('#submit').onclick = () => {
      const blank = answers.filter(a => a === null).length;
      if (confirm(blank ? `未回答が${blank}問あります。提出して採点しますか？` : '提出して採点しますか？')) grade();
    };

    function grade() {
      finished = true;
      clearInterval(timer);
      const sec = Math.floor((Date.now() - started) / 1000);
      const res = questions.map((q, k) => ({ q, picked: answers[k], ok: answers[k] === KEYS.indexOf(q.answer) }));
      const ok = res.filter(r => r.ok).length;
      const score = Math.round(ok / questions.length * 100);
      res.forEach(r => Store.update('workbook', r.q.id, x => ({ ...x, last: r.ok, ok: (x.ok || 0) + (r.ok ? 1 : 0), ng: (x.ng || 0) + (r.ok ? 0 : 1) })));
      const at = Date.now();
      Store.set('workbookMock', String(at), { at, ok, total: questions.length, score, sec });

      root.querySelector('#exam').innerHTML = `
        <div class="panel" style="text-align:center">
          <div class="score-big ${score >= 70 ? 'pass' : 'fail'}">${score}%</div>
          <p>${questions.length}問中 ${ok}問 正解 ・ ${Math.floor(sec / 60)}分${sec % 60}秒 ・ <b class="${score >= 70 ? 'v-AC' : 'v-RE'}">${score >= 70 ? '合格ライン突破！' : '不合格（合格は70%）'}</b></p>
          <div class="row" style="justify-content:center">
            <a class="btn" href="#/workbook">問題集に戻る</a>
            ${ok < questions.length ? '<button class="btn accent" id="retry">間違えた問題を練習モードで解き直す</button>' : ''}
          </div>
        </div>
        <div class="panel">
          <h3 style="margin-top:0;font-size:15px">見直し（タップで問題と解説）</h3>
          <div id="review"></div>
        </div>`;
      const review = root.querySelector('#review');
      review.innerHTML = res.map((r, k) => `
        <details class="explain wb-review" data-k="${k}">
          <summary><span class="${r.ok ? 'v-AC' : 'v-RE'}">${r.ok ? '○' : '×'}</span> 問${k + 1}　あなた：${r.picked === null ? '未回答' : KEYS[r.picked]}　正解：${ansLabel(r.q)}</summary>
          <div class="body"></div>
        </details>`).join('');
      review.querySelectorAll('details').forEach(d => {
        d.addEventListener('toggle', () => {
          if (!d.open || d.dataset.loaded) return;
          d.dataset.loaded = '1';
          const r = res[+d.dataset.k];
          const body = d.querySelector('.body');
          body.innerHTML = questionHtml(r.q, '');
          decorate(body);
          body.querySelectorAll('.choice').forEach(b => {
            b.disabled = true;
            if (+b.dataset.i === KEYS.indexOf(r.q.answer)) b.classList.add('correct');
            else if (+b.dataset.i === r.picked) b.classList.add('wrong');
          });
          body.appendChild(feedback(r.q, r.picked === null ? KEYS.indexOf(r.q.answer) : r.picked));
          body.querySelector('.feedback').remove();
        });
      });
      const retry = root.querySelector('#retry');
      if (retry) retry.onclick = () => practice(root, res.filter(r => !r.ok).map(r => r.q), '模試の解き直し');
      window.scrollTo({ top: 0 });
    }

    const onKey = e => { if (!finished && started) choiceKeys(stage)(e); };
    document.addEventListener('keydown', onKey);
    const onLeave = e => { if (started && !finished) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', onLeave);
    return () => {
      clearInterval(timer);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('beforeunload', onLeave);
    };
  }
})();
