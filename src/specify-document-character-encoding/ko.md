# 문서의 문자 인코딩을 정의해라

아직 UTF-8이 모든 브라우저에서 기본이 아니다.

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>
