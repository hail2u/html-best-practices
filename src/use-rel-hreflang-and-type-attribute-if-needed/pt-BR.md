# Use os atributos `rel`, `hreflang`, e `type` quando necessário

Esses atributos auxiliam o navegador a como lidar com o conteúdo indicado pelo link.

Ruim:

    <a href="/ja/pdf">Japanese PDF version</a>

Bom:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
