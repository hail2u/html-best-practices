# `hgroup`要素のことは忘れる

あまり使われていません。

悪い例:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

良い例:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


## 解説

仕様で挙げられているような例がピッタリくるようなコンテンツなら利用を考えても良いでしょう。しかし、現実としてなかなかそういう機会はありません。また、歴史的な事情から`hgroup`要素はほとんど使われていません。

この状況が容易に変化するとも思えず、あえて使うこともないでしょう。
