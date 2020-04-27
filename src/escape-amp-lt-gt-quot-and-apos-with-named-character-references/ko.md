# `&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환해라

이 문자들은 버그가 없는 HTML 문서를 만들기위해 반드시 변환해두어야한다.

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>
