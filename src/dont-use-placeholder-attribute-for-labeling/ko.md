# 레이블하기 위해 `placeholder` 속성을 쓰지 마라

`label` 요소가 레이블을 위한 요소고, `placeholder` 속성은 짧은 힌트를 위한 속성이다.

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
