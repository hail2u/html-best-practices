# Adicione o atributo `title` ao elemento input `input` quando existir o atributo `pattern`

Se um input não estiver de acordo com a `pattern`  indicada, o conteúdo do atributo `title` será apresentado como uma dica.

Ruim:

    <input name="codigo-de-seguranca" pattern="[0-9]{3}" type="text">

Bom:

    <input name="codigo-de-seguranca" pattern="[0-9]{3}" title="O Código de segurança é um número de três dígitos." type="text">
