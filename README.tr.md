Çeviriler: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Türkçe (tr)](README.tr.md)

# HTML'de Örnek Yöntemler

Bakım yapılabilir ve ölçeklenebilir HTML belgeleri yazmak için

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Genel](#genel)
  - [DOCTYPE ile başla](#doctype-ile-ba%C5%9Fla)
  - [Eskimiş yada geçersiz DOCTYPE kullanmayın](#eskimi%C5%9F-yada-ge%C3%A7ersiz-doctype-kullanmay%C4%B1n)
  - [XML etiketi kullanmayın](#xml-etiketi-kullanmay%C4%B1n)
  - [Karakter referanslarını mümkün olduğunca kullanmayın](#karakter-referanslar%C4%B1n%C4%B1-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-kullanmay%C4%B1n)
  - [`&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmaktan kaçının](#-----ve--karakter-referanslar%C4%B1n%C4%B1-oldu%C4%9Fu-gibi-kullanmaktan-ka%C3%A7%C4%B1n%C4%B1n)
  - [Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.](#kontrol-veya-g%C3%B6r%C3%BCnmeyen-karakterler-i%C3%A7in-say%C4%B1sal-karakter-referanslar%C4%B1n%C4%B1-kullan%C4%B1n)
  - [Yorum içeriğinin etrafına boşluk karakteri yerleştirin](#yorum-i%C3%A7eri%C4%9Finin-etraf%C4%B1na-bo%C5%9Fluk-karakteri-yerle%C5%9Ftirin)
  - [Kapanış etiketini unutmayın](#kapan%C4%B1%C5%9F-etiketini-unutmay%C4%B1n)
  - [Boş eleman formatını karıştırmayın](#bo%C5%9F-eleman-format%C4%B1n%C4%B1-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
  - [Etiketlerin ve özelliklerin değerlerinin etrafına boşluk karakteri koymayın](#etiketlerin-ve-%C3%B6zelliklerin-de%C4%9Ferlerinin-etraf%C4%B1na-bo%C5%9Fluk-karakteri-koymay%C4%B1n)
  - [Büyük küçük karakterleri aynı anda kullanmayın](#b%C3%BCy%C3%BCk-k%C3%BC%C3%A7%C3%BCk-karakterleri-ayn%C4%B1-anda-kullanmay%C4%B1n)
  - [Tırnak işaretlerini karıştırmayın](#t%C4%B1rnak-i%C5%9Faretlerini-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
  - [Özellikleri iki veya daha fazla boşluk ile ayırmayın](#%C3%B6zellikleri-iki-veya-daha-fazla-bo%C5%9Fluk-ile-ay%C4%B1rmay%C4%B1n)
  - [Boolean özellik değerini yazmayın](#boolean-%C3%B6zellik-de%C4%9Ferini-yazmay%C4%B1n)
  - [Ad alanlarını kullanmayın](#ad-alanlar%C4%B1n%C4%B1-kullanmay%C4%B1n)
  - [XML özelliklerini kullanmayın](#xml-%C3%B6zelliklerini-kullanmay%C4%B1n)
  - [`data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın](#data--microdata-ve-rdfa-lite-%C3%B6zelliklerini-ile-ortak-%C3%B6zellikleri-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
  - [Varsayılan örtülü ARIA gramerini tercih edin](#varsay%C4%B1lan-%C3%B6rt%C3%BCl%C3%BC-aria-gramerini-tercih-edin)
- [Kök elemanı](#k%C3%B6k-eleman%C4%B1)
  - [`lang` özelliği ekleyin](#lang-%C3%B6zelli%C4%9Fi-ekleyin)
  - [`lang` değerini mümkün olduğunca kısa tutun](#lang-de%C4%9Ferini-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-k%C4%B1sa-tutun)
  - [Mümkün olduğunca `data-*` kullanmayın](#m%C3%BCmk%C3%BCn-oldu%C4%9Funca-data--kullanmay%C4%B1n)
- [Metadata'yı belgeleyin](#metadatay%C4%B1-belgeleyin)
  - [`title` elemanı ekleyin](#title-eleman%C4%B1-ekleyin)
  - [`base` elemanı kullanmayın](#base-eleman%C4%B1-kullanmay%C4%B1n)
  - [Bağlantılı kaynakların MIME türünü belirtin](#ba%C4%9Flant%C4%B1l%C4%B1-kaynaklar%C4%B1n-mime-t%C3%BCr%C3%BCn%C3%BC-belirtin)
  - [`favicon.ico`'ya link vermeyin](#faviconicoya-link-vermeyin)
  - [`apple-touch-icon` ekleyin](#apple-touch-icon-ekleyin)
  - [Alternatif stil sayfalarına `title` ekleyin](#alternatif-stil-sayfalar%C4%B1na-title-ekleyin)
  - [URL için `link` kullanın](#url-i%C3%A7in-link-kullan%C4%B1n)
  - [Belge karakter kodunu belirtin](#belge-karakter-kodunu-belirtin)
  - [Eski karakter kodlama formatını kullanmayın](#eski-karakter-kodlama-format%C4%B1n%C4%B1-kullanmay%C4%B1n)
  - [İlk önce karakter kodlamasını belirtin](#i%CC%87lk-%C3%B6nce-karakter-kodlamas%C4%B1n%C4%B1-belirtin)
  - [UTF-8'i kullanın](#utf-8i-kullan%C4%B1n)
  - [CSS için `type` kullanmayın](#css-i%C3%A7in-type-kullanmay%C4%B1n)
  - [`style` etiketinin içeriğini yorum içine almayın](#style-etiketinin-i%C3%A7eri%C4%9Fini-yorum-i%C3%A7ine-almay%C4%B1n)
  - [CSS ve JavaScript etiketlerini karıştırmayın](#css-ve-javascript-etiketlerini-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
- [Bölümler](#b%C3%B6l%C3%BCmler)
  - [`body` etiketi ekleyin](#body-etiketi-ekleyin)
  - [`hgroup` etiketini unutun](#hgroup-etiketini-unutun)
  - [`address` etiketini yalnızca iletişim bilgileri için kullanın](#address-etiketini-yaln%C4%B1zca-ileti%C5%9Fim-bilgileri-i%C3%A7in-kullan%C4%B1n)
- [İçeriği gruplama](#i%CC%87%C3%A7eri%C4%9Fi-gruplama)
  - [`pre` elemandaki satır başı ile başlamayın](#pre-elemandaki-sat%C4%B1r-ba%C5%9F%C4%B1-ile-ba%C5%9Flamay%C4%B1n)
  - [`blockquote` içinde uygun etiket kullanın](#blockquote-i%C3%A7inde-uygun-etiket-kullan%C4%B1n)
  - [Özniteliği doğrudan `blockquote` öğesinin içine dahil etme](#%C3%B6zniteli%C4%9Fi-do%C4%9Frudan-blockquote-%C3%B6%C4%9Fesinin-i%C3%A7ine-dahil-etme)
  - [Satır başına bir liste öğesi yaz](#sat%C4%B1r-ba%C5%9F%C4%B1na-bir-liste-%C3%B6%C4%9Fesi-yaz)
  - [`ol` etiketi için `type` özelliğini kullanın](#ol-etiketi-i%C3%A7in-type-%C3%B6zelli%C4%9Fini-kullan%C4%B1n)
  - [Diyalog için `dl` kullanmayın](#diyalog-i%C3%A7in-dl-kullanmay%C4%B1n)
  - [`figcaption` etiketini, `figure` etiketinin ilk veya son çocuğu olarak yerleştirin](#figcaption-etiketini-figure-etiketinin-ilk-veya-son-%C3%A7ocu%C4%9Fu-olarak-yerle%C5%9Ftirin)
  - [`main` etiketini kullanın](#main-etiketini-kullan%C4%B1n)
  - [`div` etiketini mümkün olduğu kadar kullanmayın](#div-etiketini-m%C3%BCmk%C3%BCn-oldu%C4%9Fu-kadar-kullanmay%C4%B1n)
- [Metin düzeyinde anlambilim](#metin-d%C3%BCzeyinde-anlambilim)
  - [Gruplandırılabilen aynı bağlantıyı bölmeyin](#grupland%C4%B1r%C4%B1labilen-ayn%C4%B1-ba%C4%9Flant%C4%B1y%C4%B1-b%C3%B6lmeyin)
  - [İndirilebilir kaynağı belirtmek için `download` özelliğini kullanın](#i%CC%87ndirilebilir-kayna%C4%9F%C4%B1-belirtmek-i%C3%A7in-download-%C3%B6zelli%C4%9Fini-kullan%C4%B1n)
  - [Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın](#gerekirse-rel--hreflang-ve-type-%C3%B6zelliklerini-kullan%C4%B1n)
  - [Bağlantı metinlerini amacına uygun yapın](#ba%C4%9Flant%C4%B1-metinlerini-amac%C4%B1na-uygun-yap%C4%B1n)
  - [Uyarı vermek için `em` etiketi kullanmayın](#uyar%C4%B1-vermek-i%C3%A7in-em-etiketi-kullanmay%C4%B1n)
  - [`s` , `i` , `b` ve `u` etiketlerinden mümkün olduğunca kaçının](#s--i--b-ve-u-etiketlerinden-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-ka%C3%A7%C4%B1n%C4%B1n)
  - [`q` öğesine tırnak koymayın](#q-%C3%B6%C4%9Fesine-t%C4%B1rnak-koymay%C4%B1n)
  - [`abbr` etiketine `title` özelliğini ekleyin](#abbr-etiketine-title-%C3%B6zelli%C4%9Fini-ekleyin)
  - [`ruby` etiketini detaylandırın](#ruby-etiketini-detayland%C4%B1r%C4%B1n)
  - [Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin](#makine-taraf%C4%B1ndan-okunamayacak-time-etiketine-datetime-%C3%B6zelli%C4%9Fi-ekleyin)
  - [`language-` öneki ile kod dilini `class` etiketi le belirtin](#language--%C3%B6neki-ile-kod-dilini-class-etiketi-le-belirtin)
  - [`kbd` etiketini mümkün olduğu kadar basit tutun](#kbd-etiketini-m%C3%BCmk%C3%BCn-oldu%C4%9Fu-kadar-basit-tutun)
  - [`span` etiketinden mümkün olduğunca kaçının](#span-etiketinden-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-ka%C3%A7%C4%B1n%C4%B1n)
  - [`br` etiketinden sonra satır sonu yapın](#br-etiketinden-sonra-sat%C4%B1r-sonu-yap%C4%B1n)
  - [`br` öğesini yalnızca sunum amacıyla kullanmayın](#br-%C3%B6%C4%9Fesini-yaln%C4%B1zca-sunum-amac%C4%B1yla-kullanmay%C4%B1n)
- [Düzenlemeler](#d%C3%BCzenlemeler)
  - [`ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın](#ins-ve-del-etiketlerini-di%C4%9Fer-%C3%B6%C4%9Felerin-aras%C4%B1nda-kullanmay%C4%B1n)
- [Gömülü içerik](#g%C3%B6m%C3%BCl%C3%BC-i%C3%A7erik)
  - [`picture` elemanı için yedek `img` elemanı kullanın](#picture-eleman%C4%B1-i%C3%A7in-yedek-img-eleman%C4%B1-kullan%C4%B1n)
  - [Gerekirse `img` öğesine `alt` özelliği ekleyin](#gerekirse-img-%C3%B6%C4%9Fesine-alt-%C3%B6zelli%C4%9Fi-ekleyin)
  - [Mümkünse `alt` özelliğini boş olarak kullanın](#m%C3%BCmk%C3%BCnse-alt-%C3%B6zelli%C4%9Fini-bo%C5%9F-olarak-kullan%C4%B1n)
  - [Mümkünse `alt` özelliğini atlayın](#m%C3%BCmk%C3%BCnse-alt-%C3%B6zelli%C4%9Fini-atlay%C4%B1n)
  - [Boş `iframe` öğesi kullanın](#bo%C5%9F-iframe-%C3%B6%C4%9Fesi-kullan%C4%B1n)
  - [`map` etiketinin içeriğini işaretleyin](#map-etiketinin-i%C3%A7eri%C4%9Fini-i%C5%9Faretleyin)
  - [`audio` veya `video` öğesi için yedek içerik sağlayın](#audio-veya-video-%C3%B6%C4%9Fesi-i%C3%A7in-yedek-i%C3%A7erik-sa%C4%9Flay%C4%B1n)
- [Tablo verileri](#tablo-verileri)
  - [Her satıra bir hücre yazın](#her-sat%C4%B1ra-bir-h%C3%BCcre-yaz%C4%B1n)
  - [Başlık hücresi için `th` etiketini kullanın](#ba%C5%9Fl%C4%B1k-h%C3%BCcresi-i%C3%A7in-th-etiketini-kullan%C4%B1n)
- [Formlar](#formlar)
  - [`label` etiketini ile form kontrolünü sağlayın](#label-etiketini-ile-form-kontrol%C3%BCn%C3%BC-sa%C4%9Flay%C4%B1n)
  - [Mümkünse `for` özelliğini kullanmayın](#m%C3%BCmk%C3%BCnse-for-%C3%B6zelli%C4%9Fini-kullanmay%C4%B1n)
  - [`input` etiketi için uygun `type` özelliğini kullanın](#input-etiketi-i%C3%A7in-uygun-type-%C3%B6zelli%C4%9Fini-kullan%C4%B1n)
  - [`input type="submit"` elemanına `value` özelliği ekleyin](#input-typesubmit-eleman%C4%B1na-value-%C3%B6zelli%C4%9Fi-ekleyin)
  - [`pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin](#pattern-%C3%B6zelli%C4%9Fi-oldu%C4%9Funda-input-etiketine-title-%C3%B6zelli%C4%9Fi-ekleyin)
  - [Etiketleme için `placeholder` özelliğini kullanmayın](#etiketleme-i%C3%A7in-placeholder-%C3%B6zelli%C4%9Fini-kullanmay%C4%B1n)
  - [Her satıra bir `option` etiketi yazın](#her-sat%C4%B1ra-bir-option-etiketi-yaz%C4%B1n)
  - [`progress` etiketine `max` özelliği ekleyin](#progress-etiketine-max-%C3%B6zelli%C4%9Fi-ekleyin)
  - [`meter` etiketine `min` ve `max` özelliği ekleyin](#meter-etiketine-min-ve-max-%C3%B6zelli%C4%9Fi-ekleyin)
  - [`legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun](#legend-etiketini-fieldset-etiketinin-ilk-%C3%A7ocu%C4%9Fu-olarak-eleman%C4%B1-olarak-olu%C5%9Fturun)
- [Script ekleme](#script-ekleme)
  - [JavaScript için `type` özelliğini kullanmayın](#javascript-i%C3%A7in-type-%C3%B6zelli%C4%9Fini-kullanmay%C4%B1n)
  - [`script` etiketinin içeriğini yorumla kapatmayın](#script-etiketinin-i%C3%A7eri%C4%9Fini-yorumla-kapatmay%C4%B1n)
  - [Komut dosyası eklenmiş `script` öğesini kullanmayın](#komut-dosyas%C4%B1-eklenmi%C5%9F-script-%C3%B6%C4%9Fesini-kullanmay%C4%B1n)
- [Diğer](#di%C4%9Fer)
  - [Tutarlı girintiler kullanın](#tutarl%C4%B1-girintiler-kullan%C4%B1n)
  - [Dahili bağlantılar için mutlak yol kullanın](#dahili-ba%C4%9Flant%C4%B1lar-i%C3%A7in-mutlak-yol-kullan%C4%B1n)
  - [Harici kaynaklar için protokole bağlı URL kullanmayın](#harici-kaynaklar-i%C3%A7in-protokole-ba%C4%9Fl%C4%B1-url-kullanmay%C4%B1n)
- [Katkıda bulunanlar](#katk%C4%B1da-bulunanlar)
- [Çeviri Yapanlar](#%C3%A7eviri-yapanlar)
- [Lisans](#lisans)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Genel

### DOCTYPE ile başla

DOCTYPE standart modu etkinleştirmek için gereklidir.

Yanlış:

```
<html>
  ...
</html>
```

Doğru:

```
<!DOCTYPE html>
<html>
  ...
</html>
```

### Eskimiş yada geçersiz DOCTYPE kullanmayın

DOCTYPE artık DTD için değil, basit olsun.

Yanlış:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
```

Doğru:

```
<!DOCTYPE html>
```

### XML etiketi kullanmayın

XHTML yazmak istediğinize emin misiniz?

Yanlış:

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE html>
```

Doğru:

```
<!DOCTYPE html>
```

### Karakter referanslarını mümkün olduğunca kullanmayın

UTF-8 ile bir HTML belgesi yazarsanız, hemen hemen tüm karakterler (Emoji dahil) doğrudan yazılabilir.

Yanlış:

```
<p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>
```

Doğru:

```
<p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
```

### `&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmaktan kaçının

Bu karakterlerden hatasız bir HTML belgesi için her zaman kaçınılmalıdır.

Yanlış:

```
<h1>The "&" character</h1>
```

Doğru:

```
<h1>The &quot;&amp;&quot; character</h1>
```

### Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.

Bu karakterler başka bir karakter için kolayca karıştırılabilir. Ayrıca spec bu karakterler için okunabilir bir isim tanımlamayı da garanti etmez.

Yanlış:

```
<p>This book can read in 1 hour.</p>
```

<p>This book can read in 1 hour.</p>

```
<p>This book can read in 1&#xA0;hour.</p>
```

### Yorum içeriğinin etrafına boşluk karakteri yerleştirin

Bazı karakterler yorum açıldıktan hemen sonra veya yorum kapatmadan önce kullanılamaz.

Yanlış:

```
<!--This section is non-normative-->
```

Doğru:

```
<!-- This section is non-normative -->
```

### Kapanış etiketini unutmayın

Kapanış etiketini atlamak için bir kural yok.

Yanlış:

```
<html>
  <body>
    ...
```

Doğru:

```
<html>
  <body>
    ...
  </body>
</html>
```

### Boş eleman formatını karıştırmayın

Tutarlılık, okunabilirliğin anahtarıdır.

Yanlış:

```
<img alt="HTML Best Practices" src="/img/logo.png">
<hr />
```

Doğru:

```
<img alt="HTML Best Practices" src="/img/logo.png">
<hr>
```

### Etiketlerin ve özelliklerin değerlerinin etrafına boşluk karakteri koymayın

Bunu yapmak için hiçbir sebep yoktur.

Yanlış:

```
<h1 class=" title " >HTML Best Practices</h1>
```

Doğru:

```
<h1 class="title">HTML Best Practices</h1>
```

### Büyük küçük karakterleri aynı anda kullanmayın

Aynı zamanda bir tutarlılık da oluşturur.

Yanlış:

```
<a HREF="#general">General</A>
```

Doğru:

```
<a href="#general">General</a>
```

Bu da doğru:

```
<A HREF="#general">General</A>
```

### Tırnak işaretlerini karıştırmayın

Yukarıdaki ile aynı sebepten ötürü.

Yanlış:

```
<img alt="HTML Best Practices" src='/img/logo.jpg'>
```

Doğru:

```
<img alt="HTML Best Practices" src="/img/logo.jpg">
```

### Özellikleri iki veya daha fazla boşluk ile ayırmayın

Garip biçimlendirme kuralınız insanları şaşırtır.

Yanlış:

```
<input   name="q"  type="search">
```

Doğru:

```
<input name="q" type="search">
```

### Boolean özellik değerini yazmayın

Yazması kolay, değil mi?

Yanlış:

```
<audio autoplay="autoplay" src="/audio/theme.mp3">
```

Doğru:

```
<audio autoplay src="/audio/theme.mp3">
```

### Ad alanlarını kullanmayın

SVG ve MathML bir HTML belgesinde doğrudan kullanılabilir.

Yanlış:

```
<svg xmlns="http://www.w3.org/2000/svg">
  ...
</svg>
```

Doğru:

```
<svg>
  ...
</svg>
```

### XML özelliklerini kullanmayın

Sadece HTML belgesi yazıyoruz.

Yanlış:

```
<span lang="ja" xml:lang="ja">...</span>
```

Doğru:

```
<span lang="ja">...</span>
```

###  `data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın

Bir etiket dizesi çok karmaşık olabilir. Bu basit kural, böyle bir etiket dizesini okumak için yardımcı olur.

Yanlış:

```
<img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">
```

Doğru:

```
<img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
```

### Varsayılan örtülü ARIA gramerini tercih edin

Bazı öğelerin bir HTML belgesinde örtük olarak bir ARIA `role` değeri vardır, belirtmenize gerek yoktur.

Yanlış:

```
<nav role="navigation">
  ...
</nav>

<hr role="separator">
```

Doğru:

```
<nav>
  ...
</nav>

<hr>
```

## Kök elemanı

### `lang` özelliği ekleyin

`lang` özelliği HTML belgesinin çeviriminin yapılmasına yardımcı olacaktır.

Yanlış:

```
<html>
```

Doğru:

```
<html lang="en-US">
```

### `lang` değerini mümkün olduğunca kısa tutun

Japonca yalnızca Japonya'da kullanılır. Yani ülke kodu gerekli değildir.

Yanlış:

```
<html lang="ja-JP">
```

Doğru:

```
<html lang="ja">
```

### Mümkün olduğunca `data-*` kullanmayın

Uygun bir özellik de tarayıcılar tarafından doğru bir şekilde ele alınabilir.

Yanlış:

```
<span data-language="french">chemises</span>
...
<strong data-type="warning">Do not wash!</strong>
```

Doğru:

```
<span title="French"><span lang="fr-FR">chemises</span></span>
...
<strong class="warning">Do not wash!</strong>
```

## Metadata'yı belgeleyin

### `title` elemanı ekleyin

`title` değeri, yalnızca tarayıcı tarafından değil, çeşitli uygulamalar tarafından da kullanılır.

Yanlış:

```
<head>
  <meta charset="UTF-8">
</head>
```

Doğru:

```
<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>
```

### `base` elemanı kullanmayın

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

### Bağlantılı kaynakların MIME türünü belirtin

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

### `favicon.ico`'ya link vermeyin

Hemen hemen tüm tarayıcılar `/favicon.ico`'yu otomatik ve asenkron olarak alır.

Yanlış:

```
<link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">
```

Doğru:

```
<!-- Place `favicon.ico` in the root directory. -->
```

### `apple-touch-icon` ekleyin

Dokunma simgesi için varsayılan istek yolu değiştirildi.

Yanlış:

```
<!-- Hey Apple! Please download `/apple-touch-icon.png`! -->
```

Doğru:

```
<link href="/apple-touch-icon.png" rel="apple-touch-icon">
```

### Alternatif stil sayfalarına `title` ekleyin

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

### URL için `link` kullanın

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

### Belge karakter kodunu belirtin

UTF-8 henüz tüm tarayıcılarda varsayılan değil.

Yanlış:

```
<head>
  <title>HTML Best Practices</title>
</head>
```

Doğru:

```
<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>
```

### Eski karakter kodlama formatını kullanmayın

HTTP başlıkları bir sunucu tarafından belirtilmelidir, basit olmalıdır.

Yanlış:

```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

Doğru:

```
<meta charset="UTF-8">
```

### İlk önce karakter kodlamasını belirtin

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

### UTF-8'i kullanın

UTF-8 ile Emoji'yi kullanmakta özgürsünüz.

Yanlış:

```
<meta charset="Shift_JIS">
```

Doğru:

```
<meta charset="UTF-8">
```

### CSS için `type` kullanmayın

HTML'de, `style` etiketinin `type` özelliğinin  ön tanımlı değeri `text/css`'tir.

Yanlış:

```
<style type="text/css">
  ...
</style>
```

Doğru:

```
<style>
  ...
</style>
```

### `style` etiketinin içeriğini yorum içine almayın

Bu ritüel eski tarayıcı içindir.

Yanlış:

```
<style>
<!--
  ...
  -->
</style>
```

Doğru:

```
<style>
  ...
</style>
```

### CSS ve JavaScript etiketlerini karıştırmayın

Bazen `script` elemanı DOM inşasını engeller.

Yanlış:

```
<script src="/js/jquery.min.js"></script>
<link href="/css/screen.css" rel="stylesheet">
<script src="/js/main.js"></script>
```

Doğru:

```
<link href="/css/screen.css" rel="stylesheet">
<script src="/js/jquery.min.js"></script>
<script src="/js/main.js"></script>
```

Bu da doğru:

```
<script src="/js/jquery.min.js"></script>
<script src="/js/main.js"></script>
<link href="/css/screen.css" rel="stylesheet">
```

## Bölümler

### `body` etiketi ekleyin

Bazen `body` etiketi beklenmedik bir pozisyonda bir tarayıcı tarafından tamamlanmaktadır.

Yanlış:

```
<html>
  <head>
    ...
  </head>
  ...
</html>
```

Doğru:

```
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### `hgroup` etiketini unutun

Bu etiket çok fazla kullanılmıyor.

Yanlış:

```
<hgroup>
  <h1>HTML Best Practices</h1>
  <h2>For writing maintainable and scalable HTML documents.</h2>
</hgroup>
```

Doğru:

```
<h1>HTML Best Practices</h1>
<p>For writing maintainable and scalable HTML documents.</p>
```

### `address` etiketini yalnızca iletişim bilgileri için kullanın

`address` sadece e-posta adresi, sosyal ağ hesabı, sokak adresi, telefon numarası veya iletişim kurabileceğiniz bir şey içindir.

Yanlış:

```
<address>No rights reserved.</address>
```

Doğru:

```
<address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>
```

## İçeriği gruplama

### `pre` elemandaki satır başı ile başlamayın

Tarayıcılarda ilk yeni satır yok sayılır, ancak ikinci ve sonraki satırlar oluşturulur.

Yanlış:

```
<pre>
&lt;!DOCTYPE html&gt;
</pre>
```

Doğru:

```
<pre>&lt;!DOCTYPE html&gt;
</pre>
```

### `blockquote` içinde uygun etiket kullanın

`blockquote` bir alıntıdır, yani içeriği bir karakter kümesi değildir.

Yanlış:

```
<blockquote>For writing maintainable and scalable HTML documents.</blockquote>
```

Doğru:

```
<blockquote>
  <p>For writing maintainable and scalable HTML documents.</p>
</blockquote>
```

### Özniteliği doğrudan `blockquote` öğesinin içine dahil etme

`blockquote` içeriği bir alıntıdır.

Yanlış:

```
<blockquote>
  <p>For writing maintainable and scalable HTML documents.</p>

  <p>— HTML Best Practices</p>
</blockquote>
```

Doğru:

```
<blockquote>
  <p>For writing maintainable and scalable HTML documents.</p>
</blockquote>

<p>— HTML Best Practices</p>
```

Bu da doğru:

```
<figure>
  <blockquote>
    <p>For writing maintainable and scalable HTML documents.</p>
  </blockquote>

  <figcaption>— HTML Best Practices</figcaption>
</figure>
```

### Satır başına bir liste öğesi yaz

Uzuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuun bir satırı okuması çooooooooooooooooooooooooooooooooooooooooooooooooook
zordur

Yanlış:

```
<ul>
  <li>General</li><li>The root Element</li><li>Sections</li>...
</ul>
```

Doğru:

```
<ul>
  <li>General</li>
  <li>The root Element</li>
  <li>Sections</li>
  ...
</ul>
```

### `ol` etiketi için `type` özelliğini kullanın

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

### Diyalog için `dl` kullanmayın

`dl` etiketi, HTML'deki bir ilişkilendirme listesi ile sınırlandırılmıştır.

Yanlış:

```
<dl>
  <dt>Costello</dt>
  <dd>Look, you gotta first baseman?</dd>
  <dt>Abbott</dt>
  <dd>Certainly.</dd>
  <dt>Costello</dt>
  <dd>Who’s playing first?</dd>
  <dt>Abbott</dt>
  <dd>That’s right.</dd>
  <dt>Costello becomes exasperated.</dd>
  <dt>Costello</dt>
  <dd>When you pay off the first baseman every month, who gets the money?</dd>
  <dt>Abbott</dt>
  <dd>Every dollar of it.</dd>
</dl>
```

Doğru:

```
<p>Costello: Look, you gotta first baseman?</p>
<p>Abbott: Certainly.</p>
<p>Costello: Who’s playing first?</p>
<p>Abbott: That’s right.</p>
<p>Costello becomes exasperated.</p>
<p>Costello: When you pay off the first baseman every month, who gets the money?</p>
<p>Abbott: Every dollar of it.</p>
```

### `figcaption` etiketini, `figure` etiketinin ilk veya son çocuğu olarak yerleştirin

Spec, `figure` etiketinin ortasındaki `figcaption` etiketine izin vermez.

Yanlış:

```
<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
</figure>
```

Doğru:

```
<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
</figure>
```

### `main` etiketini kullanın

`main` içerikleri kapsamak için kullanılabilir.

Yanlış:

```
<div id="content">
  ...
</div>
```

Doğru:

```
<main>
  ...
</main>
```

### `div` etiketini mümkün olduğu kadar kullanmayın

`div` son çaredir

Yanlış:

```
<div class="chapter">
  ...
</div>
```

Doğru:

```
<section>
  ...
</section>
```

## Metin düzeyinde anlambilim

### Gruplandırılabilen aynı bağlantıyı bölmeyin

`a` etiketi hemen hemen tüm etiketleri sarabilir (form gibi etkileşimli elemanlar hariç)
kontroller ve `a` elemanın kendisi).

Yanlış:

```
<h1><a href="https://whatwg.org/">WHATWG</a></h1>

<p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>
```

Doğru:

```
<a href="https://whatwg.org/">
  <h1>WHATWG</h1>

  <p>A community maintaining and evolving HTML since 2004.</p>
</a>
```

### İndirilebilir kaynağı belirtmek için `download` özelliğini kullanın

Tarayıcıları bağlı kaynakları depoya indirmeye zorlar.

Yanlış:

```
<a href="/downloads/offline.zip">offline version</a>
```

Doğru:

```
<a download href="/downloads/offline.zip">offline version</a>
```

### Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın

Bu ipuçları bağlantılı kaynakların nasıl işleneceğini belirterek uygulamalara yardımcı olur.

Yanlış:

```
<a href="/ja/pdf">Japanese PDF version</a>
```

Doğru:

```
<a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
```

### Bağlantı metinlerini amacına uygun yapın

Link metni, linklenen kaynağın etiketi olmalıdır.

Yanlış:

```
<p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>
```

Doğru:

```
<p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>
```

### Uyarı vermek için `em` etiketi kullanmayın

Bu ciddiyettir. Yani, `strong` eleman daha uygundur.

Yanlış:

```
<em>Caution!</em>
```

Doğru:

```
<strong>Caution!</strong>
```

### `s` , `i` , `b` ve `u` etiketlerinden mümkün olduğunca kaçının

Bu etiketlerin anlambilimi insanlar için çok zordur.

Yanlış:

```
<i class="icon-search"></i>
```

Doğru:

```
<span class="icon-search" aria-hidden="true"></span>
```

### `q` öğesine tırnak koymayın

Tırnaklar tarayıcı tarafından sağlanır.

Yanlış:

```
<q>“For writing maintainable and scalable HTML documents”</q>
```

Doğru:

```
<q>For writing maintainable and scalable HTML documents</q>
```

Bu da doğru:

```
“For writing maintainable and scalable HTML documents”
```

### `abbr` etiketine `title` özelliğini ekleyin

Açıklamasını temsil etmenin başka bir yolu yoktur.

Yanlış:

```
<abbr>HBP</abbr>
```

Doğru:

```
<abbr title="HTML Best Practices">HBP</abbr>
```

### `ruby` etiketini detaylandırın

Modern tarayıcılarda `ruby` etiketi desteği henğz tamamlanmadı.

Yanlış:

```
<ruby>HTML<rt>えいちてぃーえむえる</ruby>
```

Doğru:

```
<ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>
```

### Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin

`datetime` özelliği bulunmadığında, `time` öğesinin içeriğinin biçimi kısıtlıdır.

Yanlış:

```
<time>Dec 19, 2014</time>
```

Doğru:

```
<time datetime="2014-12-19">Dec 19, 2014</time>
```

### `language-` öneki ile kod dilini `class` etiketi le belirtin

Bu kesin bir yol değil, ancak spec bundan bahseder.

Yanlış:

```
<code>&lt;!DOCTYPE html&gt;</code>
```

Doğru:

```
<code class="language-html">&lt;!DOCTYPE html&gt;</code>
```

### `kbd` etiketini mümkün olduğu kadar basit tutun

`kbd` etiketini iç içe kullanmak insanlar için çok zor.

Yanlış:

```
<kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>
```

Doğru:

```
<kbd>Ctrl+F5</kbd>
```

### `span` etiketinden mümkün olduğunca kaçının

`span` element son çaredir.

Yanlış:

```
HTML <span class="best">Best</span> Practices
```

Doğru:

```
HTML <em>Best</em> Practices
```

### `br` etiketinden sonra satır sonu yapın

`br` etiketi kullanıldığında satır sonu gereklidir.

Yanlış:

```
<p>HTML<br>Best<br>Practices</p>
```

Doğru:

```
<p>HTML<br>
Best<br>
Practices</p>
```

### `br` öğesini yalnızca sunum amacıyla kullanmayın

`br` elemanı satır kesmek için değil, içerikteki satır kesmeler içindir.

Yanlış:

```
<p><label>Rule name: <input name="rule-name" type="text"></label><br>
<label>Rule description:<br>
<textarea name="rule-description"></textarea></label></p>
```

Doğru:

```
<p><label>Rule name: <input name="rule-name" type="text"></label></p>
<p><label>Rule description:<br>
<textarea name="rule-description"></textarea></label></p>
```

## Düzenlemeler

### `ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın

Etiketler diğer etidektlere taşamaz.

Yanlış:

```
<p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

<p>Don’t trust!</p></del>
```

Doğru:

```
<p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

<del><p>Don’t trust!</p></del>
```

## Gömülü içerik

### `picture` elemanı için yedek `img` elemanı kullanın

`picture` etiketinin desteği henüz iyi değil.

Yanlış:

```
<picture>
  <source srcset="/img/logo.webp" type="image/webp">
  <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
  <source srcset="/img/logo.jp2" type="image/jp2">
  <source srcset="/img/logo.jpg" type="image/jpg">
</picture>
```

Doğru:

```
<picture>
  <source srcset="/img/logo.webp" type="image/webp">
  <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
  <source srcset="/img/logo.jp2" type="image/jp2">
  <img src="/img/logo.jpg">
</picture>
```

### Gerekirse `img` öğesine `alt` özelliği ekleyin

`alt` niteliği, görüntüleri işleyemeyen veya görüntü yüklemesi engelli olanlara yardımcı olur.

Yanlış:

```
<img src="/img/logo.png">
```

Doğru:

```
<img alt="HTML Best Practices" src="/img/logo.png">
```

### Mümkünse `alt` özelliğini boş olarak kullanın

Resim tamamlayıcı ise, yakınlarda bir yerde eşdeğer içerik vardır.

Yanlış:

```
<img alt="Question mark icon" src="/img/icon/help.png"> Help
```

Doğru:

```
<img alt="" src="/img/icon/help.png"> Help
```

### Mümkünse `alt` özelliğini atlayın

Bazen hangi metnin `alt` özellik için uygun olduğunu bilemezsiniz.

Yanlış:

```
<img alt="CAPTCHA" src="captcha.cgi?id=82174">
```

Doğru:

```
<img src="captcha.cgi?id=82174" title="CAPTCHA">
(If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)
```

### Boş `iframe` öğesi kullanın

İçeriği için bazı kısıtlamalar vardır. Boş olması her zaman güvenlidir.

Yanlış:

```
<iframe src="/ads/default.html">
  <p>If your browser support inline frame, ads are displayed here.</p>
</iframe>
```

Doğru:

```
<iframe src="/ads/default.html"></iframe>
```

### `map` etiketinin içeriğini işaretleyin

Bu içerik bir ekran okuyucu sunar.

Yanlış:

```
<map name="toc">
  <a href="#general">General</a>
  <area alt="General" coords="0, 0, 40, 40" href="#General"> |
  <a href="#the_root_element">The root element</a>
  <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
  <a href="#sections">Sections</a>
  <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
</map>
```

Doğru:

```
<map name="toc">
  <p>
    <a href="#general">General</a>
    <area alt="General" coords="0, 0, 40, 40" href="#General"> |
    <a href="#the_root_element">The root element</a>
    <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
    <a href="#sections">Sections</a>
    <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
  </p>
</map>
```

### `audio` veya `video` öğesi için yedek içerik sağlayın

HTML’de yeni tanıtılan öğeler için yedek içerik gereklidir.

Yanlış:

```
<video>
  <source src="/mov/theme.mp4" type="video/mp4">
  <source src="/mov/theme.ogv" type="video/ogg">
  ...
</video>
```

Doğru:

```
<video>
  <source src="/mov/theme.mp4" type="video/mp4">
  <source src="/mov/theme.ogv" type="video/ogg">
  ...
  <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
</video>
```

## Tablo verileri

### Her satıra bir hücre yazın

Uzun satırların taranması zordur.

Yanlış:

```
<tr>
  <td>General</td><td>The root Element</td><td>Sections</td>
</tr>
```

Doğru:

```
<tr>
  <td>General</td>
  <td>The root Element</td>
  <td>Sections</td>
</tr>
```

### Başlık hücresi için `th` etiketini kullanın

Bundan kaçınmak için hiçbir sebep yoktur.

Yanlış:

```
<table>
  <thead>
    <tr>
      <td><strong>Element</strong></td>
      <td><strong>Empty</strong></td>
      <td><strong>Tag omission</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><code>pre</code></strong></td>
      <td>No</td>
      <td>Neither tag is omissible</td>
    </tr>
    <tr>
      <td><strong><code>img</code></strong></td>
      <td>Yes</td>
      <td>No end tag</td>
    </tr>
  </tbody>
</table>
```

Doğru:

```
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Empty</th>
      <th>Tag omission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>pre</code></th>
      <td>No</td>
      <td>Neither tag is omissible</td>
    </tr>
    <tr>
      <th><code>img</code></th>
      <td>Yes</td>
      <td>No end tag</td>
    </tr>
  </tbody>
</table>
```

## Formlar

### `label` etiketini ile form kontrolünü sağlayın

`label` etiketi form öğesinin odaklanmasına yardımcı olur.

Yanlış:

```
<p>Query: <input name="q" type="text"></p>
```

Doğru:

```
<p><label>Query: <input name="q" type="text"></label></p>
```

### Mümkünse `for` özelliğini kullanmayın

`label` etiketi bazı form etiketlerini içerebilir.

Yanlış:

```
<label for="q">Query: </label><input id="q" name="q" type="text">
```

Doğru:

```
<label>Query: <input name="q" type="text"></label>
```

### `input` etiketi için uygun `type` özelliğini kullanın

Uygun `type` özelliği ile, tarayıcılar `input` elemanına küçük özellikler kazandırır.

Yanlış:

```
<label>Search keyword: <input name="q" type="text"></label>
```

Doğru:

```
<label>Search keyword: <input name="q" type="search"></label>
```

### `input type="submit"` elemanına `value` özelliği ekleyin

Gönderme düğmesi için varsayılan etiket tarayıcılarda ve dillerde standardize edilmemiştir.

Yanlış:

```
<input type="submit">
```

Doğru:

```
<input type="submit" value="Search">
```

### `pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin

Girilen metni `pattern` niteliğiyle eşleşmiyorsa, `title` özelliğinin değeri ipucu olarak görüntülenecektir.

Yanlış:

```
<input name="security-code" pattern="[0-9] type="text">
```

Doğru:
```
<input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
```

### Etiketleme için `placeholder` özelliğini kullanmayın

`label` öğesi bir etiket içindir, `placeholder` özelliği kısa bir ipucu içindir.

Yanlış:

```
<input name="email" placeholder="Email" type="text">
```

Doğru:

```
<label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
```

### Her satıra bir `option` etiketi yazın

Uzun satırların taranması zordur.

Yanlış:

```
<datalist id="toc">  <option label="General"><option label="The root element"><option label="Sections"></datalist>
```

Doğru:

```
<datalist id="toc">  <option label="General">  <option label="The root element">  <option label="Sections"></datalist>
```

### `progress` etiketine `max` özelliği ekleyin

`max` özelliği ile, `value` özelliği kolay bir biçimde yazılabilir.

Yanlış:

```
<progress value="0.5"> 50%</progress>
```

Doğru:

```
<progress max="100" value="50"> 50%</progress>
```

### `meter` etiketine `min` ve `max` özelliği ekleyin

`min` ve `max` özelliği ile `value` özelliği kolay bir şekilde yazılabilir.

Yanlış:

```
<meter value="0.5"> 512GB used (1024GB total</meter>
```

Doğru:
```
<meter min="0" max="1024" value="512"> 512GB used (1024GB total</meter>
```

### `legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun

Spec bunu gerektirir.

Yanlış:

```
<fieldset>
  <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
    ...  
  <legend>About "General"</legend>
</fieldset>
```

Doğru:

```
<fieldset>
  <legend>About "General"</legend>
    <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
</fieldset>
```

## Script ekleme

### JavaScript için `type` özelliğini kullanmayın

HTML’de,`type` özelliğinin `script` etiketi için varsayılan değeri `text/javascript`tir.

Yanlış:

```
<script type="text/javascript">  ...</script>
```

Doğru:

```
<script>  ...</script>
```

### `script` etiketinin içeriğini yorumla kapatmayın

Bu ritüel eski tarayıcılar içindir.

Yanlış:

```
<script>/*<![CDATA[*/  .../*]]>*/</script>
```

Bu da kötü:

```
<script><!--  ...// --></script>
```

Doğru:

```
<script>  ...</script>
```

### Komut dosyası eklenmiş `script` öğesini kullanmayın

`async` özelliği hem sadelik hem de performans için en iyisidir.

Yanlış:

```
<script>
  var script = document.createElement("script";
  script.async = true;
  script.src = "//example.com/widget.js";
  document.getElementsByTagName("head"[0].appendChild(script);
</script>
```

Doğru:

```
<script async defer src="https://example.com/widget.js"></script>
```

## Diğer

### Tutarlı girintiler kullanın

Girinti okunabilirlik için önemlidir.

Yanlış:

```
<html>
	<head>
  	  ...
	</head>
    <body>
        ...
    </body>
</html>
```

Doğru:

```
<html>
  <head>
    ...
  </head>
  <body>
    ...  
  </body>
</html>
```


### Dahili bağlantılar için mutlak yol kullanın

Mutlak bir yol, internet bağlantınız olmadan localhost'ta daha iyi çalışır.

Yanlış:

```
<link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>
```

Doğru:

```
<link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="/contact.html">contact page</a>.</p>
```

### Harici kaynaklar için protokole bağlı URL kullanmayın

Protokol ile dış kaynakları güvenilir ve güvenli bir şekilde yükleyebilirsiniz.

Yanlış:

```
<script src="//example.com/js/library.js">
```

Doğru:

```
<script src="https://example.com/js/library.js">
```
## Katkıda bulunanlar

- [@hail2u](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)

## Çeviri Yapanlar

[@techhtml](https://github.com/techhtml)

## Lisans

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
