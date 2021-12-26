# Não utilize o elemento `base`

Um caminho absoluto ou URL é mais seguro, tanto para os desenvolvedores como para os usuários.

Ruim:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Bom:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>
