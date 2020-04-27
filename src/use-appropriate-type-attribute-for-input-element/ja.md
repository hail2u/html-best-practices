# `input`要素では適切な`type`属性を使う

適切な`type`属性により、ブラウザーは`input`要素へちょっとした機能を与えてくれます。

悪い例:

    <label>Search keyword: <input name="q" type="text"></label>

良い例:

    <label>Search keyword: <input name="q" type="search"></label>
