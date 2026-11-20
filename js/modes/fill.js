// =========================================================
// 穴埋め：コード中の {{答え}} が空欄になる
//   答えが複数あるときは {{答え1||答え2}}
//   採点は「空白を無視」「' と " を同じ扱い」で比較
// 記録: Store 'fill' → { solved, tries }
// =========================================================
(function () {
  App.register('fill', (root, [id]) => {
    const item = id && FILL.find(f => f.id === id);
    return item ? play(root, item) : list(root);
  });

  function list(root) {
    const selected = new Set();
    root.innerHTML = `
      <h1 class="page-title">穴埋め <small>キーワードと書き方を思い出す</small></h1>
      <p class="lead">空欄に入るコードを入力して「答え合わせ」。正解したら完成コードを実行して動きを確認しよう。</p>
      <div class="panel" style="margin-bottom:16px"><div id="chips"></div></div>
      <div class="list" id="list"></div>`;
    const draw = () => {
      root.querySelector('#list').innerHTML = FILL
        .filter(f => selected.size === 0 || selected.has(f.cat))
        .map(f => {
          const r = Store.get('fill', f.id);
          const blanks = (f.code.match(/\{\{/g) || []).length;
          return `<a class="item-card" href="#/fill/${f.id}">
            <div class="row"><span class="tag">${U.esc(U.catName(f.cat))}</span>${r && r.solved ? '<span class="tag done">✓ 正解済み</span>' : ''}</div>
            <h4>${U.esc(f.title)}</h4>
            <div class="sub">空欄 ${blanks}か所</div>
          </a>`;
        }).join('');
    };
    U.renderChips(root.querySelector('#chips'), U.catsOf(FILL), selected, draw);
    draw();
  }

  const norm = s => s.replace(/\s+/g, '').replace(/"/g, "'");

  function play(root, item) {
    PyRunner.warmup();
    const parts = item.code.split(/\{\{(.+?)\}\}/);
    const answers = []; // [[正解候補...], ...]
    let html = '';
    parts.forEach((p, i) => {
      if (i % 2 === 0) { html += U.esc(p); return; }
      const alts = p.split('||');
      const n = answers.length;
      answers.push(alts);
      // 幅で答えの長さがバレないよう、全空欄を同じ幅にして入力に合わせて広げる
      html += `<input class="blank" data-i="${n}" style="width:7ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="空欄${n + 1}">`;
    });
    const fullCode = () => parts.map((p, i) => i % 2 === 0 ? p : p.split('||')[0]).join('');
    const pos = FILL.indexOf(item);
    const next = FILL[pos + 1];

    root.innerHTML = `
      <div class="row" style="margin-bottom:8px">
        <a href="#/fill" class="btn ghost sm">← 一覧</a>
        <span class="tag">${U.esc(U.catName(item.cat))}</span>
      </div>
      <h1 class="page-title">${U.esc(item.title)}</h1>
      ${item.goal ? `<p class="lead">${U.esc(item.goal)}</p>` : ''}
      <div class="panel">
        <pre class="fill-code">${html}</pre>
        <div class="row" style="margin-top:14px">
          <button class="btn primary" id="check">答え合わせ</button>
          <button class="btn ghost" id="reveal">答えを見る</button>
          <span class="spacer"></span>
          <span class="muted small"><span class="kbd">Enter</span> で次の空欄へ</span>
        </div>
        <div id="fb"></div>
      </div>`;

    const inputs = [...root.querySelectorAll('.blank')];
    const fb = root.querySelector('#fb');
    inputs.forEach((inp, i) => {
      inp.addEventListener('keydown', e => {
        if (e.isComposing || e.key !== 'Enter') return;
        e.preventDefault();
        if (inputs[i + 1]) inputs[i + 1].focus(); else check();
      });
      inp.addEventListener('input', () => {
        inp.classList.remove('ok', 'ng');
        inp.style.width = Math.max(7, inp.value.length + 2) + 'ch';
      });
    });
    if (inputs[0]) inputs[0].focus();

    function showResult(allOk, revealed) {
      fb.innerHTML = `
        <div class="feedback ${allOk ? 'ok' : 'ng'}">
          <h4>${allOk ? (revealed ? '答えを表示しました' : '全問正解！') : 'まだ間違いがあります'}</h4>
          ${allOk ? `<p>${U.esc(item.explain)}</p>` : '<p>赤い空欄を見直そう。どうしても分からなければ「答えを見る」。</p>'}
        </div>`;
      if (allOk) {
        fb.appendChild(U.runnerBox(fullCode, '▶ 完成したコードを実行'));
        const nav = document.createElement('div');
        nav.className = 'row';
        nav.style.marginTop = '14px';
        nav.innerHTML = `<span class="spacer"></span>${next ? `<a class="btn accent" href="#/fill/${next.id}">次の問題へ →</a>` : '<a class="btn" href="#/fill">一覧へ</a>'}`;
        fb.appendChild(nav);
      }
    }

    function check() {
      let allOk = true;
      inputs.forEach((inp, i) => {
        const ok = answers[i].some(a => norm(a) === norm(inp.value));
        inp.classList.toggle('ok', ok);
        inp.classList.toggle('ng', !ok);
        if (!ok) allOk = false;
      });
      Store.update('fill', item.id, r => ({ ...r, tries: (r.tries || 0) + 1, solved: r.solved || allOk }));
      showResult(allOk, false);
    }

    root.querySelector('#check').onclick = check;
    root.querySelector('#reveal').onclick = () => {
      inputs.forEach((inp, i) => {
        if (!answers[i].some(a => norm(a) === norm(inp.value))) {
          inp.value = answers[i][0];
          inp.style.width = Math.max(7, inp.value.length + 2) + 'ch';
          inp.classList.remove('ok');
          inp.classList.add('ng');
        } else inp.classList.add('ok');
      });
      showResult(true, true);
    };
  }
})();
