# Eski karakter kodlama formatını kullanmayın

HTTP başlıkları bir sunucu tarafından belirtilmelidir, basit olmalıdır.

Yanlış:

```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

Doğru:

```
<meta charset="UTF-8">
```
