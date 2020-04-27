# 代替スタイルシートへ`title`属性を追加する

人間にわかりやすいラベルにより適切なスタイルシートを選択しやすくなります。

悪い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">
