// =========================================================
// 穴埋めデータ
//   code の中の {{答え}} が空欄になる。別解は {{答え1||答え2}}
//   採点は「空白を無視」「' と " は同じ扱い」
//   goal   : 問題の説明（省略可）
//   explain: 正解後に表示する解説
// =========================================================
window.FILL = [
  {
    id: 'f01', cat: 'ch4', title: 'for と range と continue',
    goal: '1〜5 のうち奇数だけを表示する（出力: 1 3 5）',
    code: String.raw`for i in {{range}}(1, {{6}}):
    if i % 2 == 0:
        {{continue}}
    print(i, end=' ')`,
    explain: 'range(1, 6) は 1〜5（6は含まない）。偶数のときは continue で print を飛ばして次のくり返しへ。',
  },
  {
    id: 'f02', cat: 'ch4', title: 'for...else で素数判定',
    goal: 'n が素数かどうかを表示する',
    code: String.raw`n = 17
for x in range(2, n):
    if n % x == 0:
        print(n, 'is not prime')
        {{break}}
{{else}}:
    print(n, 'is prime')`,
    explain: '割り切れたら break でループを抜ける。最後まで break されなかったときだけ、for と同じインデントの else 節が実行される。',
  },
  {
    id: 'f03', cat: 'ch4', title: '関数の定義と戻り値',
    goal: 'デフォルト引数付きの関数を作る',
    code: String.raw`{{def}} greet(name, {{greeting}}='Hello'):
    {{return}} f'{greeting}, {name}!'

print(greet('Taro'))
print(greet('Hanako', greeting='Hi'))`,
    explain: 'def 関数名(引数): で定義し、return で値を返す。greeting=\'Hello\' はデフォルト引数。呼び出し側で greeting=\'Hi\' とキーワード指定もできる。',
  },
  {
    id: 'f04', cat: 'ch4', title: '可変長引数',
    goal: '何個でも数を受け取って合計する関数',
    code: String.raw`def total({{*}}nums):
    s = 0
    for n in nums:
        s += n
    return s

print(total(1, 2, 3))
values = [10, 20, 30]
print(total({{*}}values))`,
    explain: '定義側の *nums は余った位置引数をタプルで受け取る。呼び出し側の *values はリストを展開して total(10, 20, 30) と同じ意味になる。',
  },
  {
    id: 'f05', cat: 'ch4', title: 'lambda で並べ替え',
    goal: "文字数の少ない順に並べる（出力: ['kiwi', 'apple', 'banana']）",
    code: String.raw`words = ['banana', 'kiwi', 'apple']
words.sort({{key}}={{lambda}} w: {{len}}(w))
print(words)`,
    explain: 'sort(key=関数) で並べ替えの基準を指定。lambda w: len(w) は「w を受け取って文字数を返す」無名関数（key=len と書いても同じ）。',
  },
  {
    id: 'f06', cat: 'ch5', title: 'リストをスタックとして使う',
    goal: '末尾に追加して、末尾から取り出す（出力: 3 [1, 2]）',
    code: String.raw`stack = [1, 2]
stack.{{append}}(3)
top = stack.{{pop}}()
print(top, stack)`,
    explain: 'append() で末尾に追加し、pop() で末尾を取り出す。後に入れたものが先に出る＝スタック（LIFO）。',
  },
  {
    id: 'f07', cat: 'ch5', title: 'リスト内包表記',
    goal: '0〜9 の偶数の2乗のリストを作る（出力: [0, 4, 16, 36, 64]）',
    code: String.raw`squares = [x ** 2 {{for}} x {{in}} range(10) {{if}} x % 2 == 0]
print(squares)`,
    explain: '[式 for 変数 in イテラブル if 条件] の形。条件に合う x だけが式 x ** 2 に通される。',
  },
  {
    id: 'f08', cat: 'ch5', title: '辞書のループ',
    goal: 'キーと値を同時に取り出す',
    code: String.raw`scores = {'Alice': 80, 'Bob': 65}
scores['Carol'] = 90
for name, score in scores.{{items}}():
    if score {{>=}} 70:
        print(name, 'pass')`,
    explain: 'items() で (キー, 値) のペアを取り出す。70点以上を合格にするので >= を使う。',
  },
  {
    id: 'f09', cat: 'ch5', title: 'enumerate と zip',
    goal: '番号付きで2つのリストを並行して表示',
    code: String.raw`names = ['a', 'b', 'c']
ages = [10, 20, 30]
for i, (n, a) in {{enumerate}}({{zip}}(names, ages), start=1):
    print(i, n, a)`,
    explain: 'zip で (名前, 年齢) のペアを作り、enumerate で番号を付ける。start=1 で1から数える。',
  },
  {
    id: 'f10', cat: 'ch5', title: '集合の演算',
    goal: '共通部分と和集合を求める',
    code: String.raw`a = {1, 2, 3}
b = {2, 3, 4}
print(a {{&}} b)
print(a {{|}} b)
empty = {{set}}()
print(type(empty))`,
    explain: '& は積集合（共通部分 {2, 3}）、| は和集合 {1, 2, 3, 4}。空の集合は set() で作る（{} は空の辞書になる）。',
  },
  {
    id: 'f11', cat: 'ch6', title: 'import と __name__',
    goal: 'モジュールを読み込み、直接実行されたときだけ main() を呼ぶ',
    code: String.raw`{{import}} math
{{from}} random import choice

def main():
    print(math.sqrt(16))
    print(choice(['x']))

if __name__ == {{'__main__'}}:
    main()`,
    explain: 'import モジュール名 / from モジュール import 名前。スクリプトとして直接実行されたときは __name__ が \'__main__\' になる。',
  },
  {
    id: 'f12', cat: 'ch7', title: 'f文字列と書式指定',
    goal: '出力: 3.14 |   42|007',
    code: String.raw`pi = 3.14159
print({{f}}'{pi:{{.2f}}} |{42:>5}|{7:{{03}}}')`,
    explain: '文字列の前に f。{値:.2f} は小数点以下2桁、{42:>5} は幅5の右寄せ、{7:03} は幅3のゼロ埋め。',
  },
  {
    id: 'f13', cat: 'ch7', title: 'with でファイル操作',
    goal: 'ファイルに書き込んでから読み込む',
    code: String.raw`{{with}} open('memo.txt', {{'w'}}) as f:
    f.write('hello\n')

with open('memo.txt') {{as}} f:
    print(f.{{read}}())`,
    explain: "with open(ファイル名, 'w') as f: で書き込み用に開く。ブロックを抜けると自動で閉じる。read() で全体を読む。",
  },
  {
    id: 'f14', cat: 'ch8', title: 'try / except / finally',
    goal: '数値に変換できないときにメッセージを出す',
    code: String.raw`{{try}}:
    x = int('abc')
{{except}} {{ValueError}} as e:
    print('cannot convert')
{{finally}}:
    print('done')`,
    explain: "int('abc') は ValueError。except 例外名 as e で捕まえる。finally は例外があってもなくても必ず実行される。",
  },
  {
    id: 'f15', cat: 'ch8', title: '自作の例外を投げる',
    goal: '残高不足のときに独自の例外を発生させる',
    code: String.raw`class InsufficientFundsError({{Exception}}):
    pass

def withdraw(balance, amount):
    if amount > balance:
        {{raise}} InsufficientFundsError('not enough money')
    return balance - amount

try:
    withdraw(100, 500)
except InsufficientFundsError as e:
    print(e)`,
    explain: 'ユーザー定義例外は Exception を継承して作る。raise で発生させ、except で捕まえる。print(e) でメッセージが表示される。',
  },
  {
    id: 'f16', cat: 'ch9', title: 'クラスの基本',
    goal: 'カウンターを作る（出力: 2）',
    code: String.raw`class Counter:
    def {{__init__}}({{self}}):
        self.count = 0

    def up(self):
        {{self}}.count += 1

c = Counter()
c.up()
c.up()
print(c.count)`,
    explain: '__init__ はインスタンス生成時に呼ばれる初期化メソッド。第1引数 self がインスタンス自身。self.count に代入するとインスタンス変数になる。',
  },
  {
    id: 'f17', cat: 'ch9', title: '継承と super()',
    goal: '親クラスの初期化を呼び出してから属性を追加する',
    code: String.raw`class Animal:
    def __init__(self, name):
        self.name = name

class Dog({{Animal}}):
    def __init__(self, name, breed):
        {{super}}().__init__(name)
        self.breed = breed

d = Dog('Pochi', 'shiba')
print(d.name, d.breed, {{isinstance}}(d, Animal))`,
    explain: 'class 子(親): で継承。super().__init__(name) で親の __init__ を呼ぶ。isinstance(d, Animal) は True（子クラスのインスタンスは親クラスのインスタンスでもある）。',
  },
  {
    id: 'f18', cat: 'ch9', title: 'ジェネレータ',
    goal: '出力: [3, 2, 1]',
    code: String.raw`def countdown(n):
    while n > 0:
        {{yield}} n
        n -= 1

print(list(countdown(3)))`,
    explain: 'yield で値を1つ返して一時停止し、次に呼ばれると続きから再開する。list() で全部取り出すと [3, 2, 1]。',
  },
  {
    id: 'f19', cat: 'ch10', title: '標準ライブラリ：statistics と random',
    goal: '平均・中央値とランダムな選択',
    code: String.raw`import statistics
import random

data = [2, 4, 4, 6, 9]
print(statistics.{{mean}}(data))
print(statistics.{{median}}(data))
print(random.{{choice}}(['only']))`,
    explain: 'statistics.mean は平均（5）、median は中央値（4）。random.choice はシーケンスから1つ選ぶ。',
  },
];
