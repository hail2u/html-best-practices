# 文書の文字エンコーディングを指定する

まだすべてのブラウザーでUTF-8がデフォルトになっていません。

悪い例:

    <head>
      <title>HTML Best Practices</title>
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>
