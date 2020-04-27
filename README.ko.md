Translations: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Türkçe (tr)](README.tr.md)

# HTML Best Practices

유지보수 및 확장할 수 있는 HTML 문서를 만들기 위해


- [공통](#general)
  - [DOCTYPE으로 시작해라](#start-with-doctype)
  - [레거시 혹은 폐기된 DOCTYPE을 쓰지 마라](#dont-use-legacy-or-obsolete-doctype)
  - [XML 선언을 쓰지 말아라](#dont-use-xml-declaration)
  - [문자 레퍼런스를 가능한 한 사용하지 말아라](#dont-use-character-references-as-much-as-possible)
  - [`&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환해라](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
  - [제어 문자나 보이지 않는 문자를 제어하기 위해 숫자 문자 레퍼런스를 사용하라](#use-numeric-character-references-for-control-or-invisible-characters)
  - [주석 내용 주위에 공백을 넣어라](#put-white-spaces-around-comment-contents)
  - [닫는 태그를 생략하지 말아라](#dont-omit-closing-tag)
  - [빈 요소 포맷을 섞지 마라](#dont-mix-empty-element-format)
  - [태그 및 속성 값 사이에 공백문자를 넣지 말아라](#dont-put-white-spaces-around-tags-and-attribute-values)
  - [대소문자를 섞지 말아라](#dont-mix-character-cases)
  - [인용 부호를 섞지 말아라](#dont-mix-quotation-marks)
  - [속성을 두개 이상의 공백 문자로 나누지 마라](#dont-separate-attributes-with-two-or-more-white-spaces)
  - [불리언 속성값을 생략해라](#omit-boolean-attribute-value)
  - [네임스페이스를 생략해라](#omit-namespaces)
  - [XML 속성을 쓰지 마라](#dont-use-xml-attributes)
  - [`data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 마라](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  - [기본 암시적 ARIA 시맨틱을 선호하라](#prefer-default-implicit-aria-semantics)
- [루트 요소](#the-root-element)
  - [`lang` 속성을 추가해라](#add-lang-attribute)
  - [`lang` 속성을 가능하면 짧게 유지해라](#keep-lang-attribute-value-as-short-as-possible)
  - [`data-*`을 가능한 한 없애라](#avoid-data-as-much-as-possible)
- [문서 메타데이터](#document-metadata)
  - [`title` 요소를 넣어라](#add-title-element)
  - [`base` 요소를 쓰지 마라](#dont-use-base-element)
  - [마이너한 링크 리소스에 MIME 타입을 정의해라](#specify-mime-type-of-minor-linked-resources)
  - [`favicon.ico` 링크하지 마라](#dont-link-to-faviconico)
  - [Add `apple-touch-icon` link](#add-apple-touch-icon-link)
  - [대체 스타일시트에 `title` 속성을 넣어라](#add-title-attribute-to-alternate-stylesheets)
  - [URL을 위해서 `link` 요소를 써라](#for-url-use-link-element)
  - [문서의 문자 인코딩을 정의해라](#specify-document-character-encoding)
  - [레거시 인코딩 포맷을 쓰지 마라](#dont-use-legacy-character-encoding-format)
  - [문자 인코딩을 처음으로 선언해라](#specify-character-encoding-at-first)
  - [UTF-8을 써라](#use-utf-8)
  - [CSS를 위한 `type` 속성을 생략해라](#omit-type-attribute-for-css)
  - [`style` 요소의 내용을 주석처리하지 마라](#dont-comment-out-contents-of-style-element)
  - [CSS와 JavaScript 태그를 섞지 말아라](#dont-mix-tag-for-css-and-javascript)
- [섹션](#sections)
  - [`body` 요소를 넣어라](#add-body-element)
  - [`hgroup` 요소는 잊어라](#forget-about-hgroup-element)
  - [`address` 요소는 콘택트 정보를 제공하는 데만 써라](#use-address-element-only-for-contact-information)
- [그룹 콘텐츠](#grouping-content)
  - [`pre` 요소에서 새 줄로 시작하지 말아라](#dont-start-with-newline-in-pre-element)
  - [`blockquote` 요소에 적절한 요소를 써라](#use-appropriate-element-in-blockquote-element)
  - [`blockquote` 요소 안에 직접 포함하지 마라](#dont-include-attribution-directly-in-blockquote-element)
  - [한 줄에 한 리스트 아이템을 써라](#write-one-list-item-per-line)
  - [`ol` 요소에 `type` 속성을 써라](#use-type-attribute-for-ol-element)
  - [다이얼로그를 위해 `dl`을 쓰지 마라](#dont-use-dl-for-dialogue)
  - [`figcaption`  요소를 `figure` 요소의 첫째 or 마지막 자식요소로 써라](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  - [`main` 요소를 써라](#use-main-element)
  - [`div` 요소를 가능한 한 많이 없애라](#avoid-div-element-as-much-as-possible)
- [Text-level 시맨틱](#text-level-semantics)
  - [그룹 가능한 동일 링크를 분리하지 마라](#dont-split-same-link-that-can-be-grouped)
  - [리소스를 다운하고자 할 때 `download` 속성을 사용하라](#use-download-attribute-for-downloading-a-resource)
  - [필요하다면 `rel`, `hreflang`, `type` 속성을 사용해라](#use-rel-hreflang-and-type-attribute-if-needed)
  - [링크 텍스트를 명확히 하라](#clear-link-text)
  - [경고나 주의를 위해 `em`을 사용하지 말아라](#dont-use-em-element-for-warning-or-caution)
  - [`s`, `i`, `b`, `u` 요소를 가능한 한 없애라](#avoid-s-i-b-and-u-element-as-much-as-possible)
  - [`q` 요소에 따옴표를 넣지 말아라](#dont-put-quotes-to-q-element)
  - [`abbr` 요소에 `title` 속성을 써라](#add-title-attribute-to-abbr-element)
  - [`ruby` 요소를 자세히 마크업해라](#markup-ruby-element-verbosely)
  - [기계가 읽을 수 없는 `time` 요소에 `datetime` 속성을 추가해라](#add-datetime-attribute-to-non-machine-readable-time-element)
  - [`class` 속성 접두어로 `language-`를 넣어 code 언어를 정의하라](#specify-code-language-with-class-attribute-prefixed-with-language)
  - [`kbd` 요소를 가능한 한 단순하게 둬라](#keep-kbd-element-as-simple-as-possible)
  - [`span` 요소를 가능한 한 많이 제거해라.](#avoid-span-element-as-much-as-possible)
  - [`br` 요소 뒤에 줄바꿈해라](#break-after-br-element)
  - [프레젠테이션 목적으로만 `br` 요소를 쓰지 마라](#dont-use-br-element-only-for-presentational-purpose)
- [에디트](#edits)
  - [`ins`와 `del` 요소로 다른 요소를 뛰어넘지 마라](#dont-stride-ins-and-del-element-over-other-elements)
- [Embedded 콘텐츠](#embedded-content)
  - [`picture` 요소의 폴백으로 `img` 요소를 제공해라](#provide-fallback-img-element-for-picture-element)
  - [만약 필요하다면 `img` 요소에 `alt` 속성을 추가해라](#add-alt-attrbute-to-img-element-if-needed)
  - [가능한 경우 `alt` 속성을 비워둬라](#empty-alt-attribute-if-possible)
  - [가능한 경우 `alt` 속성을 생략해라](#omit-alt-attribute-if-possible)
  - [`iframe` 요소를 비워둬라](#empty-iframe-element)
  - [`map` 요소 콘텐츠도 마크업해라](#markup-map-element-content)
  - [`audio`나 `video` 요소를 위한 폴백 콘텐츠를 제공해라.](#provide-fallback-content-for-audio-or-video-element)
- [테이블 데이터](#tabular-data)
  - [한 줄에 한 셀만 써라](#write-one-cell-per-line)
  - [`th` 요소를 헤더 셀로 써라](#use-th-element-for-header-cell)
- [폼](#forms)
  - [폼 컨트롤을 `label` 요소로 감싸라](#wrap-form-control-with-label-element)
  - [가능한 경우 `for` 속성을 생략해라](#omit-for-attribute-if-possible)
  - [`input` 요소에 적절한 `type` 속성을 사용해라](#use-appropriate-type-attribute-for-input-element)
  - [`input type="submit"`에 `value` 속성을 넣어라](#add-value-attribute-to-input-typesubmit)
  - [`input` 요소에 `pattern` 속성이 있는 경우 `title` 속성을 추가해라](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  - [레이블하기 위해 `placeholder` 속성을 쓰지 마라](#dont-use-placeholder-attribute-for-labeling)
  - [한 줄에 한 `option` 요소만 사용해라](#write-one-option-element-per-line)
  - [`progress` 요소에 `max` 속성을 추가해라](#add-max-attribute-to-progress-element)
  - [`meter` 요소에 `min`, `max` 속성을 추가해라](#add-min-and-max-attribute-to-meter-element)
  - [`legend` 요소를 `fieldset` 요소의 첫번째 자식으로 둬라.](#place-legend-element-as-the-first-child-of-fieldset-element)
- [스크립트](#scripting)
  - [자바스크립트를 위한 `type` 속성을 생략해라](#omit-type-attribute-for-javascript)
  - [`script` 요소의 내용을 주석처리하지 마라](#dont-comment-out-contents-of-script-element)
  - [스크립트가 삽입된 `script` 요소를 쓰지 마라](#dont-use-script-injected-script-element)
- [기타](#other)
  - [일관된 들여쓰기](#indent-consistently)
  - [내부 링크에 절대 경로를 사용해라](#use-absolute-path-for-internal-links)
  - [Don’t use protocol-relative URL for external resources](#dont-use-protocol-relative-url-for-external-resources)
- [Contributors](#contributors)
- [Translators](#translators)
- [License](#license)


## 공통<span id="general"></span>


### DOCTYPE으로 시작해라<span id="start-with-doctype"></span>

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


### 레거시 혹은 폐기된 DOCTYPE을 쓰지 마라<span id="dont-use-legacy-or-obsolete-doctype"></span>

DOCTYPE은 더 이상 DTD가 아니다, 간단해져라

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### XML 선언을 쓰지 말아라<span id="dont-use-xml-declaration"></span>

정말 XHTML을 쓸거니?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### 문자 레퍼런스를 가능한 한 사용하지 말아라<span id="dont-use-character-references-as-much-as-possible"></span>

만약 HTML문서를 UTF-8로 작성하고 있다면,
대부분의 문자(이모티콘 포함)를 직접적으로 쓸 수 있다.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환해라<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

이 문자들은 버그가 없는 HTML 문서를 만들기위해 반드시 변환해두어야한다.

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### 제어 문자나 보이지 않는 문자를 제어하기 위해 숫자 문자 레퍼런스를 사용하라<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

이 문자들은 다른 문자로 쉽게 오인된다.
spec은 이러한 문자에 대해 사람이 읽을 수 있는 이름을 정의하는 걸 보장하지 않는다.

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### 주석 내용 주위에 공백을 넣어라<span id="put-white-spaces-around-comment-contents"></span>

일부 문자는 주석의 여는 태그 바로 뒤나 닫는 태그 바로 앞에 붙어서 넣을 수 없다.

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### 닫는 태그를 생략하지 말아라<span id="dont-omit-closing-tag"></span>

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


### 빈 요소 포맷을 섞지 마라<span id="dont-mix-empty-element-format"></span>

일관성은 가독성의 핵심이다.

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### 태그 및 속성 값 사이에 공백문자를 넣지 말아라<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

그럴 이유가 없다.

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### 대소문자를 섞지 말아라<span id="dont-mix-character-cases"></span>

일관성을 줄거다.

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>

Also Good:

    <A HREF="#general">General</A>


### 인용 부호를 섞지 말아라<span id="dont-mix-quotation-marks"></span>

위와 같다.

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 속성을 두개 이상의 공백 문자로 나누지 마라<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

이상한 규칙이 누군가를 혼란하게 한다.

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### 불리언 속성값을 생략해라<span id="omit-boolean-attribute-value"></span>

작성하기 쉽다, 안그래?

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### 네임스페이스를 생략해라<span id="omit-namespaces"></span>

HTML 문서에서 SVG와 MathML은 바로 쓸 수 있다.

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### XML 속성을 쓰지 마라<span id="dont-use-xml-attributes"></span>

우린 HTML 문서를 쓰고있다.

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### `data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 마라<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

태그 문자열이 아주 복잡할 수 있다.
이 간단한 규칙은 태그 문자열을 더 읽기 쉽게한다.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### 기본 암시적 ARIA 시맨틱을 선호하라<span id="prefer-default-implicit-aria-semantics"></span>

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


## 루트 요소<span id="the-root-element"></span>


### `lang` 속성을 추가해라<span id="add-lang-attribute"></span>

`lang` 속성이 HTML 문서를 번역하는 데 도움을 줄거다.

Bad:

    <html>

Good:

    <html lang="en-US">


### `lang` 속성을 가능하면 짧게 유지해라<span id="keep-lang-attribute-value-as-short-as-possible"></span>

일본어는 Japan만 사용해라. 국가 코드는 필요없다.

Bad:

    <html lang="ja-JP">

Good:

    <html lang="ja">


### `data-*`을 가능한 한 없애라<span id="avoid-data-as-much-as-possible"></span>

적절한 속성은 브라우저에서 처리할 수 있다.

Bad:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Good:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## 문서 메타데이터<span id="document-metadata"></span>


### `title` 요소를 넣어라<span id="add-title-element"></span>

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


### `base` 요소를 쓰지 마라<span id="dont-use-base-element"></span>

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


### 마이너한 링크 리소스에 MIME 타입을 정의해라<span id="specify-mime-type-of-minor-linked-resources"></span>

어플리케이션에서 리소스를 어떻게 처리하는 가에 대한 힌트다.

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico` 링크하지 마라<span id="dont-link-to-faviconico"></span>

대부분의 브라우저에서 `/favicon.ico`를 자동으로 비동기방식으로 가져온다.

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


### 대체 스타일시트에 `title` 속성을 넣어라<span id="add-title-attribute-to-alternate-stylesheets"></span>

사람이 읽을 수 있는 레이블은 스타일시트를 선택하는 데 도움을 줄거다.

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URL을 위해서 `link` 요소를 써라<span id="for-url-use-link-element"></span>

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


### 문서의 문자 인코딩을 정의해라<span id="specify-document-character-encoding"></span>

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


### 레거시 인코딩 포맷을 쓰지 마라<span id="dont-use-legacy-character-encoding-format"></span>

HTTP 헤더는 서버에서 정의해야하며, 아주 쉽다.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### 문자 인코딩을 처음으로 선언해라<span id="specify-character-encoding-at-first"></span>

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


### UTF-8을 써라<span id="use-utf-8"></span>

UTF-8과 함께라면, 이모티콘을 자유롭게 쓸 수 있다.

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### CSS를 위한 `type` 속성을 생략해라<span id="omit-type-attribute-for-css"></span>

HTML에서, `style` 요소의 기본 `type` 속성 값은 `text/css`다.

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### `style` 요소의 내용을 주석처리하지 마라<span id="dont-comment-out-contents-of-style-element"></span>

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


### CSS와 JavaScript 태그를 섞지 말아라<span id="dont-mix-tag-for-css-and-javascript"></span>

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


## 섹션<span id="sections"></span>


### `body` 요소를 넣어라<span id="add-body-element"></span>

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


### `hgroup` 요소는 잊어라<span id="forget-about-hgroup-element"></span>

W3C 스펙에서 삭제되었다.

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` 요소는 콘택트 정보를 제공하는 데만 써라<span id="use-address-element-only-for-contact-information"></span>

`address` 요소는 이메일 주소, 소셜 네트워크 계정, 주소, 전화번호 등 직접 연락할 수 있는 항목이다.

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## 그룹 콘텐츠<span id="grouping-content"></span>


### `pre` 요소에서 새 줄로 시작하지 말아라<span id="dont-start-with-newline-in-pre-element"></span>

첫번째 줄바꿈은 브라우저에서 무시하지만, 두번째부터는 렌더링된다.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote` 요소에 적절한 요소를 써라<span id="use-appropriate-element-in-blockquote-element"></span>

`blockquote` 요소의 콘텐츠는 인용한 내용이지, 문장 덩어리가 아니다.

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### `blockquote` 요소 안에 직접 포함하지 마라<span id="dont-include-attribution-directly-in-blockquote-element"></span>

`blockquote` 요소의 콘텐츠는 인용구다.

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


### 한 줄에 한 리스트 아이템을 써라<span id="write-one-list-item-per-line"></span>

기이ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ인
라인은 너무ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ 읽기 힘들다.

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


### `ol` 요소에 `type` 속성을 써라<span id="use-type-attribute-for-ol-element"></span>

때로는 주변 콘텐츠에 의해 마커가 참조된다. 만약 `type`  속성으로 마커를 변경한다면,
참조하는 것이 안전하다.

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


### 다이얼로그를 위해 `dl`을 쓰지 마라<span id="dont-use-dl-for-dialogue"></span>

`dl` 요소는 HTML의 연결 목록으로 제한한다.

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


### `figcaption`  요소를 `figure` 요소의 첫째 or 마지막 자식요소로 써라<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

스펙 (WHATWG 버전)에서 `figcaption` 요소를 `figure` 요소 중간에 두는 걸 허용하지 않는다.

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


### `main` 요소를 써라<span id="use-main-element"></span>

`main` 요소는 콘텐츠를 감쌀 때 쓸 수 있다.

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>


### `div` 요소를 가능한 한 많이 없애라<span id="avoid-div-element-as-much-as-possible"></span>

`div` 요소는 최후의 수단이다.

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


## Text-level 시맨틱<span id="text-level-semantics"></span>


### 그룹 가능한 동일 링크를 분리하지 마라<span id="dont-split-same-link-that-can-be-grouped"></span>

`a` 요소는 대부분의 요소를 감쌀 수 있다. (`a` 요소 자신이나 컨트롤같은 인터렉티브 요소는 제외한다)

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### 리소스를 다운하고자 할 때 `download` 속성을 사용하라<span id="use-download-attribute-for-downloading-a-resource"></span>

브라우저에서 연결된 리소스를 스토리지에서 다운받으려 할거다.

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### 필요하다면 `rel`, `hreflang`, `type` 속성을 사용해라<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

이러한 힌트는 어플리케이션에서 연결된 리소스를 제어하는 데 사용한다.

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### 링크 텍스트를 명확히 하라<span id="clear-link-text"></span>

링크 텍스트는 연결된 리소스의 레이블이어야한다.

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### 경고나 주의를 위해 `em`을 사용하지 말아라<span id="dont-use-em-element-for-warning-or-caution"></span>

이것들은 심각하다. 따라서 `storng` 요소가 더 적절하다.

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### `s`, `i`, `b`, `u` 요소를 가능한 한 없애라<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

이 요소의 시맨틱은 사람과 아주 다르다.

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### `q` 요소에 따옴표를 넣지 말아라<span id="dont-put-quotes-to-q-element"></span>

브라우저에서 제공한다.

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### `abbr` 요소에 `title` 속성을 써라<span id="add-title-attribute-to-abbr-element"></span>

무엇의 함축어인 지 달리 설명할 길이 없다.

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby` 요소를 자세히 마크업해라<span id="markup-ruby-element-verbosely"></span>

`ruby` 요소를 모든 모던 브라우저에서 완전하게 지원하는 게 아니다.

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 기계가 읽을 수 없는 `time` 요소에 `datetime` 속성을 추가해라<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

`datetime` 속성이 없을 때, `time` 요소의 포맷은 제한된다.

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### `class` 속성 접두어로 `language-`를 넣어 code 언어를 정의하라<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

일반적이진 않지만, spec에 언급되어있다.

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` 요소를 가능한 한 단순하게 둬라<span id="keep-kbd-element-as-simple-as-possible"></span>

`kbd` 요소를 감싸는 건 사람과 다르다.

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### `span` 요소를 가능한 한 많이 제거해라.<span id="avoid-span-element-as-much-as-possible"></span>

`span` 요소는 최후의 수단이다.

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### `br` 요소 뒤에 줄바꿈해라<span id="break-after-br-element"></span>

`br` 요소를 사용하면 줄바꿈 하는 게 좋다.

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 프레젠테이션 목적으로만 `br` 요소를 쓰지 마라<span id="dont-use-br-element-only-for-presentational-purpose"></span>

`br` 요소는 줄바꿈을 위해서가 아니라, 콘텐츠의 라인 구분을 위해 사용한다.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## 에디트<span id="edits"></span>


### `ins`와 `del` 요소로 다른 요소를 뛰어넘지 마라<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

요소는 다른 요소를 넘을 수 없다.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Embedded 콘텐츠<span id="embedded-content"></span>


### `picture` 요소의 폴백으로 `img` 요소를 제공해라<span id="provide-fallback-img-element-for-picture-element"></span>

`picture` 요소 지원율이 아직 그렇게 높지 않다.

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


### 만약 필요하다면 `img` 요소에 `alt` 속성을 추가해라<span id="add-alt-attrbute-to-img-element-if-needed"></span>

`alt` 속성은 이미지를 처리할 수 없거나 불러오지 못했을 때 도움을 준다.

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 가능한 경우 `alt` 속성을 비워둬라<span id="empty-alt-attribute-if-possible"></span>

본문을 보충하는 이미지라면, 근처에 동일한 콘텐츠가 있다.

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### 가능한 경우 `alt` 속성을 생략해라<span id="omit-alt-attribute-if-possible"></span>

때때로 어떤 텍스트가 alt 속성에 적합한 지 모를 수 있다.
(역주) spec에서 `alt` 속성은 특수한 케이스가 아니라면 필수 속성이므로 빈값으로 넣어주세요.

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### `iframe` 요소를 비워둬라<span id="empty-iframe-element"></span>

콘텐츠에 몇가지 제한사항이 있다. 비워두면 항상 안전하다.

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### `map` 요소 콘텐츠도 마크업해라<span id="markup-map-element-content"></span>

스크린 리더의 콘텐츠 프리셋으로 쓰인다.

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


### `audio`나 `video` 요소를 위한 폴백 콘텐츠를 제공해라.<span id="provide-fallback-content-for-audio-or-video-element"></span>

HTML에 새로 추가된 요소들을 위해 폴백 콘텐츠가 필요하다.

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


## 테이블 데이터<span id="tabular-data"></span>


### 한 줄에 한 셀만 써라<span id="write-one-cell-per-line"></span>

긴 라인은 스캔하기 힘들다.

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


### `th` 요소를 헤더 셀로 써라<span id="use-th-element-for-header-cell"></span>

안 쓸 이유가 없다.

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


## 폼<span id="forms"></span>


### 폼 컨트롤을 `label` 요소로 감싸라<span id="wrap-form-control-with-label-element"></span>

`label` 요소가 폼 요소에 포커스를 주는 데 도움을 준다

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### 가능한 경우 `for` 속성을 생략해라<span id="omit-for-attribute-if-possible"></span>

`label` 요소는 몇가지 폼 요소를 감쌀 수 있다.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### `input` 요소에 적절한 `type` 속성을 사용해라<span id="use-appropriate-type-attribute-for-input-element"></span>

적절한 `type`을 사용하면, 브라우저에서 `input` 요소에 작은 기능을 제공한다.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"`에 `value` 속성을 넣어라<span id="add-value-attribute-to-input-typesubmit"></span>

submit 버튼의 기본 레이블은 브라우저 및 언어 사이 표준이 없다.

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### `input` 요소에 `pattern` 속성이 있는 경우 `title` 속성을 추가해라<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

입력한 텍스트가 `pattern` 속성과 매치하지 않는 경우,
`title` 속성의 값이 힌트가 될거다.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### 레이블하기 위해 `placeholder` 속성을 쓰지 마라<span id="dont-use-placeholder-attribute-for-labeling"></span>

`label` 요소가 레이블을 위한 요소고, `placeholder` 속성은 짧은 힌트를 위한 속성이다.

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### 한 줄에 한 `option` 요소만 사용해라<span id="write-one-option-element-per-line"></span>

긴 라인은 읽기 힘들다.

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


### `progress` 요소에 `max` 속성을 추가해라<span id="add-max-attribute-to-progress-element"></span>

`max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### `meter` 요소에 `min`, `max` 속성을 추가해라<span id="add-min-and-max-attribute-to-meter-element"></span>

`min`, `max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### `legend` 요소를 `fieldset` 요소의 첫번째 자식으로 둬라.<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

스펙 필수 사항이다.

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


## 스크립트<span id="scripting"></span>


### 자바스크립트를 위한 `type` 속성을 생략해라<span id="omit-type-attribute-for-javascript"></span>

HTML에서, `script` 요소의 기본 `type` 속성값은 `text/javascript`다.

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### `script` 요소의 내용을 주석처리하지 마라<span id="dont-comment-out-contents-of-script-element"></span>

이는 오랜 브라우저를 위한 것이다.

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


### 스크립트가 삽입된 `script` 요소를 쓰지 마라<span id="dont-use-script-injected-script-element"></span>

`async` 속성은 성능면으로나 단순성면으로나 최고다.

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="https://example.com/widget.js"></script>


## 기타<span id="other"></span>


### 일관된 들여쓰기<span id="indent-consistently"></span>

일관성은 가독성에 중요하다.

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


### 내부 링크에 절대 경로를 사용해라<span id="use-absolute-path-for-internal-links"></span>

절대 경로는 인터넷 연결 없이도 localhost에서도 동작한다.

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


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
