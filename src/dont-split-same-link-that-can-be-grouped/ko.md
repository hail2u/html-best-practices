# 그룹 가능한 동일 링크를 분리하지 마라

`a` 요소는 대부분의 요소를 감쌀 수 있다. (`a` 요소 자신이나 컨트롤같은 인터렉티브 요소는 제외한다)

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>
