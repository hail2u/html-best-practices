# Não utilzie elementos `script` injetados por script

Utilizar o atributo `async` é o melhor tanto para simplicidade como para performance.

Ruim:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Bom:

    <script async defer src="https://example.com/widget.js"></script>
