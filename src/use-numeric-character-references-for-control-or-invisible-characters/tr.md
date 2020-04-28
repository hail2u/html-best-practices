# Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.

Bu karakterler başka bir karakter için kolayca karıştırılabilir. Ayrıca spec bu karakterler için okunabilir bir isim tanımlamayı da garanti etmez.

Yanlış:

    <p>This book can read in 1 hour.</p>

<p>This book can read in 1 hour.</p>

    <p>This book can read in 1&#xA0;hour.</p>
