# マイナーな参照先リソースのMIMEタイプを指定する

アプリケーションがそのリソースをどう取り扱うべきかのヒントになります。

悪い例:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

良い例:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

`a`や`link`要素では`type`属性でリソースのMIMEタイプを指定できます。この指定によりユーザーが直接恩恵を受けることはほとんどありません。しかし、例えばブラウザーが指定したMIMEタイプをサポートしていない場合、外部リソースを無理に表示しようとせずローカルにファイルとしてダウンロードさせるだけに留めるという安全な挙動をしてもらえます。

また、この仕組みを応用した具体的な実装として[RSS Autodiscovery][1]があります。RSS AutodiscoveryはウェブページのRSSバージョンのURLを機械的に探せるようにする仕組みの仕様です。この仕様では、別バージョンであることを示す`rel=alternate`に加えて、RSSファイルの公式MIMEタイプである`application/rss+xml`を指定することで、RSSバージョンのURLであることを明示できます。こうすることでブラウザーからフィード・リーダーへの登録を自動化できるわけです。この仕様は少し拡張されHTML仕様にも取り込まれています。

逆に（アイコン形式の）ファビコンやCSSファイルなどの既知で扱いが安定しているものへは指定する必要はありません。


[1]: http://www.rssboard.org/rss-autodiscovery
