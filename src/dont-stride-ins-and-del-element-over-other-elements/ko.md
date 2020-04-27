# `ins`와 `del` 요소로 다른 요소를 뛰어넘지 마라

요소는 다른 요소를 넘을 수 없다.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>
