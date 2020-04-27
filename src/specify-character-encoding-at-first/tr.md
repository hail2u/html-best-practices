# İlk önce karakter kodlamasını belirtin

Spec, karakter kodlamasının dökümanın ilk 1024 bayt içinde belirtilmesini gerektirir.

Yanlış:

```
<head>
  <meta content="width=device-width" name="viewport">
  <meta charset="UTF-8">
  ...
</head>
```

Doğru:

```
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width" name="viewport">
  ...
</head>
```
