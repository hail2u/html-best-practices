# `script` etiketinin içeriğini yorumla kapatmayın

Bu ritüel eski tarayıcılar içindir.

Yanlış:

    <script>/*<![CDATA[*/  .../*]]>*/</script>

Bu da kötü:

    <script><!--  ...// --></script>

Doğru:

    <script>  ...</script>
