# `iframe` 요소를 비워둬라

콘텐츠에 몇가지 제한사항이 있다. 비워두면 항상 안전하다.

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>
