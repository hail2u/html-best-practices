Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md) · [فارسی](README.fa.md)

# Найкращі практики HTML

Для написання підтримуваних та масштабованих HTML-документів

## Загальне

### Почніть з DOCTYPE

DOCTYPE потрібний для активації стандартного режиму.

Погано:

    <html>
      ...
    </html>

Добре:

    <!DOCTYPE html>
    <html>
      ...
    </html>

### Не використовуйте застарілий або недійсний DOCTYPE

DOCTYPE більше не призначено для DTD, будьте простіше.

Погано:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Добре:

    <!DOCTYPE html>

### Не використовуйте XML Declaration

Ви впевнені, що хочете писати XHTML?

Погано:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Добре:

    <!DOCTYPE html>

### Якщо це можливо уникайте використання посилань на символи

Якщо ви пишете HTML-документ із використанням UTF-8, майже всі символи (включаючи
Emoji) можуть бути записані безпосередньо.

Погано:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Добре:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

### Екранування `&`, `<`, `>`, `"` и `'` з іменованими посиланнями на символи

Щоб HTML-документ не містив помилок, ці символи слід завжди екранувати

Погано:

    <h1>The "&" character</h1>

Добре:

    <h1>The &quot;&amp;&quot; character</h1>

### Використовуйте цифрові посилання на символи керування або невидимі символи

Ці символи легко переплутати з іншим символом. Крім того, специфікація
не гарантує визначення людино-зрозумілого імені цих символів.

Погано:

    <p>This book can read in 1 hour.</p>

Добре:

    <p>This book can read in 1&#xA0;hour.</p>

### Помістіть прогалини навколо вмісту коментаря

Деякі символи не можна використовувати одразу після відкриття коментаря або до закриття коментаря.

Погано:

    <!--This section is non-normative-->

Добре:

    <!-- This section is non-normative -->

### Не пропускайте тег, що закриває

Я думаю, ви не розумієте правила пропуску тега, що закриває.

Погано:

    <html>
      <body>
        ...

Добре:

    <html>
      <body>
        ...
      </body>
    </html>

### Не змішуйте порожній формат елемента

Послідовність – запорука зручного читання.

Погано:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Добре:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

### Не ставте прогалини навколо тегів та значень атрибутів

Для цього немає жодних причин.

Погано:

    <h1 class=" title " >HTML Best Practices</h1>

Добре:

    <h1 class="title">HTML Best Practices</h1>

### Не змішуйте регістри символів

Він також надає консистенції.

Погано:

    <a HREF="#general">General</A>

Добре:

    <a href="#general">General</a>

Також добре:

    <A HREF="#general">General</A>

### Не змішуйте лапки

Те саме, що й вище.

Погано:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Добре:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### Не поділяйте атрибути двома або більше прогалинами

Ваше дивне правило форматування збиває когось з пантелику.

Погано:

    <input   name="q"  type="search">

Добре:

    <input name="q" type="search">

### Пропустіть логічне значення атрибуту

Писати легко, чи не так?

Погано:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Добре:

    <audio autoplay src="/audio/theme.mp3">

### Опустіть простір імен

SVG та MathML можна використовувати безпосередньо у HTML-документі.

Погано:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Добре:

    <svg>
      ...
    </svg>

### Не використовуйте атрибути XML

Ми пишемо HTML-документ.

Погано:

    <span lang="ja" xml:lang="ja">...</span>

Добре:

    <span lang="ja">...</span>

### Не змішуй `data-*`, Microdata, та RDFa Lite атрибути зі звичайними атрибутами

Рядок тега може бути дуже складним. Це просте правило допоможе прочитати такий рядок тегів.

Погано:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Добре:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### Вважайте за краще неявну семантику ARIA за умовчанням

Якийсь елемент має ARIA `role` неявно у HTML-документі, не вказуйте його.

Погано:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Добре:

    <nav>
      ...
    </nav>

    <hr>

## Кореневий елемент

### Додайте атрибут `lang`

Атрибут `lang` допоможе перекласти HTML-документ.

Погано:

    <html>

Добре:

    <html lang="en-US">

### Тримайте значення атрибуту `lang` якнайкоротше

Японська мова використовується лише у Японії. Тому код країни не потрібний.

Погано:

    <html lang="ja-JP">

Добре:

    <html lang="ja">

### За можливості уникайте 'data-\*'

Відповідний атрибут можна правильно обробити браузерами.

Погано:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Добре:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## Метадані документа

### Додайте елемент `title`

Значення елемента `title` використовується різними додатками, не тільки браузером.

Погано:

    <head>
      <meta charset="UTF-8">
    </head>

Добре:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Не використовуйте елемент `base`

Абсолютний шлях або URL безпечніший як для розробників, так і для користувачів.

Погано:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Добре:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>

### Вкажіть MIME-тип другорядних пов'язаних ресурсів

Це підказка про те, як програма працює з цим ресурсом.

Погано:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Добре:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### Не посилайтесь на `favicon.ico`

Майже всі браузери одержують `/favicon.ico` автоматично та асинхронно.

Погано:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Добре:

    <!-- Place `favicon.ico` in the root directory. -->

### Додайте посилання на `apple-touch-icon`

Шлях запиту за замовчуванням для сенсорного значку було несподівано змінено.

Погано:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Добре:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### Додайте атрибут `title` до альтернативних таблиць стилів

Зручна для розуміння людиною позначка допомагає людям вибрати відповідну таблицю стилів.

Погано:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Добре:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### Для URL використовуйте елемент `link`

Значення атрибуту `href` може бути перетворено на URL.

Погано:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Добре:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>

### Вкажіть кодування символів документа

UTF-8 поки не використовується за промовчанням у всіх браузерах.

Погано:

    <head>
      <title>HTML Best Practices</title>
    </head>

Добре:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Не використовуйте застарілий формат кодування символів

HTTP-заголовки повинні задаватися сервером, будь простіше.

Погано:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Добре:

    <meta charset="UTF-8">

### Спочатку вкажіть кодування символів

Специфікація вимагає, щоб кодування символів було вказано у перших 1024 байтах документа.

Погано:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Добре:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>

### Використовуйте UTF-8

При використанні UTF-8 можна вільно використовувати Emoji.

Погано:

    <meta charset="Shift_JIS">

Добре:

    <meta charset="UTF-8">

### Для URL використовуйте елемент `link`

У HTML значення атрибуту 'type' елемента 'style' за замовчуванням дорівнює 'text/css'.

Погано:

    <style type="text/css">
      ...
    </style>

Добре:

    <style>
      ...
    </style>

### Не коментуйте вміст елемента `style`

Цей обряд призначений для старого браузера.

Погано:

    <style>
    <!--
      ...
      -->
    </style>

Добре:

    <style>
      ...
    </style>

### Не змішуйте теги для CSS та JavaScript

Іноді елемент `script` блокує побудову DOM.

Погано:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Добре:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Також добре:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

## Секції

### Додайте елемент `body`

Іноді елемент 'body' доповнюється браузером у несподіваному місці.

Погано:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Добре:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Забудьте про елемент `hgroup`

Цей елемент використовується рідко.

Погано:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Добре:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### Використовуйте елемент `address` тільки для контактної інформації

Елемент `address` призначений для адреси електронної пошти, облікового запису в соціальній мережі, адреси вулиці, номера телефону або щось, з чим ви можете зв'язатися.

Погано:

    <address>No rights reserved.</address>

Добре:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## Угруповання контенту

### Не починайте з нового рядка в елементі `pre`

Перший новий рядок ігнорується браузерами, але другий та наступні рядки відображаються.

Погано:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Добре:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### Використовуйте відповідний елемент елемента `blockquote`

Вміст елемента blocquote - це цитата, а не шматки символів.

Погано:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Добре:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### Не включайте атрибуцію безпосередньо в елемент blockquote

Вміст елемента `blockquote` - це цитата.

Погано:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Добре:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Також добре:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>

### Напишіть по одному елементу списку у рядку

Довгийййййййййййййййййййййййййййййййййййййййййййййййййййййййййййййййййййййй
рядок важко читаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааати.

Погано:

    <ul>
      <li>General</li><li>TКорневой элемент</li><li>Sections</li>...
    </ul>

Добре:

    <ul>
      <li>General</li>
      <li>TКорневой элемент</li>
      <li>Sections</li>
      ...
    </ul>

### Використовуйте атрибут `type` для елемента `ol`

Іноді на маркер посилається вміст у ближній частині. Якщо ви зміните маркер за допомогою атрибуту `type`, ви будете у безпеці для посилань.

Погано:

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
        <li>TКорневой элемент</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

Добре:

    <body>
      <ol type="I">
        <li>General</li>
        <li>TКорневой элемент</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

### Не використовуйте `dl` для діалогу

Елемент `dl` обмежений асоціативним списком HTML.

Погано:

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

Добре:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>

### Помістіть елемент `figcaption` як перший або останній дочірній елемент `figure`

Специфікація не дозволяє використовувати елемент `figcaption` у середині елемента `figure`.

Погано:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Добре:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>

### Використовуйте елемент `main`

Елемент `main` може бути використаний для обгортання вмісту.

Погано:

    <div id="content">
      ...
    </div>

Добре:

    <main>
      ...
    </main>

### За можливості уникайте елемента `div`

Елемент `div` – це елемент останньої надії.

Погано:

    <div class="chapter">
      ...
    </div>

Добре:

    <section>
      ...
    </section>

## Семантика на рівні тексту

### Не поділяйте однакові посилання, які можна згрупувати

Елемент `a` може обернути практично всі елементи (крім інтерактивних елементів, таких як елементи управління формою та сам елемент `a`).

Погано:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Добре:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Використовуйте атрибут `download` для завантаження ресурсу

Це змусить браузери завантажити пов'язаний ресурс у сховище.

Погано:

    <a href="/downloads/offline.zip">offline version</a>

Добре:

    <a download href="/downloads/offline.zip">offline version</a>

### Використовуйте атрибути `rel`, `hreflang` та `type` за необхідності

Ці підказки допомагають програмам працювати зі зв'язаним ресурсом.

Погано:

    <a href="/ja/pdf">Japanese PDF version</a>

Добре:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Чіткий текст посилання

Текст посилання повинен бути міткою пов'язаного з нею ресурсу.

Погано:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Добре:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Не використовуйте елемент `em` для попередження чи застереження

Це серйозно! Тому елемент `strong` підходить більше.

Погано:

    <em>Caution!</em>

Добре:

    <strong>Caution!</strong>

### За можливості уникайте елементів `s`, `i`, `b` та `u`

Семантика цих елементів надто складна для людини.

Погано:

    <i class="icon-search"></i>

Добре:

    <span class="icon-search" aria-hidden="true"></span>

### Не ставте лапки для елемента `q`

Лапки надаються браузером.

Погано:

    <q>“For writing maintainable and scalable HTML documents”</q>

Добре:

    <q>For writing maintainable and scalable HTML documents</q>

Також добре:

    “For writing maintainable and scalable HTML documents”

### Додати атрибут `title` до елементу `abbr`

Немає іншого способу уявити його повну форму.

Погано:

    <abbr>HBP</abbr>

Добре:

    <abbr title="HTML Best Practices">HBP</abbr>

### Розмітка елемента `ruby` у розгорнутому вигляді

Підтримка елемента `ruby` не завершена у сучасних браузерах.

Погано:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Добре:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Додайте атрибут `datetime` до елементу `time`, що не піддається машинному читанню

Коли атрибут 'datetime' відсутній, формат вмісту елемента 'time' обмежується.

Погано:

    <time>Dec 19, 2014</time>

Добре:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Вкажіть мову коду за допомогою атрибуту `class` з префіксом `language-`

Це не формальний спосіб, але у специфікації він згадується.

Погано:

    <code>&lt;!DOCTYPE html&gt;</code>

Добре:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Максимально спростіть елемент `kbd`

Вкладеність елемента `kbd` надто складна для людини.

Погано:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Добре:

    <kbd>Ctrl+F5</kbd>

### За можливості уникайте елемента `span`

Елемент `span` – це елемент останньої надії.

Погано:

    HTML <span class="best">Best</span> Practices

Добре:

    HTML <em>Best</em> Practices

### Розрив після елемента `br`

Переведення рядка має бути необхідним там, де використовується елемент `br`.

Погано:

    <p>HTML<br>Best<br>Practices</p>

Добре:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Не використовуйте елемент `br` тільки для презентаційних цілей

Елемент `br` не призначений для декоративного перекладу рядка, він призначений для перекладу рядка у вмісті.

Погано:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Добре:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Правки

### Не накладайте елементи `ins` та `del` на інші елементи

Елементи неможливо переповнити іншими елементами.

Погано:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Добре:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Вбудований контент

### Надайте резервні ресурси елементу `img` для елементу `picture`

Підтримка елемента 'picture' поки що не дуже хороша.

Погано:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Добре:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

### Додайте атрибут `alt` до елементу `img`, якщо це необхідно

Атрибут `alt` допомагає тим, хто не може обробляти зображення або у кого завантаження зображень вимкнено.

Погано:

    <img src="/img/logo.png">

Добре:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Порожній атрибут `alt`, якщо це можливо

Якщо зображення є додатковим, то десь поруч знаходиться еквівалентний контент.

Погано:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Добре:

    <img alt="" src="/img/icon/help.png"> Help

### Опустіть атрибут `alt`, якщо це можливо

Іноді ви не знаєте який текст підходить для атрибуту `alt`.

Погано:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Добре:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

### Порожній елемент `iframe`

Існує деяке обмеження у його змісті. Бути пустим завжди безпечно.

Погано:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Добре:

    <iframe src="/ads/default.html"></iframe>

### Розмітка вмісту елементу `map`

Цей контент призначений для програм, що читають з екрана.

Погано:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">TКорневой элемент</a>
      <area alt="TКорневой элемент" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Добре:

    <map name="toc">
      <p>
        <a href="#general">General</a>
        <area alt="General" coords="0, 0, 40, 40" href="#General"> |
        <a href="#the_root_element">TКорневой элемент</a>
        <area alt="TКорневой элемент" coords="50, 0, 90, 40" href="#the_root_element"> |
        <a href="#sections">Sections</a>
        <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
      </p>
    </map>

### Надайте резервний вміст для елемента `audio` або `video`

Допоміжний контент необхідний для нововведених елементів у HTML.

Погано:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Добре:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

## Табличні дані

### Напишіть по одному осередку в рядку

Довгі рядки важко сканувати.

Погано:

    <tr>
      <td>General</td><td>TКорневой элемент</td><td>Sections</td>
    </tr>

Добре:

    <tr>
      <td>General</td>
      <td>TКорневой элемент</td>
      <td>Sections</td>
    </tr>

### Використовуйте елемент `th` для осередка заголовка

Немає причин уникати цього.

Погано:

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

Добре:

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

## Форми

### Обернути елемент керування формою елементом `label`

Елемент `label` допомагає сфокусувати елемент форми.

Погано:

    <p>Query: <input name="q" type="text"></p>

Добре:

    <p><label>Query: <input name="q" type="text"></label></p>

### За можливості опустіть атрибут `for`

Елемент `label` може містити деякі елементи форми.

Погано:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Добре:

    <label>Query: <input name="q" type="text"></label>

### Використовуйте відповідний атрибут `type` для елемента `input`

За допомогою відповідного `type` браузер наділяє елемент `input` крихітними можливостями.

Погано:

    <label>Search keyword: <input name="q" type="text"></label>

Добре:

    <label>Search keyword: <input name="q" type="search"></label>

### Додайте атрибут `value` до `input type="submit"`

Мітка за замовчуванням для кнопки `submit` не стандартизована для різних браузерів та мов.

Погано:

    <input type="submit">

Добре:

    <input type="submit" value="Search">

### Додайте атрибут `title` в елемент `input` за наявності атрибуту `pattern`

Якщо текст не відповідає атрибуту `pattern`, значення атрибуту `title` буде відображатися як підказка.

Погано:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Добре:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Не використовуйте атрибут `placeholder` для маркування

Елемент `label` призначений для мітки, атрибут `placeholder` - для короткої підказки.

Погано:

    <input name="email" placeholder="Email" type="text">

Добре:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Запишіть один елемент `option` у рядку

Довгі рядки важко сканувати.

Погано:

    <datalist id="toc">
      <option label="General"><option label="TКорневой элемент"><option label="Sections">
    </datalist>

Добре:

    <datalist id="toc">
      <option label="General">
      <option label="TКорневой элемент">
      <option label="Sections">
    </datalist>

### Додайте атрибут `max` до елементу `progress`

За допомогою атрибуту `max` атрибут `value` може бути записаний у зручному форматі.

Погано:

    <progress value="0.5"> 50%</progress>

Добре:

    <progress max="100" value="50"> 50%</progress>

### Додайте атрибути `min` та `max` до елемента `meter`

За допомогою атрибутів `min` та `max` атрибут `value` може бути записаний у зручному форматі.

Погано:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Добре:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Помістіть елемент `legend` як перший дочірній елемент `fieldset`

Специфікація вимагає цього.

Погано:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Добре:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Скриптінг

### Опустіть атрибут `type` для JavaScript

У HTML значення атрибуту `type` елементу `script` за умовчанням дорівнює `text/javascript`.

Погано:

    <script type="text/javascript">
      ...
    </script>

Добре:

    <script>
      ...
    </script>

### Не коментуйте вміст елементу `script`

Цей обряд призначений для старого браузера.

Погано:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Також погано:

    <script>
    <!--
      ...
    // -->
    </script>

Добре:

    <script>
      ...
    </script>

### Не використовуйте впроваджений скриптом елемент `script`

Атрибут `async` є найкращим як за простотою, так і за продуктивністю.

Погано:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Добре:

    <script async defer src="https://example.com/widget.js"></script>

## Інше

### Послідовний відступ

Відступи важливі для зручного читання.

Погано:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Добре:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Використовуйте абсолютний шлях для внутрішніх посилань

Абсолютний шлях краще працює на локальному хості без підключення до Інтернету.

Погано:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Добре:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Вкажіть проток URL для зовнішніх ресурсів

С помощью протокола вы можете надежно и безопасно загружать внешние ресурсы.

Погано:

    <script src="//example.com/js/library.js">

Добре:

    <script src="https://example.com/js/library.js">

## Автори

-  [@hail2u\_](https://github.com/hail2u)
-  [@momdo](https://github.com/momdo)

## Перекладачі

-  [@ShayanTheNerd](https://github.com/ShayanTheNerd)
-  [@costinlotreanu](https://github.com/costinlotreanu)
-  [@edgar-avila](https://github.com/edgar-avila)
-  [@kobyborali](https://github.com/kobyborali)
-  [@m1nhnv](https://github.com/m1nhnv)
-  [@mrcaidev](https://github.com/mrcaidev)
-  [@naufalk25](https://github.com/naufalk25)
-  [@oebelus](https://github.com/oebelus)
-  [@sahilmaniyar](https://github.com/sahilmaniyar)
-  [@sliderkh](https://github.com/sliderkh)
-  [@stenbaek](https://github.com/stenbaek)
-  [@techhtml](https://github.com/techhtml)
-  [@umutphp](https://github.com/umutphp)
-  [@victorchao996](https://github.com/victorchao996)
-  [@wesleynepo](https://github.com/wesleynepo)
-  [@zulkar29](https://github.com/zulkar29)

## Ліцензія

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
