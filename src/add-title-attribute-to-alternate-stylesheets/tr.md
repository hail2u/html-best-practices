# Alternatif stil sayfalarına `title` ekleyin

İnsan tarafından okunabilen bir değer, insanların uygun stil sayfasını seçmelerine yardımcı olur.

Yanlış:

```
<link href="/css/screen.css" rel="stylesheet">
<link href="/css/high-contrast.css" rel="alternate stylesheet">
```

Doğru:

```
<link href="/css/screen.css" rel="stylesheet">
<link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">
```
