Translations: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Türkçe (tr)](README.tr.md)

# HTML'de Örnek Yöntemler

Bakım yapılabilir ve ölçeklenebilir HTML belgeleri yazmak için


- [Genel](#general)
  - [DOCTYPE ile başla](#start-with-doctype)
  - [Eskimiş yada geçersiz DOCTYPE kullanmayın](#dont-use-legacy-or-obsolete-doctype)
  - [XML etiketi kullanmayın](#dont-use-xml-declaration)
  - [Karakter referanslarını mümkün olduğunca kullanmayın](#dont-use-character-references-as-much-as-possible)
  - [`&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmaktan kaçının](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
  - [Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.](#use-numeric-character-references-for-control-or-invisible-characters)
  - [Yorum içeriğinin etrafına boşluk karakteri yerleştirin](#put-white-spaces-around-comment-contents)
  - [Kapanış etiketini unutmayın](#dont-omit-closing-tag)
  - [Boş eleman formatını karıştırmayın](#dont-mix-empty-element-format)
  - [Etiketlerin ve özelliklerin değerlerinin etrafına boşluk karakteri koymayın](#dont-put-white-spaces-around-tags-and-attribute-values)
  - [Büyük küçük karakterleri aynı anda kullanmayın](#dont-mix-character-cases)
  - [Tırnak işaretlerini karıştırmayın](#dont-mix-quotation-marks)
  - [Özellikleri iki veya daha fazla boşluk ile ayırmayın](#dont-separate-attributes-with-two-or-more-white-spaces)
  - [Boolean özellik değerini yazmayın](#omit-boolean-attribute-value)
  - [Ad alanlarını kullanmayın](#omit-namespaces)
  - [XML özelliklerini kullanmayın](#dont-use-xml-attributes)
  - [`data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  - [Varsayılan örtülü ARIA gramerini tercih edin](#prefer-default-implicit-aria-semantics)
- [Kök elemanı](#the-root-element)
  - [`lang` özelliği ekleyin](#add-lang-attribute)
  - [`lang` değerini mümkün olduğunca kısa tutun](#keep-lang-attribute-value-as-short-as-possible)
  - [Mümkün olduğunca `data-*` kullanmayın](#avoid-data-as-much-as-possible)
- [Metadata'yı belgeleyin](#document-metadata)
  - [`title` elemanı ekleyin](#add-title-element)
  - [`base` elemanı kullanmayın](#dont-use-base-element)
  - [Bağlantılı kaynakların MIME türünü belirtin](#specify-mime-type-of-minor-linked-resources)
  - [`favicon.ico`'ya link vermeyin](#dont-link-to-faviconico)
  - [`apple-touch-icon` ekleyin](#add-apple-touch-icon-link)
  - [Alternatif stil sayfalarına `title` ekleyin](#add-title-attribute-to-alternate-stylesheets)
  - [URL için `link` kullanın](#for-url-use-link-element)
  - [Belge karakter kodunu belirtin](#specify-document-character-encoding)
  - [Eski karakter kodlama formatını kullanmayın](#dont-use-legacy-character-encoding-format)
  - [İlk önce karakter kodlamasını belirtin](#specify-character-encoding-at-first)
  - [UTF-8'i kullanın](#use-utf-8)
  - [CSS için `type` kullanmayın](#omit-type-attribute-for-css)
  - [`style` etiketinin içeriğini yorum içine almayın](#dont-comment-out-contents-of-style-element)
  - [CSS ve JavaScript etiketlerini karıştırmayın](#dont-mix-tag-for-css-and-javascript)
- [Bölümler](#sections)
  - [`body` etiketi ekleyin](#add-body-element)
  - [`hgroup` etiketini unutun](#forget-about-hgroup-element)
  - [`address` etiketini yalnızca iletişim bilgileri için kullanın](#use-address-element-only-for-contact-information)
- [İçeriği gruplama](#grouping-content)
  - [`pre` elemandaki satır başı ile başlamayın](#dont-start-with-newline-in-pre-element)
  - [`blockquote` içinde uygun etiket kullanın](#use-appropriate-element-in-blockquote-element)
  - [Özniteliği doğrudan `blockquote` öğesinin içine dahil etme](#dont-include-attribution-directly-in-blockquote-element)
  - [Satır başına bir liste öğesi yaz](#write-one-list-item-per-line)
  - [`ol` etiketi için `type` özelliğini kullanın](#use-type-attribute-for-ol-element)
  - [Diyalog için `dl` kullanmayın](#dont-use-dl-for-dialogue)
  - [`figcaption` etiketini, `figure` etiketinin ilk veya son çocuğu olarak yerleştirin](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  - [`main` etiketini kullanın](#use-main-element)
  - [`div` etiketini mümkün olduğu kadar kullanmayın](#avoid-div-element-as-much-as-possible)
- [Metin düzeyinde anlambilim](#text-level-semantics)
  - [Gruplandırılabilen aynı bağlantıyı bölmeyin](#dont-split-same-link-that-can-be-grouped)
  - [İndirilebilir kaynağı belirtmek için `download` özelliğini kullanın](#use-download-attribute-for-downloading-a-resource)
  - [Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın](#use-rel-hreflang-and-type-attribute-if-needed)
  - [Bağlantı metinlerini amacına uygun yapın](#clear-link-text)
  - [Uyarı vermek için `em` etiketi kullanmayın](#dont-use-em-element-for-warning-or-caution)
  - [`s` , `i` , `b` ve `u` etiketlerinden mümkün olduğunca kaçının](#avoid-s-i-b-and-u-element-as-much-as-possible)
  - [`q` öğesine tırnak koymayın](#dont-put-quotes-to-q-element)
  - [`abbr` etiketine `title` özelliğini ekleyin](#add-title-attribute-to-abbr-element)
  - [`ruby` etiketini detaylandırın](#markup-ruby-element-verbosely)
  - [Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin](#add-datetime-attribute-to-non-machine-readable-time-element)
  - [`language-` öneki ile kod dilini `class` etiketi le belirtin](#specify-code-language-with-class-attribute-prefixed-with-language)
  - [`kbd` etiketini mümkün olduğu kadar basit tutun](#keep-kbd-element-as-simple-as-possible)
  - [`span` etiketinden mümkün olduğunca kaçının](#avoid-span-element-as-much-as-possible)
  - [`br` etiketinden sonra satır sonu yapın](#break-after-br-element)
  - [`br` öğesini yalnızca sunum amacıyla kullanmayın](#dont-use-br-element-only-for-presentational-purpose)
- [Düzenlemeler](#edits)
  - [`ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın](#dont-stride-ins-and-del-element-over-other-elements)
- [Gömülü içerik](#embedded-content)
  - [`picture` elemanı için yedek `img` elemanı kullanın](#provide-fallback-img-element-for-picture-element)
  - [Gerekirse `img` öğesine `alt` özelliği ekleyin](#add-alt-attrbute-to-img-element-if-needed)
  - [Mümkünse `alt` özelliğini boş olarak kullanın](#empty-alt-attribute-if-possible)
  - [Mümkünse `alt` özelliğini atlayın](#omit-alt-attribute-if-possible)
  - [Boş `iframe` öğesi kullanın](#empty-iframe-element)
  - [`map` etiketinin içeriğini işaretleyin](#markup-map-element-content)
  - [`audio` veya `video` öğesi için yedek içerik sağlayın](#provide-fallback-content-for-audio-or-video-element)
- [Tablo verileri](#tabular-data)
  - [Her satıra bir hücre yazın](#write-one-cell-per-line)
  - [Başlık hücresi için `th` etiketini kullanın](#use-th-element-for-header-cell)
- [Formlar](#forms)
  - [`label` etiketini ile form kontrolünü sağlayın](#wrap-form-control-with-label-element)
  - [Mümkünse `for` özelliğini kullanmayın](#omit-for-attribute-if-possible)
  - [`input` etiketi için uygun `type` özelliğini kullanın](#use-appropriate-type-attribute-for-input-element)
  - [`input type="submit"` elemanına `value` özelliği ekleyin](#add-value-attribute-to-input-typesubmit)
  - [`pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  - [Etiketleme için `placeholder` özelliğini kullanmayın](#dont-use-placeholder-attribute-for-labeling)
  - [Her satıra bir `option` etiketi yazın](#write-one-option-element-per-line)
  - [`progress` etiketine `max` özelliği ekleyin](#add-max-attribute-to-progress-element)
  - [`meter` etiketine `min` ve `max` özelliği ekleyin](#add-min-and-max-attribute-to-meter-element)
  - [`legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun](#place-legend-element-as-the-first-child-of-fieldset-element)
- [Script ekleme](#scripting)
  - [JavaScript için `type` özelliğini kullanmayın](#omit-type-attribute-for-javascript)
  - [`script` etiketinin içeriğini yorumla kapatmayın](#dont-comment-out-contents-of-script-element)
  - [Komut dosyası eklenmiş `script` öğesini kullanmayın](#dont-use-script-injected-script-element)
- [Diğer](#other)
  - [Tutarlı girintiler kullanın](#indent-consistently)
  - [Dahili bağlantılar için mutlak yol kullanın](#use-absolute-path-for-internal-links)
  - [Harici kaynaklar için protokole bağlı URL kullanmayın](#dont-use-protocol-relative-url-for-external-resources)
- [Contributors](#contributors)
- [Translators](#translators)
- [License](#license)


## Genel<span id="general"></span>


### DOCTYPE ile başla<span id="start-with-doctype"></span>

DOCTYPE standart modu etkinleştirmek için gereklidir.

Yanlış:

    <html>
      ...
    </html>

Doğru:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Eskimiş yada geçersiz DOCTYPE kullanmayın<span id="dont-use-legacy-or-obsolete-doctype"></span>

DOCTYPE artık DTD için değil, basit olsun.

Yanlış:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Doğru:

    <!DOCTYPE html>


### XML etiketi kullanmayın<span id="dont-use-xml-declaration"></span>

XHTML yazmak istediğinize emin misiniz?

Yanlış:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Doğru:

    <!DOCTYPE html>


### Karakter referanslarını mümkün olduğunca kullanmayın<span id="dont-use-character-references-as-much-as-possible"></span>

UTF-8 ile bir HTML belgesi yazarsanız, hemen hemen tüm karakterler (Emoji dahil) doğrudan yazılabilir.

Yanlış:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Doğru:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmaktan kaçının<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

Bu karakterlerden hatasız bir HTML belgesi için her zaman kaçınılmalıdır.

Yanlış:

    <h1>The "&" character</h1>

Doğru:

    <h1>The &quot;&amp;&quot; character</h1>


### Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

Bu karakterler başka bir karakter için kolayca karıştırılabilir. Ayrıca spec bu karakterler için okunabilir bir isim tanımlamayı da garanti etmez.

Yanlış:

    <p>This book can read in 1 hour.</p>

<p>This book can read in 1 hour.</p>

    <p>This book can read in 1&#xA0;hour.</p>


### Yorum içeriğinin etrafına boşluk karakteri yerleştirin<span id="put-white-spaces-around-comment-contents"></span>

Bazı karakterler yorum açıldıktan hemen sonra veya yorum kapatmadan önce kullanılamaz.

Yanlış:

    <!--This section is non-normative-->

Doğru:

    <!-- This section is non-normative -->


### Kapanış etiketini unutmayın<span id="dont-omit-closing-tag"></span>

Kapanış etiketini atlamak için bir kural yok.

Yanlış:

    <html>
      <body>
        ...

Doğru:

    <html>
      <body>
        ...
      </body>
    </html>


### Boş eleman formatını karıştırmayın<span id="dont-mix-empty-element-format"></span>

Tutarlılık, okunabilirliğin anahtarıdır.

Yanlış:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Etiketlerin ve özelliklerin değerlerinin etrafına boşluk karakteri koymayın<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

Bunu yapmak için hiçbir sebep yoktur.

Yanlış:

    <h1 class=" title " >HTML Best Practices</h1>

Doğru:

    <h1 class="title">HTML Best Practices</h1>


### Büyük küçük karakterleri aynı anda kullanmayın<span id="dont-mix-character-cases"></span>

Aynı zamanda bir tutarlılık da oluşturur.

Yanlış:

    <a HREF="#general">General</A>

Doğru:

    <a href="#general">General</a>

Bu da doğru:

    <A HREF="#general">General</A>


### Tırnak işaretlerini karıştırmayın<span id="dont-mix-quotation-marks"></span>

Yukarıdaki ile aynı sebepten ötürü.

Yanlış:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Özellikleri iki veya daha fazla boşluk ile ayırmayın<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

Garip biçimlendirme kuralınız insanları şaşırtır.

Yanlış:

    <input   name="q"  type="search">

Doğru:

    <input name="q" type="search">


### Boolean özellik değerini yazmayın<span id="omit-boolean-attribute-value"></span>

Yazması kolay, değil mi?

Yanlış:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Doğru:

    <audio autoplay src="/audio/theme.mp3">


### Ad alanlarını kullanmayın<span id="omit-namespaces"></span>

SVG ve MathML bir HTML belgesinde doğrudan kullanılabilir.

Yanlış:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Doğru:

    <svg>
      ...
    </svg>


### XML özelliklerini kullanmayın<span id="dont-use-xml-attributes"></span>

Sadece HTML belgesi yazıyoruz.

Yanlış:

    <span lang="ja" xml:lang="ja">...</span>

Doğru:

    <span lang="ja">...</span>


### `data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

Bir etiket dizesi çok karmaşık olabilir. Bu basit kural, böyle bir etiket dizesini okumak için yardımcı olur.

Yanlış:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Varsayılan örtülü ARIA gramerini tercih edin<span id="prefer-default-implicit-aria-semantics"></span>

Bazı öğelerin bir HTML belgesinde örtük olarak bir ARIA `role` değeri vardır, belirtmenize gerek yoktur.

Yanlış:

    <nav role="navigation">
      ...
    </nav>
    
    <hr role="separator">

Doğru:

    <nav>
      ...
    </nav>
    
    <hr>


## Kök elemanı<span id="the-root-element"></span>


### `lang` özelliği ekleyin<span id="add-lang-attribute"></span>

`lang` özelliği HTML belgesinin çeviriminin yapılmasına yardımcı olacaktır.

Yanlış:

    <html>

Doğru:

    <html lang="en-US">


### `lang` değerini mümkün olduğunca kısa tutun<span id="keep-lang-attribute-value-as-short-as-possible"></span>

Japonca yalnızca Japonya'da kullanılır. Yani ülke kodu gerekli değildir.

Yanlış:

    <html lang="ja-JP">

Doğru:

    <html lang="ja">


### Mümkün olduğunca `data-*` kullanmayın<span id="avoid-data-as-much-as-possible"></span>

Uygun bir özellik de tarayıcılar tarafından doğru bir şekilde ele alınabilir.

Yanlış:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Doğru:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadata'yı belgeleyin<span id="document-metadata"></span>


### `title` elemanı ekleyin<span id="add-title-element"></span>

`title` değeri, yalnızca tarayıcı tarafından değil, çeşitli uygulamalar tarafından da kullanılır.

Yanlış:

    <head>
      <meta charset="UTF-8">
    </head>

Doğru:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### `base` elemanı kullanmayın<span id="dont-use-base-element"></span>

Mutlak bir yol veya URL, hem geliştiriciler hem de kullanıcılar için daha güvenlidir.

Yanlış:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Doğru:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Bağlantılı kaynakların MIME türünü belirtin<span id="specify-mime-type-of-minor-linked-resources"></span>

Bu, uygulamanın bu kaynağı nasıl kullandığı hakkında bir ipucudur.

Yanlış:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Doğru:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico`'ya link vermeyin<span id="dont-link-to-faviconico"></span>

Hemen hemen tüm tarayıcılar `/favicon.ico`'yu otomatik ve asenkron olarak alır.

Yanlış:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Doğru:

    <!-- Place `favicon.ico` in the root directory. -->


### `apple-touch-icon` ekleyin<span id="add-apple-touch-icon-link"></span>

Dokunma simgesi için varsayılan istek yolu değiştirildi.

Yanlış:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Doğru:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Alternatif stil sayfalarına `title` ekleyin<span id="add-title-attribute-to-alternate-stylesheets"></span>

İnsan tarafından okunabilen bir değer, insanların uygun stil sayfasını seçmelerine yardımcı olur.

Yanlış:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Doğru:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URL için `link` kullanın<span id="for-url-use-link-element"></span>

Bir `href` değeri URL olarak çözülebilir.

Yanlış:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Doğru:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Belge karakter kodunu belirtin<span id="specify-document-character-encoding"></span>

UTF-8 henüz tüm tarayıcılarda varsayılan değil.

Yanlış:

    <head>
      <title>HTML Best Practices</title>
    </head>

Doğru:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Eski karakter kodlama formatını kullanmayın<span id="dont-use-legacy-character-encoding-format"></span>

HTTP başlıkları bir sunucu tarafından belirtilmelidir, basit olmalıdır.

Yanlış:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Doğru:

    <meta charset="UTF-8">


### İlk önce karakter kodlamasını belirtin<span id="specify-character-encoding-at-first"></span>

Spec, karakter kodlamasının dökümanın ilk 1024 bayt içinde belirtilmesini gerektirir.

Yanlış:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Doğru:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### UTF-8'i kullanın<span id="use-utf-8"></span>

UTF-8 ile Emoji'yi kullanmakta özgürsünüz.

Yanlış:

    <meta charset="Shift_JIS">

Doğru:

    <meta charset="UTF-8">


### CSS için `type` kullanmayın<span id="omit-type-attribute-for-css"></span>

HTML'de, `style` etiketinin `type` özelliğinin  ön tanımlı değeri `text/css`'tir.

Yanlış:

    <style type="text/css">
      ...
    </style>

Doğru:

    <style>
      ...
    </style>


### `style` etiketinin içeriğini yorum içine almayın<span id="dont-comment-out-contents-of-style-element"></span>

Bu ritüel eski tarayıcı içindir.

Yanlış:

    <style>
    <!--
      ...
      -->
    </style>

Doğru:

    <style>
      ...
    </style>


### CSS ve JavaScript etiketlerini karıştırmayın<span id="dont-mix-tag-for-css-and-javascript"></span>

Bazen `script` elemanı DOM inşasını engeller.

Yanlış:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Doğru:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Bu da doğru:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Bölümler<span id="sections"></span>


### `body` etiketi ekleyin<span id="add-body-element"></span>

Bazen `body` etiketi beklenmedik bir pozisyonda bir tarayıcı tarafından tamamlanmaktadır.

Yanlış:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Doğru:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### `hgroup` etiketini unutun<span id="forget-about-hgroup-element"></span>

Bu etiket çok fazla kullanılmıyor.

Yanlış:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Doğru:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` etiketini yalnızca iletişim bilgileri için kullanın<span id="use-address-element-only-for-contact-information"></span>

`address` sadece e-posta adresi, sosyal ağ hesabı, sokak adresi, telefon numarası veya iletişim kurabileceğiniz bir şey içindir.

Yanlış:

    <address>No rights reserved.</address>

Doğru:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## İçeriği gruplama<span id="grouping-content"></span>


### `pre` elemandaki satır başı ile başlamayın<span id="dont-start-with-newline-in-pre-element"></span>

Tarayıcılarda ilk yeni satır yok sayılır, ancak ikinci ve sonraki satırlar oluşturulur.

Yanlış:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Doğru:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote` içinde uygun etiket kullanın<span id="use-appropriate-element-in-blockquote-element"></span>

`blockquote` bir alıntıdır, yani içeriği bir karakter kümesi değildir.

Yanlış:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Doğru:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Özniteliği doğrudan `blockquote` öğesinin içine dahil etme<span id="dont-include-attribution-directly-in-blockquote-element"></span>

`blockquote` içeriği bir alıntıdır.

Yanlış:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    
      <p>— HTML Best Practices</p>
    </blockquote>

Doğru:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

Bu da doğru:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Satır başına bir liste öğesi yaz<span id="write-one-list-item-per-line"></span>

Uzuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuun bir satırı okuması çooooooooooooooooooooooooooooooooooooooooooooooooook
zordur

Yanlış:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Doğru:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### `ol` etiketi için `type` özelliğini kullanın<span id="use-type-attribute-for-ol-element"></span>

Bazen yakınlardaki içerikler referans verilir. İşaretçiyi değiştirirseniz
`type` özelliği ile kullanırsanız güvende olacaksınız.

Yanlış:

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

Doğru:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Diyalog için `dl` kullanmayın<span id="dont-use-dl-for-dialogue"></span>

`dl` etiketi, HTML'deki bir ilişkilendirme listesi ile sınırlandırılmıştır.

Yanlış:

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

Doğru:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### `figcaption` etiketini, `figure` etiketinin ilk veya son çocuğu olarak yerleştirin<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

Spec, `figure` etiketinin ortasındaki `figcaption` etiketine izin vermez.

Yanlış:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Doğru:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### `main` etiketini kullanın<span id="use-main-element"></span>

`main` içerikleri kapsamak için kullanılabilir.

Yanlış:

    <div id="content">
      ...
    </div>

Doğru:

    <main>
      ...
    </main>


### `div` etiketini mümkün olduğu kadar kullanmayın<span id="avoid-div-element-as-much-as-possible"></span>

`div` son çaredir

Yanlış:

    <div class="chapter">
      ...
    </div>

Doğru:

    <section>
      ...
    </section>


## Metin düzeyinde anlambilim<span id="text-level-semantics"></span>


### Gruplandırılabilen aynı bağlantıyı bölmeyin<span id="dont-split-same-link-that-can-be-grouped"></span>

`a` etiketi hemen hemen tüm etiketleri sarabilir (form gibi etkileşimli elemanlar hariç)
kontroller ve `a` elemanın kendisi).

Yanlış:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Doğru:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### İndirilebilir kaynağı belirtmek için `download` özelliğini kullanın<span id="use-download-attribute-for-downloading-a-resource"></span>

Tarayıcıları bağlı kaynakları depoya indirmeye zorlar.

Yanlış:

    <a href="/downloads/offline.zip">offline version</a>

Doğru:

    <a download href="/downloads/offline.zip">offline version</a>


### Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

Bu ipuçları bağlantılı kaynakların nasıl işleneceğini belirterek uygulamalara yardımcı olur.

Yanlış:

    <a href="/ja/pdf">Japanese PDF version</a>

Doğru:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Bağlantı metinlerini amacına uygun yapın<span id="clear-link-text"></span>

Link metni, linklenen kaynağın etiketi olmalıdır.

Yanlış:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Doğru:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Uyarı vermek için `em` etiketi kullanmayın<span id="dont-use-em-element-for-warning-or-caution"></span>

Bu ciddiyettir. Yani, `strong` eleman daha uygundur.

Yanlış:

    <em>Caution!</em>

Doğru:

    <strong>Caution!</strong>


### `s` , `i` , `b` ve `u` etiketlerinden mümkün olduğunca kaçının<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

Bu etiketlerin anlambilimi insanlar için çok zordur.

Yanlış:

    <i class="icon-search"></i>

Doğru:

    <span class="icon-search" aria-hidden="true"></span>


### `q` öğesine tırnak koymayın<span id="dont-put-quotes-to-q-element"></span>

Tırnaklar tarayıcı tarafından sağlanır.

Yanlış:

    <q>“For writing maintainable and scalable HTML documents”</q>

Doğru:

    <q>For writing maintainable and scalable HTML documents</q>

Bu da doğru:

    “For writing maintainable and scalable HTML documents”


### `abbr` etiketine `title` özelliğini ekleyin<span id="add-title-attribute-to-abbr-element"></span>

Açıklamasını temsil etmenin başka bir yolu yoktur.

Yanlış:

    <abbr>HBP</abbr>

Doğru:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby` etiketini detaylandırın<span id="markup-ruby-element-verbosely"></span>

Modern tarayıcılarda `ruby` etiketi desteği henğz tamamlanmadı.

Yanlış:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Doğru:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

`datetime` özelliği bulunmadığında, `time` öğesinin içeriğinin biçimi kısıtlıdır.

Yanlış:

    <time>Dec 19, 2014</time>

Doğru:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### `language-` öneki ile kod dilini `class` etiketi le belirtin<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

Bu kesin bir yol değil, ancak spec bundan bahseder.

Yanlış:

    <code>&lt;!DOCTYPE html&gt;</code>

Doğru:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` etiketini mümkün olduğu kadar basit tutun<span id="keep-kbd-element-as-simple-as-possible"></span>

`kbd` etiketini iç içe kullanmak insanlar için çok zor.

Yanlış:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Doğru:

    <kbd>Ctrl+F5</kbd>


### `span` etiketinden mümkün olduğunca kaçının<span id="avoid-span-element-as-much-as-possible"></span>

`span` element son çaredir.

Yanlış:

    HTML <span class="best">Best</span> Practices

Doğru:

    HTML <em>Best</em> Practices


### `br` etiketinden sonra satır sonu yapın<span id="break-after-br-element"></span>

`br` etiketi kullanıldığında satır sonu gereklidir.

Yanlış:

    <p>HTML<br>Best<br>Practices</p>

Doğru:

    <p>HTML<br>
    Best<br>
    Practices</p>


### `br` öğesini yalnızca sunum amacıyla kullanmayın<span id="dont-use-br-element-only-for-presentational-purpose"></span>

`br` elemanı satır kesmek için değil, içerikteki satır kesmeler içindir.

Yanlış:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Doğru:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Düzenlemeler<span id="edits"></span>


### `ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

Etiketler diğer etidektlere taşamaz.

Yanlış:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Doğru:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


## Gömülü içerik<span id="embedded-content"></span>


### `picture` elemanı için yedek `img` elemanı kullanın<span id="provide-fallback-img-element-for-picture-element"></span>

`picture` etiketinin desteği henüz iyi değil.

Yanlış:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Doğru:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Gerekirse `img` öğesine `alt` özelliği ekleyin<span id="add-alt-attrbute-to-img-element-if-needed"></span>

`alt` niteliği, görüntüleri işleyemeyen veya görüntü yüklemesi engelli olanlara yardımcı olur.

Yanlış:

    <img src="/img/logo.png">

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Mümkünse `alt` özelliğini boş olarak kullanın<span id="empty-alt-attribute-if-possible"></span>

Resim tamamlayıcı ise, yakınlarda bir yerde eşdeğer içerik vardır.

Yanlış:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Doğru:

    <img alt="" src="/img/icon/help.png"> Help


### Mümkünse `alt` özelliğini atlayın<span id="omit-alt-attribute-if-possible"></span>

Bazen hangi metnin `alt` özellik için uygun olduğunu bilemezsiniz.

Yanlış:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Doğru:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Boş `iframe` öğesi kullanın<span id="empty-iframe-element"></span>

İçeriği için bazı kısıtlamalar vardır. Boş olması her zaman güvenlidir.

Yanlış:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Doğru:

    <iframe src="/ads/default.html"></iframe>


### `map` etiketinin içeriğini işaretleyin<span id="markup-map-element-content"></span>

Bu içerik bir ekran okuyucu sunar.

Yanlış:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Doğru:

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


### `audio` veya `video` öğesi için yedek içerik sağlayın<span id="provide-fallback-content-for-audio-or-video-element"></span>

HTML’de yeni tanıtılan öğeler için yedek içerik gereklidir.

Yanlış:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Doğru:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Tablo verileri<span id="tabular-data"></span>


### Her satıra bir hücre yazın<span id="write-one-cell-per-line"></span>

Uzun satırların taranması zordur.

Yanlış:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Doğru:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Başlık hücresi için `th` etiketini kullanın<span id="use-th-element-for-header-cell"></span>

Bundan kaçınmak için hiçbir sebep yoktur.

Yanlış:

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

Doğru:

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


## Formlar<span id="forms"></span>


### `label` etiketini ile form kontrolünü sağlayın<span id="wrap-form-control-with-label-element"></span>

`label` etiketi form öğesinin odaklanmasına yardımcı olur.

Yanlış:

    <p>Query: <input name="q" type="text"></p>

Doğru:

    <p><label>Query: <input name="q" type="text"></label></p>


### Mümkünse `for` özelliğini kullanmayın<span id="omit-for-attribute-if-possible"></span>

`label` etiketi bazı form etiketlerini içerebilir.

Yanlış:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Doğru:

    <label>Query: <input name="q" type="text"></label>


### `input` etiketi için uygun `type` özelliğini kullanın<span id="use-appropriate-type-attribute-for-input-element"></span>

Uygun `type` özelliği ile, tarayıcılar `input` elemanına küçük özellikler kazandırır.

Yanlış:

    <label>Search keyword: <input name="q" type="text"></label>

Doğru:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"` elemanına `value` özelliği ekleyin<span id="add-value-attribute-to-input-typesubmit"></span>

Gönderme düğmesi için varsayılan etiket tarayıcılarda ve dillerde standardize edilmemiştir.

Yanlış:

    <input type="submit">

Doğru:

    <input type="submit" value="Search">


### `pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

Girilen metni `pattern` niteliğiyle eşleşmiyorsa, `title` özelliğinin değeri ipucu olarak görüntülenecektir.

Yanlış:

    <input name="security-code" pattern="[0-9] type="text">

Doğru:
    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Etiketleme için `placeholder` özelliğini kullanmayın<span id="dont-use-placeholder-attribute-for-labeling"></span>

`label` öğesi bir etiket içindir, `placeholder` özelliği kısa bir ipucu içindir.

Yanlış:

    <input name="email" placeholder="Email" type="text">

Doğru:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Her satıra bir `option` etiketi yazın<span id="write-one-option-element-per-line"></span>

Uzun satırların taranması zordur.

Yanlış:

    <datalist id="toc">  <option label="General"><option label="The root element"><option label="Sections"></datalist>

Doğru:

    <datalist id="toc">
		  <option label="General">
			<option label="The root element">
			<option label="Sections">
		</datalist>


### `progress` etiketine `max` özelliği ekleyin<span id="add-max-attribute-to-progress-element"></span>

`max` özelliği ile, `value` özelliği kolay bir biçimde yazılabilir.

Yanlış:

    <progress value="0.5"> 50%</progress>

Doğru:

    <progress max="100" value="50"> 50%</progress>


### `meter` etiketine `min` ve `max` özelliği ekleyin<span id="add-min-and-max-attribute-to-meter-element"></span>

`min` ve `max` özelliği ile `value` özelliği kolay bir şekilde yazılabilir.

Yanlış:

    <meter value="0.5"> 512GB used (1024GB total</meter>

Doğru:
    <meter min="0" max="1024" value="512"> 512GB used (1024GB total</meter>


### `legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

Spec bunu gerektirir.

Yanlış:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
        ...
      <legend>About "General"</legend>
    </fieldset>

Doğru:

    <fieldset>
      <legend>About "General"</legend>
        <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
          ...
    </fieldset>


## Script ekleme<span id="scripting"></span>


### JavaScript için `type` özelliğini kullanmayın<span id="omit-type-attribute-for-javascript"></span>

HTML’de,`type` özelliğinin `script` etiketi için varsayılan değeri `text/javascript`tir.

Yanlış:

    <script type="text/javascript">  ...</script>

Doğru:

    <script>  ...</script>


### `script` etiketinin içeriğini yorumla kapatmayın<span id="dont-comment-out-contents-of-script-element"></span>

Bu ritüel eski tarayıcılar içindir.

Yanlış:

    <script>/*<![CDATA[*/  .../*]]>*/</script>

Bu da kötü:

    <script><!--  ...// --></script>

Doğru:

    <script>  ...</script>


### Komut dosyası eklenmiş `script` öğesini kullanmayın<span id="dont-use-script-injected-script-element"></span>

`async` özelliği hem sadelik hem de performans için en iyisidir.

Yanlış:

    <script>
      var script = document.createElement("script";
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head"[0].appendChild(script);
    </script>

Doğru:

    <script async defer src="https://example.com/widget.js"></script>


## Diğer<span id="other"></span>


### Tutarlı girintiler kullanın<span id="indent-consistently"></span>

Girinti okunabilirlik için önemlidir.

Yanlış:

    <html>
    	<head>
      	  ...
    	</head>
        <body>
            ...
        </body>
    </html>

Doğru:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Dahili bağlantılar için mutlak yol kullanın<span id="use-absolute-path-for-internal-links"></span>

Mutlak bir yol, internet bağlantınız olmadan localhost'ta daha iyi çalışır.

Yanlış:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Doğru:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Harici kaynaklar için protokole bağlı URL kullanmayın<span id="dont-use-protocol-relative-url-for-external-resources"></span>

Protokol ile dış kaynakları güvenilir ve güvenli bir şekilde yükleyebilirsiniz.

Yanlış:

    <script src="//example.com/js/library.js">

Doğru:

    <script src="https://example.com/js/library.js">




## Contributors<span id="contributors"></span>

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Translators

- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
