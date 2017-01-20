Translations: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md)

HTML Best Practices
===================

유지보수 및 확장할 수 있는 HTML 문서를 만들기 위해

<!-- #toc -->

* [General](#general)
  * [Start with DOCTYPE](#start-with-doctype)
  * [Don’t use legacy or obsolete DOCTYPE](#dont-use-legacy-or-obsolete-doctype)
  * [Don’t use XML Declaration](#dont-use-xml-declaration)
  * [Don’t use character references as much as possible](#dont-use-character-references-as-much-as-possible)
  * [Escape `&`, `<`, `>`, `"`, and `'` with named character references](#escape-----and--with-named-character-references)
  * [Use numeric character references for control or invisible characters](#use-numeric-character-references-for-control-or-invisible-characters)
  * [Put white spaces around comment contents](#put-white-spaces-around-comment-contents)
  * [Don’t omit closing tag](#dont-omit-closing-tag)
  * [Don’t mix empty element format](#dont-mix-empty-element-format)
  * [Don’t put white spaces around tags and attribute values](#dont-put-white-spaces-around-tags-and-attribute-values)
  * [Don’t mix character cases](#dont-mix-character-cases)
  * [Don’t mix quotation marks](#dont-mix-quotation-marks)
  * [Don’t separate attributes with two or more white spaces](#dont-separate-attributes-with-two-or-more-white-spaces)
  * [Omit boolean attribute value](#omit-boolean-attribute-value)
  * [Omit namespaces](#omit-namespaces)
  * [Don’t use XML attributes](#dont-use-xml-attributes)
  * [Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes](#dont-mix-data--microdata-and-rdfa-lite-attributes-with-common-attributes)
  * [Prefer default implicit ARIA semantics](#prefer-default-implicit-aria-semantics)
* [The root element](#the-root-element)
  * [Add `lang` attribute](#add-lang-attribute)
  * [Keep `lang` attribute value as short as possible](#keep-lang-attribute-value-as-short-as-possible)
  * [Avoid `data-*` as much as possible](#avoid-data--as-much-as-possible)
* [Document metadata](#document-metadata)
  * [Add `title` element](#add-title-element)
  * [Don’t use `base` element](#dont-use-base-element)
  * [Specify MIME type of minor linked resources](#specify-mime-type-of-minor-linked-resources)
  * [Don’t link to `favicon.ico`](#dont-link-to-faviconico)
  * [Add `title` attribute to alternate stylesheets](#add-title-attribute-to-alternate-stylesheets)
  * [For URL, use `link` element](#for-url-use-link-element)
  * [Specify document character encoding](#specify-document-character-encoding)
  * [Don’t use legacy character encoding format](#dont-use-legacy-character-encoding-format)
  * [Specify character encoding at first](#specify-character-encoding-at-first)
  * [Use UTF-8](#use-utf-8)
  * [Omit `type` attribute for CSS](#omit-type-attribute-for-css)
  * [Don’t comment out contents of `style` element](#dont-comment-out-contents-of-style-element)
  * [Don’t mix tag for CSS and JavaScript](#dont-mix-tag-for-css-and-javascript)
* [Sections](#sections)
  * [Add `body` element](#add-body-element)
  * [Forget about `hgroup` element](#forget-about-hgroup-element)
  * [Use `address` element only for contact information](#use-address-element-only-for-contact-information)
* [Grouping content](#grouping-content)
  * [Don’t start with newline in `pre` element](#dont-start-with-newline-in-pre-element)
  * [Use appropriate element in `blockquote` element](#use-appropriate-element-in-blockquote-element)
  * [Don’t include attribution directly in `blockquote` element](#dont-include-attribution-directly-in-blockquote-element)
  * [Write one list item per line](#write-one-list-item-per-line)
  * [Use `type` attribute for `ol` element](#use-type-attribute-for-ol-element)
  * [Don’t use `dl` for dialogue](#dont-use-dl-for-dialogue)
  * [Place `figcaption` element as first or last child of `figure` element](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  * [Use `main` element](#use-main-element)
  * [Avoid `div` element as much as possible](#avoid-div-element-as-much-as-possible)
* [Text-level semantics](#text-level-semantics)
  * [Don’t split same link that can be grouped](#dont-split-same-link-that-can-be-grouped)
  * [Use `download` attribute for downloading a resource](#use-download-attribute-for-downloading-a-resource)
  * [Use `rel`, `hreflang`, and `type` attribute if needed](#use-rel-hreflang-and-type-attribute-if-needed)
  * [Clear link text](#clear-link-text)
  * [Don’t use `em` element for warning or caution](#dont-use-em-element-for-warning-or-caution)
  * [Avoid `s`, `i`, `b`, and `u` element as much as possible](#avoid-s-i-b-and-u-element-as-much-as-possible)
  * [Don’t put quotes to `q` element](#dont-put-quotes-to-q-element)
  * [Add `title` attribute to `abbr` element](#add-title-attribute-to-abbr-element)
  * [Markup `ruby` element verbosely](#markup-ruby-element-verbosely)
  * [Add `datetime` attribute to non-machine-readable `time` element](#add-datetime-attribute-to-non-machine-readable-time-element)
  * [Specify code language with `class` attribute prefixed with `language-`](#specify-code-language-with-class-attribute-prefixed-with-language-)
  * [Keep `kbd` element as simple as possible](#keep-kbd-element-as-simple-as-possible)
  * [Avoid `span` element as much as possible](#avoid-span-element-as-much-as-possible)
  * [Break after `br` element](#break-after-br-element)
  * [Don’t use `br` element only for presentational purpose](#dont-use-br-element-only-for-presentational-purpose)
* [Edits](#edits)
  * [Don’t stride `ins` and `del` element over other elements](#dont-stride-ins-and-del-element-over-other-elements)
* [Embedded content](#embedded-content)
  * [Provide fallback `img` element for `picture` element](#provide-fallback-img-element-for-picture-element)
  * [Add `alt` attrbute to `img` element if needed](#add-alt-attrbute-to-img-element-if-needed)
  * [Empty `alt` attribute if possible](#empty-alt-attribute-if-possible)
  * [Omit `alt` attribute if possible](#omit-alt-attribute-if-possible)
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
  * [Add `title` attribute to `input` element when there is `pattern` attribute](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  * [Don’t use `placeholder` attribute for labeling](#dont-use-placeholder-attribute-for-labeling)
  * [Write one `option` element per line](#write-one-option-element-per-line)
  * [Add `max` attribute to `progress` element](#add-max-attribute-to-progress-element)
  * [Add `min` and `max` attribute to `meter` element](#add-min-and-max-attribute-to-meter-element)
  * [Place `legend` element as the first child of `fieldset` element](#place-legend-element-as-the-first-child-of-fieldset-element)
* [Scripting](#scripting)
  * [Omit `type` attribute for JavaScript](#omit-type-attribute-for-javascript)
  * [Don’t comment out contents of `script` element](#dont-comment-out-contents-of-script-element)
  * [Don’t use script-injected `script` element](#dont-use-script-injected-script-element)
* [Other](#other)
  * [Indent consistently](#indent-consistently)
  * [Use absolute path for internal links](#use-absolute-path-for-internal-links)
* [Contributors](#contributors)
* [License](#license)

<!-- /toc -->


공통
-------

### DOCTYPE으로 시작해라

DOCTYPE은 표준 모드를 활성화하기 위해 필요하다.

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### 레거시 혹은 폐기된 DOCTYPE을 쓰지 마라

DOCTYPE은 더 이상 DTD가 아니다, 간단해져라

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### XML 선언을 쓰지 말아라

정말 XHTML을 쓸거니?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### 문자 레퍼런스를 가능한 한 사용하지 말아라

만약 HTML문서를 UTF-8로 작성하고 있다면, 
대부분의 문자(이모티콘 포함)를 직접적으로 쓸 수 있다.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환해라

이 문자들은 버그가 없는 HTML 문서를 만들기위해 반드시 변환해두어야한다.

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### 제어 문자나 보이지 않는 문자를 제어하기 위해 숫자 문자 레퍼런스를 사용하라

이 문자들은 다른 문자로 쉽게 오인됩니다. 또한 spec은 이러한 문자에 대해 사람이 읽을 수있는 이름을 정의하는 것을 보장하지 않습니다.

이 문자들은 다른 문자로 쉽게 오인된다.
spec은 이러한 문자에 대해 사람이 읽을 수 있는 이름을 정의하는 걸 보장하지 않는다.

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### 주석 내용 주위에 공백을 넣어라

일부 문자는 주석의 여는 태그 바로 뒤나 닫는 태그 바로 앞에 붙어서 넣을 수 없다.

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### 닫는 태그를 생략하지 말아라

내 생각엔 닫는 태그 생략 룰에 대해 이해하지 못했을 가능성이 높다.

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


### 빈 요소 포맷을 섞지 마라

일관성은 가독성의 핵심이다.

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### 태그 및 속성 값 사이에 공백문자를 넣지 말아라

그럴 이유가 없다.

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### 대소문자를 섞지 말아라

일관성을 줄거다.

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>

Also Good:

    <A HREF="#general">General</A>


### 인용 부호를 섞지 말아라

위와 같다.

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 속성을 두개 이상의 공백 문자로 나누지 마라

이상학 규칙이 누군가를 혼란하게 한다.

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### 불리언 속성값을 생략해라

작성하기 쉽다, 안그래?

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### 네임스페이스를 생략해라

HTML5 문서에서 SVG와 MathML은 바로 쓸 수 있다.

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### XML 속성을 쓰지 마라

우린 HTML 문서를 쓰고있다.

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### `data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 마라

태그 문자열이 아주 복잡할 수 있다.
이 간단한 규칙은 태그 문자열을 더 읽기 쉽게한다.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### 기본 암시적 ARIA 시맨틱을 선호하라

일부 요소에서는 HTML 문서에서 ARIA `role`을 가지므로 지정하지 마라.

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


루트 요소
----------------

### `lang` 속성을 추가해라

`lang` 속성이 HTML 문서를 번역하는 데 도움을 줄거다.

Bad:

    <html>

Good:

    <html lang="en-US">


### `lang` 속성을 가능하면 짧게 유지해라

일본어는 Japan만 사용해라. 국가 코드는 필요없다.

Bad:

    <html lang="ja-JP">

Good:

    <html lang="ja">


### `data-*`을 가능한 한 없애라

적절한 속성은 브라우저에서 처리할 수 있다.

Bad:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Good:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


문서 메타데이터
-----------------

### `title` 요소를 넣어라

`title` 요소 값은 브라우저뿐만 아니라 다양한 어플리케이션에서 사용한다.

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### `base` 요소를 쓰지 마라

절대 경로나 URL은 개발자와 유저 모두에게 안전하다

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


### 마이너한 링크 리소스에 MIME 타입을 정의해라

어플리케이션에서 리소스를 어떻게 처리하는 가에 대한 힌트다.

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico` 링크하지 마라

대부분의 브라우저에서 `/favicon.ico`를 자동으로 비동기방식으로 가져온다.

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### 대체 스타일시트에 `title` 속성을 넣어라

사람이 읽을 수 있는 레이블은 스타일시트를 선택하는 데 도움을 줄거다.

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URL을 위해서 `link` 요소를 써라

`href` 속성 값이 URL로 해석된다.

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


### 문서의 문자 인코딩을 정의해라

아직 UTF-8이 모든 브라우저에서 기본이 아니다.

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 레거시 인코딩 포맷을 쓰지 마라

HTTP 헤더는 서버에서 정의해야하며, 아주 쉽다.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### 문자 인코딩을 처음으로 선언해라

스펙상 문자 인코딩이 문서의 첫 1024 바이트 내에 지정되어있어야 한다.

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


### UTF-8을 써라

UTF-8과 함께라면, 이모티콘을 자유롭게 쓸 수 있다.

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### CSS를 위한 `type` 속성을 생략해라

HTML5에서, `style` 요소의 기본 `type` 속성 값은 `text/css`다.

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### `style` 요소의 내용을 주석처리하지 마라

이는 오랜 브라우저를 위한 것이다.

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


### CSS와 JavaScript 태그를 섞지 말아라

때론 `script` 요소가 DOM 구성을 막기도 한다.

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


섹션
--------

### `body` 요소를 넣어라

때로 `body`를 브라우저에서 넣을 때 원치 않은 위치에 있기도 한다.

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


### `hgroup` 요소는 잊어라

W3C 스펙에서 삭제되었다.

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` 요소는 콘택트 정보를 제공하는 데만 써라

`address` 요소는 이메일 주소, 소셜 네트워크 계정, 주소, 전화번호 등 직접 연락할 수 있는 항목이다.

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


그루핑 콘텐츠
----------------

### `pre` 요소에서 새 줄로 시작하지 말아라

첫번째 줄바꿈은 브라우저에서 무시하지만, 두번째부터는 렌더링된다.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote` 요소에 적절한 요소를 써라

`blockquote` 요소의 콘텐츠은 인용한 내용이지, 문장 덩어리가 아니다.

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don’t include attribution directly in `blockquote` element

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
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Place `figcaption` element as first or last child of `figure` element

Spec (WHATWG version) disallows `figcaption` element in the middle of `figure`
element.

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


Edits
-----

### Don’t stride `ins` and `del` element over other elements

Elements cannot be overflow other elements.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


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

With appropriate `type`, browsers gives a tiny features to the `input` element.

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
