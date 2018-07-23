# CSSの`type`属性は省略する

HTMLでは、`style`要素における`type`属性の初期値は`text/css`です。

悪い例:

    <style type="text/css">
      ...
    </style>

良い例:

    <style>
      ...
    </style>

HTMLでは、CSSやJavaScriptを使って、HTMLだけでは実現できない多彩な表現や機能を提供できます。その場合、`style`や`script`要素を利用してCSSやJavaScriptをHTMLに追加することになります。

これまでは、悪い例で挙げたように`type`属性を使ってスタイルとスクリプトに使う言語を*必ず*明示する必要がありました。HTML 4.01では`type`属性が必須とされており、かつデフォルトの値が決まっていなかったからです。対して現在のHTMLでは`style`と`script`要素の内容は、それぞれデフォルトでCSSとJavaScriptとして解釈されることが明文化されました。

CSSとJavaScriptを使うならば良い例で挙げたように`type`属性を省略できます。しかし、もしかすると将来はより高度なスタイル言語やスクリプト言語を利用できるかもしれません。その場合には`type`属性を使って適切なMIMEタイプを指定してあげましょう。
