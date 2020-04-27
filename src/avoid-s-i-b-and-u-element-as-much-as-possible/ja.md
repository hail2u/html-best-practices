# できる限り`s`や`i`、`b`、`u`要素を避ける

これらの要素のセマンティックスは人類には難しすぎます。

悪い例:

    <i class="icon-search"></i>

良い例:

    <span class="icon-search" aria-hidden="true"></span>
