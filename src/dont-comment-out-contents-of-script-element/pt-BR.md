# Não comente os conteúdos do elemento `script`

Apenas nos navegadores antigos era necessário.

Ruim:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Ruim também:

    <script>
    <!--
      ...
    // -->
    </script>

Bom:

    <script>
      ...
    </script>
