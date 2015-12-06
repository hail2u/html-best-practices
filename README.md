HTML Best Practices
===================

For writing maintainable and scalable HTML documents.

<!-- #toc -->

* [General](#general)
  * [Start with DOCTYPE](#start-with-doctype)
  * [Don't use legacy or obsolete DOCTYPE](#dont-use-legacy-or-obsolete-doctype)
  * [Don't use XML Declaration](#dont-use-xml-declaration)
  * [Don't use character references as much as possible](#dont-use-character-references-as-much-as-possible)
  * [Escape `&`, `<`, `>`, `"`, and `'` with named character references](#escape-----and--with-named-character-references)
  * [Use named character references for control or invisible characters](#use-named-character-references-for-control-or-invisible-characters)
  * [Put white spaces around comment contents](#put-white-spaces-around-comment-contents)
  * [Don't omit closing tag](#dont-omit-closing-tag)
  * [Don't mix empty element format](#dont-mix-empty-element-format)
  * [Don't put white spaces around tags and attribute values](#dont-put-white-spaces-around-tags-and-attribute-values)
  * [Don't mix character cases](#dont-mix-character-cases)
  * [Don't mix quotation marks](#dont-mix-quotation-marks)
  * [Don't separate attributes with two or more white spaces](#dont-separate-attributes-with-two-or-more-white-spaces)
  * [Omit boolean attribute value](#omit-boolean-attribute-value)
  * [Omit namespaces](#omit-namespaces)
  * [Don't use XML attributes](#dont-use-xml-attributes)
  * [Don't mix `data-*`, Microdata, and RDFa Lite attributes with common attributes](#dont-mix-data--microdata-and-rdfa-lite-attributes-with-common-attributes)
  * [Prefer strong native semantics](#prefer-strong-native-semantics)
* [The root element](#the-root-element)
  * [Add `lang` attribute](#add-lang-attribute)
  * [Keep `lang` attribute value as short as possible](#keep-lang-attribute-value-as-short-as-possible)
* [Document metadata](#document-metadata)
  * [Add `title` element](#add-title-element)
  * [Don’t use `base` element](#dont-use-base-element)
  * [Specify MIME type of minor linked resources](#specify-mime-type-of-minor-linked-resources)
  * [Don't link to `favicon.ico`](#dont-link-to-faviconico)
  * [Add `title` attribute to alternate stylesheets](#add-title-attribute-to-alternate-stylesheets)
  * [Specify document character encoding](#specify-document-character-encoding)
  * [Don't use legacy character encoding format](#dont-use-legacy-character-encoding-format)
  * [Specify character encoding at first](#specify-character-encoding-at-first)
  * [Use UTF-8](#use-utf-8)
  * [Omit `type` attribute for CSS](#omit-type-attribute-for-css)
  * [Don't comment out contents of `style` element](#dont-comment-out-contents-of-style-element)
  * [Don't mix tag for CSS and JavaScript](#dont-mix-tag-for-css-and-javascript)
* [Sections](#sections)
  * [Add `body` tag](#add-body-tag)
  * [Forget about `hgroup` element](#forget-about-hgroup-element)
  * [Use `address` element only for contact information](#use-address-element-only-for-contact-information)
* [Grouping content](#grouping-content)
  * [Don't start with newline in `pre` element](#dont-start-with-newline-in-pre-element)
  * [Use appropriate element in `blockquote` element](#use-appropriate-element-in-blockquote-element)
  * [Don't include attribution directly in `blockquote` element](#dont-include-attribution-directly-in-blockquote-element)
  * [Write one list item per line](#write-one-list-item-per-line)
  * [Use `type` attribute for `ol` element](#use-type-attribute-for-ol-element)
  * [Don’t use `dl` for dialogue](#dont-use-dl-for-dialogue)
  * [Place `figcaption` element as first or last child of `figure` element](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  * [Use `main` element](#use-main-element)
  * [Avoid `div` element as much as possible](#avoid-div-element-as-much-as-possible)
* [Text-level semantics](#text-level-semantics)
  * [Don't split same link that can be grouped](#dont-split-same-link-that-can-be-grouped)
  * [Use `download` attribute for downloading a resource](#use-download-attribute-for-downloading-a-resource)
  * [Use `rel`, `hreflang`, and `type` attribute if needed](#use-rel-hreflang-and-type-attribute-if-needed)
  * [Clear link text](#clear-link-text)
  * [Don't use `em` element for warning or caution](#dont-use-em-element-for-warning-or-caution)
  * [Avoid `s`, `i`, `b`, and `u` element as much as possible](#avoid-s-i-b-and-u-element-as-much-as-possible)
  * [Don't put quotes to `q` element](#dont-put-quotes-to-q-element)
  * [Add `title` attribute to `abbr` element](#add-title-attribute-to-abbr-element)
  * [Markup `ruby` element verbosely](#markup-ruby-element-verbosely)
  * [Add `datetime` attribute to non-machine-readable `time` element](#add-datetime-attribute-to-non-machine-readable-time-element)
  * [Specify code language with `class` attribute prefixed with `language-`](#specify-code-language-with-class-attribute-prefixed-with-language-)
  * [Keep `kbd` element as simple as possible](#keep-kbd-element-as-simple-as-possible)
  * [Avoid `span` element as much as possible](#avoid-span-element-as-much-as-possible)
  * [Break after `br` element](#break-after-br-element)
  * [Don't use `br` element only for presentational purpose](#dont-use-br-element-only-for-presentational-purpose)
* [Edits](#edits)
  * [Don't stride `ins` and `del` element over other elements](#dont-stride-ins-and-del-element-over-other-elements)
* [Embedded content](#embedded-content)
  * [Provide fallback `img` element for `picture` element](#provide-fallback-img-element-for-picture-element)
  * [Add `alt` attrbute to `img` element if needed](#add-alt-attrbute-to-img-element-if-needed)
  * [Empty `alt` attribute if possible](#empty-alt-attribute-if-possible)
  * [Omit `alt` attibute if possible](#omit-alt-attibute-if-possible)
  * [Empty `iframe` element](#empty-iframe-element)
  * [Markup `map` element content](#markup-map-element-content)
  * [Provide fallback content for `audio` or `video` element](#provide-fallback-content-for-audio-or-video-element)
* [Tabular data](#tabular-data)
  * [Write one cell per line](#write-one-cell-per-line)
  * [Use `th` element for header cell](#use-th-element-for-header-cell)
* [Forms](#forms)
  * [Wrap form control with `label` element](#wrap-form-control-with-label-element)
  * [Omit `for` attribute if possible](#omit-for-attribute-if-possible)
  * [Use appropriate `type` attribute for `input` element](#use-appropriate-type-attribute-for-input-element)
  * [Add `value` attribute to `input type="submit"`](#add-value-attribute-to-input-typesubmit)
  * [Add `title` attibute to `input` element when there is `pattern` attribute](#add-title-attibute-to-input-element-when-there-is-pattern-attribute)
  * [Don't use `placeholder` attribute for labeling](#dont-use-placeholder-attribute-for-labeling)
  * [Write one `option` element per line](#write-one-option-element-per-line)
  * [Add `max` attribute to `progress` element](#add-max-attribute-to-progress-element)
  * [Add `min` and `max` attribute to `meter` element](#add-min-and-max-attribute-to-meter-element)
  * [Place `legend` element as first child of `fieldset` element](#place-legend-element-as-first-child-of-fieldset-element)
* [Scripting](#scripting)
  * [Omit `type` attribute for JavaScript](#omit-type-attribute-for-javascript)
  * [Add `defer` attribute if `script` element has `async` attribute](#add-defer-attribute-if-script-element-has-async-attribute)
  * [Don't comment out contents of `script` element](#dont-comment-out-contents-of-script-element)
  * [Don't use script-injected `script` element](#dont-use-script-injected-script-element)
* [Other](#other)
  * [Indent consistently](#indent-consistently)
  * [Use absolute path for internal links](#use-absolute-path-for-internal-links)
* [Contributors](#contributors)
* [License](#license)

<!-- /toc -->


General
-------

### Start with DOCTYPE

`DOCTYPE` is required for activating standard mode.

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Don't use legacy or obsolete DOCTYPE

`DOCTYPE` is not for DTD anymore, be simple.

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### Don't use XML Declaration

Are you sure you want to write XHTML?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### Don't use character references as much as possible

If you write a HTML document with UTF-8, almost all charaters (including Emoji)
can be write directly.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Escape `&`, `<`, `>`, `"`, and `'` with named character references

These characters should escape always for a bug-free HTML document.

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### Use numeric character references for control or invisible characters

These characters are easily mistaken for another character. And also spec does
not guarantee to define a human readable name for these characters.

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### Put white spaces around comment contents

Some character cannot be used immediately after comment open tag or before
comment close tag.

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### Don't omit closing tag

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


### Don't mix empty element format

Consistency is a key for readability.

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Don't put white spaces around tags and attribute values

There is no reason for doing this.

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### Don't mix character cases

It gives a consistency also.

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>


### Don't mix quotation marks

Same as above.

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Don't separate attributes with two or more white spaces

Your weird formatting rule confuses someone.

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### Omit boolean attribute value

It’s easy to write, isn’t it?

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### Omit namespaces

SVG and MathML can be used directly in a HTML5 document.

Bad:

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      ...
    </svg>

Good:

    <svg version="1.1">
      ...
    </svg>


### Don't use XML attributes

We write a HTML document.

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### Don't mix `data-*`, Microdata, and RDFa Lite attributes with common attributes

A tag string can be very complicated. This simple rule helps reading such tag
string.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Prefer strong native semantics

Some element has a implicit role in a HTML document, don’t specify (or change).

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


The root element
----------------

### Add `lang` attribute

`lang` attribute will help translating a HTML document.

Bad:

    <html>

Good:

    <html lang="en-US">


### Keep `lang` attribute value as short as possible

Japanese is only used in Japan. So country code is not necessary.

Bad

    <html lang="ja-JP">

Good:

    <html lang="ja">


Document metadata
-----------------

### Add `title` element

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


### Don’t use `base` element

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


### Specify MIME type of minor linked resources

This is a hint how application handles this resource.

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Don't link to `favicon.ico`

Almost all browsers fetch `/favicon.ico` automatically and asynchronously.

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### Add `title` attribute to alternate stylesheets

A human readable label helps people selecting proper stylesheet.

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Specify document character encoding

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


### Don't use legacy character encoding format

HTTP headers should be specified by a server, be simple.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### Specify character encoding at first

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


### Use UTF-8

With UTF-8, you can free to use Emoji.

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### Omit `type` attribute for CSS

In HTML5,  default `type` attribute’s value of `style` element is `text/css`.

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### Don't comment out contents of `style` element

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


### Don't mix tag for CSS and JavaScript

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


Sections
--------

### Add `body` tag

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


### Forget about `hgroup` element

W3C spec removes this element.

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use `address` element only for contact information

`address` element is for email address, social network account, street address,
telephone number, or something you can get in touch with.

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


Grouping content
----------------

### Don't start with newline in `pre` element

It will rendered as actual line break in the browsers.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Use appropriate element in `blockquote` element

`blockquote` content is a quote, not a chunks of characters.

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don't include attribution directly in `blockquote` element

`blockquote` content is a quote.

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

Also good (recommended by WHATWG):

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>

Also good too (recommended by W3C):

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    
      <footer>— HTML Best Practices</footer>
    </blockquote>


### Write one list item per line

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


### Use `type` attribute for `ol` element

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


### Don’t use `dl` for dialogue

`dl` element is restricted to an association list in HTML5.

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
    <p>Costello: Who's playing first?</p>
    <p>Abbott: That's right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Place `figcaption` element as first or last child of `figure` element

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


Text-level semantics
--------------------

### Don't split same link that can be grouped

`a` element can wrap all elements (except `a` element itself).

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


### Don't use `em` element for warning or caution

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


### Don't put quotes to `q` element

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

`ruby` support is not completed across the modern browsers.

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

    <code>&lt;DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;DOCTYPE html&gt;</code>


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


### Don't use `br` element only for presentational purpose

`br` element is not for line breaking, it is for line breaks in the contents.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


Edits
-----

### Don't stride `ins` and `del` element over other elements

Elements cannot be overflow other elements.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don't trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don't trust!</p></del>


Embedded content
----------------

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


### Omit `alt` attibute if possible

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

This content present to a screen reader.

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

Fallback content is needed for newly introduced elements in HTML5.

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


Tabular data
------------

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


Forms
-----

### Wrap form control with `label` element

`label` helps focusing form element.

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omit `for` attribute if possible

`label` can contain some form elements.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### Use appropriate `type` attribute for `input` element

With appropriate `type`, browsers gives a tiny features to the `input` element.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### Add `value` attribute to `input type="submit"`

The default lable for submit button is not standarized across the browser and
languages.

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### Add `title` attibute to `input` element when there is `pattern` attribute

If input text does not match to `pattern`, the value of `title` attribute will
be display as a hint.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Don't use `placeholder` attribute for labeling

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

With `max` attribute, the `value` attribute can be write in an easy format.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### Add `min` and `max` attribute to `meter` element

With `min` and `max` attribute, the `value` attribute can be write in an easy
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


Scripting
---------

### Omit `type` attribute for JavaScript

In HTML5, the default `type` attribute’s value of `script` element is
`text/javascript`.

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### Add `defer` attribute if `script` element has `async` attribute

`async` is better, but some browser doesn’t support this attribute. `defer` is
not bad.

Bad:

    <script async src="/js/main.js"></script>

Good:

    <script async defer src="/js/main.js"></script>


### Don't comment out contents of `script` element

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


### Don't use script-injected `script` element

`async` is the best for both simplicity and performance.

Bad:

    <script>
      var script = document.createElement('script');
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName('head')[0].appendChild(script);
    </script>

Good:

    <script async defer src="//example.com/widget.js"></script>


Other
-----

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


Contributors
------------

- [@hail2u]
- [@momdo]


License
-------

[CC0]


[@hail2u]: https://github.com/hail2u
[@momdo]:  https://github.com/momdo
[CC0]:     http://creativecommons.org/publicdomain/zero/1.0/
