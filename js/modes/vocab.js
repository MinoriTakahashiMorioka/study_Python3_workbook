// =========================================================
// 単語帳：フラッシュカード / 4択クイズ（用語→意味、意味→用語）
// 記録: Store 'vocab' → { mastered, ok, ng, streak }
// =========================================================
App.register('vocab', root => {
  const selected = new Set();
  let mode = 'card';        // card | quiz | rquiz
  let onlyNew = false;
  let deck = [];
  let idx = 0;
  let sessionOk = 0, sessionNg = 0;

  root.innerHTML = `
    <h1 class="page-title">単語帳 <small>用語・関数・メソッドの意味を覚える</small></h1>
    <p class="lead">カードをタップすると裏返ります。4択クイズで2回連続正解すると「習得」になります。</p>
    <div class="panel">
      <div id="chips"></div>
      <div class="row" style="margin-top:12px">
        <div class="chips" id="modes">
          <button class="chip" data-m="card">カード</button>
          <button class="chip" data-m="quiz">4択（用語→意味）</button>
          <button class="chip" data-m="rquiz">4択（意味→用語）</button>
        </div>
        <span class="spacer"></span>
        <label class="small muted"><input type="checkbox" id="only-new"> 未習得のみ</label>
      </div>
    </div>
    <div class="panel" id="stage"></div>
  `;
  const stage = root.querySelector('#stage');
  const modesEl = root.querySelector('#modes');

  const rec = id => Store.get('vocab', id) || {};

  function buildDeck() {
    let items = VOCAB.filter(v => selected.size === 0 || selected.has(v.cat));
    if (onlyNew) items = items.filter(v => !rec(v.id).mastered);
    deck = U.shuffle(items);
    idx = 0; sessionOk = 0; sessionNg = 0;
    modesEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.m === mode));
    draw();
  }

  function header() {
    const mastered = deck.filter(v => rec(v.id).mastered).length;
    return `<div class="row small muted" style="margin-bottom:10px">
      <span>${Math.min(idx + 1, deck.length)} / ${deck.length}</span>
      <span class="spacer"></span>
      <span>この中の習得済み ${mastered}語</span>
    </div>
    <div class="progress" style="margin-bottom:16px"><span style="width:${deck.length ? idx / deck.length * 100 : 0}%"></span></div>`;
  }

  function finish() {
    stage.innerHTML = `
      <div style="text-align:center;padding:20px 0">
        <h2 style="margin:0 0 8px">おつかれさま！</h2>
        ${mode === 'card' ? `<p class="muted">覚えた ${sessionOk} ／ まだ ${sessionNg}</p>`
          : `<p class="muted">正解 ${sessionOk} ／ 不正解 ${sessionNg}</p>`}
        <div class="row" style="justify-content:center;margin-top:14px">
          <button class="btn primary" id="again">もう一周</button>
          <button class="btn" id="new-only">未習得だけでもう一周</button>
        </div>
      </div>`;
    stage.querySelector('#again').onclick = buildDeck;
    stage.querySelector('#new-only').onclick = () => {
      onlyNew = true; root.querySelector('#only-new').checked = true; buildDeck();
    };
  }

  function draw() {
    if (deck.length === 0) {
      stage.innerHTML = `<p class="muted" style="text-align:center">該当する単語がありません（全部習得済みかも！）</p>`;
      return;
    }
    if (idx >= deck.length) return finish();
    if (mode === 'card') drawCard(); else drawQuiz(mode === 'rquiz');
  }

  function drawCard() {
    const v = deck[idx];
    const r = rec(v.id);
    stage.innerHTML = header() + `
      <div class="flash" id="flash">
        <span class="tag">${U.esc(U.catName(v.cat))}</span>
        <div class="term">${U.esc(v.term)}</div>
        <div class="back hidden">
          <div class="meaning">${U.esc(v.meaning)}</div>
          ${v.ex ? `<div style="margin-top:12px">${U.codeBlock(v.ex)}</div>` : ''}
        </div>
        <div class="hint">${r.mastered ? '✓ 習得済み ・ ' : ''}タップで裏返す</div>
      </div>
      <div class="row" style="justify-content:center;margin-top:16px">
        <button class="btn bad" id="ng">✗ まだ</button>
        <button class="btn good" id="ok">✓ 覚えた</button>
      </div>`;
    const flash = stage.querySelector('#flash');
    flash.onclick = () => { flash.querySelector('.back').classList.toggle('hidden'); U.highlight(stage); };
    stage.querySelector('#ok').onclick = () => {
      Store.update('vocab', v.id, r => ({ ...r, mastered: true, ok: (r.ok || 0) + 1 }));
      sessionOk++; idx++; draw();
    };
    stage.querySelector('#ng').onclick = () => {
      Store.update('vocab', v.id, r => ({ ...r, mastered: false, streak: 0, ng: (r.ng || 0) + 1 }));
      sessionNg++; idx++; draw();
    };
  }

  function drawQuiz(reverse) {
    const v = deck[idx];
    // 同じ章からなるべく選択肢を作る
    const sameCat = U.shuffle(VOCAB.filter(x => x.id !== v.id && x.cat === v.cat));
    const others = U.shuffle(VOCAB.filter(x => x.id !== v.id && x.cat !== v.cat));
    const wrongs = sameCat.concat(others).slice(0, 3);
    const options = U.shuffle([v, ...wrongs]);
    const label = x => reverse ? x.term : x.meaning;

    stage.innerHTML = header() + `
      <div style="text-align:center">
        <span class="tag">${U.esc(U.catName(v.cat))}</span>
        <div class="${reverse ? '' : 'term'}" style="margin:12px 0;${reverse ? 'font-size:17px' : 'font-family:var(--mono);font-size:26px;color:var(--yellow);font-weight:600'}">
          ${U.esc(reverse ? v.meaning : v.term)}
        </div>
        <div class="muted small">${reverse ? 'この説明に当てはまる用語は？' : 'この用語の意味は？'}</div>
      </div>
      <div class="choices">
        ${options.map((o, i) => `<button class="choice ${reverse ? 'mono' : ''}" data-id="${o.id}"><span class="key">${'ABCD'[i]}</span>${U.esc(label(o))}</button>`).join('')}
      </div>
      <div id="fb"></div>`;

    stage.querySelectorAll('.choice').forEach(btn => {
      btn.onclick = () => {
        const correct = btn.dataset.id === v.id;
        stage.querySelectorAll('.choice').forEach(b => {
          b.disabled = true;
          if (b.dataset.id === v.id) b.classList.add('correct');
        });
        if (!correct) btn.classList.add('wrong');
        Store.update('vocab', v.id, r => {
          const streak = correct ? (r.streak || 0) + 1 : 0;
          return {
            ...r, streak,
            ok: (r.ok || 0) + (correct ? 1 : 0),
            ng: (r.ng || 0) + (correct ? 0 : 1),
            mastered: correct ? (r.mastered || streak >= 2) : false,
          };
        });
        correct ? sessionOk++ : sessionNg++;
        const fb = stage.querySelector('#fb');
        fb.innerHTML = `
          <div class="feedback ${correct ? 'ok' : 'ng'}">
            <h4>${correct ? '正解！' : '不正解…'}</h4>
            <p><b style="font-family:var(--mono)">${U.esc(v.term)}</b>：${U.esc(v.meaning)}</p>
            ${v.ex ? `<div style="margin-top:10px">${U.codeBlock(v.ex)}</div>` : ''}
          </div>
          <div class="row" style="margin-top:12px;justify-content:flex-end">
            <button class="btn primary" id="next">次へ →</button>
          </div>`;
        U.highlight(fb);
        const next = fb.querySelector('#next');
        next.focus();
        next.onclick = () => { idx++; draw(); };
      };
    });
  }

  U.renderChips(root.querySelector('#chips'), U.catsOf(VOCAB), selected, buildDeck);
  modesEl.onclick = e => {
    const b = e.target.closest('.chip');
    if (b) { mode = b.dataset.m; buildDeck(); }
  };
  root.querySelector('#only-new').onchange = e => { onlyNew = e.target.checked; buildDeck(); };

  // キーボード操作：1〜4 / A〜D で選択、Enter で次へ、Space でカードを裏返す
  const onKey = e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key.toLowerCase();
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
    if (k in map) {
      const btns = stage.querySelectorAll('.choice:not(:disabled)');
      if (btns[map[k]]) btns[map[k]].click();
    } else if (k === ' ' && mode === 'card') {
      e.preventDefault(); const f = stage.querySelector('#flash'); if (f) f.click();
    }
  };
  document.addEventListener('keydown', onKey);

  buildDeck();
  return () => document.removeEventListener('keydown', onKey);
});
