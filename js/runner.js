// =========================================================
// ブラウザ内で Python を実行する仕組み（Pyodide）
//   - Web Worker 上で動かすので、無限ループしても画面は固まらない
//   - 一定時間（初期値5秒）で強制終了 → TLE（時間切れ）扱い
//   - input() は「標準入力」として渡した文字列から1行ずつ読む（Paiza と同じ感覚）
//
//   使い方: const { output, error, timeout } = await PyRunner.run(code, stdinText);
// =========================================================
window.PyRunner = (function () {
  const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
  const TIMEOUT_MS = 5000;

  // Worker 内で最初に実行される Python（ユーザーのコードを安全に実行する枠）
  const HARNESS = `
import sys, io, traceback, builtins

def __run(code, stdin_text):
    out = io.StringIO()
    fake_in = io.StringIO(stdin_text)

    def _input(prompt=""):
        if prompt:
            out.write(str(prompt))
        line = fake_in.readline()
        if line == "":
            raise EOFError("EOF when reading a line")
        return line.rstrip("\\n").rstrip("\\r")

    saved = (sys.stdout, sys.stderr, sys.stdin)
    sys.stdout, sys.stderr, sys.stdin = out, out, fake_in
    # 前回の実行で作られた logging の出力先をリセット
    if "logging" in sys.modules:
        sys.modules["logging"].root.handlers.clear()
    g = {"__name__": "__main__", "__builtins__": builtins, "input": _input}
    err = False
    try:
        exec(compile(code, "main.py", "exec"), g)
    except SystemExit:
        pass
    except BaseException as e:
        err = True
        tb = e.__traceback__.tb_next if e.__traceback__ else None
        out.write("".join(traceback.format_exception(type(e), e, tb)))
    finally:
        sys.stdout, sys.stderr, sys.stdin = saved
    return [out.getvalue(), err]
`;

  const WORKER_SRC = `
importScripts(${JSON.stringify(PYODIDE_URL + 'pyodide.js')});
const HARNESS = ${JSON.stringify(HARNESS)};
const ready = (async () => {
  const py = await loadPyodide({ indexURL: ${JSON.stringify(PYODIDE_URL)} });
  py.runPython(HARNESS);
  return py;
})();
ready.then(() => self.postMessage({ type: 'ready' }))
     .catch(e => self.postMessage({ type: 'fail', message: String(e) }));
self.onmessage = async (e) => {
  const { id, code, stdin } = e.data;
  try {
    const py = await ready;
    py.globals.set('__code', code);
    py.globals.set('__stdin', stdin || '');
    const res = py.runPython('__run(__code, __stdin)');
    const arr = res.toJs();
    res.destroy && res.destroy();
    self.postMessage({ type: 'result', id, output: arr[0], error: arr[1] });
  } catch (err) {
    self.postMessage({ type: 'result', id, output: String(err), error: true });
  }
};
`;

  let worker = null;
  let state = 'idle'; // idle | loading | ready | error
  let statusEl = null;
  let seq = 0;
  const pending = new Map();
  let chain = Promise.resolve(); // 1つずつ順番に実行する

  function setState(s, msg) {
    state = s;
    if (!statusEl) return;
    statusEl.dataset.state = s;
    statusEl.textContent = {
      idle: 'Python 未起動',
      loading: 'Python 読み込み中…',
      ready: 'Python OK',
      error: 'Python 読み込み失敗',
    }[s];
    statusEl.title = msg || 'ブラウザ内のPython実行エンジン（Pyodide）';
  }

  function start() {
    if (worker) return;
    setState('loading');
    try {
      const blob = new Blob([WORKER_SRC], { type: 'text/javascript' });
      worker = new Worker(URL.createObjectURL(blob));
    } catch (e) {
      setState('error', String(e));
      return;
    }
    worker.onmessage = e => {
      const m = e.data;
      if (m.type === 'ready') setState('ready');
      else if (m.type === 'fail') setState('error', m.message);
      else if (m.type === 'result') {
        const p = pending.get(m.id);
        if (p) { pending.delete(m.id); p({ output: m.output, error: m.error, timeout: false }); }
      }
    };
    worker.onerror = e => setState('error', e.message || 'Worker error');
  }

  function restart() {
    if (worker) worker.terminate();
    worker = null;
    pending.forEach(resolve => resolve({ output: '', error: true, timeout: true }));
    pending.clear();
    start();
  }

  function waitReady() {
    return new Promise(resolve => {
      const check = () => {
        if (state === 'ready' || state === 'error') resolve(state);
        else setTimeout(check, 100);
      };
      check();
    });
  }

  function runOnce(code, stdin, timeoutMs) {
    return new Promise(async resolve => {
      start();
      const st = await waitReady();
      if (st === 'error') {
        resolve({
          output: 'Python 実行エンジンを読み込めませんでした。\nインターネット接続を確認し、VSCode の Live Server などで開き直してください。',
          error: true, timeout: false,
        });
        return;
      }
      const id = ++seq;
      const timer = setTimeout(() => {
        if (!pending.has(id)) return;
        pending.delete(id);
        resolve({ output: `時間切れ（${timeoutMs / 1000}秒）：無限ループになっていないか確認しよう`, error: true, timeout: true });
        restart(); // 止まらないコードは Worker ごと作り直す
      }, timeoutMs);
      pending.set(id, res => { clearTimeout(timer); resolve(res); });
      worker.postMessage({ id, code, stdin });
    });
  }

  return {
    bindStatus(el) { statusEl = el; setState(state); },
    warmup() { start(); },
    isReady() { return state === 'ready'; },
    run(code, stdin = '', timeoutMs = TIMEOUT_MS) {
      const p = chain.then(() => runOnce(code, stdin, timeoutMs));
      chain = p.catch(() => {});
      return p;
    },
  };
})();
