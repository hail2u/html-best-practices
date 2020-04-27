# 필요하다면 `rel`, `hreflang`, `type` 속성을 사용해라

이러한 힌트는 어플리케이션에서 연결된 리소스를 제어하는 데 사용한다.

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
