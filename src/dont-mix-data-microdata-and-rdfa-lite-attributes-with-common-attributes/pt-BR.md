# Não misture atributos com prefixo `data-*`, Microdata e RDFa Lite com atributos comuns

O texto de uma tag pode ser muito complicado. Essa regra simples ajuda na leitura de tal tag.

Ruim:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Bom:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
