# 置き換えられるべき文字エンコーディング指定フォーマットを使わない

HTTPヘッダーはサーバー側で指定されるべきで、簡単にしておきましょう。

悪い例:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

良い例:

    <meta charset="UTF-8">
