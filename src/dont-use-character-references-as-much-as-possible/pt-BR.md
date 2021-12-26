# Não utilizar referências de caracteres sempre que possível

Se você estiver utilizando um documento HTML com UTF-8, quase todos caracteres (inclusive Emoji) podem ser escritos diretamente.

Ruim:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Bom:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
