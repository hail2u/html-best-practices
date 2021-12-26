# Use o atributo `datetime`  em formatos não reconhecidos por máquina no elemento `time`

Quando o atributo `datetime` não é informado, o formato do conteúdo elemento `time` é restrito.

Ruim:

    <time>Dez 19, 2014</time>

Bom:

    <time datetime="2014-12-19">Dez 19, 2014</time>
