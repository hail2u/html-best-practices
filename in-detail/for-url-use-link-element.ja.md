# URLには`link`要素を使う

`href`属性の値はURLとして解決できます。

悪い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

良い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


## 解説

`a`や`link`要素の`href`属性はHTML文書のURLを基準にして解決されます。つまり絶対URLである必要はありません。対して`meta`要素の`content`属性は汎用的な値をとるため、URLを指定したい場合は必ず絶対URLである必要があります。URLとしてマークアップしたいのならば、URLとして解決されるであろう`link`要素の`href`属性を使うべきだ、とも言えるでしょう。

Facebookのいいねボタンのように`meta`要素の利用が義務付けられている場合はしょうがありませんが、そうでないならば`link`要素などを使い絶対パスでURLを指定した方が効率的です。`https:`の「s」を忘れるなどといったケアレスミスも減ることでしょう。
