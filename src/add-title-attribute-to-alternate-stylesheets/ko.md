# 대체 스타일시트에 `title` 속성을 넣어라

사람이 읽을 수 있는 레이블은 스타일시트를 선택하는 데 도움을 줄거다.

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">
