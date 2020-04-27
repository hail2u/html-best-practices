# 가능한 경우 `for` 속성을 생략해라

`label` 요소는 몇가지 폼 요소를 감쌀 수 있다.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>
