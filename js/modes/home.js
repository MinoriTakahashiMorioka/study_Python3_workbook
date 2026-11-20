// =========================================================
// ホーム画面：進捗ダッシュボード・学習プラン・記録の管理
// =========================================================
App.register('home', root => {
  const count = (mode, pred) => Object.values(Store.all(mode)).filter(pred).length;

  const modes = [
    { route: 'vocab', no: '01', title: '単語帳', desc: '用語・関数・メソッドの意味をカードと4択で覚える。まずはここから。',
      done: count('vocab', r => r.mastered), total: VOCAB.length, unit: '語 習得' },
    { route: 'typing', no: '02', title: '写経（タイピング）', desc: 'お手本コードを1文字ずつ打ち込んで、手で文法を覚える。',
      done: count('typing', r => r.best), total: TYPING.length, unit: '本 完走' },
    { route: 'fill', no: '03', title: '穴埋め', desc: 'コードの空欄を埋める。キーワードや書き方を思い出す練習。',
      done: count('fill', r => r.solved), total: FILL.length, unit: '問 正解' },
    { route: 'reading', no: '04', title: 'コード読解', desc: '「このコードの出力は？」本番と同じ4択形式。実行して確かめられる。',
      done: count('reading', r => r.last === true), total: READING.length, unit: '問 正解中' },
    { route: 'problems', no: '05', title: 'お題（Paiza風）', desc: '問題文どおりの出力を出せたら正解。自分でコードを書いて提出。',
      done: count('problems', r => r.solved), total: PROBLEMS.length, unit: '問 クリア' },
  ];
  if (window.WORKBOOK) {
    modes.push({ route: 'workbook', no: '06', title: '問題集', desc: '公式問題集の全問題。章ごと・間違えた問題だけ・総仕上げ模試（60分）で。',
      done: count('workbook', r => r.last === true), total: WORKBOOK.questions.length, unit: '問 正解中' });
  }

  root.innerHTML = `
    <section class="hero">
      <h1>Python3 エンジニア認定基礎試験<br><span>ゼロから合格ドリル</span></h1>
      <p>勉強ゼロからでもOK。「単語 → 写経 → 穴埋め → 読解 → お題」の順に進めれば、試験範囲（Pythonチュートリアル）の重要ポイントを一通り手で覚えられます。</p>
      <div class="facts">
        <span class="fact"><b>40</b>問</span>
        <span class="fact"><b>60</b>分</span>
        <span class="fact"><b>70%</b>で合格</span>
        <span class="fact">選択式（CBT）</span>
        <span class="fact">範囲：オライリー『Pythonチュートリアル』</span>
      </div>
    </section>

    <div class="grid">
      ${modes.map(m => {
        const pct = m.total ? Math.round(m.done / m.total * 100) : 0;
        return `
        <a class="mode-card" href="#/${m.route}">
          <span class="num">STEP ${m.no}</span>
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
          <div class="progress"><span style="width:${pct}%"></span></div>
          <div class="meta"><span>${m.done} / ${m.total} ${m.unit}</span><span>${pct}%</span></div>
        </a>`;
      }).join('')}
    </div>

    <h2 class="section-title">ゼロからの2週間プラン（目安）</h2>
    <ol class="plan">
      <li><b>1〜3日目：</b>単語帳で「3〜5章」を中心にカードを一周。並行して写経を1日2〜3本。</li>
      <li><b>4〜7日目：</b>穴埋め＋コード読解。出題が多い<b>4章（制御構造・関数）・5章（データ構造）・3章</b>を優先。</li>
      <li><b>8〜10日目：</b>8章（例外）・9章（クラス）・10〜11章（標準ライブラリ）の単語と読解。</li>
      <li><b>11〜13日目：</b>お題で実際にコードを書く。読解は「間違えた問題だけ」を何周も。</li>
      <li><b>前日：</b>読解を全問ランダムで解いて<b>8割以上</b>を確認。単語帳の「未習得のみ」を総ざらい。</li>
    </ol>

    <h2 class="section-title">学習記録</h2>
    <div class="panel">
      <p class="muted small" style="margin-top:0">記録はこのブラウザに保存されます。別のPCに移すときはエクスポート → インポート。</p>
      <div class="row">
        <button class="btn" id="exp">エクスポート（コピー）</button>
        <button class="btn" id="imp">インポート</button>
        <span class="spacer"></span>
        <button class="btn bad" id="reset">記録をリセット</button>
      </div>
      <textarea id="io" class="code-input stdin-input hidden" placeholder="ここにエクスポートしたJSONを貼り付けてインポート"></textarea>
      <div class="row hidden" id="io-actions" style="margin-top:8px"><button class="btn primary" id="do-imp">読み込む</button></div>
    </div>
  `;

  const io = root.querySelector('#io');
  root.querySelector('#exp').onclick = async () => {
    io.classList.remove('hidden');
    io.value = Store.exportJSON();
    io.select();
    try { await navigator.clipboard.writeText(io.value); alert('コピーしました'); } catch (e) { /* 手動でコピー */ }
  };
  root.querySelector('#imp').onclick = () => {
    io.classList.remove('hidden');
    io.value = '';
    root.querySelector('#io-actions').classList.remove('hidden');
    io.focus();
  };
  root.querySelector('#do-imp').onclick = () => {
    try { Store.importJSON(io.value); alert('読み込みました'); App.render(); }
    catch (e) { alert('JSONの形式が正しくありません'); }
  };
  root.querySelector('#reset').onclick = () => {
    if (confirm('すべての学習記録を消去します。よろしいですか？')) { Store.reset(); App.render(); }
  };
});
