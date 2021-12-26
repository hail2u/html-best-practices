# Não crie um link para o `favicon.ico`

Quase todos os navegadores modernos fazem a requisição para `/favicon.ico` automaticamente e assíncrono.

Ruim:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Bom:

    <!-- Coloque `favicon.ico` na raiz do diretório. -->
