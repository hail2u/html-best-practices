# Adicione o atributo `max` ao elemento de `progress`

Com o atributo `max`, o atributo `value` pode ser preenchido em um formato mais acessível.

Ruim:

    <progress value="0.5"> 50%</progress>

Bom:

    <progress max="100" value="50"> 50%</progress>
