# `pre` 요소에서 새 줄로 시작하지 말아라

첫번째 줄바꿈은 브라우저에서 무시하지만, 두번째부터는 렌더링된다.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>
