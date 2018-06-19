# 内部リンクには絶対パスを使う

絶対パスはインターネット回線のないローカルの環境でもうまく動きます。

悪い例:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

良い例:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


## 解説

URLはHTML文書のURLを基準に解決されるため、それに基づいて省略できます。限界まで省略するとコード・サイズが抑えられますが、省略しすぎると再利用性が薄れてしまいます。特にウェブサイトの内部リソース、つまり同じドメイン配下のファイルへは絶対パスを使うとバランスが良いはずです。

絶対URL（`https:`で始まるURL）は、内部リンクには明らかに冗長です。一番短くしやすい相対パスは、リソースの移動に対して一括置換などで対処するのを難しくします。

絶対パス（スラッシュで始まるパス）は多少の冗長さと引き換えになりますが、どのリソースからもどのリソースへ同じ文字列でリンクできます。リソースの移動にも書き換えはもちろん必要ですが、一括置換で対処できます。`http:`から`https:`へ切り替えようと考えている場合にもそのままで運用を続けられることでしょう。
