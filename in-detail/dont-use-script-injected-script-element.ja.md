# `script`要素を動的に生成するテクニックを使わない

明快さとパフォーマンスの両面で`async`属性が最良です。

悪い例:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

良い例:

    <script async defer src="https://example.com/widget.js"></script>

Google Analyticsを始め、多くのサードパーティー製JavaScriptアプリケーションは、悪い例で挙げたようなコードを使ってウェブページに導入します。これは動的に`script`要素を挿入することによって、どのようなブラウザーでもHTML文書の読み込みをブロックすることなく読み込めるからです。これはパフォーマンスにおいてメリットがある、とされてきました。

しかし、この[適切に使えばパフォーマンスにおいて大きなメリットがあるという勘違い][1]は否定されました。そこそこ古いブラウザーにもプリロード・スキャナーの仕組みがあり、それによる読み込みの効率化の方が、DOMを構築した後に発火される動的な生成による効率化を上回るわけです。

しかも今のブラウザーは`async`属性という非同期に`src`属性で指定されたJavaScriptファイルを読み込む手段をサポートしています。JavaScriptの実行順について以外は上位互換と考えて良く、使わない理由はありません。


[1]: https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/
