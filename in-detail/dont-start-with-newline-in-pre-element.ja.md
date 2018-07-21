# `pre`要素は改行で始めない

最初の改行はブラウザーに無視されますが、2番目以降はそのまま表示されます。

悪い例:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

良い例:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


## 解説

改行が意味を持つ唯一の要素として`pre`要素があります。特に何もしなければ、この要素では改行は改行としてそのまま扱われ、ブラウザー上でも改行されます。ただし例外があり、*開始タグ直後の改行文字1つ*だけは削除されてしまいます。

    <pre><code>
    
    function isArray(o) {
      if (Object.prototype.toString.call(o) === "[object Array]") {
        return true;
      }

      return false;
    }</code></pre>

上記例では`pre`要素の最初に2つの改行文字がありますが、1つの改行、つまり1行分の空行しか表示されることはありません。常に削除されるというのならこの挙動を前提にしても良さそうですが、この挙動はHTML構文として扱われた場合に限って起こります。テンプレートによってウェブページが生成されることが多い現在、HTML構文であるかどうかはテンプレート次第で、いつの間にか変更が加わることもありえます。そのためこの挙動を前提にすることは危険が伴うでしょう。

    <pre><code>function isArray(o) {
      if (Object.prototype.toString.call(o) === "[object Array]") {
        return true;
      }

      return false;
    }</code></pre>

常にこのように改行を入れずに始めると、挙動の統一を図ることができます。これならコピー・アンド・ペーストにも強いでしょう。
