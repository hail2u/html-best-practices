# 스크립트가 삽입된 `script` 요소를 쓰지 마라

`async` 속성은 성능면으로나 단순성면으로나 최고다.

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="https://example.com/widget.js"></script>
