# Adicione o elemento `body`

Ao não utilizar o elemento `body` para envolver o conteúdo da página pode causar comportamentos não esperados nos navegadores.

Ruim:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Bom:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>
