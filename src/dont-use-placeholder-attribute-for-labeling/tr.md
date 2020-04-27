# Etiketleme için `placeholder` özelliğini kullanmayın

`label` öğesi bir etiket içindir, `placeholder` özelliği kısa bir ipucu içindir.

Yanlış:

```
<input name="email" placeholder="Email" type="text">
```

Doğru:

```
<label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
```
