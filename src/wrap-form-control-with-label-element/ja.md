# フォームコントロールは`label`要素で括る

`label`要素はフォーム要素へフォーカスを当てるのに役立ちます。

悪い例:

    <p>Query: <input name="q" type="text"></p>

良い例:

    <p><label>Query: <input name="q" type="text"></label></p>
