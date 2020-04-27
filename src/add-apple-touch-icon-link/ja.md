# `apple-touch-icon`へのリンクを書く

デフォルトでリクエストされるタッチ・アイコンのパスは突然変わりました。

Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">
