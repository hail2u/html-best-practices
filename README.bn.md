Translations: [English (en)](README.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) . [বাংলা(bn)](README.bn.md) 

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


### Escape `&`, `<`, `>`, `"`, and `'` with named character references

These characters should escape always for a bug-free HTML document.

ভালো না:

    <h1>The "&" character</h1>

ভালো:

    <h1>The &quot;&amp;&quot; character</h1>


### Use numeric character references for control or invisible characters

These characters are easily mistaken for another character. And also spec does
not guarantee to define a human readable name for these characters.

ভালো না:

    <p>This book can read in 1 hour.</p>

ভালো:

    <p>This book can read in 1&#xA0;hour.</p>


### Put white spaces around comment contents

Some character cannot be used immediately after comment open or before comment
close.

ভালো না:

    <!--This section is non-normative-->

ভালো:

    <!-- This section is non-normative -->


### Don’t omit closing tag

I think you don’t understand a rule for omitting closing tag.

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


### Don’t mix empty element format

Consistency is a key for readability.

ভালো না:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Don’t put white spaces around tags and attribute values

There is no reason for doing this.

ভালো না:

    <h1 class=" title " >HTML Best Practices</h1>

ভালো:

    <h1 class="title">HTML Best Practices</h1>


### Don’t mix character cases

It gives a consistency also.

ভালো না:

    <a HREF="#general">General</A>

ভালো:

    <a href="#general">General</a>

Also ভালো:

    <A HREF="#general">General</A>


### Don’t mix quotation marks

Same as above.

ভালো না:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Don’t separate attributes with two or more white spaces

Your weird formatting rule confuses someone.

ভালো না:

    <input   name="q"  type="search">

ভালো:

    <input name="q" type="search">


### Omit boolean attribute value

It’s easy to write, isn’t it?

ভালো না:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

ভালো:

    <audio autoplay src="/audio/theme.mp3">


### Omit namespaces

SVG and MathML can be used directly in an HTML document.

ভালো না:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

ভালো:

    <svg>
      ...
    </svg>


### Don’t use XML attributes

We write an HTML document.

ভালো না:

    <span lang="ja" xml:lang="ja">...</span>

ভালো:

    <span lang="ja">...</span>


### Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes

A tag string can be very complicated. This simple rule helps reading such tag
string.

ভালো না:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Prefer default implicit ARIA semantics

Some elements have an ARIA `role` implicitly in an HTML document, don’t specify them.

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


## The root element


### Add `lang` attribute

`lang` attribute will help translating an HTML document.

ভালো না:

    <html>

ভালো:

    <html lang="en-US">


### Keep `lang` attribute value as short as possible

Japanese is only used in Japan. So country code is not necessary.

ভালো না:

    <html lang="ja-JP">

ভালো:

    <html lang="ja">


### Avoid `data-*` as much as possible

An appropriate attribute can be handled properly by browsers.

ভালো না:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

ভালো:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Document metadata


### Add `title` element

A value for `title` element is used by various application not only a browser.

ভালো না:

    <head>
      <meta charset="UTF-8">
    </head>

ভালো:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Don’t use `base` element

An absolute path or URL is safer for both developers and users.

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


### Specify MIME type of minor linked resources

This is a hint how application handles this resource.

ভালো না:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

ভালো:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Don’t link to `favicon.ico`

Almost all browsers fetch `/favicon.ico` automatically and asynchronously.

ভালো না:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

ভালো:

    <!-- Place `favicon.ico` in the root directory. -->


### Add `apple-touch-icon` link

A default request path for touch icon was changed suddenly.

ভালো না:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

ভালো:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Add `title` attribute to alternate stylesheets

A human readable label helps people selecting proper stylesheet.

ভালো না:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

ভালো:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### For URL, use `link` element

A value of `href` attribute can be resolved as URL.

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


### Specify document character encoding

UTF-8 is not default in all browsers yet.

ভালো না:

    <head>
      <title>HTML Best Practices</title>
    </head>

ভালো:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Don’t use legacy character encoding format

HTTP headers should be specified by a server, be simple.

ভালো না:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

ভালো:

    <meta charset="UTF-8">


### Specify character encoding at first

Spec requires the character encoding is specified within the first 1024 bytes of
the document.

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


### Use UTF-8

With UTF-8, you are free to use Emoji.

ভালো না:

    <meta charset="Shift_JIS">

ভালো:

    <meta charset="UTF-8">


### Omit `type` attribute for CSS

In HTML, default `type` attribute’s value of `style` element is `text/css`.

ভালো না:

    <style type="text/css">
      ...
    </style>

ভালো:

    <style>
      ...
    </style>


### Don’t comment out contents of `style` element

This ritual is for the old browser.

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


### Don’t mix tag for CSS and JavaScript

Sometimes `script` element blocks DOM construction.

ভালো না:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

ভালো:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Also ভালো:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections


### Add `body` element

Sometimes `body` element is complemented in unexpected position by a browser.

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


### Forget about `hgroup` element

This element is not used very much.

ভালো না:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

ভালো:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use `address` element only for contact information

`address` element is for email address, social network account, street address,
telephone number, or something you can get in touch with.

ভালো না:

    <address>No rights reserved.</address>

ভালো:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Grouping content


### Don’t start with newline in `pre` element

A first newline will ignored in the browsers, but second and later are rendered.

ভালো না:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

ভালো:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Use appropriate element in `blockquote` element

`blockquote` element’s content is a quote, not a chunks of characters.

ভালো না:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

ভালো:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don’t include attribution directly in `blockquote` element

`blockquote` element’s content is a quote.

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

Also ভালো:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Write one list item per line

Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
line is hard toooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo read.

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


### Use `type` attribute for `ol` element

Sometimes marker referenced by the contents in the near. If you change marker
with `type` attribute, you will be safe to reference.

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


### Don’t use `dl` for dialogue

`dl` element is restricted to an association list in HTML.

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


### Place `figcaption` element as first or last child of `figure` element

Spec disallows `figcaption` element in the middle of `figure` element.

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


### Use `main` element

`main` element can be used wrapping contents.

ভালো না:

    <div id="content">
      ...
    </div>

ভালো:

    <main>
      ...
    </main>


### Avoid `div` element as much as possible

`div` element is an element of last resort.

ভালো না:

    <div class="chapter">
      ...
    </div>

ভালো:

    <section>
      ...
    </section>


## Text-level semantics


### Don’t split same link that can be grouped

`a` element can wrap almost all elements (except interactive elements like form
controls and `a` element itself).

ভালো না:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

ভালো:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Use `download` attribute for downloading a resource

It will force browsers to download linked resource to the storage.

ভালো না:

    <a href="/downloads/offline.zip">offline version</a>

ভালো:

    <a download href="/downloads/offline.zip">offline version</a>


### Use `rel`, `hreflang`, and `type` attribute if needed

These hints helps applications how handle linked resource.

ভালো না:

    <a href="/ja/pdf">Japanese PDF version</a>

ভালো:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Clear link text

Link text should be the label of its linked resource.

ভালো না:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

ভালো:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Don’t use `em` element for warning or caution

These are seriousness. So, `strong` element is more appropriate.

ভালো না:

    <em>Caution!</em>

ভালো:

    <strong>Caution!</strong>


### Avoid `s`, `i`, `b`, and `u` element as much as possible

These elements’ semantics is too difficult to humans.

ভালো না:

    <i class="icon-search"></i>

ভালো:

    <span class="icon-search" aria-hidden="true"></span>


### Don’t put quotes to `q` element

Quotes are provided by the browser.

ভালো না:

    <q>“For writing maintainable and scalable HTML documents”</q>

ভালো:

    <q>For writing maintainable and scalable HTML documents</q>

Also ভালো:

    “For writing maintainable and scalable HTML documents”


### Add `title` attribute to `abbr` element

There is no other way to represent its expansion.

ভালো না:

    <abbr>HBP</abbr>

ভালো:

    <abbr title="HTML Best Practices">HBP</abbr>


### Markup `ruby` element verbosely

`ruby` element support is not completed across the modern browsers.

ভালো না:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

ভালো:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Add `datetime` attribute to non-machine-readable `time` element

When `datetime` attribute does not present, the format of `time` element’s
content is restricted.

ভালো না:

    <time>Dec 19, 2014</time>

ভালো:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Specify code language with `class` attribute prefixed with `language-`

This is not a formal way, but spec mentions this.

ভালো না:

    <code>&lt;!DOCTYPE html&gt;</code>

ভালো:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Keep `kbd` element as simple as possible

Nesting `kbd` element is too difficult to humans.

ভালো না:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

ভালো:

    <kbd>Ctrl+F5</kbd>


### Avoid `span` element as much as possible

`span` element is an element of last resort.

ভালো না:

    HTML <span class="best">Best</span> Practices

ভালো:

    HTML <em>Best</em> Practices


### Break after `br` element

Line break should be needed where `br` element is used.

ভালো না:

    <p>HTML<br>Best<br>Practices</p>

ভালো:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Don’t use `br` element only for presentational purpose

`br` element is not for line breaking, it is for line breaks in the contents.

ভালো না:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

ভালো:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Edits


### Don’t stride `ins` and `del` element over other elements

Elements cannot be overflow other elements.

ভালো না:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

ভালো:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Embedded content


### Provide fallback `img` element for `picture` element

The support of `picture` element is not ভালো yet.

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


### Add `alt` attrbute to `img` element if needed

`alt` attribute helps those who cannot process images or have image loading
disabled.

ভালো না:

    <img src="/img/logo.png">

ভালো:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Empty `alt` attribute if possible

If the image is supplemental, there is equivalent content somewhere in the near.

ভালো না:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

ভালো:

    <img alt="" src="/img/icon/help.png"> Help


### Omit `alt` attribute if possible

Sometimes you don’t know what text is suitable for `alt` attribute.

ভালো না:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

ভালো:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Empty `iframe` element

There is some restriction in its content. Being empty is always safe.

ভালো না:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

ভালো:

    <iframe src="/ads/default.html"></iframe>


### Markup `map` element content

This content presents to a screen reader.

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


### Provide fallback content for `audio` or `video` element

Fallback content is needed for newly introduced elements in HTML.

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


## Tabular data


### Write one cell per line

Long lines are hard to scan.

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


### Use `th` element for header cell

There is no reason to avoid this.

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


### Wrap form control with `label` element

`label` element helps focusing form element.

ভালো না:

    <p>Query: <input name="q" type="text"></p>

ভালো:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omit `for` attribute if possible

`label` element can contain some form elements.

ভালো না:

    <label for="q">Query: </label><input id="q" name="q" type="text">

ভালো:

    <label>Query: <input name="q" type="text"></label>


### Use appropriate `type` attribute for `input` element

With appropriate `type`, a browser gives tiny features to the `input` element.

ভালো না:

    <label>Search keyword: <input name="q" type="text"></label>

ভালো:

    <label>Search keyword: <input name="q" type="search"></label>


### Add `value` attribute to `input type="submit"`

The default label for submit button is not standarized across the browser and
languages.

ভালো না:

    <input type="submit">

ভালো:

    <input type="submit" value="Search">


### Add `title` attribute to `input` element when there is `pattern` attribute

If input text does not match to `pattern` attribute, the value of `title`
attribute will be display as a hint.

ভালো না:

    <input name="security-code" pattern="[0-9]{3}" type="text">

ভালো:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Don’t use `placeholder` attribute for labeling

`label` element is for a label, `placeholder` attribute is for a short hint.

ভালো না:

    <input name="email" placeholder="Email" type="text">

ভালো:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Write one `option` element per line

Long lines are hard to scan.

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


### Add `max` attribute to `progress` element

With `max` attribute, the `value` attribute can be written in an easy format.

ভালো না:

    <progress value="0.5"> 50%</progress>

ভালো:

    <progress max="100" value="50"> 50%</progress>


### Add `min` and `max` attribute to `meter` element

With `min` and `max` attribute, the `value` attribute can be written in an easy
format.

ভালো না:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

ভালো:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Place `legend` element as the first child of `fieldset` element

Spec requires this.

ভালো না:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

ভালো:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scripting


### Omit `type` attribute for JavaScript

HTML এর ভিতরে,  ডিফল্ট `type` attribute’s value of `script` element is
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
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar-nayin](https://github.com/zulkar29)

## লাইসেন্স

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
