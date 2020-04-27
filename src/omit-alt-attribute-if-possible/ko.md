# 가능한 경우 `alt` 속성을 생략해라

때때로 어떤 텍스트가 alt 속성에 적합한 지 모를 수 있다.
(역주) spec에서 `alt` 속성은 특수한 케이스가 아니라면 필수 속성이므로 빈값으로 넣어주세요.

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)
