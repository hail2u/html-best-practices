# 可能ならば`for`属性は省略する

`label`要素はいくつかのフォーム要素を含められます。

悪い例:

    <label for="q">Query: </label><input id="q" name="q" type="text">

良い例:

    <label>Query: <input name="q" type="text"></label>


## 解説

「[フォームコントロールは`label`要素で括る][1]」を参照してください。


[1]: wrap-form-control-with-label-element.ja.md
