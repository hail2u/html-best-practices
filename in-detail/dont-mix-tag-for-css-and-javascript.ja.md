# CSSとJavaScriptのタグを混ぜない

`script`要素はDOMの構築をブロックするかもしれません。

悪い例:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

同じく良い例:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## 解説

CSSファイルを参照する`link`要素やJavaScriptファイルを参照する`script`要素の記述順は特に決められていません。規模の大きなウェブサイトでは時に無作為に並べて書かれていることが多いようです。またCSSフレームワークやJavaScriptライブラリーを利用している場合も、悪い例で挙げたように分散してしまいます。

古いブラウザーではそのように書くとJavaScriptファイルの読み込みと実行で逐一ブロックされてしまうため、CSSファイルやJavaScriptファイルが並列ダウンロードされず、ウェブページの読み込みに時間がかかっていました。そのため最初の良い例で挙げたようにCSSファイルを先に読ませるように書くべきとされていました。しかし現行のブラウザーには[Speculative Parsing][1]という仕組みが実装されており、バラバラに書いてもきちんと並列ダウンロードされます。こういった点ではそれぞれまとめるこのような書き方の意味は薄くなりました。

それでもCSSファイルをできうる限り早く読み込ませることで、そのパースが早く終わり、結果としてウェブページのレンダリング開始が早くなります。ブラウザーでは並行ダウンロードできる数に制限があることから、なるべくCSSファイルを優先して読み込ませるようにまとめて先に書くのはまだ有効なテクニックだと言えるでしょう。

またHTTP/2が普及したこれからは並行ダウンロードにほぼ制限がなくなるため、細かいファイルをそのままそれぞれ読み込ませたほうが効率が良くなるかもしれません。そういう場合でもゴチャゴチャに混ざったCSSファイルとJavaScriptファイルへの参照を管理するよりも、それぞれがまとまった形で書かれている方が管理しやすいはずです。

JavaScriptファイルを`async`属性付きで非同期に読み込む場合や、Web Componentsのことを考えると、これから少し変わっていきそうな部分です。それでも今のところはまとめて書いた方が無難でしょう。

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Optimizing_your_pages_for_speculative_parsing
