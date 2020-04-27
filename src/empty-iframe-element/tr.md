# Boş `iframe` öğesi kullanın

İçeriği için bazı kısıtlamalar vardır. Boş olması her zaman güvenlidir.

Yanlış:

```
<iframe src="/ads/default.html">
  <p>If your browser support inline frame, ads are displayed here.</p>
</iframe>
```

Doğru:

```
<iframe src="/ads/default.html"></iframe>
```
