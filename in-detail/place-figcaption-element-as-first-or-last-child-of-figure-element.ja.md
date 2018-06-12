# `figcaption`要素は`figure`要素の最初か最後に置く

仕様では`figcaption`要素を`figure`要素の中ほどに置けません。

悪い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

良い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


## 解説

`figcaption`要素は必須ではありませんが、多くの場合は書くことでしょう。`figure`及び`figcaption`要素は図や画像の注釈にだけでなく、あるコンテンツ（群）へ明示的にキャプションを提供するためにも使われるからです。`figure`要素は複数の図を持つかもしれないので、その場合にそれぞれにキャプションを付けたくなるかもしれません。

    <figure>
      <img
        alt="様々な花が咲き乱れている。"
        src="spring.jpg">
      <figcaption>春の庭</figcaption>
      <img
        alt="木の葉が色づき、落ちはじめている。"
        src="fall.jpg">
      <figcaption>秋の庭</figcaption>
    </figure>

文法として`figcaption`要素は`figure`要素の最初か最後の子要素にしかなれないという点でも問題がありますが、こういった場合には`figure`要素は2つの画像を関連付けてまとめたものと捉えるべきで、`figcaption`要素はその*まとまりへのキャプション*となります。

    <figure>
      <figcaption>庭の季節による変化</figcaption>
      <img
        alt="様々な花が咲き乱れている。"
        src="spring.jpg">
      <img
        alt="木の葉が色づき、落ちはじめている。"
        src="fall.jpg">
    </figure>

最初と最後のどちらに置くかは難しいところですが、少なくともこのようにひとまとまりとして捉えてキャプションをつけてやる必要があります。それぞれにキャプションを付けることそれ自体が重要である場合には`figure`要素をネストし、それぞれの画像ごとに`figcaption`要素を使用しましょう。
