<div dir="rtl" align='right'>

Translations: [English (en)](README.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [فارسی (fa)](README.fa.md)

# HTML بهترین روش های نگارش

برای نوشتن اسناد مقیاس پذیر و قابل نگهداری HTML

## عمومی

### با DOCTYPE شروع کنید

برای فعال کردن حالت بدون نوع‌های عجیب و غریب٫ DOCTYPE الزامی است.

نامناسب:

<div dir="ltr" align='left'>

    <html>
      ...
    </html>

</div>

مناسب:

<div dir="ltr" align='left'>
  
    <!DOCTYPE html>
    <html>
      ...
    </html>
</div>

### از DOCTYPE قدیمی یا منسوخ استفاده نکنید

دیگر DOCTYPE برای DTD استفاده نمی‌شود، ساده باشید.

نامناسب:

<div dir="ltr" align='left'>

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

</div>

مناسب:

<div dir="ltr" align='left'>

    <!DOCTYPE html>
</div>

### از تعریف XML پرهیز کنید

آیا مطمئن هستید که می خواهید XHTML بنویسید؟

نامناسب:
<div dir="ltr" align='left'>


    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>
</div>

مناسب:
<div dir="ltr" align='left'>

    <!DOCTYPE html>
</div>

### تا حد امکان از ارجاع کاراکترها استفاده نکنید

اگر یک سند HTML با UTF-8 مینویسید، تقریباً همه کاراکترها (از جمله
Emoji) را می توان مستقیماً نوشت.

نامناسب:
<div dir="ltr" align='left'>

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
</div>

### عدم استفاده از `&` ، `<` ، `>` ، `'`، و `"` با ارجاع کاراکترهای نام‌گذاری شده

این کاراکترها باید همیشه برای یک سند HTML بدون اشکال مورد استفاده قرار نگیرد.

نامناسب:

<div dir="ltr" align='left'>

    <h1>The "&" character</h1>
</div>

مناسب:
<div dir="ltr" align='left'>

    <h1>The &quot;&amp;&quot; character</h1>
</div>

### از ارجاع کاراکترهای عددی برای کاراکترهای کنترلی یا نامرئی استفاده کنید

این کاراکترها ها به راحتی با کاراکترهای دیگر اشتباه گرفته می شوند. و همچنین، مشخصات، تعریف یک نام قابل خواندن توسط انسان برای این کاراکترها را تضمین نمی کند.

نامناسب:
<div dir="ltr" align='left'>

    <p>This book can read in 1 hour.</p>

</div>

مناسب:

<div dir="ltr" align='left'>

    <p>This book can read in 1&#xA0;hour.</p>

</div>

### دور محتویات کامنت ها فاصله قرار دهید

برخی از کاراکترها را نمی توان بلافاصله پس از باز شدن کامنت یا قبل از بسته شدن کامنت استفاده کرد.

نامناسب:
<div dir="ltr" align='left'>

    <!--This section is non-normative-->
</div>

مناسب:
<div dir="ltr" align='left'>

    <!-- This section is non-normative -->
</div>

### تگ بسته شدن را حذف نکنید

من فکر می کنم شما قانون حذف تگ بسته را درک نمی کنید.

نامناسب:
<div dir="ltr" align='left'>

    <html>
      <body>
        ...
</div>

مناسب:
<div dir="ltr" align='left'>

    <html>
      <body>
        ...
      </body>
    </html>

</div>

### فرمت عنصر خالی را با هم ترکیب نکنید

یکپارچگی و سازگاری کلید خوانایی است.

نامناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

</div>

مناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>
</div>

### دور تگ ها و مقادیر مشخصه ها فاصله سفید قرار ندهید

هیچ دلیلی برای این کار وجود ندارد.

نامناسب:
<div dir="ltr" align='left'>

    <h1 class=" title " >HTML Best Practices</h1>
</div>

مناسب:
<div dir="ltr" align='left'>

    <h1 class="title">HTML Best Practices</h1>
</div>

### بزرگ و کوچک بودن کاراکترها را ترکیب نکنید

این هم باعث ثبات می شود.

نامناسب:
<div dir="ltr" align='left'>

    <a HREF="#general">General</A>
</div>

مناسب:
<div dir="ltr" align='left'>

    <a href="#general">General</a>
</div>

همینطور مناسب:
<div dir="ltr" align='left'>

    <A HREF="#general">General</A>
</div>

### گیومه ها (quotation marks) را با هم ترکیب نکنید

مانند بالا.

نامناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src='/img/logo.jpg'>
</div>

مناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src="/img/logo.jpg">
</div>

### مشخصه ها را با دو یا چند فاصله سفید از هم جدا نکنید

قانون قالب بندی عجیب شما، سایر توسعه دهندگان را گیج می کند.

نامناسب:
<div dir="ltr" align='left'>

    <input   name="q"  type="search">
</div>

مناسب:
<div dir="ltr" align='left'>

    <input name="q" type="search">
</div>

### مقدار مشخصه بولییَن ( درست یا غلط در مقادیر منطقی) را حذف کنید

نوشتنش آسان است، اینطور نیست؟

نامناسب:
<div dir="ltr" align='left'>

    <audio autoplay="autoplay" src="/audio/theme.mp3">
</div>

مناسب:
<div dir="ltr" align='left'>

    <audio autoplay src="/audio/theme.mp3">
</div>

### فضاهای نام (Namespaces) را حذف کنید

می توان SVG و MathML را مستقیماً در سند HTML استفاده کرد.

نامناسب:
<div dir="ltr" align='left'>

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>
</div>

مناسب:
<div dir="ltr" align='left'>

    <svg>
      ...
    </svg>
</div>

### از ویژگی‌های XML استفاده نکنید.

ما یک سند HTML می نویسیم.

نامناسب:
<div dir="ltr" align='left'>

    <span lang="ja" xml:lang="ja">...</span>
</div>

مناسب:
<div dir="ltr" align='left'>

    <span lang="ja">...</span>
</div>

### مشخصه های `data-*`، Microdata و RDFa Lite را با مشخصه های رایج ترکیب نکنید

یک رشته تگ می تواند بسیار پیچیده باشد. این قانون ساده به خواندن چنین رشته تگ کمک می کند.

نامناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">
</div>

مناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
</div>

### معنای ARIA ضمنی پیش‌فرض را ترجیح دهید

برخی از عناصر به طور ضمنی یک «نقش» ARIA در یک سند HTML دارند، آنها را مشخص نکنید.

نامناسب:
<div dir="ltr" align='left'>

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">
</div>

مناسب:
<div dir="ltr" align='left'>

    <nav>
      ...
    </nav>

    <hr>
</div>

## عنصر ریشه (root element)

### مشخصه "lang" را اضافه کنید

مشخصه "lang" به ترجمه یک سند HTML کمک می کند.

نامناسب:
<div dir="ltr" align='left'>

    <html>
</div>

مناسب:
<div dir="ltr" align='left'>

    <html lang="en-US">
</div>

### مقدار مشخصه «lang» را تا حد امکان کوتاه نگه دارید

ژاپنی فقط در ژاپن استفاده می شود. بنابراین کد کشور ضروری نیست.

نامناسب:
<div dir="ltr" align='left'>

    <html lang="ja-JP">
</div>

مناسب:
<div dir="ltr" align='left'>

    <html lang="ja">
</div>

### تا حد امکان از `data-*` اجتناب کنید

یک مشخصه مناسب می تواند توسط مرورگرها به درستی مدیریت شود.

نامناسب:
<div dir="ltr" align='left'>

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>
</div>

مناسب:
<div dir="ltr" align='left'>

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>
</div>

## فراداده سند

### عنصر `title` را اضافه کنید

یک مقدار برای عنصر `title` توسط برنامه های مختلف, نه تنها یک مرورگر, استفاده می شود.

نامناسب:
<div dir="ltr" align='left'>

    <head>
      <meta charset="UTF-8">
    </head>
</div>

مناسب:
<div dir="ltr" align='left'>

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>
</div>

### از عنصر `base` استفاده نکنید

یک مسیر یا URL مطلق هم برای توسعه دهندگان و هم برای کاربران ایمن تر است.

نامناسب:
<div dir="ltr" align='left'>

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>
</div>

مناسب:
<div dir="ltr" align='left'>

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>
</div>

### نوع MIME منابع لینک شده جزئی را مشخص کنید

این یک اشاره است که چگونه برنامه این منبع را مدیریت می کند.

نامناسب:
<div dir="ltr" align='left'>

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">
</div>

مناسب:
<div dir="ltr" align='left'>

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">
</div>

### به `favicon.ico` لینک ندهید

تقریباً همه مرورگرها `/favicon.ico` را به صورت خودکار و ناهمزمان دریافت می کنند.

نامناسب:
<div dir="ltr" align='left'>

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">
</div>

مناسب:
<div dir="ltr" align='left'>

    <!-- Place `favicon.ico` in the root directory. -->
</div>

### لینک `apple-touch-icon` را اضافه کنید

یک مسیر درخواست پیش‌فرض برای آیکون لمسی، ناگهان تغییر کرد.

نامناسب:
<div dir="ltr" align='left'>

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->
</div>

مناسب:
<div dir="ltr" align='left'>

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">
</div>

### ویژگی `title` را به استایل شیت های جایگزین اضافه کنید

یک برچسب قابل خواندن توسط انسان به افراد در انتخاب استایل شیت مناسب کمک می کند.

نامناسب:
<div dir="ltr" align='left'>

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">
</div>

مناسب:
<div dir="ltr" align='left'>

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">
</div>

### برای URL، از عنصر `link` استفاده کنید

مقدار مشخصه `href` را می توان به عنوان URL در نظر گرفت.

نامناسب:
<div dir="ltr" align='left'>

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>
</div>

مناسب:
<div dir="ltr" align='left'>

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>
</div>

### رمزگذاری کاراکتر سند را مشخص کنید

هنوز در همه مرورگرها UTF-8 پیش فرض نیست.

نامناسب:
<div dir="ltr" align='left'>

    <head>
      <title>HTML Best Practices</title>
    </head>
</div>

مناسب:
<div dir="ltr" align='left'>

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>
</div>

### از قالب رمزگذاری کاراکتر قدیمی استفاده نکنید

هدرهای HTTP باید توسط یک سرور مشخص شوند، ساده باشند.

نامناسب:
<div dir="ltr" align='left'>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</div>

مناسب:
<div dir="ltr" align='left'>

    <meta charset="UTF-8">
</div>

### ابتدا رمزگذاری کاراکتر را مشخص کنید

مشخصات نیاز دارد که رمزگذاری کاراکتر در 1024 بایت اول سند مشخص شود.

نامناسب:
<div dir="ltr" align='left'>

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>
</div>

مناسب:
<div dir="ltr" align='left'>

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>
</div>

### از UTF-8 استفاده کنید

با استفاده از UTF-8، می توانید از اموجی استفاده کنید.

نامناسب:
<div dir="ltr" align='left'>

    <meta charset="Shift_JIS">
</div>

مناسب:
<div dir="ltr" align='left'>

    <meta charset="UTF-8">
</div>

### مشخصه `type` را برای CSS حذف کنید

در HTML، مقدار پیش‌فرض مشخصه `type` عنصر `style` ،`text/css` است.

نامناسب:
<div dir="ltr" align='left'>

    <style type="text/css">
      ...
    </style>
</div>

مناسب:
<div dir="ltr" align='left'>

    <style>
      ...
    </style>
</div>

### محتوای عنصر `style` را کامنت نکنید

این روش برای مرورگر قدیمی است.

نامناسب:
<div dir="ltr" align='left'>

    <style>
    <!--
      ...
      -->
    </style>
</div>

مناسب:
<div dir="ltr" align='left'>

    <style>
      ...
    </style>
</div>

### تگ CSS و JavaScript را با هم ترکیب نکنید

گاهی اوقات عنصر `script` ساخت DOM را مسدود می کند.

نامناسب:
<div dir="ltr" align='left'>

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>
</div>

مناسب:
<div dir="ltr" align='left'>

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
</div>

همینطور مناسب:
<div dir="ltr" align='left'>

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
</div>

## بخش ها

### عنصر `body` را اضافه کنید

گاهی اوقات عنصر `body` در موقعیت غیرمنتظره ای توسط مرورگر جاگذاری می شود.

نامناسب:
<div dir="ltr" align='left'>

    <html>
      <head>
        ...
      </head>
      ...
    </html>
</div>

مناسب:
<div dir="ltr" align='left'>

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>
</div>

### عنصر `hgroup` را فراموش کنید

این عنصر زیاد استفاده نمی شود.

نامناسب:
<div dir="ltr" align='left'>

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>
</div>

مناسب:
<div dir="ltr" align='left'>

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>
</div>

### از عنصر `address` فقط برای اطلاعات تماس استفاده کنید

عنصر `address` برای آدرس ایمیل، حساب شبکه اجتماعی، آدرس خیابان، شماره تلفن یا چیزی است که می توانید با آن در تماس باشید.

نامناسب:
<div dir="ltr" align='left'>

    <address>No rights reserved.</address>
</div>

مناسب:
<div dir="ltr" align='left'>

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>
</div>

## گروه بندی مطالب

### در عنصر `pre` با خط جدید شروع نکنید

اولین خط جدید در مرورگرها نادیده گرفته می شود، اما خط دوم و بعدی ارائه می شوند.

نامناسب:
<div dir="ltr" align='left'>

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>
</div>

مناسب:
<div dir="ltr" align='left'>

    <pre>&lt;!DOCTYPE html&gt;
    </pre>
</div>

### از المنت مناسب در المنت `blockquote` استفاده کنید

محتوای المنت `blockquote` یک نقل قول است، نه تکه‌ای از کاراکترها.

نامناسب:
<div dir="ltr" align='left'>

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>
</div>

مناسب:
<div dir="ltr" align='left'>

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
</div>

### انتساب را مستقیماً در المنت `blockquote` وارد نکنید

محتوای المنت `blockquote` یک نقل قول است.

نامناسب:
<div dir="ltr" align='left'>

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>
</div>

مناسب:
<div dir="ltr" align='left'>

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>
</div>

همینطور مناسب:
<div dir="ltr" align='left'>

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>
</div>

### در هر خط یک مورد از فهرست بنویسید

خواندن یک خط طولانی سخت است

نامناسب:
<div dir="ltr" align='left'>

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>
</div>

مناسب:
<div dir="ltr" align='left'>

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>
</div>

### از ویژگی `type` برای عنصر `ol` استفاده کنید

گاهی اوقات نشانگر توسط محتویات در نزدیک ارجاع داده می شود. اگر نشانگر را با ویژگی `type` تغییر دهید، برای ارجاع در آن ایمن خواهید بود.

نامناسب:
<div dir="ltr" align='left'>

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
</div>

مناسب:
<div dir="ltr" align='left'>

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>
</div>

### از `dl` برای دیالوگ استفاده نکنید

المنت `dl` به یک لیست مرتبط در HTML محدود شده است.

نامناسب:
<div dir="ltr" align='left'>

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
</div>

مناسب:
<div dir="ltr" align='left'>

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>
</div>

### المنت `figcaption` را به عنوان اولین یا آخرین فرزند المنت `figure` قرار دهید

مشخصات، المنت `figcaption` را در وسط المنت `figure` مجاز نمی‌داند.

نامناسب:
<div dir="ltr" align='left'>

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>
</div>

مناسب:
<div dir="ltr" align='left'>

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>
</div>

### از المنت `main` استفاده کنید

المنت `main` می تواند برای بسته بندی (wrapping) محتواها استفاده شود.

نامناسب:
<div dir="ltr" align='left'>

    <div id="content">
      ...
    </div>
</div>

مناسب:
<div dir="ltr" align='left'>

    <main>
      ...
    </main>
</div>

### تا آنجا که ممکن است از المنت `div` اجتناب کنید

المنت `div` آخرین راه حل است.

نامناسب:
<div dir="ltr" align='left'>

    <div class="chapter">
      ...
    </div>
</div>

مناسب:
<div dir="ltr" align='left'>

    <section>
      ...
    </section>
</div>

## معناشناسی در سطح متن

### پیوندی (link) را که می‌توان گروه‌بندی کرد، تقسیم نکنید


المنت `a` می تواند تقریباً همه المنت را پوشش دهد (به جز المنت تعاملی مانند کنترل های فرم و خود المنت `a`).

نامناسب:
<div dir="ltr" align='left'>

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>
</div>

### برای دانلود یک منبع از ویژگی `download` استفاده کنید

مرورگرها را مجبور می‌کند که منبع پیوند شده را به فضای ذخیره‌سازی دانلود کنند.

نامناسب:
<div dir="ltr" align='left'>

    <a href="/downloads/offline.zip">offline version</a>
</div>

مناسب:
<div dir="ltr" align='left'>

    <a download href="/downloads/offline.zip">offline version</a>
</div>

### در صورت نیاز از ویژگی های `rel`، `hreflang` و `type` استفاده کنید

این نکات به برنامه‌ها کمک می‌کند که چگونه منابع مرتبط را مدیریت کنند.

نامناسب:
<div dir="ltr" align='left'>

    <a href="/ja/pdf">Japanese PDF version</a>
</div>

مناسب:
<div dir="ltr" align='left'>

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>
</div>

### متن پیوند را پاک کنید

متن پیوند باید برچسب منبع پیوند شده آن باشد.

نامناسب:
<div dir="ltr" align='left'>

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>
</div>

### از المنت `em` برای هشدار یا احتیاط استفاده نکنید

اینها جدیت است. بنابراین، المنت `strong` مناسب تر است.

نامناسب:
<div dir="ltr" align='left'>

    <em>Caution!</em>
</div>

مناسب:
<div dir="ltr" align='left'>

    <strong>Caution!</strong>
</div>

### تا حد امکان از المنت `s` ، `i` ، `b` و `u` اجتناب کنید

معنای این المنت برای انسان بسیار دشوار است.

نامناسب:
<div dir="ltr" align='left'>

    <i class="icon-search"></i>
</div>

مناسب:
<div dir="ltr" align='left'>

    <span class="icon-search" aria-hidden="true"></span>
</div>

### نقل قول ها (quotation marks) را در المنت `q` قرار ندهید

نقل قول ها توسط مرورگر ارائه می شود.

نامناسب:
<div dir="ltr" align='left'>

    <q>“For writing maintainable and scalable HTML documents”</q>
</div>

مناسب:
<div dir="ltr" align='left'>

    <q>For writing maintainable and scalable HTML documents</q>
</div>

همینطور مناسب:
<div dir="ltr" align='left'>

    “For writing maintainable and scalable HTML documents”
</div>

### ویژگی `title` را به المنت `abbr` اضافه کنید

هیچ راه دیگری برای نشان دادن گسترش آن وجود ندارد.

نامناسب:
<div dir="ltr" align='left'>

    <abbr>HBP</abbr>
</div>

مناسب:
<div dir="ltr" align='left'>

    <abbr title="HTML Best Practices">HBP</abbr>
</div>

### نشانه گذاری المنت `ruby` به طور کامل

پشتیبانی از المنت `ruby` در مرورگرهای مدرن تکمیل نمی شود.

نامناسب:
<div dir="ltr" align='left'>

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>
</div>

مناسب:
<div dir="ltr" align='left'>

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>
</div>

### ویژگی `datetime` را به المنت `time` غیرقابل خواندن توسط ماشین اضافه کنید

هنگامی که ویژگی `datetime` ارائه نمی شود، قالب محتوای عنصر `time` محدود می شود.

نامناسب:
<div dir="ltr" align='left'>

    <time>Dec 19, 2014</time>
</div>

مناسب:
<div dir="ltr" align='left'>

    <time datetime="2014-12-19">Dec 19, 2014</time>
</div>

### زبان کد را با ویژگی `class` با پیشوند `language-` مشخص کنید

این یک روش رسمی نیست، اما مشخصات به این موضوع اشاره می کند.

نامناسب:
<div dir="ltr" align='left'>

    <code>&lt;!DOCTYPE html&gt;</code>
</div>

مناسب:
<div dir="ltr" align='left'>

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>
</div>

### المنت `kbd` تا حد امکان ساده نگه دارید

تودرتو کردن عنصر `kbd` برای انسان بسیار دشوار است.

نامناسب:
<div dir="ltr" align='left'>

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>
</div>

مناسب:
<div dir="ltr" align='left'>

    <kbd>Ctrl+F5</kbd>
</div>

### تا حد امکان از المنت `span` اجتناب کنید

المنت `span` آخرین گزینه است.

نامناسب:
<div dir="ltr" align='left'>

    HTML <span class="best">Best</span> Practices
</div>

مناسب:
<div dir="ltr" align='left'>

    HTML <em>Best</em> Practices
</div>

### شکستن خط بعد از المنت `br`

در جایی که از عنصر `br` استفاده می‌شود، شکست خط مورد نیاز است.

نامناسب:
<div dir="ltr" align='left'>

    <p>HTML<br>Best<br>Practices</p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p>HTML<br>
    Best<br>
    Practices</p>
</div>

###  از المنت `br` فقط برای هدف ارائه استفاده نکنید

المنت `br` برای شکستن خط نیست، بلکه برای شکستن خط در محتوا است.

نامناسب:
<div dir="ltr" align='left'>

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>
</div>

## ویرایش ها

### المنت `ins` و `del` را بر سایر المنت گام ندهید

المنت نمی توانند با المنت دیگر ادغام شوند.

نامناسب:
<div dir="ltr" align='left'>

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>
</div>

## محتوای تعبیه شده (Embedded)

### المنت `img` را برای المنت `picture` ارائه دهید

پشتیبانی از عنصر `picture` هنوز خوب نیست.

نامناسب:
<div dir="ltr" align='left'>

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>
</div>

مناسب:
<div dir="ltr" align='left'>

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>
</div>

### در صورت نیاز ویژگی `alt` را به المنت `img` اضافه کنید

ویژگی `alt` به کسانی که نمی توانند تصاویر را پردازش کنند یا بارگذاری تصویر را غیرفعال کرده اند، کمک می کند.

نامناسب:
<div dir="ltr" align='left'>

    <img src="/img/logo.png">
</div>

مناسب:
<div dir="ltr" align='left'>

    <img alt="HTML Best Practices" src="/img/logo.png">
</div>

### در صورت امکان، ویژگی `alt` را خالی کنید

اگر تصویر مکمل باشد، محتوایی معادل آن در جایی نزدیک وجود دارد.

نامناسب:
<div dir="ltr" align='left'>

    <img alt="Question mark icon" src="/img/icon/help.png"> Help
</div>

مناسب:
<div dir="ltr" align='left'>

    <img alt="" src="/img/icon/help.png"> Help
</div>

### در صورت امکان ویژگی `alt` را حذف کنید

گاهی اوقات نمی دانید چه متنی برای ویژگی `alt` مناسب است.

نامناسب:
<div dir="ltr" align='left'>

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">
</div>

مناسب:
<div dir="ltr" align='left'>

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)
</div>

### المنت `iframe` خالی است

در محتوای آن محدودیت هایی وجود دارد. خالی بودن همیشه امن است.

نامناسب:
<div dir="ltr" align='left'>

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>
</div>

مناسب:
<div dir="ltr" align='left'>

    <iframe src="/ads/default.html"></iframe>
</div>

### محتوای المنت `map` نشانه گذاری

این محتوا به یک صفحه خوان ارائه می شود.

نامناسب:
<div dir="ltr" align='left'>

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>
</div>

مناسب:
<div dir="ltr" align='left'>

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
</div>

### محتوای بازگشتی را برای المنت `audio` یا `video` ارائه کنید

محتوای بازگشتی برای عناصر تازه معرفی شده در HTML مورد نیاز است.

نامناسب:
<div dir="ltr" align='left'>

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>
</div>

مناسب:
<div dir="ltr" align='left'>

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>
</div>

## داده های جدولی

### در هر خط یک سلول بنویسید

اسکن خطوط طولانی سخت است.

نامناسب:
<div dir="ltr" align='left'>

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>
</div>

مناسب:
<div dir="ltr" align='left'>

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>
</div>

### از المنت `th` برای سلول سرصفحه استفاده کنید

هیچ دلیلی برای اجتناب از این وجود ندارد.

نامناسب:
<div dir="ltr" align='left'>

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
</div>

مناسب:
<div dir="ltr" align='left'>

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
</div>

## فرم ها

### بسته بندی کنترل فرم با المنت `label`.

المنت `label` به تمرکز المنت فرم کمک می کند.

نامناسب:
<div dir="ltr" align='left'>

    <p>Query: <input name="q" type="text"></p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <p><label>Query: <input name="q" type="text"></label></p>
</div>

### در صورت امکان ویژگی `for` را حذف کنید

عنصر `label` می تواند حاوی برخی از عناصر فرم باشد.

نامناسب:
<div dir="ltr" align='left'>

    <label for="q">Query: </label><input id="q" name="q" type="text">
</div>

مناسب:
<div dir="ltr" align='left'>

    <label>Query: <input name="q" type="text"></label>
</div>

### از ویژگی `type` مناسب برای عنصر `input` استفاده کنید

با `type` مناسب، یک مرورگر ویژگی های کوچکی را به عنصر `input` می دهد.

نامناسب:
<div dir="ltr" align='left'>

    <label>Search keyword: <input name="q" type="text"></label>
</div>

مناسب:
<div dir="ltr" align='left'>

    <label>Search keyword: <input name="q" type="search"></label>
</div>

### ویژگی `value` را به `input type="submit"` اضافه کنید

برچسب پیش‌فرض دکمه ارسال در مرورگر و زبان‌ها استاندارد نشده است.

نامناسب:
<div dir="ltr" align='left'>

    <input type="submit">
</div>

مناسب:
<div dir="ltr" align='left'>

    <input type="submit" value="Search">
</div>

###  وقتی ویژگی `pattern`  وجود دارد، ویژگی `title` را به عنصر `input` اضافه کنید

اگر متن ورودی با ویژگی `pattern` مطابقت نداشته باشد، مقدار ویژگی `title` به عنوان یک اشاره نمایش داده می شود.

نامناسب:
<div dir="ltr" align='left'>

    <input name="security-code" pattern="[0-9]{3}" type="text">
</div>

مناسب:
<div dir="ltr" align='left'>

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
</div>

### از ویژگی `placeholder` برای برچسب‌گذاری استفاده نکنید

عنصر `label` برای یک برچسب است، ویژگی `placeholder` برای یک اشاره کوتاه است.

نامناسب:
<div dir="ltr" align='left'>

    <input name="email" placeholder="Email" type="text">
</div>

مناسب:
<div dir="ltr" align='left'>

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
</div>

### در هر خط یک المنت `option` بنویسید

خوانایی خطوط طولانی سخت است.

نامناسب:
<div dir="ltr" align='left'>

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>
</div>

مناسب:
<div dir="ltr" align='left'>

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>
</div>

### ویژگی `max` را به عنصر `progress` اضافه کنید

با ویژگی `max`، ویژگی `value` را می توان در قالبی آسان نوشت.

نامناسب:
<div dir="ltr" align='left'>

    <progress value="0.5"> 50%</progress>
</div>

مناسب:
<div dir="ltr" align='left'>

    <progress max="100" value="50"> 50%</progress>
</div>

### ویژگی `min` و `max` را به المنت `meter` اضافه کنید

با ویژگی `min` و `max`، ویژگی `value` را می توان در قالبی آسان نوشت.

نامناسب:
<div dir="ltr" align='left'>

    <meter value="0.5"> 512GB used (1024GB total)</meter>
</div>

مناسب:
<div dir="ltr" align='left'>

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>
</div>

### المنت `legend` را به عنوان اولین فرزند المنت `fieldset` قرار دهید

به این تکه نیاز دارد.

نامناسب:
<div dir="ltr" align='left'>

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>
</div>

مناسب:
<div dir="ltr" align='left'>

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>
</div>

## اسکریپت ها

### ویژگی `type` را برای جاوا اسکریپت حذف کنید

در HTML، مقدار پیش‌فرض ویژگی `type` المنت ٫`script` مقدار
`text/javascript` است.

نامناسب:
<div dir="ltr" align='left'>

    <script type="text/javascript">
      ...
    </script>
</div>

مناسب:
<div dir="ltr" align='left'>

    <script>
      ...
    </script>
</div>

### محتوای المنت `script` را به صورت کامنت نگذارید.

این روش برای مرورگر قدیمی است.

نامناسب:
<div dir="ltr" align='left'>

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>
</div>

همینطور مناسب:
<div dir="ltr" align='left'>

    <script>
    <!--
      ...
    // -->
    </script>
</div>

مناسب:
<div dir="ltr" align='left'>

    <script>
      ...
    </script>
</div>

### از عنصر `script` تزریق شده با اسکریپت استفاده نکنید

ویژگی `async` هم برای سادگی و هم برای عملکرد بهترین است.

نامناسب:
<div dir="ltr" align='left'>

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>
</div>

مناسب:
<div dir="ltr" align='left'>

    <script async defer src="https://example.com/widget.js"></script>
</div>

## سایر موارد

### تورفتگی مداوم

تورفتگی برای خوانایی مهم است.

نامناسب:
<div dir="ltr" align='left'>

    <html>
     <head>
       ...
     </head>
      <body>
        ...
      </body>
    </html>
</div>

مناسب:
<div dir="ltr" align='left'>

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>
</div>

### برای لینک های داخلی از مسیر مطلق (absolute path) استفاده کنید

یک مسیر مطلق در هاست محلی شما بدون اتصال به اینترنت بهتر کار می کند.

نامناسب:
<div dir="ltr" align='left'>

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>
</div>

مناسب:
<div dir="ltr" align='left'>

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>
</div>

### از URL مرتبط با پروتکل برای منابع خارجی استفاده نکنید

با پروتکل، می توانید منابع خارجی را به طور قابل اعتماد و ایمن بارگیری کنید.

نامناسب:
<div dir="ltr" align='left'>

    <script src="//example.com/js/library.js">
</div>

مناسب:
<div dir="ltr" align='left'>

    <script src="https://example.com/js/library.js">
</div>

## نویسندگان
<div dir="ltr" align='left'>

- [@hail2u\_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)
</div>

## مترجمین
<div dir="ltr" align='left'>

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
- [@faridvatani](https://github.com/faridvatani)
- [@smhosseini96](https://github.com/smhosseini96)

</div>

## مجوز
<div dir="ltr" align='left'>

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
</div>

</div>
