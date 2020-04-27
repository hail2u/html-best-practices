# `placeholder`属性をラベル付けに使わない

`label`要素がラベルのためにあり、`placeholder`属性は短いヒントのためにあります。

悪い例:

    <input name="email" placeholder="Email" type="text">

良い例:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
