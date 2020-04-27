# 文字参照はできる限り使わない

UTF-8でHTML文書を書くなら、Emojiも含めほとんどあらゆる文字はそのまま書けます。

悪い例:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

良い例:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
