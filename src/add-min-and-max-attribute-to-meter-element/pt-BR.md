# Adicione os atributos `min` e `max` ao elemento `meter`

With `min` and `max` attribute, the `value` attribute can be write in an easy
format.

Com os atributos `min` e `max`, o `value` pode ser preenchido em um formato mais acessível.

Ruim:

    <meter value="0.5"> 512GB usado (1024GB total)</meter>

Bom:

    <meter min="0" max="1024" value="512"> 512GB usado (1024GB total)</meter>
