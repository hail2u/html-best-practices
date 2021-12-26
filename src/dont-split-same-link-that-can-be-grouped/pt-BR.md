# Não divida o mesmo link que pode estar agrupado

O elemento `a` pode envolver quase todos elementos (exceto elementos interativos como controles de formulário e um elemento `a` igual ele)

Ruim:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Bom:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>
