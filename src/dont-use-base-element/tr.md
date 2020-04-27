# `base` elemanı kullanmayın

Mutlak bir yol veya URL, hem geliştiriciler hem de kullanıcılar için daha güvenlidir.

Yanlış:

```
<head>
  ...
  <base href="/blog/">
  <link href="hello-world" rel="canonical">
  ...
</head>
```

Doğru:

```
<head>
  ...
  <link href="/blog/hello-world" rel="canonical">
  ...
</head>
```
