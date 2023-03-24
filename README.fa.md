<div dir="rtl" align='right'>

Translations: [English (en)](README.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [فارسی (fa)](README.fa.md)

# HTML بهترین روش های

برای نوشتن اسناد مقیاس پذیر و قابل نگهداری HTML

## عمومی

### با DOCTYPE شروع کنید

برای فعال کردن حالت بدون خصیصه DOCTYPE نیاز است.
بد:

<div dir="ltr" align='left'>

    <html>
      ...
    </html>

</div>

خوب:

<div dir="ltr" align='left'>
  
    <!DOCTYPE html>
    <html>
      ...
    </html>
</div>

### از DOCTYPE قدیمی یا منسوخ استفاده نکنید

DOCTYPE دیگر برای DTD نیست، ساده باشید.

بد:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

خوب:

    <!DOCTYPE html>

### از اعلان XML استفاده نکنید

آیا مطمئن هستید که می خواهید XHTML بنویسید؟

بد:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

خوب:

    <!DOCTYPE html>

### تا حد امکان از ارجاع کاراکترها استفاده نکنید

اگر یک سند HTML با UTF-8 بنویسید، تقریباً همه کاراکترها (از جمله
Emoji) را می توان مستقیماً نوشت.

بد:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

خوب:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

### عدم استفاده از «&»، «<»، «>»، «»، و «» با ارجاع کاراکترهای نام‌گذاری شده

این کاراکترها باید همیشه برای یک سند HTML بدون اشکال مورد استفاده قرار نگیرد.

بد:

    <h1>The "&" character</h1>

خوب:

    <h1>The &quot;&amp;&quot; character</h1>

### از ارجاع کاراکترهای عددی برای کاراکترهای کنترلی یا نامرئی استفاده کنید

این کاراکترها ها به راحتی با کاراکترهای دیگر اشتباه گرفته می شوند. و همچنین، مشخصات، تعریف یک نام قابل خواندن توسط انسان برای این کاراکترها را تضمین نمی کند.

بد:

    <p>This book can read in 1 hour.</p>

خوب:

    <p>This book can read in 1&#xA0;hour.</p>

### دور محتویات کامنت ها فاصله قرار دهید

برخی از کاراکترها را نمی توان بلافاصله پس از باز شدن کامنت یا قبل از بسته شدن کامنت استفاده کرد.

بد:

    <!--This section is non-normative-->

خوب:

    <!-- This section is non-normative -->

### تگ بسته شدن را حذف نکنید

من فکر می کنم شما قانون حذف تگ بسته را درک نمی کنید.

بد:

    <html>
      <body>
        ...

خوب:

    <html>
      <body>
        ...
      </body>
    </html>

### فرمت عنصر خالی را با هم ترکیب نکنید

سازگاری کلید خوانایی است.

بد:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

خوب:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

### دور تگ ها و مقادیر مشخصه ها فاصله سفید قرار ندهید

هیچ دلیلی برای این کار وجود ندارد.

بد:

    <h1 class=" title " >HTML Best Practices</h1>

خوب:

    <h1 class="title">HTML Best Practices</h1>

### بزرگ و کوچک بودن کاراکترها را ترکیب نکنید

این هم باعث ثبات می شود.

بد:

    <a HREF="#general">General</A>

خوب:

    <a href="#general">General</a>

همینطور خوب:

    <A HREF="#general">General</A>

### گیومه ها را با هم ترکیب نکنید

مانند بالا.

بد:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

خوب:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### مشخصه ها را با دو یا چند فاصله سفید از هم جدا نکنید

قانون قالب بندی عجیب شما، کسی را گیج می کند.

بد:

    <input   name="q"  type="search">

خوب:

    <input name="q" type="search">

### مقدار مشخصه بولی را حذف کنید

نوشتنش آسان است، اینطور نیست؟

بد:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

خوب:

    <audio autoplay src="/audio/theme.mp3">

### فضاهای نام را حذف کنید

SVG و MathML را می توان مستقیماً در سند HTML استفاده کرد.

بد:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

خوب:

    <svg>
      ...
    </svg>

### Don’t use XML attributes

ما یک سند HTML می نویسیم.

بد:

    <span lang="ja" xml:lang="ja">...</span>

خوب:

    <span lang="ja">...</span>

### مشخصه های `data-*`، Microdata و RDFa Lite را با مشخصه های رایج ترکیب نکنید

یک رشته برچسب می تواند بسیار پیچیده باشد. این قانون ساده به خواندن چنین رشته برچسبی کمک می کند.

بد:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

خوب:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### معنای ARIA ضمنی پیش‌فرض را ترجیح دهید

برخی از عناصر به طور ضمنی یک «نقش» ARIA در یک سند HTML دارند، آنها را مشخص نکنید.

بد:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

خوب:

    <nav>
      ...
    </nav>

    <hr>

## عنصر ریشه (root element)

### مشخصه "lang" را اضافه کنید

مشخصه "lang" به ترجمه یک سند HTML کمک می کند.

بد:

    <html>

خوب:

    <html lang="en-US">

### مقدار مشخصه «lang» را تا حد امکان کوتاه نگه دارید

ژاپنی فقط در ژاپن استفاده می شود. بنابراین کد کشور ضروری نیست.

بد:

    <html lang="ja-JP">

خوب:

    <html lang="ja">

### تا حد امکان از `data-*` اجتناب کنید

یک مشخصه مناسب می تواند توسط مرورگرها به درستی مدیریت شود.
بد:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

خوب:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## فراداده سند

### عنصر `title` را اضافه کنید

یک مقدار برای عنصر `title` توسط برنامه های مختلف, نه تنها یک مرورگر, استفاده می شود.

بد:

    <head>
      <meta charset="UTF-8">
    </head>

خوب:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### از عنصر `base` استفاده نکنید

یک مسیر یا URL مطلق هم برای توسعه دهندگان و هم برای کاربران ایمن تر است.

بد:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

خوب:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>

### نوع MIME منابع لینک شده جزئی را مشخص کنید

این یک اشاره است که چگونه برنامه این منبع را مدیریت می کند.

بد:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

خوب:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### به `favicon.ico` لینک ندهید

تقریباً همه مرورگرها `/favicon.ico` را به صورت خودکار و ناهمزمان دریافت می کنند.

بد:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

خوب:

    <!-- Place `favicon.ico` in the root directory. -->

### لینک `apple-touch-icon` را اضافه کنید

یک مسیر درخواست پیش‌فرض برای آیکون لمسی، ناگهان تغییر کرد.

بد:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

خوب:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### ویژگی `title` را به استایل شیت های جایگزین اضافه کنید

یک برچسب قابل خواندن توسط انسان به افراد در انتخاب استایل شیت مناسب کمک می کند.

بد:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

خوب:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### برای URL، از عنصر `link` استفاده کنید

مقدار مشخصه `href` را می توان به عنوان URL در نظر گرفت.

بد:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

خوب:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>

### رمزگذاری کاراکتر سند را مشخص کنید

هنوز در همه مرورگرها UTF-8 پیش فرض نیست.

بد:

    <head>
      <title>HTML Best Practices</title>
    </head>

خوب:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### از قالب رمزگذاری کاراکتر قدیمی استفاده نکنید

هدرهای HTTP باید توسط یک سرور مشخص شوند، ساده باشند.

بد:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

خوب:

    <meta charset="UTF-8">

### ابتدا رمزگذاری کاراکتر را مشخص کنید

مشخصات نیاز دارد که رمزگذاری کاراکتر در 1024 بایت اول سند مشخص شود.

بد:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

خوب:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>

### از UTF-8 استفاده کنید

با استفاده از UTF-8، می توانید از اموجی استفاده کنید.

بد:

    <meta charset="Shift_JIS">

خوب:

    <meta charset="UTF-8">

### مشخصه `type` را برای CSS حذف کنید

در HTML، مقدار پیش‌فرض مشخصه `type` عنصر `style` ،`text/css` است.

بد:

    <style type="text/css">
      ...
    </style>

خوب:

    <style>
      ...
    </style>

### محتوای عنصر `style` را کامنت نکنید

این روش برای مرورگر قدیمی است.

بد:

    <style>
    <!--
      ...
      -->
    </style>

خوب:

    <style>
      ...
    </style>

### تگ CSS و JavaScript را با هم ترکیب نکنید

گاهی اوقات عنصر `script` ساخت DOM را مسدود می کند.

بد:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

خوب:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

همچنین خوب:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

## بخش ها

### عنصر `body` را اضافه کنید

گاهی اوقات عنصر `body` در موقعیت غیرمنتظره ای توسط مرورگر جاگذاری می شود.

بد:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

خوب:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### عنصر `hgroup` را فراموش کنید

این عنصر زیاد استفاده نمی شود.

بد:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

خوب:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### از عنصر `address` فقط برای اطلاعات تماس استفاده کنید

عنصر `address` برای آدرس ایمیل، حساب شبکه اجتماعی، آدرس خیابان، شماره تلفن یا چیزی است که می توانید با آن در تماس باشید.

بد:

    <address>No rights reserved.</address>

خوب:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## گروه بندی مطالب

### در عنصر `pre` با خط جدید شروع نکنید

اولین خط جدید در مرورگرها نادیده گرفته می شود، اما خط دوم و بعدی ارائه می شوند.

بد:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

خوب:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### از عنصر مناسب در عنصر `blockquote` استفاده کنید

محتوای عنصر `blockquote` یک نقل قول است، نه تکه‌ای از کاراکترها.

بد:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

خوب:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### انتساب را مستقیماً در عنصر `blockquote` وارد نکنید

محتوای عنصر `blockquote` یک نقل قول است.

بد:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

خوب:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

همچنین خوب:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>

### در هر خط یک مورد از فهرست بنویسید

خوااااااااااااااااااااااااااااااندن یییییییییییییییییییییییییک

خططططططططططططططططط طوووووووووووووووووووووووووووووووولانی سخت است

بد:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

خوب:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>

### از ویژگی `type` برای عنصر `ol` استفاده کنید

گاهی اوقات نشانگر توسط محتویات در نزدیک ارجاع داده می شود. اگر نشانگر را با ویژگی `type` تغییر دهید، برای ارجاع در آن ایمن خواهید بود.

بد:

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

خوب:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

### از `dl` برای دیالوگ استفاده نکنید

عنصر `dl` به یک لیست مرتبط در HTML محدود شده است.

بد:

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

خوب:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>

### عنصر `figcaption` را به عنوان اولین یا آخرین فرزند عنصر `figure` قرار دهید

مشخصات، عنصر `figcaption` را در وسط عنصر `figure` مجاز نمی‌داند.

بد:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

خوب:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>

### Use `main` element

`main` element can be used wrapping contents.

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>

### Avoid `div` element as much as possible

`div` element is an element of last resort.

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>

## Text-level semantics

### Don’t split same link that can be grouped

`a` element can wrap almost all elements (except interactive elements like form
controls and `a` element itself).

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Use `download` attribute for downloading a resource

It will force browsers to download linked resource to the storage.

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>

### Use `rel`, `hreflang`, and `type` attribute if needed

These hints helps applications how handle linked resource.

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Clear link text

Link text should be the label of its linked resource.

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Don’t use `em` element for warning or caution

These are seriousness. So, `strong` element is more appropriate.

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>

### Avoid `s`, `i`, `b`, and `u` element as much as possible

These elements’ semantics is too difficult to humans.

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>

### Don’t put quotes to `q` element

Quotes are provided by the browser.

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”

### Add `title` attribute to `abbr` element

There is no other way to represent its expansion.

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>

### Markup `ruby` element verbosely

`ruby` element support is not completed across the modern browsers.

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Add `datetime` attribute to non-machine-readable `time` element

When `datetime` attribute does not present, the format of `time` element’s
content is restricted.

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Specify code language with `class` attribute prefixed with `language-`

This is not a formal way, but spec mentions this.

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Keep `kbd` element as simple as possible

Nesting `kbd` element is too difficult to humans.

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>

### Avoid `span` element as much as possible

`span` element is an element of last resort.

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices

### Break after `br` element

Line break should be needed where `br` element is used.

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Don’t use `br` element only for presentational purpose

`br` element is not for line breaking, it is for line breaks in the contents.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Edits

### Don’t stride `ins` and `del` element over other elements

Elements cannot be overflow other elements.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Embedded content

### Provide fallback `img` element for `picture` element

The support of `picture` element is not good yet.

Bad:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Good:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

### Add `alt` attrbute to `img` element if needed

`alt` attribute helps those who cannot process images or have image loading
disabled.

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Empty `alt` attribute if possible

If the image is supplemental, there is equivalent content somewhere in the near.

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help

### Omit `alt` attribute if possible

Sometimes you don’t know what text is suitable for `alt` attribute.

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

### Empty `iframe` element

There is some restriction in its content. Being empty is always safe.

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>

### Markup `map` element content

This content presents to a screen reader.

Bad:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Good:

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

### Provide fallback content for `audio` or `video` element

Fallback content is needed for newly introduced elements in HTML.

Bad:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Good:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

## Tabular data

### Write one cell per line

Long lines are hard to scan.

Bad:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Good:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>

### Use `th` element for header cell

There is no reason to avoid this.

Bad:

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

Good:

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

## Forms

### Wrap form control with `label` element

`label` element helps focusing form element.

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>

### Omit `for` attribute if possible

`label` element can contain some form elements.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>

### Use appropriate `type` attribute for `input` element

With appropriate `type`, a browser gives tiny features to the `input` element.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>

### Add `value` attribute to `input type="submit"`

The default label for submit button is not standarized across the browser and
languages.

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">

### Add `title` attribute to `input` element when there is `pattern` attribute

If input text does not match to `pattern` attribute, the value of `title`
attribute will be display as a hint.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Don’t use `placeholder` attribute for labeling

`label` element is for a label, `placeholder` attribute is for a short hint.

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Write one `option` element per line

Long lines are hard to scan.

Bad:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Good:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>

### Add `max` attribute to `progress` element

With `max` attribute, the `value` attribute can be written in an easy format.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>

### Add `min` and `max` attribute to `meter` element

With `min` and `max` attribute, the `value` attribute can be written in an easy
format.

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Place `legend` element as the first child of `fieldset` element

Spec requires this.

Bad:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Good:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Scripting

### Omit `type` attribute for JavaScript

In HTML, the default `type` attribute’s value of `script` element is
`text/javascript`.

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>

### Don’t comment out contents of `script` element

This ritual is for the old browser.

Bad:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Also bad:

    <script>
    <!--
      ...
    // -->
    </script>

Good:

    <script>
      ...
    </script>

### Don’t use script-injected `script` element

`async` attribute is the best for both simplicity and performance.

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="https://example.com/widget.js"></script>

## Other

### Indent consistently

Indentation is important for readability.

Bad:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Good:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Use absolute path for internal links

An absolute path works better on your localhost without internet connection.

Bad:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Good:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Don’t use protocol-relative URL for external resources

With protocol, you can load external resources reliably and safely.

Bad:

    <script src="//example.com/js/library.js">

Good:

    <script src="https://example.com/js/library.js">

## Contributors

- [@hail2u\_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)

## Translators

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)

## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)

</div>
