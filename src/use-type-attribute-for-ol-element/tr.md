# `ol` etiketi için `type` özelliğini kullanın

Bazen yakınlardaki içerikler referans verilir. İşaretçiyi değiştirirseniz
`type` özelliği ile kullanırsanız güvende olacaksınız.

Yanlış:

```
<head>
  <style>
    .toc {
      list-style-type: upper-roman;
    }
  </style>
</head>
<body>
  <ol class="toc">
    <li>General</li>
    <li>The root Element</li>
    <li>Sections</li>
    ...
  </ol>
</body>
```

Doğru:

```
<body>
  <ol type="I">
    <li>General</li>
    <li>The root Element</li>
    <li>Sections</li>
    ...
  </ol>
</body>
```
