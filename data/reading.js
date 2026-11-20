// =========================================================
// コード読解データ（本番と同じ4択形式）
//   code   : 読ませるコード（なしでもOK）
//   q      : 問題文
//   choices: 選択肢4つ（表示時はシャッフルされる）
//   answer : 正解の選択肢の番号（0始まり）
//   explain: 解説
//   noRun  : true なら「実行して確かめる」ボタンを出さない
//   monoChoices: false なら選択肢を等幅フォントにしない（文章の選択肢向け）
// =========================================================
window.READING = [
  // ---------- 3章 ----------
  {
    id: 'r01', cat: 'ch3',
    code: String.raw`print(-7 // 2, -7 % 2)`,
    q: '出力結果はどれ？',
    choices: ['-4 1', '-3 -1', '-4 -1', '-3 1'],
    answer: 0,
    explain: '// は負の無限大方向に切り捨てるので -3.5 → -4。% の結果は割る数（2）と同じ符号になるので 1。（-4 * 2 + 1 = -7 で辻褄が合う）',
  },
  {
    id: 'r02', cat: 'ch3',
    code: String.raw`s = 'Python'
print(s[1:4], s[-2:], len(s[10:]))`,
    q: '出力結果はどれ？',
    choices: ['yth on 0', 'yth on IndexError', 'ytho on 0', 'Pyt th 0'],
    answer: 0,
    explain: 's[1:4] はインデックス1〜3で "yth"。s[-2:] は後ろから2文字 "on"。スライスは範囲外を指定してもエラーにならず空文字列 "" になるので len は 0。',
  },
  {
    id: 'r03', cat: 'ch3',
    code: String.raw`print(-3 ** 2)
print(2 ** 3 ** 2)`,
    q: '出力結果はどれ？',
    choices: ['-9\n512', '9\n64', '-9\n64', '9\n512'],
    answer: 0,
    explain: '** は単項マイナスより優先されるので -(3**2) = -9。また ** は右結合なので 2 ** (3 ** 2) = 2 ** 9 = 512。',
  },
  {
    id: 'r04', cat: 'ch3',
    code: String.raw`word = 'py'
print(word * 2 + 'thon')
print('ab' 'cd')`,
    q: '出力結果はどれ？',
    choices: ['pypython\nabcd', 'pythonpython\nab cd', 'pypython\nab cd', 'エラーになる'],
    answer: 0,
    explain: '文字列 * 整数 でくり返し。隣り合う文字列リテラルは自動で連結されるので "abcd"（空白は入らない）。',
  },
  {
    id: 'r05', cat: 'ch3',
    code: String.raw`s = 'Java'
s[0] = 'K'
print(s)`,
    q: '実行結果はどれ？',
    choices: ['TypeError が発生する', 'Kava', 'KJava', 'IndexError が発生する'],
    answer: 0,
    monoChoices: false,
    explain: '文字列はイミュータブル（変更不能）なので、インデックスへの代入は TypeError。新しい文字列を作るなら \'K\' + s[1:] とする。',
  },
  {
    id: 'r06', cat: 'ch3',
    code: String.raw`a, b = 0, 1
while a < 10:
    print(a, end=' ')
    a, b = b, a + b`,
    q: '出力結果はどれ？',
    choices: ['0 1 1 2 3 5 8', '0 1 2 3 4 5 6 7 8 9', '0 1 1 2 3 5 8 13', '1 1 2 3 5 8'],
    answer: 0,
    explain: 'フィボナッチ数列。a, b = b, a + b は右辺を先に全部計算してから代入する。a が 13 になった時点で a < 10 が偽になり終了。',
  },
  {
    id: 'r07', cat: 'ch3',
    code: String.raw`letters = ['a', 'b', 'c', 'd', 'e']
letters[1:3] = ['X']
print(letters)`,
    q: '出力結果はどれ？',
    choices: ["['a', 'X', 'd', 'e']", "['a', 'X', 'c', 'd', 'e']", "['a', ['X'], 'd', 'e']", 'TypeError が発生する'],
    answer: 0,
    explain: 'スライス代入は、指定範囲（インデックス1と2の "b","c"）をまとめて右辺のリストの要素で置き換える。要素数が変わってもよい。',
  },

  // ---------- 4章 ----------
  {
    id: 'r10', cat: 'ch4',
    code: String.raw`for n in range(2, 8):
    for x in range(2, n):
        if n % x == 0:
            break
    else:
        print(n, end=' ')`,
    q: '出力結果はどれ？',
    choices: ['2 3 5 7', '4 6', '2 3 4 5 6 7', '3 5 7'],
    answer: 0,
    explain: 'for の else 節は break されずにループが終わったときに実行される。約数が見つからなかった n（素数）だけ表示。n=2 のとき range(2, 2) は空なのでそのまま else が実行される。',
  },
  {
    id: 'r11', cat: 'ch4',
    code: String.raw`print(list(range(10, 0, -3)))`,
    q: '出力結果はどれ？',
    choices: ['[10, 7, 4, 1]', '[10, 7, 4, 1, -2]', '[7, 4, 1]', '[]'],
    answer: 0,
    explain: 'range(開始, 終了, 増分)。10 から -3 ずつ、0 は含まないので 10, 7, 4, 1。',
  },
  {
    id: 'r12', cat: 'ch4',
    code: String.raw`def f(a, L=[]):
    L.append(a)
    return L

f(1)
f(2)
print(f(3))`,
    q: '出力結果はどれ？',
    choices: ['[1, 2, 3]', '[3]', '[1, 2]', '[[1], [2], [3]]'],
    answer: 0,
    explain: 'デフォルト値は関数定義時に1回だけ評価される。L=[] の同じリストが呼び出しをまたいで使い回されるため、要素がたまっていく。避けるには L=None にして関数内で L = [] を作る。',
  },
  {
    id: 'r13', cat: 'ch4',
    code: String.raw`def parrot(voltage, state='a stiff', action='voom'):
    print(voltage, state, action)`,
    q: 'この関数の呼び出しで、エラーになるものはどれ？',
    choices: ["parrot(voltage=5.0, 'dead')", 'parrot(1000)', "parrot(action='VOOOM', voltage=1000)", "parrot('a million', 'bereft of life', 'jump')"],
    answer: 0,
    noRun: true,
    explain: 'キーワード引数の後に位置引数を書くことはできない（SyntaxError）。キーワード引数同士なら順番は自由。',
  },
  {
    id: 'r14', cat: 'ch4',
    code: String.raw`def f(*args, **kwargs):
    print(args, kwargs)

f(1, 2, x=3)`,
    q: '出力結果はどれ？',
    choices: ["(1, 2) {'x': 3}", "[1, 2] {'x': 3}", "(1, 2, 3) {}", "(1, 2) ('x', 3)"],
    answer: 0,
    explain: '*args には余った位置引数がタプルで、**kwargs には余ったキーワード引数が辞書で入る。',
  },
  {
    id: 'r15', cat: 'ch4',
    code: String.raw`def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
d = {'a': 10, 'b': 20, 'c': 30}
print(add(*nums), add(**d))`,
    q: '出力結果はどれ？',
    choices: ['6 60', '6 abc', '[1, 2, 3] 60', 'TypeError が発生する'],
    answer: 0,
    explain: '*nums はリストを位置引数に展開 → add(1, 2, 3)。**d は辞書をキーワード引数に展開 → add(a=10, b=20, c=30)。',
  },
  {
    id: 'r16', cat: 'ch4',
    code: String.raw`pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda p: p[1])
print(pairs[0])`,
    q: '出力結果はどれ？',
    choices: ["(4, 'four')", "(1, 'one')", "(3, 'three')", "(2, 'two')"],
    answer: 0,
    explain: 'key=lambda p: p[1] なので英単語のアルファベット順（four, one, three, two）に並ぶ。先頭は (4, \'four\')。',
  },
  {
    id: 'r17', cat: 'ch4',
    code: String.raw`def greet(name):
    print('Hi,', name)

r = greet('Ken')
print(r)`,
    q: '出力結果はどれ？',
    choices: ['Hi, Ken\nNone', 'Hi, Ken\nHi, Ken', 'Hi, Ken', 'None'],
    answer: 0,
    explain: 'return 文のない関数は None を返す。greet の中の print で "Hi, Ken" が表示され、r には None が入る。',
  },
  {
    id: 'r18', cat: 'ch4',
    code: String.raw`def f(a, b, /, c, *, d):
    return a + b + c + d`,
    q: '正しく呼び出せるのはどれ？',
    choices: ['f(1, 2, c=3, d=4)', 'f(a=1, b=2, c=3, d=4)', 'f(1, 2, 3, 4)', 'f(1, b=2, c=3, d=4)'],
    answer: 0,
    noRun: true,
    explain: '/ より前（a, b）は位置専用、* より後（d）はキーワード専用、その間の c はどちらでも渡せる。よって f(1, 2, c=3, d=4) や f(1, 2, 3, d=4) が正しい。',
  },
  {
    id: 'r19', cat: 'ch4',
    code: String.raw`i = 5
def f(arg=i):
    print(arg)

i = 6
f()`,
    q: '出力結果はどれ？',
    choices: ['5', '6', 'None', 'NameError が発生する'],
    answer: 0,
    explain: 'デフォルト値は「関数を定義した時点」で評価される。定義時の i は 5 なので、あとで i = 6 にしても arg のデフォルトは 5 のまま。',
  },

  // ---------- 5章 ----------
  {
    id: 'r20', cat: 'ch5',
    code: String.raw`a = [1, 2, 3]
b = a
b.append(4)
c = a[:]
c.append(5)
print(a)`,
    q: '出力結果はどれ？',
    choices: ['[1, 2, 3, 4]', '[1, 2, 3]', '[1, 2, 3, 4, 5]', '[1, 2, 3, 5]'],
    answer: 0,
    explain: 'b = a は同じリストを指すので b への append は a にも反映される。a[:] は新しいリスト（浅いコピー）なので c への変更は a に影響しない。',
  },
  {
    id: 'r21', cat: 'ch5',
    code: String.raw`nums = [3, 1, 2]
result = nums.sort()
print(result, nums)`,
    q: '出力結果はどれ？',
    choices: ['None [1, 2, 3]', '[1, 2, 3] [1, 2, 3]', '[1, 2, 3] [3, 1, 2]', 'None [3, 1, 2]'],
    answer: 0,
    explain: 'list.sort() はリストそのものを並べ替えて None を返す。新しいリストが欲しいときは sorted(nums) を使う。',
  },
  {
    id: 'r22', cat: 'ch5',
    code: String.raw`print([x * y for x in [1, 2] for y in [10, 20]])`,
    q: '出力結果はどれ？',
    choices: ['[10, 20, 20, 40]', '[10, 40]', '[10, 20, 30, 40]', '[[10, 20], [20, 40]]'],
    answer: 0,
    explain: 'for を2つ並べた内包表記は、左の for が外側のループ。x=1 のとき y=10,20 → 10,20、x=2 のとき → 20,40。',
  },
  {
    id: 'r23', cat: 'ch5',
    code: String.raw`t1 = (1)
t2 = (1,)
print(type(t1).__name__, type(t2).__name__)`,
    q: '出力結果はどれ？',
    choices: ['int tuple', 'tuple tuple', 'int int', 'tuple int'],
    answer: 0,
    explain: '(1) はただの括弧付きの式で整数 1。要素1つのタプルは (1,) のように末尾にカンマが必要。タプルを作るのは括弧ではなくカンマ。',
  },
  {
    id: 'r24', cat: 'ch5',
    code: String.raw`a = set('abracadabra')
b = set('alacazam')
print(sorted(a - b))`,
    q: '出力結果はどれ？',
    choices: ["['b', 'd', 'r']", "['l', 'm', 'z']", "['a', 'c']", "['b', 'r', 'd', 'b', 'r']"],
    answer: 0,
    explain: "a = {'a','b','r','c','d'}、b = {'a','l','c','z','m'}。差集合 a - b は a にあって b にないもの → b, d, r。集合なので重複はない。",
  },
  {
    id: 'r25', cat: 'ch5',
    code: String.raw`x = {}
y = {1, 2}
print(type(x).__name__, type(y).__name__)`,
    q: '出力結果はどれ？',
    choices: ['dict set', 'set set', 'dict dict', 'set dict'],
    answer: 0,
    explain: '空の {} は辞書。値だけを並べた {1, 2} は集合。空の集合を作るときは set() を使う。',
  },
  {
    id: 'r26', cat: 'ch5',
    code: String.raw`d = {'a': 1, 'b': 2}
d['c'] = 3
del d['a']
print(list(d), d.get('z', 0))`,
    q: '出力結果はどれ？',
    choices: ["['b', 'c'] 0", "[2, 3] 0", "['b', 'c'] None", 'KeyError が発生する'],
    answer: 0,
    explain: 'list(辞書) はキーのリスト（挿入順）。get(キー, デフォルト) は、キーがなければデフォルト値を返すので KeyError にならない。',
  },
  {
    id: 'r27', cat: 'ch5',
    code: String.raw`s1, s2, s3 = '', 'Trondheim', 'Hammer Dance'
print(s1 or s2 or s3)
print(len(s1 and s2))`,
    q: '出力結果はどれ？',
    choices: ['Trondheim\n0', 'True\n0', 'Hammer Dance\n9', 'Trondheim\n9'],
    answer: 0,
    explain: 'or は最初の「真」の値を返す（\'\' は偽なので s2）。and は最初の「偽」の値を返す → s1 の \'\' なので長さ 0。and / or は True/False ではなく評価した値そのものを返す。',
  },
  {
    id: 'r28', cat: 'ch5',
    code: String.raw`print((1, 2, 3) < (1, 2, 4), [1, 2] < [1, 2, -1], 'ABC' < 'C' < 'Pascal')`,
    q: '出力結果はどれ？',
    choices: ['True True True', 'True False True', 'True True False', 'False True True'],
    answer: 0,
    explain: 'シーケンスは先頭から辞書式に比較する。[1, 2] は [1, 2, -1] の先頭部分なので短い方が小さい。\'ABC\' < \'C\' < \'Pascal\' は比較の連鎖で両方 True。',
  },
  {
    id: 'r29', cat: 'ch5',
    code: String.raw`for i, (q, a) in enumerate(zip(['name', 'quest'], ['lancelot', 'grail']), 1):
    print(i, q, a)`,
    q: '出力結果はどれ？',
    choices: ['1 name lancelot\n2 quest grail', '0 name lancelot\n1 quest grail', '1 name quest\n2 lancelot grail', "1 ('name', 'lancelot')\n2 ('quest', 'grail')"],
    answer: 0,
    explain: 'zip で (\'name\',\'lancelot\'), (\'quest\',\'grail\') の組を作り、enumerate の第2引数 1 で番号を1から始める。',
  },
  {
    id: 'r30', cat: 'ch5',
    code: String.raw`queue = [1, 2, 3]
queue.insert(0, 0)
queue.remove(2)
print(queue.pop(0), queue)`,
    q: '出力結果はどれ？',
    choices: ['0 [1, 3]', '0 [1, 2, 3]', '3 [0, 1]', '0 [2, 3]'],
    answer: 0,
    explain: 'insert(0, 0) で先頭に 0 → [0,1,2,3]。remove(2) は値 2 を削除 → [0,1,3]。pop(0) は先頭を取り出して 0 を返し、残りは [1, 3]。',
  },

  // ---------- 6章 ----------
  {
    id: 'r35', cat: 'ch6',
    q: 'mymod.py を「python mymod.py」で実行したとき、mymod.py の中の __name__ の値は？',
    choices: ["'__main__'", "'mymod'", "'mymod.py'", 'None'],
    answer: 0,
    explain: 'スクリプトとして直接実行されると __name__ は \'__main__\'。他のファイルから import mymod されたときは \'mymod\' になる。',
  },
  {
    id: 'r36', cat: 'ch6',
    q: 'ディレクトリを Python のパッケージとして扱わせるために置くファイルは？',
    choices: ['__init__.py', '__main__.py', 'setup.py', '__all__.py'],
    answer: 0,
    explain: 'パッケージのディレクトリには __init__.py を置く（空ファイルでもよい）。__init__.py の中で __all__ を定義すると from パッケージ import * の対象を指定できる。',
  },
  {
    id: 'r37', cat: 'ch6',
    q: 'モジュールを import するとき、最初に検索される場所は？',
    choices: ['実行したスクリプトがあるディレクトリ', '環境変数 PYTHONPATH のディレクトリ', 'Python のインストール先の標準ライブラリ', 'カレントユーザーのホームディレクトリ'],
    answer: 0,
    monoChoices: false,
    explain: 'まず組み込みモジュールを探し、なければ sys.path を順に探す。sys.path は ①入力スクリプトのあるディレクトリ ②PYTHONPATH ③インストールごとのデフォルト の順で初期化される。',
  },

  // ---------- 7章 ----------
  {
    id: 'r40', cat: 'ch7',
    code: String.raw`pi = 3.14159
print(f'{pi:.2f}|{42:>5}|{7:03}')`,
    q: '出力結果はどれ？',
    choices: ['3.14|   42|007', '3.14|42   |700', '3.1|   42|007', '3.14|00042|  7'],
    answer: 0,
    explain: '.2f は小数点以下2桁。>5 は幅5で右寄せ。03 は幅3でゼロ埋め。',
  },
  {
    id: 'r41', cat: 'ch7',
    code: String.raw`print('{1} and {0}'.format('spam', 'eggs'))
print('{0:>4}|{0:<4}|'.format('ab'))`,
    q: '出力結果はどれ？',
    choices: ['eggs and spam\n  ab|ab  |', 'spam and eggs\n  ab|ab  |', 'eggs and spam\nab  |  ab|', 'spam and eggs\nab  |  ab|'],
    answer: 0,
    explain: '{1} {0} は format の引数の位置番号。> は右寄せ、< は左寄せ。',
  },
  {
    id: 'r42', cat: 'ch7',
    code: String.raw`s = 'hello\n'
print(repr(s))
print(str(1/2), repr('a'))`,
    q: '出力結果はどれ？',
    choices: ["'hello\\n'\n0.5 'a'", "hello\n\n0.5 a", "'hello'\n0.5 a", "hello\\n\n0.5 'a'"],
    answer: 0,
    explain: 'repr() はインタープリタ向けの表現を返すので、クォートが付き、改行も \\n と表示される。str() は人間向けの表現。',
  },
  {
    id: 'r43', cat: 'ch7',
    code: String.raw`import json
x = [1, 'simple', True, None]
print(json.dumps(x))`,
    q: '出力結果はどれ？',
    choices: ['[1, "simple", true, null]', "[1, 'simple', True, None]", '[1, "simple", True, None]', "[1, 'simple', true, null]"],
    answer: 0,
    explain: 'json.dumps は Python のオブジェクトを JSON 形式の文字列にする。JSON では文字列はダブルクォート、True→true、None→null。',
  },
  {
    id: 'r44', cat: 'ch7',
    q: "open('data.txt', 'a') で開いたファイルに write() したときの動作は？",
    choices: ['ファイルの末尾に追記される', 'ファイルの内容が消えて先頭から書き込まれる', '読み込み専用なのでエラーになる', 'バイナリモードで書き込まれる'],
    answer: 0,
    monoChoices: false,
    explain: "'a' は追記モード（append）。'w' は上書き（既存の内容は消える）、'r' は読み込み（デフォルト）、'b' を付けるとバイナリモード。",
  },

  // ---------- 8章 ----------
  {
    id: 'r50', cat: 'ch8',
    code: String.raw`def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print('zero!')
    else:
        print('result', result)
    finally:
        print('finally')

divide(2, 1)
divide(2, 0)`,
    q: '出力結果はどれ？',
    choices: ['result 2.0\nfinally\nzero!\nfinally', 'result 2.0\nzero!\nfinally', 'result 2.0\nfinally\nzero!', 'result 2\nfinally\nzero!\nfinally'],
    answer: 0,
    explain: '例外なし → else → finally。例外あり → except → finally。finally は毎回必ず実行される。/ の結果は float なので 2.0。',
  },
  {
    id: 'r51', cat: 'ch8',
    code: String.raw`def f():
    try:
        return 'try'
    finally:
        print('finally')

print(f())`,
    q: '出力結果はどれ？',
    choices: ['finally\ntry', 'try\nfinally', 'try', 'finally'],
    answer: 0,
    explain: 'try 節で return しても、関数から戻る直前に finally 節が実行される。そのため先に "finally" が表示され、そのあと戻り値 "try" が print される。',
  },
  {
    id: 'r52', cat: 'ch8',
    code: String.raw`class B(Exception):
    pass
class C(B):
    pass
class D(C):
    pass

for cls in [B, C, D]:
    try:
        raise cls()
    except B:
        print('B', end=' ')
    except C:
        print('C', end=' ')
    except D:
        print('D', end=' ')`,
    q: '出力結果はどれ？',
    choices: ['B B B', 'B C D', 'D C B', 'B C C'],
    answer: 0,
    explain: 'except は上から順に判定され、最初に一致した1つだけが実行される。C も D も B のサブクラスなので、すべて最初の except B で捕まる。順番を except D → C → B にすると B C D になる。',
  },
  {
    id: 'r53', cat: 'ch8',
    code: String.raw`try:
    n = int('3.5')
except ValueError:
    print('ValueError')
except TypeError:
    print('TypeError')
else:
    print(n)`,
    q: '出力結果はどれ？',
    choices: ['ValueError', '3', '3.5', 'TypeError'],
    answer: 0,
    explain: "int() に小数の形の文字列 '3.5' を渡すと ValueError（値が不適切）。int(3.5) のように float を渡すなら 3 になる。",
  },
  {
    id: 'r54', cat: 'ch8',
    code: String.raw`try:
    raise Exception('spam', 'eggs')
except Exception as inst:
    x, y = inst.args
    print(type(inst).__name__, x, y)`,
    q: '出力結果はどれ？',
    choices: ['Exception spam eggs', "Exception ('spam', 'eggs')", 'spam eggs', 'ValueError が発生する'],
    answer: 0,
    explain: '例外に渡した引数は args 属性にタプルで入る。アンパックして x=\'spam\', y=\'eggs\'。',
  },
  {
    id: 'r55', cat: 'ch8',
    code: String.raw`d = {'a': 1}
try:
    print(d['b'])
except KeyError:
    print('no key')
except Exception:
    print('error')`,
    q: '出力結果はどれ？',
    choices: ['no key', 'error', 'None', 'no key\nerror'],
    answer: 0,
    explain: '存在しないキーを [] で参照すると KeyError。最初に一致した except KeyError だけが実行される（except は1つしか実行されない）。',
  },

  // ---------- 9章 ----------
  {
    id: 'r60', cat: 'ch9',
    code: String.raw`class Dog:
    tricks = []
    def __init__(self, name):
        self.name = name
    def add_trick(self, trick):
        self.tricks.append(trick)

d = Dog('Fido')
e = Dog('Buddy')
d.add_trick('roll over')
e.add_trick('play dead')
print(d.tricks)`,
    q: '出力結果はどれ？',
    choices: ["['roll over', 'play dead']", "['roll over']", "['play dead']", '[]'],
    answer: 0,
    explain: 'tricks はクラス変数なので全インスタンスで共有される。d と e が同じリストに追加するので両方の芸が入る。インスタンスごとに持たせたいなら __init__ で self.tricks = [] とする。',
  },
  {
    id: 'r61', cat: 'ch9',
    code: String.raw`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return '...'

class Cat(Animal):
    def speak(self):
        return self.name + ': meow'

c = Cat('Tama')
print(c.speak(), isinstance(c, Animal))`,
    q: '出力結果はどれ？',
    choices: ['Tama: meow True', '... True', 'Tama: meow False', 'AttributeError が発生する'],
    answer: 0,
    explain: 'Cat は __init__ を定義していないので親の Animal.__init__ が使われ name が設定される。speak は Cat でオーバーライドされている。Cat のインスタンスは Animal のインスタンスでもある。',
  },
  {
    id: 'r62', cat: 'ch9',
    code: String.raw`class A:
    def __init__(self):
        self.__x = 1

a = A()
print(a._A__x)
print(a.__x)`,
    q: '実行結果として正しいのはどれ？',
    choices: ['1 と表示されたあと AttributeError', '1 と 1 が表示される', '最初の print で AttributeError', 'SyntaxError が発生する'],
    answer: 0,
    monoChoices: false,
    explain: '__x のように先頭にアンダースコア2つの属性は、_クラス名__x に名前が変換される（名前マングリング）。そのため a._A__x ではアクセスでき、a.__x では AttributeError。',
  },
  {
    id: 'r63', cat: 'ch9',
    code: String.raw`def reverse(data):
    for i in range(len(data) - 1, -1, -1):
        yield data[i]

print(''.join(reverse('golf')))`,
    q: '出力結果はどれ？',
    choices: ['flog', 'golf', "['f', 'l', 'o', 'g']", '<generator object ...>'],
    answer: 0,
    explain: 'ジェネレータは yield で値を1つずつ返す。末尾から先頭に向かって文字を返すので、join すると "flog"。',
  },
  {
    id: 'r64', cat: 'ch9',
    code: String.raw`it = iter('ab')
print(next(it), next(it))
print(next(it))`,
    q: '実行結果として正しいのはどれ？',
    choices: ['a b と表示されたあと StopIteration', 'a b と a が表示される', 'a b と None が表示される', 'a a と b が表示される'],
    answer: 0,
    monoChoices: false,
    explain: 'イテレータは要素を使い切ったあとに next() を呼ぶと StopIteration 例外を送出する（for 文はこれを合図にループを終える）。',
  },
  {
    id: 'r65', cat: 'ch9',
    code: String.raw`def scope_test():
    spam = 'test'
    def do_local():
        spam = 'local'
    def do_nonlocal():
        nonlocal spam
        spam = 'nonlocal'
    do_local()
    print(spam)
    do_nonlocal()
    print(spam)

scope_test()`,
    q: '出力結果はどれ？',
    choices: ['test\nnonlocal', 'local\nnonlocal', 'test\ntest', 'local\nlocal'],
    answer: 0,
    explain: 'do_local の spam = \'local\' は新しいローカル変数を作るだけで外側には影響しない。nonlocal 宣言すると外側の関数の spam に代入できる。',
  },
  {
    id: 'r66', cat: 'ch9',
    code: String.raw`count = 0
def up():
    global count
    count += 1

up()
up()
print(count)`,
    q: '出力結果はどれ？',
    choices: ['2', '0', '1', 'UnboundLocalError が発生する'],
    answer: 0,
    explain: 'global 宣言したので関数内からモジュールの count を書き換えられる。もし global がなければ、count += 1 はローカル変数とみなされ UnboundLocalError になる。',
  },
  {
    id: 'r67', cat: 'ch9',
    code: String.raw`class MyClass:
    i = 12345
    def f(self):
        return 'hello'

x = MyClass()
print(x.f() == MyClass.f(x), MyClass.i)`,
    q: '出力結果はどれ？',
    choices: ['True 12345', 'False 12345', 'TypeError が発生する', 'True None'],
    answer: 0,
    explain: 'x.f() は MyClass.f(x) と同じ意味（インスタンスが第1引数 self として渡される）。クラス変数はクラス名からも参照できる。',
  },

  // ---------- 10〜11章 ----------
  {
    id: 'r70', cat: 'ch10',
    code: String.raw`import math
print(math.floor(-2.5), math.ceil(-2.5))`,
    q: '出力結果はどれ？',
    choices: ['-3 -2', '-2 -3', '-2 -2', '-3 -3'],
    answer: 0,
    explain: 'floor は「それ以下で最大の整数」なので -3、ceil は「それ以上で最小の整数」なので -2。',
  },
  {
    id: 'r71', cat: 'ch10',
    code: String.raw`import statistics
data = [1, 2, 2, 3, 7]
print(statistics.mean(data), statistics.median(data))`,
    q: '出力結果はどれ？',
    choices: ['3 2', '2 2', '3 3', '3.0 2.5'],
    answer: 0,
    explain: 'mean は平均 (1+2+2+3+7)/5 = 3。median は並べたときの真ん中の値で 2。',
  },
  {
    id: 'r72', cat: 'ch10',
    code: String.raw`from collections import deque
q = deque(['a', 'b', 'c'])
q.append('d')
print(q.popleft(), list(q))`,
    q: '出力結果はどれ？',
    choices: ["a ['b', 'c', 'd']", "d ['a', 'b', 'c']", "a ['a', 'b', 'c', 'd']", "d ['b', 'c']"],
    answer: 0,
    explain: 'deque の append は右端（末尾）に追加、popleft は左端（先頭）から取り出す。先入れ先出し（キュー）。',
  },
  {
    id: 'r73', cat: 'ch10',
    code: String.raw`import logging
logging.debug('debug')
logging.info('info')
logging.warning('warning')
logging.error('error')`,
    q: 'デフォルト設定のとき、出力されるメッセージは？',
    choices: ['warning と error の2つ', 'すべて（4つ）', 'error だけ', 'info・warning・error の3つ'],
    answer: 0,
    monoChoices: false,
    explain: 'logging のデフォルトのレベルは WARNING。WARNING 以上（warning, error, critical）だけが標準エラー出力に表示される。',
  },
  {
    id: 'r74', cat: 'ch10',
    q: 'ファイルやディレクトリのコピー・移動に使う標準ライブラリのモジュールは？',
    choices: ['shutil', 'glob', 'sys', 'struct'],
    answer: 0,
    explain: 'shutil は高水準のファイル操作（copyfile, move など）。glob はワイルドカードでファイル名の一覧を取得、sys はインタープリタ関連、struct はバイナリデータの操作。',
  },
  {
    id: 'r75', cat: 'ch10',
    code: String.raw`import re
print(re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat'))`,
    q: '出力結果はどれ？',
    choices: ['cat in the hat', 'cat in the the hat', 'cat in hat', 'cat in the  hat'],
    answer: 0,
    explain: '(\\b[a-z]+) \\1 は「単語＋空白＋同じ単語」にマッチする。\\1 で置き換えるので、重複した "the the" が "the" になる。',
  },
  {
    id: 'r76', cat: 'ch10',
    code: String.raw`from decimal import Decimal
print(round(Decimal('0.70') * Decimal('1.05'), 2))
print(round(.70 * 1.05, 2))`,
    q: '出力結果はどれ？',
    choices: ['0.74\n0.73', '0.74\n0.74', '0.73\n0.73', '0.735\n0.73'],
    answer: 0,
    explain: 'Decimal は10進数で正確に計算するので 0.735 → 0.74（偶数丸め）。float は 0.7349999... のように誤差があるため 0.73 になる。金額計算には decimal を使う。',
  },
  {
    id: 'r77', cat: 'ch10',
    code: String.raw`from string import Template
t = Template('$who likes $what')
print(t.safe_substitute(who='tim'))`,
    q: '出力結果はどれ？',
    choices: ['tim likes $what', 'tim likes ', 'KeyError が発生する', '$who likes $what'],
    answer: 0,
    explain: 'safe_substitute は値が与えられなかったプレースホルダをそのまま残す。substitute だと KeyError になる。',
  },

  // ---------- 12章〜 ----------
  {
    id: 'r80', cat: 'ch12',
    code: String.raw`print(0.1 + 0.2 == 0.3, round(2.5), round(3.5))`,
    q: '出力結果はどれ？',
    choices: ['False 2 4', 'True 3 4', 'False 3 4', 'True 2 4'],
    answer: 0,
    explain: '0.1 や 0.2 は2進数で正確に表せないため誤差が出て False。round はちょうど中間のとき偶数側に丸めるので round(2.5) は 2、round(3.5) は 4。',
  },
  {
    id: 'r81', cat: 'ch12',
    q: 'カレントディレクトリに仮想環境 tutorial-env を作るコマンドは？',
    choices: ['python -m venv tutorial-env', 'pip install venv tutorial-env', 'python --venv tutorial-env', 'venv create tutorial-env'],
    answer: 0,
    explain: 'python -m venv ディレクトリ名 で仮想環境を作る。有効化は Windows なら tutorial-env\\Scripts\\activate、macOS/Linux なら source tutorial-env/bin/activate。',
  },
  {
    id: 'r82', cat: 'ch12',
    q: 'インストール済みパッケージの一覧を requirements.txt に書き出すコマンドは？',
    choices: ['pip freeze > requirements.txt', 'pip list -r requirements.txt', 'pip show > requirements.txt', 'pip install -r requirements.txt'],
    answer: 0,
    explain: 'pip freeze は pip install で読める形式で一覧を出力する。それをリダイレクトして保存し、別環境では pip install -r requirements.txt で再現する。',
  },
];
