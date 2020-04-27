# `iframe`要素の中は空にする

その内容にはいくつかの制限があります。空にすれば安全です。

悪い例:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

良い例:

    <iframe src="/ads/default.html"></iframe>
