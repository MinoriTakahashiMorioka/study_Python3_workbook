// =========================================================
// お題データ（Paiza風）
//   level    : 'D'（入門）/ 'C'（基本）/ 'B'（応用）
//   statement/input/output : 問題文・入力の形式・出力の形式
//   tests    : [{ in: 標準入力, out: 期待する出力, sample: true なら問題文に表示 }]
//   template : エディタの初期コード
//   hint / answer : ヒントと解答例
// 出力の比較では「各行末の空白」と「最後の空行」は無視されます。
// =========================================================
window.PROBLEMS = [
  {
    id: 'p01', level: 'D', cat: 'ch3', title: 'Hello, Python!',
    statement: '「Hello, Python!」と出力してください。',
    input: '入力はありません。',
    output: 'Hello, Python! と1行で出力してください。',
    tests: [{ in: '', out: 'Hello, Python!', sample: true }],
    template: '# Hello, Python! と出力しよう\n',
    hint: 'print() 関数を使います。文字列はクォート（\' か "）で囲みます。',
    answer: String.raw`print('Hello, Python!')`,
  },
  {
    id: 'p02', level: 'D', cat: 'ch3', title: '2つの整数の和',
    statement: '2つの整数 a, b が空白区切りで与えられます。a + b を出力してください。',
    input: 'a b\n（-1000 ≦ a, b ≦ 1000）',
    output: 'a + b の値を1行で出力してください。',
    tests: [
      { in: '3 5', out: '8', sample: true },
      { in: '-2 7', out: '5', sample: true },
      { in: '100 250', out: '350' },
      { in: '-1000 -1000', out: '-2000' },
    ],
    template: '# input() で1行読み込める（文字列として）\nline = input()\n',
    hint: "input().split() で空白区切りのリストになります。int() で整数に変換しましょう。\na, b = map(int, input().split()) と書くと1行で2つ受け取れます。",
    answer: String.raw`a, b = map(int, input().split())
print(a + b)`,
  },
  {
    id: 'p03', level: 'D', cat: 'ch4', title: '偶数か奇数か',
    statement: '整数 n が与えられます。n が偶数なら even、奇数なら odd と出力してください。',
    input: 'n\n（-10000 ≦ n ≦ 10000）',
    output: 'even または odd',
    tests: [
      { in: '4', out: 'even', sample: true },
      { in: '7', out: 'odd', sample: true },
      { in: '0', out: 'even' },
      { in: '-3', out: 'odd' },
    ],
    template: 'n = int(input())\n',
    hint: '2で割った余り（n % 2）が 0 なら偶数です。Python では負の数でも -3 % 2 は 1 になります。',
    answer: String.raw`n = int(input())
if n % 2 == 0:
    print('even')
else:
    print('odd')`,
  },
  {
    id: 'p04', level: 'D', cat: 'ch4', title: '1 から N までの合計',
    statement: '整数 N が与えられます。1 + 2 + … + N を出力してください。',
    input: 'N\n（1 ≦ N ≦ 10000）',
    output: '合計を1行で出力してください。',
    tests: [
      { in: '10', out: '55', sample: true },
      { in: '1', out: '1' },
      { in: '100', out: '5050' },
      { in: '10000', out: '50005000' },
    ],
    template: 'n = int(input())\n',
    hint: 'for i in range(1, n + 1): で 1〜N をくり返せます（range の終わりは含まれないので +1）。sum(range(1, n + 1)) でもOK。',
    answer: String.raw`n = int(input())
total = 0
for i in range(1, n + 1):
    total += i
print(total)`,
  },
  {
    id: 'p05', level: 'D', cat: 'ch3', title: '文字列を逆順に',
    statement: '英小文字からなる文字列 S が与えられます。S を逆から読んだ文字列を出力してください。',
    input: 'S\n（1 ≦ S の長さ ≦ 100）',
    output: '逆順にした文字列',
    tests: [
      { in: 'python', out: 'nohtyp', sample: true },
      { in: 'abc', out: 'cba' },
      { in: 'level', out: 'level' },
      { in: 'a', out: 'a' },
    ],
    template: 's = input()\n',
    hint: 'スライスの3つ目（ステップ）に -1 を指定すると逆順になります：s[::-1]',
    answer: String.raw`s = input()
print(s[::-1])`,
  },
  {
    id: 'p06', level: 'C', cat: 'ch4', title: 'FizzBuzz',
    statement: '1 から N までの整数を順に1行ずつ出力してください。ただし\n・3の倍数のときは Fizz\n・5の倍数のときは Buzz\n・3と5の両方の倍数のときは FizzBuzz\nを数の代わりに出力します。',
    input: 'N\n（1 ≦ N ≦ 100）',
    output: 'N 行出力してください。',
    tests: [
      { in: '15', out: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz', sample: true },
      { in: '5', out: '1\n2\nFizz\n4\nBuzz' },
      { in: '1', out: '1' },
      { in: '30', out: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz' },
    ],
    template: 'n = int(input())\n',
    hint: '「15の倍数」の判定を最初に書くのがコツ。if → elif → elif → else の順に並べます。',
    answer: String.raw`n = int(input())
for i in range(1, n + 1):
    if i % 15 == 0:
        print('FizzBuzz')
    elif i % 3 == 0:
        print('Fizz')
    elif i % 5 == 0:
        print('Buzz')
    else:
        print(i)`,
  },
  {
    id: 'p07', level: 'C', cat: 'ch5', title: '最大値と最小値',
    statement: 'N 個の整数が与えられます。最大値と最小値を空白区切りで出力してください。',
    input: '1行目に N、2行目に N 個の整数が空白区切りで与えられます。\n（1 ≦ N ≦ 100、-1000 ≦ 各整数 ≦ 1000）',
    output: '最大値 最小値',
    tests: [
      { in: '5\n3 9 -2 7 4', out: '9 -2', sample: true },
      { in: '1\n42', out: '42 42' },
      { in: '4\n-5 -1 -9 -3', out: '-1 -9' },
    ],
    template: 'n = int(input())\nnums = list(map(int, input().split()))\n',
    hint: '組み込み関数 max() と min() にリストを渡すと最大値・最小値が求まります。',
    answer: String.raw`n = int(input())
nums = list(map(int, input().split()))
print(max(nums), min(nums))`,
  },
  {
    id: 'p08', level: 'C', cat: 'ch5', title: '母音を数えよう',
    statement: '英小文字からなる文字列 S が与えられます。S に含まれる母音（a, e, i, o, u）の個数を出力してください。',
    input: 'S\n（1 ≦ S の長さ ≦ 100）',
    output: '母音の個数',
    tests: [
      { in: 'programming', out: '3', sample: true },
      { in: 'aeiou', out: '5' },
      { in: 'rhythm', out: '0' },
      { in: 'education', out: '5' },
    ],
    template: 's = input()\n',
    hint: "for c in s: で1文字ずつ取り出し、c in 'aeiou' で母音か判定できます。内包表記なら sum(1 for c in s if c in 'aeiou')。",
    answer: String.raw`s = input()
count = 0
for c in s:
    if c in 'aeiou':
        count += 1
print(count)`,
  },
  {
    id: 'p09', level: 'C', cat: 'ch5', title: '単語の出現回数',
    statement: '空白区切りの英単語の列が与えられます。各単語が何回出てきたかを、最初に登場した順に「単語 回数」の形で出力してください。',
    input: '単語が空白区切りで1行に与えられます。（1 ≦ 単語数 ≦ 100）',
    output: '異なる単語ごとに1行ずつ「単語 回数」を、初登場順に出力してください。',
    tests: [
      { in: 'red blue red green blue red', out: 'red 3\nblue 2\ngreen 1', sample: true },
      { in: 'apple', out: 'apple 1' },
      { in: 'b a b a c', out: 'b 2\na 2\nc 1' },
    ],
    template: 'words = input().split()\n',
    hint: '辞書を使います。キーがなければ 0 として数えるには counts[w] = counts.get(w, 0) + 1。辞書は追加した順番を覚えているので、そのまま items() でループすれば初登場順になります。',
    answer: String.raw`words = input().split()
counts = {}
for w in words:
    counts[w] = counts.get(w, 0) + 1
for w, c in counts.items():
    print(w, c)`,
  },
  {
    id: 'p10', level: 'C', cat: 'ch7', title: '掛け算表',
    statement: '整数 N が与えられます。N × N の掛け算表を出力してください。\ni 行 j 列目には i × j を、幅3の右寄せで出力し、区切り文字は入れません。',
    input: 'N\n（1 ≦ N ≦ 9）',
    output: 'N 行出力してください。',
    tests: [
      { in: '3', out: '  1  2  3\n  2  4  6\n  3  6  9', sample: true },
      { in: '1', out: '  1' },
      { in: '5', out: '  1  2  3  4  5\n  2  4  6  8 10\n  3  6  9 12 15\n  4  8 12 16 20\n  5 10 15 20 25' },
    ],
    template: 'n = int(input())\n',
    hint: "f文字列の書式指定 f'{x:3}' で幅3の右寄せになります。print(..., end='') で改行せずに続けて出力し、行の最後で print() して改行しましょう。",
    answer: String.raw`n = int(input())
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(f'{i * j:3}', end='')
    print()`,
  },
  {
    id: 'p11', level: 'C', cat: 'ch7', title: '平均点と合格者',
    statement: 'N 人の名前と点数が与えられます。\n1行目に平均点を小数第1位まで（f\'{平均:.1f}\' の書式で）出力し、\n2行目以降に 70 点以上の人の名前を入力順に1行ずつ出力してください。\n70点以上の人がいなければ、2行目に none と出力してください。',
    input: '1行目に N、続く N 行に「名前 点数」が与えられます。\n（1 ≦ N ≦ 50、0 ≦ 点数 ≦ 100）',
    output: '平均点（小数第1位まで）と、合格者の名前',
    tests: [
      { in: '3\ntaro 80\njiro 55\nhanako 70', out: '68.3\ntaro\nhanako', sample: true },
      { in: '2\na 10\nb 20', out: '15.0\nnone' },
      { in: '1\nken 100', out: '100.0\nken' },
    ],
    template: 'n = int(input())\n',
    hint: "名前と点数は name, score = input().split() で受け取り、score は int() に変換。平均は合計 / 人数。f'{avg:.1f}' で小数第1位まで表示できます。",
    answer: String.raw`n = int(input())
names = []
total = 0
for _ in range(n):
    name, score = input().split()
    score = int(score)
    total += score
    if score >= 70:
        names.append(name)
print(f'{total / n:.1f}')
if names:
    for name in names:
        print(name)
else:
    print('none')`,
  },
  {
    id: 'p12', level: 'C', cat: 'ch8', title: '不正なデータを除いて合計',
    statement: 'N 行のデータが与えられます。各行は整数のはずですが、整数として読めないデータが混ざっています。\n整数として読める行の合計と、読めなかった行の数を空白区切りで出力してください。',
    input: '1行目に N、続く N 行にデータ（1行に1つ）。\n（1 ≦ N ≦ 50）',
    output: '合計 読めなかった行数',
    tests: [
      { in: '4\n10\nabc\n5\n3.5', out: '15 2', sample: true },
      { in: '3\n1\n2\n3', out: '6 0' },
      { in: '2\nx\n-\n', out: '0 2' },
      { in: '3\n-4\n  7  \nten', out: '3 1' },
    ],
    template: 'n = int(input())\n',
    hint: "int('abc') や int('3.5') は ValueError になります。try: で int() を試し、except ValueError: で数を数えましょう。（int() は前後の空白は無視してくれます）",
    answer: String.raw`n = int(input())
total = 0
bad = 0
for _ in range(n):
    s = input()
    try:
        total += int(s)
    except ValueError:
        bad += 1
print(total, bad)`,
  },
  {
    id: 'p13', level: 'C', cat: 'ch4', title: 'N 以下の素数',
    statement: '整数 N が与えられます。N 以下の素数をすべて、小さい順に空白区切りで出力してください。',
    input: 'N\n（2 ≦ N ≦ 1000）',
    output: '素数を空白区切りで1行に出力してください。',
    tests: [
      { in: '10', out: '2 3 5 7', sample: true },
      { in: '2', out: '2' },
      { in: '30', out: '2 3 5 7 11 13 17 19 23 29' },
    ],
    template: 'n = int(input())\n',
    hint: '写経「for...else で素数判定」と同じ考え方。素数をリストに append し、最後に print(*primes) とすると空白区切りで出力できます。',
    answer: String.raw`n = int(input())
primes = []
for k in range(2, n + 1):
    for x in range(2, k):
        if k % x == 0:
            break
    else:
        primes.append(k)
print(*primes)`,
  },
  {
    id: 'p14', level: 'B', cat: 'ch5', title: '在庫管理',
    statement: 'お店の在庫を管理します。Q 個の命令が順に与えられるので処理してください。\n・add 商品名 個数 … 在庫を増やす\n・remove 商品名 個数 … 在庫を減らす。在庫が足りない場合は error と出力し、在庫は変えない\n・show 商品名 … その商品の在庫数を出力（一度も追加されていなければ 0）',
    input: '1行目に Q、続く Q 行に命令が与えられます。\n（1 ≦ Q ≦ 100、1 ≦ 個数 ≦ 1000）',
    output: 'show と、失敗した remove のたびに1行出力してください。',
    tests: [
      { in: '6\nadd apple 5\nremove apple 2\nshow apple\nremove apple 10\nshow banana\nshow apple', out: '3\nerror\n0\n3', sample: true },
      { in: '4\nadd pen 1\nadd pen 2\nremove pen 3\nshow pen', out: '0' },
      { in: '2\nremove cup 1\nshow cup', out: 'error\n0' },
    ],
    template: 'q = int(input())\nstock = {}\nfor _ in range(q):\n    cmd = input().split()\n',
    hint: "cmd[0] で命令の種類を判定します。在庫は辞書 stock[商品名] = 個数 で管理し、ない商品は stock.get(name, 0) で 0 として扱いましょう。",
    answer: String.raw`q = int(input())
stock = {}
for _ in range(q):
    cmd = input().split()
    name = cmd[1]
    if cmd[0] == 'add':
        stock[name] = stock.get(name, 0) + int(cmd[2])
    elif cmd[0] == 'remove':
        n = int(cmd[2])
        if stock.get(name, 0) < n:
            print('error')
        else:
            stock[name] -= n
    elif cmd[0] == 'show':
        print(stock.get(name, 0))`,
  },
  {
    id: 'p15', level: 'B', cat: 'ch5', title: 'かっこの対応',
    statement: '( ) [ ] { } だけからなる文字列 S が与えられます。かっこが正しく対応していれば Yes、そうでなければ No と出力してください。\n例：「([]{})」は Yes、「([)]」は No、「((」は No。',
    input: 'S\n（1 ≦ S の長さ ≦ 100）',
    output: 'Yes または No',
    tests: [
      { in: '([]{})', out: 'Yes', sample: true },
      { in: '([)]', out: 'No', sample: true },
      { in: '((', out: 'No' },
      { in: ')(', out: 'No' },
      { in: '{[()()]}', out: 'Yes' },
    ],
    template: 's = input()\n',
    hint: 'リストをスタックとして使います。開きかっこは append、閉じかっこが来たら pop して対応する開きかっこか確かめます。最後にスタックが空なら Yes。対応表は辞書 {")": "(", "]": "[", "}": "{"} で作ると便利です。',
    answer: String.raw`s = input()
pairs = {')': '(', ']': '[', '}': '{'}
stack = []
ok = True
for c in s:
    if c in '([{':
        stack.append(c)
    elif not stack or stack.pop() != pairs[c]:
        ok = False
        break
print('Yes' if ok and not stack else 'No')`,
  },
  {
    id: 'p16', level: 'B', cat: 'ch9', title: '銀行口座クラス',
    statement: '次の仕様の Account クラスを作り、命令を処理してください。\n・Account(名前) で残高 0 の口座を作る\n・deposit(金額) で入金\n・withdraw(金額) で出金。残高不足なら残高を変えずに False を返し、成功したら True を返す\n命令は「deposit 金額」または「withdraw 金額」。withdraw に失敗したら NG と出力します。\n最後に「名前: 残高」の形で出力してください。',
    input: '1行目に名前、2行目に命令の数 Q、続く Q 行に命令。',
    output: '失敗した withdraw のたびに NG、最後に「名前: 残高」',
    tests: [
      { in: 'taro\n4\ndeposit 1000\nwithdraw 300\nwithdraw 800\ndeposit 50', out: 'NG\ntaro: 750', sample: true },
      { in: 'ken\n1\nwithdraw 1', out: 'NG\nken: 0' },
      { in: 'hana\n2\ndeposit 10\nwithdraw 10', out: 'hana: 0' },
    ],
    template: String.raw`class Account:
    def __init__(self, name):
        pass  # ここを書こう


name = input()
acc = Account(name)
q = int(input())
for _ in range(q):
    cmd, amount = input().split()
    amount = int(amount)
    # ここで deposit / withdraw を呼ぼう

`,
    hint: "__init__ で self.name と self.balance = 0 を用意します。withdraw では self.balance < amount のとき return False。出力は print(f'{acc.name}: {acc.balance}')。",
    answer: String.raw`class Account:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance < amount:
            return False
        self.balance -= amount
        return True


name = input()
acc = Account(name)
q = int(input())
for _ in range(q):
    cmd, amount = input().split()
    amount = int(amount)
    if cmd == 'deposit':
        acc.deposit(amount)
    elif not acc.withdraw(amount):
        print('NG')
print(f'{acc.name}: {acc.balance}')`,
  },
];
