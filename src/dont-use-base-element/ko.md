# `base` 요소를 쓰지 마라

절대 경로나 URL은 개발자와 유저 모두에게 안전하다

Bad:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Good:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>
