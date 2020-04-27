# 리소스를 다운하고자 할 때 `download` 속성을 사용하라

브라우저에서 연결된 리소스를 스토리지에서 다운받으려 할거다.

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>
