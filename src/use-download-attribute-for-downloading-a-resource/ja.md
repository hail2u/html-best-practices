# リソースをダウンロードさせる場合は`download`属性を使う

こうすることでダウンロードするリンク先のリソースを確実にローカルに保存させられます。

悪い例:

    <a href="/downloads/offline.zip">offline version</a>

良い例:

    <a download href="/downloads/offline.zip">offline version</a>
