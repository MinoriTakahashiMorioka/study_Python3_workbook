// 公式問題集（個人学習用）— 写真から書き起こしたデータ
// answer: 正解の記号 / ansPages: official/answers/ にある解答ページの写真
window.WORKBOOK = {
 "chapters": [
  {
   "ch": 1,
   "title": "Pythonの特徴"
  },
  {
   "ch": 2,
   "title": "テキストと数の操作"
  },
  {
   "ch": 3,
   "title": "リストの操作"
  },
  {
   "ch": 4,
   "title": "判定と繰り返し"
  },
  {
   "ch": 5,
   "title": "関数"
  },
  {
   "ch": 6,
   "title": "その他コレクションの操作"
  },
  {
   "ch": 7,
   "title": "モジュール"
  },
  {
   "ch": 8,
   "title": "ファイル入出力"
  },
  {
   "ch": 9,
   "title": "例外処理"
  },
  {
   "ch": 10,
   "title": "クラスとオブジェクトの操作"
  },
  {
   "ch": 11,
   "title": "標準ライブラリ"
  },
  {
   "ch": 12,
   "title": "Python仮想環境とサードパーティパッケージの利用"
  },
  {
   "ch": 13,
   "title": "総仕上げ問題"
  }
 ],
 "questions": [
  {
   "id": "w01-01",
   "ch": 1,
   "no": 1,
   "page": 16,
   "q": "Pythonの特徴として正しいものを選択してください。",
   "code": null,
   "choices": [
    "コンパイルが不要な言語である",
    "文のグルーピングでは、グループの開始と終了に括弧を用いる",
    "Pythonという名前はニシキヘビの英名が由来である",
    "他のプログラミング言語で書かれたプログラムによる機能拡張には対応していない"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0380.jpg"
   ]
  },
  {
   "id": "w01-02",
   "ch": 1,
   "no": 2,
   "page": 16,
   "q": "対話モードの特徴として正しいものを選択してください。",
   "code": null,
   "choices": [
    "行を継続すると正しいインデントが提示される",
    "一次プロンプトは「>>」である",
    "二次プロンプトは「=>」である",
    "プロンプトは、バージョン番号やヘルプコマンドなどの後に表示される"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0380.jpg",
    "IMG_0381.jpg"
   ]
  },
  {
   "id": "w01-03",
   "ch": 1,
   "no": 3,
   "page": 16,
   "q": "Pythonのソースコードをエンコードするデフォルトの文字コードとして正しいものを選択してください。",
   "code": null,
   "choices": [
    "Shift_JIS",
    "UTF-8",
    "Windows-1252",
    "UTF-16"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0381.jpg",
    "IMG_0382.jpg"
   ]
  },
  {
   "id": "w01-04",
   "ch": 1,
   "no": 4,
   "page": 17,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "x = 42\nif x == 0:\n    print(\"xはゼロ\")\nelif x > 1:\n    print(\"xは1より大きい整数\")\nelif x > 10:\n    print(\"xは10より大きい整数\")\nelif x < 50:\n    print(\"xは50未満の整数\")",
   "choices": [
    "xはゼロ",
    "xは1より大きい整数",
    "xは10より大きい整数",
    "xは50未満の整数"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0382.jpg"
   ]
  },
  {
   "id": "w01-05",
   "ch": 1,
   "no": 5,
   "page": 17,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "a = 10\nb = 20\na, b = b, a\nprint(\"a:\", a, \"b:\", b)",
   "choices": [
    "a: 10 b: 20",
    "a: 10 b: 10",
    "a: 20 b: 10",
    "a: 20 b: 20"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0382.jpg"
   ]
  },
  {
   "id": "w01-06",
   "ch": 1,
   "no": 6,
   "page": 18,
   "q": "Pythonのコーディングスタイルとして誤っているものを選択してください。",
   "code": null,
   "choices": [
    "可能なら、コメントは独立した行に書くこと",
    "ソースコードの幅が79文字を超えないように折り返すこと",
    "インデントにタブを使わないこと",
    "インデントには空白2つを使うこと"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0382.jpg",
    "IMG_0383.jpg"
   ]
  },
  {
   "id": "w01-07",
   "ch": 1,
   "no": 7,
   "page": 18,
   "q": "文字列を記述する方法として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "\"spam eggs\"",
    "\"\"\"spam eggs\"\"\"",
    "\"spam eggs'",
    "'spam eggs'"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0383.jpg",
    "IMG_0384.jpg"
   ]
  },
  {
   "id": "w01-08",
   "ch": 1,
   "no": 8,
   "page": 18,
   "q": "コメントを記述する方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "# spam eggs",
    "// spam eggs",
    "/* spam eggs */",
    "<!-- spam eggs -->"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0384.jpg"
   ]
  },
  {
   "id": "w01-09",
   "ch": 1,
   "no": 9,
   "page": 18,
   "q": "対話モードでの入力履歴はファイルに保存されます。このファイルの名称として正しいものを選択してください。",
   "code": null,
   "choices": [
    ".command_history",
    ".python_log",
    ".python_history",
    ".command_log"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0384.jpg"
   ]
  },
  {
   "id": "w02-01",
   "ch": 2,
   "no": 1,
   "page": 26,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "x = 100 - 5**2 + 5 / 5\nprint(x)",
   "choices": [
    "16.0",
    "-25",
    "76.0",
    "76"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0385.jpg"
   ]
  },
  {
   "id": "w02-02",
   "ch": 2,
   "no": 2,
   "page": 26,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "text = (\n    \"Usage: \"\n    \"-h help \"\n    \"-v version\"\n)\nprint(text)",
   "choices": [
    "\"Usage: \"\"-h help \"\"-v version\"",
    "Usage: -h help -v version",
    "(\"Usage:\"\"-h help \"\"-v version\")",
    "\"Usage: -h help -v version\""
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0385.jpg",
    "IMG_0386.jpg"
   ]
  },
  {
   "id": "w02-03",
   "ch": 2,
   "no": 3,
   "page": 27,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "text = \"\"\"spam\nham\neggs\n\"\"\"\nprint(text)",
   "choices": [
    "spam\\nham\\neggs",
    "\"\"\"spamhameggs\"\"\"",
    "spamhameggs",
    "spam\nham\neggs"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0386.jpg"
   ]
  },
  {
   "id": "w02-04",
   "ch": 2,
   "no": 4,
   "page": 27,
   "q": "文字列の長さを返すコードとして正しいものを選択してください。",
   "code": null,
   "choices": [
    "\"abc\".length",
    "length(\"abc\")",
    "strlen(\"abc\")",
    "len(\"abc\")"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0386.jpg"
   ]
  },
  {
   "id": "w02-05",
   "ch": 2,
   "no": 5,
   "page": 28,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "word = \"abcdefg\"\nsliced_word = word[2:5]\nprint(sliced_word)",
   "choices": [
    "cde",
    "bcd",
    "bcde",
    "cdef",
    "cdefg"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0386.jpg",
    "IMG_0387.jpg"
   ]
  },
  {
   "id": "w02-06",
   "ch": 2,
   "no": 6,
   "page": 28,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "word = \"abcdefg\"\nsliced_word = word[-5:]\nprint(sliced_word)",
   "choices": [
    "abc",
    "cdefg",
    "bcdef",
    "defg"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0387.jpg"
   ]
  },
  {
   "id": "w02-07",
   "ch": 2,
   "no": 7,
   "page": 29,
   "q": "次のコードを実行した結果として正しいものを選択してください。ただし、選択肢にあるアンダースコア（_）は、空白を示すものとします。",
   "code": "price = 15000\nprint(f\"価格:{price:7d}\")",
   "choices": [
    "価格:1500000",
    "価格:15000__",
    "価格:__15000",
    "価格:0015000"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0387.jpg",
    "IMG_0388.jpg"
   ]
  },
  {
   "id": "w02-08",
   "ch": 2,
   "no": 8,
   "page": 29,
   "q": "以下のコードを実行して「πの値はおよそ3.14159である」と表示する場合、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "import math\n\nprint(f\"πの値はおよそ{【①】}である\")",
   "choices": [
    "math.pi:.5f",
    "math.pi:5",
    "math.pi:5f",
    "math.pi:.5"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0388.jpg",
    "IMG_0389.jpg"
   ]
  },
  {
   "id": "w02-09",
   "ch": 2,
   "no": 9,
   "page": 30,
   "q": "次のコードの中から「spam: 300, ham: 150, eggs: 200」を表示するための記述として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "x = 300\ny = 150\nz = 200\nprint(\"spam: {0}, ham: {1}, eggs: {2}\".format(x, y, z))",
    "x = 300\ny = 150\nz = 200\nprint(\"spam: {x}, ham: {y}, eggs: {z}\".format(x, y, z))",
    "x = 300\ny = 150\nz = 200\nprint(\"spam: {}, ham: {}, eggs: {}\".format(x, y, z))",
    "x = 300\ny = 150\nz = 200\nprint(\"spam: {a}, ham: {b}, eggs: {c}\".format(a=x, b=y, c=z))"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0389.jpg",
    "IMG_0390.jpg"
   ]
  },
  {
   "id": "w03-01",
   "ch": 3,
   "no": 1,
   "page": 38,
   "q": "リストの特徴として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "角括弧内にカンマ区切りで記述する",
    "インデックスを指定して参照と更新ができる",
    "先頭の要素は、インデックスに1を指定する",
    "末尾の要素は、インデックスに-1を指定する"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0391.jpg"
   ]
  },
  {
   "id": "w03-02",
   "ch": 3,
   "no": 2,
   "page": 38,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "data = [1, 2, 3, 4]\nprint(data[:2], data[3:])",
   "choices": [
    "[1, 2] [3]",
    "[1, 2] [4]",
    "[1, 2] [3, 4]",
    "[1, 2, 3] [4]"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0391.jpg",
    "IMG_0392.jpg"
   ]
  },
  {
   "id": "w03-03",
   "ch": 3,
   "no": 3,
   "page": 38,
   "q": "次のコードを実行した結果[1, 2, 3]が表示されるとき、空欄①に入る記述として正しいものを選択してください。",
   "code": "data = [1, 2]\n【①】\nprint(data)",
   "choices": [
    "data += 3",
    "data.add(3)",
    "data.append(3)",
    "data.push(3)"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0392.jpg",
    "IMG_0393.jpg"
   ]
  },
  {
   "id": "w03-04",
   "ch": 3,
   "no": 4,
   "page": 39,
   "q": "リストが代入されている変数dataの長さを求める記述として正しいものを選択してください。",
   "code": null,
   "choices": [
    "count(data)",
    "len(data)",
    "length(data)",
    "data.length"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0393.jpg"
   ]
  },
  {
   "id": "w03-05",
   "ch": 3,
   "no": 5,
   "page": 39,
   "q": "リストの要素に関する記述として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "[[1, 2], [3, 4]]をリストの入れ子という",
    "[[1, 2, 3, 4]]の長さは4である",
    "[[1, 2], [3, 4]]の長さは2である",
    "[[1, 2], [3, 4, 5]]のように、異なる長さのリストを要素にできる"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0393.jpg",
    "IMG_0394.jpg"
   ]
  },
  {
   "id": "w03-06",
   "ch": 3,
   "no": 6,
   "page": 39,
   "q": "次のコードを実行した結果「1 4」が表示されるとき、空欄①に入る記述として正しいものを選択してください。",
   "code": "data = [[1, 2], [3, 4]]\nprint(【①】)",
   "choices": [
    "data[0][0], data[1][1]",
    "data[0][1], data[1][0]",
    "data[1][0], data[0][1]",
    "data[1][1], data[0][0]"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0394.jpg",
    "IMG_0395.jpg"
   ]
  },
  {
   "id": "w03-07",
   "ch": 3,
   "no": 7,
   "page": 40,
   "q": "次のコードを実行した結果[4, 3, 2, 1]が表示されるとき、空欄①に入る記述として正しいものを選択してください。",
   "code": "stack = [1, 2, 3, 4]\ndata = []\nwhile stack:\n    【①】\nprint(data)",
   "choices": [
    "data.append(stack.pop())",
    "stack.append(data.pop())",
    "data.append(stack.pop(0))",
    "stack.append(data.pop(0))"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0395.jpg",
    "IMG_0396.jpg"
   ]
  },
  {
   "id": "w03-08",
   "ch": 3,
   "no": 8,
   "page": 40,
   "q": "次のコードを実行した結果[2, 3]が表示されるとき、空欄①、②に当てはまる記述の組み合わせとして正しいものを選択してください。",
   "code": "data = [1, 2]\n【①】\n【②】\nprint(data)",
   "choices": [
    "① data.append(3)　② data.pop()",
    "① data.append(3)　② data.pop(0)",
    "① data.append(3)　② data.pop(1)",
    "① data.pop()　② data.append(2)"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0396.jpg",
    "IMG_0397.jpg"
   ]
  },
  {
   "id": "w03-09",
   "ch": 3,
   "no": 9,
   "page": 41,
   "q": "次のコードと同じ表示結果を出力する記述として正しいものを選択してください。",
   "code": "data = []\nfor i in [1, 2, 3]:\n    for j in [1, 2]:\n        if i != j:\n            data.append((i, j))\nprint(data)",
   "choices": [
    "print([(i, j) for i in [1, 2, 3] for j in [1, 2] if i != j])",
    "print([(j, i) for i in [1, 2, 3] for j in [1, 2] if i != j])",
    "print([(i, j) for j in [1, 2] for i in [1, 2, 3] if i != j])",
    "print([(j, i) for j in [1, 2] for i in [1, 2, 3] if i != j])"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0397.jpg",
    "IMG_0398.jpg"
   ]
  },
  {
   "id": "w04-01",
   "ch": 4,
   "no": 1,
   "page": 52,
   "q": "次のコードを実行して期待する結果が表示されるとき、空欄①〜③に入る記述の組み合わせとして正しいものを選択してください。\n\n【期待する結果】\n1は2の倍数でも3の倍数でもありません\n2は2か3の倍数です\n3は2か3の倍数です\n4は2か3の倍数です\n5は2の倍数でも3の倍数でもありません\n6は6の倍数です",
   "code": "for i in range(1, 7):\n    if i % 2 == 0 【①】 i % 3 == 0:\n        print(f\"{i}は6の倍数です\")\n    elif i % 2 == 0 【②】 i % 3 == 0:\n        print(f\"{i}は2か3の倍数です\")\n    【③】:\n        print(f\"{i}は2の倍数でも3の倍数でもありません\")",
   "choices": [
    "① and　② or　③ not",
    "① and　② or　③ else",
    "① or　② and　③ not",
    "① or　② and　③ else"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0399.jpg",
    "IMG_0400.jpg"
   ]
  },
  {
   "id": "w04-02",
   "ch": 4,
   "no": 2,
   "page": 53,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def num(value):\n    return value\n\nvalue1 = num(0) and num(1) and num(2)\nvalue2 = num(0) or num(1) or num(2)\nprint(value1, value2)",
   "choices": [
    "0 1",
    "0 2",
    "True False",
    "False True"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0400.jpg",
    "IMG_0401.jpg"
   ]
  },
  {
   "id": "w04-03",
   "ch": 4,
   "no": 3,
   "page": 53,
   "q": "変数valueがNoneかどうかを判定するコードとして最も適切なものを選択してください。",
   "code": null,
   "choices": [
    "if value:",
    "if not value:",
    "if value is None:",
    "if value == None:"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0401.jpg",
    "IMG_0402.jpg"
   ]
  },
  {
   "id": "w04-04",
   "ch": 4,
   "no": 4,
   "page": 53,
   "q": "リストが代入されている変数dataの繰り返しの記述の書き始めとして正しいものを選択してください。",
   "code": null,
   "choices": [
    "for (int i: data)",
    "for (let i in data)",
    "for i in data do",
    "for i in data:"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0402.jpg"
   ]
  },
  {
   "id": "w04-05",
   "ch": 4,
   "no": 5,
   "page": 54,
   "q": "4回繰り返される記述の書き始めとして誤っているものを選択してください。",
   "code": null,
   "choices": [
    "for i in range(4):",
    "for i in range(0, 4):",
    "for i in range(1, 4):",
    "for i in range(1, 8, 2):"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0402.jpg",
    "IMG_0403.jpg"
   ]
  },
  {
   "id": "w04-06",
   "ch": 4,
   "no": 6,
   "page": 54,
   "q": "次のコードを実行した結果「L」が表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "for c in \"HELLO\":\n    if c == \"L\":\n        【①】\n\nprint(c)",
   "choices": [
    "break",
    "continue",
    "else",
    "return"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0403.jpg"
   ]
  },
  {
   "id": "w04-07",
   "ch": 4,
   "no": 7,
   "page": 54,
   "q": "ディクショナリが代入されている変数dataのキーと値を同時に取得する記述として正しいものを選択してください。",
   "code": null,
   "choices": [
    "data.key_value()",
    "data.keys()",
    "data.items()",
    "data.values()"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0403.jpg",
    "IMG_0404.jpg"
   ]
  },
  {
   "id": "w04-08",
   "ch": 4,
   "no": 8,
   "page": 55,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "for i, c in enumerate(\"WORD\"):\n    if i == 2:\n        print(c)",
   "choices": [
    "W",
    "O",
    "R",
    "D"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0404.jpg",
    "IMG_0405.jpg"
   ]
  },
  {
   "id": "w04-09",
   "ch": 4,
   "no": 9,
   "page": 55,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "print(list(reversed(sorted(\"EAT\"))))",
   "choices": [
    "['E', 'A', 'T']",
    "['A', 'E', 'T']",
    "['T', 'A', 'E']",
    "['T', 'E', 'A']"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0405.jpg",
    "IMG_0406.jpg"
   ]
  },
  {
   "id": "w04-10",
   "ch": 4,
   "no": 10,
   "page": 56,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "for n, c in zip([1, 2, 3], [\"1\", \"2\", \"3\"]):\n    print(c * n)",
   "choices": [
    "1\n2\n3",
    "1\n4\n9",
    "11\n22\n33",
    "1\n22\n333"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0406.jpg"
   ]
  },
  {
   "id": "w05-01",
   "ch": 5,
   "no": 1,
   "page": 66,
   "q": "関数の定義の書き始めとして正しいものを選択してください。",
   "code": null,
   "choices": [
    "def greeting(message)",
    "function greeting(message)",
    "def greeting(message):",
    "function greeting(message):"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0407.jpg"
   ]
  },
  {
   "id": "w05-02",
   "ch": 5,
   "no": 2,
   "page": 66,
   "q": "関数greetingを呼び出す方法として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "x = greeting(\"Hello\")",
    "x = greeting\ny = x(\"Hello\")",
    "x = greeting \"Hello\"",
    "greeting(\"Hello\")"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0407.jpg",
    "IMG_0408.jpg"
   ]
  },
  {
   "id": "w05-03",
   "ch": 5,
   "no": 3,
   "page": 66,
   "q": "関数で使用する変数の特徴として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "関数内で定義したすべての変数は、関数の外側でもその変数名で参照できる",
    "関数内では、関数の外側で定義された変数に値を直接代入できない",
    "関数内で、グローバル変数への代入を行う場合は、global文を使う",
    "global文のない関数内での変数への代入は、その関数のローカル変数として扱われる"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0408.jpg",
    "IMG_0409.jpg"
   ]
  },
  {
   "id": "w05-04",
   "ch": 5,
   "no": 4,
   "page": 67,
   "q": "キーワード引数を使った関数を呼び出す方法として正しいものを選択してください。",
   "code": "def function(x, y=\"foo\", z=\"bar\"):\n    print(x, y, z)",
   "choices": [
    "function(y=\"ham\", z=\"eggs\", \"spam\")",
    "function(\"spam\", y=\"ham\", z=\"eggs\")",
    "function(\"spam\", y=\"ham\", a=\"eggs\")",
    "function(\"spam\", \"ham\", y=\"foo\", z=\"eggs\")"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0409.jpg",
    "IMG_0410.jpg"
   ]
  },
  {
   "id": "w05-05",
   "ch": 5,
   "no": 5,
   "page": 67,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "default_message_1 = \"Hello\"\n\n\ndef message(message_1=default_message_1, message_2=\"\"):\n    print(f\"{message_1} {message_2}\")\n\n\ndefault_message_1 = \"こんにちは\"\nmessage_2 = \"world\"\n\nmessage(message_2=message_2)",
   "choices": [
    "Hello",
    "こんにちは world",
    "Hello world",
    "こんにちは"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0410.jpg",
    "IMG_0411.jpg"
   ]
  },
  {
   "id": "w05-06",
   "ch": 5,
   "no": 6,
   "page": 68,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def function(number, default_arg_list=[]):\n    default_arg_list.append(number)\n    return default_arg_list\n\n\nprint(function(1))\nprint(function(2, [3, 4]))\nprint(function(3))\nprint(function(4, [5, 6]))\nprint(function(5))",
   "choices": [
    "[1]\n[1, 2, 3, 4]\n[1, 2, 3, 3, 4]\n[1, 2, 3, 3, 4, 5, 6]\n[1, 2, 3, 3, 4, 5, 6, 5]",
    "[1]\n[2, 3, 4]\n[1, 3]\n[4, 5, 6]\n[1, 3, 5]",
    "[1]\n[1, 2, 3, 4]\n[1, 2, 3, 4, 3]\n[1, 2, 3, 4, 3, 5, 6]\n[1, 2, 3, 4, 3, 5, 6, 5]",
    "[1]\n[3, 4, 2]\n[1, 3]\n[5, 6, 4]\n[1, 3, 5]"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0411.jpg",
    "IMG_0412.jpg",
    "IMG_0413.jpg"
   ]
  },
  {
   "id": "w05-07",
   "ch": 5,
   "no": 7,
   "page": 69,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def function(name, *args, **kwargs):\n    print(name)\n    print(args)\n    print(kwargs)\n\n\nfunction(\"spam\", \"ham\", kwarg1=\"eggs\", kwarg2=\"spamhameggs\")",
   "choices": [
    "spam\n('ham',)\n{'kwarg1': 'eggs', 'kwarg2': 'spamhameggs'}",
    "spam\n'ham'\n{'kwarg1': 'eggs', 'kwarg2': 'spamhameggs'}",
    "spam\n'ham'\n('eggs', 'foo')",
    "spam\n('ham',)\n('eggs', 'foo')"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0413.jpg",
    "IMG_0414.jpg"
   ]
  },
  {
   "id": "w05-08",
   "ch": 5,
   "no": 8,
   "page": 70,
   "q": "次のコードを実行して「spam&ham&eggs」と表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "def concat(*args, sep=\"/\"):\n    return sep.join(args)\n\n\nwords = [\"spam\", \"ham\", \"eggs\"]\noptions = {\"sep\": \"&\"}\nprint(【①】)",
   "choices": [
    "concat(**words, **options)",
    "concat(words, sep=options)",
    "concat(*words, **options)",
    "concat(args=words, sep=options)"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0414.jpg",
    "IMG_0415.jpg"
   ]
  },
  {
   "id": "w05-09",
   "ch": 5,
   "no": 9,
   "page": 70,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "func = lambda a, b: (b + 1, a * 2)\nx, y = 1, 2\nx, y = func(x, y)\nprint(x, y)",
   "choices": [
    "6 3",
    "2 3",
    "3 6",
    "3 2"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0415.jpg"
   ]
  },
  {
   "id": "w05-10",
   "ch": 5,
   "no": 10,
   "page": 71,
   "q": "次のコードを実行して「これはdocstringです」と表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "def func():\n    \"\"\"これはdocstringです\"\"\"\n    pass\n\n\nprint(【①】)",
   "choices": [
    "func.__docstring__",
    "func.__doc__",
    "func.__document__",
    "func.__docs__"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0415.jpg"
   ]
  },
  {
   "id": "w06-01",
   "ch": 6,
   "no": 1,
   "page": 82,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "from collections import deque\n\nqueue = deque([\"apple\", \"banana\"])\nqueue.append(\"lemon\")\nqueue.popleft()\nqueue.append(\"mango\")\nqueue.popleft()\nqueue.append(\"peach\")\nqueue.popleft()\nprint(queue)",
   "choices": [
    "deque(['lemon', 'mango'])",
    "deque(['peach'])",
    "deque(['mango', 'peach'])",
    "deque(['mango'])"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0416.jpg",
    "IMG_0417.jpg"
   ]
  },
  {
   "id": "w06-02",
   "ch": 6,
   "no": 2,
   "page": 82,
   "q": "以下のコードを実行したとき、タプルが生成されないものを選択してください。",
   "code": null,
   "choices": [
    "sample_tuple = (\"spam\", \"ham\", \"eggs\")",
    "sample_tuple = \"spam\", \"ham\", \"eggs\"",
    "sample_tuple = \"spam\",",
    "sample_tuple = tuple(\"spam\", \"ham\", \"eggs\")"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0417.jpg",
    "IMG_0418.jpg"
   ]
  },
  {
   "id": "w06-03",
   "ch": 6,
   "no": 3,
   "page": 83,
   "q": "リストとタプルの性質について誤っているものを選択してください。",
   "code": null,
   "choices": [
    "リスト、タプルには異なるデータ型の要素を格納できる",
    "要素を追加する方法として、リストではappend()メソッドを使用し、タプルではadd()メソッドを使用する",
    "リストでは格納した要素を変更できるが、タプルでは変更できない",
    "リスト、タプルの要素数は、len()関数で取得できる"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0418.jpg"
   ]
  },
  {
   "id": "w06-04",
   "ch": 6,
   "no": 4,
   "page": 83,
   "q": "setの性質として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "重複する要素を持たない",
    "2つのsetの和集合や差集合を演算できる",
    "要素の追加について、リストではappend()メソッドを使い、setではadd()メソッドを使う",
    "要素の順序は追加された順で保持される"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0418.jpg",
    "IMG_0419.jpg"
   ]
  },
  {
   "id": "w06-05",
   "ch": 6,
   "no": 5,
   "page": 83,
   "q": "以下のコードを実行して{'r', 'b', 'd'}が表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "s1 = set(\"abracadabra\")\ns2 = set(\"alacazam\")\n\nprint(【①】)",
   "choices": [
    "s1 - s2",
    "s1 ^ s1",
    "s1 | s2",
    "s1 & s2"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0419.jpg",
    "IMG_0420.jpg"
   ]
  },
  {
   "id": "w06-06",
   "ch": 6,
   "no": 6,
   "page": 84,
   "q": "以下のコードを実行した結果「True」と表示されるとき、空欄①に入る記述として正しいものを選択してください。",
   "code": "stock_1 = {\"apple\", \"banana\", \"watermelon\", \"peach\", \"strawberry\"}\nstock_2 = {\"strawberry\", \"orange\", \"melon\", \"apple\", \"banana\"}\n\ns = 【①】\nprint(\"orange\" in s)",
   "choices": [
    "stock_1 - stock_2",
    "stock_2 - stock_1",
    "stock_1 & stock_2",
    "stock_2 & stock_1"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0420.jpg",
    "IMG_0421.jpg",
    "IMG_0422.jpg"
   ]
  },
  {
   "id": "w06-07",
   "ch": 6,
   "no": 7,
   "page": 85,
   "q": "以下のコードのうち、ディクショナリの定義として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "price = {\n    \"apple\": 150,\n    \"orange\": 100,\n    \"strawberry\": 200,\n    \"banana\": 120,\n}",
    "price = {\n    (\"apple\", \"orange\"): (150, 100),\n    (\"strawberry\", \"banana\"): (200, 120),\n}",
    "price = {\n    [\"apple\", \"orange\"]: [150, 100],\n    [\"strawberry\", \"banana\"]: [200, 120],\n}",
    "price = {\n    150: \"apple\",\n    100: \"orange\",\n    200: \"strawberry\",\n    120: \"banana\",\n}"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0422.jpg"
   ]
  },
  {
   "id": "w06-08",
   "ch": 6,
   "no": 8,
   "page": 86,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "price = {\"apple\": 120}\nprice[\"peach\"] = 200\nprice[\"strawberry\"] = 180\ndel price[\"apple\"]\nprice[\"orange\"] = 100\nprice[\"peach\"] = 180\nprint(price)",
   "choices": [
    "{'peach': 180, 'strawberry': 180, 'orange': 100}",
    "{'orange': 100, 'strawberry': 180, 'peach': 200}",
    "{'orange': 100, 'peach': 200, 'strawberry': 180}",
    "{'apple': 120, 'orange': 100, 'strawberry': 180, 'peach': 180}"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0422.jpg",
    "IMG_0423.jpg"
   ]
  },
  {
   "id": "w06-09",
   "ch": 6,
   "no": 9,
   "page": 86,
   "q": "ディクショナリpriceにキー\"apple\"が含まれていることを判定するとき、空欄①の内容として誤っているものを選択してください。",
   "code": "price = {\"apple\": 120, \"banana\": 150}\nprint(【①】)",
   "choices": [
    "\"apple\" in price",
    "\"apple\" in price.keys()",
    "price.includes(\"apple\")",
    "\"apple\" in list(price)"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0423.jpg"
   ]
  },
  {
   "id": "w06-10",
   "ch": 6,
   "no": 10,
   "page": 87,
   "q": "実行すると{1: 1, 3: 27, 6: 216}と表示されるコードとして正しいものを選択してください。",
   "code": null,
   "choices": [
    "print(x: {for x**3 in (1, 3, 6)})",
    "print({x: x**3 for x in (1, 3, 6)})",
    "print({x: for x**3 in (1, 3, 6)})",
    "print({for x: x**3 in (1, 3, 6)})"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0423.jpg",
    "IMG_0424.jpg"
   ]
  },
  {
   "id": "w07-01",
   "ch": 7,
   "no": 1,
   "page": 98,
   "q": "標準ライブラリのcalendarモジュールに、prmonth()関数が定義されています。この関数を実行する方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "import prmonth\n\nprmonth(2000, 1)",
    "import calendar\n\ncalendar(2000, 1)",
    "import calendar\n\ncalendar.prmonth(2000, 1)",
    "import calendar.prmonth\n\ncalendar.prmonth(2000, 1)"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0425.jpg",
    "IMG_0426.jpg"
   ]
  },
  {
   "id": "w07-02",
   "ch": 7,
   "no": 2,
   "page": 98,
   "q": "ファイルcalc.pyにあるadd()関数を使うためのインポート方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "from add import calc",
    "from calc import add",
    "import add from calc",
    "import calc from add"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0426.jpg"
   ]
  },
  {
   "id": "w07-03",
   "ch": 7,
   "no": 3,
   "page": 99,
   "q": "次のコードを実行した結果として最も適切なものを選択してください。ただし、calcモジュールに__all__属性は存在しないものとします。",
   "code": "from calc import *",
   "choices": [
    "calcモジュール内のすべての名前が使える",
    "calcモジュール内の_で始まらない名前が使える",
    "calcモジュール名と、モジュール内のすべての名前が使える",
    "calcモジュール名と、モジュール内の_で始まらない名前が使える"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0426.jpg",
    "IMG_0427.jpg"
   ]
  },
  {
   "id": "w07-04",
   "ch": 7,
   "no": 4,
   "page": 99,
   "q": "calendarモジュールのcalendar()関数を実行する方法として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "import calendar as cal\n\nprint(cal.calendar(2000))",
    "from calendar import calendar as cal\n\nprint(cal(2000))",
    "from calendar import calendar as cal\n\nprint(calendar.cal(2000))",
    "from calendar import calendar as calendar\n\nprint(calendar(2000))"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0427.jpg",
    "IMG_0428.jpg"
   ]
  },
  {
   "id": "w07-05",
   "ch": 7,
   "no": 5,
   "page": 100,
   "q": "次のコードを「メインモジュールとしてadd()関数を実行したときのみ」その結果を表示させたい場合、空欄①に入る記述として正しいものを選択してください。",
   "code": "def add(a, b):\n    return a + b\n\n【①】",
   "choices": [
    "print(add(1, 2))",
    "if __main__ == \"__name__\":\n    print(add(1, 2))",
    "if __module__ == \"__name__\":\n    print(add(1, 2))",
    "if __name__ == \"__main__\":\n    print(add(1, 2))"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0428.jpg"
   ]
  },
  {
   "id": "w07-06",
   "ch": 7,
   "no": 6,
   "page": 100,
   "q": "from bookcard.dump import dump_cardが実行可能なとき、bookcard/__init__.pyの内容として正しいものを選択してください。ただし、ディレクトリ構成は以下のとおりで、dump.pyにdump_cardが定義されているとします。",
   "code": "【ディレクトリ構成】\nbookcard/\n    __init__.py\n    dump.py  # dump_cardが定義されている",
   "choices": [
    "# 空のファイル",
    "import dump_card",
    "import dump",
    "from dump import dump_card"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0428.jpg",
    "IMG_0429.jpg",
    "IMG_0430.jpg"
   ]
  },
  {
   "id": "w07-07",
   "ch": 7,
   "no": 7,
   "page": 101,
   "q": "パッケージが下記のディレクトリ構成を持つとき、bookcard/load/__init__.pyの内容として誤っているものを選択してください。",
   "code": "【ディレクトリ構成】\nbookcard/\n    __init__.py\n    dump.py\n    load/\n        __init__.py\n        core.py",
   "choices": [
    "from . import core",
    "from .. import dump",
    "from .dump import *",
    "from ..dump import *"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0430.jpg",
    "IMG_0431.jpg"
   ]
  },
  {
   "id": "w08-01",
   "ch": 8,
   "no": 1,
   "page": 110,
   "q": "open()関数のmode引数について誤っているものを選択してください。",
   "code": null,
   "choices": [
    "\"ab\"を指定すると、バイナリモードで追加書き込みできる",
    "\"b\"を指定すると、バイナリモードで読み込みできる",
    "\"r\"を指定すると、テキストモードで読み込みできる",
    "\"wb\"を指定すると、バイナリモードで新規書き込みできる"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0432.jpg",
    "IMG_0433.jpg"
   ]
  },
  {
   "id": "w08-02",
   "ch": 8,
   "no": 2,
   "page": 110,
   "q": "次のコードを実行してファイルの内容を読み込みたい場合、空欄①に入る記述として正しいものを選択してください。",
   "code": "fp = open(\"sample.txt\")\n【①】",
   "choices": [
    "s = load(fp)",
    "s = read(fp)",
    "s = fp.load()",
    "s = fp.read()"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0433.jpg"
   ]
  },
  {
   "id": "w08-03",
   "ch": 8,
   "no": 3,
   "page": 111,
   "q": "下記のプログラムを実行したときの説明として誤っているものを選択してください。",
   "code": "fp1 = open(\"file1\")\ns1 = fp1.read()\nwith open(\"file2\") as fp2:\n    s2 = fp2.read()\nprint(s1)\nprint(s2)",
   "choices": [
    "fp2.read()を実行している時点でfp1は閉じられていない",
    "fp2.read()で例外が発生しても、fp2は閉じられる",
    "print(s1)を実行している時点で、fp1もfp2も閉じられている",
    "プログラムが終了した時点で、fp1もfp2も閉じられている"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0433.jpg",
    "IMG_0434.jpg"
   ]
  },
  {
   "id": "w08-04",
   "ch": 8,
   "no": 4,
   "page": 111,
   "q": "次のコードを実行して1行ずつファイルを読み込んで出力します。空欄①に入る記述として誤っているものを選択してください。",
   "code": "fp = open(\"sample.txt\")\nfor s in 【①】:\n    print(s)",
   "choices": [
    "fp",
    "fp.read()",
    "fp.readlines()",
    "list(fp)"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0434.jpg"
   ]
  },
  {
   "id": "w08-05",
   "ch": 8,
   "no": 5,
   "page": 112,
   "q": "次のコードを実行してファイルに出力したい場合、空欄①に入る記述として正しいものを選択してください。",
   "code": "fp = open(\"sample.txt\", \"w\")\n【①】\nfp.close()",
   "choices": [
    "dump(fp, \"...\")",
    "write(fp, \"...\")",
    "fp.dump(\"...\")",
    "fp.write(\"...\")"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0434.jpg",
    "IMG_0435.jpg"
   ]
  },
  {
   "id": "w08-06",
   "ch": 8,
   "no": 6,
   "page": 112,
   "q": "次のコードを実行してファイルにJSON形式で出力します。空欄①に入る記述として誤っているものを選択してください。",
   "code": "import json\n\ndata = [{\"id\": 1}, {\"id\": 2}]\nfp = open(\"sample.json\", \"w\")\n【①】\nfp.close()",
   "choices": [
    "json.dump(data, fp)",
    "json.dumps(data, fp)",
    "json.dump(fp=fp, obj=data)",
    "fp.write(json.dumps(data))"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0435.jpg",
    "IMG_0436.jpg"
   ]
  },
  {
   "id": "w08-07",
   "ch": 8,
   "no": 7,
   "page": 113,
   "q": "次のコードを実行してファイルからJSON形式で読み込みます。空欄①に入る記述として正しいものを選択してください。",
   "code": "import json\n\nfp = open(\"sample.json\")\n【①】",
   "choices": [
    "s = json.load(fp)",
    "s = json.loads(fp)",
    "s = json.read(fp)",
    "s = json.reads(fp)"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0436.jpg"
   ]
  },
  {
   "id": "w09-01",
   "ch": 9,
   "no": 1,
   "page": 120,
   "q": "次のコードを実行したときに起こるエラーとして正しいものを選択してください。",
   "code": "a = \"1,000'\nprint(int(a))",
   "choices": [
    "TypeError",
    "ValueError",
    "SyntaxError",
    "NameError"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0437.jpg"
   ]
  },
  {
   "id": "w09-02",
   "ch": 9,
   "no": 2,
   "page": 120,
   "q": "次のコードで起こりうる例外を処理するとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "stocks = {\"apple\": 150, \"banana\": 190, \"blueberry\": 180}\nkey = input(\"値引きしたい果物:\")\noff_percent = input(\"値引き率(%):\")\ntry:\n    rate = (100 - int(off_percent)) / 100\n    new_price = int(stocks[key] * rate)\n    stocks[key] = new_price\nexcept 【①】:\n    print(\"エラーが発生しました\")",
   "choices": [
    "(ValueError, KeyError)",
    "(ValueError, NameError)",
    "(TypeError, NameError)",
    "(KeyError, NameError)"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0437.jpg",
    "IMG_0438.jpg",
    "IMG_0439.jpg"
   ]
  },
  {
   "id": "w09-03",
   "ch": 9,
   "no": 3,
   "page": 121,
   "q": "次のコードでValueErrorを発生させるために、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "try:\n    【①】 ValueError(\"ValueErrorです\")\nexcept ValueError as error:\n    print(error)",
   "choices": [
    "throw",
    "return",
    "send",
    "raise"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0439.jpg"
   ]
  },
  {
   "id": "w09-04",
   "ch": 9,
   "no": 4,
   "page": 122,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def divide(number, divider):\n    try:\n        answer = number / divider\n        return answer\n    except ZeroDivisionError:\n        print(\"ゼロ除算が行われました\")\n    except TypeError:\n        print(\"引数の型が不正です\")\n    finally:\n        print(\"--finally節の処理--\")\n\n\nanswer = divide(100, \"0\")\nprint(f\"結果: {answer}\")",
   "choices": [
    "引数の型が不正です\n--finally節の処理--\n結果: None",
    "ゼロ除算が行われました\n結果: None",
    "引数の型が不正です\n結果: None",
    "ゼロ除算が行われました\n--finally節の処理--\n結果: None"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0439.jpg",
    "IMG_0440.jpg"
   ]
  },
  {
   "id": "w10-01",
   "ch": 10,
   "no": 1,
   "page": 128,
   "q": "次のコードはDuckクラスにクラス変数family、インスタンス変数birdsong、メソッドshow_familyを定義しています。コードが正しく実行されるとき、空欄①〜⑤に入る記述の組み合わせとして正しいものを選択してください。",
   "code": "class Duck:\n    # クラス変数familyの定義\n    【①】 = \"Anatidae\"\n\n    # 特殊メソッド__init__の定義\n    def __init__【②】:\n        # インスタンス変数birdsongの定義\n        【③】 = \"quack\"\n\n    # show_familyメソッドの定義\n    def show_family【④】:\n        return f\"Ducks belong to the family {【⑤】}.\"",
   "choices": [
    "① self.family　② (self)　③ birdsong　④ (self)　⑤ family",
    "① family　② (self)　③ self.birdsong　④ (self)　⑤ self.family",
    "① self.family　② ()　③ self.birdsong　④ ()　⑤ self.family",
    "① family　② (self)　③ self.birdsong　④ ()　⑤ family"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0441.jpg",
    "IMG_0442.jpg",
    "IMG_0443.jpg"
   ]
  },
  {
   "id": "w10-02",
   "ch": 10,
   "no": 2,
   "page": 128,
   "q": "Duckクラスをインスタンス化するための記述として正しいものを選択してください。",
   "code": null,
   "choices": [
    "duck = Duck()",
    "duck = new Duck()",
    "duck = Duck(self)",
    "duck = new Duck(self)"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0443.jpg",
    "IMG_0444.jpg"
   ]
  },
  {
   "id": "w10-03",
   "ch": 10,
   "no": 3,
   "page": 129,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def sing(self):\n        birdsong = \"ga-ga-\"\n        print(birdsong)\n        print(self.birdsong)\n        self.birdsong = \"coin\"\n        print(self.birdsong)\n        print(birdsong)\n\n\nduck = Duck()\nduck.sing()",
   "choices": [
    "ga-ga-\nquack\ncoin\nga-ga-",
    "quack\nquack\ncoin\ncoin",
    "ga-ga-\nga-ga-\ncoin\ncoin",
    "ga-ga-\nquack\ncoin\ncoin"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0444.jpg",
    "IMG_0445.jpg",
    "IMG_0446.jpg"
   ]
  },
  {
   "id": "w10-04",
   "ch": 10,
   "no": 4,
   "page": 130,
   "q": "Duck().show_birdsong()を実行した結果として、以下の結果になるものを選択してください。\n\n【実行結果】\nquack\nga-ga-",
   "code": null,
   "choices": [
    "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def change_birdsong(birdsong):\n        birdsong = birdsong\n\n    def show_birdsong():\n        print(birdsong)\n        change_birdsong(\"ga-ga-\")\n        print(birdsong)",
    "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def change_birdsong(self, birdsong):\n        self.birdsong = birdsong\n\n    def show_birdsong(self):\n        print(birdsong)\n        change_birdsong(\"ga-ga-\")\n        print(birdsong)",
    "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def change_birdsong(birdsong):\n        birdsong = birdsong\n\n    def show_birdsong():\n        print(self.birdsong)\n        self.change_birdsong(\"ga-ga-\")\n        print(self.birdsong)",
    "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def change_birdsong(self, birdsong):\n        self.birdsong = birdsong\n\n    def show_birdsong(self):\n        print(self.birdsong)\n        self.change_birdsong(\"ga-ga-\")\n        print(self.birdsong)"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0446.jpg"
   ]
  },
  {
   "id": "w10-05",
   "ch": 10,
   "no": 5,
   "page": 131,
   "q": "Birdクラスを継承したDuckクラスを定義するための記述として正しいものを選択してください。",
   "code": null,
   "choices": [
    "class Duck extend Bird:",
    "class Duck Bird:",
    "class Duck(extend Bird):",
    "class Duck(Bird):"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0446.jpg",
    "IMG_0447.jpg",
    "IMG_0448.jpg"
   ]
  },
  {
   "id": "w10-06",
   "ch": 10,
   "no": 6,
   "page": 132,
   "q": "あるオブジェクトがあるクラスのインスタンスであるかを判定する関数として正しいものを選択してください。",
   "code": null,
   "choices": [
    "isinstanceof()",
    "type()",
    "isinstance()",
    "istypeof()"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0448.jpg",
    "IMG_0449.jpg"
   ]
  },
  {
   "id": "w11-01",
   "ch": 11,
   "no": 1,
   "page": 144,
   "q": "osモジュールについて、①をカレントディレクトリを取得する関数、②をカレントディレクトリを移動する関数としたとき、組み合わせとして正しいものを選択してください。\nなお、カレントディレクトリとは、Pythonのプログラムを実行中のディレクトリを意味します。",
   "code": null,
   "choices": [
    "① os.getcwd　② os.cd",
    "① os.getcwd　② os.chdir",
    "① os.pwd　② os.cd",
    "① os.pwd　② os.chdir"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0450.jpg"
   ]
  },
  {
   "id": "w11-02",
   "ch": 11,
   "no": 2,
   "page": 144,
   "q": "globモジュールについて、カレントディレクトリにある拡張子が.pyであるファイル名のリストを取得する方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "glob.glob(\".py\")",
    "glob.glob(\"*.py\")",
    "glob.glob(\".*.py\")",
    "glob.glob(\"%.py\")"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0450.jpg"
   ]
  },
  {
   "id": "w11-03",
   "ch": 11,
   "no": 3,
   "page": 144,
   "q": "「python check.py 1 2」を実行して['check.py', '1', '2']が表示されるとき、次のファイルcheck.pyの空欄①に入る記述として正しいものを選択してください。",
   "code": "# check.py\nimport sys\n\nprint(【①】)",
   "choices": [
    "sys.argument",
    "sys.args",
    "sys.argv",
    "sys.iter"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0450.jpg",
    "IMG_0451.jpg"
   ]
  },
  {
   "id": "w11-04",
   "ch": 11,
   "no": 4,
   "page": 145,
   "q": "次のファイルparse.pyを「python parse.py --head=1 2 3」と実行した結果として正しいものを選択してください。",
   "code": "# parse.py\nimport argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\"--head\")\nparser.add_argument(\"body\", nargs=\"+\")\nargs = parser.parse_args()\nprint(args)",
   "choices": [
    "Namespace(body=['1', '2', '3'])",
    "Namespace(head='1', body=['2', '3'])",
    "Namespace(head=['1'], body=['2', '3'])",
    "Namespace(head='1', body=['1', '2', '3'])"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0451.jpg",
    "IMG_0452.jpg"
   ]
  },
  {
   "id": "w11-05",
   "ch": 11,
   "no": 5,
   "page": 145,
   "q": "次のコードを実行した結果として最も適切なものを選択してください。",
   "code": "from math import log, pi\n\nprint(log(16, 2), pi)",
   "choices": [
    "4.0 3.141592653589793",
    "4.0 6.283185307179586",
    "8.0 3.141592653589793",
    "8.0 6.283185307179586"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0452.jpg"
   ]
  },
  {
   "id": "w11-06",
   "ch": 11,
   "no": 6,
   "page": 146,
   "q": "次のコードを実行した結果として最も適切なものを選択してください。",
   "code": "import random\n\nfor i in range(10):\n    print(random.choice(range(10)))",
   "choices": [
    "数字の0から9の10個が順番に出力される",
    "数字の0から9の10個が重複せずにランダムな順番で出力される",
    "数字の0から9のうち1個がランダムに出力される",
    "数字の0から9のうち重複を許して10個がランダムに出力される"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0452.jpg",
    "IMG_0453.jpg"
   ]
  },
  {
   "id": "w11-07",
   "ch": 11,
   "no": 7,
   "page": 146,
   "q": "randomモジュールを用いて「-1から1未満の乱数」を作成するコードとして最も適切なものを選択してください。",
   "code": null,
   "choices": [
    "random.random() - 1",
    "random.random(2) - 1",
    "random.random(-1, 1)",
    "random.random() * 2 - 1"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0453.jpg"
   ]
  },
  {
   "id": "w11-08",
   "ch": 11,
   "no": 8,
   "page": 147,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "import statistics\n\ndata = [-1, -1, -1, -1, 4]\n\nprint(statistics.mean(data))\nprint(statistics.median(data))\nprint(statistics.variance(data))",
   "choices": [
    "0\n-1\n5",
    "0\n-1\n20",
    "-1\n0\n5",
    "-1\n0\n20"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0453.jpg",
    "IMG_0454.jpg"
   ]
  },
  {
   "id": "w11-09",
   "ch": 11,
   "no": 9,
   "page": 147,
   "q": "urllib.requestモジュールについて、インターネット上のURLからデータを取得する関数として正しいものを選択してください。",
   "code": null,
   "choices": [
    "urllib.request.geturl",
    "urllib.request.open",
    "urllib.request.openurl",
    "urllib.request.urlopen"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0454.jpg"
   ]
  },
  {
   "id": "w11-10",
   "ch": 11,
   "no": 10,
   "page": 148,
   "q": "次のコードを実行した結果「2000-12-31」が表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "from datetime import datetime\n\ndt = datetime(2000, 12, 31)\nprint(【①】)",
   "choices": [
    "dt.strftime(\"%Y-%m-%d\")",
    "dt.strftime(2000, 12, 31)",
    "dt.strftime(\"{year}-{month}-{day}\")",
    "dt.strftime(\n    \"{}-{}-{}\", dt.year, dt.month, dt.day\n)"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0454.jpg",
    "IMG_0455.jpg"
   ]
  },
  {
   "id": "w11-11",
   "ch": 11,
   "no": 11,
   "page": 148,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "from datetime import date\n\ndt1 = date(2001, 1, 1)\ndt2 = date(2002, 2, 2)\ndiff = dt2 - dt1\nprint(diff.days)",
   "choices": [
    "-1",
    "1",
    "32",
    "397"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0455.jpg",
    "IMG_0456.jpg"
   ]
  },
  {
   "id": "w11-12",
   "ch": 11,
   "no": 12,
   "page": 149,
   "q": "次のコードを-m unittestを付けて実行し、以下の実行結果が表示されるとき、空欄①に入る記述として正しいものを選択してください。\n\n【実行結果】\n（略）\nAssertionError: 6 != 5\n（略）",
   "code": "import unittest\nimport mod\n\nclass TestSample(unittest.TestCase):\n    def test_it(self):\n        actual = mod.calc(2, 3)  # 6を返す\n        expected = 5\n        【①】",
   "choices": [
    "assert actual == expected",
    "assertEqual(actual, expected)",
    "self.assert(actual == expected)",
    "self.assertEqual(actual, expected)"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0456.jpg",
    "IMG_0457.jpg"
   ]
  },
  {
   "id": "w11-13",
   "ch": 11,
   "no": 13,
   "page": 150,
   "q": "次のコードを実行して、期待する結果が表示されるとき、空欄①に入る記述として正しいものを選択してください。\n\n【期待する結果】\n['sample test string 0000',\n 'sample test string 0001',\n 'sample test string 0002']",
   "code": "lines = [f\"sample test string {i:04}\" for i in range(3)]\n\n【①】",
   "choices": [
    "print(lines)",
    "print(\",\\n\".join(lines))",
    "import textwrap\n\nprint(textwrap.fill(\", \".join(lines), width=24))",
    "import pprint\n\npprint.pprint(lines)"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0457.jpg",
    "IMG_0458.jpg"
   ]
  },
  {
   "id": "w12-01",
   "ch": 12,
   "no": 1,
   "page": 162,
   "q": "仮想環境の特徴として最も適切なものを選択してください。",
   "code": null,
   "choices": [
    "仮想環境で使うPythonのバージョンは作成時に指定できない",
    "仮想環境の作成場所は省略できる",
    "仮想環境が複数あるとき、異なるバージョンのパッケージをそれぞれの仮想環境にインストールできる",
    "ある仮想環境のパッケージのバージョンを更新すると、別の仮想環境にも影響する"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0459.jpg",
    "IMG_0460.jpg"
   ]
  },
  {
   "id": "w12-02",
   "ch": 12,
   "no": 2,
   "page": 162,
   "q": "UnixやmacOSにおいて仮想環境を使用する場合、導入時に必要なコマンドとして最も適切なものを選択してください。",
   "code": null,
   "choices": [
    "python3 -m venv venv\nsource venv/bin/activate",
    "python3 -m venv venv\nsource activate",
    "python3 venv.py venv\nsource venv/bin/activate",
    "python3 venv.py venv\nsource activate"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0460.jpg",
    "IMG_0461.jpg"
   ]
  },
  {
   "id": "w12-03",
   "ch": 12,
   "no": 3,
   "page": 163,
   "q": "コマンドとその説明の組み合わせとして誤っているものを選択してください。",
   "code": null,
   "choices": [
    "パッケージを新規にインストールすると、最新バージョンがインストールされる\npython -m pip install requests",
    "パッケージを新規にインストールするときに、バージョンを指定してパッケージをインストールする\npip install requests==2.27",
    "インストール済みのパッケージを再インストールすると、最新バージョンに更新される\npip install requests",
    "インストール済みの状態から、パッケージのバージョンを変更する\npip install requests==2.28"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0461.jpg"
   ]
  },
  {
   "id": "w12-04",
   "ch": 12,
   "no": 4,
   "page": 163,
   "q": "インストール済みのパッケージ一覧を表示する方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "pip install --list",
    "pip list",
    "pip packages",
    "pip show"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0461.jpg",
    "IMG_0462.jpg"
   ]
  },
  {
   "id": "w13-01",
   "ch": 13,
   "no": 1,
   "page": 170,
   "q": "Pythonの特徴として正しいものを選択してください。",
   "code": null,
   "choices": [
    "文のグルーピングでは、グループの開始と終了に括弧を用いる",
    "変数や引数を使うときは、事前にデータ型の宣言が必要である",
    "Pythonはインタープリタ言語である",
    "他のプログラミング言語で書かれたプログラムによる機能拡張には対応していない"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0463.jpg"
   ]
  },
  {
   "id": "w13-02",
   "ch": 13,
   "no": 2,
   "page": 170,
   "q": "対話モードの特徴として正しいものを選択してください。",
   "code": null,
   "choices": [
    "プロンプトは、バージョン番号と開発者情報のメッセージの後に表示される",
    "一次プロンプトは「>>>」である",
    "二次プロンプトは「=>」である",
    "行を継続すると正しいインデントが提示される"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0463.jpg"
   ]
  },
  {
   "id": "w13-03",
   "ch": 13,
   "no": 3,
   "page": 170,
   "q": "次のコードを実行した結果として表示されるものを選択してください。",
   "code": "pi = 3.14\nif pi == 3:\n    print(\"piは3\")\nelif pi < 3:\n    print(\"piは3より小さい\")\nelif pi > 3:\n    print(\"piは3より大きい\")\nelif pi >= 3:\n    print(\"piは3以上\")",
   "choices": [
    "piは3",
    "piは3より小さい",
    "piは3より大きい",
    "piは3以上"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0463.jpg",
    "IMG_0464.jpg"
   ]
  },
  {
   "id": "w13-04",
   "ch": 13,
   "no": 4,
   "page": 171,
   "q": "次のコードを実行した結果として表示されるものを選択してください。",
   "code": "x = \"one\"\ny = \"two\"\nx, y = y, x\nprint(\"x:\", x, \"y:\", y)",
   "choices": [
    "x: \"one\" y: \"two\"",
    "x: \"one\" y: \"one\"",
    "x: \"two\" y: \"two\"",
    "x: \"two\" y: \"one\""
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0464.jpg"
   ]
  },
  {
   "id": "w13-05",
   "ch": 13,
   "no": 5,
   "page": 171,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "x = 3**2 + 6 // 4\nprint(x)",
   "choices": [
    "3",
    "7",
    "10",
    "11"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0464.jpg"
   ]
  },
  {
   "id": "w13-06",
   "ch": 13,
   "no": 6,
   "page": 172,
   "q": "以下のコードを実行して「tauの値はおよそ6.283である」と表示する場合、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "import math\n\nprint(f\"tauの値はおよそ{【①】}である\")",
   "choices": [
    "math.tau:3",
    "math.tau:3f",
    "math.tau:.3",
    "math.tau:.3f"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0464.jpg"
   ]
  },
  {
   "id": "w13-07",
   "ch": 13,
   "no": 7,
   "page": 172,
   "q": "リストの特徴として正しいものを選択してください。",
   "code": null,
   "choices": [
    "丸括弧内にカンマ区切りで記述する",
    "インデックス1で、先頭の要素を指定できる",
    "インデックスを指定して参照できるが更新できない",
    "インデックス-1で、末尾の要素を指定できる"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0464.jpg",
    "IMG_0465.jpg"
   ]
  },
  {
   "id": "w13-08",
   "ch": 13,
   "no": 8,
   "page": 172,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "lst = [10, 20, 30, 40]\nprint(lst[3:], lst[:2])",
   "choices": [
    "[30, 40] [10, 20]",
    "[40] [10, 20, 30]",
    "[30] [10, 20]",
    "[40] [10, 20]"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0465.jpg"
   ]
  },
  {
   "id": "w13-09",
   "ch": 13,
   "no": 9,
   "page": 173,
   "q": "Pythonのコーディングスタイルとして不適切なものを選択してください。",
   "code": null,
   "choices": [
    "インデントには空白4つを使うこと",
    "ソースコードの幅が100文字を超えないように折り返すこと",
    "インデントにタブを使わないこと",
    "可能なら、コメントは独立した行に書くこと"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0465.jpg",
    "IMG_0466.jpg"
   ]
  },
  {
   "id": "w13-10",
   "ch": 13,
   "no": 10,
   "page": 173,
   "q": "次のコードを実行して期待する結果が表示されるとき、空欄①〜③に入る記述の組み合わせとして正しいものを選択してください。\n\n【期待する結果】\n3は、3か5の倍数\n4は、3の倍数でも5の倍数でもない\n5は、3か5の倍数\n15は、15の倍数",
   "code": "for i in [3, 4, 5, 15]:\n    if i % 3 == 0 【①】 i % 5 == 0:\n        print(f\"{i}は、15の倍数\")\n    elif i % 3 == 0 【②】 i % 5 == 0:\n        print(f\"{i}は、3か5の倍数\")\n    【③】:\n        print(f\"{i}は、3の倍数でも5の倍数でもない\")",
   "choices": [
    "① or　② and　③ else",
    "① or　② and　③ not",
    "① and　② or　③ else",
    "① and　② or　③ not"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0466.jpg"
   ]
  },
  {
   "id": "w13-11",
   "ch": 13,
   "no": 11,
   "page": 174,
   "q": "次のコードでforが繰り返される回数として正しいものを選択してください。",
   "code": "for i in range(1, 7, 2):\n    print(i)",
   "choices": [
    "2",
    "3",
    "4",
    "5"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0466.jpg",
    "IMG_0467.jpg"
   ]
  },
  {
   "id": "w13-12",
   "ch": 13,
   "no": 12,
   "page": 174,
   "q": "次のコードを実行した結果「p」が表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "for ch in \"Apple\":\n    if ch == \"p\":\n        【①】\n\nprint(ch)",
   "choices": [
    "else",
    "break",
    "return",
    "continue"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0467.jpg"
   ]
  },
  {
   "id": "w13-13",
   "ch": 13,
   "no": 13,
   "page": 175,
   "q": "関数で使用する変数の特徴として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "関数内で、グローバル変数への代入を行う場合は、global文を使う",
    "global文のない関数内での変数への代入は、その関数のローカル変数として扱われる",
    "関数内では、関数の外側で定義された変数に値を直接代入できる",
    "関数内で定義したすべての変数は、関数の外側で参照できない"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0467.jpg"
   ]
  },
  {
   "id": "w13-14",
   "ch": 13,
   "no": 14,
   "page": 175,
   "q": "キーワード引数を使った関数を呼び出す方法として正しいものを選択してください。",
   "code": "def function(x, y, z=\"foo\", w=\"bar\"):\n    print(x, y, z, w)",
   "choices": [
    "function(z=\"eggs\", w=\"pork\", \"spam\", \"ham\")",
    "function(\"spam\", \"ham\", \"eggs\", z=\"foo\", w=\"pork\")",
    "function(\"spam\", \"ham\", z=\"eggs\", a=\"pork\")",
    "function(\"spam\", \"ham\", z=\"eggs\", w=\"pork\")"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0467.jpg",
    "IMG_0468.jpg"
   ]
  },
  {
   "id": "w13-15",
   "ch": 13,
   "no": 15,
   "page": 176,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "default_name = \"Taro\"\n\ndef hello1(name=default_name):\n    return f\"Hello {name}.\"\n\ndef hello2(name=None):\n    if name is None:\n        name = default_name\n    return f\"Hello {name}.\"\n\n\ndefault_name = \"Hanako\"\nprint(hello1(), hello2())",
   "choices": [
    "Hello Taro. Hello Taro.",
    "Hello Taro. Hello Hanako.",
    "Hello Hanako. Hello Taro.",
    "Hello Hanako. Hello Hanako."
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0468.jpg",
    "IMG_0469.jpg"
   ]
  },
  {
   "id": "w13-16",
   "ch": 13,
   "no": 16,
   "page": 177,
   "q": "次のコードを実行して「foo_bar」と表示されるとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "def concat(arg1, arg2, sep=\"/\"):\n    return sep.join([arg1, arg2])\n\n\nwords = [\"foo\", \"bar\"]\noptions = {\"sep\": \"_\"}\nprint(【①】)",
   "choices": [
    "concat(arg1, arg2=words, sep=options)",
    "concat(*words, **options)",
    "concat(words, sep=options)",
    "concat(**words, **options)"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0469.jpg"
   ]
  },
  {
   "id": "w13-17",
   "ch": 13,
   "no": 17,
   "page": 177,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "func = lambda a, b: (b * 3, a + 2)\nx, y = 5, 6\np, q = func(x, y)\nprint(p, q)",
   "choices": [
    "7 18",
    "5 6",
    "6 5",
    "18 7"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0469.jpg"
   ]
  },
  {
   "id": "w13-18",
   "ch": 13,
   "no": 18,
   "page": 178,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "data = [1, 2, 3, 4]\nresult = []\nwhile data:\n    result.append(data.pop())\nprint(result)",
   "choices": [
    "[0, 1, 2, 3]",
    "[1, 2, 3, 4]",
    "[4, 3, 2, 1]",
    "IndexErrorになる"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0469.jpg",
    "IMG_0470.jpg"
   ]
  },
  {
   "id": "w13-19",
   "ch": 13,
   "no": 19,
   "page": 178,
   "q": "リストの要素に関する記述として正しいものを選択してください。",
   "code": null,
   "choices": [
    "[[1, 2], [3, 4, 5, 6]]のように、異なる長さのリストはリストの要素にできない",
    "[[1, 2, 3, 4]]の長さは4である",
    "[[1, 2], [3, 4]]の長さは4である",
    "[[1, 2], [3, 4]]をリストの入れ子という"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0470.jpg",
    "IMG_0471.jpg"
   ]
  },
  {
   "id": "w13-20",
   "ch": 13,
   "no": 20,
   "page": 179,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def value(arg):\n    return arg\n\n\nresult1 = value(0) and value(1) and value(2)\nresult2 = value(0) or value(1) or value(2)\nprint(result1, result2)",
   "choices": [
    "True False",
    "0 1",
    "False True",
    "0 2"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0471.jpg",
    "IMG_0472.jpg"
   ]
  },
  {
   "id": "w13-21",
   "ch": 13,
   "no": 21,
   "page": 179,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "for i, j in zip([1, 10, 100], [1, 2, 3]):\n    print(i * j)",
   "choices": [
    "1\n12\n103",
    "1\n20\n300",
    "10\n100\n6",
    "1\n22\n333"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0472.jpg"
   ]
  },
  {
   "id": "w13-22",
   "ch": 13,
   "no": 22,
   "page": 180,
   "q": "以下のコードを実行したとき、タプルが生成されるものを選択してください。",
   "code": null,
   "choices": [
    "sample_tuple = [\"spam\", \"ham\", \"eggs\"]",
    "sample_tuple = {\"spam\", \"ham\", \"eggs\"}",
    "sample_tuple = tuple(\"spam\", \"ham\", \"eggs\")",
    "sample_tuple = \"spam\","
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0472.jpg"
   ]
  },
  {
   "id": "w13-23",
   "ch": 13,
   "no": 23,
   "page": 180,
   "q": "setの性質として正しいものを選択してください。",
   "code": null,
   "choices": [
    "追加した要素の順序は保持されない",
    "2つのsetの差集合を求められない",
    "append()メソッドで要素を追加できる",
    "重複する要素を持てる"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0472.jpg",
    "IMG_0473.jpg"
   ]
  },
  {
   "id": "w13-24",
   "ch": 13,
   "no": 24,
   "page": 180,
   "q": "次のコードを実行した結果として表示されるものを選択してください。",
   "code": "price = {\"red\": 180, \"green\": 250}\ndel price[\"red\"]\nprice[\"blue\"] = 230\nprice[\"orange\"] = 120\nprice[\"green\"] = 240\nprint(price)",
   "choices": [
    "{'red': 180, 'blue': 230, 'green': 240, 'orange': 120}",
    "{'orange': 120, 'blue': 230, 'green': 250}",
    "{'red': 180, 'orange': 120, 'green': 250, 'blue': 230}",
    "{'green': 240, 'blue': 230, 'orange': 120}"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0473.jpg"
   ]
  },
  {
   "id": "w13-25",
   "ch": 13,
   "no": 25,
   "page": 181,
   "q": "次のコードを「メインモジュールとしてgreeting()関数を実行したときのみ」その結果を表示させたい場合、空欄①に入る記述として正しいものを選択してください。",
   "code": "def greeting():\n    print(\"Bonjour\")\n\n【①】",
   "choices": [
    "if __main__ == \"__name__\":\n    greeting()",
    "if __name__ == \"__main__\":\n    greeting()",
    "if __module__ == \"__name__\":\n    greeting()",
    "greeting()"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0473.jpg"
   ]
  },
  {
   "id": "w13-26",
   "ch": 13,
   "no": 26,
   "page": 181,
   "q": "下記のディレクトリ構成を持つパッケージにおいて、サブモジュール「load.py」の属性をパッケージ「save」で読み込む必要があります。このとき、my_app/save/__init__.pyの内容として正しいものを選択してください。",
   "code": "【ディレクトリ構成】\nmy_app/\n    __init__.py\n    load.py\n    save/\n        __init__.py",
   "choices": [
    "from . import load",
    "from ..load import",
    "from ..load import *",
    "from load import *"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0473.jpg",
    "IMG_0474.jpg"
   ]
  },
  {
   "id": "w13-27",
   "ch": 13,
   "no": 27,
   "page": 182,
   "q": "open()関数のmode引数について誤っているものを選択してください。",
   "code": null,
   "choices": [
    "\"r+\"を指定すると、テキストモードで読み書きできる",
    "\"b\"を指定すると、バイナリモードで読み込みできる",
    "\"ab\"を指定すると、バイナリモードで追加書き込みできる",
    "\"wb\"を指定すると、バイナリモードで新規書き込みできる"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0474.jpg"
   ]
  },
  {
   "id": "w13-28",
   "ch": 13,
   "no": 28,
   "page": 182,
   "q": "次のコードを実行したときに起こるエラーとして正しいものを選択してください。",
   "code": "data = [0, 1, 2]\nfor i data:\n    print(i)",
   "choices": [
    "SyntaxError",
    "ValueError",
    "TypeError",
    "NameError"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0474.jpg",
    "IMG_0475.jpg"
   ]
  },
  {
   "id": "w13-29",
   "ch": 13,
   "no": 29,
   "page": 183,
   "q": "次のコードで起こりうる例外を処理するとき、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "try:\n    times = input(\"分割回数:\")\n    value = 100 / int(times)\n    print(value)\nexcept 【①】:\n    print(\"エラーが発生しました\")",
   "choices": [
    "(TypeError, NameError)",
    "(ZeroDivisionError, TypeError)",
    "(ValueError, ZeroDivisionError)",
    "(NameError, ValueError)"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0475.jpg"
   ]
  },
  {
   "id": "w13-30",
   "ch": 13,
   "no": 30,
   "page": 183,
   "q": "次のコードでValueErrorを発生させるために、空欄①に当てはまる記述として正しいものを選択してください。",
   "code": "【①】 ValueError(\"ValueErrorです\")",
   "choices": [
    "send",
    "raise",
    "throw",
    "return"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0475.jpg"
   ]
  },
  {
   "id": "w13-31",
   "ch": 13,
   "no": 31,
   "page": 184,
   "q": "次のコードを実行した結果として正しいものを選択してください。",
   "code": "def divide(number, divider):\n    try:\n        answer = number / divider\n        return answer\n    except ZeroDivisionError:\n        print(\"ゼロ除算が行われました\")\n    except TypeError:\n        print(\"引数の型が不正です\")\n    finally:\n        print(\"--finally節の処理--\")\n\n\nanswer = divide(50.0, 0)\nprint(f\"結果: {answer}\")",
   "choices": [
    "ゼロ除算が行われました\n--finally節の処理--\n結果: None",
    "引数の型が不正です\n結果: None",
    "ゼロ除算が行われました\n結果: None",
    "引数の型が不正です\n--finally節の処理--\n結果: None"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0475.jpg",
    "IMG_0476.jpg"
   ]
  },
  {
   "id": "w13-32",
   "ch": 13,
   "no": 32,
   "page": 185,
   "q": "次のコードはDuckクラスにクラス変数family、インスタンス変数birdsong、メソッドshow_familyを定義しています。コードが正しく実行されるとき、空欄①〜⑤に入る記述の組み合わせとして正しいものを選択してください。",
   "code": "class Duck:\n    【①】 = \"Anatidae\"\n\n    def 【②】:\n        【③】 = \"quack\"\n\n    def show_family【④】:\n        return f\"The duck belongs to the {【⑤】} family.\"",
   "choices": [
    "① family　② __init__()　③ birdsong　④ ()　⑤ family",
    "① self.family　② __init__()　③ birdsong　④ ()　⑤ family",
    "① family　② __init__(self)　③ self.birdsong　④ (self)　⑤ self.family",
    "① self.family　② __init__(self)　③ self.birdsong　④ (self)　⑤ self.family"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0476.jpg",
    "IMG_0477.jpg"
   ]
  },
  {
   "id": "w13-33",
   "ch": 13,
   "no": 33,
   "page": 186,
   "q": "次のコードを実行して、期待する結果が表示されるとき、空欄①、②に入る記述の組み合わせとして正しいものを選択してください。\n\n【期待する結果】\nga-ga-\nquack\ncoin\nga-ga-",
   "code": "class Duck:\n    def __init__(self):\n        self.birdsong = \"quack\"\n\n    def sing(self):\n        【①】\n        print(birdsong)\n        print(self.birdsong)\n        【②】\n        print(self.birdsong)\n        print(birdsong)\n\n\nduck = Duck()\nduck.sing()",
   "choices": [
    "① self.birdsong = \"quack\"\n② birdsong = \"ga-ga-\"",
    "① self.birdsong = \"coin\"\n② birdsong = \"ga-ga-\"",
    "① birdsong = \"ga-ga-\"\n② self.birdsong = \"coin\"",
    "① birdsong = \"ga-ga-\"\n② self.birdsong = \"quack\""
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0477.jpg",
    "IMG_0478.jpg"
   ]
  },
  {
   "id": "w13-34",
   "ch": 13,
   "no": 34,
   "page": 187,
   "q": "globモジュールについて、カレントディレクトリにある拡張子が.txtであるファイル名のリストを取得する方法として正しいものを選択してください。",
   "code": null,
   "choices": [
    "glob.glob(\".txt\")",
    "glob.findall(\".txt\")",
    "glob.glob(\"*.txt\")",
    "glob.findall(\"*.txt\")"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0478.jpg"
   ]
  },
  {
   "id": "w13-35",
   "ch": 13,
   "no": 35,
   "page": 187,
   "q": "次のファイルmain.pyを「python main.py --command=show tokyo osaka」と実行した結果として正しいものを選択してください。",
   "code": "# main.py\nimport argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\"--command\")\nparser.add_argument(\"target\", nargs=\"+\")\nargs = parser.parse_args()\nprint(args)",
   "choices": [
    "Namespace(command=['show', 'tokyo', 'osaka'])",
    "Namespace(target=['show', 'tokyo', 'osaka'])",
    "Namespace(command=['show'], target=['tokyo', 'osaka'])",
    "Namespace(command='show', target=['tokyo', 'osaka'])"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0478.jpg",
    "IMG_0480.jpg"
   ]
  },
  {
   "id": "w13-36",
   "ch": 13,
   "no": 36,
   "page": 188,
   "q": "次のコードの説明として誤っているものを選択してください。",
   "code": "import re\n\ns = \"tic tac tac toe\"\nprint(re.sub(r\"([a-z]+) \\1\", r\"\\1\", s))",
   "choices": [
    "reモジュールは、正規表現で文字列の処理を行える",
    "re.subは、特定のパターンを変換する関数である",
    "出力は、tic tac toeになる",
    "print(s.replace(\"tac \", \"\"))と同じ出力になる"
   ],
   "answer": "D",
   "ansPages": [
    "IMG_0480.jpg",
    "IMG_0481.jpg",
    "IMG_0482.jpg"
   ]
  },
  {
   "id": "w13-37",
   "ch": 13,
   "no": 37,
   "page": 188,
   "q": "次のコードを-m unittestを付けて実行し、以下の実行結果が表示されるとき、空欄①に入る記述として正しいものを選択してください。\n\n【実行結果】\n（略）\nAssertionError: 'Sunday' != 'Monday'\n- Sunday\n+ Monday\n（略）",
   "code": "import unittest\n\nclass TestApp(unittest.TestCase):\n    def test_one(self):\n        actual = \"Sunday\"\n        expected = \"Monday\"\n        【①】",
   "choices": [
    "self.assert(actual == expected)",
    "self.assertEqual(actual, expected)",
    "self.assertEqual(actual == expected)",
    "assert actual == expected"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0482.jpg",
    "IMG_0483.jpg"
   ]
  },
  {
   "id": "w13-38",
   "ch": 13,
   "no": 38,
   "page": 189,
   "q": "次のコードを実行して、期待する結果が表示されるとき、空欄①に入る記述として正しいものを選択してください。\n\n【期待する結果】\n1 sheep jumped a fence.,\n2 sheep jumped a fence.,\n3 sheep jumped a fence.",
   "code": "text = [f\"{i} sheep jumped a fence.\" for i in range(1, 4)]\n【①】",
   "choices": [
    "import textwrap\n\nprint(textwrap.fill(\", \".join(text), width=24))",
    "print(text)",
    "import pprint\n\npprint.pprint(text)",
    "print(\"\\n\".join(text))"
   ],
   "answer": "A",
   "ansPages": [
    "IMG_0483.jpg"
   ]
  },
  {
   "id": "w13-39",
   "ch": 13,
   "no": 39,
   "page": 189,
   "q": "仮想環境の特徴として誤っているものを選択してください。",
   "code": null,
   "choices": [
    "仮想環境をアクティベートすると、プロンプトが変わる",
    "仮想環境が複数あるとき、異なるバージョンのパッケージをそれぞれの仮想環境にインストールできる",
    "ある仮想環境のパッケージのバージョンを変更すると、別の仮想環境に影響する",
    "仮想環境が複数あるとき、Pythonの異なるバージョンを指定できる"
   ],
   "answer": "C",
   "ansPages": [
    "IMG_0483.jpg"
   ]
  },
  {
   "id": "w13-40",
   "ch": 13,
   "no": 40,
   "page": 190,
   "q": "対話モードでの入力履歴はファイルに保存されます。このファイルの名称として正しいものを選択してください。",
   "code": null,
   "choices": [
    ".command_history",
    ".python_history",
    "command_history",
    "python_history"
   ],
   "answer": "B",
   "ansPages": [
    "IMG_0483.jpg"
   ]
  }
 ]
};
