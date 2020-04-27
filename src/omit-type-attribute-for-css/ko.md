# CSS를 위한 `type` 속성을 생략해라

HTML에서, `style` 요소의 기본 `type` 속성 값은 `text/css`다.

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>
