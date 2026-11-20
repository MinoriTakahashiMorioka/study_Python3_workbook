// =========================================================
// ルーター：URL の #/xxx/yyy を見て画面を切り替える
//   #/            → ホーム
//   #/typing/t01  → 写経の t01 番
// 各画面は js/modes/*.js で App.register('名前', 描画関数) している
// =========================================================
window.App = {
  routes: {},
  _cleanup: null,

  register(name, renderFn) {
    this.routes[name] = renderFn;
  },

  go(path) {
    location.hash = '#/' + path;
  },

  render() {
    const hash = location.hash.replace(/^#\/?/, '');
    const [name, ...rest] = hash.split('/').filter(Boolean);
    const routeName = this.routes[name] ? name : 'home';
    const root = document.getElementById('app');

    // 前の画面の後片付け（タイマー停止など）
    if (this._cleanup) {
      try { this._cleanup(); } catch (e) { console.error(e); }
      this._cleanup = null;
    }
    root.innerHTML = '';
    window.scrollTo(0, 0);

    const cleanup = this.routes[routeName](root, rest.map(decodeURIComponent));
    if (typeof cleanup === 'function') this._cleanup = cleanup;

    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('active', a.dataset.route === routeName);
    });
  },
};

window.addEventListener('hashchange', () => App.render());
window.addEventListener('DOMContentLoaded', () => {
  PyRunner.bindStatus(document.getElementById('py-status'));
  App.render();
});
