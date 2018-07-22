# `map`要素の中はマークアップする

その中身はスクリーン・リーダーへ提供されます。

悪い例:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

良い例:

    <map name="toc">
      <p>
        <a href="#general">General</a>
        <area alt="General" coords="0, 0, 40, 40" href="#General"> |
        <a href="#the_root_element">The root element</a>
        <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
        <a href="#sections">Sections</a>
        <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
      </p>
    </map>

クリッカブル・マップを作成する`map`要素の中身は、`area`要素さえあれば機能します。そのため、悪い例で挙げたように書いてもブラウザーでは問題なく利用できます。必要なのは`area`要素の`coords`と`href`属性だけ、というわけです。

しかし、ブラウザーでないツールでは話が変わってきます。例えばスクリーン・リーダーは、その仕組み上インタラクティブにクリッカブル・マップを扱うことは難しいでしょう。そのため`map`要素の中身を普通のコンテンツとして読み上げます。良い例で挙げたように`p`要素で済む場合もありますが、`ol`要素を使ったり、場合によっては`table`要素を使うかもしれません。いずれにせよきちんとマークアップしないと、適切に読み上げられないでしょう。
