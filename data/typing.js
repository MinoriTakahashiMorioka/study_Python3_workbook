// =========================================================
// 写経データ
//   code   : お手本コード（String.raw`...` で書く。インデントはスペース4つ）
//   explain: 「このコードは何をしているか」の解説
// =========================================================
window.TYPING = [
  {
    id: 't01', cat: 'ch3', title: 'はじめての計算と文字列',
    code: String.raw`width = 20
height = 5 * 9
print(width * height)
print(17 // 3, 17 % 3, 2 ** 7)
word = 'Python'
print(word[0], word[-1], word[0:2])
print(len(word))`,
    explain: `・変数に値を代入して掛け算 → 900
・// は切り捨て除算（5）、% は余り（2）、** はべき乗（128）
・word[0] は先頭 'P'、word[-1] は末尾 'n'、word[0:2] は 0以上2未満 'Py'
・len() で文字数（6）を数える`,
  },
  {
    id: 't02', cat: 'ch3', title: 'フィボナッチ数列（多重代入）',
    code: String.raw`a, b = 0, 1
while a < 100:
    print(a, end=',')
    a, b = b, a + b
print()`,
    explain: `Pythonチュートリアル3章の定番コード。
・a, b = b, a + b は「右辺を全部計算してから」左辺に代入する（多重代入）
  → 一時変数なしで「次の値」に進められる
・print(a, end=',') で改行の代わりに , を出力
・最後の print() で改行だけ出す
出力: 0,1,1,2,3,5,8,13,21,34,55,89,`,
  },
  {
    id: 't03', cat: 'ch4', title: 'if / elif / else',
    code: String.raw`for x in [-3, 0, 1, 42]:
    if x < 0:
        print(x, 'is negative')
    elif x == 0:
        print(x, 'is zero')
    elif x == 1:
        print(x, 'is one')
    else:
        print(x, 'is more')`,
    explain: `・リストの要素を for で1つずつ x に取り出す
・if → elif → else の順に判定し、最初に True になったブロックだけ実行
・elif は「else if」の略。いくつでも並べられる`,
  },
  {
    id: 't04', cat: 'ch4', title: 'for...else で素数判定',
    code: String.raw`for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n // x)
            break
    else:
        print(n, 'is a prime number')`,
    explain: `試験頻出！「ループの else 節」。
・内側の for で 2〜n-1 の約数を探す
・割り切れたら break → else 節は実行されない
・最後まで break されなかった（＝約数がない）ときだけ else が実行され「素数」と表示
※ else は if ではなく「for」と同じインデントに書く点に注意`,
  },
  {
    id: 't05', cat: 'ch4', title: '関数・デフォルト引数・キーワード引数',
    code: String.raw`def greet(name, greeting='Hello', mark='!'):
    """Return a greeting message."""
    return f'{greeting}, {name}{mark}'

print(greet('Taro'))
print(greet('Hanako', 'Hi'))
print(greet('Ken', mark='?'))
print(greet.__doc__)`,
    explain: `・greeting='Hello' のように「仮引数=値」でデフォルト値を設定
・呼び出し側で省略するとデフォルト値が使われる
・mark='?' のようにキーワード引数で、途中の引数を飛ばして指定できる
・関数の最初の文字列は docstring。__doc__ で取り出せる`,
  },
  {
    id: 't06', cat: 'ch4', title: '*args と **kwargs',
    code: String.raw`def report(title, *args, **kwargs):
    print('title:', title)
    print('args:', args)
    for key, value in kwargs.items():
        print(key, '=', value)

report('test', 1, 2, 3, user='taro', score=80)

nums = [10, 20]
opts = {'user': 'jiro'}
report('unpack', *nums, **opts)`,
    explain: `・*args … 余った位置引数がタプル (1, 2, 3) で入る
・**kwargs … 余ったキーワード引数が辞書 {'user': 'taro', 'score': 80} で入る
・呼び出し側で *nums と書くとリストを位置引数に、**opts と書くと辞書をキーワード引数に「アンパック（展開）」して渡せる`,
  },
  {
    id: 't07', cat: 'ch4', title: 'lambda と sort の key',
    code: String.raw`pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
print(pairs)

words = ['banana', 'kiwi', 'apple']
print(sorted(words, key=len))
print(sorted(words, reverse=True))`,
    explain: `・lambda 引数: 式 で小さな無名関数を作れる
・sort(key=関数) は、各要素に関数を適用した結果で並べ替える
  → pair[1]（英単語）のアルファベット順に並ぶ
・sorted() は新しいリストを返す（元は変わらない）。key=len で文字数順、reverse=True で降順`,
  },
  {
    id: 't08', cat: 'ch5', title: 'リストのメソッド',
    code: String.raw`fruits = ['orange', 'apple', 'pear', 'banana', 'apple']
print(fruits.count('apple'))
print(fruits.index('banana'))
fruits.append('grape')
fruits.insert(0, 'kiwi')
fruits.remove('apple')
last = fruits.pop()
fruits.sort()
print(last, fruits)`,
    explain: `・count(x) … x の個数（2）
・index(x) … x が最初に現れる位置（3）
・append(x) は末尾に追加、insert(i, x) は位置 i に挿入
・remove(x) は最初に見つかった x だけを削除
・pop() は末尾を取り出して返す（'grape'）
・sort() はリスト自体を並べ替える（戻り値は None）`,
  },
  {
    id: 't09', cat: 'ch5', title: '内包表記（リスト・辞書・集合）',
    code: String.raw`squares = [x ** 2 for x in range(10)]
evens = [x for x in squares if x % 2 == 0]
pairs = [(x, y) for x in [1, 2] for y in [3, 1] if x != y]
lengths = {w: len(w) for w in ['spam', 'egg']}
chars = {c for c in 'abracadabra' if c not in 'abc'}
print(evens)
print(pairs)
print(lengths)
print(sorted(chars))`,
    explain: `・[式 for 変数 in ... if 条件] でリストを1行で作れる
・for を2つ並べると、左が外側のループになる（ネストしたforと同じ順）
・{キー: 値 for ...} は辞書内包表記、{式 for ...} は集合内包表記
・集合は順番がないので sorted() で並べて表示`,
  },
  {
    id: 't10', cat: 'ch5', title: '辞書とループのテクニック',
    code: String.raw`tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
del tel['sape']
print(list(tel), 'jack' in tel)

for name, number in tel.items():
    print(name, number)

for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)

questions = ['name', 'quest']
answers = ['lancelot', 'the holy grail']
for q, a in zip(questions, answers):
    print(f'What is your {q}?  It is {a}.')`,
    explain: `・辞書[キー] = 値 で追加、del でキーごと削除
・list(辞書) でキーの一覧、in でキーの存在チェック
・items() でキーと値を同時に取り出す
・enumerate() で番号と要素を同時に
・zip() で複数のリストを並行してループ`,
  },
  {
    id: 't11', cat: 'ch7', title: '書式化とファイル入出力',
    code: String.raw`import math
print(f'pi = {math.pi:.3f}')
for x in range(1, 4):
    print(f'{x:2d} {x*x:3d} {x*x*x:4d}')

with open('memo.txt', 'w', encoding='utf-8') as f:
    f.write('first line\n')
    f.write('second line\n')

with open('memo.txt', encoding='utf-8') as f:
    for line in f:
        print(line, end='')`,
    explain: `・f'{値:.3f}' で小数点以下3桁、{x:3d} で幅3の右寄せ整数
・with open(..., 'w') as f: でファイルに書き込み。ブロックを抜けると自動でクローズ
・'w' は上書き、'a' は追記、指定なしは 'r'（読み込み）
・for line in f で1行ずつ読む。line には末尾の改行が含まれるので end='' で二重改行を防ぐ`,
  },
  {
    id: 't12', cat: 'ch8', title: 'try / except / else / finally',
    code: String.raw`def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print('division by zero!')
    else:
        print('result is', result)
    finally:
        print('executing finally clause')

divide(2, 1)
divide(2, 0)`,
    explain: `試験頻出！実行順を覚えよう。
・divide(2, 1) … 例外なし → else 節 → finally 節
・divide(2, 0) … ZeroDivisionError → except 節 → finally 節
・else は「例外が起きなかったときだけ」
・finally は「何があっても必ず最後に」実行される`,
  },
  {
    id: 't13', cat: 'ch8', title: '自作の例外と raise',
    code: String.raw`class NegativeError(Exception):
    pass

def sqrt_int(n):
    if n < 0:
        raise NegativeError(f'{n} is negative')
    return int(n ** 0.5)

for value in [16, -4]:
    try:
        print(sqrt_int(value))
    except NegativeError as e:
        print('Error:', e)`,
    explain: `・Exception を継承するだけで自分の例外クラスが作れる（中身は pass でOK）
・raise 例外クラス(メッセージ) で例外を発生させる
・except 例外 as e で例外オブジェクトを受け取り、print(e) でメッセージを表示`,
  },
  {
    id: 't14', cat: 'ch9', title: 'クラス・クラス変数・インスタンス変数',
    code: String.raw`class Dog:
    kind = 'canine'

    def __init__(self, name):
        self.name = name
        self.tricks = []

    def add_trick(self, trick):
        self.tricks.append(trick)

d = Dog('Fido')
e = Dog('Buddy')
d.add_trick('roll over')
e.add_trick('play dead')
print(d.kind, e.kind)
print(d.name, d.tricks)
print(e.name, e.tricks)`,
    explain: `・kind はクラス変数 → すべてのインスタンスで共有
・__init__ の中で self.name / self.tricks に代入したものはインスタンス変数 → 各インスタンス固有
・tricks を __init__ の中で作っているので、d と e の芸は混ざらない
  （もし tricks = [] をクラス変数にすると全員で共有されてしまう＝試験頻出のひっかけ）`,
  },
  {
    id: 't15', cat: 'ch9', title: '継承と super()',
    code: String.raw`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return '...'

    def introduce(self):
        return f'{self.name}: {self.speak()}'

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)
        self.color = color

    def speak(self):
        return 'nya-'

for a in [Animal('???'), Cat('Tama', 'white')]:
    print(a.introduce())
print(isinstance(Cat('x', 'y'), Animal), issubclass(Cat, Animal))`,
    explain: `・class Cat(Animal): で Animal を継承
・super().__init__(name) で親クラスの初期化を呼び出してから、自分の属性を追加
・speak() をオーバーライド（上書き）すると、親の introduce() から呼ばれる speak() も Cat のものになる
・isinstance / issubclass はどちらも True`,
  },
  {
    id: 't16', cat: 'ch9', title: 'ジェネレータとイテレータ',
    code: String.raw`def countdown(n):
    while n > 0:
        yield n
        n -= 1

for i in countdown(3):
    print(i)

it = iter('ab')
print(next(it), next(it))
print(sum(x * x for x in range(4)))`,
    explain: `・yield を含む関数はジェネレータになる。呼ぶたびに続きから実行して値を1つずつ返す
・iter() でイテレータを作り、next() で1つずつ取り出す（尽きると StopIteration）
・(式 for ...) のジェネレータ式は、リストを作らずに値を生み出す → 0+1+4+9 = 14`,
  },
  {
    id: 't17', cat: 'ch10', title: '標準ライブラリいろいろ',
    code: String.raw`import math
import random
import statistics
from collections import deque

print(math.floor(2.7), math.ceil(2.1), math.sqrt(16))
random.seed(1)
print(random.choice(['apple', 'pear', 'banana']) in ['apple', 'pear', 'banana'])
data = [2.75, 1.75, 1.25, 0.25, 0.5, 1.25, 3.5]
print(statistics.mean(data), statistics.median(data))
queue = deque(['Eric', 'John'])
queue.append('Terry')
print(queue.popleft(), list(queue))`,
    explain: `・math.floor 切り捨て、math.ceil 切り上げ、math.sqrt 平方根（float を返す）
・random.choice はリストから1つランダムに選ぶ
・statistics.mean 平均（1.6071...）、median 中央値（1.25）
・deque は先頭からの取り出し popleft() が速い。キューに最適`,
  },
];
