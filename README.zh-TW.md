Translations: [English (en)](README.md) · [বাংলা (bn)](README.bn.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [繁體中文 (zh-TW)](README.zh-TW.md)

# HTML 最佳實務

編寫易於維護與擴充的HTML檔案。


## 全局(一般)


### 以 DOCTYPE 為開頭

使用DOCTYPE來觸發標準模式(no-quirks mode)。

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### 不使用過時的 DOCTYPE

DOCTYPE 不在需要引用DTD，簡單明瞭。

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### 不要使用 XML 來宣告

你確定會想寫 XHTML?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### 不要什麼字元都寫成參考的形式(character reference)

如果你使用 UTF- 8 來編寫 HTML 檔案，幾乎所有字元(包括表情符號)都能直接寫。

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### 將 `&`、`<`、`>`、`"` 和 `'` 字元寫成參考的形式

為了避免 HTML 檔案出錯，以上這些字元都應該寫成字元參考的形式。

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### 使用字元值參照(Numeric character reference)來控制或隱藏字元

這些字元很容易被誤認為是其他字元，並且規範也不保證這些字元有定義好人類可讀的名稱。

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### 在註解內容周圍增加空白

某寫字元沒有辦法緊接在註解開始或結束的位置上。

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### 不要省略結束標籤(closing tag)

我想你可能不了解省略結束標籤的規則。

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


### 不要混用置空元素(empty element)的格式

遵循一致的規範能增加可讀性。

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### 不要再標籤和屬性值周圍增加空格

你沒有理由做這件事。

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### 不要混用大小寫

一樣是為了可讀性，保持一致是重點。

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>

Also Good:

    <A HREF="#general">General</A>


### 不要混用單雙引號

同上。

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 不要用多个空格間格屬性

奇怪的格式會混淆其他人。

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### 省略布林值

這樣寫更簡便，對吧?

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### 省略命名空間

SVG 和 MathML 可以直接在 HTML 檔案中使用。

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### 不要使用 XML 屬性

我們在寫 HTML 檔案。

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### 别把 `data-*`、Microdata、RDFa Lite 屬性與普通屬性混在一起

整串標籤可以變得很複雜。這條簡單的規則有助於閱讀。

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### 優先選則預設的 ARIA 語意

有些元素在 HTML 檔案中隐含了某種 ARIA 語意，不要特意把它們指出來。

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


## 根元素


### 加入 `lang` 屬性

`lang` 屬性有助於翻譯 HTML 檔案。

Bad:

    <html>

Good:

    <html lang="en-US">


### 盡量讓 `lang` 屬性值為最短 

日語只有在日本使用，所以國家地區代碼不是必需的。

Bad:

    <html lang="ja-JP">

Good:

    <html lang="ja">


### 盡可能避免使用 `data-*`

合適的屬性能被瀏覽器正確的處理。

Bad:

    <span data-language="french">chemises</span>
    ...

Good:

    <span title="French"><span lang="fr">chemises</span></span>
    ...


## 文件後設資料


### 增加 `title` 元素

`title` 元素的值會被很多應用程式所使用，而不僅僅是瀏覽器。

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 不要使用 `base` 元素

絕對路徑或 URL 對開發者與使用者來說都更為安全。

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


### 指定次要連結的 MIME 類別 (網際網路媒體形式)

這提示應用程式要如何處理這項資源。

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### 别連結到 `favicon.ico`

幾乎所有瀏覽器以非同步的且自動的方式來獲取 `/favicon.ico`。

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### 增加 `apple-touch-icon`

觸控圖示的預設請求位置突然改變了。


Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### 給備用樣式表增加 `title` 屬性

易讀的標籤有助於人們選擇合適的樣式表。

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### 使用 `link` 元素指向 URL

`href` 屬性的值可以被解析為 URL。

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


### 指定檔案字元編碼格式

UTF-8 暫時還不是所有瀏覽器的預設值。

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 不要使用過時的字元編碼格式

HTTP headers應該由伺服器來指定。

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### 一開始就指定字元編碼格式

標準要求字元編碼必須在檔案的前 1024 bytes中被指定。

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


### 使用 UTF-8

有了 UTF-8，你可以隨意的使用表情符號(emoji)

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### 省略 CSS 的 `type` 屬性

在 HTML 中，`style` 元素的預設 `type` 屬性值就是 `text/css`。

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### 不要在 `style` 元素內容中撰寫註解 

這個規則適用於舊的瀏覽器。

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


### 不要混合 CSS 和 JavaScript 的標籤(順序要對)

有時 `script` 元素會阻擋 DOM 樹的建立。

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


## 部分(Sections)


### 增加 `body` 元素

有時瀏覽器會在預料之外的地方補充 `body` 元素。

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


### 不要使用 `hgroup` 元素

這個元素不怎麼使用

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` 元素僅用於聯絡資訊

`address` 元素是給郵件地址、社交帳號、街道地址、電話號碼等通訊方式所準備的。

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## 群組内容


### 不要在 `pre` 元素里新起一行

第一行會被瀏覽器忽略，第二行及之後會被渲染。

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### 在 `blockquote` 元素中使用合適的元素

`blockquote` 元素的内容是引用，而不僅僅是一堆字元。


Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### 不要直接在 `blockquote` 中標註來源

`blockquote` 元素的内容是引用的话。

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


### 一列(row)只寫一個列表項目

很很很很很很長長長長長長長長長長長長長長長的列很很很很很難難難難難難難難難難難難難難難難難難難難閱讀。

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


### 使用 `ol` 元素的 `type` 屬性

有时tag會被附近的內容引用。如果使用 `type` 屬性更改tag，就可以安全地引用。

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


### 不要用 `dl` 表示对话

`dl` 元素僅限於表示 HTML 中的關聯列表。

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


### 把 `figcaption` 作為 `figure` 的首或尾元素

規範不允許 `figcaption` 元素卡在 `figure` 元素的中間。

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


### 使用 `main` 元素

`main` 元素可以用来包裹内容。

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>


### 盡可能避免 `div` 元素

實在沒其他替代方案後，才用 `div` 元素。

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


## 文本語意


### 不要把一个連結拆成兩半

`a` 元素可以包裹幾乎所有元素（除了表單控制等互動性元素和 `a` 元素自身）。

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### 使用 `download` 屬性指向下載資源

這會迫使瀏覽器下載連結到的資源。

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### 按需使用 `rel`、`hreflang` 和 `type` 屬性

它們有助於提示應用程式要如何處理連結到的資源

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### 明確的連結文字

連結文字應該是對應資源的名稱。

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### 不要使用 `em` 元素來表示警告

`strong` 元素比`em`更嚴肅，使用起來更合適。

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### 盡可能避免 `s`、`i`、`b` 和 `u` 元素

這些元素的語意比較難理解。

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### 不要在 `q` 元素外使用引號

瀏覽器會自動加上引號。

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### 給 `abbr` 元素增加 `title` 屬性

這是顯示縮寫全名的唯一方式。

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### 詳細標記 `ruby` 元素

現代瀏覽器對 `ruby` 元素的支持還不完整。

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 給電腦無法識別的 `time` 元素增加 `datetime` 屬性

當 `datetime` 屬性不存在，`time` 元素内容的格式會受限制。

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### 使用 `language-` 前缀的 `class` 屬性指定程式碼的語言

沒有統一的實現方式，但是規範有提及。

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` 元素愈簡單愈好

巢狀的的 `kbd` 元素難以閱讀。

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### 盡可能避免 `span` 元素

當沒有其他替代方案後，才用 `span`。

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### 在 `br` 元素後換行

使用 `br` 元素後應該要換行。

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 不要只為了格式好看就用 `br` 元素

`br` 元素不是用來給所有元素換行的，是用來在文字内容中換行的。

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## 編輯


### 不要跨元素使用 `ins` 和 `del`

元素不能越界。

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## 内嵌内容


### 為 `picture` 元素提供備用的 `img` 元素

對 `picture` 元素的支持還不夠好。

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


### 若有需要可為 `img` 元素增加 `alt` 屬性

`alt` 屬性對那些無法處理圖片或是禁用加載圖片的人很有幫助。

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 若有可能則留空 `alt` 屬性

如果圖片是用作補充說明，那麼附近應該有與 `alt` 相等作用的内容。

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### 若有可能則省略 `alt` 屬性

有時你不確定 `alt` 要寫什麼。

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### 留空 `iframe` 内容

`iframe` 的内容是受限的，留空比较安全。

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### 標記 `map` 元素内容

這樣使用螢幕閱讀器的讀者可以知道 `map` 的内容。

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


### 為 `audio` 和 `video` 元素提供備用内容

HTML 新引進的元素需要備用内容，以防舊版瀏覽器不支持。

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


## 表格資料


### 一列寫一个單元格

長列難以檢視。

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


### 使用 `th` 元素表示標題格

你沒理由不這樣做。

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


## 表單


### 使用 `label` 元素包裹表單來控制元素

`label` 元素有助於聚焦(focus)在表單元素上。

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### 若有可能則省略 `for` 屬性

`label` 元素可以包含表單元素。

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### 為 `input` 元素選擇適當的 `type` 屬性

使用 `type` 屬性後，瀏覽器會賦予 `input` 元素一些新功能。

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### 給 `input type="submit"` 增加 `value` 屬性

在不同瀏覽器和不同語言環境下，提交按鈕的預設標籤是不同的。

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### 給有 `pattern` 屬性的 `input` 元素增加 `title` 屬性

如果輸入的文字與 `pattern` 屬性不匹配，`title` 屬性的值就會被顯示為提示。

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### 不要把 `placeholder` 當作標籤來使用

`label` 元素用於提供標籤，`placeholder` 屬性用於簡單的提示。

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### 每行只寫一个 `option` 元素

長行難以閱覽。

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


### 為 `progress` 元素增加 `max` 屬性

有了 `max` 屬性，`value` 屬性更易於編寫。

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### 為 `meter` 元素增加 `min` 和 `max` 屬性

有了 `min` 和 `max` 屬性，`value` 屬性更易於編寫。

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### 將 `legend` 作為 `fieldset` 的第一個子元素

這是規範的要求。

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


## 指令碼


### 省略 JavaScript 的 `type` 屬性

在 HTML 中，`script` 元素的預設 `type` 屬性值就是 `text/javascript`。

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### 不要在 `script‵ 元素中編寫註解

這條規則適用於舊版的瀏覽器。

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


### 不要使用注入指令碼的 `script` 元素

`async` 屬性既簡單又高效。

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="https://example.com/widget.js"></script>


## 其它


### 一致的縮排格式

縮排格式可讀性有很大的影響。

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


### 使用相對路徑引用内部連結

無網路連接時，相對路徑在本機端有更好的表現。

Bad:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Good:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### 不要使用無協議的 URL 引用外部資源

有了protocal，外部資源的加載更可靠、更安全。

Bad:

    <script src="//example.com/js/library.js">

Good:

    <script src="https://example.com/js/library.js">




## 貢獻者

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## 譯者

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
- [@victorchao996](https://github.com/victorchao996)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar29](https://github.com/zulkar29)


## 版權使用許可

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
