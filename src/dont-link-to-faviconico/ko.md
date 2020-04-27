# `favicon.ico` 링크하지 마라

대부분의 브라우저에서 `/favicon.ico`를 자동으로 비동기방식으로 가져온다.

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->
