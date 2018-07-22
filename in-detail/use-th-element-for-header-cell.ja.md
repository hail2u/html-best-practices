# 見出しセルには`th`要素を使う

避ける理由はないでしょう。

悪い例:

    <table>
      <thead>
        <tr>
          <td><strong>Element</strong></td>
          <td><strong>Empty</strong></td>
          <td><strong>Tag omission</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong><code>pre</code></strong></td>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <td><strong><code>img</code></strong></td>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>

良い例:

    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Empty</th>
          <th>Tag omission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>pre</code></th>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <th><code>img</code></th>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>

表で最初の行や列をヘッダーとして使い、各行や列にどのようなデータが表示されるのかを示したいこともあるでしょう。しかしその場合も、悪い例で挙げたように`td`要素で`strong`要素を使ったり、クラス名を振ったりして、見た目だけを変更している場合がほとんどです。

ヘッダー・セルには`th`要素が使えます。振る舞いとしては特に何もせず、ブラウザーによりスタイルが割り当てられているくらいしか`td`要素との違いはありません。しかしながら`th`要素を使うことでしかヘッダー・セルであることは示せません。

最初の行をすべてヘッダー・セルとして扱う場合は`thead`要素を使うだけでも十分です。ただし良い例で挙げたように最初の*列*もヘッダーにしたい場合は`th`要素を使うしかありません。また、`thead`要素にはヘッダー以外のセルが（ごくまれに）含まれるため、そういった点でも`thead`要素だけでなく`td`と`th`要素を使い分けるべきでしょう。そうすることでありとあらゆるツールがヘッダー・セルと普通のセルを明確に区別できるようになります。

また`th`要素固有の属性もいくつかあります。`scope`や`abbr`属性がそれです。例えば`scope`属性を利用すると、そのヘッダー・セルの支配下にあるセルを明示でき、複雑にセルが組み合わさっている表でもその構造をうまく表現できます。今のところこれらの属性をブラウザーなどが解釈して何かしらの機能を提供しはしませんが、今後は可能性があるかもしれません。将来的な展望という点でも、ヘッダー・セルでは`th`要素を使うべきでしょう。
