# 마이너한 링크 리소스에 MIME 타입을 정의해라

어플리케이션에서 리소스를 어떻게 처리하는 가에 대한 힌트다.

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">
