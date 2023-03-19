Translations: [English (en)](README.md) · [বাংলা (bn)](README.bn.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Українська (uk)](README.uk.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [繁體中文 (zh-TW)](README.zh-TW.md)

# Penerapan Terbaik Untuk HTML

Untuk menulis dokumen HTML yang dapat dikelola dan diukur


## Umum


### Dimulai dengan DOCTYPE

DOCTYPE diperlukan untuk mengaktifkan mode standar.

Buruk:

    <html>
      ...
    </html>

Baik:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Gunakan DOCTYPE versi terbaru

DOCTYPE bukan untuk DTD lagi.

Buruk:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Baik:

    <!DOCTYPE html>


### Jangan gunakan deklarasi XML

Anda yakin ingin menulis XHTML?

Buruk:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Baik:

    <!DOCTYPE html>


### Hindari penggunaan referensi karakter sebisa mungkin

Jika anda menulis dokumen HTML dengan pengkodean UTF-8, sebagian besar karakter (termasuk
Emoji) dapat ditulis secara langsung.

Buruk:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Baik:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Hindari penggunaan referensi karakter bernama seperti `&`, `<`, `>`, `"`, dan `'`

Karakter ini harus dihindari agar dokumen HTML aman dari bug.

Buruk:

    <h1>The "&" character</h1>

Baik:

    <h1>The &quot;&amp;&quot; character</h1>


### Gunakan referensi karakter numerik untuk karakter kontrol atau karakter tidak terlihat

Karakter ini sering disalahartikan sebagai karakter lain. Dan juga spec
tidak menjamin nama yang dapat dibaca oleh manusia untuk karakter ini.

Buruk:

    <p>This book can read in 1 hour.</p>

Baik:

    <p>This book can read in 1&#xA0;hour.</p>


### Berikan spasi di sekitar konten komentar

Beberapa karakter tidak dapat digunakan seketika setelah komentar di buka
atau sebelum komentar di tutup.

Buruk:

    <!--This section is non-normative-->

Baik:

    <!-- This section is non-normative -->


### Jangan menghapus tag penutup

Anda harus memahami aturan dalam penghapusan tag penutup.

Buruk:

    <html>
      <body>
        ...

Baik:

    <html>
      <body>
        ...
      </body>
    </html>


### Jangan mencampurkan format elemen kosong

Konsistensi adalah kunci agar mudah dibaca.

Buruk:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Baik:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Jangan beri spasi di sekitar tag dan nilai pada atribut

Tidak ada alasan untuk melakukan ini.

Buruk:

    <h1 class=" title " >HTML Best Practices</h1>

Baik:

    <h1 class="title">HTML Best Practices</h1>


### Jangan mencampurkan karakter besar dan kecil

Juga untuk memberikan konsistensi.

Buruk:

    <a HREF="#general">General</A>

Baik:

    <a href="#general">General</a>

Juga baik:

    <A HREF="#general">General</A>


### Jangan mencampurkan tanda kutip

Sama seperti di atas.

Buruk:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Baik:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Jangan pisahkan atribut dengan dua atau lebih spasi

Aturan format aneh anda membuat orang lain kebingungan.

Buruk:

    <input   name="q"  type="search">

Baik:

    <input name="q" type="search">


### Menghapus nilai atribut boolean

Sangat mudah untuk ditulis, bukan?

Buruk:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Baik:

    <audio autoplay src="/audio/theme.mp3">


### Menghapus namespaces

SVG dan MathML dapat digunakan secara langsung pada dokumen HTML.

Buruk:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Baik:

    <svg>
      ...
    </svg>


### Jangan gunakan atribut XML

Kita menulis dokumen HTML.

Buruk:

    <span lang="ja" xml:lang="ja">...</span>

Baik:

    <span lang="ja">...</span>


### Jangan mencampurkan atribut `data-x`, Microdata, dan RDFa Lite dengan atribut yang umum

Sebuah tag string dapat menjadi kompleks. Aturan ini dapat membantu dalam membaca
tag string tersebut.

Buruk:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Baik:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Lebih menyukai semantik ARIA implisit bawaan

Beberapa element memiliki `role` ARIA implisit dalam dokumen HTML, jangan dispesifikasikan.

Buruk:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Baik:

    <nav>
      ...
    </nav>

    <hr>


## Elemen root


### Tambahkan atribut `lang`

Atribut `lang` akan membantu dalam penerjemahan dokumen HTML.

Buruk:

    <html>

Baik:

    <html lang="en-US">


### Buat nilai atribut `lang` sesingkat mungkin

Bahasa Jepang hanya digunakan di Jepang. Sehingga kode negara tidak diperlukan.

Buruk:

    <html lang="ja-JP">

Baik:

    <html lang="ja">


### Hindari penggunaan `data-x` jika memungkinkan

Atribut yang sesuai dapat diatasi dengan baik oleh browser.

Buruk:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Baik:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadata dokumen


### Tambahkan elemen `title`

Nilai dari elemen `title` digunakan oleh berbagai aplikasi tidak hanya browser.

Buruk:

    <head>
      <meta charset="UTF-8">
    </head>

Baik:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Jangan gunakan elemen `base`

Path absolut atau URL lebih aman untuk developer dan pengguna.

Buruk:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Baik:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Spesifikasikan MIME type pada minor linked resources

Ini adalah petunjuk bagaimana aplikasi mengatasi resource tersebut.

Buruk:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Baik:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Jangan membuat link untuk `favicon.ico`

Hampir semua browser mengambil `/favicon.ico` secara otomatis dan asinkronus.

Buruk:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Baik:

    <!-- Place `favicon.ico` in the root directory. -->


### Tambahkan link `apple-touch-icon`

Request path bawaan pada touch icon telah diubah.

Buruk:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Baik:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Tambahkan atribut `title` pada stylesheet alternatif

Label yang dapat dibaca manusia akan membantu pengguna menentukan stylesheet yang tepat.

Buruk:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Baik:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Untuk URL, gunakan elemen `link`

Nilai dari atribut `href` dapat ditetapkan sebagai URL.

Buruk:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Baik:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Spesifikasikan pengkodean karakter dokumen

UTF-8 belum menjadi pengkodean bawaan pada semua browser.

Buruk:

    <head>
      <title>HTML Best Practices</title>
    </head>

Baik:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Gunakan format pengkodean karakter terbaru

HTTP headers harus dispesifikasikan oleh server.

Buruk:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Baik:

    <meta charset="UTF-8">


### Spesifikasikan pengkodean karakter di awal dokumen

Spec diperlukan agar pengkodean karakter ditentukan dalam 1024 bytes
pertama dokumen.

Buruk:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Baik:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Gunakan UTF-8

Dengan UTF-8, anda dapat menggunakan Emoji.

Buruk:

    <meta charset="Shift_JIS">

Baik:

    <meta charset="UTF-8">


### Menghapus atribut `type` untuk CSS

Pada HTML, nilai bawaan dari atribut `type` untuk elemen `style` adalah `text/css`.

Buruk:

    <style type="text/css">
      ...
    </style>

Baik:

    <style>
      ...
    </style>


### Jangan memberikan komentar pada konten dari elemen `style`

Ini hanya digunakan oleh browser versi lama.

Buruk:

    <style>
    <!--
      ...
      -->
    </style>

Baik:

    <style>
      ...
    </style>


### Jangan mencampurkan tag untuk CSS dan JavaScript

Kadang-kadang elemen `script` memblokir konstruksi DOM.

Buruk:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Baik:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Juga baik:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections


### Tambahkan elemen `body`

Kadang-kadang elemen `body` diletakkan diposisi yang salah oleh browser.

Buruk:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Baik:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Lupakan elemen `hgroup`

Elemen ini tidak digunakan lagi.

Buruk:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Baik:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Gunakan elemen `address` hanya untuk informasi kontak

Elemen `address` digunakan untuk email, akun sosial media, alamat, nomor telepon, atau sesuatu
yang dapat menghubungi anda.

Buruk:

    <address>No rights reserved.</address>

Baik:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Pengelompokkan konten


### Jangan memulai dengan baris baru pada elemen `pre`

Baris baru pertama akan diabaikan oleh browser, tetapi tidak untuk baris berikutnya.

Buruk:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Baik:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Gunakan elemen yang sesuai pada elemen `blockquote`

Konten dari elemmen `blockquote` adalah kutipan, bukan kumpulan karakter.

Buruk:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Baik:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Jangan tambahkan caption secara langsung pada elemen `blockquote`

Konten dari elemen `blockquote` adalah kutipan.

Buruk:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Baik:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Juga baik:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Tuliskan satu daftar data per baris

Baris yang panjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaang akan
sangaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat sulit untuk dibaca.

Buruk:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Baik:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Gunakan atribut `type` untuk elemen `ol`

Kadang-kadang penanda akan direferensikan oleh konten di dekatnya. Jika anda mengubah penanda menggunakan atribut `type`,
anda dapat dengan aman untuk mereferensikannya.

Buruk:

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

Baik:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Jangan gunakan `dl` untuk dialog

Elemen `dl` hanya dibatasi untuk daftar asosiasi di HTML.

Buruk:

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

Baik:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Letakkan elemen `figcaption` sebagai anak pertama atau terakhir dari elemen `figure`

Spec melarang elemen `figcaption` berada di tengah elemen `figure`.

Buruk:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Baik:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Gunakan elemen `main`

Elemen `main` dapat digunakan untuk membungkus konten.

Buruk:

    <div id="content">
      ...
    </div>

Baik:

    <main>
      ...
    </main>


### Hindari penggunaan elemen `div` jika memungkinkan

Elemen `div` hanya digunakan sebagai langkah terakhir.

Buruk:

    <div class="chapter">
      ...
    </div>

Baik:

    <section>
      ...
    </section>


## Semantik tingkat teks


### Jangan pisahkan link yang dapat di kelompokkan

Elemen `a` dapat membungkus hampir semua elemen (kecuali elemen interaktif seperti elemen kontrol
form dan elemen `a` itu sendiri).

Buruk:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Baik:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Gunakan atribut `download` untuk mengunduh sebuah resource

Itu akan memaksa browser untuk mengunduh linked resource ke tempat penyimpanan.

Buruk:

    <a href="/downloads/offline.zip">offline version</a>

Baik:

    <a download href="/downloads/offline.zip">offline version</a>


### Gunakan atribut `rel`, `hreflang`, dan `type` jika diperlukan

Petunjuk ini membantu aplikasi mengatasi linked resource.

Buruk:

    <a href="/ja/pdf">Japanese PDF version</a>

Baik:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Menghapus link text

Link text harus berupa label untuk linked resourcenya sendiri.

Buruk:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Baik:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Jangan gunakan elemen `em` sebagai peringatan

Elemen `strong` lebih sesuai untuk menunjukkan keseriusan.

Buruk:

    <em>Caution!</em>

Baik:

    <strong>Caution!</strong>


### Hindari penggunaan elemen `s`, `i`, `b`, dan `u` jika memungkinkan

Elemen ini tidak cukup semantik untuk manusia.

Buruk:

    <i class="icon-search"></i>

Baik:

    <span class="icon-search" aria-hidden="true"></span>


### Jangan berikan kutipan pada elemen `q`

Kutipan disediakan oleh browser.

Buruk:

    <q>“For writing maintainable and scalable HTML documents”</q>

Baik:

    <q>For writing maintainable and scalable HTML documents</q>

Juga baik:

    “For writing maintainable and scalable HTML documents”


### Tambahkan atribut `title` pada elemen `abbr`

Hanya dengan cara ini untuk mengetahui singkatannya.

Buruk:

    <abbr>HBP</abbr>

Baik:

    <abbr title="HTML Best Practices">HBP</abbr>


### Markup elemen `ruby` hingga bertele-tele

Support pada elemen `ruby` belum dimiliki oleh semua browser modern.

Buruk:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Baik:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Tambahkan atribut `datetime` pada elemen `time` yang tidak dapat dibaca oleh mesin

Ketika tidak ada atribut `datetime`, format konten dari elemen `time` akan
dibatasi.

Buruk:

    <time>Dec 19, 2014</time>

Baik:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Spesifikasikan bahasa kode dengan atribut `class` yang diawali dengan `language-`

Ini bukan cara yang formal, tetapi lebih baik ditambahkan

Buruk:

    <code>&lt;!DOCTYPE html&gt;</code>

Baik:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Buat elemen `kbd` sesingkat mungkin

Elemen `kbd` bersarang sangat sulit untuk dibaca oleh manusia.

Buruk:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Baik:

    <kbd>Ctrl+F5</kbd>


### Hindari penggunaan elemen `span` jika memungkinkan

Elemen `span` hanya digunakan sebagai langkah terakhir.

Buruk:

    HTML <span class="best">Best</span> Practices

Baik:

    HTML <em>Best</em> Practices


### Jeda baris setelah elemen `br`

Jeda baris diperlukan ketika elemen `br` digunakan.

Buruk:

    <p>HTML<br>Best<br>Practices</p>

Baik:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Jangan gunakan elemen `br` hanya untuk tujuan presentasi

Elemen `br` tiidak digunakan untuk memberikan jeda baris pada elemen, tetapi untuk memberikan jeda baris pada konten.

Buruk:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Baik:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Edits


### Jangan menumpukkan elemen `ins` dan `del` diatas elemen lain

Elemen tidak dapat ditumpuk dengan elemen lain.

Buruk:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Baik:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Konten yang ditanam


### Berikan elemen `img` pada elemen `picture` sebagai alternatif

Support untuk elemen `picture` masih belum cukup baik.

Buruk:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Baik:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Tambahkan atribut `alt` pada elemen `img` jika diperlukan

Atribut `alt` membantu browser jika browser tidak dapat mengolah gambar atau fitur pemuatan gambarnya
dimatikan.

Buruk:

    <img src="/img/logo.png">

Baik:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Gunakan atribut `alt` kosong jika memungkinkan

Jika gambar hanya sebagai tambahan, pasti ada konten yang memberikan informasi mengenai gambar tersebut.

Buruk:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Baik:

    <img alt="" src="/img/icon/help.png"> Help


### Menghapus atribut `alt` jika memungkinkan

Kadang-kadang anda tidak tahu teks apa yang cocok untuk atribut `alt`.

Buruk:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Baik:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### elemen `iframe` kosong

Kontennya dibatasi. Kosong adalah yang paling aman.

Buruk:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Baik:

    <iframe src="/ads/default.html"></iframe>


### Markup konten elemen `map`

Konten ini dipresentasikan untuk screen reader.

Buruk:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Baik:

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


### Berikan konten alternatif untuk elemen `audio` atau `video`

Konten alternatif dibutuhkan untuk elemen yang baru diperkenalkan di dalam HTML.

Buruk:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Baik:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Data tabel


### Tulis satu kolom per baris

Baris yang panjang akan sulit untuk dibaca.

Buruk:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Baik:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Gunakan elemen `th` untuk kolom header

Tidak ada alasan untuk tidak melakukan ini.

Buruk:

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

Baik:

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


## Formulir


### Bungkus kontrol form dengan elemen `label`

Elemen `label` membantu dalam mengatur fokus pada elemen kontrol form.

Buruk:

    <p>Query: <input name="q" type="text"></p>

Baik:

    <p><label>Query: <input name="q" type="text"></label></p>


### Menghapus atribut `for` jika memungkinkan

Elemen `label` dapat mengandung beberapa elemen kontrol form.

Buruk:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Baik:

    <label>Query: <input name="q" type="text"></label>


### Gunakan atribut `type` yang tepat untuk elemen `input`

Dengan atribut `type` yang tepat, browser dapat memberikan fitur tambahan pada elemen `input`.

Buruk:

    <label>Search keyword: <input name="q" type="text"></label>

Baik:

    <label>Search keyword: <input name="q" type="search"></label>


### Tambahkan atribut `value` pada `input type="submit"`

Label bawaan pada tombol submit tidak terstandarisasi di seluruh browser dan
bahasa.

Buruk:

    <input type="submit">

Baik:

    <input type="submit" value="Search">


### Tambahkan atribut `title` pada elemen `input` ketika terdapat atribut `pattern`

Jika teks yang dimasukkan tidak sesuai dengan atribut `pattern`, nilai dari atribut
`value` akan muncul sebagai petunjuk.

Buruk:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Baik:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Jangan gunakan atribut `placeholder` sebagai label

Elemen `label` digunakan sebagai label, atribut `placeholder` digunakan sebagai petunjuk kecil.

Buruk:

    <input name="email" placeholder="Email" type="text">

Baik:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Tulis satu elemen `option` per baris

Baris yang panjang akan sulit untuk dibaca.

Buruk:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Baik:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Tambahkan atribut `max` untuk elemen `progress`

Dengan atribut `max`, atribut `value` dapat ditulis dengan format yang mudah.

Buruk:

    <progress value="0.5"> 50%</progress>

Baik:

    <progress max="100" value="50"> 50%</progress>


### Tambahkan atribut `min` dan `max` pada elemen `meter`

Dengan atribut `min` dan `max`, atribut `value` dapat ditulis dengan format
yang mudah.

Buruk:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Baik:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Letakkan elemen `legend` sebagai anak pertama dari elemen `fieldset`

Spec memerlukan ini.

Buruk:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Baik:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scripting


### Menghapus atribut `type` pada JavaScript

Dalam HTML, nilai atribut `type` bawaan untuk elemen `script` adalah
`text/javascript`.

Buruk:

    <script type="text/javascript">
      ...
    </script>

Baik:

    <script>
      ...
    </script>


### Jangan memberikan komentar pada konten dari elemen `script`

Hanya untuk browser versi lama.

Buruk:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Juga buruk:

    <script>
    <!--
      ...
    // -->
    </script>

Baik:

    <script>
      ...
    </script>


### Jangan gunakan elemen `script` yang disuntikkan

Atribut `async` adalah pilihan terbaik untuk kesederhanaan dan kinerja.

Buruk:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Baik:

    <script async defer src="https://example.com/widget.js"></script>


## Lainnya


### Konsistensi pada indentasi

Indentasi sangat penting agar mudah dibaca.

Buruk:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Baik:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Gunakan path absolut untuk link internal

Path absolut dapat bekerja dengan baik pada localhost tanpa koneksi internet.

Buruk:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Baik:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Jangan gunakan URL yang bersifat relatif-protokol untuk resource eksternal

Dengan protokol, anda dapat memuat resource eksternal dengan aman.

Buruk:

    <script src="//example.com/js/library.js">

Baik:

    <script src="https://example.com/js/library.js">




## Kontributor

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## Penerjemah

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@sliderkh](https://github.com/sliderkh)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@victorchao996](https://github.com/victorchao996)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar29](https://github.com/zulkar29)


## Lisensi

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
