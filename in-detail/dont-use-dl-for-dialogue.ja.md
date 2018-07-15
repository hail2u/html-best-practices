# `dl`を会話のために使わない

HTMLでは`dl`要素は関連付けリストに限定されています。

悪い例:

    <dl>
      <dt>Costello</dt>
      <dd>Look, you gotta first baseman?</dd>
      <dt>Abbott</dt>
      <dd>Certainly.</dd>
      <dt>Costello</dt>
      <dd>Who’s playing first?</dd>
      <dt>Abbott</dt>
      <dd>That’s right.</dd>
      <dt>Costello becomes exasperated.</dd>
      <dt>Costello</dt>
      <dd>When you pay off the first baseman every month, who gets the money?</dd>
      <dt>Abbott</dt>
      <dd>Every dollar of it.</dd>
    </dl>

良い例:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


## 解説

HTML 4.01では、`dl`要素の利用例として会話をマークアップできる、と明言されていました。しかし現在のHTMLでは、会話のマークアップには不適切であると明言されました。元々あまり会話のマークアップに利用されていませんでしたが、現在のHTML仕様で加わった破壊的な変更のひとつであることや、`dl`要素が「名前と値」の組み合わせに限定されるという意識を強くするためにも覚えておくべきでしょう。

会話のマークアップについては適当なマークアップ方法は明示されていません。仕様では[いくつかの案][1]が提示されており、良い例で挙げたものはそのひとつです。会話がどういう文脈で扱われているか、に依存して適切な要素は変化するので、慎重にマークアップしましょう。


[1]: https://html.spec.whatwg.org/multipage/semantics-other.html#conversations
