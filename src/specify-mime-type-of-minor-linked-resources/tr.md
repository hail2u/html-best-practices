# Bağlantılı kaynakların MIME türünü belirtin

Bu, uygulamanın bu kaynağı nasıl kullandığı hakkında bir ipucudur.

Yanlış:

```
<link href="/pdf" rel="alternate">
<link href="/feed" rel="alternate">
<link href="/css/screen.css" rel="stylesheet">
```

Doğru:

```
<link href="/pdf" rel="alternate" type="application/pdf">
<link href="/feed" rel="alternate" type="application/rss+xml">
<link href="/css/screen.css" rel="stylesheet">
```
