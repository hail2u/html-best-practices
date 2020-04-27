# 문자 레퍼런스를 가능한 한 사용하지 말아라

만약 HTML문서를 UTF-8로 작성하고 있다면,
대부분의 문자(이모티콘 포함)를 직접적으로 쓸 수 있다.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
