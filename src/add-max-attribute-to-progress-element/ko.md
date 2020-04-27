# `progress` 요소에 `max` 속성을 추가해라

`max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>
