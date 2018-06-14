# JavaScriptでは`type`属性を省略する

HTMLでは、`script`要素における`type`属性の初期値は`text/javascript`です。

悪い例:

    <script type="text/javascript">
      ...
    </script>

良い例:

    <script>
      ...
    </script>


## 解説

「[CSSの`type`属性は省略する][1]」を参照してください。


[1]: omit-type-attribute-for-css.ja.md
