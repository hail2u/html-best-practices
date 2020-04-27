# `script`要素の中をコメントアウトしない

この儀式は古いブラウザーのためです。

悪い例:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

同じく悪い例:

    <script>
    <!--
      ...
    // -->
    </script>

良い例:

    <script>
      ...
    </script>
