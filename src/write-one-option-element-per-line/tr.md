# Her satıra bir `option` etiketi yazın

Uzun satırların taranması zordur.

Yanlış:

```
<datalist id="toc">  <option label="General"><option label="The root element"><option label="Sections"></datalist>
```

Doğru:

```
<datalist id="toc">  <option label="General">  <option label="The root element">  <option label="Sections"></datalist>
```
