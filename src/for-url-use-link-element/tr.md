# URL için `link` kullanın

Bir `href` değeri URL olarak çözülebilir.

Yanlış:

```
<section itemscope itemtype="http://schema.org/BlogPosting">
  <meta content="https://example.com/blog/hello" itemprop="url">
  ...
</section>
```

Doğru:

```
<section itemscope itemtype="http://schema.org/BlogPosting">
  <link href="/blog/hello" itemprop="url">
  ...
</section>
```
