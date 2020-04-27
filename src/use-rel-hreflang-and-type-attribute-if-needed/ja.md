# `rel`や`hreflang`、`type`属性を必要ならば使う

これらのヒントは、アプリケーションがリンク先のリソースをどう扱えば良いのかの助けになります。

悪い例:

    <a href="/ja/pdf">Japanese PDF version</a>

良い例:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
