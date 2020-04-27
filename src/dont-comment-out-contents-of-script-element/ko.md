# `script` 요소의 내용을 주석처리하지 마라

이는 오랜 브라우저를 위한 것이다.

Bad:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Also bad:

    <script>
    <!--
      ...
    // -->
    </script>

Good:

    <script>
      ...
    </script>
