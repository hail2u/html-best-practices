# `ol`要素では`type`属性を使う

リスト・マーカーは周辺から参照される場合があります。`type`属性を使ってリスト・マーカーを変更すれば、安全に参照できるでしょう。

悪い例:

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

良い例:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>
