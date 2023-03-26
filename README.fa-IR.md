Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md) · [فارسی](README.fa-IR.md)

# بهترین شیوه ها و استاندارد های نوشتن HTML

برای نوشتن صفحات و اسناد HTML مقیاس پذیر و قابل توسعه


## عمومی


### با DOCTYPE شروع کنید

برای فعال کردن حالت استاندارد و بدون تناقض، استفاده از DOCTYPE الزامی است.

بد:

    <html>
      ...
    </html>

خوب:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### از DOCTYPE های قدیمی یا منسوخ استفاده نکنید

از DOCTYPE دیگر برای تعیین نوع سند یا همان (DTD) استفاده نمی‌شود؛ باید به صورت ساده باشد.

بد:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

خوب:

    <!DOCTYPE html>


### از علامت ها و مشخصه های XML استفاده نکنید

آیا مطمئن هستید که می خواهید XHTML بنویسید؟

بد:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

خوب:

    <!DOCTYPE html>


### تا حد امکان از ارجاع کاراکتر ها استفاده نکنید

اگر سند HTML را تحت رمزگذاری کاراکتر UTF-8 بنویسید، تقریباً همه‌ی کاراکتر ها (از جمله ایموجی ها) را می‌توان به طور مستقیم نوشت.

بد:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

خوب:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### به جای استفاده‌ مستقیم از کاراکتر های `&` ، `<` ، `>` ، `'` و `"` از ارجاع کاراکتر های غیرمستقیم آنها استفاده کنید

برای داشتن یک سند HTML بدون اشکال، همیشه باید از استفاده مستقیم چنین کاراکتر هایی پرهیز کرد.

بد:

    <h1>The "&" character</h1>

خوب:

    <h1>The &quot;&amp;&quot; character</h1>


### از ارجاع کاراکترهای عددی برای کاراکترهای کنترلی یا نامرئی استفاده کنید

این کاراکتر ها به راحتی با کاراکتر های دیگر اشتباه گرفته می‌شوند. همچنین مرجع اصلی قواعد (spec) در خصوص این کاراکتر ها تضمینی برای تعریف یک نام خوانا برای انسان ها نمی‌کند.

بد:

    <p>This book can read in 1 hour.</p>

خوب:

    <p>This book can read in 1&#xA0;hour.</p>


### اطراف محتویات کامنت ها فاصله بگذارید

بعضی از کاراکتر ها نمی‌توانند بلافصله پس از باز کردن بلاک کامنت یا قبل از بستن آن استفاده شوند.

بد:

    <!--This section is non-normative-->

خوب:

    <!-- This section is non-normative -->


### تگ های بسته را جا نیندازید

فکر نمی‌کنم قاعده ای برای جا انداختن تگ های بسته نیاز داشته باشید.

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


### ساختار تگ های باز را بهم نزنید

ثبات ساختار، کلید خوانایی است.

بد:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

خوب:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### اطراف نام تگ ها و مقدار صفت ها فضای خالی نگذارید

هیچ دلیلی برای انجام این کار نیست.

بد:

    <h1 class=" title " >HTML Best Practices</h1>

خوب:

    <h1 class="title">HTML Best Practices</h1>


### حالت بزرگی و کوچکی کاراکتر ها را بهم نزنید

این مورد نیز به ثبات ساختار کد کمک می‌کند.

بد:

    <a HREF="#general">General</A>

خوب:

    <a href="#general">General</a>

همچنین خوب:

    <A HREF="#general">General</A>


### حالت بزرگی و کوچکی گیومه‌ ها را بهم نزنید

مشابه مورد قبلی.

بد:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

خوب:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### صفت ها را با دو فاصله یا بیشتر از آن جدا نکنید

قاعده فرمت کردن عجیب شما باعث گمراهی دیگران می‌شود.

بد:

    <input   name="q"  type="search">

خوب:

    <input name="q" type="search">


### مقدار صفات صحیح/غلط (boolean) را حذف کنید

نوشتن اینگونه راحت است؛ اینطور نیست؟

بد:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

خوب:

    <audio autoplay src="/audio/theme.mp3">


### فضا های نام‌گذاری را حذف کنید

دو ساختار SVG و MathML می‌توانند به طور مستقیم در سند HTML استفاده شوند.

بد:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

خوب:

    <svg>
      ...
    </svg>


### صفات XML را قاطی نکنید

چیزی که ما می‌نویسیم سند HTML است.

بد:

    <span lang="ja" xml:lang="ja">...</span>

خوب:

    <span lang="ja">...</span>


### صفات `*-data` ، میکرودیتا (Microdata) و RDFa Lite را با صفات معمولی قاطی نکنید

یک تگ می‌تواند بسیار پیچیده باشد. این قاعده ساده به خوانایی این تگ ها کمک می‌کند.

بد:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

خوب:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### صفات ARIA ضمنی و پیش‌فرص را ترجیح دهید

در سند HTML، برخی از عناصر نقش ARIA دارند؛ نیازی به مشخص کردن آنها نیست.

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


## عنصر اصلی (`<html></html>`)


### صفت `lang` را اضافه کنید

صفت `lang` به ترجمه کردن اسناد HTML کمک می‌کند.

بد:

    <html>

خوب:

    <html lang="en-US">


### مقدار صفت `lang` را تا حد امکان کوتاه نگه دارید

زبان ژاپنی فقط در کشور ژاپن صحبت می‌شود؛ پس اضافه کردن کد کشور نیازی نیست.

بد:

    <html lang="ja-JP">

خوب:

    <html lang="ja">


### تا حد امکان از صفت `*-data` استفاده نکنید

یک صفت مناسب می‌تواند به درستی توسط مرورگر ها مدیریت شود.

بد:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

خوب:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## متادیتای سند


### صفت `title` را اضافه کنید

یک مقدار برای صفت `title`، نه تنها توسط مرورگر، بلکه توسط برنامه های مختلفی استفاده می‌شود.

بد:

    <head>
      <meta charset="UTF-8">
    </head>

خوب:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### تا حد امکان از عنصر `base` استفاده نکنید

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


### نوع MIME منابع مرتبط را مشخص کنید

این یک اشاره است که چگونه برنامه این منبع را مدیریت کند.

بد:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

خوب:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### به `favicon.ico` پیوند ندهید

تقریباً همه مرورگر ها `favicon.ico/` را به صورت خودکار و غیر‌هم‌زمان (async) واکشی می‌کنند.

بد:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

خوب:

    <!-- Place `favicon.ico` in the root directory. -->


### لینک `apple-touch-icon` را اضافه کنید

یک مسیر درخواست پیش‌فرض برای نماد لمسی ناگهان تغییر کرد.

بد:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

خوب:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### صفت `title` را به فایل های استایل (stylesheet) جایگزین اضافه کنید

یک برچسب قابل خواندن توسط انسان، به افراد در انتخاب فایل استایل (stylesheet) مناسب کمک می کند.

بد:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

خوب:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### برای URL از عنصر `link` استفاده کنید

مقدار صفت `href` می‌تواند به صورت URL تبدیل شود.

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


### نوع رمزگذاری کاراکتر های سند را مشخص کنید

هنوز UTF-8 در همه مرورگر ها پیش‌فرض نیست.

بد:

    <head>
      <title>HTML Best Practices</title>
    </head>

خوب:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### از فرمت های قدیمی رمزگذاری کاراکتر استفاده نکنید

هدر های HTTP باید توسط یک سرور مشخص شوند؛ پس از فرمت ساده استفاده کنید.

بد:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

خوب:

    <meta charset="UTF-8">


### نوع رمزگذاری کاراکتر را در ابتدای کار مشخص کنید

مرجع اصلی قواعد (spec) الزامی می‌داند که رمزگذاری کاراکتر در ۱۰۲۴ بایت اول سند مشخص شود.

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

با UTF-8 می‌توانید از ایموجی ها استفاده کنید.

بد:

    <meta charset="Shift_JIS">

خوب:

    <meta charset="UTF-8">


### برای CSS از صفت `type` صرف نظر کنید

در HTML مقدار پیش‌فرض صفت `type` در عنصر `style` برابر با `text/css` است.

بد:

    <style type="text/css">
      ...
    </style>

خوب:

    <style>
      ...
    </style>


### محتوای عنصر `style` را کامنت گذاری نکنید

این روش برای مرورگر های قدیمی است.

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


### محل تگ های CSS و JavaScript را در کد قاطی نکنید

گاهی اوقات عنصر `script` جلوی ساختن DOM را می‌گیرد.

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


## بخش‌بندی ها


### عنصر `body` را اضافه کنید

گاهی اوقات تگ `body` در موقعیت غیر منتظره ای توسط مرورگر قرار داده می‌شود.

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

این عنصر کاربرد چندانی ندارد.

بد:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

خوب:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### عنصر `address` را فقط برای اطلاعات تماس استفاده کنید

عنصر `address` برای آدرس ایمیل، حساب شبکه اجتماعی، آدرس خیابان، شماره تلفن یا چیزی است که می‌توانید با آن تماس بگیرید.

بد:

    <address>No rights reserved.</address>

خوب:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## گروه‌بندی مطالب


### در عنصر `pre` با خط جدید شروع نکنید

اولین خط جدید در مرورگرها نادیده گرفته می شود، اما خط دوم و خط بعدی پردازش می‌شوند.

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


### انتساب نقل قول را مستقیماً در عنصر `blockquote` وارد نکنید

محتوای عنصر `blockquote` فقط نقل قول است.

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


### در هر خط یک مورد از لیست را بنویسید

خوااااااااااااااااااااااااااااااااااااااااااااااااااااااااندن متن طولاااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااانی
 سخت است.

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


### برای عنصر `ol` از صفت `type` استفاده کنید

گاهی نشانگر توسط محتویات نزدیک خود ارجاع داده می‌شود.
 با تغییر نشانگر با صفت `type`، برای ارجاع مشکلی نخواهید داشت.

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


### برای دیالوگ از `dl` استفاده نکنید

عنصر `dl` صرفاً محدود به یک لیست مرتبط در HTML است.

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

مرج اصلی قواعد (spec) عنصر `figcaption` را در وسط عنصر `figure` مجاز نمی‌داند.

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


### از عنصر `main` استفاده کنید

عنصر `main` را می‌توان به عنوان قالبی برای اطراف محتوا استفاده کرد.

بد:

    <div id="content">
      ...
    </div>

خوب:

    <main>
      ...
    </main>


### تا حد امکان از استفاده از عنصر `div` بپرهیزید

عنصر `div` باید به عنوان آخرین راه حل مورد استفاده قرار گیرد.

بد:

    <div class="chapter">
      ...
    </div>

خوب:

    <section>
      ...
    </section>


## عناصر معنایی برای محتوای متنی


### لینکی که می‌توان گروه بندی کرد را به دو یا چند بخش تقسیم نکنید

عنصر `a` می‌تواند تقریباً به عنوان قالبی برای همه عناصر باشد (به جز عناصر تعاملی مانند اجزای یک فرم و خود عنصر `a`).

بد:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

خوب:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### از صفت `donwload` برای دانلود کردن منابع استفاده کنید

مرورگرها را مجبور می‌کند که منبع پیوند شده را در فضای ذخیره‌سازی دانلود کنند.

بد:

    <a href="/downloads/offline.zip">offline version</a>

خوب:

    <a download href="/downloads/offline.zip">offline version</a>


### در صورت نیاز از صفات `type`، `hreflang` و `rel` استفاده کنید

این نکات در رابطه با چگونگی مدیریت منابع مرتبط کمک می‌کنند.

بد:

    <a href="/ja/pdf">Japanese PDF version</a>

خوب:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### متن لینک واضح

متن لینک باید برچسب منبع پیوند شده به آن باشد.

بد:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

خوب:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### از عنصر `em` برای هشدار یا احتیاط استفاده نکنید

این موارد جدیت را نشان می‌دهندن. در نتیجه عنصر `strong` مناسب تر است.

بد:

    <em>Caution!</em>

خوب:

    <strong>Caution!</strong>


### تا حد امکان از عناصر `s` ، `i` ، `b` و `u` استفاده نکنید

معنای این عناصر برای انسان های بسیار دشوار است.

بد:

    <i class="icon-search"></i>

خوب:

    <span class="icon-search" aria-hidden="true"></span>


### نقل قول ها را داخل عنصر `q` نگذارید

گیومه ها توسط مرورگر قرار داده می‌شوند.

بد:

    <q>“For writing maintainable and scalable HTML documents”</q>

خوب:

    <q>For writing maintainable and scalable HTML documents</q>

همچنین خوب:

    “For writing maintainable and scalable HTML documents”


### صفت `title` را به عنصر `abbr` اضافه کنید

هیچ راه دیگری برای نشان دادن گسترش (اطلاعات اضافه) آن وجود ندارد.

بد:

    <abbr>HBP</abbr>

خوب:

    <abbr title="HTML Best Practices">HBP</abbr>


### عنصر `ruby` را به طور کامل نشانه گذاری کنید

عنصر `ruby` از پشتیبانی کاملی در میان مرورگر ها برخوردار نمی‌باشد.

بد:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

خوب:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### صفت `datetime` را به عناصر `time` با مقدار ناخوانا برای دستگاه (ماشین) اضافه کنید

هنگامی که صفت `datetime` وجود نداشته باشد، فرمت محتوای عنصر `time` محدود می‌شود.

بد:

    <time>Dec 19, 2014</time>

خوب:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### زبان کد را با صفت `class` و مقداری با پیشوند `-language` مشخص کنید

این یک روش رسمی نیست؛ اما مرجع اصلی قواعد (spec) به آن اشاره کرده است.

بد:

    <code>&lt;!DOCTYPE html&gt;</code>

خوب:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### عنصر `kbd` را تا حد امکان ساده نگه دارید

تودرتو کردن عنصر `kbd` برای انسان بسیار دشوار است.

بد:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

خوب:

    <kbd>Ctrl+F5</kbd>


### تا حد ممکن از استفاده از عنصر `span` بپرهیزید

عنصر `span` باید به عنوان آخر راه حل مورد استفاده قرار گیرد.

بد:

    HTML <span class="best">Best</span> Practices

خوب:

    HTML <em>Best</em> Practices


### شکستن خط بعد از عنصر `br`

در جایی که از عنصر `br` استفاده می‌شود، شکستن خط مورد نیاز است.

بد:

    <p>HTML<br>Best<br>Practices</p>

خوب:

    <p>HTML<br>
    Best<br>
    Practices</p>


### از عنصر `br` فقط با هدف ارائه مطالب استفاده نکنید

عنصر `br` صرفاً برای شکستن خط نیست، بلکه برای شکستن خط در محتوا است.

بد:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

خوب:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## ویرایش ها


### عناصر `ins` و `del` را بر سایر عناصر اولویت ندهید

این عناصر نمی‌توانند به عنوان پوششی همراه با شکستن خط برای عناصر دیگر قرار بگیرند.

بد:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

خوب:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## مطالب جدا شده


### عنصر `img` را به عنوان عنصر جایگزین (در صورت نیاز) برای عنصر `picture` قرار دهید

عنصر `picture` هنوز به خوبی در همه مرورگر های پشتیبانی نمی‌شود.

بد:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

خوب:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### در صورت نیاز، صفت `alt` را برای عنصر `img` اضافه کنید

صفت `alt` به کسانی که نمی توانند تصاویر را پردازش کنند یا دانلود تصویر را غیر فعال کرده اند  کمک می کند.

بد:

    <img src="/img/logo.png">

خوب:

    <img alt="HTML Best Practices" src="/img/logo.png">


### در صورت امکان صفت `alt` را خالی بگذارید

اگر تصویر فقط مکمل باشد، پس محتوایی معادل آن در همان نزدیکی وجود دارد.

بد:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

خوب:

    <img alt="" src="/img/icon/help.png"> Help


### اگر امکانش هست از صفت `alt` صرف نظر کنید

گاهی اوقات نمی دانید چه متنی برای ویژگی `alt` مناسب است.

بد:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

خوب:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### عنصر `iframe` خالی

محدودیت هایی در محتوای آن وجود دارد؛ پس خالی بودن آن همیشه راهی مطمئن است.

بد:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

خوب:

    <iframe src="/ads/default.html"></iframe>


### محتوای عنصر `map` را نشانه گذاری کنید

این محتوا به یک صفحه خوان ارائه می شود.

بد:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

خوب:

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


### محتوای بازگشتی (در صورت پشتیبانی نشدن) برای عناصر `audio` و `video` قرار دهید

محتوای بازگشتی برای عناصر تازه معرفی شده در HTML مورد نیاز است.

بد:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

خوب:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## داده های جدولی


### در هر خط تنها یک خانه از جدول را بنویسید

اسکن کردن و خواندن خط های طولانی دشوار است.

بد:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

خوب:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### برای خانه هایی از جدول که سرفصل هستند از عنصر `th` استفاده کنید

هیچ دلیلی برای اجتناب از این کار نیست.

بد:

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

خوب:

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


## فرم ها


### اجزای فرم را داخل عنصر `label` قرار دهید

عنصر `label` به فوکوس کردن و انتخاب اجزای فرم توسط کاربر کمک می‌کند.

بد:

    <p>Query: <input name="q" type="text"></p>

خوب:

    <p><label>Query: <input name="q" type="text"></label></p>


### در صورت امکان از صفت `for` صرف نظر کنید

عنصر `label` خودش می‌تواند حاوی برخی از اجزای فرم باشد.

بد:

    <label for="q">Query: </label><input id="q" name="q" type="text">

خوب:

    <label>Query: <input name="q" type="text"></label>


### از صفت `type` مناسب برای عنصر `input` استفاده کنید

در صورت وجود صفت `type` مناسب، مرورگر ویژگی های کوچکی را به عنصر `input` می‌دهد.

بد:

    <label>Search keyword: <input name="q" type="text"></label>

خوب:

    <label>Search keyword: <input name="q" type="search"></label>


### صفت `value` را به عنصر `</ "input type="submit>` اضافه کنید

برچسب پیش‌فرض دکمه ارسال در میان مرورگر ها و زبان های مختلف استاندارد سازی نشده است.

بد:

    <input type="submit">

خوب:

    <input type="submit" value="Search">


### در صورت وجود صفت `pattern`،‌ صفت `title` را به عنصر `input` اضافه کنید

اگر مقدار ورودی با الگوی صفت `pattern` مطابقت نداشته باشد، مقدار صفت `title` برای راهنمایی نمایش داده می‌شود.

بد:

    <input name="security-code" pattern="[0-9]{3}" type="text">

خوب:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### برای برچسب گذاری از صفت `placeholder` استفاده نکنید

عنصر `label` برای برچسب گذاری است؛ در صورتی که صفت `placeholder` برای یک راهنمایی کوچک می‌باشد.

بد:

    <input name="email" placeholder="Email" type="text">

خوب:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### در هر خط تنها یک عنصر `option` بنویسید

خواندن و اسکن کردن خط های طولانی دشوار است.

بد:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

خوب:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### صفت `max` را برای عنصر `progress` اضافه کنید

در صورت وجود صفت `max`، صفت `value` را می توان در قالبی آسان نوشت.

بد:

    <progress value="0.5"> 50%</progress>

خوب:

    <progress max="100" value="50"> 50%</progress>


### صفات `min` و `max` را به عنصر `meter` اضافه کنید

در صورت وجود صفات `min` و `max`، صفت `value` را می توان در قالبی آسان نوشت.

بد:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

خوب:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### عنصر `legend` را به عنوان اولین فرزند عنصر `fieldset` قرار دهید

مرجع اصلی قواعد (spec) این فرمت را الزامی می داند.

بد:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

خوب:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## اسکریپت نویسی


### برای JavaScript  از صفت `type` صرف نظر کنید

در HTML مقدار پیش‌فرض صفت `type` برای عنصر `script` برابر با `text/javascript` است.

بد:

    <script type="text/javascript">
      ...
    </script>

خوب:

    <script>
      ...
    </script>


### محتویات عنصر `script` را کامنت گذاری نکنید

این روش برای مرورگر های قدیمی است.

بد:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

همچنین بد:

    <script>
    <!--
      ...
    // -->
    </script>

خوب:

    <script>
      ...
    </script>


### از عنصر `script` تزریق شده توسط اسکریپت استفاده نکنید

صفت `async` از نظر عملکرد و سادگی بهترین گزینه است.

بد:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

خوب:

    <script async defer src="https://example.com/widget.js"></script>


## متفرقه


### ثبات در فرورفتگی ها و فواصل

فرورفتگی و فاصله گذاری مناسب برای خوانایی مهم است.

بد:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
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


### برای لینک های داخلی از مسیر یا URL مطلق استفاده کنید

یک مسیر یا URL مطلق در لوکال‌هاست شما بدون اتصال به اینترنت بهتر کار می‌کند.

بد:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

خوب:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### از مسیر یا URL وابسته به پروتکل برای منابع خارجی استفاده نکنید

با پروتکل مناسب، می توانید منابع خارجی را با اطمینان کامل بارگیری کنید.

بد:

    <script src="//example.com/js/library.js">

خوب:

    <script src="https://example.com/js/library.js">




## Contributors

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## Translators

- [@ShayanTheNerd](https://github.com/ShayanTheNerd)
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


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
