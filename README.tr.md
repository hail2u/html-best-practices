Çeviriler: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md)

# HTML'de Örnek Yöntemler

For writing maintainable and scalable HTML documents

<!-- #toc -->

- [Genel](#genel)
    - [DOCTYPE ile başlayın](#doctype-ile-ba%C5%9Fla)
    - [Eskimiş yada geçersiz DOCTYPE kullanmayın](#miras-veya-eski-doktip-kullanmay%C4%B1n)
    - [XML etiketi kullanmayın](#xml-bildirimini-kullanma)
    - [Don’t use character references as much as possible](#dont-use-character-references-as-much-as-possible)
    - [`&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmayın](#ka%C3%A7%C4%B1%C5%9F-ve-adland%C4%B1r%C4%B1lm%C4%B1%C5%9F-karakter-referanslar%C4%B1-ile)
    - [Use numeric character references for control or invisible characters](#use-numeric-character-references-for-control-or-invisible-characters)
    - [Put white spaces around comment contents](#put-white-spaces-around-comment-contents)
    - [Don’t omit closing tag](#kapan%C4%B1%C5%9F-etiketini-atlamay%C4%B1n)
    - [Don’t mix empty element format](#bo%C5%9F-eleman-format%C4%B1n%C4%B1-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
    - [Don’t put white spaces around tags and attribute values](#etiketlerin-etraf%C4%B1na-beyaz-bo%C5%9Fluk-koymay%C4%B1n-ve-de%C4%9Ferlerin-niteli%C4%9Fi)
    - [Don’t mix character cases](#karakter-durumlar%C4%B1n%C4%B1-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
    - [Don’t mix quotation marks](#t%C4%B1rnak-i%C5%9Faretleri-kar%C4%B1%C5%9F%C4%B1k-de%C4%9Fil)
    - [Don’t separate attributes with two or more white spaces](#iki-veya-daha-fazla-beyaz-bo%C5%9Fluk-i%C3%A7eren-%C3%B6znitelikleri-ay%C4%B1rmay%C4%B1n)
    - [Omit boolean attribute value](#boolean-%C3%B6zellik-de%C4%9Ferini-atlamak)
    - [Omit namespaces](#ad-alanlar%C4%B1n%C4%B1-atlamak)
    - [Don’t use XML attributes](#xml-%C3%B6zniteliklerini-kullanmay%C4%B1n)
    - [Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes](#veri-mikro-verilerini-ve-rdfa-lite-%C3%B6zniteliklerini-ortak-%C3%B6zniteliklerle-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
    - [Prefer default implicit ARIA semantics](#varsay%C4%B1lan-%C3%B6rt%C3%BCl%C3%BC-aria-semanti%C4%9Fini-tercih-et)
- [The root element](#k%C3%B6k-eleman)
    - [Add `lang` attribute](#lang-niteli%C4%9Fi-ekle)
    - [Keep `lang` attribute value as short as possible](#lang-nitelik-de%C4%9Ferini-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-k%C4%B1sa-tutun)
    - [Avoid `data-*` as much as possible](#m%C3%BCmk%C3%BCn-oldu%C4%9Funca-veri-kullanmaktan-ka%C3%A7%C4%B1n%C4%B1n)
- [Document metadata](#belge-meta-verileri)
    - [Add `title` element](#ba%C5%9Fl%C4%B1k-eleman%C4%B1-ekle)
    - [Don’t use `base` element](#temel-eleman-kullanmay%C4%B1n)
    - [Specify MIME type of minor linked resources](#k%C3%BC%C3%A7%C3%BCk-ba%C4%9Flant%C4%B1l%C4%B1-kaynaklar%C4%B1n-mime-t%C3%BCr%C3%BCn%C3%BC-belirtmek)
    - [Don’t link to `favicon.ico`](#faviconico-ile-ba%C4%9Flant%C4%B1-kurma)
    - [Add `apple-touch-icon` link](#elma-dokunma-simgesi-ba%C4%9Flant%C4%B1-ekle)
    - [Add `title` attribute to alternate stylesheets](#alternatif-stil-sayfalar%C4%B1na-ba%C5%9Fl%C4%B1k-niteli%C4%9Fi-ekleyin)
    - [For URL, use `link` element](#url-i%C3%A7in-link-element-kullan%C4%B1n)
    - [Specify document character encoding](#belge-karakter-kodlamas%C4%B1n%C4%B1-belirtin)
    - [Don’t use legacy character encoding format](#eski-karakter-kodlama-bi%C3%A7imini-kullanmay%C4%B1n)
    - [Specify character encoding at first](#ilk-%C3%B6nce-karakter-kodlamas%C4%B1n%C4%B1-belirtin)
    - [Use UTF-8](#utf-8-kullan)
    - [Omit `type` attribute for CSS](#css-i%C3%A7in-tip-%C3%B6zniteli%C4%9Fini-atlamak)
    - [Don’t comment out contents of `style` element](#stil-%C3%B6%C4%9Fesinin-i%C3%A7eri%C4%9Fini-yorumlamay%C4%B1n)
    - [Don’t mix tag for CSS and JavaScript](#css-ve-javascript-i%C3%A7in-etiketi-kar%C4%B1%C5%9Ft%C4%B1rmay%C4%B1n)
- [Sections](#b%C3%B6l%C3%BCmler)
    - [Add `body` element](#g%C3%B6vde-eleman%C4%B1-ekle)
    - [Forget about `hgroup` element](#hgroup-elementini-unut)
    - [Use `address` element only for contact information](#adres-%C3%B6%C4%9Fesini-yaln%C4%B1zca-ileti%C5%9Fim-bilgileri-i%C3%A7in-kullan%C4%B1n)
- [Grouping content](#i%C3%A7eri%C4%9Fi-grupland%C4%B1rma)
    - [Don’t start with newline in `pre` element](#%C3%B6n-elemandaki-newline-ile-ba%C5%9Flama)
    - [Use appropriate element in `blockquote` element](#blockquote-%C3%B6%C4%9Fesinde-uygun-%C3%B6%C4%9Feyi-kullan)
    - [Don’t include attribution directly in `blockquote` element](#do%C4%9Frudan-blockquote-%C3%B6%C4%9Fesinin-i%C3%A7ine-nitelik-eklemeyin)
    - [Write one list item per line](#her-sat%C4%B1ra-bir-liste-%C3%B6%C4%9Fesi-yaz)
    - [Use `type` attribute for `ol` element](#ol-element-i%C3%A7in-type-niteli%C4%9Fini-kullan%C4%B1n)
    - [Don’t use `dl` for dialogue](#diyalog-i%C3%A7in-dl-kullanmay%C4%B1n)
    - [Place `figcaption` element as first or last child of `figure` element](#figcaption-%C3%B6%C4%9Fesini-%C5%9Fekil-%C3%B6%C4%9Fesinin-ilk-veya-son-%C3%A7ocu%C4%9Fu-olarak-yerle%C5%9Ftir)
    - [Use `main` element](#ana-%C3%B6%C4%9Feyi-kullan)
    - [Avoid `div` element as much as possible](#div-elementini-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-%C3%B6nlemek)
- [Text-level semantics](#metin-seviyesi-anlambilimi)
    - [Don’t split same link that can be grouped](#gruplanabilecek-ayn%C4%B1-ba%C4%9Flant%C4%B1y%C4%B1-b%C3%B6lme)
    - [Use `download` attribute for downloading a resource](#kaynak-indirmek-i%C3%A7in-indirme-%C3%B6zelli%C4%9Fini-kullan%C4%B1n)
    - [Use `rel`, `hreflang`, and `type` attribute if needed](#rel-hreflang-kullan%C4%B1n-ve-gerekirse-yaz%C4%B1n)
    - [Clear link text](#ba%C4%9Flant%C4%B1-metnini-temizle)
    - [Don’t use `em` element for warning or caution](#uyar%C4%B1-veya-uyar%C4%B1-i%C3%A7in-em-eleman%C4%B1-kullanmay%C4%B1n)
    - [Avoid `s`, `i`, `b`, and `u` element as much as possible](#sib-ve-u-elementlerini-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-%C3%B6nlemek)
    - [Don’t put quotes to `q` element](#q-%C3%B6%C4%9Fesine-t%C4%B1rnak-koymay%C4%B1n)
    - [Add `title` attribute to `abbr` element](#abbr-eleman%C4%B1na-title-niteli%C4%9Fi-ekle)
    - [Markup `ruby` element verbosely](#i%C5%9Faretleme-yakut-eleman%C4%B1n%C4%B1-ayr%C4%B1nt%C4%B1l%C4%B1-olarak)
    - [Add `datetime` attribute to non-machine-readable `time` element](#makine-taraf%C4%B1ndan-okunamayan-zaman-%C3%B6%C4%9Fesine-datetime-%C3%B6zelli%C4%9Fi-ekleyin)
    - [Specify code language with `class` attribute prefixed with `language-`](#dil-ile-%C3%B6n-eklenmi%C5%9F-s%C4%B1n%C4%B1f-%C3%B6zniteli%C4%9Fi-ile-kod-dili-belirtin)
    - [Keep `kbd` element as simple as possible](#kbd-%C3%B6%C4%9Fesini-m%C3%BCmk%C3%BCn-oldu%C4%9Fu-kadar-basit-tutun)
    - [Avoid `span` element as much as possible](#yay%C4%B1lma-eleman%C4%B1n%C4%B1-m%C3%BCmk%C3%BCn-oldu%C4%9Funca-%C3%B6nlemek)
    - [Break after `br` element](#br-%C3%B6%C4%9Fesinden-sonra-ara)
    - [Don’t use `br` element only for presentational purpose](#br-%C3%B6%C4%9Fesini-yaln%C4%B1zca-sunum-amac%C4%B1yla-kullanmay%C4%B1n)
- [Edits](#d%C3%BCzenlemeler)
    - [Don’t stride `ins` and `del` element over other elements](#ins-ve-del-eleman%C4%B1n%C4%B1-di%C4%9Fer-elemanlar%C4%B1n-%C3%BCzerine-atmay%C4%B1n)
- [Embedded content](#g%C3%B6m%C3%BCl%C3%BC-i%C3%A7erik)
    - [Provide fallback `img` element for `picture` element](#resim-eleman%C4%B1-i%C3%A7in-geri-d%C3%B6n%C3%BC%C5%9F-img-eleman%C4%B1-sa%C4%9Flamak)
    - [Add `alt` attrbute to `img` element if needed](#gerekirse-img-eleman%C4%B1na-alt-attrbute-ekleyin)
    - [Empty `alt` attribute if possible](#m%C3%BCmk%C3%BCnse-bo%C5%9F-alt-%C3%B6zelli%C4%9Fi)
    - [Omit `alt` attribute if possible](#m%C3%BCmk%C3%BCnse-alt-niteli%C4%9Fini-atlamak)
    - [Empty `iframe` element](#bo%C5%9F-iframe-%C3%B6%C4%9Fesi)
    - [Markup `map` element content](#bi%C3%A7imlendirme-harita-%C3%B6%C4%9Fesi-i%C3%A7eri%C4%9Fi)
    - [Provide fallback content for `audio` or `video` element](#ses-veya-video-%C3%B6%C4%9Fesi-i%C3%A7in-geri-d%C3%B6n%C3%BC%C5%9F-i%C3%A7eri%C4%9Fi-sa%C4%9Flama)
- [Tabular data](#tablo-verileri)
    - [Write one cell per line](#her-sat%C4%B1ra-bir-h%C3%BCcre-yaz)
    - [Use `th` element for header cell](#ba%C5%9Fl%C4%B1k-h%C3%BCcresi-i%C3%A7in-th-%C3%B6%C4%9Fesini-kullan)
- [Forms](#formlar)
    - [Wrap form control with `label` element](#etiket-%C3%B6%C4%9Feli-form-kontrol%C3%BCn%C3%BC-kayd%C4%B1r)
    - [Omit `for` attribute if possible](#m%C3%BCmk%C3%BCnse-niteli%C4%9Fi-atlamak)
    - [Use appropriate `type` attribute for `input` element](#giri%C5%9F-eleman%C4%B1-i%C3%A7in-uygun-tip-%C3%B6zelli%C4%9Fini-kullan%C4%B1n)
    - [Add `value` attribute to `input type="submit"`](#input-typesubmit'e-de%C4%9Fer-%C3%B6zelli%C4%9Fi-ekleyin)
    - [Add `title` attribute to `input` element when there is `pattern` attribute](#desen-%C3%B6zelli%C4%9Fi-varken-giri%C5%9F-%C3%B6%C4%9Fesine-ba%C5%9Fl%C4%B1k-%C3%B6zelli%C4%9Fi-ekleyin)
    - [Don’t use `placeholder` attribute for labeling](#etiketleme-i%C3%A7in-yer-tutucu-%C3%B6zelli%C4%9Fini-kullanma)
    - [Write one `option` element per line](#her-sat%C4%B1ra-bir-se%C3%A7enek-eleman%C4%B1-yaz)
    - [Add `max` attribute to `progress` element](#progress-%C3%B6%C4%9Fesine-max-niteli%C4%9Fi-ekleyin)
    - [Add `min` and `max` attribute to `meter` element](#meter-elementine-min-ve-max-%C3%B6zelli%C4%9Fi-ekleyin)
    - [Place `legend` element as the first child of `fieldset` element](#legend-%C3%B6%C4%9Fesini,-fieldset-%C3%B6%C4%9Fesinin-ilk-%C3%A7ocu%C4%9Fu-olarak-yerle%C5%9Ftir)
- [Scripting](#betik)
    - [Omit `type` attribute for JavaScript](#javascript-i%C3%A7in-t%C3%BCr-%C3%B6zniteli%C4%9Fi-atlamak)
    - [Don’t comment out contents of `script` element](#script-%C3%B6%C4%9Fesinin-i%C3%A7eri%C4%9Fini-yorumlamay%C4%B1n)
    - [Don’t use script-injected `script` element](#komut-dosyas%C4%B1-enjekte-komut-dosyas%C4%B1-%C3%B6%C4%9Fesini-kullanmay%C4%B1n)
- [Other](#di%C4%9Fer)
    - [Indent consistently](#tutarl%C4%B1-olmamak)
    - [Use absolute path for internal links](#i%C3%A7-ba%C4%9Flant%C4%B1lar-i%C3%A7in-mutlak-yol-kullan)
    - [Don’t use protocol-relative URL for external resources](#d%C4%B1%C5%9F-kaynaklar-i%C3%A7in-protokol-g%C3%B6reli-url-kullanmay%C4%B1n)
- [Contributors](#katk%C4%B1da)
- [Translators](#terc%C3%BCmanlar)
- [License](#lisans)

<!-- /toc -->

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

DOCTYPE is not for DTD anymore, be simple.

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

Are you sure you want to write XHTML?

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

If you write an HTML document with UTF-8, almost all characters (including
Emoji) can be write directly.

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

Some character cannot be used immediately after comment open or before comment
close.

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

### Don’t mix empty element format

Consistency is a key for readability.

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

### Don’t mix quotation marks

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

It’s easy to write, isn’t it?

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

### Don’t use XML attributes

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

## The root element

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

Japanese is only used in Japan. So country code is not necessary.

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

### Don’t use `base` element

An absolute path or URL is safer for both developers and users.

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

UTF-8 is not default in all browsers yet.

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

### Don’t use legacy character encoding format

HTTP headers should be specified by a server, be simple.

Yanlış:

```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

Doğru:

```
<meta charset="UTF-8">
```

### Specify character encoding at first

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

### Use UTF-8

With UTF-8, you are free to use Emoji.

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

This ritual is for the old browser.

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

Sometimes `script` element blocks DOM construction.

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

## Sections

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

## Grouping content

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

### Don’t include attribution directly in `blockquote` element

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

### Write one list item per line

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

### Don’t use `dl` for dialogue

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

## Text-level semantics

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

Link text should be the label of its linked resource.

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

### Don’t put quotes to `q` element

Quotes are provided by the browser.

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

`span` element is an element of last resort.

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

### Don’t use `br` element only for presentational purpose

`br` element is not for line breaking, it is for line breaks in the contents.

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

## Edits

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

## Embedded content

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

### Omit `alt` attribute if possible

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

## Tabular data

### Write one cell per line

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

## Forms

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
<input name="security-code" pattern="[0-9]{3}" type="text">
```

Doğru:

```
<input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
```

### Don’t use `placeholder` attribute for labeling

`label` element is for a label, `placeholder` attribute is for a short hint.

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
<datalist id="toc">
  <option label="General"><option label="The root element"><option label="Sections">
</datalist>
```

Doğru:

```
<datalist id="toc">
  <option label="General">
  <option label="The root element">
  <option label="Sections">
</datalist>
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
<meter value="0.5"> 512GB used (1024GB total)</meter>
```

Doğru:

```
<meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>
```

### `legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun

Spec requires this.

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
<script type="text/javascript">
  ...
</script>
```

Doğru:

```
<script>
  ...
</script>
```

### `script` etiketinin içeriğini yorumla kapatmayın

Bu ritüel eski tarayıcılar içindir.

Yanlış:

```
<script>
/*<![CDATA[*/
  ...
/*]]>*/
</script>
```

Bu da kötü:

```
<script>
<!--
  ...
// -->
</script>
```

Doğru:

```
<script>
  ...
</script>
```

### Don’t use script-injected `script` element

`async` özelliği hem sadelik hem de performans için en iyisidir.

Yanlış:

```
<script>
  var script = document.createElement("script");
  script.async = true;
  script.src = "//example.com/widget.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

Doğru:

```
<script async defer src="https://example.com/widget.js"></script>
```

## Other

### Tutarlı girintiler kullanın

Indentation is important for readability.

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

An absolute path works better on your localhost without internet connection.

Yanlış:

```
<link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
...
<p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>
```

Doğru:

```
<link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
...
<p>You can find more at <a href="/contact.html">contact page</a>.</p>
```

### Don’t use protocol-relative URL for external resources

With protocol, you can load external resources reliably and safely.

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

## Çevirmenler

- [@techhtml](https://github.com/techhtml)

## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
