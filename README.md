Translations: [English (en)](README.md) [日本語 (ja)](README.ja.md) [한국어 (ko)](README.ko.md) [Türkçe (tr)](README.tr.md) [Português brasileiro (pt-BR)](README.pt-BR.md) [简体中文 (zh-CN)](README.zh-CN.md)

# HTML Best Practices

For writing maintainable and scalable HTML documents


- [General](#general)
  - [Start with DOCTYPE](#start-with-doctype)
  - [Don’t use legacy or obsolete DOCTYPE](#dont-use-legacy-or-obsolete-doctype)
  - [Don’t use XML Declaration](#dont-use-xml-declaration)
  - [Don’t use character references as much as possible](#dont-use-character-references-as-much-as-possible)
  - [Escape `&`, `<`, `>`, `"`, and `'` with named character references](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
  - [Use numeric character references for control or invisible characters](#use-numeric-character-references-for-control-or-invisible-characters)
  - [Put white spaces around comment contents](#put-white-spaces-around-comment-contents)
  - [Don’t omit closing tag](#dont-omit-closing-tag)
  - [Don’t mix empty element format](#dont-mix-empty-element-format)
  - [Don’t put white spaces around tags and attribute values](#dont-put-white-spaces-around-tags-and-attribute-values)
  - [Don’t mix character cases](#dont-mix-character-cases)
  - [Don’t mix quotation marks](#dont-mix-quotation-marks)
  - [Don’t separate attributes with two or more white spaces](#dont-separate-attributes-with-two-or-more-white-spaces)
  - [Omit boolean attribute value](#omit-boolean-attribute-value)
  - [Omit namespaces](#omit-namespaces)
  - [Don’t use XML attributes](#dont-use-xml-attributes)
  - [Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  - [Prefer default implicit ARIA semantics](#prefer-default-implicit-aria-semantics)
- [The root element](#the-root-element)
  - [Add `lang` attribute](#add-lang-attribute)
  - [Keep `lang` attribute value as short as possible](#keep-lang-attribute-value-as-short-as-possible)
  - [Avoid `data-*` as much as possible](#avoid-data-as-much-as-possible)
- [Document metadata](#document-metadata)
  - [Add `title` element](#add-title-element)
  - [Don’t use `base` element](#dont-use-base-element)
  - [Specify MIME type of minor linked resources](#specify-mime-type-of-minor-linked-resources)
  - [Don’t link to `favicon.ico`](#dont-link-to-faviconico)
  - [Add `apple-touch-icon` link](#add-apple-touch-icon-link)
  - [Add `title` attribute to alternate stylesheets](#add-title-attribute-to-alternate-stylesheets)
  - [For URL, use `link` element](#for-url-use-link-element)
  - [Specify document character encoding](#specify-document-character-encoding)
  - [Don’t use legacy character encoding format](#dont-use-legacy-character-encoding-format)
  - [Specify character encoding at first](#specify-character-encoding-at-first)
  - [Use UTF-8](#use-utf-8)
  - [Omit `type` attribute for CSS](#omit-type-attribute-for-css)
  - [Don’t comment out contents of `style` element](#dont-comment-out-contents-of-style-element)
  - [Don’t mix tag for CSS and JavaScript](#dont-mix-tag-for-css-and-javascript)
- [Sections](#sections)
  - [Add `body` element](#add-body-element)
  - [Forget about `hgroup` element](#forget-about-hgroup-element)
  - [Use `address` element only for contact information](#use-address-element-only-for-contact-information)
- [Grouping content](#grouping-content)
  - [Don’t start with newline in `pre` element](#dont-start-with-newline-in-pre-element)
  - [Use appropriate element in `blockquote` element](#use-appropriate-element-in-blockquote-element)
  - [Don’t include attribution directly in `blockquote` element](#dont-include-attribution-directly-in-blockquote-element)
  - [Write one list item per line](#write-one-list-item-per-line)
  - [Use `type` attribute for `ol` element](#use-type-attribute-for-ol-element)
  - [Don’t use `dl` for dialogue](#dont-use-dl-for-dialogue)
  - [Place `figcaption` element as first or last child of `figure` element](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  - [Use `main` element](#use-main-element)
  - [Avoid `div` element as much as possible](#avoid-div-element-as-much-as-possible)
- [Text-level semantics](#text-level-semantics)
  - [Don’t split same link that can be grouped](#dont-split-same-link-that-can-be-grouped)
  - [Use `download` attribute for downloading a resource](#use-download-attribute-for-downloading-a-resource)
  - [Use `rel`, `hreflang`, and `type` attribute if needed](#use-rel-hreflang-and-type-attribute-if-needed)
  - [Clear link text](#clear-link-text)
  - [Don’t use `em` element for warning or caution](#dont-use-em-element-for-warning-or-caution)
  - [Avoid `s`, `i`, `b`, and `u` element as much as possible](#avoid-s-i-b-and-u-element-as-much-as-possible)
  - [Don’t put quotes to `q` element](#dont-put-quotes-to-q-element)
  - [Add `title` attribute to `abbr` element](#add-title-attribute-to-abbr-element)
  - [Markup `ruby` element verbosely](#markup-ruby-element-verbosely)
  - [Add `datetime` attribute to non-machine-readable `time` element](#add-datetime-attribute-to-non-machine-readable-time-element)
  - [Specify code language with `class` attribute prefixed with `language-`](#specify-code-language-with-class-attribute-prefixed-with-language)
  - [Keep `kbd` element as simple as possible](#keep-kbd-element-as-simple-as-possible)
  - [Avoid `span` element as much as possible](#avoid-span-element-as-much-as-possible)
  - [Break after `br` element](#break-after-br-element)
  - [Don’t use `br` element only for presentational purpose](#dont-use-br-element-only-for-presentational-purpose)
- [Edits](#edits)
  - [Don’t stride `ins` and `del` element over other elements](#dont-stride-ins-and-del-element-over-other-elements)
- [Embedded content](#embedded-content)
  - [Provide fallback `img` element for `picture` element](#provide-fallback-img-element-for-picture-element)
  - [Add `alt` attrbute to `img` element if needed](#add-alt-attrbute-to-img-element-if-needed)
  - [Empty `alt` attribute if possible](#empty-alt-attribute-if-possible)
  - [Omit `alt` attribute if possible](#omit-alt-attribute-if-possible)
  - [Empty `iframe` element](#empty-iframe-element)
  - [Markup `map` element content](#markup-map-element-content)
  - [Provide fallback content for `audio` or `video` element](#provide-fallback-content-for-audio-or-video-element)
- [Tabular data](#tabular-data)
  - [Write one cell per line](#write-one-cell-per-line)
  - [Use `th` element for header cell](#use-th-element-for-header-cell)
- [Forms](#forms)
  - [Wrap form control with `label` element](#wrap-form-control-with-label-element)
  - [Omit `for` attribute if possible](#omit-for-attribute-if-possible)
  - [Use appropriate `type` attribute for `input` element](#use-appropriate-type-attribute-for-input-element)
  - [Add `value` attribute to `input type="submit"`](#add-value-attribute-to-input-typesubmit)
  - [Add `title` attribute to `input` element when there is `pattern` attribute](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  - [Don’t use `placeholder` attribute for labeling](#dont-use-placeholder-attribute-for-labeling)
  - [Write one `option` element per line](#write-one-option-element-per-line)
  - [Add `max` attribute to `progress` element](#add-max-attribute-to-progress-element)
  - [Add `min` and `max` attribute to `meter` element](#add-min-and-max-attribute-to-meter-element)
  - [Place `legend` element as the first child of `fieldset` element](#place-legend-element-as-the-first-child-of-fieldset-element)
- [Scripting](#scripting)
  - [Omit `type` attribute for JavaScript](#omit-type-attribute-for-javascript)
  - [Don’t comment out contents of `script` element](#dont-comment-out-contents-of-script-element)
  - [Don’t use script-injected `script` element](#dont-use-script-injected-script-element)
- [Other](#other)
  - [Indent consistently](#indent-consistently)
  - [Use absolute path for internal links](#use-absolute-path-for-internal-links)
  - [Don’t use protocol-relative URL for external resources](#dont-use-protocol-relative-url-for-external-resources)
- [Contributors](#contributors)
- [Translators](#translators)
- [License](#license)


## General<span id="general"></span>


### Start with DOCTYPE<span id="start-with-doctype"></span>

DOCTYPE is required for activating no-quirks mode.

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Don’t use legacy or obsolete DOCTYPE<span id="dont-use-legacy-or-obsolete-doctype"></span>

DOCTYPE is not for DTD anymore, be simple.

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### Don’t use XML Declaration<span id="dont-use-xml-declaration"></span>

Are you sure you want to write XHTML?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### Don’t use character references as much as possible<span id="dont-use-character-references-as-much-as-possible"></span>

If you write an HTML document with UTF-8, almost all characters (including
Emoji) can be written directly.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Escape `&`, `<`, `>`, `"`, and `'` with named character references<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

These characters should escape always for a bug-free HTML document.

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### Use numeric character references for control or invisible characters<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

These characters are easily mistaken for another character. And also spec does
not guarantee to define a human readable name for these characters.

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### Put white spaces around comment contents<span id="put-white-spaces-around-comment-contents"></span>

Some character cannot be used immediately after comment open or before comment
close.

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### Don’t omit closing tag<span id="dont-omit-closing-tag"></span>

I think you don’t understand a rule for omitting closing tag.

Bad:

    <html>
      <body>
        ...

Good:

    <html>
      <body>
        ...
      </body>
    </html>


### Don’t mix empty element format<span id="dont-mix-empty-element-format"></span>

Consistency is a key for readability.

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Don’t put white spaces around tags and attribute values<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

There is no reason for doing this.

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### Don’t mix character cases<span id="dont-mix-character-cases"></span>

It gives a consistency also.

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>

Also Good:

    <A HREF="#general">General</A>


### Don’t mix quotation marks<span id="dont-mix-quotation-marks"></span>

Same as above.

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Don’t separate attributes with two or more white spaces<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

Your weird formatting rule confuses someone.

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### Omit boolean attribute value<span id="omit-boolean-attribute-value"></span>

It’s easy to write, isn’t it?

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### Omit namespaces<span id="omit-namespaces"></span>

SVG and MathML can be used directly in an HTML document.

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### Don’t use XML attributes<span id="dont-use-xml-attributes"></span>

We write an HTML document.

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

A tag string can be very complicated. This simple rule helps reading such tag
string.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Prefer default implicit ARIA semantics<span id="prefer-default-implicit-aria-semantics"></span>

Some element has an ARIA `role` implicitly in an HTML document, don’t specify it.

Bad:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Good:

    <nav>
      ...
    </nav>

    <hr>


## The root element<span id="the-root-element"></span>


### Add `lang` attribute<span id="add-lang-attribute"></span>

`lang` attribute will help translating an HTML document.

Bad:

    <html>

Good:

    <html lang="en-US">


### Keep `lang` attribute value as short as possible<span id="keep-lang-attribute-value-as-short-as-possible"></span>

Japanese is only used in Japan. So country code is not necessary.

Bad:

    <html lang="ja-JP">

Good:

    <html lang="ja">


### Avoid `data-*` as much as possible<span id="avoid-data-as-much-as-possible"></span>

An appropriate attribute can be handled properly by browsers.

Bad:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Good:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Document metadata<span id="document-metadata"></span>


### Add `title` element<span id="add-title-element"></span>

A value for `title` element is used by various application not only a browser.

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Don’t use `base` element<span id="dont-use-base-element"></span>

An absolute path or URL is safer for both developers and users.

Bad:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Good:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Specify MIME type of minor linked resources<span id="specify-mime-type-of-minor-linked-resources"></span>

This is a hint how application handles this resource.

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Don’t link to `favicon.ico`<span id="dont-link-to-faviconico"></span>

Almost all browsers fetch `/favicon.ico` automatically and asynchronously.

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### Add `apple-touch-icon` link<span id="add-apple-touch-icon-link"></span>

A default request path for touch icon was changed suddenly.

Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Add `title` attribute to alternate stylesheets<span id="add-title-attribute-to-alternate-stylesheets"></span>

A human readable label helps people selecting proper stylesheet.

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### For URL, use `link` element<span id="for-url-use-link-element"></span>

A value of `href` attribute can be resolved as URL.

Bad:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Good:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Specify document character encoding<span id="specify-document-character-encoding"></span>

UTF-8 is not default in all browsers yet.

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Don’t use legacy character encoding format<span id="dont-use-legacy-character-encoding-format"></span>

HTTP headers should be specified by a server, be simple.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### Specify character encoding at first<span id="specify-character-encoding-at-first"></span>

Spec requires the character encoding is specified within the first 1024 bytes of
the document.

Bad:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Use UTF-8<span id="use-utf-8"></span>

With UTF-8, you are free to use Emoji.

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### Omit `type` attribute for CSS<span id="omit-type-attribute-for-css"></span>

In HTML, default `type` attribute’s value of `style` element is `text/css`.

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### Don’t comment out contents of `style` element<span id="dont-comment-out-contents-of-style-element"></span>

This ritual is for the old browser.

Bad:

    <style>
    <!--
      ...
      -->
    </style>

Good:

    <style>
      ...
    </style>


### Don’t mix tag for CSS and JavaScript<span id="dont-mix-tag-for-css-and-javascript"></span>

Sometimes `script` element blocks DOM construction.

Bad:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Also good:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections<span id="sections"></span>


### Add `body` element<span id="add-body-element"></span>

Sometimes `body` element is complemented in unexpected position by a browser.

Bad:

    <html>
      <head>
        ...
      </head>
      ...
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


### Forget about `hgroup` element<span id="forget-about-hgroup-element"></span>

This element is not used very much.

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use `address` element only for contact information<span id="use-address-element-only-for-contact-information"></span>

`address` element is for email address, social network account, street address,
telephone number, or something you can get in touch with.

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Grouping content<span id="grouping-content"></span>


### Don’t start with newline in `pre` element<span id="dont-start-with-newline-in-pre-element"></span>

A first newline will ignored in the browsers, but second and later are rendered.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Use appropriate element in `blockquote` element<span id="use-appropriate-element-in-blockquote-element"></span>

`blockquote` element’s content is a quote, not a chunks of characters.

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don’t include attribution directly in `blockquote` element<span id="dont-include-attribution-directly-in-blockquote-element"></span>

`blockquote` element’s content is a quote.

Bad:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Also good:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Write one list item per line<span id="write-one-list-item-per-line"></span>

Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
line is hard toooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo read.

Bad:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Good:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Use `type` attribute for `ol` element<span id="use-type-attribute-for-ol-element"></span>

Sometimes marker referenced by the contents in the near. If you change marker
with `type` attribute, you will be safe to reference.

Bad:

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

Good:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Don’t use `dl` for dialogue<span id="dont-use-dl-for-dialogue"></span>

`dl` element is restricted to an association list in HTML.

Bad:

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

Good:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Place `figcaption` element as first or last child of `figure` element<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

Spec disallows `figcaption` element in the middle of `figure` element.

Bad:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Good:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Use `main` element<span id="use-main-element"></span>

`main` element can be used wrapping contents.

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>


### Avoid `div` element as much as possible<span id="avoid-div-element-as-much-as-possible"></span>

`div` element is an element of last resort.

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


## Text-level semantics<span id="text-level-semantics"></span>


### Don’t split same link that can be grouped<span id="dont-split-same-link-that-can-be-grouped"></span>

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


### Use `download` attribute for downloading a resource<span id="use-download-attribute-for-downloading-a-resource"></span>

It will force browsers to download linked resource to the storage.

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### Use `rel`, `hreflang`, and `type` attribute if needed<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

These hints helps applications how handle linked resource.

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Clear link text<span id="clear-link-text"></span>

Link text should be the label of its linked resource.

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Don’t use `em` element for warning or caution<span id="dont-use-em-element-for-warning-or-caution"></span>

These are seriousness. So, `strong` element is more appropriate.

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### Avoid `s`, `i`, `b`, and `u` element as much as possible<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

These elements’ semantics is too difficult to humans.

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### Don’t put quotes to `q` element<span id="dont-put-quotes-to-q-element"></span>

Quotes are provided by the browser.

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### Add `title` attribute to `abbr` element<span id="add-title-attribute-to-abbr-element"></span>

There is no other way to represent its expansion.

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### Markup `ruby` element verbosely<span id="markup-ruby-element-verbosely"></span>

`ruby` element support is not completed across the modern browsers.

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Add `datetime` attribute to non-machine-readable `time` element<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

When `datetime` attribute does not present, the format of `time` element’s
content is restricted.

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Specify code language with `class` attribute prefixed with `language-`<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

This is not a formal way, but spec mentions this.

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Keep `kbd` element as simple as possible<span id="keep-kbd-element-as-simple-as-possible"></span>

Nesting `kbd` element is too difficult to humans.

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### Avoid `span` element as much as possible<span id="avoid-span-element-as-much-as-possible"></span>

`span` element is an element of last resort.

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### Break after `br` element<span id="break-after-br-element"></span>

Line break should be needed where `br` element is used.

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Don’t use `br` element only for presentational purpose<span id="dont-use-br-element-only-for-presentational-purpose"></span>

`br` element is not for line breaking, it is for line breaks in the contents.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Edits<span id="edits"></span>


### Don’t stride `ins` and `del` element over other elements<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

Elements cannot be overflow other elements.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Embedded content<span id="embedded-content"></span>


### Provide fallback `img` element for `picture` element<span id="provide-fallback-img-element-for-picture-element"></span>

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


### Add `alt` attrbute to `img` element if needed<span id="add-alt-attrbute-to-img-element-if-needed"></span>

`alt` attribute helps those who cannot process images or have image loading
disabled.

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Empty `alt` attribute if possible<span id="empty-alt-attribute-if-possible"></span>

If the image is supplemental, there is equivalent content somewhere in the near.

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### Omit `alt` attribute if possible<span id="omit-alt-attribute-if-possible"></span>

Sometimes you don’t know what text is suitable for `alt` attribute.

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Empty `iframe` element<span id="empty-iframe-element"></span>

There is some restriction in its content. Being empty is always safe.

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### Markup `map` element content<span id="markup-map-element-content"></span>

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


### Provide fallback content for `audio` or `video` element<span id="provide-fallback-content-for-audio-or-video-element"></span>

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


## Tabular data<span id="tabular-data"></span>


### Write one cell per line<span id="write-one-cell-per-line"></span>

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


### Use `th` element for header cell<span id="use-th-element-for-header-cell"></span>

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


## Forms<span id="forms"></span>


### Wrap form control with `label` element<span id="wrap-form-control-with-label-element"></span>

`label` element helps focusing form element.

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omit `for` attribute if possible<span id="omit-for-attribute-if-possible"></span>

`label` element can contain some form elements.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### Use appropriate `type` attribute for `input` element<span id="use-appropriate-type-attribute-for-input-element"></span>

With appropriate `type`, a browser gives tiny features to the `input` element.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### Add `value` attribute to `input type="submit"`<span id="add-value-attribute-to-input-typesubmit"></span>

The default label for submit button is not standarized across the browser and
languages.

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### Add `title` attribute to `input` element when there is `pattern` attribute<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

If input text does not match to `pattern` attribute, the value of `title`
attribute will be display as a hint.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Don’t use `placeholder` attribute for labeling<span id="dont-use-placeholder-attribute-for-labeling"></span>

`label` element is for a label, `placeholder` attribute is for a short hint.

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Write one `option` element per line<span id="write-one-option-element-per-line"></span>

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


### Add `max` attribute to `progress` element<span id="add-max-attribute-to-progress-element"></span>

With `max` attribute, the `value` attribute can be write in an easy format.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### Add `min` and `max` attribute to `meter` element<span id="add-min-and-max-attribute-to-meter-element"></span>

With `min` and `max` attribute, the `value` attribute can be write in an easy
format.

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Place `legend` element as the first child of `fieldset` element<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

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


## Scripting<span id="scripting"></span>


### Omit `type` attribute for JavaScript<span id="omit-type-attribute-for-javascript"></span>

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


### Don’t comment out contents of `script` element<span id="dont-comment-out-contents-of-script-element"></span>

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


### Don’t use script-injected `script` element<span id="dont-use-script-injected-script-element"></span>

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


## Other<span id="other"></span>


### Indent consistently<span id="indent-consistently"></span>

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


### Use absolute path for internal links<span id="use-absolute-path-for-internal-links"></span>

An absolute path works better on your localhost without internet connection.

Bad:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Good:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Don’t use protocol-relative URL for external resources<span id="dont-use-protocol-relative-url-for-external-resources"></span>

With protocol, you can load external resources reliably and safely.

Bad:

    <script src="//example.com/js/library.js">

Good:

    <script src="https://example.com/js/library.js">




## Contributors<span id="contributors"></span>

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Translators

- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@mrcaidev](https://github.com/mrcaidev)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
