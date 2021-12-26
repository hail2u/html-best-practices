# Elemento `iframe` vazio

Se tiver alguma restrição no conteúdo, é sempre bom manter o `iframe` vazio.

Ruim:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Bom:

    <iframe src="/ads/default.html"></iframe>
