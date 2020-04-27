# `data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 마라

태그 문자열이 아주 복잡할 수 있다.
이 간단한 규칙은 태그 문자열을 더 읽기 쉽게한다.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
