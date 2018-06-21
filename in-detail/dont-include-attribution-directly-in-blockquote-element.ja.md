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

同じく良い例（WHATWG推奨）:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>

同じく良い例（W3C推奨）:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    
      <footer>— HTML Best Practices</footer>
    </blockquote>


## 解説

仕様でも2つの例示を通して帰属情報、つまり引用元のわかりやすい併記を行う方法を解説しています。本来的に`blockquote`要素は引用を意味し、その中には引用そのものしか含められません。悪い例で挙げたように書くと一見まとまっていますが、2つの`p`要素の扱いの違いを機械的に判断することは難しく、人ならぬ何かには混乱をもたらしてしまうかもしれません。

良い例で挙げたように必ず`blockquote`要素の外に出してやりましょう。冗長ですが、`figure`と`figcaption`要素を使うと引用と引用元の対応関係が明確になります。

W3C版の仕様では`footer`要素を使う例示が挙げられています。印象としては素直に見えますが、セクション要素以外で`footer`要素を使う特殊な例で、例外的なコードになります。紙の上での引用では引用元の部分がインデントされないことともデザイン上の競合があり、微妙なところかもしれません。
