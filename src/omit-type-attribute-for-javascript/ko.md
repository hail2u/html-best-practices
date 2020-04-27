# 자바스크립트를 위한 `type` 속성을 생략해라

HTML에서, `script` 요소의 기본 `type` 속성값은 `text/javascript`다.

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>
