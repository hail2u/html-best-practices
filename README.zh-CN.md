Translations: [English (en)](README.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [Dansk (da)](README.da.md) 

# HTML 最佳实践

编写易于维护与扩展的 HTML 文档。


## 全局


### 以 DOCTYPE 为开头

激活标准模式需要 DOCTYPE。

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### 不要使用过时的 DOCTYPE

DOCTYPE 不需要再引用 DTD 了，简单点就行。

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### 不要使用 XML 作为声明

你确定想写 XHTML?

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### 不要什么字符都转义

如果你使用 UTF-8 编写 HTML 文档，那么几乎所有字符（包括表情）都可以直接写。

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### 使用字符实体引用来转义 `&`、`<`、`>`、`"` 和 `'`

为了 HTML 文档不出错，这些字符应当始终被转义。

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### 使用字符值引用来转义控制或隐藏字符

这些字符很容易被误认为是其它字符，而且规范也不保证这些字符具有人类可读的名称。

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### 在注释内容周围添加空格

某些字符不能紧接在注释开始或结束的位置上。

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### 别忘了关闭标签

我觉得你不一定知道省略标签关闭的规则。

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


### 不要杂糅空元素的格式

一致性是可读性的关键。

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### 不要在标签和属性值周围添加空格

不需要理由。

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### 不要杂糅大小写

也是为了一致性。

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>

Also Good:

    <A HREF="#general">General</A>


### 不要杂糅单双引号

同上。

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 不要用多个空格间隔属性

奇怪的格式会把人搞晕的。

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### 省略布尔型属性值

这么写更简单，对吧？

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### 省略命名空间

SVG 和 MathML 可以直接在 HTML 文档中使用。

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### 不要使用 XML 属性

我们是在写 HTML 文档。

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### 别把 `data-*`、Microdata、RDFa Lite 属性和普通属性混在一起

标签串可以变得很复杂。这条简单的规则有助于阅读这样的标签串。

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### 首选默认隐式 ARIA 语义

有些元素在 HTML 文档中隐含了某种 ARIA 语义，不要特意把它们指出来。

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


### 添加 `lang` 属性

`lang` 属性有助于翻译 HTML 文档。

Bad:

    <html>

Good:

    <html lang="en-US">


### 保持 `lang` 属性值尽可能简短

日语只在日本使用，所以国家代码不是必须的。

Bad:

    <html lang="ja-JP">

Good:

    <html lang="ja">


### 尽可能避开 `data-*`

恰当的属性可以被浏览器正确处理。

Bad:

    <span data-language="french">chemises</span>
    ...

Good:

    <span title="French"><span lang="fr">chemises</span></span>
    ...


## 文档元数据


### 添加 `title` 元素

`title` 元素的值会被很多应用使用，而不仅仅是浏览器。

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

绝对路径或 URL 对开发者和用户来说都更安全。

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


### 指定次要链接资源的 MIME 类型

这提示了应用要怎么处理这项资源。

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### 别链接到 `favicon.ico`

几乎所有浏览器都会自动异步获取 `/favicon.ico`。

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### 添加 `apple-touch-icon`

触摸图标的默认请求路径突然改变了。

Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### 给备用样式表添加 `title` 属性

易读的标签有助于人们选择合适的样式表。

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### 使用 `link` 元素指向 URL

`href` 属性的值可以被解析为 URL。

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


### 指定文档字符编码格式

UTF-8 暂时还不是所有浏览器的默认值。

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 不要使用过时的字符编码格式

HTTP 报文头部应该由服务器指定，简单点。

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### 一开始就指定字符编码

规范要求字符编码必须在文档的前 1024 字节中被指定。

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

有了 UTF-8，你可以随心使用表情。

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### 省略 CSS 的 `type` 属性

在 HTML 中，`style` 元素的默认 `type` 属性值就是 `text/css`。

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### 不要给 `style` 元素内容写注释

此规则适用于旧版浏览器。

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


### 不要杂糅 CSS 和 JavaScript 的标签

有时 `script` 元素会阻塞 DOM 树的构建。

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


## 区块


### 添加 `body` 元素

有时浏览器会在预料之外的地方补充 `body` 元素。

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

这个元素不怎么用。

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address` 元素仅用于联系方式

`address` 元素是给邮箱、社交账户、街道地址、电话号码等联系方式准备的。

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## 分组内容


### 不要在 `pre` 元素里新起一行

第一行会被浏览器忽略，第二行及之后会被渲染。

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### 在 `blockquote` 元素中使用恰当的元素

`blockquote` 元素的内容是引用，而不仅仅是一堆字符。


Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### 不要直接在 `blockquote` 中注明来源

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


### 一行只写一个列表项

很很很很很很长长长长长长长长长长长长长长长的行很很很很很难难难难难难难难难难难难难难难难难难难难阅读。

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


### 使用 `ol` 元素的 `type` 属性

有时标记会被附近的内容引用。如果使用 `type` 属性更改标记，就可以安全地引用。

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

`dl` 元素仅限于表示 HTML 中的关联列表。

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


### 把 `figcaption` 作为 `figure` 的首或尾元素

规范不允许 `figcaption` 元素卡在 `figure` 元素的中间。

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


### 尽可能避免 `div` 元素

实在没办法了，才用 `div` 元素。

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


## 文本语义


### 不要把一个链接拆成两半

`a` 元素可以包裹几乎所有元素（除了表单控制等交互性元素和 `a` 元素自身）。

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### 使用 `download` 属性指向下载资源

这会迫使浏览器下载链接到的资源。

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### 按需使用 `rel`、`hreflang` 和 `type` 属性

它们有助于提示应用怎么处理链接到的资源。

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### 明确的链接文本

链接文本应该是对应资源的名称。

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### 不要使用 `em` 元素表示警告

警告是很严肃的事情，所以 `strong` 元素更合适。

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### 尽可能避免 `s`、`i`、`b` 和 `u` 元素

这些元素的语义太难解读。

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### 不要在 `q` 元素外使用引号

浏览器会自动加上引号。

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### 给 `abbr` 元素添加 `title` 属性

这是显示全称的唯一方式。

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### 详细标记 `ruby` 元素

现代浏览器对 `ruby` 元素的支持还不完整。

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 给电脑无法识别的 `time` 元素添加 `datetime` 属性

当 `datetime` 属性不存在，`time` 元素内容的格式会受限制。

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### 使用 `language-` 前缀的 `class` 属性指定代码语言

没有统一的实现方式，但规范中有提及。

Bad:

    <code>&lt;!DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### `kbd` 元素越简单越好

嵌套的 `kbd` 元素很难以阅读。

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### 尽可能避免 `span` 元素

实在没办法了，才用 `span`。

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### 在 `br` 元素后换行

使用 `br` 元素后应当换行。

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 不要只为了格式好看就用 `br` 元素

`br` 元素不是用来给所有元素换行的，是用来在文本内容中换行的。

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## 编辑


### 不要跨元素使用 `ins` 和 `del`

元素不能越界。

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


## 内嵌内容


### 为 `picture` 元素提供备用 `img` 元素

对 `picture` 元素的支持还不是很好。

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


### 按需为 `img` 元素添加 `alt` 属性

`alt` 属性对那些无法处理图片或禁用了图片加载的人很有帮助。

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 若有可能则留空 `alt` 属性

如果图片是用作补充说明，那么附近应该有与 `alt` 等价的内容。

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### 若有可能则省略 `alt` 属性

有时你不一定知道 `alt` 要写什么。

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


### 标记 `map` 元素内容

这样屏幕阅读器可以知道 `map` 的内容。

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


### 为 `audio` 和 `video` 元素提供备用内容

HTML 新引进的元素需要备用内容，以防旧版浏览器不支持。

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


## 表格数据


### 一行写一个单元格

长行难以浏览。

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


### 使用 `th` 元素表示标题格

就应该这样。

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


## 表单


### 使用 `label` 元素包裹表单控制元素

`label` 元素有助于表单元素的聚焦。

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### 若有可能则省略 `for` 属性

`label` 元素可以包含表单元素。

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### 为 `input` 元素选择合适的 `type` 属性

使用 `type` 属性后，浏览器会赋予 `input` 元素一些新功能。

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### 给 `input type="submit"` 添加 `value` 属性

在不同浏览器和不同语言环境下，提交按钮的默认标签是不同的。

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### 给有 `pattern` 属性的 `input` 元素添加 `title` 属性

如果输入文本与 `pattern` 属性不匹配，`title` 属性的值就会被显示为提示。

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### 不要把 `placeholder` 作为标签

`label` 元素用于提供标签，`placeholder` 属性用于简短提示。

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### 每行只写一个 `option` 元素

长行难以浏览。

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


### 为 `progress` 元素添加 `max` 属性

有了 `max` 属性，`value` 属性就易于编写。

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### 为 `meter` 元素添加 `min` 和 `max` 属性

有了 `min` 和 `max` 属性，`value` 属性就易于编写。

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### 将 `legend` 作为 `fieldset` 的第一个子元素

这是规范的要求。

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


## 脚本


### 省略 JavaScript 的 `type` 属性

在 HTML 中，`script` 元素的默认 `type` 属性值就是 `text/javascript`。

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### 不要为 `script‵ 元素的内容编写注释

这条规则适用于旧版浏览器。

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


### 不要使用注入脚本的 `script` 元素

`async` 属性既简单又高效。

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


### 一致的缩进

缩进对可读性影响很大。

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


### 使用相对路径引用内部链接

无网络链接时，相对链接在本机有更好的表现。

Bad:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Good:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### 不要使用无协议的 URL 引用外部资源

有了协议，外部资源的加载更可靠、更安全。

Bad:

    <script src="//example.com/js/library.js">

Good:

    <script src="https://example.com/js/library.js">




## 贡献者

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## 译者

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@mrcaidev](https://github.com/mrcaidev)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)


## 许可证

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
