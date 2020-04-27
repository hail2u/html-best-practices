# Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin

`datetime` özelliği bulunmadığında, `time` öğesinin içeriğinin biçimi kısıtlıdır.

Yanlış:

```
<time>Dec 19, 2014</time>
```

Doğru:

```
<time datetime="2014-12-19">Dec 19, 2014</time>
```
