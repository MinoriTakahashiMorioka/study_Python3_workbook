// =========================================================
// お題（Paiza風）：標準入力を読み、期待どおりに出力できたら正解
//   tests の sample:true は問題文に表示、それ以外は提出時のみの隠しテスト
// 記録: Store 'problems' → { solved, submits }, Store 'drafts' → { code }
// =========================================================
(function () {
  App.register('problems', (root, [id]) => {
    const item = id && PROBLEMS.find(p => p.id === id);
    return item ? play(root, item) : list(root);
  });

  function list(root) {
    root.innerHTML = `
      <h1 class="page-title">お題 <small>Paiza風・出力が合えば正解</small></h1>
      <p class="lead">問題文を読んでコードを書き、「提出」で全テストを実行します。<b>D</b>=入門 / <b>C</b>=基本 / <b>B</b>=応用。</p>
      ${['D', 'C', 'B'].map(lv => {
        const items = PROBLEMS.filter(p => p.level === lv);
        if (!items.length) return '';
        return `<h2 class="section-title"><span class="lv lv-${lv}">${lv}</span> ランク</h2>
        <div class="list">${items.map(p => {
          const r = Store.get('problems', p.id);
          return `<a class="item-card" href="#/problems/${p.id}">
            <div class="row"><span class="lv lv-${p.level}">${p.level}</span><span class="tag">${U.esc(U.catName(p.cat))}</span>${r && r.solved ? '<span class="tag done">✓ クリア</span>' : ''}</div>
            <h4>${U.esc(p.title)}</h4>
          </a>`;
        }).join('')}</div>`;
      }).join('')}`;
  }

  function play(root, p) {
    PyRunner.warmup();
    const samples = p.tests.filter(t => t.sample);
    const draft = (Store.get('drafts', p.id) || {}).code;
    const pos = PROBLEMS.indexOf(p);
    const next = PROBLEMS[pos + 1];

    root.innerHTML = `
      <div class="row" style="margin-bottom:8px">
        <a href="#/problems" class="btn ghost sm">← 一覧</a>
        <span class="lv lv-${p.level}">${p.level}</span>
        <span class="tag">${U.esc(U.catName(p.cat))}</span>
      </div>
      <h1 class="page-title">${U.esc(p.title)}</h1>
      <div class="problem-layout">
        <div class="panel statement">
          <h3>問題</h3><p>${U.esc(p.statement)}</p>
          <h3>入力</h3><p>${U.esc(p.input)}</p>
          <h3>出力</h3><p>${U.esc(p.output)}</p>
          ${samples.map((t, i) => `
            <h3>入力例${i + 1} / 出力例${i + 1}</h3>
            <div class="io-sample"><pre>${U.esc(t.in) || '（入力なし）'}</pre><pre>${U.esc(t.out)}</pre></div>`).join('')}
          <details class="explain"><summary>💡 ヒント</summary><div class="body">${U.esc(p.hint)}</div></details>
          <details class="explain" id="answer"><summary>📖 解答例（まずは自力で！）</summary><div class="body">${U.codeBlock(p.answer)}</div></details>
        </div>
        <div class="panel">
          <div class="row small muted" style="margin-bottom:6px">
            <span>main.py</span><span class="spacer"></span>
            <span><span class="kbd">Ctrl</span>+<span class="kbd">Enter</span> 入力例で実行</span>
          </div>
          <textarea class="code-input" id="code" style="min-height:300px"></textarea>
          <div class="row" style="margin-top:10px">
            <button class="btn primary" id="run">▶ 入力例1で実行</button>
            <button class="btn accent" id="submit">提出（全テスト）</button>
            <span class="spacer"></span>
            <button class="btn ghost sm" id="reset-code">初期コードに戻す</button>
          </div>
          <details class="explain" id="custom">
            <summary>自分で入力を作って実行</summary>
            <div class="body">
              <textarea class="code-input stdin-input" id="stdin" placeholder="標準入力（input() で読まれる内容）"></textarea>
              <div class="row" style="margin-top:8px"><button class="btn" id="run-custom">▶ この入力で実行</button></div>
            </div>
          </details>
          <div id="out"></div>
        </div>
      </div>`;

    U.highlight(root);
    const codeEl = root.querySelector('#code');
    const out = root.querySelector('#out');
    codeEl.value = draft != null ? draft : p.template;
    U.attachEditor(codeEl, { onRun: () => runSample() });
    let saveTimer = null;
    codeEl.addEventListener('input', () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => Store.set('drafts', p.id, { code: codeEl.value }), 400);
    });
    root.querySelector('#stdin').value = samples[0] ? samples[0].in : '';

    const busy = on => root.querySelectorAll('#run,#submit,#run-custom').forEach(b => { b.disabled = on; });
    const loadingNote = () => PyRunner.isReady() ? '実行中…' : '実行中…（初回は Python の読み込みに数秒〜十数秒かかります）';

    function verdictOf(res, expected) {
      if (res.timeout) return 'TLE';
      if (res.error) return 'RE';
      return U.normOut(res.output) === U.normOut(expected) ? 'AC' : 'WA';
    }
    const VERDICT = { AC: '正解', WA: '出力が違う', RE: 'エラー', TLE: '時間切れ' };

    async function runWith(stdin, expected) {
      busy(true);
      out.innerHTML = `<div class="output-label">実行結果</div><pre class="output">${loadingNote()}</pre>`;
      const res = await PyRunner.run(codeEl.value, stdin);
      busy(false);
      let html = `<div class="output-label">実行結果</div><pre class="output ${res.error ? 'err' : ''}">${U.esc(res.output || '（出力なし）')}</pre>`;
      if (expected != null) {
        const v = verdictOf(res, expected);
        html += `<div class="results"><div class="result-row"><span class="verdict v-${v}">${v}</span>${VERDICT[v]}${v === 'AC' ? ' ・ 入力例1は正解！「提出」で全テストを試そう' : ''}</div></div>`;
        if (v === 'WA') html += diffHtml(expected, res.output);
      }
      out.innerHTML = html;
    }

    const runSample = () => runWith(samples[0] ? samples[0].in : '', samples[0] ? samples[0].out : null);
    root.querySelector('#run').onclick = runSample;
    root.querySelector('#run-custom').onclick = () => runWith(root.querySelector('#stdin').value, null);

    root.querySelector('#submit').onclick = async () => {
      busy(true);
      out.innerHTML = `<div class="results"><div class="result-row muted">${loadingNote()}</div></div>`;
      const rows = [];
      let allAC = true;
      for (let i = 0; i < p.tests.length; i++) {
        const t = p.tests[i];
        const res = await PyRunner.run(codeEl.value, t.in);
        const v = verdictOf(res, t.out);
        if (v !== 'AC') allAC = false;
        rows.push(`<div class="result-row">
          <span class="verdict v-${v}">${v}</span>テスト${i + 1}${t.sample ? '（入力例）' : '（隠しテスト）'} ・ ${VERDICT[v]}
          ${v !== 'AC' ? `<details class="explain" style="margin-top:6px"><summary>詳細を見る</summary>
            <div class="output-label">入力</div><pre class="output">${U.esc(t.in || '（入力なし）')}</pre>
            ${v === 'WA' ? diffHtml(t.out, res.output) : `<div class="output-label">出力・エラー</div><pre class="output err">${U.esc(res.output)}</pre>`}
          </details>` : ''}
        </div>`);
        out.innerHTML = `<div class="results">${rows.join('')}</div>`;
      }
      busy(false);
      Store.update('problems', p.id, r => ({ ...r, submits: (r.submits || 0) + 1, solved: r.solved || allAC }));
      if (allAC) {
        out.innerHTML += `<div class="banner-ac">🎉 全テスト正解！</div>
          <div class="row" style="margin-top:12px"><span class="spacer"></span>
          ${next ? `<a class="btn accent" href="#/problems/${next.id}">次のお題へ →</a>` : '<a class="btn" href="#/problems">一覧へ</a>'}</div>`;
      }
    };

    root.querySelector('#reset-code').onclick = () => {
      if (confirm('書いたコードを消して初期コードに戻しますか？')) {
        codeEl.value = p.template;
        Store.set('drafts', p.id, { code: p.template });
      }
    };

    return () => {
      clearTimeout(saveTimer);
      Store.set('drafts', p.id, { code: codeEl.value });
    };
  }

  function diffHtml(expected, actual) {
    return `<div class="diff">
      <div><div class="output-label">期待される出力</div><pre>${U.esc(U.normOut(expected))}</pre></div>
      <div><div class="output-label">あなたの出力</div><pre>${U.esc(U.normOut(actual)) || '（出力なし）'}</pre></div>
    </div>`;
  }
})();
