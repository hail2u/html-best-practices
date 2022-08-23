Translations: [English (en)](README.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Bahasa Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md)

# Cách viết HTML tối ưu nhất

Để các tài liệu HTML có khả năng bảo trì và mở rộng.


## Chung chung


### Bắt đầu với DOCTYPE

DOCTYPE là bắt buộc để kích hoạt chế độ no-quirks.

Tồi:

    <html>
      ...
    </html>

Tốt:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Đừng sử dụng các khai báo DOCTYPE cũ hoặc đã lỗi thời

DOCTYPE không dành cho bất kỳ DTD (Document Type Declaration) nữa, hãy đơn giản sử dụng:

Tồi:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Tốt:

    <!DOCTYPE html>


### Đừng sử dụng XML trong khai báo

Bạn có chắc chắn mình muốn viết XHTML?

Tồi:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Tốt:

    <!DOCTYPE html>


### Đừng sử dụng các tham chiếu ký tự càng nhiều càng tốt

Nếu bạn viết một tài liệu HTML với định dạng UTF-8, hầu hết tất cả các ký tự
(bao gồm cả Emoji) có thể được viết trực tiếp.

Tồi:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Tốt:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Những ký tự `&`, `<`, `>`, `"` và  `'` với tên tham chiếu ký tự

Những ký tự này nên được viết bằng các tham chiếu ký tự để không xảy ra lỗi ở tài liệu HTML.

Tồi:

    <h1>The "&" character</h1>

Tốt:

    <h1>The &quot;&amp;&quot; character</h1>


### Sử dụng tham chiếu ký tự số cho những ký tự điều khiển hoặc những ký tự vô hình

Những ký tự này dễ bị hiểu sai thành ký tự khác. Và thông số kỹ thuật
cũng không đảm bảo rằng một người có thể đọc được tên cho các ký tự này.

Tồi:

    <p>This book can read in 1 hour.</p>

Tốt:

    <p>This book can read in 1&#xA0;hour.</p>


### Thêm khoảng trắng xung quanh nội dung ghi chú

Một số ký tự không thể được sử dụng ngay lập tức sau khi ghi chú được mở
hoặc được đóng lại.

Tồi:

    <!--This section is non-normative-->

Tốt:

    <!-- This section is non-normative -->


### Đừng bỏ qua thẻ đóng

Tôi nghĩ bạn không biết một quy tắc của việc bỏ qua thẻ đóng.

Tồi:

    <html>
      <body>
        ...

Tốt:

    <html>
      <body>
        ...
      </body>
    </html>


### Đừng trộn lẫn định dạng phần tử trống

Tính nhất quán là chìa khóa cho việc dễ đọc.

Tồi:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Tốt:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Đừng thêm khoảng trắng vào xung quanh các thẻ và giá trị của các thuộc tính

Không có lý do gì để làm điều này.

Tồi:

    <h1 class=" title " >HTML Best Practices</h1>

Tốt:

    <h1 class="title">HTML Best Practices</h1>


### Đừng trộn lẫn chữ hoa và chữ thường

Nó cũng mang lại một sự nhất quán.

Tồi:

    <a HREF="#general">General</A>

Tốt:

    <a href="#general">General</a>

Cũng được:

    <A HREF="#general">General</A>


### Đừng trộn lẫn các dấu ngoặc kép

Giống như trên.

Tồi:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Tốt:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Đừng phân tách các thuộc tính bằng hai hoặc nhiều khoảng trắng

Các quy tắc định dạng kỳ dị của bạn sẽ làm người đọc bối rối.

Tồi:

    <input   name="q"  type="search">

Tốt:

    <input name="q" type="search">


### Bỏ qua giá trị thuộc tính boolean

Nó thật dễ dàng để viêt, phải không?

Tồi:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Tốt:

    <audio autoplay src="/audio/theme.mp3">


### Bỏ qua namespaces

SVG và MathML có thể được sử dụng trực tiếp trong một tài liệu HTML.

Tồi:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Tốt:

    <svg>
      ...
    </svg>


### Đừng sử dụng các thuộc tính XML

Chúng tôi viết một tài liệu HTML.

Tồi:

    <span lang="ja" xml:lang="ja">...</span>

Tốt:

    <span lang="ja">...</span>


### Đừng trộn lẫn thuộc tính `data-*`, Microdata và RDFa Lite với các thuộc tính chung khác

Một thẻ dài có thể rất phức tạp. Quy tắc đơn giản này sẽ giúp đọc một thẻ dài dễ dàng hơn.

Tồi:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Tốt:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Ưu tiên các ngữ nghĩa ARIA mặc định ngầm

Một số phần tử có một ARIA `role` ngầm định trong một tài liệu HTML,
đừng chỉ định lại chúng.

Tồi:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Tốt:

    <nav>
      ...
    </nav>

    <hr>


## Phần tử root


### Thêm một thuộc tính `lang`

Thuộc tính `lang` sẽ giúp phiên dịch một tài liệu HTML.

Tồi:

    <html>

Tốt:

    <html lang="en-US">


### Giữ thuộc tính `lang` càng ngắn càng tốt

Tiếng Nhật chỉ sử dụng ở Nhật bản. Vì thế mã quốc gia là không cần thiết.

Tồi:

    <html lang="ja-JP">

Tốt:

    <html lang="ja">


### Tránh sử dụng `data-*` càng nhiều càng tốt

Một thuộc tính thích hợp có thể được trình duyệt xử lý đúng cách.

Tồi:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Tốt:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Document metadata


### Thêm phần tử `title`

Giá trị của phần tử `title` được sử dụng bởi nhiều ứng dụng khác nhau
không chỉ là trình duyệt.

Tồi:

    <head>
      <meta charset="UTF-8">
    </head>

Tốt:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Đừng sử dụng thuộc tính `base`

Một đường dẫn tương đối hoặc URL là an toàn hơn cho lập trình viên và người dùng.

Tồi:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Tốt:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Chỉnh định kiểu MIME hoặc các tài nguyên liên kết phụ

Đây là một gợi ý về cách ứng dụng xử lý tài nguyên này.

Tồi:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Tốt:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Đừng liên kết đến `favico.ico`

Hầu hết các trình duyệt nạp `/favicon.ico` tự động và không đồng bộ.

Tồi:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Tốt:

    <!-- Place `favicon.ico` in the root directory. -->


### Thêm liên kết `apple-touch-icon`

Một đường dẫn yêu cầu mặc định cho biểu tượng cảm ứng đã bị thay đổi đột ngột.

Tồi:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Tốt:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Thêm thuộc tính `title` cho định dạng kiểu luân phiên

Một nhãn có thể đọc được bởi con người có thể giúp mọi người lựa chọn định dạng kiểu phù hợp.

Tồi:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Tốt:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Với URL, sử dụng phần tử `link`

Giá trị của thuộc tính `href` có thể được phân giải như một URL.

Tồi:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Tốt:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Chỉ định mã hóa ký tự của tài liệu

UTF-8 chưa phải là mặc định trên tất cả các trình duyệt.

Tồi:

    <head>
      <title>HTML Best Practices</title>
    </head>

Tốt:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Đừng sử dụng định dạng mã hóa ký tự cũ

HTTP headers được chỉnh định bởi một máy chủ, hãy giữ nó đơn giản.

Tồi:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Tốt:

    <meta charset="UTF-8">


### Chỉ định mã hóa ký tự vào đầu tài liệu

Đặc tả yêu cầu mã hóa ký tự được chỉ định trong 1024 bytes đầu tiên của tài liệu.

Tồi:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Tốt:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Sử dụng UTF-8

Với UTF-8, bạn sử dụng Emoji miễn phí.

Tồi:

    <meta charset="Shift_JIS">

Tốt:

    <meta charset="UTF-8">


### Bỏ qua thuộc tính `type` cho CSS

Trong HTML, giá trị mặc định của thuộc tính `type` của `style` là `text/css`.

Tồi:

    <style type="text/css">
      ...
    </style>

Tốt:

    <style>
      ...
    </style>


### Đừng ghi chú trong nội dung của phần tử `style`

Cách này dành cho các trình duyệt cũ.

Tồi:

    <style>
    <!--
      ...
      -->
    </style>

Tốt:

    <style>
      ...
    </style>


### Đừng trộn lẫn thẻ cho CSS và JavaScript

Đội khi phần tử `script` chặn việc dựng DOM.

Tồi:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Tốt:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Cũng tốt:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections


### Thêm thuộc tính `body`

Đôi khi phần tử `body` được trình duyệt bổ sung ở vị trí không mong muốn.

Tồi:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Tốt:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Quên phần tử `hgroup` đi

Phần tử này không được sử dụng quá nhiều.

Tồi:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Tốt:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Chỉ sử dụng phần tử `address` cho thông tin liên lạc

Phần tử `address` là dành cho địa chỉ email, tài khoản mạng xã hôi, địa chỉ đường,
số điện thoại, hoặc cái gì đó mà bạn có thể liên lạc.

Tồi:

    <address>No rights reserved.</address>

Tốt:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Nhóm nội dung


### Đừng quên bắt đầu với dòng mới trong phần tử `pre`

Dòng mới đầu tiên sẽ bị trình duyệt bỏ qua, nhưng dòng thứ hai trở đi sẽ được
hiển thị.

Tồi:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Tốt:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Sử dụng phần tử phù hợp trong `blockquote`

Nội dung của phần tử `blockquote` là một trích dẫn, không phải một đoạn ký tự.

Tồi:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Tốt:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Đừng bao gồm sự chỉ định trong phần tử `blockquote`

Nội dung của phần tử `blockquote` là một trích dẫn.

Tồi:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Tốt:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Cũng tốt:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Viết một danh sách trên mỗi dòng

Dònnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
dài thì quuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuá khó đọc.

Tồi:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Tốt:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Sử dụng thuộc tính `type` cho phần tử `ol`

Đôi khi những điểm đánh dấu được tham chiếu bởi nội dung ở gần. Nếu bạn thay đổi
điểm đánh dấu với thuộc tính `type`, bạn sẽ an toàn khi tham chiếu.

Tồi:

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

Tốt:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Đừng sử dụng `dl` cho đoạn hội thoại

Phần tử `dl` bị giới hạn vào một danh sách liên kết trong HTML.

Tồi:

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

Tốt:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Đặt phần tử `figcaption` là phần tử đầu hoặc cuối của phần tử `figure`

Tài liệu không cho phép phần tử `figcaption` ở giữa phần tử `figure`.

Tồi:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Tốt:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Sử dụng phần tử `main`

Phần tử `main` có thể được sử dụng để bọc nội dung.

Tồi:

    <div id="content">
      ...
    </div>

Tốt:

    <main>
      ...
    </main>


### Tránh sử dụng phần tử `div` càng nhiều càng tốt

Phần tử `div` là sự lựa chọn cuối cùng.

Tồi:

    <div class="chapter">
      ...
    </div>

Tốt:

    <section>
      ...
    </section>


## Ngữ nghĩa cấp độ văn bản


### Đừng chia thành nhiều liên kết giống nhau mà có thể nhóm lại

Phần tử `a` có thể bao bọc hầu hết tất cả các phần tử (ngoại trừ các phần tử
tương tác như biểu mẫu và chính nó).

Tồi:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Tốt:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Sử dụng thuộc tính `download` cho việc tải một tài nguyên

Nó sẽ buộc các trình duyệt tải xuống tài nguyên được liên kết vào bộ nhớ.

Tồi:

    <a href="/downloads/offline.zip">offline version</a>

Tốt:

    <a download href="/downloads/offline.zip">offline version</a>


### Sử dụng thuộc tính `rel`, `hreflang` và `type` nếu cần

Những gợi ý này giúp ứng dụng biết cách xử lý các liên kết đến tài nguyên.

Tồi:

    <a href="/ja/pdf">Japanese PDF version</a>

Tốt:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Làm sạch văn bản liên kết

Văn bản liên kết nên là nhãn nếu nó liên kết đến tài nguyên.

Tồi:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Tốt:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Đừng sử dụng thuộc tính `em` cho cảnh báo hoặc thận trọng

Đây là sự nghiêm túc. Vì vậy, phần tử `strong` thích hợp hơn.

Tồi:

    <em>Caution!</em>

Tốt:

    <strong>Caution!</strong>


### Tránh phần tử `s`, `i`, `b` và `u` càng nhiều càng tốt

Những ngữ nghĩa của các phần tử này thì quá khó cho con người.

Tồi:

    <i class="icon-search"></i>

Tốt:

    <span class="icon-search" aria-hidden="true"></span>


### Đừng thêm dấu ngoặc kép trong phần tử `q`

Những dấu ngoặc kép được cung cấp bởi trình duyệt.

Tồi:

    <q>“For writing maintainable and scalable HTML documents”</q>

Tốt:

    <q>For writing maintainable and scalable HTML documents</q>

Cũng tốt:

    “For writing maintainable and scalable HTML documents”


### Thêm thuộc tính `title` cho phần từ `abbr`

Không có cách nào khác để thể hiện sự mở rộng của nó.

Tồi:

    <abbr>HBP</abbr>

Tốt:

    <abbr title="HTML Best Practices">HBP</abbr>


### Đánh dấu phần tử `ruby` dài dòng

Phần tử `ruby` không được hỗ trợ hoàn toàn trên các trình duyệt hiện đại.

Tồi:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Tốt:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Thêm thuộc tính `datetime` vào phần từ `time` không thể đọc được bằng máy

Khi thuộc tính `datetime` không hiển thị, định dạng nội dung của các phần tử `time` bị hạn chế.

Tồi:

    <time>Dec 19, 2014</time>

Tốt:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Chỉ định code languge với thuộc tính `class` có tiền tố `language-`

Đây không phải là một cách chính thức, nhưng thông số kỹ thuật đề cập đến nó.

Tồi:

    <code>&lt;!DOCTYPE html&gt;</code>

Tốt:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Giữ phần tử `kbd` càng đơn giản càng tốt

Việc lồng phần tử `kdb` là quá khó đối với con người.

Tồi:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Tốt:

    <kbd>Ctrl+F5</kbd>


### Tránh sử dụng phần tử `span` càng nhiều càng tốt

Phần tử `span` là sự lựa chọn cuối cùng.

Tồi:

    HTML <span class="best">Best</span> Practices

Tốt:

    HTML <em>Best</em> Practices


### Xuống dòng sau phần tử `br`

Cần ngắt dòng nơi phần tử `br` được sử dụng.

Tồi:

    <p>HTML<br>Best<br>Practices</p>

Tốt:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Đừng sử dụng phần tử `br` cho mục đích trình bày

Phần tử `br` không được sử dụng cho ngắt dòng, nó dùng để ngắt dòng nội dung.

Tồi:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Tốt:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Chỉnh sửa


### Không lấn phần tử `ins` và `del` lên các phần tử khác

Các phần tử không thể bị tràn bởi các phần tử khác.

Tồi:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Tốt:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Nội dung được nhúng


### Cung cấp phần tử `img` dự phòng cho phần tử `picture`

Sự hỗ trợ cho phần tử `picture` là chưa tốt.

Tồi:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Tốt:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Thêm thuộc tính `alt` cho phần tử `img` nếu cần thiết

Thuộc tính `alt` sẽ giúp cho những ai không thể xử lý hình ảnh hoặc việc tải hình ảnh bị vô hiệu hóa

Tồi:

    <img src="/img/logo.png">

Tốt:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Thuộc tính `alt` để trống nếu có thể

Nếu hình ảnh là bổ sung, có tương tự nội dung tương tự ở gần đó.

Tồi:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Tốt:

    <img alt="" src="/img/icon/help.png"> Help


### Bỏ qua thuộc tính `alt` nếu có thể

Đôi khi bạn không biết văn bản nào là phù hợp với thuộc tính `alt`.

Tồi:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Tốt:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Phần tử `iframe` rỗng

Ở đây có một số hạn chế trong nội dung của nó. Nên để trống thì luôn an toàn.

Tồi:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Tốt:

    <iframe src="/ads/default.html"></iframe>


### Đánh dấu nội dung phần tử `map`

Đây là nội dung được trình bày với trình đọc màn hình.

Tồi:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Tốt:

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


### Cung cấp nội dung dự phòng cho phần tử `audio` hoặc `video`

Nội dung dự phòng là cần thiết cho những phần tử mới được giới thiệu trong HTML.

Tồi:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Tốt:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Dữ liệu dạng bảng


### Viết một ô trên một dòng

Những dòng dài thì khó cho việc quét.

Tồi:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Tốt:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Sử dụng phần tử `th` cho ô tiêu đề

Ở đây không có lý do gì để không làm điều đó.

Tồi:

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

Tốt:

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


## Biểu mẫu


### Bao bọc biểu mẫu điều khiển với phần tử `label`

Phần tử `label` giúp tập trung vào phần tử biểu mẫu.

Tồi:

    <p>Query: <input name="q" type="text"></p>

Tốt:

    <p><label>Query: <input name="q" type="text"></label></p>


### Bỏ qua thuộc tính `for` nếu có thể

Phần tử `label` có thể chứa một số phần tử biểu mẫu.

Tồi:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Tốt:

    <label>Query: <input name="q" type="text"></label>


### Sử dụng thích hợp thuộc tính `type` cho phần tử `input`

Với `type` thích hợp, một trình duyệt cung cấp những tính năng nhỏ cho phần tử `input`.

Tồi:

    <label>Search keyword: <input name="q" type="text"></label>

Tốt:

    <label>Search keyword: <input name="q" type="search"></label>


### Thêm thuộc tính `value` cho `input type="submit`

Nhãn mặc định cho nút gởi là không tiêu chuẩn hóa trên trình duyệt và ngôn ngữ.

Tồi:

    <input type="submit">

Tốt:

    <input type="submit" value="Search">


### Thêm thuộc tính `title` cho phần tử `input` khi có thuộc tính `pattern`

Nếu văn bản đầu vào không khớp cho thuộc tính `parttern`, thì giá trị của
thuộc tính `title` sẽ được hiển thị như một gợi ý.

Tồi:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Tốt:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Don’t use `placeholder` attribute for labeling Đừng sử dụng thuộc tính `placeholder` để gắn nhãn

Phần tử `label` là dành cho một nhãn, thuộc tính `placeholder` là dành cho một gợi ý ngắn.

Tồi:

    <input name="email" placeholder="Email" type="text">

Tốt:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Viết một phần tử option trên một dòng

Dòng dài thì khó cho việc quét.

Tồi:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Tốt:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Thêm thuộc tính `max` cho phần tử `progress`

Với thuộc tính `max`, thuộc tính `value` có thể được viết ở định dạng dễ hiểu.

Tồi:

    <progress value="0.5"> 50%</progress>

Tốt:

    <progress max="100" value="50"> 50%</progress>


### Thêm thuộc tính `min` và `max` cho phần tử `meter`

Với thuộc tính `min` và `max`, thuộc tính `value` có thể được viết ở một
định dạng dễ hiểu.

Tồi:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Tốt:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Đặt phần tử `legend` như một phần tử con đầu tiên của phần tử `fieldset`

Thông số kỹ thuật yêu cầu điều này.

Tồi:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Tốt:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Viết kịch bản


### Bỏ qua thuộc tính `type` cho JavaScript

Trong HTML, giá trị mặc định của thuộc tính `type` của phần tử `script`
là `text/javascript`.

Tồi:

    <script type="text/javascript">
      ...
    </script>

Tốt:

    <script>
      ...
    </script>


### Đừng ghi chú trong nôi dung của phần tử `script`

Cách này dành cho các trình duyệt cũ.

Tồi:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Cũng tồi:

    <script>
    <!--
      ...
    // -->
    </script>

Tốt:

    <script>
      ...
    </script>


### Không sử dụng tập lệnh chèn cho phần tử `script`

Thuộc tính `async` là tốt nhất cho cả tính đơn giản và hiệu suất.

Tồi:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Tốt:

    <script async defer src="https://example.com/widget.js"></script>


## Khác


### Thụt lề một cách nhất quán

Thụt lề là quan trọng để dễ đọc.

Tồi:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Tốt:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Sử dụng đường dẫn tuyệt đối cho các liên kết nội bộ

Một đường dẫn tuyệt đối làm việc tốt hơn trên máy chủ cục bộ của bạn mà
không cần kết nối internet.

Tồi:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Tốt:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Đừng sử dụng URL tương đối cho các tài nguyên bên ngoài

Với giao thức, bạn có thể tải tài nguyên bên ngoài một cách tin cậy và an toàn.

Tồi:

    <script src="//example.com/js/library.js">

Tốt:

    <script src="https://example.com/js/library.js">




## Những người đóng góp

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Những người dịch

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)


## Giấy phép

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
