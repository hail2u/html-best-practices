# Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın

Bu ipuçları bağlantılı kaynakların nasıl işleneceğini belirterek uygulamalara yardımcı olur.

Yanlış:

```
<a href="/ja/pdf">Japanese PDF version</a>
```

Doğru:

```
<a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
```
