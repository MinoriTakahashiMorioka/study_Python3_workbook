// =========================================================
// 単語帳データ
//   id     : 重複しないID
//   cat    : 章（js/ui.js の U.CATS を参照）
//   term   : 用語（表）
//   meaning: 意味（裏）
//   ex     : 例（省略可）。String.raw`...` で書くと \n がそのまま表示される
// 追加したいときは、この配列に同じ形のオブジェクトを足すだけ！
// =========================================================
window.VOCAB = [
  // ---------- 1〜2章 はじめに ----------
  { id: 'v001', cat: 'ch1', term: 'インタープリタ', meaning: 'ソースコードをコンパイルせずに、そのまま解釈・実行するプログラム。Pythonは対話的に1行ずつ試せる。' },
  { id: 'v002', cat: 'ch1', term: '>>> と ...', meaning: '対話モードのプロンプト。>>> が一次プロンプト、... が継続行（ブロックの途中など）の二次プロンプト。' },
  { id: 'v003', cat: 'ch1', term: 'ソースコードの文字コード', meaning: 'Pythonのソースファイルはデフォルトで UTF-8。変えるときは先頭行に # -*- coding: エンコーディング名 -*- と書く。' },
  { id: 'v004', cat: 'ch1', term: 'python -c / python -m', meaning: '-c "コマンド" で文字列のコードを実行、-m モジュール名 でモジュールをスクリプトとして実行する。' },
  { id: 'v005', cat: 'ch1', term: 'python -i', meaning: 'スクリプトを実行したあと、そのまま対話モードに入る。' },
  { id: 'v006', cat: 'ch1', term: 'sys.argv', meaning: 'コマンドライン引数が入ったリスト。sys.argv[0] はスクリプト名。引数なしでも要素は1つ以上ある。' },
  { id: 'v007', cat: 'ch1', term: '# （コメント）', meaning: '# から行末までがコメント。ただし文字列リテラルの中の # はコメントにならない。' },

  // ---------- 3章 気楽な入門編 ----------
  { id: 'v010', cat: 'ch3', term: '_ （アンダースコア）', meaning: '対話モードで、最後に表示された式の値が自動で入る変数。', ex: String.raw`>>> 10 * 3
30
>>> _ + 1
31` },
  { id: 'v011', cat: 'ch3', term: '/ （除算）', meaning: '常に浮動小数点数（float）を返す割り算。', ex: String.raw`>>> 8 / 4
2.0` },
  { id: 'v012', cat: 'ch3', term: '// （切り捨て除算）', meaning: '割り算の結果を小さい方（負の無限大方向）に切り捨てる。負の数に注意。', ex: String.raw`>>> 7 // 2
3
>>> -7 // 2
-4` },
  { id: 'v013', cat: 'ch3', term: '% （剰余）', meaning: '割り算の余り。Pythonでは結果の符号は割る数（右側）と同じになる。', ex: String.raw`>>> 17 % 3
2
>>> -7 % 2
1` },
  { id: 'v014', cat: 'ch3', term: '** （べき乗）', meaning: 'べき乗。単項マイナスより優先度が高いので -3**2 は -(3**2) = -9。右結合で 2**3**2 は 2**9。', ex: String.raw`>>> -3 ** 2
-9
>>> (-3) ** 2
9` },
  { id: 'v015', cat: 'ch3', term: 'int と float の混在', meaning: '整数と浮動小数点数を混ぜて計算すると、結果は float になる。', ex: String.raw`>>> 4 * 3.75 - 1
14.0` },
  { id: 'v016', cat: 'ch3', term: "r'...' （raw文字列）", meaning: 'バックスラッシュ \\ をエスケープとして扱わない文字列。Windowsのパスや正規表現で便利。', ex: String.raw`>>> print('C:\some\name')   # \n が改行になる
C:\some
ame
>>> print(r'C:\some\name')
C:\some\name` },
  { id: 'v017', cat: 'ch3', term: '""" ... """ （三重クォート）', meaning: '複数行にわたる文字列リテラル。行末に \\ を置くとその改行は含まれない。' },
  { id: 'v018', cat: 'ch3', term: '文字列リテラルの自動連結', meaning: '隣り合った文字列リテラル同士は自動で連結される。変数や式とは連結できないので + を使う。', ex: String.raw`>>> 'Py' 'thon'
'Python'` },
  { id: 'v019', cat: 'ch3', term: '文字列 * 整数', meaning: '文字列を指定回数くり返す。', ex: String.raw`>>> 3 * 'un' + 'ium'
'unununium'` },
  { id: 'v020', cat: 'ch3', term: 'インデックス s[i]', meaning: '0始まりで1文字取り出す。負の数は末尾から（s[-1] は最後）。範囲外は IndexError。' },
  { id: 'v021', cat: 'ch3', term: 'スライス s[i:j]', meaning: 'i 以上 j 未満を取り出す。省略すると先頭／末尾。範囲外を指定してもエラーにならず、ある分だけ返す。', ex: String.raw`>>> w = 'Python'
>>> w[0:2], w[4:], w[-2:], w[42:]
('Py', 'on', 'on', '')` },
  { id: 'v022', cat: 'ch3', term: 'イミュータブル（変更不能）', meaning: '作成後に中身を変えられない型。str・tuple・int・float など。s[0] = "J" は TypeError。' },
  { id: 'v023', cat: 'ch3', term: 'ミュータブル（変更可能）', meaning: '中身を変更できる型。list・dict・set など。インデックスやスライスへの代入ができる。' },
  { id: 'v024', cat: 'ch3', term: 'len()', meaning: '文字列やリストなどの長さ（要素数）を返す組み込み関数。' },
  { id: 'v025', cat: 'ch3', term: 'リストのスライス代入', meaning: 'スライスに代入すると、その範囲をまとめて置き換え・削除できる。', ex: String.raw`>>> L = ['a', 'b', 'c', 'd']
>>> L[1:3] = []
>>> L
['a', 'd']` },
  { id: 'v026', cat: 'ch3', term: '多重代入 a, b = b, a+b', meaning: '右辺の式がすべて先に評価されてから、左辺の変数に代入される。値の入れ替えにも使える。' },
  { id: 'v027', cat: 'ch3', term: "print(..., end='')", meaning: 'end で末尾の改行を別の文字列に変えられる。sep は複数の値を区切る文字（デフォルトは空白）。', ex: String.raw`>>> print(1, 2, 3, sep='-', end='!\n')
1-2-3!` },

  // ---------- 4章 制御構造・関数 ----------
  { id: 'v040', cat: 'ch4', term: 'if / elif / else', meaning: '条件分岐。elif は else if の略で、いくつでも書ける。' },
  { id: 'v041', cat: 'ch4', term: 'for 文', meaning: 'リストや文字列などのシーケンスの要素を、先頭から順に1つずつ取り出してくり返す。' },
  { id: 'v042', cat: 'ch4', term: 'range(start, stop, step)', meaning: '整数の並びを作る。stop は含まない。range(5)→0〜4、range(0, 10, 3)→0,3,6,9。', ex: String.raw`>>> list(range(5, 10))
[5, 6, 7, 8, 9]
>>> list(range(-10, -100, -30))
[-10, -40, -70]` },
  { id: 'v043', cat: 'ch4', term: 'break / continue', meaning: 'break は一番内側のループを抜ける。continue は残りを飛ばして次のくり返しへ進む。' },
  { id: 'v044', cat: 'ch4', term: 'ループの else 節', meaning: 'for / while が break されずに最後まで回り終えたときだけ実行される。break で抜けると実行されない。' },
  { id: 'v045', cat: 'ch4', term: 'pass 文', meaning: '何もしない文。文法上なにか書く必要があるけど処理がない場所（空のクラスや関数）に使う。' },
  { id: 'v046', cat: 'ch4', term: 'def', meaning: '関数を定義するキーワード。本体はインデントして書く。' },
  { id: 'v047', cat: 'ch4', term: 'return のない関数', meaning: 'return 文がない（または return だけの）関数は None を返す。' },
  { id: 'v048', cat: 'ch4', term: 'デフォルト引数の評価', meaning: 'デフォルト値は関数を定義したときに1回だけ評価される。リストなどミュータブルを既定値にすると、呼び出しをまたいで共有されてしまう。', ex: String.raw`def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L` },
  { id: 'v049', cat: 'ch4', term: 'キーワード引数', meaning: 'f(name=値) の形で渡す引数。位置引数より後に書く。同じ引数に2回値を渡すと TypeError。' },
  { id: 'v050', cat: 'ch4', term: '*args', meaning: '余った位置引数をまとめてタプルで受け取る仮引数。' },
  { id: 'v051', cat: 'ch4', term: '**kwargs', meaning: '余ったキーワード引数をまとめて辞書で受け取る仮引数。*args より後に書く。' },
  { id: 'v052', cat: 'ch4', term: '引数のアンパック f(*L) / f(**d)', meaning: '* でリストやタプルを位置引数に、** で辞書をキーワード引数に展開して渡す。', ex: String.raw`>>> args = [3, 6]
>>> list(range(*args))
[3, 4, 5]` },
  { id: 'v053', cat: 'ch4', term: 'lambda 式', meaning: '名前のない小さな関数を作る。本体には式を1つだけ書ける。sort の key などに使う。', ex: String.raw`>>> add = lambda a, b: a + b
>>> add(2, 3)
5` },
  { id: 'v054', cat: 'ch4', term: 'docstring（ドキュメンテーション文字列）', meaning: '関数の本体の最初に書く文字列で、説明文になる。__doc__ で参照できる。1行目は要約、2行目は空行が慣例。' },
  { id: 'v055', cat: 'ch4', term: '関数アノテーション', meaning: 'def f(x: int) -> str: のように引数や戻り値の型情報を書ける。__annotations__ 辞書に入るだけで、実行時の型チェックはされない。' },
  { id: 'v056', cat: 'ch4', term: '位置専用引数 /', meaning: 'def f(a, b, /, c): の / より前の引数は、位置引数としてしか渡せない（キーワード指定は不可）。' },
  { id: 'v057', cat: 'ch4', term: 'キーワード専用引数 *', meaning: 'def f(a, *, key): の * より後の引数は、キーワード引数としてしか渡せない。' },
  { id: 'v058', cat: 'ch4', term: 'PEP 8', meaning: 'Pythonのコーディング規約。インデントはスペース4つ、1行79文字以内、関数名は小文字_区切り、クラス名は CapWords（UpperCamelCase）。' },
  { id: 'v059', cat: 'ch4', term: 'while 文', meaning: '条件が真（True）の間くり返す。0 や空の文字列・リストは偽として扱われる。' },

  // ---------- 5章 データ構造 ----------
  { id: 'v070', cat: 'ch5', term: 'list.append(x)', meaning: 'リストの末尾に要素を1つ追加する。' },
  { id: 'v071', cat: 'ch5', term: 'list.extend(iterable)', meaning: 'リストの末尾に、イテラブルのすべての要素を追加する（連結）。' },
  { id: 'v072', cat: 'ch5', term: 'list.insert(i, x)', meaning: 'インデックス i の位置（の前）に x を挿入する。insert(0, x) で先頭に追加。' },
  { id: 'v073', cat: 'ch5', term: 'list.remove(x)', meaning: '値が x の最初の要素を削除する。見つからなければ ValueError。' },
  { id: 'v074', cat: 'ch5', term: 'list.pop([i])', meaning: '指定位置の要素を削除して返す。引数を省略すると末尾の要素。スタックに使える。' },
  { id: 'v075', cat: 'ch5', term: 'list.index(x) / list.count(x)', meaning: 'index は x が最初に出てくる位置（なければ ValueError）、count は x の個数を返す。' },
  { id: 'v076', cat: 'ch5', term: 'list.sort() と sorted()', meaning: 'sort() はリスト自体を並べ替えて None を返す。sorted() は元を変えずに新しいリストを返す。どちらも key=, reverse= が使える。' },
  { id: 'v077', cat: 'ch5', term: 'list.copy() / list.clear()', meaning: 'copy は浅いコピー（a[:] と同じ）、clear は全要素を削除（del a[:] と同じ）。' },
  { id: 'v078', cat: 'ch5', term: 'del 文', meaning: 'インデックスやスライスを指定してリストの要素を削除する。del x で変数そのものも削除できる。', ex: String.raw`>>> a = [-1, 1, 66.25, 333]
>>> del a[0]
>>> del a[1:]
>>> a
[1]` },
  { id: 'v079', cat: 'ch5', term: 'リスト内包表記', meaning: '[式 for 変数 in イテラブル if 条件] の形で、リストを簡潔に作る書き方。', ex: String.raw`>>> [x ** 2 for x in range(6) if x % 2 == 0]
[0, 4, 16]` },
  { id: 'v080', cat: 'ch5', term: 'タプル', meaning: 'カンマで区切った値の組。イミュータブル。要素1つのときは (1,) と末尾にカンマが必要。空タプルは ()。', ex: String.raw`>>> t = 12345, 'hello'
>>> t
(12345, 'hello')
>>> single = 'a',
>>> len(single)
1` },
  { id: 'v081', cat: 'ch5', term: 'シーケンスのアンパック', meaning: 'x, y, z = t のように、要素を複数の変数に一度に代入する。数が合わないと ValueError。' },
  { id: 'v082', cat: 'ch5', term: 'set（集合）', meaning: '重複のない、順序なしの要素の集まり。| 和集合、& 積集合、- 差集合、^ 対称差。空集合は set() で作る。', ex: String.raw`>>> a = {1, 2, 3}; b = {2, 3, 4}
>>> a & b, a | b, a - b, a ^ b
({2, 3}, {1, 2, 3, 4}, {1}, {1, 4})` },
  { id: 'v083', cat: 'ch5', term: '{} （空の波かっこ）', meaning: '空の辞書（dict）になる。空の集合ではないので注意。空集合は set()。' },
  { id: 'v084', cat: 'ch5', term: 'dict（辞書）', meaning: 'キー: 値 のペアの集まり。キーには文字列・数値・タプルなどイミュータブル（ハッシュ可能）な値しか使えない。追加した順番が保たれる。' },
  { id: 'v085', cat: 'ch5', term: 'd[key] と KeyError', meaning: '存在しないキーを d[key] で参照すると KeyError。in で存在確認するか get() を使う。' },
  { id: 'v086', cat: 'ch5', term: 'dict.get(key, default)', meaning: 'キーがあれば値を、なければ default（省略時 None）を返す。エラーにならない。' },
  { id: 'v087', cat: 'ch5', term: 'dict.items() / keys() / values()', meaning: 'items() で (キー, 値)、keys() でキー、values() で値を取り出す。for k, v in d.items(): の形が定番。' },
  { id: 'v088', cat: 'ch5', term: 'list(d) / sorted(d)', meaning: '辞書をリストにするとキーの一覧（挿入順）になる。sorted(d) はキーを並べ替えたリスト。' },
  { id: 'v089', cat: 'ch5', term: 'enumerate()', meaning: 'インデックスと要素をペアで取り出す。start= で開始番号を指定できる。', ex: String.raw`for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)` },
  { id: 'v090', cat: 'ch5', term: 'zip()', meaning: '複数のシーケンスを同時にループする。一番短いものに合わせて終わる。' },
  { id: 'v091', cat: 'ch5', term: 'reversed()', meaning: 'シーケンスを逆順にたどるイテレータを返す。元のリストは変えない。' },
  { id: 'v092', cat: 'ch5', term: 'in / not in', meaning: '値が含まれるかを調べる。辞書に対してはキーを調べる。' },
  { id: 'v093', cat: 'ch5', term: 'is / is not', meaning: '同じオブジェクト（同一）かどうかを調べる。値が等しいかは ==。None との比較は is を使う。' },
  { id: 'v094', cat: 'ch5', term: '比較の連鎖', meaning: 'a < b == c は (a < b) and (b == c) という意味になる。' },
  { id: 'v095', cat: 'ch5', term: 'and / or の戻り値', meaning: '短絡評価され、最後に評価した値そのものを返す（True/Falseとは限らない）。', ex: String.raw`>>> '' or 'default'
'default'
>>> 0 and 1/0
0` },
  { id: 'v096', cat: 'ch5', term: 'シーケンス同士の比較', meaning: '辞書式順序で、先頭から1つずつ比較する。片方が先に尽きたら短い方が小さい。', ex: String.raw`>>> (1, 2, 3) < (1, 2, 4)
True
>>> [1, 2] < [1, 2, -1]
True` },
  { id: 'v097', cat: 'ch5', term: 'list をスタック／キューとして使う', meaning: 'スタック（後入れ先出し）は append と pop() で効率よく使える。キュー（先入れ先出し）は pop(0) が遅いので collections.deque を使う。' },

  // ---------- 6章 モジュール ----------
  { id: 'v110', cat: 'ch6', term: 'モジュール', meaning: 'Pythonの定義や文を書いたファイル。ファイル名（.py を除いたもの）がモジュール名。モジュール内では __name__ で自分の名前を参照できる。' },
  { id: 'v111', cat: 'ch6', term: 'import / from ... import / as', meaning: 'import fibo でモジュールを読み込み fibo.fib() と使う。from fibo import fib で名前を直接取り込む。as で別名を付けられる。' },
  { id: 'v112', cat: 'ch6', term: 'from モジュール import *', meaning: 'アンダースコア _ で始まる名前以外をすべて取り込む。どこから来た名前か分かりにくくなるので推奨されない。' },
  { id: 'v113', cat: 'ch6', term: 'if __name__ == "__main__":', meaning: 'スクリプトとして直接実行されたときだけ __name__ が "__main__" になる。import されたときは実行させたくない処理をここに書く。' },
  { id: 'v114', cat: 'ch6', term: 'モジュール検索パス sys.path', meaning: 'import 時に探す場所のリスト。①実行スクリプトのあるディレクトリ ②環境変数 PYTHONPATH ③インストールごとのデフォルト の順。' },
  { id: 'v115', cat: 'ch6', term: '__pycache__ / .pyc', meaning: 'モジュールを高速に読み込むため、コンパイル済みのバイトコードが __pycache__ ディレクトリに module.バージョン.pyc として保存される。' },
  { id: 'v116', cat: 'ch6', term: 'dir()', meaning: 'モジュールなどが定義している名前の一覧をソート済みリストで返す。引数なしだと現在定義している名前。' },
  { id: 'v117', cat: 'ch6', term: 'パッケージ / __init__.py', meaning: 'モジュールをディレクトリで階層化したもの（sound.effects.echo のようにドットで区切る）。ディレクトリをパッケージとして扱わせるために __init__.py を置く。' },
  { id: 'v118', cat: 'ch6', term: '__all__', meaning: 'パッケージの __init__.py に書くリスト。from パッケージ import * で取り込まれるモジュール名を指定する。' },
  { id: 'v119', cat: 'ch6', term: '相対インポート', meaning: 'from . import echo、from .. import formats のように、ドットで現在のパッケージからの相対位置を指定する。メインモジュールでは使えない。' },

  // ---------- 7章 入出力 ----------
  { id: 'v130', cat: 'ch7', term: "f'...' （f文字列）", meaning: '文字列の前に f を付け、{式} で値を埋め込む。{x:.2f} 小数点以下2桁、{x:>5} 右寄せ幅5、{x:05} ゼロ埋め、{x!r} で repr。', ex: String.raw`>>> import math
>>> f'円周率は約 {math.pi:.3f}'
'円周率は約 3.142'` },
  { id: 'v131', cat: 'ch7', term: 'str.format()', meaning: "'{} と {}'.format(a, b) のように {} に値を埋め込む。{0} {1} で位置、{name} でキーワード指定もできる。" },
  { id: 'v132', cat: 'ch7', term: 'str() と repr()', meaning: 'str() は人間が読みやすい表現、repr() はインタープリタが読める表現を返す。文字列の repr はクォート付き、改行は \\n と表示。', ex: String.raw`>>> s = 'hello\n'
>>> str(s)
'hello\n'
>>> print(repr(s))
'hello\n'` },
  { id: 'v133', cat: 'ch7', term: 'rjust / ljust / center / zfill', meaning: '指定幅で右寄せ／左寄せ／中央寄せした文字列を返す。zfill は左をゼロで埋める。', ex: String.raw`>>> '12'.zfill(5)
'00012'
>>> 'ab'.rjust(4) + '|'
'  ab|'` },
  { id: 'v134', cat: 'ch7', term: '% 演算子による書式化（旧式）', meaning: "'%5.3f' % 値 のように C の printf 風に書式化する古い方法。", ex: String.raw`>>> import math
>>> print('pi = %5.3f' % math.pi)
pi = 3.142` },
  { id: 'v135', cat: 'ch7', term: 'open(file, mode)', meaning: "ファイルを開く。'r' 読み込み（既定）、'w' 書き込み（上書き）、'a' 追記、'r+' 読み書き、'b' を付けるとバイナリモード。テキストは encoding='utf-8' 指定が推奨。" },
  { id: 'v136', cat: 'ch7', term: 'with 文（ファイル）', meaning: 'with open(...) as f: のブロックを抜けると、例外が起きても自動でファイルが閉じられる。' },
  { id: 'v137', cat: 'ch7', term: 'f.read() / f.readline() / for line in f', meaning: 'read() は全体を1つの文字列で、readline() は1行（末尾の \\n 付き）を読む。ファイルの終わりでは空文字列 "" を返す。for で1行ずつ読むのが効率的。' },
  { id: 'v138', cat: 'ch7', term: 'f.write(s)', meaning: '文字列 s を書き込み、書き込んだ文字数を返す。文字列以外は str() などで変換してから渡す。' },
  { id: 'v139', cat: 'ch7', term: 'json モジュール', meaning: 'json.dumps(x) でJSON文字列に、json.dump(x, f) でファイルへ書き出す。json.loads(s) / json.load(f) で読み込む。', ex: String.raw`>>> import json
>>> json.dumps([1, 'simple', 'list'])
'[1, "simple", "list"]'` },

  // ---------- 8章 エラーと例外 ----------
  { id: 'v150', cat: 'ch8', term: '構文エラー（SyntaxError）', meaning: '文法の誤り。コードの解析段階で見つかり、エラー位置を ^ などで示す。' },
  { id: 'v151', cat: 'ch8', term: '例外', meaning: '文法は正しいが実行中に起きたエラー。処理しないとトレースバックを表示してプログラムが止まる。' },
  { id: 'v152', cat: 'ch8', term: 'try / except', meaning: 'try 節で例外が起きると、型が一致する最初の except 節が1つだけ実行される。except (TypeError, ValueError): で複数まとめて捕捉できる。' },
  { id: 'v153', cat: 'ch8', term: 'try の else 節', meaning: 'try 節で例外が起きなかったときだけ実行される。すべての except 節の後に書く。' },
  { id: 'v154', cat: 'ch8', term: 'finally 節', meaning: '例外の有無にかかわらず、try 文を抜けるときに必ず実行される。try 内で return しても実行される。後片付け（ファイルを閉じる等）に使う。' },
  { id: 'v155', cat: 'ch8', term: 'raise', meaning: '例外を発生させる。raise ValueError("メッセージ")。except 節の中で引数なしの raise を書くと、捕まえた例外をそのまま再送出する。' },
  { id: 'v156', cat: 'ch8', term: 'raise ... from ...（例外の連鎖）', meaning: 'raise RuntimeError from exc で、別の例外が原因であることを明示する。from None で連鎖の表示を消せる。' },
  { id: 'v157', cat: 'ch8', term: 'except 例外 as e', meaning: '捕まえた例外オブジェクトを変数 e に入れる。e.args に引数のタプルが入っている。' },
  { id: 'v158', cat: 'ch8', term: 'ユーザー定義例外', meaning: 'Exception クラスを（直接または間接に）継承して自分の例外を作る。名前は Error で終わらせるのが慣例。' },
  { id: 'v159', cat: 'ch8', term: 'よく出る例外', meaning: 'ZeroDivisionError（0除算）、NameError（未定義の名前）、TypeError（型が不適切）、ValueError（値が不適切）、KeyError（辞書にキーがない）、IndexError（インデックス範囲外）。' },
  { id: 'v160', cat: 'ch8', term: 'except 節の順番', meaning: '上から順に判定される。親クラスの except を先に書くと、子クラスの例外もそこで捕まり、下の except は実行されない。' },

  // ---------- 9章 クラス ----------
  { id: 'v180', cat: 'ch9', term: 'class / インスタンス化', meaning: 'class 名前: でクラスを定義し、名前() でインスタンス（オブジェクト）を作る。' },
  { id: 'v181', cat: 'ch9', term: '__init__()', meaning: 'インスタンスを作ったときに自動で呼ばれる初期化メソッド。引数はクラス名(...) に渡したもの。' },
  { id: 'v182', cat: 'ch9', term: 'self', meaning: 'メソッドの第1引数で、インスタンス自身を表す。名前は慣習（self 以外でも動く）。x.f() は MyClass.f(x) と同じ。' },
  { id: 'v183', cat: 'ch9', term: 'クラス変数とインスタンス変数', meaning: 'クラス変数はすべてのインスタンスで共有、インスタンス変数（self.xxx）は各インスタンス固有。リストなどミュータブルをクラス変数にすると全員で共有されるので注意。' },
  { id: 'v184', cat: 'ch9', term: '継承', meaning: 'class 子(親): で親クラスの機能を引き継ぐ。同じ名前のメソッドを定義すると上書き（オーバーライド）される。' },
  { id: 'v185', cat: 'ch9', term: 'super()', meaning: '親クラスのメソッドを呼び出す。super().__init__(...) で親の初期化を実行する。' },
  { id: 'v186', cat: 'ch9', term: '多重継承', meaning: 'class C(A, B): のように複数の親を持てる。属性は基本的に「深さ優先・左から右」の順（MRO）で探される。' },
  { id: 'v187', cat: 'ch9', term: 'isinstance() / issubclass()', meaning: 'isinstance(obj, int) はインスタンスの型チェック、issubclass(bool, int) はサブクラスかのチェック（この例は True）。' },
  { id: 'v188', cat: 'ch9', term: '_ と __ （プライベート）', meaning: 'Pythonに本当の非公開はない。_spam は「内部用」という慣例。__spam は _クラス名__spam に名前が変換される（名前マングリング）。' },
  { id: 'v189', cat: 'ch9', term: 'イテレータ', meaning: '__iter__() と __next__() を持つオブジェクト。next() で次の要素を返し、要素がなくなると StopIteration を送出する。for 文は内部でこれを使う。' },
  { id: 'v190', cat: 'ch9', term: 'iter() / next()', meaning: 'iter(シーケンス) でイテレータを取得し、next(イテレータ) で要素を1つずつ取り出す。', ex: String.raw`>>> it = iter('abc')
>>> next(it)
'a'
>>> next(it)
'b'` },
  { id: 'v191', cat: 'ch9', term: 'ジェネレータ（yield）', meaning: 'yield を含む関数。呼び出すとイテレータを返し、next() のたびに前回の続きから実行して値を1つずつ返す。', ex: String.raw`def reverse(data):
    for i in range(len(data) - 1, -1, -1):
        yield data[i]` },
  { id: 'v192', cat: 'ch9', term: 'ジェネレータ式', meaning: 'リスト内包表記の [] を () にしたもの。リストを作らずに値を1つずつ生み出す。', ex: String.raw`>>> sum(i * i for i in range(10))
285` },
  { id: 'v193', cat: 'ch9', term: 'スコープ（名前の探索順）', meaning: '名前は ローカル → 外側の関数 → グローバル（モジュール）→ 組み込み の順に探される（LEGB）。' },
  { id: 'v194', cat: 'ch9', term: 'global / nonlocal', meaning: '関数の中からモジュールの変数に代入するなら global、外側の関数の変数に代入するなら nonlocal を宣言する。宣言しないと新しいローカル変数になる。' },
  { id: 'v195', cat: 'ch9', term: '名前空間', meaning: '名前とオブジェクトの対応表。組み込み名・モジュールのグローバル名・関数呼び出しのローカル名などがあり、互いに独立している。' },

  // ---------- 10〜11章 標準ライブラリ ----------
  { id: 'v210', cat: 'ch10', term: 'os', meaning: 'OSとやりとりする関数群。os.getcwd()（現在のディレクトリ）、os.chdir()（移動）、os.system()（コマンド実行）。import os を使い、from os import * は避ける。' },
  { id: 'v211', cat: 'ch10', term: 'shutil', meaning: 'ファイル・ディレクトリの高水準操作。shutil.copyfile()（コピー）、shutil.move()（移動）。' },
  { id: 'v212', cat: 'ch10', term: 'glob', meaning: 'ワイルドカードでファイル名の一覧を得る。glob.glob("*.py")。' },
  { id: 'v213', cat: 'ch10', term: 'argparse', meaning: 'コマンドライン引数を解析するモジュール。sys.argv を自分で解析するより高機能。' },
  { id: 'v214', cat: 'ch10', term: 'sys.stderr / sys.exit()', meaning: 'sys.stderr は標準エラー出力（stdoutがリダイレクトされても表示される）。sys.exit() でスクリプトを終了する。' },
  { id: 'v215', cat: 'ch10', term: 're（正規表現）', meaning: '文字列のパターンマッチング。re.findall() で全マッチをリストで、re.sub() で置換。', ex: String.raw`>>> import re
>>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
['foot', 'fell', 'fastest']` },
  { id: 'v216', cat: 'ch10', term: 'math', meaning: '浮動小数点の数学関数。math.cos()、math.log(1024, 2)、math.pi、math.floor()、math.ceil() など。' },
  { id: 'v217', cat: 'ch10', term: 'random', meaning: 'random.choice(seq) 1つ選ぶ、random.sample(seq, k) 重複なしでk個、random.random() 0以上1未満のfloat、random.randrange(6) 0〜5の整数。' },
  { id: 'v218', cat: 'ch10', term: 'statistics', meaning: '数値データの基本統計。statistics.mean()（平均）、median()（中央値）、variance()（分散）。' },
  { id: 'v219', cat: 'ch10', term: 'urllib.request / smtplib', meaning: 'urllib.request.urlopen() でURLからデータ取得、smtplib でメール送信。' },
  { id: 'v220', cat: 'ch10', term: 'datetime', meaning: '日付と時刻の操作。date.today()、日付の引き算で日数（timedelta）が求まる。strftime() で書式化。' },
  { id: 'v221', cat: 'ch10', term: 'zlib / gzip / bz2 / lzma / zipfile / tarfile', meaning: 'データ圧縮・アーカイブ用のモジュール群。zlib.compress() / zlib.decompress() など。' },
  { id: 'v222', cat: 'ch10', term: 'timeit', meaning: '小さなコード片の実行時間を計測する。大きなコードには profile / pstats。' },
  { id: 'v223', cat: 'ch10', term: 'doctest / unittest', meaning: 'doctest は docstring に書いた対話例をテストとして実行する。unittest はテストを別ファイルにまとめる本格的なテストフレームワーク。' },
  { id: 'v224', cat: 'ch10', term: 'collections.deque', meaning: '両端への追加・取り出しが速いリスト風オブジェクト。append() / popleft() でキューとして使う。' },
  { id: 'v225', cat: 'ch10', term: 'bisect', meaning: 'ソート済みリストを保ったまま挿入する（bisect.insort）。挿入位置の探索に使う。' },
  { id: 'v226', cat: 'ch10', term: 'heapq', meaning: 'リストをヒープとして扱う。heappush() で追加、heappop() で常に最小値を取り出す。' },
  { id: 'v227', cat: 'ch10', term: 'decimal', meaning: '10進数の浮動小数点計算。Decimal("0.70") のように文字列で作ると誤差なく計算できる。金額計算向き。' },
  { id: 'v228', cat: 'ch10', term: 'logging', meaning: 'ログ出力。デフォルトでは WARNING 以上（warning, error, critical）だけが標準エラーに出力され、debug と info は表示されない。' },
  { id: 'v229', cat: 'ch10', term: 'string.Template', meaning: '$name の部分を置き換える簡易テンプレート。substitute() は値がないと KeyError、safe_substitute() はそのまま残す。' },
  { id: 'v230', cat: 'ch10', term: 'reprlib / pprint / textwrap', meaning: 'reprlib.repr() は長いデータを省略表示、pprint は見やすく整形して表示、textwrap.fill() は指定幅で文章を折り返す。' },
  { id: 'v231', cat: 'ch10', term: 'threading', meaning: 'スレッドを使い、複数の処理を並行して実行する（バックグラウンド処理など）。' },
  { id: 'v232', cat: 'ch10', term: 'weakref', meaning: '弱参照。オブジェクトを参照しても、それを生かし続けない（参照カウントを増やさない）。キャッシュなどに使う。' },
  { id: 'v233', cat: 'ch10', term: 'array', meaning: '同じ型の数値だけを詰めて保存する、メモリ効率の良い配列。array("H", [...]) のように型コードを指定。' },
  { id: 'v234', cat: 'ch10', term: 'struct', meaning: 'バイナリデータのパック（pack）・アンパック（unpack）。ファイルのヘッダ解析などに使う。' },
  { id: 'v235', cat: 'ch10', term: 'locale', meaning: '国や地域ごとの書式（数値の桁区切りなど）を扱う。' },

  // ---------- 12章〜 venv・浮動小数点 ----------
  { id: 'v250', cat: 'ch12', term: 'venv（仮想環境）', meaning: 'プロジェクトごとに独立したPython環境を作る。python -m venv 名前 で作成し、activate スクリプトで有効化する。', ex: String.raw`python -m venv tutorial-env
# Windows:    tutorial-env\Scripts\activate
# macOS/Linux: source tutorial-env/bin/activate` },
  { id: 'v251', cat: 'ch12', term: 'pip', meaning: 'パッケージ管理ツール。pip install 名前、pip install 名前==2.6.0（バージョン指定）、pip install --upgrade、pip uninstall、pip show、pip list。' },
  { id: 'v252', cat: 'ch12', term: 'pip freeze / requirements.txt', meaning: 'pip freeze > requirements.txt でインストール済みパッケージ一覧を保存し、pip install -r requirements.txt で同じ環境を再現する。' },
  { id: 'v253', cat: 'ch12', term: 'PyPI', meaning: 'Python Package Index。pip がパッケージをダウンロードしてくる公式のパッケージ置き場。' },
  { id: 'v254', cat: 'ch12', term: '浮動小数点数の誤差', meaning: '0.1 などは2進数で正確に表せないため誤差が出る。0.1 + 0.2 == 0.3 は False。比較には math.isclose() を使う。' },
  { id: 'v255', cat: 'ch12', term: 'round()', meaning: '最も近い値に丸める。ちょうど中間のときは偶数側に丸める（round(2.5) → 2、round(3.5) → 4）。' },
  { id: 'v256', cat: 'ch12', term: 'float.as_integer_ratio()', meaning: '浮動小数点数が実際に保持している値を、正確な分数（分子, 分母）で返す。' },
  { id: 'v257', cat: 'ch12', term: 'math.fsum()', meaning: '足し算での誤差の蓄積を抑えて、正確な合計を計算する。sum([0.1]*10) は 0.9999999999999999 だが math.fsum では 1.0。' },
];
