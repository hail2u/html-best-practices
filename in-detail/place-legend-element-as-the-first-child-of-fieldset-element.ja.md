# `legend`要素は`fieldset`要素の最初に置く

仕様がそう要求しています。

悪い例:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

良い例:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## 解説

長いフォームを分割する時、関連するフォーム・コントロールを`fieldset`要素を使ってまとめると、一括した操作を行えるようになります。その際、`legend`要素を使いそのグループにキャプションをつけることが可能です。`figure`と`figcaption`要素の関係に似ていますが、`legend`要素は`fieldset`要素の最初にしか書くことができません。

    <fieldset>
      <legend>ユーザー情報</legend>
      <input name="usnm" type="text">
      <input name="pswd" type="password">
      ...
    </fieldset>

このことは仕様で明示されています。実際にはどこに書いても正常に表示されるようですが、通常`fieldset`要素でグループ化された枠線で括られ、`legend`要素がある場合はその枠線の左上に重なる形で表示されます。キャプションの水平方向の位置は記述方向に依存しますが、まず間違いなく最初に表示されます。仕様で決められているからというだけでなく、HTMLソースと表示の対応性も考慮すると、`legend`要素は最初に書くべきです。
