# 機械的に解釈可能でない`time`要素では`datetime`属性を追加する

`datetime`属性を使わない場合、`time`要素の中身は限定されます。

悪い例:

    <time>Dec 19, 2014</time>

良い例:

    <time datetime="2014-12-19">Dec 19, 2014</time>
