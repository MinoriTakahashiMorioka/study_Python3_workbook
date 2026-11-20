// =========================================================
// コード読解：本番と同じ4択形式。「出力は？」「何をしている？」
// 記録: Store 'reading' → { ok, ng, last(true/false) }
// =========================================================
(function () {
  App.register('reading', root => {
    const selected = new Set();
    let count = 10;
    let onlyWrong = false;

    root.innerHTML = `
      <h1 class="page-title">コード読解 <small>本番形式の4択</small></h1>
      <p class="lead">コードを読んで答えを選ぼう。回答後は「実行して確かめる」で本当の出力を確認できます。正答率70%が合格ライン。</p>
      <div class="panel" id="setup">
        <div id="chips"></div>
        <div class="row" style="margin-top:14px">
          <span class="small muted">出題数</span>
          <div class="chips" id="counts">
            ${[10, 20, 40, 0].map(n => `<button class="chip" data-n="${n}">${n ? n + '問' : '全部'}</button>`).join('')}
          </div>
          <span class="spacer"></span>
          <label class="small muted"><input type="checkbox" id="only-wrong"> 間違えた問題だけ</label>
        </div>
        <div class="row" style="margin-top:16px">
          <span class="muted small" id="pool"></span>
          <span class="spacer"></span>
          <button class="btn accent" id="start">スタート</button>
        </div>
      </div>
      <div class="panel hidden" id="quiz"></div>`;

    const pool = () => READING.filter(q =>
      (selected.size === 0 || selected.has(q.cat)) &&
      (!onlyWrong || (Store.get('reading', q.id) || {}).last === false));

    const refresh = () => {
      root.querySelectorAll('#counts .chip').forEach(c => c.classList.toggle('on', +c.dataset.n === count));
      const p = pool();
      const ok = p.filter(q => (Store.get('reading', q.id) || {}).last === true).length;
      root.querySelector('#pool').textContent = `対象 ${p.length}問（うち正解中 ${ok}問）`;
    };
    U.renderChips(root.querySelector('#chips'), U.catsOf(READING), selected, refresh);
    root.querySelector('#counts').onclick = e => { const b = e.target.closest('.chip'); if (b) { count = +b.dataset.n; refresh(); } };
    root.querySelector('#only-wrong').onchange = e => { onlyWrong = e.target.checked; refresh(); };
    root.querySelector('#start').onclick = () => {
      const p = U.shuffle(pool());
      if (!p.length) { alert('対象の問題がありません'); return; }
      startQuiz(root, count ? p.slice(0, count) : p);
    };
    refresh();
  });

  function startQuiz(root, questions) {
    PyRunner.warmup();
    const setup = root.querySelector('#setup');
    const quiz = root.querySelector('#quiz');
    setup.classList.add('hidden');
    quiz.classList.remove('hidden');
    let i = 0;
    const results = []; // {q, correct}

    function draw() {
      if (i >= questions.length) return finish();
      const q = questions[i];
      const order = U.shuffle(q.choices.map((c, idx) => idx));
      quiz.innerHTML = `
        <div class="row small muted" style="margin-bottom:8px">
          <span>第 ${i + 1} 問 / ${questions.length}</span>
          <span class="tag">${U.esc(U.catName(q.cat))}</span>
          <span class="spacer"></span>
          <span>正解 ${results.filter(r => r.correct).length}</span>
        </div>
        <div class="progress" style="margin-bottom:16px"><span style="width:${i / questions.length * 100}%"></span></div>
        ${q.code ? U.codeBlock(q.code) : ''}
        <h3 style="margin:16px 0 0;font-size:16px">${U.esc(q.q)}</h3>
        <div class="choices">
          ${order.map((idx, k) => `<button class="choice ${q.monoChoices === false ? '' : 'mono'}" data-idx="${idx}"><span class="key">${'ABCD'[k]}</span>${U.esc(q.choices[idx])}</button>`).join('')}
        </div>
        <div id="fb"></div>`;
      U.highlight(quiz);

      quiz.querySelectorAll('.choice').forEach(btn => {
        btn.onclick = () => {
          const correct = +btn.dataset.idx === q.answer;
          quiz.querySelectorAll('.choice').forEach(b => {
            b.disabled = true;
            if (+b.dataset.idx === q.answer) b.classList.add('correct');
          });
          if (!correct) btn.classList.add('wrong');
          results.push({ q, correct });
          Store.update('reading', q.id, r => ({
            ...r, last: correct,
            ok: (r.ok || 0) + (correct ? 1 : 0),
            ng: (r.ng || 0) + (correct ? 0 : 1),
          }));
          const fb = quiz.querySelector('#fb');
          fb.innerHTML = `<div class="feedback ${correct ? 'ok' : 'ng'}">
            <h4>${correct ? '正解！' : '不正解…'}</h4><p>${U.esc(q.explain)}</p></div>`;
          if (q.code && !q.noRun) fb.appendChild(U.runnerBox(() => q.code));
          const nav = document.createElement('div');
          nav.className = 'row';
          nav.style.marginTop = '14px';
          nav.innerHTML = `<span class="spacer"></span><button class="btn accent" id="next">${i + 1 < questions.length ? '次へ →' : '結果を見る'}</button>`;
          fb.appendChild(nav);
          const nextBtn = nav.querySelector('#next');
          nextBtn.focus({ preventScroll: true });
          nextBtn.onclick = () => { i++; draw(); window.scrollTo({ top: quiz.offsetTop - 70, behavior: 'smooth' }); };
        };
      });
    }

    function finish() {
      const ok = results.filter(r => r.correct).length;
      const pct = Math.round(ok / results.length * 100);
      const wrong = results.filter(r => !r.correct);
      quiz.innerHTML = `
        <div style="text-align:center">
          <div class="score-big ${pct >= 70 ? 'pass' : 'fail'}">${pct}%</div>
          <p>${results.length}問中 ${ok}問 正解 ・ ${pct >= 70 ? '合格ライン（70%）クリア！' : 'あと少し！合格ラインは70%'}</p>
        </div>
        ${wrong.length ? `<h3 style="font-size:15px">間違えた問題</h3>
          ${wrong.map(({ q }) => `<details class="explain"><summary>${U.esc(q.q)}（${U.esc(U.catName(q.cat))}）</summary>
            <div class="body">${q.code ? U.codeBlock(q.code) : ''}<p><b>答え：</b><code>${U.esc(q.choices[q.answer])}</code></p><p>${U.esc(q.explain)}</p></div></details>`).join('')}` : ''}
        <div class="row" style="margin-top:18px;justify-content:center">
          <button class="btn primary" id="back">設定に戻る</button>
          ${wrong.length ? '<button class="btn accent" id="retry">間違えた問題だけ解き直す</button>' : ''}
        </div>`;
      U.highlight(quiz);
      quiz.querySelector('#back').onclick = () => App.render();
      const retry = quiz.querySelector('#retry');
      if (retry) retry.onclick = () => startQuiz(root, U.shuffle(wrong.map(w => w.q)));
    }

    draw();
  }
})();
