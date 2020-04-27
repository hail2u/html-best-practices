# 外部リソースにはプロトコル相対URLを使わない

プロトコルを指定すると、外部リソースを確実かつ安全に読み込めます。

悪い例:

    <script src="//example.com/js/library.js">

良い例:

    <script src="https://example.com/js/library.js">
