# 프레젠테이션 목적으로만 `br` 요소를 쓰지 마라

`br` 요소는 줄바꿈을 위해서가 아니라, 콘텐츠의 라인 구분을 위해 사용한다.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>
