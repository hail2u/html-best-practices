# `blockquote`要素内でも適切な要素を使う

`blockquote`要素の中身は引用で、単なる文字の連続ではありません。

悪い例:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
