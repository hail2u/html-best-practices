# `progress` etiketine `max` özelliği ekleyin

`max` özelliği ile, `value` özelliği kolay bir biçimde yazılabilir.

Yanlış:

```
<progress value="0.5"> 50%</progress>
```

Doğru:

```
<progress max="100" value="50"> 50%</progress>
```
