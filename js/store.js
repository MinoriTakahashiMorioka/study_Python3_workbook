// =========================================================
// 学習記録の保存（ブラウザの localStorage に保存）
//   Store.get('reading', 'r01')         → その問題の記録
//   Store.update('reading', 'r01', fn)  → 記録を更新
// =========================================================
window.Store = (function () {
  const KEY = 'py3study.v1';
  let data = {};

  try {
    data = JSON.parse(localStorage.getItem(KEY)) || {};
  } catch (e) {
    data = {};
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* 保存できない環境では無視 */ }
  }
  function bucket(mode) {
    if (!data[mode]) data[mode] = {};
    return data[mode];
  }

  return {
    get(mode, id) { return bucket(mode)[id]; },
    set(mode, id, value) { bucket(mode)[id] = value; save(); },
    update(mode, id, fn) {
      const b = bucket(mode);
      b[id] = fn(b[id] ? { ...b[id] } : {});
      save();
      return b[id];
    },
    all(mode) { return bucket(mode); },

    exportJSON() { return JSON.stringify(data, null, 2); },
    importJSON(text) { data = JSON.parse(text) || {}; save(); },
    reset() { data = {}; save(); },
  };
})();
