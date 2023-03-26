Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [فارسی](README.fa-IR.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md)

# HTML Best Practices

সহজে ম্যানেজ এবং স্কেল HTML ডকুমেন্ট লেখার জন্য


## সাধারন


### DOCTYPE দিয়ে শুরু করুন

`No-quirks` মোড সক্রিয় করার জন্য DOCTYPE প্রয়োজন৷

ভালো না:

    <html>
      ...
    </html>

ভালো:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### অনেক পুরাতন অথবা উত্তরাধিকার DOCTYPE ব্যবহার করবেন না।

DOCTYPE এখন আর DTD-এর জন্য ব্যবহার হয় না, সহজ হোন।

ভালো না:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

ভালো:

    <!DOCTYPE html>


### XML ঘোষণা ব্যবহার করবেন না

আপনি কি XHTML লিখতে চান?

ভালো না:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

ভালো:

    <!DOCTYPE html>


### অক্ষর রেফারেন্স যতটা সম্ভব ব্যবহার করবেন না

আপনি যদি UTF-8 দিয়ে একটি HTML ডকুমেন্ট লেখেন, প্রায় সব অক্ষর (ইমোজি সহ) সরাসরি লেখা যাবে।

ভালো না:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

ভালো:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### নামযুক্ত অক্ষর এর সাথে `&`, `<`, `>`, `"`, এবং `'` মুক্ত রাখুন

একটি বাগ-মুক্ত HTML নথির জন্য এই অক্ষরগুলি সর্বদা পালানো উচিত।

ভালো না:

    <h1>The "&" character</h1>

ভালো:

    <h1>The &quot;&amp;&quot; character</h1>


### নিয়ন্ত্রণ বা অদৃশ্য অক্ষরের জন্য সংখ্যাসূচক অক্ষর রেফারেন্স ব্যবহার করুন

এই অক্ষরগুলি সহজেই অন্য চরিত্রের জন্য ভুল হয়। এবং বিশেষত্ব এই অক্ষরগুলির জন্য একটি মানুষের পাঠযোগ্য নাম সংজ্ঞায়িত করার গ্যারান্টি দেয় না।

ভালো না:

    <p>This book can read in 1 hour.</p>

ভালো:

    <p>This book can read in 1&#xA0;hour.</p>


### মন্তব্য বিষয়বস্তু চারপাশে সাদা স্থান রাখুন

কিছু অক্ষর কমেন্ট খোলার সাথে সাথে বা মন্তব্য বন্ধ করার আগে ব্যবহার করা যাবে না।

ভালো না:

    <!--This section is non-normative-->

ভালো:

    <!-- This section is non-normative -->


### ক্লোজিং ট্যাগ বাদ দেবেন না

আমি মনে করি আপনি ক্লোজিং ট্যাগ বাদ দেওয়ার নিয়ম বুঝতে পারছেন না।

ভালো না:

    <html>
      <body>
        ...

ভালো:

    <html>
      <body>
        ...
      </body>
    </html>


### খালি এলিমেন্টে বিন্যাস মিশ্রিত করবেন না

সুসংগত তা পঠনযোগ্যতার জন্য একটি চাবিকাঠি।

ভালো না:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### ট্যাগ এবং অ্যাট্রিবিউট মানের চারপাশে সাদা স্পেস রাখবেন না

এটা করার কোন কারণ নেই।

ভালো না:

    <h1 class=" title " >HTML Best Practices</h1>

ভালো:

    <h1 class="title">HTML Best Practices</h1>


### ক্যাকেটার কেস মিশ্রিত করবেন না

এটি একটি ধারাবাহিকতাও দেয়।

ভালো না:

    <a HREF="#general">General</A>

ভালো:

    <a href="#general">General</a>

এটাও ভালো:

    <A HREF="#general">General</A>


### উদ্ধৃতি চিহ্ন মিশ্রিত করবেন না

উপরের মতই ।

ভালো না:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### দুই বা তার বেশি সাদা স্পেস দিয়ে অ্যাট্রিবিউট আলাদা করবেন না

আপনার অদ্ভুত ফর্ম্যাটিং নিয়ম কাউকে বিভ্রান্ত করে।

ভালো না:

    <input   name="q"  type="search">

ভালো:

    <input name="q" type="search">


### বুলিয়ান অ্যাট্রিবিউট মান বাদ দিন

এটা লেখা সহজ, তাই না?

ভালো না:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

ভালো:

    <audio autoplay src="/audio/theme.mp3">


### নেমস্পেস বাদ দিন

SVG এবং MathML সরাসরি একটি HTML নথিতে ব্যবহার করা যেতে পারে।

ভালো না:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

ভালো:

    <svg>
      ...
    </svg>


### XML অ্যাট্রিবিউট ব্যবহার করবেন না

আমরা একটি HTML নথি লিখি।

ভালো না:

    <span lang="ja" xml:lang="ja">...</span>

ভালো:

    <span lang="ja">...</span>


### `data-*` বৈশিষ্ট্যগুলির সাথে , মাইক্রোডেটা এবং RDFa Lite বৈশিষ্ট্যগুলিকে মিশ্রিত করবেন না ৷

একটি ট্যাগ স্ট্রিং খুব জটিল হতে পারে। এই সহজ নিয়ম এই ধরনের ট্যাগ স্ট্রিং পড়তে সাহায্য করে।

ভালো না:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### ডিফল্ট অন্তর্নিহিত ARIA পছন্দ করুন

কিছু এলিমেন্টে একটি ARIA `role` অন্তর্নিহিতভাবে HTML নথিতে থাকে, সেগুলি নির্দিষ্ট করবেন না ৷

ভালো না:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

ভালো:

    <nav>
      ...
    </nav>

    <hr>


## মূল উপাদান


### `lang` অ্যাট্রিবিউট যোগ করুন

`lang` অ্যাট্রিবিউট একটি HTML নথি অনুবাদ করতে সাহায্য করবে।

ভালো না:

    <html>

ভালো:

    <html lang="en-US">


### `lang` অ্যাট্রিবিউট মান যতটা সম্ভব ছোট রাখুন

জাপানি শুধুমাত্র জাপানে ব্যবহৃত হয়। তাই দেশের কোডের প্রয়োজন নেই।

ভালো না:

    <html lang="ja-JP">

ভালো:

    <html lang="ja">


### `data-*` যতটা সম্ভব এড়িয়ে চলুন

একটি উপযুক্ত বৈশিষ্ট্য ব্রাউজার দ্বারা সঠিকভাবে পরিচালনা করা যেতে পারে।

ভালো না:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

ভালো:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## ডকুমেন্ট মেটাডেটা


### `title` এলিমেন্টে যোগ করুন

`title` এলিমেন্টে এর ভ্যালু শুধুমাত্র একটি ব্রাউজার নয় বিভিন্ন অ্যাপ্লিকেশন দ্বারাও ব্যবহৃত হয়।

ভালো না:

    <head>
      <meta charset="UTF-8">
    </head>

ভালো:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### `base` এলিমেন্টে ব্যবহার করবেন না

একটি নিখুঁত পথ বা URL ডেভেলপার এবং ব্যবহারকারী উভয়ের জন্যই নিরাপদ।

ভালো না:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

ভালো:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### MIME ধরনের ক্ষুদ্র লিঙ্কযুক্ত সংস্থানগুলি নির্দিষ্ট করুন৷

এটি একটি ইঙ্গিত কিভাবে অ্যাপ্লিকেশন এই সম্পদ পরিচালনা করে।

ভালো না:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

ভালো:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico` এ লিঙ্ক করবেন না

প্রায় সব ব্যাউজার `/favicon.ico`স্বয়ংক্রিয়ভাবে এবং অ্যাসিঙ্ক্রোনাসভাবে নিয়ে আসে।

ভালো না:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

ভালো:

    <!-- Place `favicon.ico` in the root directory. -->


### `apple-touch-icon` লিংক যোগ করুন

টাচ আইকনের জন্য একটি ডিফল্ট অনুরোধের পথ হঠাৎ পরিবর্তন করা হয়েছে৷

ভালো না:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

ভালো:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### `title` অ্যাট্রিবিউট এর বিকল্প স্টাইলশীটে যোগ করুন

একটি মানুষের পাঠযোগ্য লেবেল সঠিক স্টাইলশীট নির্বাচন করতে সাহায্য করে।

ভালো না:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

ভালো:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URL এর জন্য, `link` অ্যাট্রিবিউট ব্যবহার করুন

`href` অ্যাট্রিবিউট এর ভ্যালু URL হিসাবে সমাধান করা যেতে পারে।

ভালো না:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

ভালো:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### ডকুমেন্টের অক্ষর এনকোডিং নির্দিষ্ট করুন

UTF-8 এখনও সব ব্রাউজারে ডিফল্ট নয়।

ভালো না:

    <head>
      <title>HTML Best Practices</title>
    </head>

ভালো:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### এনকোডিং ফরম্যাট এ লিগ্যাসি অক্ষর ব্যবহার করবেন না

HTTP হেডার একটি সার্ভার দ্বারা নির্দিষ্ট করা উচিত, সহজ হতে হবে ।

ভালো না:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

ভালো:

    <meta charset="UTF-8">


### প্রথমে অক্ষর এনকোডিং নির্দিষ্ট করুন

স্পেকের জন্য নথির প্রথম 1024 বাইটের মধ্যে অক্ষর এনকোডিং নির্দিষ্ট করা প্রয়োজন।

ভালো না:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

ভালো:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### UTF-8 ব্যবহার করুন

UTF-8 এর সাথে, আপনি ইমোজি ব্যবহার করতে পারবেন।

ভালো না:

    <meta charset="Shift_JIS">

ভালো:

    <meta charset="UTF-8">


### CSS-এর জন্য `type` অ্যাট্রিবিউট বাদ দিন

HTML এ,  `style` এর ডিফল্ট `type` অ্যাট্রিবিউট ভ্যালু হলো `text/css` ।

ভালো না:

    <style type="text/css">
      ...
    </style>

ভালো:

    <style>
      ...
    </style>


### `style` এলিমেন্টে বিষয়বস্তু উপর মন্তব্য করবেন না

এইটা পুরাতন ব্যাউজারের জন্য ।

ভালো না:

    <style>
    <!--
      ...
      -->
    </style>

ভালো:

    <style>
      ...
    </style>


### CSS এবং JavaScript এর ট্যাগ এক সাথে মিশাবেন না

কখনও কখনও `script` এলিমেন্টে DOM তৈরি ব্লক করে।

ভালো না:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

ভালো:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

এটাও ভালো:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## বিভাগসমূহ


### `body` এলিমেন্টে যোগ করুন

কখনও কখনও `body` এলিমেন্টে একটি ব্রাউজার দ্বারা অপ্রত্যাশিত অবস্থানে পরিপূরক হয়।

ভালো না:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

ভালো:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### `hgroup` এলিমেন্টে সম্পর্কে ভুলে যান

এই এলিমেন্টে খুব বেশি ব্যবহার করা হয় না।

ভালো না:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

ভালো:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` এলিমেন্টে শুধুমাত্র যোগাযোগের তথ্যের জন্য উপাদান ব্যবহার করুন

`address` এলিমেন্টে হল ইমেল ঠিকানা, সামাজিক নেটওয়ার্ক অ্যাকাউন্ট, রাস্তার ঠিকানা, টেলিফোন নম্বর বা এমন কিছুর জন্য যার সাথে আপনি যোগাযোগ করতে পারেন।

ভালো না:

    <address>No rights reserved.</address>

ভালো:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## গ্রুপিং বিষয়বস্তু


### `pre` এলিমেন্টে নতুন লাইন দিয়ে শুরু করবেন না

ব্রাউজারগুলিতে একটি প্রথম নতুন লাইন উপেক্ষা করা হবে, তবে দ্বিতীয় এবং পরে রেন্ডার করা হবে।

ভালো না:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

ভালো:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote` এলিমেন্টের উপযুক্ত এলিমেন্টের ব্যবহার করুন

`blockquote`  এলিমেন্টের বিষয়বস্তু একটি উদ্ধৃতি, অক্ষরের একটি অংশ নয়।

ভালো না:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

ভালো:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### `blockquote` এলিমেন্টের রে ভিতরে সরাসরি অ্যাট্রিবিউশন অন্তর্ভুক্ত করবেন না

`blockquote` এলিমেন্টের এর এর বিষয়বস্তু একটি উদ্ধৃতি ।

ভালো না:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

ভালো:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

এটাও ভালো:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### প্রতি লাইনে একটি তালিকা আইটেম লিখুন

লম্বাঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅঅ
লাইন পড়ার জনননননননননননননননননননননন্য কঠিন ।

ভালো না:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

ভালো:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### `ol` এলিমেন্টের এর সাথে `type` অ্যাট্রিবিউট ব্যবহার করুন

আপনি যদি `type` অ্যাট্রিবিউট এর সাথে মার্কার পরিবর্তন করেন, তাহলে আপনি আপনি রেফারেন্সে নিরাপদ থাকবেন।

ভালো না:

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

ভালো:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### সংলাপের জন্য `dl` এলিমেন্টের ব্যবহার করবেন না

`dl` এলিমেন্টের এইচটিএমএল-এ একটি অ্যাসোসিয়েশন তালিকায় সীমাবদ্ধ ।

ভালো না:

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

ভালো:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### `figcaption` এলিমেন্টের প্রথম বা শেষ চাইল্ড হিসাবে `figure` এলিমেন্ট রাখুন

স্পেক `figure` এলিমেন্টের মাঝখানে `figcaption` এলিমেন্টকে অনুমতি দেয় না।

ভালো না:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

ভালো:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### `main` ইলিমেন্টে ব্যবহার করুন

`main` ইলিমেন্টে অন্য কনটেন্ট মোড়ানোর কাজে ব্যবহার করা যেতে পারে ।

ভালো না:

    <div id="content">
      ...
    </div>

ভালো:

    <main>
      ...
    </main>


### যত বেশী সম্ভব `div` ইলিমেন্টে এড়িয়ে চলুন

`div` ইলিমেন্টে শেষ অবলম্বন একটি উপাদান ।

ভালো না:

    <div class="chapter">
      ...
    </div>

ভালো:

    <section>
      ...
    </section>


## টেক্সট-লেভেল সিমানটিক


### একই লিঙ্ক বিভক্ত করবেন না যা গ্রুপ করা যেতে পারে

`a` ইলিমেন্টে প্রায় সব অন্য ইলিমেন্টে কে মোড়ায়ি রাখতে যারে ( ফর্ম নিয়ন্ত্রণ এবং ইলিমেন্টে মতো ইন্টারেক্টিভ উপাদানগুলি ছাড়া এবং `a` ইলিমেন্টে নিজেকে).

ভালো না:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

ভালো:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### কোন রিসোর্স ডাউনলোড দিতে `download` অ্যাট্রিবিউট ব্যবহার করুন

এটা ব্যাউজারকে লিংক রিসোর্স মেমরীতে ডাওনলোড হতে বাধ্য করবে ।

ভালো না:

    <a href="/downloads/offline.zip">offline version</a>

ভালো:

    <a download href="/downloads/offline.zip">offline version</a>


### প্রয়োজন হলে `rel`, `hreflang`, এবং `type` অ্যাট্রিবিউট ব্যবহার করুন

অ্যাপ্লিকেশনে কিভাবে লিংক রিসোর্স কিভাবে ম্যানেজ করতেেএটা তার হিন্ট দিতে সাহায্য করে ।

ভালো না:

    <a href="/ja/pdf">Japanese PDF version</a>

ভালো:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### লিঙ্ক এর টেক্সট পরিষ্কার রাখুন

লিঙ্ক টেক্সট এর লিঙ্ক করা সম্পদের লেবেল হওয়া উচিত।

ভালো না:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

ভালো:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### সতর্কতা বা সতর্কতার জন্য `em` ইলিমেন্টে ব্যবহার করবেন না

এগুলো সিরিয়াসনেস। সুতরাং, `strong` ইলিমেন্টে আরো বেশী উপযুক্ত.

ভালো না:

    <em>Caution!</em>

ভালো:

    <strong>Caution!</strong>


### `s`, `i`, `b`, এবং `u` ইলিমেন্টে যতটা সম্ভব এড়িয়ে চলুন

এই ইলিমেন্টে গুলার শব্দার্থবিদ্যা মানুষের পক্ষে খুব কঠিন।

ভালো না:

    <i class="icon-search"></i>

ভালো:

    <span class="icon-search" aria-hidden="true"></span>


### `q` ইলিমেন্টে এর ভিতরে উদ্ধৃতি রাখবেন না 

উদ্ধৃতি ব্রাউজার দ্বারা প্রদান করা হয় ।

ভালো না:

    <q>“For writing maintainable and scalable HTML documents”</q>

ভালো:

    <q>For writing maintainable and scalable HTML documents</q>

এটাও ভালো:

    “For writing maintainable and scalable HTML documents”


### `abbr` ইলিমেন্টে এর `title` অ্যাট্রিবিউট যোগ করুন 

এর সম্প্রসারণ প্রতিনিধিত্ব করার অন্য কোন উপায় নেই।

ভালো না:

    <abbr>HBP</abbr>

ভালো:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby` মার্কআপ ইলিমেন্টে কম ব্যবহার করুন

`ruby` ইলিমেন্টে আধুনিক সব ব্যাউজার এখনো সাপোর্ট করে না ।

ভালো না:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

ভালো:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### মেশিন পাঠ অযোগ্য `time` ইলিমেন্টে এ `datetime` অ্যাট্রিবিউট যোগ করুন

যখন datetime অ্যাট্রিবিউট বৈশিষ্ট্য উপস্থিত হয় না, তখন `time` ইলিমেন্টে এর বিষয়বস্তুর বিন্যাস সীমাবদ্ধ।

ভালো না:

    <time>Dec 19, 2014</time>

ভালো:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### কোড ল্যাংগুয়েজ লেখার সময় `class` অ্যাট্রিবিউট এর নাম এর আগে `language-` রাখুন

এটি একটি আনুষ্ঠানিক উপায় নয়, তবে স্পেক এটি উল্লেখ করে।

ভালো না:

    <code>&lt;!DOCTYPE html&gt;</code>

ভালো:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` ইলিমেন্টে যতটা সম্ভব সাধারন রাখুন

নেস্টিং `kbd` ইলিমেন্টে মানুষের জন্য খুব কঠিন ।

ভালো না:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

ভালো:

    <kbd>Ctrl+F5</kbd>


### `span` ইলিমেন্টে যতটা সম্ভব এড়িয়ে চলুন

`span` ইলিমেন্টে হলো  একটি উপাদান এর শেষ অবলম্বন ।

ভালো না:

    HTML <span class="best">Best</span> Practices

ভালো:

    HTML <em>Best</em> Practices


### `br` ইলিমেন্টে এর পরে বিরতি

`br` ইলিমেন্টে যেখানে ব্যবহার করা হয় সেখানে লাইন বিরতি প্রয়োজন ।

ভালো না:

    <p>HTML<br>Best<br>Practices</p>

ভালো:

    <p>HTML<br>
    Best<br>
    Practices</p>


### শুধুমাত্র উপস্থাপনামূলক উদ্দেশ্যে `br` উপাদান ইলিমেন্টে করবেন না

`br` ইলিমেন্টে লাইন ব্রেকিং এর জন্য নয়, এটি বিষয়বস্তু লাইন বিরতি জন্য ।

ভালো না:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

ভালো:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## সম্পাদনা


### `ins` এবং `del` ইলিমেন্টে এর ভিতরে অন্য ইলিমেন্টে ব্যবহার করবেন না

ইলিমেন্টে অন্য ইলিমেন্টে এর উপরে ওভারফ্লো হতে পারে না।

ভালো না:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

ভালো:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## এম্বেড করা বিষয়বস্তু


### `img` ইলিমেন্টে এর জন্য ফলব্যাক `picture` ইলিমেন্টে প্রদান করুন

ব্যাউজারে `picture` ইলিমেন্টে এর সাপোর্ট এখনো ভালো না ।

ভালো না:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

ভালো:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### যদি দরকার হয় তাহলে `img` ইলিমেন্টে `alt` অ্যাট্রিবিউট যোগ করুন

`alt` অ্যাট্রিবিউট তাদের সাহায্য করে যারা ছবি প্রসেস করতে পারে না বা ইমেজ লোডিং অক্ষম আছে।

ভালো না:

    <img src="/img/logo.png">

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png">


### সম্ভব হলে খালি `alt` বৈশিষ্ট্য

যদি চিত্রটি সম্পূরক হয়, তাহলে কাছাকাছি কোথাও সমতুল্য সামগ্রী রয়েছে।

ভালো না:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

ভালো:

    <img alt="" src="/img/icon/help.png"> Help


### সম্বব হলে `alt` অ্যাট্রিবিউট বাদ দিন 

কখনও কখনও আপনি জানেন না কোন টেক্সট `alt` অ্যাট্রিবিউটের জন্য উপযুক্ত।

ভালো না:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

ভালো:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### খালি `iframe` ইলিমেন্ট

এর বিষয়বস্তুতে কিছু সীমাবদ্ধতা রয়েছে। খালি থাকা সবসময় নিরাপদ।

ভালো না:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

ভালো:

    <iframe src="/ads/default.html"></iframe>


### মার্কআপ `map` ইলিমেন্ট এর কনটেন্ট

এই বিষয়বস্তু একটি স্ক্রিন রিডারকে উপস্থাপন করে।

ভালো না:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

ভালো:

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


### `audio` অথবা `video` উপাদানের জন্য ফলব্যাক সামগ্রী প্রদান করুন

এইচটিএমএলে নতুন প্রবর্তিত উপাদানগুলির জন্য ফলব্যাক সামগ্রী প্রয়োজন ৷

ভালো না:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

ভালো:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## ট্যাবুলার ডেটা


### প্রতি লাইনে একটি সেল লিখুন

লম্বা লাইন স্ক্যান করা কঠিন।

ভালো না:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

ভালো:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### হেডার সেল এর জন্য `th` ইলিমেন্ট ব্যবহার করুন

এটা এড়িয়ে যাওয়ার কোনো কারণ নেই।

ভালো না:

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

ভালো:

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


### `label` ইলিমেন্ট দিয়ে ফর্ম কন্ট্রোলকে ঘিরে রাখুন

`label` ইলিমেন্ট ফর্ম ইলিমেন্ট এ ফোকাস করতে সাহায্য করে।

ভালো না:

    <p>Query: <input name="q" type="text"></p>

ভালো:

    <p><label>Query: <input name="q" type="text"></label></p>


### সম্বব হলে `for` অ্যাট্রিবিউট বাদ দিন

`label` ইলিমেন্ট এর সাথে কিছু form ইলিমেন্ট থাকতে পারে ।

ভালো না:

    <label for="q">Query: </label><input id="q" name="q" type="text">

ভালো:

    <label>Query: <input name="q" type="text"></label>


### `input` ইলিমেন্ট এর জন্য সঠিক `type` অ্যাট্রিবিউট ব্যবহার করুন

উপযুক্ত  `type` এর জন্য , একটি ব্যাউজার `input` ইলিমেন্ট কে ক্ষুদ্র বৈশিষ্ট্য দেয় ।

ভালো না:

    <label>Search keyword: <input name="q" type="text"></label>

ভালো:

    <label>Search keyword: <input name="q" type="search"></label>


###  `input type="submit"` তে `value` অ্যাট্রিবিউট যোগ করুন

সাবমিট বটিনের জন্য ডিফল্ট লেবেল , ব্রাউজার এবং ভাষা জুড়ে মানসম্মত নয়।

ভালো না:

    <input type="submit">

ভালো:

    <input type="submit" value="Search">


### `title` অ্যাট্রিবিউট `input` ইলিমেন্ট এ যোগ করুন যেখানে `pattern` অ্যাট্রিবিউট আছে

যদি ইনপুট টেক্সট এর সাথে `pattern` অ্যাট্রিবিউট না মিলে, তাহলে `title` অ্যাট্রিবিউট  ইঙ্গিত হিসাবে প্রদর্শিত হবে।

ভালো না:

    <input name="security-code" pattern="[0-9]{3}" type="text">

ভালো:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### `placeholder` লেবেল করার জন্য অ্যাট্রিবিউট ব্যবহার করবেন না

`label` ইলিমেন্ট লেভেল এর জন্য, `placeholder` এট্রিবিউট ছোট হিন্ট দেয়ার জন্য।

ভালো না:

    <input name="email" placeholder="Email" type="text">

ভালো:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### প্রতি লাইনে `option` ইলিমেন্ট লিখুন

লম্বা লাইন স্ক্যান করা কঠিন।

ভালো না:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

ভালো:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### `progress` ইলিমেন্টের ভিতরে  `max` এট্রিবিউট যোগ করুন।

`max`এট্রিবিউটের সাথে `value` এট্রিবিউটের খুব সহজ ফরম্যাটে লেখা যেতে পারে।

ভালো না:

    <progress value="0.5"> 50%</progress>

ভালো:

    <progress max="100" value="50"> 50%</progress>


### `meter` ইলিমেন্টের এট্রিবিউটে  `min` এবং `max` যোগ করুন

`min` এবং `max`এট্রিবিউটের সাথে `value` এট্রিবিউটের খুব সহজ ফরম্যাটে লেখা যেতে পারে।

ভালো না:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

ভালো:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### `fieldset` ইলিমেন্ট এর প্রথম চাইল্ড হিসাবে `legend` রাখুন।

এই Spec এর প্রয়োজনে।

ভালো না:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

ভালো:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## স্ক্রিপ্টিং


### জাভাস্ক্রিপ্টের এর জন্য `type` অ্যাট্রিবিউট বাদ দিন

HTML এর ভিতরে,  ডিফল্ট `type` এট্রিবিউট ভ্যালু এর `script` ইলিমেন্ট হলো
`text/javascript`.

ভালো না:

    <script type="text/javascript">
      ...
    </script>

ভালো:

    <script>
      ...
    </script>


### `script` ইলিমেন্ট এর কনটেন্ট এর উপর মন্তব্য করবেন না

এই  ব্যবহারটি সুধু পুরানো ব্রাউজারের জন্য।

ভালো না:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

এটাও ভালো না:

    <script>
    <!--
      ...
    // -->
    </script>

ভালো:

    <script>
      ...
    </script>


### script-injected `script` ইলিমেন্ট ব্যবহার করবেন না।

সিম্পল রাখা এবং ভালো পারফরমেন্স দুইটার জন্যই `async` এট্রিবিউট সব থেকে ভালো। 

ভালো না:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

ভালো:

    <script async defer src="https://example.com/widget.js"></script>


## অন্যান্য


### ধারাবাহিকভাবে ইন্ডেন্ট করুন

রিডেবিলিটি বাড়ানোর জন্য ইন্ডেন্টেশন গুরুত্বপূর্ণ।

ভালো না:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

ভালো:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### অভ্যন্তরীণ লিঙ্কের জন্য এবসুলেট পাথ ব্যবহার করুন

একটি এবসুলেট পাথ আপনার লোকালহোস্টে আরও ভাল কাজ করে ইন্টারনেট সংযোগ ছাড়াই ।

ভালো না:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

ভালো:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### বাহ্যিক রিসোর্স এর জন্য প্রোটোকল-সম্পর্কিত URL ব্যবহার করবেন না


প্রোটোকলের সাহায্যে, আপনি নিরাপদে এবং নির্ভরযোগ্যভাবে বাহ্যিক সংস্থানগুলি লোড করতে পারেন৷

ভালো না:

    <script src="//example.com/js/library.js">

ভালো:

    <script src="https://example.com/js/library.js">




## অবদানকারী

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## অনুবাদক

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@shayanthenerd](https://github.com/shayanthenerd)
- [@sliderkh](https://github.com/sliderkh)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@victorchao996](https://github.com/victorchao996)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar29](https://github.com/zulkar29)


## লাইসেন্স

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
