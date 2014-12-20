HTML Best Practices
===================

For writing maintainable and scalable HTML documents.


* [General](#general)
  * [Start with DOCTYPE](#start-with-doctype)
  * [Don't use legacy or obsolete DOCTYPE](#dont-use-legacy-or-obsolete-doctype)
  * [Don't use XML Declaration](#dont-use-xml-declaration)
  * [Don't use character references as possible](#dont-use-character-references-as-possible)
  * [Use named character references for control or invisible characters](#use-named-character-references-for-control-or-invisible-characters)
  * [Add white spaces around comment contents](#add-white-spaces-around-comment-contents)
  * [Don't mix quotation marks](#dont-mix-quotation-marks)
  * [Don't mix character cases](#dont-mix-character-cases)
  * [Don't put white spaces around tags and attribute values](#dont-put-white-spaces-around-tags-and-attribute-values)
  * [Don't separate attributes with two or more white spaces](#dont-separate-attributes-with-two-or-more-white-spaces)
  * [Omit boolean attribute value](#omit-boolean-attribute-value)
  * [Don't omit closing tag](#dont-omit-closing-tag)
  * [Don't mix empty element format](#dont-mix-empty-element-format)
  * [Omit namespaces](#omit-namespaces)
  * [Don't use XML attributes](#dont-use-xml-attributes)
  * [Don't mix `data-*`, Microdata, and RDFa Lite attributes with common attributes](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  * [Prefer strong native semantics](#prefer-strong-native-semantics)
* [The root element](#the-root-element)
  * [Don't omit `lang` attribute](#dont-omit-lang-attribute)
  * [Keep `lang` attribute value as short as possible](#keep-lang-attribute-value-as-short-as-possible)
* [Document metadata](#document-metadata)
  * [Don't omit `title` element](#dont-omit-title-element)
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
  * [Don't omit `body` tag](#dont-omit-body-tag)
  * [Forget about `hgroup` element](#forget-about-hgroup-element)
  * [Use `address` element only for contact information](#use-address-element-only-for-contact-information)
* [Grouping content](#grouping-content)
  * [Don't start with newline in `pre` element](#dont-start-with-newline-in-pre-element)
  * [Use appropriate element in `blockquote` element](#use-appropriate-element-in-blockquote-element)
  * [Don't include attribution directly in `blockquote` element](#dont-include-attribution-directly-in-blockquote-element)
  * [Write one list item per line](#write-one-list-item-per-line)
  * [Use `type` attribute for `ol` element](#use-type-attribute-for-ol-element)
  * [Place `figcaption` element as first or last child of `figure` element](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  * [Use `main` element](#use-main-element)
  * [Avoid `div` element as possible](#avoid-div-element-as-possible)
* [Text-level semantics](#text-level-semantics)
  * [Don't split same link that can be grouped](#dont-split-same-link-that-can-be-grouped)
  * [Use `download` attribute for downloading a resource](#use-download-attribute-for-downloading-a-resource)
  * [Use `rel`, `hreflang`, and `type` attribute if needed](#use-rel-hreflang-and-type-attribute-if-needed)
  * [Clear link text](#clear-link-text)
  * [Don't use `em` element for warning or caution](#dont-use-em-element-for-warning-or-caution)
  * [Avoid `s`, `i`, `b`, and `u` element as possible](#avoid-s-i-b-and-u-element-as-possible)
  * [Don't put quotes to `q` element](#dont-put-quotes-to-q-element)
  * [Add `title` attribute to `abbr` element](#add-title-attribute-to-abbr-element)
  * [Markup `ruby` element verbosely](#markup-ruby-element-verbosely)
  * [Add `datetime` attribute to non W3CDTF time](#add-datetime-attribute-to-non-w3cdtf-time)
  * [Specify code language with `class` prefixed with `language-`](#specify-code-language-with-class-prefixed-with-language-)
  * [Keep `kbd` element simple as possible](#keep-kbd-element-simple-as-possible)
  * [Avoid `span` element as possible](#avoid-span-element-as-possible)
  * [Break after `br` element](#break-after-br-element)
  * [Don't use `br` element only for presentational purpose](#dont-use-br-element-only-for-presentational-purpose)
* [Edits](#edits)
  * [Don't stride over other elements](#dont-stride-over-other-elements)
* [Embedded content](#embedded-content)
  * [Don't forget `alt` attrbute if needed](#dont-forget-alt-attrbute-if-needed)
  * [Empty `alt` attribute if possible](#empty-alt-attribute-if-possible)
  * [Omit `alt` attibute if possible](#omit-alt-attibute-if-possible)
  * [Empty `iframe` element](#empty-iframe-element)
  * [Markup `map` element content](#markup-map-element-content)
* [Tabular data](#tabular-data)
  * [Write one cell per line](#write-one-cell-per-line)
  * [Use `th` element for header cell](#use-th-element-for-header-cell)
* [Forms](#forms)
  * [Wrap form controls with `label` element](#wrap-form-controls-with-label-element)
  * [Omit `for` attribute if possible](#omit-for-attribute-if-possible)
  * [Use appropriate `type` attribute for `input` element](#use-appropriate-type-attribute-for-input-element)
  * [Specify `value` attribute for `input type="submit"`](#specify-value-attribute-for-input-typesubmit)
  * [Include `title` attibute when there is `pattern` attribute](#include-title-attibute-when-there-is-pattern-attribute)
  * [Don't use `placeholder` attribute for labeling](#dont-use-placeholder-attribute-for-labeling)
  * [Write one `option` element per line](#write-one-option-element-per-line)
  * [Use `max` attribute for `progress` element](#use-max-attribute-for-progress-element)
  * [Use `min` and `max` attribute for `meter` element](#use-min-and-max-attribute-for-meter-element)
  * [Place `legend` element as first child of `fieldset` element](#place-legend-element-as-first-child-of-fieldset-element)
* [Scripting](#scripting)
  * [Omit `type` attribute for `script` element](#omit-type-attribute-for-script-element)
  * [Add `defer` attribute if `script` element has `async` attribute](#add-defer-attribute-if-script-element-has-async-attribute)
  * [Don't comment out contents of `script` element](#dont-comment-out-contents-of-script-element)
  * [Don't use script-injected `script` element](#dont-use-script-injected-script-element)
* [Other](#other)
  * [Indent consistently](#indent-consistently)
* [Contributors](#contributors)
* [License](#license)


General
-------

### Start with DOCTYPE

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

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### Don't use XML Declaration

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### Don't use character references as possible

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Use named character references for control or invisible characters

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&nbsp;hour.</p>


### Add white spaces around comment contents

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### Don't mix quotation marks

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Don't mix character cases

Bad:

    <a HREF="#general">General</a>

Good:

    <a href="#general">General</a>


### Don't put white spaces around tags and attribute values

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### Don't separate attributes with two or more white spaces

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### Omit boolean attribute value

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### Don't omit closing tag

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

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Omit namespaces

Bad:

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    ...
    </svg>

Good:

    <svg version="1.1">
    ...
    </svg>


### Don't use XML attributes

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### Don't mix `data-*`, Microdata, and RDFa Lite attributes with common attributes

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Prefer strong native semantics

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

### Don't omit `lang` attribute

Bad:

    <html>

Good:

    <html lang="en-US">


### Keep `lang` attribute value as short as possible

Bad

    <html lang="ja-JP">

Good:

    <html lang="ja">


Document metadata
-----------------

### Don't omit `title` element

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Specify MIME type of minor linked resources

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Don't link to `favicon.ico`

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

Place `favicon.ico` in the root directory.


### Add `title` attribute to alternate stylesheets

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Specify document character encoding

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

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### Specify character encoding at first

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

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### Omit `type` attribute for CSS

Bad:

    <style type="text/css">
    ...
    </style>

Good:

    <style>
    ...
    </style>


### Don't comment out contents of `style` element

Bad:

    <style>
    <!--
    body {
      lint-height: 1.5;
    }
    -->
    </style>

Good:

    <style>
    body {
      lint-height: 1.5;
    }
    </style>


### Don't mix tag for CSS and JavaScript

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

### Don't omit `body` tag

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

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use `address` element only for contact information

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


Grouping content
----------------

### Don't start with newline in `pre` element

Bad:

    <pre>
    &lt;!DOCTYPE html>
    </pre>

Good:

    <pre>&lt;!DOCTYPE html>
    </pre>


### Use appropriate element in `blockquote` element

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don't include attribution directly in `blockquote` element

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
      <ol type="upper-roman">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Place `figcaption` element as first or last child of `figure` element

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

Bad:

    <div id="content">
    ...
    </div>

Good:

    <main>
    ...
    </main>


### Avoid `div` element as possible

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

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Use `download` attribute for downloading a resource

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### Use `rel`, `hreflang`, and `type` attribute if needed

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Clear link text

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Don't use `em` element for warning or caution

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### Avoid `s`, `i`, `b`, and `u` element as possible

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### Don't put quotes to `q` element

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### Add `title` attribute to `abbr` element

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### Markup `ruby` element verbosely

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Add `datetime` attribute to non W3CDTF time

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Specify code language with `class` prefixed with `language-`

Bad:

    <code>&lt;DOCTYPE html></code>

Good:

    <code class="language-html">&lt;DOCTYPE html></code>


### Keep `kbd` element simple as possible

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### Avoid `span` element as possible

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### Break after `br` element

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Don't use `br` element only for presentational purpose

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

### Don't stride over other elements

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don't trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don't trust!</p></del>


Embedded content
----------------

### Don't forget `alt` attrbute if needed

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Empty `alt` attribute if possible

Bad:

    <img src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### Omit `alt` attibute if possible

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">


### Empty `iframe` element

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### Markup `map` element content

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


Tabular data
------------

### Write one cell per line

Bad:

    <td>General</td><td>The root Element</td><td>Sections</td>

Good:

    <td>General</td>
    <td>The root Element</td>
    <td>Sections</td>


### Use `th` element for header cell

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

### Wrap form controls with `label` element

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omit `for` attribute if possible

Bad:

    <label for="q">Query: <input id="q" name="q" type="text"></label>

Good:

    <label>Query: <input name="q" type="text"></label>


### Use appropriate `type` attribute for `input` element

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### Specify `value` attribute for `input type="submit"`


Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### Include `title` attibute when there is `pattern` attribute

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Don't use `placeholder` attribute for labeling

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doeexample.com" type="text"></label>


### Write one `option` element per line

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


### Use `max` attribute for `progress` element

Bad:

    <progress value="0.5"> 50% </progress>

Good:

    <progress max="100" value="50"> 50% </progress>


### Use `min` and `max` attribute for `meter` element

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Place `legend` element as first child of `fieldset` element

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

### Omit `type` attribute for `script` element

Bad:

    <script type="text/javascript">
    ...
    </script>

Good:

    <script>
    ...
    </script>


### Add `defer` attribute if `script` element has `async` attribute

Bad:

    <script async src="/js/main.js"></script>

Good:

    <script async defer src="/js/main.js"></script>


### Don't comment out contents of `script` element

Bad:

    <script>/*<![CDATA[*/
    ...
    /*]]>*/</script>

Also bad:

    <script>
    //<!--
    ...
    //-->
    </script>

Good:

    <script>
    ...
    </script>


### Don't use script-injected `script` element

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
