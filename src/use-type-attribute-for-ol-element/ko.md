# `ol` 요소에 `type` 속성을 써라

때로는 주변 콘텐츠에 의해 마커가 참조된다. 만약 `type`  속성으로 마커를 변경한다면,
참조하는 것이 안전하다.

Bad:

    <head>
      <style>
        .toc {
          list-style-type: upper-roman;
        }
      </style>
    </head>
    <body>
      <ol class="toc">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

Good:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>
