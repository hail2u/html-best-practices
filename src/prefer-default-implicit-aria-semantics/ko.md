# 기본 암시적 ARIA 시맨틱을 선호하라

일부 요소에서는 HTML 문서에서 ARIA `role`을 가지므로 지정하지 마라.

Bad:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Good:

    <nav>
      ...
    </nav>

    <hr>
