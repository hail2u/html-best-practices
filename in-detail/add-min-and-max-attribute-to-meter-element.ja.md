# `meter`要素では`min`及び`max`属性を追加する

`min`と`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

良い例:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

「[`progress`要素には`max`属性を追加する][1]」を参照してください。


[1]: add-max-attribute-to-progress-element.ja.md
