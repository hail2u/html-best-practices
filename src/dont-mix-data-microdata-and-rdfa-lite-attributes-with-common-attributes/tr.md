# `data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın

Bir etiket dizesi çok karmaşık olabilir. Bu basit kural, böyle bir etiket dizesini okumak için yardımcı olur.

Yanlış:

```
<img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">
```

Doğru:

```
<img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
```
