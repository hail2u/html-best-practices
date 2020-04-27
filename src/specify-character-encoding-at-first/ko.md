# 문자 인코딩을 처음으로 선언해라

스펙상 문자 인코딩이 문서의 첫 1024 바이트 내에 지정되어있어야 한다.

Bad:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>
