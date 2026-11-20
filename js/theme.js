// =========================================================
// ダーク／ライトの切替
//   右上のボタンで切り替え、選んだテーマはブラウザに保存
//   一度も選んでいないときは OS の設定（ダークモード）に合わせる
// =========================================================
(function () {
  const KEY = 'py3study.theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: light)');

  const saved = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const current = () => root.dataset.theme || (media.matches ? 'light' : 'dark');

  function apply() {
    const t = current();
    const dark = document.getElementById('hl-dark');
    const light = document.getElementById('hl-light');
    if (dark && light) { dark.disabled = t === 'light'; light.disabled = t !== 'light'; }
    const btn = document.getElementById('theme-btn');
    if (btn) {
      btn.textContent = t === 'light' ? '☀️' : '🌙';
      btn.title = t === 'light' ? 'ライトモード（クリックでダークへ）' : 'ダークモード（クリックでライトへ）';
    }
  }

  function toggle() {
    const next = current() === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch (e) { /* 保存できない環境では今回だけ */ }
    apply();
  }

  if (saved()) root.dataset.theme = saved();
  media.addEventListener('change', () => { if (!saved()) apply(); });
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-btn').addEventListener('click', toggle);
    apply();
  });
  apply();
})();
