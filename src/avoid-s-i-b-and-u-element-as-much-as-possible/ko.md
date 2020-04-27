# `s`, `i`, `b`, `u` 요소를 가능한 한 없애라

이 요소의 시맨틱은 사람과 아주 다르다.

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>
