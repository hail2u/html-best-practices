# 기계가 읽을 수 없는 `time` 요소에 `datetime` 속성을 추가해라

`datetime` 속성이 없을 때, `time` 요소의 포맷은 제한된다.

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>
