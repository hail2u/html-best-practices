# `meter` 요소에 `min`, `max` 속성을 추가해라

`min`, `max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>
