# Gruplandırılabilen aynı bağlantıyı bölmeyin

`a` etiketi hemen hemen tüm etiketleri sarabilir (form gibi etkileşimli elemanlar hariç)
kontroller ve `a` elemanın kendisi).

Yanlış:

```
<h1><a href="https://whatwg.org/">WHATWG</a></h1>

<p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>
```

Doğru:

```
<a href="https://whatwg.org/">
  <h1>WHATWG</h1>

  <p>A community maintaining and evolving HTML since 2004.</p>
</a>
```
