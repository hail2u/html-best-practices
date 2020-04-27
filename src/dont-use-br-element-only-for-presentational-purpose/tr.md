# `br` öğesini yalnızca sunum amacıyla kullanmayın

`br` elemanı satır kesmek için değil, içerikteki satır kesmeler içindir.

Yanlış:

```
<p><label>Rule name: <input name="rule-name" type="text"></label><br>
<label>Rule description:<br>
<textarea name="rule-description"></textarea></label></p>
```

Doğru:

```
<p><label>Rule name: <input name="rule-name" type="text"></label></p>
<p><label>Rule description:<br>
<textarea name="rule-description"></textarea></label></p>
```
