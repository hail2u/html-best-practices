Translations: [English (en)](README.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md)

HTML Best Practices
===================

유지보수 및 확장할 수 있는 HTML 문서를 만들기 위해

<!-- #toc -->

* [공통](#공통)
  * [`DOCTYPE`으로 시작해라](#doctype으로-시작해라) 
  * [레거시 혹은 폐기된 `DOCTYPE`을 쓰지 마라](#레거시-혹은-폐기된-doctype을-쓰지-마라) 
  * [XML 선언을 쓰지 말아라](#xml-선언을-쓰지-말아라) 
  * [문자 레퍼런스를 가능한 한 사용하지 말아라](#문자-레퍼런스를-가능한-한-사용하지-말아라) 
  * [`&`, `<`, `>`, `"`, `'`를 문자 레퍼런스로 변환해라](#----를-문자-레퍼런스로-변환해라) 
  * [제어 문자나 보이지 않는 문자를 제어하기 위해 숫자 문자 레퍼런스를 사용하라](#제어-문자나-보이지-않는-문자를-제어하기-위해-숫자-문자-레퍼런스를-사용하라) 
  * [주석 내용 주위에 공백을 넣어라](#주석-내용-주위에-공백을-넣어라) 
  * [닫는 태그를 생략하지 말아라](#닫는-태그를-생략하지-말아라) 
  * [빈 요소 포맷을 섞지 마라](#빈-요소-포맷을-섞지-마라) 
  * [태그 및 속성 값 사이에 공백문자를 넣지 말아라](#태그-및-속성-값-사이에-공백문자를-넣지-말아라) 
  * [대소문자를 섞지 말아라](#대소문자를-섞지-말아라) 
  * [인용 부호를 섞지 말아라](#인용-부호를-섞지-말아라) 
  * [속성을 두개 이상의 공백 문자로 나누지 마라](#속성을-두개-이상의-공백-문자로-나누지-마라) 
  * [불리언 속성값을 생략해라](#불리언-속성값을-생략해라) 
  * [네임스페이스를 생략해라](#네임스페이스를-생략해라) 
  * [XML 속성을 쓰지 마라](#xml-속성을-쓰지-마라) 
  * [`data-*`, 마이크로데이터, RDFa Lite 속성을 일반 속성과 섞어쓰지 마라](#data--마이크로데이터-rdfa-lite-속성을-일반-속성과-섞어쓰지-마라) 
  * [기본 암시적 ARIA 시맨틱을 선호하라](#기본-암시적-aria-시맨틱을-선호하라) 
* [루트 요소](#루트-요소)
* [`lang` 속성을 추가해라](#lang-속성을-추가해라) 
* [`lang` 속성을 가능하면 짧게 유지해라](#lang-속성을-가능하면-짧게-유지해라) 
* [`data-*`을 가능한 한 없애라](#data-을-가능한-한-없애라) 
* [문서 메타데이터](#문서-메타데이터)
  * [`title` 요소를 넣어라](#title-요소를-넣어라) 
  * [`base` 요소를 쓰지 마라](#base-요소를-쓰지-마라) 
  * [마이너한 링크 리소스에 MIME 타입을 정의해라](#마이너한-링크-리소스에-mime-타입을-정의해라) 
  * [`favicon.ico` 링크하지 마라](#faviconico-링크하지-마라) 
  * [대체 스타일시트에 `title` 속성을 넣어라](#대체-스타일시트에-title-속성을-넣어라) 
  * [URL을 위해서 `link` 요소를 써라](#url을-위해서-link-요소를-써라) 
  * [문서의 문자 인코딩을 정의해라](#문서의-문자-인코딩을-정의해라) 
  * [레거시 인코딩 포맷을 쓰지 마라](#레거시-인코딩-포맷을-쓰지-마라) 
  * [문자 인코딩을 처음으로 선언해라](#문자-인코딩을-처음으로-선언해라) 
  * [UTF-8을 써라](#utf-8을-써라) 
  * [CSS를 위한 `type` 속성을 생략해라](#css를-위한-type-속성을-생략해라) 
  * [`style` 요소의 내용을 주석처리하지 마라](#style-요소의-내용을-주석처리하지-마라) 
  * [CSS와 JavaScript 태그를 섞지 말아라](#css와-javascript-태그를-섞지-말아라) 
* [섹션](#섹션)
  * [`body` 요소를 넣어라](#body-요소를-넣어라) 
  * [`hgroup` 요소는 잊어라](#hgroup-요소는-잊어라) 
  * [`address` 요소는 콘택트 정보를 제공하는 데만 써라](#address-요소는-콘택트-정보를-제공하는-데만-써라) 
* [그룹 콘텐츠](#그룹-콘텐츠)
  * [`pre` 요소에서 새 줄로 시작하지 말아라](#pre-요소에서-새-줄로-시작하지-말아라) 
  * [`blockquote` 요소에 적절한 요소를 써라](#blockquote-요소에-적절한-요소를-써라) 
  * [`blockquote` 요소 안에 직접 포함하지 마라](#blockquote-요소-안에-직접-포함하지-마라) 
  * [한 줄에 한 리스트 아이템을 써라](#한-줄에-한-리스트-아이템을-써라) 
  * [`ol` 요소에 `type` 속성을 써라](#ol-요소에-type-속성을-써라) 
  * [다이얼로그를 위해 `dl`을 쓰지 마라](#다이얼로그를-위해-dl을-쓰지-마라) 
  * [`figcaption` 요소를 `figure` 요소의 첫째 or 마지막 자식요소로 써라](#figcaption--요소를-figure-요소의-첫째-or-마지막-자식요소로-써라) 
  * [`main` 요소를 써라](#main-요소를-써라) 
  * [`div` 요소를 가능한 한 많이 없애라](#div-요소를-가능한-한-많이-없애라) 
* [Text-level 시맨틱](#Text-level-시맨틱)
  * [그룹 가능한 동일 링크를 분리하지 마라](#그룹-가능한-동일-링크를-분리하지-마라) 
  * [리소스를 다운하고자 할 때 `download` 속성을 사용하라](#리소스를-다운하고자-할-때-download-속성을-사용하라) 
  * [필요하다면 `rel`, `hreflang`, `type` 속성을 사용해라](#필요하다면-rel-hreflang-type-속성을-사용해라) 
  * [링크 텍스트를 명확히 하라](#링크-텍스트를-명확히-하라) 
  * [경고나 주의를 위해 `em`을 사용하지 말아라](#경고나-주의를-위해-em을-사용하지-말아라) 
  * [`s`, `i`, `b`, `u` 요소를 가능한 한 없애라](#s-i-b-u-요소를-가능한-한-없애라) 
  * [`q `요소에 따옴표를 넣지 말아라](#q-요소에-따옴표를-넣지-말아라) 
  * [`abbr` 요소에 `title` 속성을 써라](#abbr-요소에-title-속성을-써라) 
  * [`ruby` 요소를 자세히 마크업해라](#ruby-요소를-자세히-마크업해라) 
  * [기계가 읽을 수 없는 `time` 요소에 `datetime` 속성을 추가해라](#기계가-읽을-수-없는-time-요소에-datetime-속성을-추가해라) 
  * [`class` 속성 접두어로 `language-`를 넣어 code 언어를 정의하라](#class-속성-접두어로-language-를-넣어-code-언어를-정의하라) 
  * [`kbd` 요소를 가능한 한 단순하게 둬라](#kbd-요소를-가능한-한-단순하게-둬라) 
  * [`span` 요소를 가능한 한 많이 제거해라.](#span-요소를-가능한-한-많이-제거해라) 
  * [`br` 요소 뒤에 줄바꿈해라](#br-요소-뒤에-줄바꿈해라) 
  * [프레젠테이션 목적으로만 `br` 요소를 쓰지 마라](#프레젠테이션-목적으로만-br-요소를-쓰지-마라) 
* [에디트](#에디트)
  * [`ins`와 `del` 요소로 다른 요소를 뛰어넘지 마라](#ins와-del-요소로-다른-요소를-뛰어넘지-마라) 
* [Embedded 콘텐츠](#Embedded-콘텐츠)
  * [`picture` 요소의 폴백으로 `img` 요소를 제공해라](#picture-요소의-폴백으로-img-요소를-제공해라) 
  * [만약 필요하다면 `img` 요소에 `alt` 속성을 추가해라](#만약-필요하다면-img-요소에-alt-속성을-추가해라) 
  * [가능한 경우 `alt` 속성을 비워둬라](#가능한-경우-alt-속성을-비워둬라) 
  * [가능한 경우 `alt` 속성을 생략해라](#가능한-경우-alt-속성을-생략해라) 
  * [`iframe` 요소를 비워둬라](#iframe-요소를-비워둬라) 
  * [`map` 요소 콘텐츠도 마크업해라](#map-요소-콘텐츠도-마크업해라) 
  * [`audio`나 `video` 요소를 위한 폴백 콘텐츠를 제공해라.](#audio나-video-요소를-위한-폴백-콘텐츠를-제공해라) 
* [테이블 데이터](#테이블-데이터)
  * [한 줄에 한 셀만 써라](#한-줄에-한-셀만-써라) 
  * [`th` 요소를 헤더 셀로 써라](#th-요소를-헤더-셀로-써라) 
* [폼](#폼)
  * [폼 컨트롤을 `label` 요소로 감싸라](#폼-컨트롤을-label-요소로-감싸라) 
  * [가능한 경우 `for` 속성을 생략해라](#가능한-경우-for-속성을-생략해라) 
  * [`input` 요소에 적절한 `type` 속성을 사용해라](#input-요소에-적절한-type-속성을-사용해라) 
  * [`input type="submit"`에 `value` 속성을 넣어라](#input-typesubmit에-value-속성을-넣어라) 
  * [`input` 요소에 `pattern` 속성이 있는 경우 `title` 속성을 추가해라](#input-요소에-pattern-속성이-있는-경우-title-속성을-추가해라) 
  * [레이블하기 위해 `placeholder` 속성을 쓰지 마라](#레이블하기-위해-placeholder-속성을-쓰지-마라) 
  * [한 줄에 한 `option` 요소만 사용해라](#한-줄에-한-option-요소만-사용해라) 
  * [`progress` 요소에 `max` 속성을 추가해라](#progress-요소에-max-속성을-추가해라) 
  * [`meter` 요소에 `min`, `max` 속성을 추가해라](#meter-요소에-min-max-속성을-추가해라) 
  * [`legend` 요소를 `fieldset` 요소의 첫번째 자식으로 둬라.](#legend-요소를-fieldset-요소의-첫번째-자식으로-둬라) 
* [스크립트](#스크립트)
  * [자바스크립트를 위한 `type` 속성을 생략해라](#자바스크립트를-위한-type-속성을-생략해라) 
  * [`script` 요소의 내용을 주석처리하지 마라](#script-요소의-내용을-주석처리하지-마라) 
  * [스크립트가 삽입된 `script` 요소를 쓰지 마라](#스크립트가-삽입된-script-요소를-쓰지-마라) 
* [기타](#기타)
  * [일관된 들여쓰기](#일관된-들여쓰기) 
  * [내부 링크에 절대 경로를 사용해라](#내부-링크에-절대-경로를-사용해라) 
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

이상한 규칙이 누군가를 혼란하게 한다.

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


그룹 콘텐츠
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


### `blockquote` 요소 안에 직접 포함하지 마라

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


### 한 줄에 한 리스트 아이템을 써라

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


### `ol` 요소에 `type` 속성을 써라

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


### 다이얼로그를 위해 `dl`을 쓰지 마라

`dl` 요소는 HTML5의 연결 목록으로 제한한다.

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


### `figcaption`  요소를 `figure` 요소의 첫째 or 마지막 자식요소로 써라

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


### `main` 요소를 써라

`main` 요소는 콘텐츠를 감쌀 떄 쓸 수 있다.

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>


### `div` 요소를 가능한 한 많이 없애라

`div` 요소는 최후의 수단이다.

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


Text-level 시맨틱
--------------------

### 그룹 가능한 동일 링크를 분리하지 마라

`a` 요소는 대부분의 요소를 감쌀 수 있다. (`a` 요소 자신이나 컨트롤같은 인터렉티브 요소는 제외한다)

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### 리소스를 다운하고자 할 때 `download` 속성을 사용하라

브라우저에서 연결된 리소스를 스토리지에서 다운받으려 할거다.

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### 필요하다면 `rel`, `hreflang`, `type` 속성을 사용해라

이러한 힌트는 어플리케이션에서 연결된 리소스를 제어하는 데 사용한다.

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### 링크 텍스트를 명확히 하라

링크 텍스트는 연결된 리소스의 레이블이어야한다.

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### 경고나 주의를 위해 `em`을 사용하지 말아라

이것들은 심각하다. 따라서 `storng` 요소가 더 적절하다.

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### `s`, `i`, `b`, `u` 요소를 가능한 한 없애라

이 요소의 시맨틱은 사람과 아주 다르다.

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### `q` 요소에 따옴표를 넣지 말아라

브라우저에서 제공한다.

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### `abbr` 요소에 `title` 속성을 써라

무엇의 함축어인 지 달리 설명할 길이 없다.

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby` 요소를 자세히 마크업해라

`ruby` 요소를 모든 모던 브라우저에서 완전하게 지원하는 게 아니다.

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 기계가 읽을 수 없는 `time` 요소에 `datetime` 속성을 추가해라

`datetime` 속성이 없을 때, `time` 요소의 포맷은 제한된다.

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### `class` 속성 접두어로 `language-`를 넣어 code 언어를 정의하라

일반적이진 않지만, spec에 언급되어있다.

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` 요소를 가능한 한 단순하게 둬라

`kbd` 요소를 감싸는 건 사람과 다르다.

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### `span` 요소를 가능한 한 많이 제거해라.

`span` 요소는 최후의 수단이다.

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### `br` 요소 뒤에 줄바꿈해라

`br` 요소를 사용하면 줄바꿈 하는 게 좋다.

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 프레젠테이션 목적으로만 `br` 요소를 쓰지 마라

`br` 요소는 줄바꿈을 위해서가 아니라, 콘텐츠의 라인 구분을 위해 사용한다.

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


에디트
-----

### `ins`와 `del` 요소로 다른 요소를 뛰어넘지 마라

요소는 다른 요소를 넘을 수 없다.

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


Embedded 콘텐츠
----------------

### `picture` 요소의 폴백으로 `img` 요소를 제공해라

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


### 만약 필요하다면 `img` 요소에 `alt` 속성을 추가해라

`alt` 속성은 이미지를 처리할 수 없거나 불러오지 못했을 때 도움을 준다.

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 가능한 경우 `alt` 속성을 비워둬라

본문을 보충하는 이미지라면, 근처에 동일한 콘텐츠가 있다.

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### 가능한 경우 `alt` 속성을 생략해라

때때로 어떤 텍스트가 alt 속성에 적합한 지 모를 수 있다.
(역주) spec에서 `alt` 속성은 특수한 케이스가 아니라면 필수 속성이므로 빈값으로 넣어주세요.

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### `iframe` 요소를 비워둬라

콘텐츠에 몇가지 제한사항잉 있다. 비워두면 항상 안전하다.

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### `map` 요소 콘텐츠도 마크업해라

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


### `audio`나 `video` 요소를 위한 폴백 콘텐츠를 제공해라.

HTML5에 새로 추가된 요소들을 위해 폴백 콘텐츠가 필요하다.

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


테이블 데이터
------------

### 한 줄에 한 셀만 써라

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


### `th` 요소를 헤더 셀로 써라

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


폼
-----

### 폼 컨트롤을 `label` 요소로 감싸라

`label` 요소가 폼 요소에 포커스를 주는 데 도움을 준다

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### 가능한 경우 `for` 속성을 생략해라

`label` 요소는 몇가지 폼 요소를 감쌀 수 있다.

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### `input` 요소에 적절한 `type` 속성을 사용해라

적절한 `type`을 사용하면, 브라우저에서 `input` 요소에 작은 기능을 제공한다.

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"`에 `value` 속성을 넣어라

submit 버튼의 기본 레이블은 브라우저 및 언어 사이 표준이 없다.

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### `input` 요소에 `pattern` 속성이 있는 경우 `title` 속성을 추가해라

입력한 텍스트가 `pattern` 속성과 매치하지 않는 경우,
`title` 속성의 값이 힌트가 될거다.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### 레이블하기 위해 `placeholder` 속성을 쓰지 마라

`label` 요소가 레이블을 위한 요소고, `placeholder` 속성은 짧은 힌트를 위한 속성이다.

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### 한 줄에 한 `option` 요소만 사용해라

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


### `progress` 요소에 `max` 속성을 추가해라

`max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### `meter` 요소에 `min`, `max` 속성을 추가해라

`min`, `max` 속성을 통해, `value` 속성을 쉬운 포맷으로 쓸 수 있다.

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### `legend` 요소를 `fieldset` 요소의 첫번째 자식으로 둬라.

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


스크립트
---------

### 자바스크립트를 위한 `type` 속성을 생략해라

HTML5에서, `script` 요소의 기본 `type` 속성값은 `text/javascript`다.

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### `script` 요소의 내용을 주석처리하지 마라

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


### 스크립트가 삽입된 `script` 요소를 쓰지 마라

`async` 속성은 성능면으로나 단순성면으로나 최고다.

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="//example.com/widget.js"></script>


기타
-----

### 일관된 들여쓰기

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


### 내부 링크에 절대 경로를 사용해라

절대 경로는 인터넷 연결 없이도 localhost에서도 동작한다.

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
- [@techhtml]


License
-------

[CC0]


[@hail2u]: https://github.com/hail2u
[@momdo]:  https://github.com/momdo
[@techhtml]:  https://github.com/techhtml
[CC0]:     http://creativecommons.org/publicdomain/zero/1.0/
