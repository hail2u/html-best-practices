# `favicon.ico`へリンクしない

ほとんどのブラウザーは`/favicon.ico`を自動的に非同期で取得します。

悪い例:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

良い例:

    <!-- Place `favicon.ico` in the root directory. -->
