# Especifique a codificação dos caracteres logo no início

A especificação pede para que a codificação dos caracteres seja identificada nos primeiros 1024 bytes do documento.

Ruim:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Bom:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>
