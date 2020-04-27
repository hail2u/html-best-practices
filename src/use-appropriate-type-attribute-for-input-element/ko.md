# `input` 요소에 적절한 `type` 속성을 사용해라

적절한 `type`을 사용하면, 브라우저에서 `input` 요소에 작은 기능을 제공한다.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>
