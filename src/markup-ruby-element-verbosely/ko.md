# `ruby` 요소를 자세히 마크업해라

`ruby` 요소를 모든 모던 브라우저에서 완전하게 지원하는 게 아니다.

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>
