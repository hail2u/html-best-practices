# 폼 컨트롤을 `label` 요소로 감싸라

`label` 요소가 폼 요소에 포커스를 주는 데 도움을 준다

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>
