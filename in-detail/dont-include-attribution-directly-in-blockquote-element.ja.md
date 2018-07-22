# `blockquote`要素内に帰属情報を含めない

`blockquote`要素の中身は引用です。

悪い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

同じく良い例:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>

仕様でも2つの例示を通して帰属情報（引用元）のわかりやすい併記を行う方法を解説しています。`blockquote`要素は引用を意味し、その中には引用そのものしか含められないからです。悪い例で挙げたように書くとまとまっていますが、2つの`p`要素の扱いの違いを機械的に判断することは難しく、人ならぬ何かには混乱をもたらしてしまうかもしれません。

良い例で挙げたように必ず`blockquote`要素の外に出してやりましょう。これでも引用と引用元の対応関係は必ずしも明確ではありませんが、仕様で実装例として触れられていることから、適切に解釈されることを期待しても良いはずです。対応関係を明確にしたい場合は、冗長ですが、`figure`と`figcaption`要素を使うと良いでしょう。
