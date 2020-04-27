# `input` 요소에 `pattern` 속성이 있는 경우 `title` 속성을 추가해라

입력한 텍스트가 `pattern` 속성과 매치하지 않는 경우,
`title` 속성의 값이 힌트가 될거다.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
