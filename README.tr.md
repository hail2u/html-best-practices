Translations: [English (en)](README.md) [Deutsch (de)](README.de.md) [Español (es)](README.es.md) [日本語 (ja)](README.ja.md) [한국어 (ko)](README.ko.md) [Português brasileiro (pt-BR)](README.pt-BR.md) [Русский (ru)](README.ru.md) [Türkçe (tr)](README.tr.md) [简体中文 (zh-CN)](README.zh-CN.md)

# HTML'de Örnek Yöntemler

Bakım yapılabilir ve ölçeklenebilir HTML belgeleri yazmak için


## Genel


### DOCTYPE ile başla

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


### Eskimiş yada geçersiz DOCTYPE kullanmayın

DOCTYPE artık DTD için değil, basit olsun.

Yanlış:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Doğru:

    <!DOCTYPE html>


### XML etiketi kullanmayın

XHTML yazmak istediğinize emin misiniz?

Yanlış:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Doğru:

    <!DOCTYPE html>


### Karakter referanslarını mümkün olduğunca kullanmayın

UTF-8 ile bir HTML belgesi yazarsanız, hemen hemen tüm karakterler (Emoji dahil) doğrudan yazılabilir.

Yanlış:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Doğru:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`, `<`, `>` , `"`, ve `'` karakter referanslarını olduğu gibi kullanmaktan kaçının

Bu karakterlerden hatasız bir HTML belgesi için her zaman kaçınılmalıdır.

Yanlış:

    <h1>The "&" character</h1>

Doğru:

    <h1>The &quot;&amp;&quot; character</h1>


### Kontrol veya görünmeyen karakterler için sayısal karakter referanslarını kullanın.

Bu karakterler başka bir karakter için kolayca karıştırılabilir. Ayrıca spec bu karakterler için okunabilir bir isim tanımlamayı da garanti etmez.

Yanlış:

    <p>This book can read in 1 hour.</p>

<p>This book can read in 1 hour.</p>

    <p>This book can read in 1&#xA0;hour.</p>


### Yorum içeriğinin etrafına boşluk karakteri yerleştirin

Bazı karakterler yorum açıldıktan hemen sonra veya yorum kapatmadan önce kullanılamaz.

Yanlış:

    <!--This section is non-normative-->

Doğru:

    <!-- This section is non-normative -->


### Kapanış etiketini unutmayın

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


### Boş eleman formatını karıştırmayın

Tutarlılık, okunabilirliğin anahtarıdır.

Yanlış:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Etiketlerin ve özelliklerin değerlerinin etrafına boşluk karakteri koymayın

Bunu yapmak için hiçbir sebep yoktur.

Yanlış:

    <h1 class=" title " >HTML Best Practices</h1>

Doğru:

    <h1 class="title">HTML Best Practices</h1>


### Büyük küçük karakterleri aynı anda kullanmayın

Aynı zamanda bir tutarlılık da oluşturur.

Yanlış:

    <a HREF="#general">General</A>

Doğru:

    <a href="#general">General</a>

Bu da doğru:

    <A HREF="#general">General</A>


### Tırnak işaretlerini karıştırmayın

Yukarıdaki ile aynı sebepten ötürü.

Yanlış:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Özellikleri iki veya daha fazla boşluk ile ayırmayın

Garip biçimlendirme kuralınız insanları şaşırtır.

Yanlış:

    <input   name="q"  type="search">

Doğru:

    <input name="q" type="search">


### Boolean özellik değerini yazmayın

Yazması kolay, değil mi?

Yanlış:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Doğru:

    <audio autoplay src="/audio/theme.mp3">


### Ad alanlarını kullanmayın

SVG ve MathML bir HTML belgesinde doğrudan kullanılabilir.

Yanlış:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Doğru:

    <svg>
      ...
    </svg>


### XML özelliklerini kullanmayın

Sadece HTML belgesi yazıyoruz.

Yanlış:

    <span lang="ja" xml:lang="ja">...</span>

Doğru:

    <span lang="ja">...</span>


### `data-*`, Microdata ve RDFa Lite özelliklerini ile ortak özellikleri karıştırmayın

Bir etiket dizesi çok karmaşık olabilir. Bu basit kural, böyle bir etiket dizesini okumak için yardımcı olur.

Yanlış:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Varsayılan örtülü ARIA gramerini tercih edin

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


## Kök elemanı


### `lang` özelliği ekleyin

`lang` özelliği HTML belgesinin çeviriminin yapılmasına yardımcı olacaktır.

Yanlış:

    <html>

Doğru:

    <html lang="en-US">


### `lang` değerini mümkün olduğunca kısa tutun

Japonca yalnızca Japonya'da kullanılır. Yani ülke kodu gerekli değildir.

Yanlış:

    <html lang="ja-JP">

Doğru:

    <html lang="ja">


### Mümkün olduğunca `data-*` kullanmayın

Uygun bir özellik de tarayıcılar tarafından doğru bir şekilde ele alınabilir.

Yanlış:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Doğru:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadata'yı belgeleyin


### `title` elemanı ekleyin

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


### `base` elemanı kullanmayın

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


### Bağlantılı kaynakların MIME türünü belirtin

Bu, uygulamanın bu kaynağı nasıl kullandığı hakkında bir ipucudur.

Yanlış:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Doğru:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico`'ya link vermeyin

Hemen hemen tüm tarayıcılar `/favicon.ico`'yu otomatik ve asenkron olarak alır.

Yanlış:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Doğru:

    <!-- Place `favicon.ico` in the root directory. -->


### `apple-touch-icon` ekleyin

Dokunma simgesi için varsayılan istek yolu değiştirildi.

Yanlış:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Doğru:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Alternatif stil sayfalarına `title` ekleyin

İnsan tarafından okunabilen bir değer, insanların uygun stil sayfasını seçmelerine yardımcı olur.

Yanlış:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Doğru:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URL için `link` kullanın

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


### Belge karakter kodunu belirtin

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


### Eski karakter kodlama formatını kullanmayın

HTTP başlıkları bir sunucu tarafından belirtilmelidir, basit olmalıdır.

Yanlış:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Doğru:

    <meta charset="UTF-8">


### İlk önce karakter kodlamasını belirtin

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


### UTF-8'i kullanın

UTF-8 ile Emoji'yi kullanmakta özgürsünüz.

Yanlış:

    <meta charset="Shift_JIS">

Doğru:

    <meta charset="UTF-8">


### CSS için `type` kullanmayın

HTML'de, `style` etiketinin `type` özelliğinin  ön tanımlı değeri `text/css`'tir.

Yanlış:

    <style type="text/css">
      ...
    </style>

Doğru:

    <style>
      ...
    </style>


### `style` etiketinin içeriğini yorum içine almayın

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


### CSS ve JavaScript etiketlerini karıştırmayın

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


## Bölümler


### `body` etiketi ekleyin

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


### `hgroup` etiketini unutun

Bu etiket çok fazla kullanılmıyor.

Yanlış:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Doğru:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` etiketini yalnızca iletişim bilgileri için kullanın

`address` sadece e-posta adresi, sosyal ağ hesabı, sokak adresi, telefon numarası veya iletişim kurabileceğiniz bir şey içindir.

Yanlış:

    <address>No rights reserved.</address>

Doğru:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## İçeriği gruplama


### `pre` elemandaki satır başı ile başlamayın

Tarayıcılarda ilk yeni satır yok sayılır, ancak ikinci ve sonraki satırlar oluşturulur.

Yanlış:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Doğru:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote` içinde uygun etiket kullanın

`blockquote` bir alıntıdır, yani içeriği bir karakter kümesi değildir.

Yanlış:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Doğru:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Özniteliği doğrudan `blockquote` öğesinin içine dahil etme

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


### Satır başına bir liste öğesi yaz

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


### `ol` etiketi için `type` özelliğini kullanın

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


### Diyalog için `dl` kullanmayın

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


### `figcaption` etiketini, `figure` etiketinin ilk veya son çocuğu olarak yerleştirin

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


### `main` etiketini kullanın

`main` içerikleri kapsamak için kullanılabilir.

Yanlış:

    <div id="content">
      ...
    </div>

Doğru:

    <main>
      ...
    </main>


### `div` etiketini mümkün olduğu kadar kullanmayın

`div` son çaredir

Yanlış:

    <div class="chapter">
      ...
    </div>

Doğru:

    <section>
      ...
    </section>


## Metin düzeyinde anlambilim


### Gruplandırılabilen aynı bağlantıyı bölmeyin

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


### İndirilebilir kaynağı belirtmek için `download` özelliğini kullanın

Tarayıcıları bağlı kaynakları depoya indirmeye zorlar.

Yanlış:

    <a href="/downloads/offline.zip">offline version</a>

Doğru:

    <a download href="/downloads/offline.zip">offline version</a>


### Gerekirse `rel` , `hreflang` ve `type` özelliklerini kullanın

Bu ipuçları bağlantılı kaynakların nasıl işleneceğini belirterek uygulamalara yardımcı olur.

Yanlış:

    <a href="/ja/pdf">Japanese PDF version</a>

Doğru:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Bağlantı metinlerini amacına uygun yapın

Link metni, linklenen kaynağın etiketi olmalıdır.

Yanlış:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Doğru:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Uyarı vermek için `em` etiketi kullanmayın

Bu ciddiyettir. Yani, `strong` eleman daha uygundur.

Yanlış:

    <em>Caution!</em>

Doğru:

    <strong>Caution!</strong>


### `s` , `i` , `b` ve `u` etiketlerinden mümkün olduğunca kaçının

Bu etiketlerin anlambilimi insanlar için çok zordur.

Yanlış:

    <i class="icon-search"></i>

Doğru:

    <span class="icon-search" aria-hidden="true"></span>


### `q` öğesine tırnak koymayın

Tırnaklar tarayıcı tarafından sağlanır.

Yanlış:

    <q>“For writing maintainable and scalable HTML documents”</q>

Doğru:

    <q>For writing maintainable and scalable HTML documents</q>

Bu da doğru:

    “For writing maintainable and scalable HTML documents”


### `abbr` etiketine `title` özelliğini ekleyin

Açıklamasını temsil etmenin başka bir yolu yoktur.

Yanlış:

    <abbr>HBP</abbr>

Doğru:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby` etiketini detaylandırın

Modern tarayıcılarda `ruby` etiketi desteği henğz tamamlanmadı.

Yanlış:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Doğru:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Makine tarafından okunamayacak `time` etiketine `datetime` özelliği ekleyin

`datetime` özelliği bulunmadığında, `time` öğesinin içeriğinin biçimi kısıtlıdır.

Yanlış:

    <time>Dec 19, 2014</time>

Doğru:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### `language-` öneki ile kod dilini `class` etiketi le belirtin

Bu kesin bir yol değil, ancak spec bundan bahseder.

Yanlış:

    <code>&lt;!DOCTYPE html&gt;</code>

Doğru:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` etiketini mümkün olduğu kadar basit tutun

`kbd` etiketini iç içe kullanmak insanlar için çok zor.

Yanlış:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Doğru:

    <kbd>Ctrl+F5</kbd>


### `span` etiketinden mümkün olduğunca kaçının

`span` element son çaredir.

Yanlış:

    HTML <span class="best">Best</span> Practices

Doğru:

    HTML <em>Best</em> Practices


### `br` etiketinden sonra satır sonu yapın

`br` etiketi kullanıldığında satır sonu gereklidir.

Yanlış:

    <p>HTML<br>Best<br>Practices</p>

Doğru:

    <p>HTML<br>
    Best<br>
    Practices</p>


### `br` öğesini yalnızca sunum amacıyla kullanmayın

`br` elemanı satır kesmek için değil, içerikteki satır kesmeler içindir.

Yanlış:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Doğru:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Düzenlemeler


### `ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın

Etiketler diğer etidektlere taşamaz.

Yanlış:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Doğru:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


## Gömülü içerik


### `picture` elemanı için yedek `img` elemanı kullanın

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


### Gerekirse `img` öğesine `alt` özelliği ekleyin

`alt` niteliği, görüntüleri işleyemeyen veya görüntü yüklemesi engelli olanlara yardımcı olur.

Yanlış:

    <img src="/img/logo.png">

Doğru:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Mümkünse `alt` özelliğini boş olarak kullanın

Resim tamamlayıcı ise, yakınlarda bir yerde eşdeğer içerik vardır.

Yanlış:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Doğru:

    <img alt="" src="/img/icon/help.png"> Help


### Mümkünse `alt` özelliğini atlayın

Bazen hangi metnin `alt` özellik için uygun olduğunu bilemezsiniz.

Yanlış:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Doğru:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Boş `iframe` öğesi kullanın

İçeriği için bazı kısıtlamalar vardır. Boş olması her zaman güvenlidir.

Yanlış:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Doğru:

    <iframe src="/ads/default.html"></iframe>


### `map` etiketinin içeriğini işaretleyin

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


### `audio` veya `video` öğesi için yedek içerik sağlayın

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


## Tablo verileri


### Her satıra bir hücre yazın

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


### Başlık hücresi için `th` etiketini kullanın

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


## Formlar


### `label` etiketini ile form kontrolünü sağlayın

`label` etiketi form öğesinin odaklanmasına yardımcı olur.

Yanlış:

    <p>Query: <input name="q" type="text"></p>

Doğru:

    <p><label>Query: <input name="q" type="text"></label></p>


### Mümkünse `for` özelliğini kullanmayın

`label` etiketi bazı form etiketlerini içerebilir.

Yanlış:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Doğru:

    <label>Query: <input name="q" type="text"></label>


### `input` etiketi için uygun `type` özelliğini kullanın

Uygun `type` özelliği ile, tarayıcılar `input` elemanına küçük özellikler kazandırır.

Yanlış:

    <label>Search keyword: <input name="q" type="text"></label>

Doğru:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"` elemanına `value` özelliği ekleyin

Gönderme düğmesi için varsayılan etiket tarayıcılarda ve dillerde standardize edilmemiştir.

Yanlış:

    <input type="submit">

Doğru:

    <input type="submit" value="Search">


### `pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin

Girilen metni `pattern` niteliğiyle eşleşmiyorsa, `title` özelliğinin değeri ipucu olarak görüntülenecektir.

Yanlış:

    <input name="security-code" pattern="[0-9] type="text">

Doğru:
    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Etiketleme için `placeholder` özelliğini kullanmayın

`label` öğesi bir etiket içindir, `placeholder` özelliği kısa bir ipucu içindir.

Yanlış:

    <input name="email" placeholder="Email" type="text">

Doğru:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Her satıra bir `option` etiketi yazın

Uzun satırların taranması zordur.

Yanlış:

    <datalist id="toc">  <option label="General"><option label="The root element"><option label="Sections"></datalist>

Doğru:

    <datalist id="toc">
		  <option label="General">
			<option label="The root element">
			<option label="Sections">
		</datalist>


### `progress` etiketine `max` özelliği ekleyin

`max` özelliği ile, `value` özelliği kolay bir biçimde yazılabilir.

Yanlış:

    <progress value="0.5"> 50%</progress>

Doğru:

    <progress max="100" value="50"> 50%</progress>


### `meter` etiketine `min` ve `max` özelliği ekleyin

`min` ve `max` özelliği ile `value` özelliği kolay bir şekilde yazılabilir.

Yanlış:

    <meter value="0.5"> 512GB used (1024GB total</meter>

Doğru:
    <meter min="0" max="1024" value="512"> 512GB used (1024GB total</meter>


### `legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun

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


## Script ekleme


### JavaScript için `type` özelliğini kullanmayın

HTML’de,`type` özelliğinin `script` etiketi için varsayılan değeri `text/javascript`tir.

Yanlış:

    <script type="text/javascript">  ...</script>

Doğru:

    <script>  ...</script>


### `script` etiketinin içeriğini yorumla kapatmayın

Bu ritüel eski tarayıcılar içindir.

Yanlış:

    <script>/*<![CDATA[*/  .../*]]>*/</script>

Bu da kötü:

    <script><!--  ...// --></script>

Doğru:

    <script>  ...</script>


### Komut dosyası eklenmiş `script` öğesini kullanmayın

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


## Diğer


### Tutarlı girintiler kullanın

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


### Dahili bağlantılar için mutlak yol kullanın

Mutlak bir yol, internet bağlantınız olmadan localhost'ta daha iyi çalışır.

Yanlış:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Doğru:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">...<p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Harici kaynaklar için protokole bağlı URL kullanmayın

Protokol ile dış kaynakları güvenilir ve güvenli bir şekilde yükleyebilirsiniz.

Yanlış:

    <script src="//example.com/js/library.js">

Doğru:

    <script src="https://example.com/js/library.js">




## Contributors

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Translators

- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@mrcaidev](https://github.com/mrcaidev)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
