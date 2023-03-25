Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md) · [فارسی](README.fa.md)

# Лучшие практики HTML

Для написания поддерживаемых и масштабируемых HTML-документов

## Общее

### Начните с DOCTYPE

DOCTYPE требуется для активации стандартного режима.

Плохо:

    <html>
      ...
    </html>

Хорошо:

    <!DOCTYPE html>
    <html>
      ...
    </html>

### Не используйте устаревший или недействительный DOCTYPE

DOCTYPE больше не предназначен для DTD, будьте проще.

Плохо:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Хорошо:

    <!DOCTYPE html>

### Не используйте XML Declaration

Вы уверены, что хотите писать XHTML?

Плохо:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Хорошо:

    <!DOCTYPE html>

### По возможности избегайте использования ссылок на символы

Если вы пишете HTML-документ с использованием UTF-8, почти все символы (включая
Emoji) могут быть записаны напрямую.

Плохо:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Хорошо:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

### Экранирование `&`, `<`, `>`, `"` и `'` с именованными ссылками на символы

Чтобы HTML-документ не содержал ошибок, эти символы следует всегда экранировать.

Плохо:

    <h1>The "&" character</h1>

Хорошо:

    <h1>The &quot;&amp;&quot; character</h1>

### Используйте числовые ссылки на символы управления или невидимые символы

Эти символы легко перепутать с другим символом. Кроме того, спецификация
не гарантирует определение человеко-понятного имени для этих символов.

Плохо:

    <p>This book can read in 1 hour.</p>

Хорошо:

    <p>This book can read in 1&#xA0;hour.</p>

### Поместите пробелы вокруг содержимого комментария

Некоторые символы нельзя использовать сразу после открытия комментария или до закрытия комментария.

Плохо:

    <!--This section is non-normative-->

Хорошо:

    <!-- This section is non-normative -->

### Не пропускайте закрывающий тег

Я думаю, вы не понимаете правила пропуска закрывающего тега.

Плохо:

    <html>
      <body>
        ...

Хорошо:

    <html>
      <body>
        ...
      </body>
    </html>

### Не смешивайте пустой формат элемента

Последовательность - залог удобного чтения.

Плохо:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

### Не ставьте пробелы вокруг тегов и значений атрибутов

Для этого нет никаких причин.

Плохо:

    <h1 class=" title " >HTML Best Practices</h1>

Хорошо:

    <h1 class="title">HTML Best Practices</h1>

### Не смешивайте регистры символов

Он также придает консистенцию.

Плохо:

    <a HREF="#general">General</A>

Хорошо:

    <a href="#general">General</a>

Так же хорошо:

    <A HREF="#general">General</A>

### Не смешивайте кавычки

То же, что и выше.

Плохо:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### Не разделяйте атрибуты двумя или более пробелами

Ваше странное правило форматирования сбивает кого-то с толку.

Плохо:

    <input   name="q"  type="search">

Хорошо:

    <input name="q" type="search">

### Пропустите логическое значение атрибута

Писать легко, не так ли?

Плохо:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Хорошо:

    <audio autoplay src="/audio/theme.mp3">

### Опустите пространства имен

SVG и MathML можно использовать непосредственно в HTML-документе.

Плохо:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Хорошо:

    <svg>
      ...
    </svg>

### Не используйте атрибуты XML

Мы пишем HTML-документ.

Плохо:

    <span lang="ja" xml:lang="ja">...</span>

Хорошо:

    <span lang="ja">...</span>

### Не смешивай `data-*`, Microdata, и RDFa Lite атрибуты с обычными атрибутами

Строка тега может быть очень сложной. Это простое правило поможет прочитать такую строку тегов.

Плохо:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### Предпочитайте неявную семантику ARIA по умолчанию

Какой-то элемент имеет ARIA `role` неявно в HTML-документе, не указывайте его.

Плохо:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Хорошо:

    <nav>
      ...
    </nav>

    <hr>

## Корневой элемент

### Добавьте атрибут `lang`

Атрибут `lang` поможет перевести HTML-документ.

Плохо:

    <html>

Хорошо:

    <html lang="en-US">

### Держите значение атрибута `lang` как можно короче

Японский язык используется только в Японии. Поэтому код страны не нужен.

Плохо:

    <html lang="ja-JP">

Хорошо:

    <html lang="ja">

### По возможности избегайте `data-*`

Соответствующий атрибут может быть правильно обработан браузерами.

Плохо:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Хорошо:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## Метаданные документа

### Добавить элемент `title`

Значение для элемента `title` используется различными приложениями, не только браузером.

Плохо:

    <head>
      <meta charset="UTF-8">
    </head>

Хорошо:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Не используйте элемент `base`

Абсолютный путь или URL безопаснее как для разработчиков, так и для пользователей.

Плохо:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Хорошо:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>

### Укажите MIME-тип второстепенных связанных ресурсов

Это подсказка о том, как приложение работает с этим ресурсом.

Плохо:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Хорошо:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### Не ссылайтесь на `favicon.ico`

Почти все браузеры получают `/favicon.ico` автоматически и асинхронно.

Плохо:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Хорошо:

    <!-- Place `favicon.ico` in the root directory. -->

### Добавьте ссылку на `apple-touch-icon`

Путь запроса по умолчанию для сенсорного значка был неожиданно изменен.

Плохо:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Хорошо:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### Добавьте атрибут `title` к альтернативным таблицам стилей

Удобная для понимания человеком метка помогает людям выбрать подходящую таблицу стилей.

Плохо:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Хорошо:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### Для URL используйте элемент `link`

Значение атрибута `href` может быть преобразовано в URL.

Плохо:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Хорошо:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>

### Укажите кодировку символов документа

UTF-8 пока не используется по умолчанию во всех браузерах.

Плохо:

    <head>
      <title>HTML Best Practices</title>
    </head>

Хорошо:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Не используйте устаревший формат кодирования символов

HTTP-заголовки должны задаваться сервером, будь проще.

Плохо:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Хорошо:

    <meta charset="UTF-8">

### Сначала укажите кодировку символов

Спецификация требует, чтобы кодировка символов была указана в первых 1024 байтах документа.

Плохо:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Хорошо:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>

### Используйте UTF-8

При использовании UTF-8 вы можете свободно использовать Emoji.

Плохо:

    <meta charset="Shift_JIS">

Хорошо:

    <meta charset="UTF-8">

### Для URL используйте элемент `link`

В HTML значение атрибута `type` элемента `style` по умолчанию равно `text/css`.

Плохо:

    <style type="text/css">
      ...
    </style>

Хорошо:

    <style>
      ...
    </style>

### Не комментируйте содержимое элемента `style`

Этот ритуал предназначен для старого браузера.

Плохо:

    <style>
    <!--
      ...
      -->
    </style>

Хорошо:

    <style>
      ...
    </style>

### Не смешивайте теги для CSS и JavaScript

Иногда элемент `script` блокирует построение DOM.

Плохо:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Хорошо:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Так же хорошо:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

## Секции

### Добавить элемент `body`

Иногда элемент `body` дополняется браузером в неожиданном месте.

Плохо:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Хорошо:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Забудьте об элементе `hgroup`

Этот элемент используется нечасто.

Плохо:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Хорошо:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### Используйте элемент `address` только для контактной информации

Элемент `address` предназначен для адреса электронной почты, аккаунта в социальной сети, адреса улицы, номер телефона или что-то, с чем вы можете связаться.

Плохо:

    <address>No rights reserved.</address>

Хорошо:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## Группировка контента

### Не начинайте с новой строки в элементе `pre`

Первая новая строка игнорируется браузерами, но вторая и последующие строки отображаются.

Плохо:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Хорошо:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### Используйте соответствующий элемент в элементе `blockquote`

Содержимое элемента `blockquote` - это цитата, а не куски символов.

Плохо:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Хорошо:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### Не включайте атрибуцию непосредственно в элемент `blockquote`

Содержимое элемента `blockquote` - это цитата.

Плохо:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Хорошо:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Так же хорошо:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>

### Напишите по одному элементу списка в строке

Длиннyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyю
строку тяжело читааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааать.

Плохо:

    <ul>
      <li>General</li><li>TКорневой элемент</li><li>Sections</li>...
    </ul>

Хорошо:

    <ul>
      <li>General</li>
      <li>TКорневой элемент</li>
      <li>Sections</li>
      ...
    </ul>

### Используйте атрибут `type` для элемента `ol`

Иногда на маркер ссылается содержимое в ближней части. Если вы измените маркер с помощью атрибута `type`, вы будете в безопасности для ссылок.

Плохо:

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

Хорошо:

    <body>
      <ol type="I">
        <li>General</li>
        <li>TКорневой элемент</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

### Не используйте `dl` для диалога

Элемент `dl` ограничен ассоциативным списком в HTML.

Плохо:

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

Хорошо:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>

### Поместите элемент `figcaption` в качестве первого или последнего дочернего элемента `figure`

Спецификация не позволяет использовать элемент `figcaption` в середине элемента `figure`.

Плохо:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Хорошо:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>

### Используйте элемент `main`

Элемент `main` может быть использован для обертывания содержимого.

Плохо:

    <div id="content">
      ...
    </div>

Хорошо:

    <main>
      ...
    </main>

### По возможности избегайте элемента `div`

Элемент `div` - это элемент последней надежды.

Плохо:

    <div class="chapter">
      ...
    </div>

Хорошо:

    <section>
      ...
    </section>

## Семантика на уровне текста

### Не разделяйте одинаковые ссылки, которые можно сгруппировать

Элемент `a` может обернуть практически все элементы (кроме интерактивных элементов, таких как элементы управления формой и сам элемент `a`).

Плохо:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Хорошо:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Используйте атрибут `download` для загрузки ресурса

Это заставит браузеры загрузить связанный ресурс в хранилище.

Плохо:

    <a href="/downloads/offline.zip">offline version</a>

Хорошо:

    <a download href="/downloads/offline.zip">offline version</a>

### Используйте атрибуты `rel`, `hreflang` и `type` при необходимости

Эти подсказки помогают приложениям работать со связанным ресурсом.

Плохо:

    <a href="/ja/pdf">Japanese PDF version</a>

Хорошо:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Четкий текст ссылки

Текст ссылки должен представлять собой метку связанного с ней ресурса.

Плохо:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Хорошо:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Не используйте элемент `em` для предупреждения или предостережения

Это серьезно! Поэтому элемент `strong` подходит больше.

Плохо:

    <em>Caution!</em>

Хорошо:

    <strong>Caution!</strong>

### По возможности избегайте элементов `s`, `i`, `b` и `u`

Семантика этих элементов слишком сложна для человека.

Плохо:

    <i class="icon-search"></i>

Хорошо:

    <span class="icon-search" aria-hidden="true"></span>

### Не ставьте кавычки для элемента `q`

Кавычки предоставляются браузером.

Плохо:

    <q>“For writing maintainable and scalable HTML documents”</q>

Хорошо:

    <q>For writing maintainable and scalable HTML documents</q>

Так же хорошо:

    “For writing maintainable and scalable HTML documents”

### Добавить атрибут `title` к элементу `abbr`

Нет другого способа представить его полную форму.

Плохо:

    <abbr>HBP</abbr>

Хорошо:

    <abbr title="HTML Best Practices">HBP</abbr>

### Разметка элемента `ruby` в развернутом виде

Поддержка элемента `ruby` не завершена в современных браузерах.

Плохо:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Хорошо:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Добавьте атрибут `datetime` к элементу `time`, не поддающемуся машинному чтению

Когда атрибут `datetime` не присутствует, формат содержимого элемента `time` ограничивается.

Плохо:

    <time>Dec 19, 2014</time>

Хорошо:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Укажите язык кода с помощью атрибута `class` с префиксом `language-`

Это не формальный способ, но в спецификации он упоминается.

Плохо:

    <code>&lt;!DOCTYPE html&gt;</code>

Хорошо:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Максимально упростите элемент `kbd`

Вложенность элемента `kbd` слишком сложна для человека.

Плохо:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Хорошо:

    <kbd>Ctrl+F5</kbd>

### По возможности избегайте элемента `span`

Элемент `span` - это элемент последней надежды.

Плохо:

    HTML <span class="best">Best</span> Practices

Хорошо:

    HTML <em>Best</em> Practices

### Разрыв после элемента `br`

Перевод строки должен быть необходим там, где используется элемент `br`.

Плохо:

    <p>HTML<br>Best<br>Practices</p>

Хорошо:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Не используйте элемент `br` только в презентационных целях

Элемент `br` не предназначен для декоративного перевода строки, он предназначен для перевода строки в содержимом.

Плохо:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Хорошо:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Edits

### Не накладывайте элементы `ins` и `del` на другие элементы

Элементы не могут быть переполнены другими элементами.

Плохо:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Хорошо:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Встроенный контент

### Предоставьте резервные ресурсы элемента `img` для элемента `picture`

Поддержка элемента `picture` пока не очень хороша.

Плохо:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Хорошо:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

### Добавьте атрибут `alt` к элементу `img`, если это необходимо

Атрибут `alt` помогает тем, кто не может обрабатывать изображения или у кого загрузка изображений отключена.

Плохо:

    <img src="/img/logo.png">

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Пустой атрибут `alt`, если это возможно

Если изображение является дополнительным, значит, где-то рядом находится эквивалентный контент.

Плохо:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Хорошо:

    <img alt="" src="/img/icon/help.png"> Help

### Опустите атрибут `alt`, если это возможно

Иногда вы не знаете, какой текст подходит для атрибута `alt`.

Плохо:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Хорошо:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

### Пустой элемент `iframe`

Существует некоторое ограничение в его содержании. Быть пустым всегда безопасно.

Плохо:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Хорошо:

    <iframe src="/ads/default.html"></iframe>

### Разметка содержимого элемента `map`

Этот контент предназначен для программ читающих с экрана.

Плохо:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">TКорневой элемент</a>
      <area alt="TКорневой элемент" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Хорошо:

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

### Предоставьте резервное содержимое для элемента `audio` или `video`

Вспомогательный контент необходим для вновь введенных элементов в HTML.

Плохо:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Хорошо:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

## Табличные данные

### Напишите по одной ячейке в строке

Длинные строки трудно сканировать.

Плохо:

    <tr>
      <td>General</td><td>TКорневой элемент</td><td>Sections</td>
    </tr>

Хорошо:

    <tr>
      <td>General</td>
      <td>TКорневой элемент</td>
      <td>Sections</td>
    </tr>

### Используйте элемент `th` для ячейки заголовка

Нет причин избегать этого.

Плохо:

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

Хорошо:

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

## Формы

### Обернуть элемент управления формой элементом `label`

Элемент `label` помогает сфокусировать элемент формы.

Плохо:

    <p>Query: <input name="q" type="text"></p>

Хорошо:

    <p><label>Query: <input name="q" type="text"></label></p>

### По возможности опустите атрибут `for`

Элемент `label` может содержать некоторые элементы формы.

Плохо:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Хорошо:

    <label>Query: <input name="q" type="text"></label>

### Используйте соответствующий атрибут `type` для элемента `input`

С помощью соответствующего `type` браузер наделяет элемент `input` крошечными возможностями.

Плохо:

    <label>Search keyword: <input name="q" type="text"></label>

Хорошо:

    <label>Search keyword: <input name="q" type="search"></label>

### Добавьте атрибут `value` к `input type="submit"`

Метка по умолчанию для кнопки submit не стандартизирована для разных браузеров и языков.

Плохо:

    <input type="submit">

Хорошо:

    <input type="submit" value="Search">

### Добавьте атрибут `title` в элемент `input` при наличии атрибута `pattern`

Если вводимый текст не соответствует атрибуту `pattern`, значение атрибута `title` будет отображаться в качестве подсказки.

Плохо:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Хорошо:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Не используйте атрибут `placeholder` для маркировки

Элемент `label` предназначен для метки, атрибут `placeholder` - для короткой подсказки.

Плохо:

    <input name="email" placeholder="Email" type="text">

Хорошо:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Запишите один элемент `option` в строке

Длинные строки трудно сканировать.

Плохо:

    <datalist id="toc">
      <option label="General"><option label="TКорневой элемент"><option label="Sections">
    </datalist>

Хорошо:

    <datalist id="toc">
      <option label="General">
      <option label="TКорневой элемент">
      <option label="Sections">
    </datalist>

### Добавьте атрибут `max` к элементу `progress`

С помощью атрибута `max` атрибут `value` может быть записан в удобном формате.

Плохо:

    <progress value="0.5"> 50%</progress>

Хорошо:

    <progress max="100" value="50"> 50%</progress>

### Добавьте атрибуты `min` и `max` к элементу `meter`

С помощью атрибутов `min` и `max` атрибут `value` может быть записан в удобном формате.

Плохо:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Хорошо:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Поместите элемент `legend` в качестве первого дочернего элемента `fieldset`

Спецификация требует этого.

Плохо:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Хорошо:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Скриптинг

### Опустите атрибут `type` для JavaScript

В HTML значение атрибута `type` элемента `script` по умолчанию равно `text/javascript`.

Плохо:

    <script type="text/javascript">
      ...
    </script>

Хорошо:

    <script>
      ...
    </script>

### Не комментируйте содержимое элемента `script`

Этот ритуал предназначен для старого браузера.

Плохо:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Также плохо:

    <script>
    <!--
      ...
    // -->
    </script>

Хорошо:

    <script>
      ...
    </script>

### Не используйте внедренный скриптом элемент `script`

Атрибут `async` является лучшим как по простоте, так и по производительности.

Плохо:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Хорошо:

    <script async defer src="https://example.com/widget.js"></script>

## Прочее

### Последовательный отступ

Отступы важны для удобоного чтения.

Плохо:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Хорошо:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Используйте абсолютный путь для внутренних ссылок

Абсолютный путь лучше работает на локальном хосте без подключения к Интернету.

Плохо:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Хорошо:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Укажите протокл URL для внешних ресурсов

С помощью протокола вы можете надежно и безопасно загружать внешние ресурсы.

Плохо:

    <script src="//example.com/js/library.js">

Хорошо:

    <script src="https://example.com/js/library.js">

## Авторы

-  [@hail2u\_](https://github.com/hail2u)
-  [@momdo](https://github.com/momdo)

## Переводчики

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

## Лицензия

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
