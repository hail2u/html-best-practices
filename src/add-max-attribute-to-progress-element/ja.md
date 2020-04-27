# `progress`要素には`max`属性を追加する

`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <progress value="0.5"> 50%</progress>

良い例:

    <progress max="100" value="50"> 50%</progress>
