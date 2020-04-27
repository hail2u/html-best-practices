# 레거시 인코딩 포맷을 쓰지 마라

HTTP 헤더는 서버에서 정의해야하며, 아주 쉽다.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">
