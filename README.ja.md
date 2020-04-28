Translations: [English (en)](README.md) [日本語 (ja)](README.ja.md) [한국어 (ko)](README.ko.md) [Türkçe (tr)](README.tr.md)

# 普通のHTMLの書き方

保守しやすく、規模に依存しないHTML文書のために


- [一般](#general)
  - [DOCTYPEで始める](#start-with-doctype)
  - [置き換えられるべきまたは旧式のDOCTYPEを使わない](#dont-use-legacy-or-obsolete-doctype)
  - [XML宣言を使用しない](#dont-use-xml-declaration)
  - [文字参照はできる限り使わない](#dont-use-character-references-as-much-as-possible)
  - [`&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
  - [制御文字や不可視文字は数値文字参照を使う](#use-numeric-character-references-for-control-or-invisible-characters)
  - [コメントではその内容の前後へ空白文字を置く](#put-white-spaces-around-comment-contents)
  - [終了タグを省略しない](#dont-omit-closing-tag)
  - [空要素の書き方を混ぜない](#dont-mix-empty-element-format)
  - [タグや属性値の前後へ空白文字を置かない](#dont-put-white-spaces-around-tags-and-attribute-values)
  - [大文字・小文字を混ぜない](#dont-mix-character-cases)
  - [引用符を混ぜない](#dont-mix-quotation-marks)
  - [属性を2文字以上の空白文字で区切らない](#dont-separate-attributes-with-two-or-more-white-spaces)
  - [真偽値を取る属性の値は省略する](#omit-boolean-attribute-value)
  - [名前空間は省略する](#omit-namespaces)
  - [XML属性は使わない](#dont-use-xml-attributes)
  - [`data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  - [デフォルトの暗黙のARIAセマンティックスを尊重する](#prefer-default-implicit-aria-semantics)
- [文書要素](#the-root-element)
  - [`lang`属性を追加する](#add-lang-attribute)
  - [`lang`属性の値はできる限り短くする](#keep-lang-attribute-value-as-short-as-possible)
  - [できる限り`data-*`属性は避ける](#avoid-data-as-much-as-possible)
- [文書メタデータ](#document-metadata)
  - [`title`要素を書く](#add-title-element)
  - [`base`要素を使わない](#dont-use-base-element)
  - [マイナーな参照先リソースのMIMEタイプを指定する](#specify-mime-type-of-minor-linked-resources)
  - [`favicon.ico`へリンクしない](#dont-link-to-faviconico)
  - [`apple-touch-icon`へのリンクを書く](#add-apple-touch-icon-link)
  - [代替スタイルシートへ`title`属性を追加する](#add-title-attribute-to-alternate-stylesheets)
  - [URLには`link`要素を使う](#for-url-use-link-element)
  - [文書の文字エンコーディングを指定する](#specify-document-character-encoding)
  - [置き換えられるべき文字エンコーディング指定フォーマットを使わない](#dont-use-legacy-character-encoding-format)
  - [最初に文字エンコーディングを指定する](#specify-character-encoding-at-first)
  - [UTF-8を使う](#use-utf-8)
  - [CSSの`type`属性は省略する](#omit-type-attribute-for-css)
  - [`style`要素の中をコメントアウトしない](#dont-comment-out-contents-of-style-element)
  - [CSSとJavaScriptのタグを混ぜない](#dont-mix-tag-for-css-and-javascript)
- [セクション](#sections)
  - [`body`要素を書く](#add-body-element)
  - [`hgroup`要素のことは忘れる](#forget-about-hgroup-element)
  - [`address`要素は連絡先情報にのみ使う](#use-address-element-only-for-contact-information)
- [グルーピングコンテンツ](#grouping-content)
  - [`pre`要素は改行で始めない](#dont-start-with-newline-in-pre-element)
  - [`blockquote`要素内でも適切な要素を使う](#use-appropriate-element-in-blockquote-element)
  - [`blockquote`要素内に帰属情報を含めない](#dont-include-attribution-directly-in-blockquote-element)
  - [リスト項目は1行に1つずつ書く](#write-one-list-item-per-line)
  - [`ol`要素では`type`属性を使う](#use-type-attribute-for-ol-element)
  - [`dl`を会話のために使わない](#dont-use-dl-for-dialogue)
  - [`figcaption`要素は`figure`要素の最初か最後に置く](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  - [`main`要素を使う](#use-main-element)
  - [できる限り`div`要素は避ける](#avoid-div-element-as-much-as-possible)
- [テキストレベルセマンティックス](#text-level-semantics)
  - [グループ化できるリンクは分割しない](#dont-split-same-link-that-can-be-grouped)
  - [リソースをダウンロードさせる場合は`download`属性を使う](#use-download-attribute-for-downloading-a-resource)
  - [`rel`や`hreflang`、`type`属性を必要ならば使う](#use-rel-hreflang-and-type-attribute-if-needed)
  - [リンク文字列は明確にする](#clear-link-text)
  - [`em`要素を警告や注意に使わない](#dont-use-em-element-for-warning-or-caution)
  - [できる限り`s`や`i`、`b`、`u`要素を避ける](#avoid-s-i-b-and-u-element-as-much-as-possible)
  - [`q`要素内へ引用符は置かない](#dont-put-quotes-to-q-element)
  - [`abbr`要素へ`title`属性を追加する](#add-title-attribute-to-abbr-element)
  - [`ruby`要素は冗長にマークアップする](#markup-ruby-element-verbosely)
  - [機械的に解釈可能でない`time`要素では`datetime`属性を追加する](#add-datetime-attribute-to-non-machine-readable-time-element)
  - [コードの言語は`class`属性で`language-`で始めることで指定する](#specify-code-language-with-class-attribute-prefixed-with-language)
  - [できる限り`kbd`要素はシンプルにする](#keep-kbd-element-as-simple-as-possible)
  - [できる限り`span`要素は使わない](#avoid-span-element-as-much-as-possible)
  - [`br`要素の後ろでは改行する](#break-after-br-element)
  - [見た目だけのために`br`要素を使わない](#dont-use-br-element-only-for-presentational-purpose)
- [編集](#edits)
  - [`ins`や`del`要素は他の要素をまたがせない](#dont-stride-ins-and-del-element-over-other-elements)
- [エンベディッドコンテンツ](#embedded-content)
  - [`picture`要素ではフォールバックのための`img`要素を提供する](#provide-fallback-img-element-for-picture-element)
  - [必要な時は`img`要素へ`alt`属性を追加する](#add-alt-attrbute-to-img-element-if-needed)
  - [可能ならば`alt`属性は空にする](#empty-alt-attribute-if-possible)
  - [可能ならば`alt`属性は省略する](#omit-alt-attribute-if-possible)
  - [`iframe`要素の中は空にする](#empty-iframe-element)
  - [`map`要素の中はマークアップする](#markup-map-element-content)
  - [`audio`や`video`要素にフォールバックのためのコンテンツを提供する](#provide-fallback-content-for-audio-or-video-element)
- [テーブルデータ](#tabular-data)
  - [1行に1つのセルを書く](#write-one-cell-per-line)
  - [見出しセルには`th`要素を使う](#use-th-element-for-header-cell)
- [フォーム](#forms)
  - [フォームコントロールは`label`要素で括る](#wrap-form-control-with-label-element)
  - [可能ならば`for`属性は省略する](#omit-for-attribute-if-possible)
  - [`input`要素では適切な`type`属性を使う](#use-appropriate-type-attribute-for-input-element)
  - [`input type="submit"`には`value`属性を追加する](#add-value-attribute-to-input-typesubmit)
  - [`pattern`属性を持つ`input`要素には`title`属性を追加する](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  - [`placeholder`属性をラベル付けに使わない](#dont-use-placeholder-attribute-for-labeling)
  - [`option`要素は1行に1つ書く](#write-one-option-element-per-line)
  - [`progress`要素には`max`属性を追加する](#add-max-attribute-to-progress-element)
  - [`meter`要素では`min`及び`max`属性を追加する](#add-min-and-max-attribute-to-meter-element)
  - [`legend`要素は`fieldset`要素の最初に置く](#place-legend-element-as-the-first-child-of-fieldset-element)
- [スクリプティング](#scripting)
  - [JavaScriptでは`type`属性を省略する](#omit-type-attribute-for-javascript)
  - [`script`要素の中をコメントアウトしない](#dont-comment-out-contents-of-script-element)
  - [`script`要素を動的に生成するテクニックを使わない](#dont-use-script-injected-script-element)
- [その他](#other)
  - [一貫した量でインデントする](#indent-consistently)
  - [内部リンクには絶対パスを使う](#use-absolute-path-for-internal-links)
  - [外部リソースにはプロトコル相対URLを使わない](#dont-use-protocol-relative-url-for-external-resources)
- [Contributors](#contributors)
- [Translators](#translators)
- [License](#license)


## 一般<span id="general"></span>


### DOCTYPEで始める<span id="start-with-doctype"></span>

DOCTYPEは標準モードを有効にするために必要です。

悪い例:

    <html>
      ...
    </html>

良い例:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### 置き換えられるべきまたは旧式のDOCTYPEを使わない<span id="dont-use-legacy-or-obsolete-doctype"></span>

もはやDOCTYPEはDTDのためにあるわけではないので、シンプルにしましょう。

悪い例:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

良い例:

    <!DOCTYPE html>


### XML宣言を使用しない<span id="dont-use-xml-declaration"></span>

まだXHTMLを書きたいんですか？

悪い例:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

良い例:

    <!DOCTYPE html>


### 文字参照はできる限り使わない<span id="dont-use-character-references-as-much-as-possible"></span>

UTF-8でHTML文書を書くなら、Emojiも含めほとんどあらゆる文字はそのまま書けます。

悪い例:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

良い例:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

バグのないHTML文書を作成するためには、これらの文字は常にエスケープされるべきです。

悪い例:

    <h1>The "&" character</h1>

良い例:

    <h1>The &quot;&amp;&quot; character</h1>


### 制御文字や不可視文字は数値文字参照を使う<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

これらの文字は簡単に他の文字と間違えられてしまいます。また仕様では、これらの文字へ人間にわかりやすい名前を付けていることを保証していません。

悪い例:

    <p>This book can read in 1 hour.</p>

良い例:

    <p>This book can read in 1&#xA0;hour.</p>


### コメントではその内容の前後へ空白文字を置く<span id="put-white-spaces-around-comment-contents"></span>

いくつかの文字はコメントの開始直後や終了直前に書けません。

悪い例:

    <!--This section is non-normative-->

良い例:

    <!-- This section is non-normative -->


### 終了タグを省略しない<span id="dont-omit-closing-tag"></span>

多分、あなたは終了タグを省略するためのルールを理解していないでしょう。

悪い例:

    <html>
      <body>
        ...

良い例:

    <html>
      <body>
        ...
      </body>
    </html>


### 空要素の書き方を混ぜない<span id="dont-mix-empty-element-format"></span>

一貫性は読みやすさのキーポイントです。

悪い例:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### タグや属性値の前後へ空白文字を置かない<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

そうする必要はまったくありません。

悪い例:

    <h1 class=" title " >HTML Best Practices</h1>

良い例:

    <h1 class="title">HTML Best Practices</h1>


### 大文字・小文字を混ぜない<span id="dont-mix-character-cases"></span>

これも一貫性を与えてくれます。

悪い例:

    <a HREF="#general">General</A>

良い例:

    <a href="#general">General</a>

同じく良い例:

    <A HREF="#general">General</A>


### 引用符を混ぜない<span id="dont-mix-quotation-marks"></span>

上に同じです。

悪い例:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

良い例:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 属性を2文字以上の空白文字で区切らない<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

あなたのよくわからない整形ルールは誰かを混乱させます。

悪い例:

    <input   name="q"  type="search">

良い例:

    <input name="q" type="search">


### 真偽値を取る属性の値は省略する<span id="omit-boolean-attribute-value"></span>

この方が簡単に書けますよね？

悪い例:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

良い例:

    <audio autoplay src="/audio/theme.mp3">


### 名前空間は省略する<span id="omit-namespaces"></span>

SVGやMathMLはHTMLの文書では直接扱えます。

悪い例:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

良い例:

    <svg>
      ...
    </svg>


### XML属性は使わない<span id="dont-use-xml-attributes"></span>

我々はHTML文書を書いています。

悪い例:

    <span lang="ja" xml:lang="ja">...</span>

良い例:

    <span lang="ja">...</span>


### `data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

タグ文字列はとても複雑になりえます。こういった簡単なルールによってタグ文字列を読みやすくできるでしょう。

悪い例:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### デフォルトの暗黙のARIAセマンティックスを尊重する<span id="prefer-default-implicit-aria-semantics"></span>

いくつかの要素はHTML文章において暗黙的にARIA `role`を持っているので、それは指定しないようにしましょう。

悪い例:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

良い例:

    <nav>
      ...
    </nav>

    <hr>


## 文書要素<span id="the-root-element"></span>


### `lang`属性を追加する<span id="add-lang-attribute"></span>

`lang`属性はHTML文書の翻訳に役立ちます。

悪い例:

    <html>

良い例:

    <html lang="en-US">


### `lang`属性の値はできる限り短くする<span id="keep-lang-attribute-value-as-short-as-possible"></span>

日本語は日本でのみ使われます。つまり国コードは必要ありません。

悪い例:

    <html lang="ja-JP">

良い例:

    <html lang="ja">


### できる限り`data-*`属性は避ける<span id="avoid-data-as-much-as-possible"></span>

適切な属性は、ブラウザーがうまく扱ってくれるかもしれません。

悪い例:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

良い例:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## 文書メタデータ<span id="document-metadata"></span>


### `title`要素を書く<span id="add-title-element"></span>

`title`要素の中身は、ブラウザーに限らず、様々なアプリケーションにより利用されます。

悪い例:

    <head>
      <meta charset="UTF-8">
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### `base`要素を使わない<span id="dont-use-base-element"></span>

絶対パスや絶対URLの方が開発者とユーザーの双方に安全です。

悪い例:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

良い例:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### マイナーな参照先リソースのMIMEタイプを指定する<span id="specify-mime-type-of-minor-linked-resources"></span>

アプリケーションがそのリソースをどう取り扱うべきかのヒントになります。

悪い例:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

良い例:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico`へリンクしない<span id="dont-link-to-faviconico"></span>

ほとんどのブラウザーは`/favicon.ico`を自動的に非同期で取得します。

悪い例:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

良い例:

    <!-- Place `favicon.ico` in the root directory. -->


### `apple-touch-icon`へのリンクを書く<span id="add-apple-touch-icon-link"></span>

デフォルトでリクエストされるタッチ・アイコンのパスは突然変わりました。

Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### 代替スタイルシートへ`title`属性を追加する<span id="add-title-attribute-to-alternate-stylesheets"></span>

人間にわかりやすいラベルにより適切なスタイルシートを選択しやすくなります。

悪い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### URLには`link`要素を使う<span id="for-url-use-link-element"></span>

`href`属性の値はURLとして解決できます。

悪い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

良い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### 文書の文字エンコーディングを指定する<span id="specify-document-character-encoding"></span>

まだすべてのブラウザーでUTF-8がデフォルトになっていません。

悪い例:

    <head>
      <title>HTML Best Practices</title>
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 置き換えられるべき文字エンコーディング指定フォーマットを使わない<span id="dont-use-legacy-character-encoding-format"></span>

HTTPヘッダーはサーバー側で指定されるべきで、簡単にしておきましょう。

悪い例:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

良い例:

    <meta charset="UTF-8">


### 最初に文字エンコーディングを指定する<span id="specify-character-encoding-at-first"></span>

仕様では文書の先頭1024バイトまでに文字エンコーディングを指定することを要求しています。

悪い例:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### UTF-8を使う<span id="use-utf-8"></span>

UTF-8ならEmojiを自由に使えます。

悪い例:

    <meta charset="Shift_JIS">

良い例:

    <meta charset="UTF-8">


### CSSの`type`属性は省略する<span id="omit-type-attribute-for-css"></span>

HTMLでは、`style`要素における`type`属性の初期値は`text/css`です。

悪い例:

    <style type="text/css">
      ...
    </style>

良い例:

    <style>
      ...
    </style>


### `style`要素の中をコメントアウトしない<span id="dont-comment-out-contents-of-style-element"></span>

この儀式は古いブラウザーのためです。

悪い例:

    <style>
    <!--
      ...
      -->
    </style>

良い例:

    <style>
      ...
    </style>


### CSSとJavaScriptのタグを混ぜない<span id="dont-mix-tag-for-css-and-javascript"></span>

`script`要素はDOMの構築をブロックするかもしれません。

悪い例:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

同じく良い例:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## セクション<span id="sections"></span>


### `body`要素を書く<span id="add-body-element"></span>

ブラウザーは思っても見ない位置へ`body`要素を補完するかもしれません。

悪い例:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

良い例:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### `hgroup`要素のことは忘れる<span id="forget-about-hgroup-element"></span>

あまり使われていません。

悪い例:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

良い例:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address`要素は連絡先情報にのみ使う<span id="use-address-element-only-for-contact-information"></span>

`address`要素はメールアドレスやSNSアカウント、住所、電話番号など、実際に利用できるあなたとの連絡手段のための要素です。

悪い例:

    <address>No rights reserved.</address>

良い例:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## グルーピングコンテンツ<span id="grouping-content"></span>


### `pre`要素は改行で始めない<span id="dont-start-with-newline-in-pre-element"></span>

最初の改行はブラウザーに無視されますが、2番目以降はそのまま表示されます。

悪い例:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

良い例:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote`要素内でも適切な要素を使う<span id="use-appropriate-element-in-blockquote-element"></span>

`blockquote`要素の中身は引用で、単なる文字の連続ではありません。

悪い例:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### `blockquote`要素内に帰属情報を含めない<span id="dont-include-attribution-directly-in-blockquote-element"></span>

`blockquote`要素の中身は引用です。

悪い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

同じく良い例:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### リスト項目は1行に1つずつ書く<span id="write-one-list-item-per-line"></span>

長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーい行はとっっっっっっっっっっっっっっっっっっっっっっっっっっっても読みづらいです。

悪い例:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

良い例:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### `ol`要素では`type`属性を使う<span id="use-type-attribute-for-ol-element"></span>

リスト・マーカーは周辺から参照される場合があります。`type`属性を使ってリスト・マーカーを変更すれば、安全に参照できるでしょう。

悪い例:

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

良い例:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### `dl`を会話のために使わない<span id="dont-use-dl-for-dialogue"></span>

HTMLでは`dl`要素は関連付けリストに限定されています。

悪い例:

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

良い例:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### `figcaption`要素は`figure`要素の最初か最後に置く<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

仕様では`figcaption`要素を`figure`要素の中ほどに置けません。

悪い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

良い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### `main`要素を使う<span id="use-main-element"></span>

`main`要素はコンテンツをまとめるために使えます。

悪い例:

    <div id="content">
      ...
    </div>

良い例:

    <main>
      ...
    </main>


### できる限り`div`要素は避ける<span id="avoid-div-element-as-much-as-possible"></span>

`div`要素は最後の手段です。

悪い例:

    <div class="chapter">
      ...
    </div>

良い例:

    <section>
      ...
    </section>


## テキストレベルセマンティックス<span id="text-level-semantics"></span>


### グループ化できるリンクは分割しない<span id="dont-split-same-link-that-can-be-grouped"></span>

`a`要素はほとんどの要素（フォームコントロールのようなインタラクティブ要素や`a`要素自身以外）を括れます。

悪い例:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

良い例:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### リソースをダウンロードさせる場合は`download`属性を使う<span id="use-download-attribute-for-downloading-a-resource"></span>

こうすることでダウンロードするリンク先のリソースを確実にローカルに保存させられます。

悪い例:

    <a href="/downloads/offline.zip">offline version</a>

良い例:

    <a download href="/downloads/offline.zip">offline version</a>


### `rel`や`hreflang`、`type`属性を必要ならば使う<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

これらのヒントは、アプリケーションがリンク先のリソースをどう扱えば良いのかの助けになります。

悪い例:

    <a href="/ja/pdf">Japanese PDF version</a>

良い例:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### リンク文字列は明確にする<span id="clear-link-text"></span>

リンク文字列はリンク先のリソースのラベルであるべきです。

悪い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

良い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### `em`要素を警告や注意に使わない<span id="dont-use-em-element-for-warning-or-caution"></span>

それらは深刻なものです。ですから`strong`要素の方がより相応しいはずです。

悪い例:

    <em>Caution!</em>

良い例:

    <strong>Caution!</strong>


### できる限り`s`や`i`、`b`、`u`要素を避ける<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

これらの要素のセマンティックスは人類には難しすぎます。

悪い例:

    <i class="icon-search"></i>

良い例:

    <span class="icon-search" aria-hidden="true"></span>


### `q`要素内へ引用符は置かない<span id="dont-put-quotes-to-q-element"></span>

引用符はブラウザーが提供します。

悪い例:

    <q>“For writing maintainable and scalable HTML documents”</q>

良い例:

    <q>For writing maintainable and scalable HTML documents</q>

同じく良い例:

    “For writing maintainable and scalable HTML documents”


### `abbr`要素へ`title`属性を追加する<span id="add-title-attribute-to-abbr-element"></span>

他に完全表記を提示する方法がありません。

悪い例:

    <abbr>HBP</abbr>

良い例:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby`要素は冗長にマークアップする<span id="markup-ruby-element-verbosely"></span>

`ruby`要素のサポートはまだモダンブラウザー間でも完了していません。

悪い例:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

良い例:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 機械的に解釈可能でない`time`要素では`datetime`属性を追加する<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

`datetime`属性を使わない場合、`time`要素の中身は限定されます。

悪い例:

    <time>Dec 19, 2014</time>

良い例:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### コードの言語は`class`属性で`language-`で始めることで指定する<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

これは正式な方法ではありませんが、仕様では言及されています。

悪い例:

    <code>&lt;!DOCTYPE html&gt;</code>

良い例:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### できる限り`kbd`要素はシンプルにする<span id="keep-kbd-element-as-simple-as-possible"></span>

入れ子にした`kbd`要素は人類には難しすぎます。

悪い例:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

良い例:

    <kbd>Ctrl+F5</kbd>


### できる限り`span`要素は使わない<span id="avoid-span-element-as-much-as-possible"></span>

`span`要素は最後の手段です。

悪い例:

    HTML <span class="best">Best</span> Practices

良い例:

    HTML <em>Best</em> Practices


### `br`要素の後ろでは改行する<span id="break-after-br-element"></span>

`br`要素が使われる場所には、間違いなく改行が必要です。

悪い例:

    <p>HTML<br>Best<br>Practices</p>

良い例:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 見た目だけのために`br`要素を使わない<span id="dont-use-br-element-only-for-presentational-purpose"></span>

`br`要素は改行のためにあるのではなく、コンテンツに必要な改行のためにあります。

悪い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

良い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## 編集<span id="edits"></span>


### `ins`や`del`要素は他の要素をまたがせない<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

要素は他の要素をまたげません。

悪い例:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

良い例:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## エンベディッドコンテンツ<span id="embedded-content"></span>


### `picture`要素ではフォールバックのための`img`要素を提供する<span id="provide-fallback-img-element-for-picture-element"></span>

`picture`要素のサポートはまだよくありません。

悪い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

良い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### 必要な時は`img`要素へ`alt`属性を追加する<span id="add-alt-attrbute-to-img-element-if-needed"></span>

`alt`属性は、画像を表示できなかったり、画像の読み込みを無効にしている環境へ助けになります。

悪い例:

    <img src="/img/logo.png">

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 可能ならば`alt`属性は空にする<span id="empty-alt-attribute-if-possible"></span>

画像が補助的なものならば、きっと周囲に同等のコンテンツが存在するはずです。

悪い例:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

良い例:

    <img alt="" src="/img/icon/help.png"> Help


### 可能ならば`alt`属性は省略する<span id="omit-alt-attribute-if-possible"></span>

たまにどのような文字列が適切な`alt`属性の値かわからない場合もあります。

悪い例:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

良い例:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### `iframe`要素の中は空にする<span id="empty-iframe-element"></span>

その内容にはいくつかの制限があります。空にすれば安全です。

悪い例:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

良い例:

    <iframe src="/ads/default.html"></iframe>


### `map`要素の中はマークアップする<span id="markup-map-element-content"></span>

その中身はスクリーン・リーダーへ提供されます。

悪い例:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

良い例:

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


### `audio`や`video`要素にフォールバックのためのコンテンツを提供する<span id="provide-fallback-content-for-audio-or-video-element"></span>

HTMLで新しく作られた要素にはフォールバックのためのコンテンツが必要です。

悪い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

良い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## テーブルデータ<span id="tabular-data"></span>


### 1行に1つのセルを書く<span id="write-one-cell-per-line"></span>

長い行は把握しづらいです。

悪い例:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

良い例:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### 見出しセルには`th`要素を使う<span id="use-th-element-for-header-cell"></span>

避ける理由はないでしょう。

悪い例:

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

良い例:

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


## フォーム<span id="forms"></span>


### フォームコントロールは`label`要素で括る<span id="wrap-form-control-with-label-element"></span>

`label`要素はフォーム要素へフォーカスを当てるのに役立ちます。

悪い例:

    <p>Query: <input name="q" type="text"></p>

良い例:

    <p><label>Query: <input name="q" type="text"></label></p>


### 可能ならば`for`属性は省略する<span id="omit-for-attribute-if-possible"></span>

`label`要素はいくつかのフォーム要素を含められます。

悪い例:

    <label for="q">Query: </label><input id="q" name="q" type="text">

良い例:

    <label>Query: <input name="q" type="text"></label>


### `input`要素では適切な`type`属性を使う<span id="use-appropriate-type-attribute-for-input-element"></span>

適切な`type`属性により、ブラウザーは`input`要素へちょっとした機能を与えてくれます。

悪い例:

    <label>Search keyword: <input name="q" type="text"></label>

良い例:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"`には`value`属性を追加する<span id="add-value-attribute-to-input-typesubmit"></span>

送信ボタンは、そのデフォルトのラベルがブラウザーや言語設定によって変わってしまいます。

悪い例:

    <input type="submit">

良い例:

    <input type="submit" value="Search">


### `pattern`属性を持つ`input`要素には`title`属性を追加する<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

もし入力したテキストが`pattern`属性にマッチしない場合、`title`属性の値がヒントとして表示されます。

悪い例:

    <input name="security-code" pattern="[0-9]{3}" type="text">

良い例:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### `placeholder`属性をラベル付けに使わない<span id="dont-use-placeholder-attribute-for-labeling"></span>

`label`要素がラベルのためにあり、`placeholder`属性は短いヒントのためにあります。

悪い例:

    <input name="email" placeholder="Email" type="text">

良い例:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### `option`要素は1行に1つ書く<span id="write-one-option-element-per-line"></span>

長い行は把握しづらいです。

悪い例:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

良い例:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### `progress`要素には`max`属性を追加する<span id="add-max-attribute-to-progress-element"></span>

`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <progress value="0.5"> 50%</progress>

良い例:

    <progress max="100" value="50"> 50%</progress>


### `meter`要素では`min`及び`max`属性を追加する<span id="add-min-and-max-attribute-to-meter-element"></span>

`min`と`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

良い例:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### `legend`要素は`fieldset`要素の最初に置く<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

仕様がそう要求しています。

悪い例:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

良い例:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## スクリプティング<span id="scripting"></span>


### JavaScriptでは`type`属性を省略する<span id="omit-type-attribute-for-javascript"></span>

HTMLでは、`script`要素における`type`属性の初期値は`text/javascript`です。

悪い例:

    <script type="text/javascript">
      ...
    </script>

良い例:

    <script>
      ...
    </script>


### `script`要素の中をコメントアウトしない<span id="dont-comment-out-contents-of-script-element"></span>

この儀式は古いブラウザーのためです。

悪い例:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

同じく悪い例:

    <script>
    <!--
      ...
    // -->
    </script>

良い例:

    <script>
      ...
    </script>


### `script`要素を動的に生成するテクニックを使わない<span id="dont-use-script-injected-script-element"></span>

明快さとパフォーマンスの両面で`async`属性が最良です。

悪い例:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

良い例:

    <script async defer src="https://example.com/widget.js"></script>


## その他<span id="other"></span>


### 一貫した量でインデントする<span id="indent-consistently"></span>

インデントは読みやすさにおいて重要です。

悪い例:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

良い例:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### 内部リンクには絶対パスを使う<span id="use-absolute-path-for-internal-links"></span>

絶対パスはインターネット回線のないローカルの環境でもうまく動きます。

悪い例:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

良い例:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### 外部リソースにはプロトコル相対URLを使わない<span id="dont-use-protocol-relative-url-for-external-resources"></span>

プロトコルを指定すると、外部リソースを確実かつ安全に読み込めます。

悪い例:

    <script src="//example.com/js/library.js">

良い例:

    <script src="https://example.com/js/library.js">




## Contributors<span id="contributors"></span>

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Translators

- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
