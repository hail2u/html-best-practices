# `pattern`属性を持つ`input`要素には`title`属性を追加する

もし入力したテキストが`pattern`属性にマッチしない場合、`title`属性の値がヒントとして表示されます。

悪い例:

    <input name="security-code" pattern="[0-9]{3}" type="text">

良い例:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
