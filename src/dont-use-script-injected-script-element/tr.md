# Komut dosyası eklenmiş `script` öğesini kullanmayın

`async` özelliği hem sadelik hem de performans için en iyisidir.

Yanlış:

```
<script>
  var script = document.createElement("script";
  script.async = true;
  script.src = "//example.com/widget.js";
  document.getElementsByTagName("head"[0].appendChild(script);
</script>
```

Doğru:

```
<script async defer src="https://example.com/widget.js"></script>
```
