# 見た目だけのために`br`要素を使わない

`br`要素は改行のためにあるのではなく、コンテンツに必要な改行のためにあります。

悪い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

良い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

改行をするために`br`要素があるわけではなく、改行をマークアップするためにこの要素を使います。詩に必要な改行や、手紙の住所表記で必要になる改行などに利用するものです。

悪い例で挙げたフォーム要素の間にある最初の`br`要素は、*テキスト入力ボックスの後ろで改行したい*から見た目上の都合で加えたものでしょう。対して2つめの`br`要素は、*複数行に渡る入力エリアをインライン入力と区別するために改行が必要*だから加えたものかもしれません。前者は根拠に欠けますが、後者はコンテンツに必要な改行とみなせます。

`br`要素はコンテンツに存在すべきである改行を表現するものだ、ということで、それ以上でもそれ以下でもありません。単純な見た目上の改行の制御にはCSSを利用すると良いでしょう。
