# `data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない

タグ文字列はとても複雑になりえます。こういった簡単なルールによってタグ文字列を読みやすくできるでしょう。

悪い例:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


## 解説

現在のHTMLでは、MicrodataやRDFa Liteのための属性や、ユーザーが独自に定義することのできるカスタムデータ属性をそのまま書けるようになりました。具体的な使い方については触れませんが、漫然と追加すれば良いというわけではありません。

例えば良くあるコーディング規約として*属性をアルファベット順に記述する*というようなものがあります。それに忠実に従ってカスタムデータ属性やMicrodataの属性を要素に追加するとどうなるでしょうか。

    <img alt="HTML Best Practices" data-format="png" itemprop="image" src="/img/logo.png">

カスタムデータ属性は`data-`で必ず始まり、Microdataの属性は`item`で必ず始まるので、このように要素ごとの属性の間に挟まってしまいます。ある程度はまとまっていますが、要素ごとの属性が分断されてしまっているとどのような属性が指定されているのか把握するのに手間取ることでしょう。

    <img alt="HTML Best Practices" src="/img/logo.png" data-format="png" itemprop="image">

まずはそれぞれの要素ごとに定義されている属性を書くと、そこでその要素がどういう振る舞いをするのかが概ね決定できるので、どのような意図を持った要素なのかが明確になります。続けてカスタムデータ属性はカスタムデータ属性でまとめ、Microdataの属性もMicrodataの属性でまとめて書くようにするのが良いでしょう。
