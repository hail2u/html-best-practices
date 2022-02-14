Translations: [English (en)](README.md) [日本語 (ja)](README.ja.md) [한국어 (ko)](README.ko.md) [Türkçe (tr)](README.tr.md) [Português brasileiro (pt-BR)](README.pt-BR.md) [简体中文 (zh-CN)](README.zh-CN.md) [Русский (ru)](README.ru.md)

# Лучшие практики HTML

Для написания поддерживаемых и масштабируемых HTML-документов

- [Общее](#general)
  - [Начните с DOCTYPE](#start-with-doctype)
  - [Не используйте устаревший или недействительный DOCTYPE](#dont-use-legacy-or-obsolete-doctype)
  - [Не используйте XML Declaration](#dont-use-xml-declaration)
  - [По возможности избегайте использования ссылок на символы](#dont-use-character-references-as-much-as-possible)
  - [Экранирование `&`, `<`, `>`, `"` и `'` с именованными ссылками на символы](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
  - [Используйте числовые ссылки на символы управления или невидимые символы](#use-numeric-character-references-for-control-or-invisible-characters)
  - [Поместите пробелы вокруг содержимого комментария](#put-white-spaces-around-comment-contents)
  - [Не пропускайте закрывающий тег](#dont-omit-closing-tag)
  - [Не смешивайте пустой формат элемента](#dont-mix-empty-element-format)
  - [Не ставьте пробелы вокруг тегов и значений атрибутов](#dont-put-white-spaces-around-tags-and-attribute-values)
  - [Не смешивайте регистры символов](#dont-mix-character-cases)
  - [Не смешивайте кавычки](#dont-mix-quotation-marks)
  - [Не разделяйте атрибуты двумя или более пробелами](#dont-separate-attributes-with-two-or-more-white-spaces)
  - [Опустить логическое значение атрибута](#omit-boolean-attribute-value)
  - [Опустите пространства имен](#omit-namespaces)
  - [Не используйте атрибуты XML](#dont-use-xml-attributes)
  - [Не смешивай `data-*`, Microdata, и RDFa Lite атрибуты с обычными атрибутами](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
  - [Предпочитайте неявную семантику ARIA по умолчанию](#prefer-default-implicit-aria-semantics)
- [TКорневой элемент](#the-root-element)
  - [Добавьте атрибут `lang`](#add-lang-attribute)
  - [Держите значение атрибута `lang` как можно короче](#keep-lang-attribute-value-as-short-as-possible)
  - [По возможности избегайте `data-*`](#avoid-data-as-much-as-possible)
- [Метаданные документа](#document-metadata)
  - [Добавить элемент `title`](#add-title-element)
  - [Не используйте элемент `base`](#dont-use-base-element)
  - [Укажите MIME-тип второстепенных связанных ресурсов](#specify-mime-type-of-minor-linked-resources)
  - [Не ссылайтесь на `favicon.ico`](#dont-link-to-faviconico)
  - [Добавьте ссылку на `apple-touch-icon`](#add-apple-touch-icon-link)
  - [Добавьте атрибут `title` к альтернативным таблицам стилей](#add-title-attribute-to-alternate-stylesheets)
  - [Для URL используйте элемент `link`](#for-url-use-link-element)
  - [Укажите кодировку символов документа](#specify-document-character-encoding)
  - [Не используйте устаревший формат кодирования символов](#dont-use-legacy-character-encoding-format)
  - [Сначала укажите кодировку символов](#specify-character-encoding-at-first)
  - [Используйте UTF-8](#use-utf-8)
  - [Для URL используйте элемент `link`](#omit-type-attribute-for-css)
  - [Не комментируйте содержимое элемента `style`](#dont-comment-out-contents-of-style-element)
  - [Не смешивайте теги для CSS и JavaScript](#dont-mix-tag-for-css-and-javascript)
- [Секции](#sections)
  - [Добавить элемент `body`](#add-body-element)
  - [Забудьте об элементе `hgroup`](#forget-about-hgroup-element)
  - [Используйте элемент `address` только для контактной информации](#use-address-element-only-for-contact-information)
- [Группировка контента](#grouping-content)
  - [Не начинайте с новой строки в элементе `pre`](#dont-start-with-newline-in-pre-element)
  - [Используйте соответствующий элемент в элементе `blockquote`](#use-appropriate-element-in-blockquote-element)
  - [Не включайте атрибуцию непосредственно в элемент `blockquote`](#dont-include-attribution-directly-in-blockquote-element)
  - [Напишите по одному элементу списка в строке](#write-one-list-item-per-line)
  - [Используйте атрибут `type` для элемента `ol`](#use-type-attribute-for-ol-element)
  - [Не используйте `dl` для диалога](#dont-use-dl-for-dialogue)
  - [Поместите элемент `figcaption` в качестве первого или последнего дочернего элемента `figure`](#place-figcaption-element-as-first-or-last-child-of-figure-element)
  - [Используйте элемент `main`](#use-main-element)
  - [По возможности избегайте элемента `div`](#avoid-div-element-as-much-as-possible)
- [Семантика на уровне текста](#text-level-semantics)
  - [Не разделяйте одинаковые ссылки, которые можно сгруппировать](#dont-split-same-link-that-can-be-grouped)
  - [Используйте атрибут `download` для загрузки ресурса](#use-download-attribute-for-downloading-a-resource)
  - [Используйте атрибуты `rel`, `hreflang` и `type` при необходимости](#use-rel-hreflang-and-type-attribute-if-needed)
  - [Четкий текст ссылки](#clear-link-text)
  - [Не используйте элемент `em` для предупреждения или предостережения](#dont-use-em-element-for-warning-or-caution)
  - [По возможности избегайте элементов `s`, `i`, `b` и `u`](#avoid-s-i-b-and-u-element-as-much-as-possible)
  - [Не ставьте кавычки для элемента `q`](#dont-put-quotes-to-q-element)
  - [Добавить атрибут `title` к элементу `abbr`](#add-title-attribute-to-abbr-element)
  - [Разметка элемента `ruby` в развернутом виде](#markup-ruby-element-verbosely)
  - [Добавьте атрибут `datetime` к элементу `time`, не поддающемуся машинному чтению](#add-datetime-attribute-to-non-machine-readable-time-element)
  - [Укажите язык кода с помощью атрибута `class` с префиксом `language-`](#specify-code-language-with-class-attribute-prefixed-with-language)
  - [Максимально упростите элемент `kbd`](#keep-kbd-element-as-simple-as-possible)
  - [По возможности избегайте элемента `span`](#avoid-span-element-as-much-as-possible)
  - [Разрыв после элемента `br`](#break-after-br-element)
  - [Не используйте элемент `br` только в презентационных целях](#dont-use-br-element-only-for-presentational-purpose)
- [Edits](#edits)
  - [Не накладывайте элементы `ins` и `del` на другие элементы](#dont-stride-ins-and-del-element-over-other-elements)
- [Встроенный контент](#embedded-content)
  - [Предоставьте резервнрое содержимое элемента `img` для элемента `picture`](#provide-fallback-img-element-for-picture-element)
  - [Добавьте атрибут `alt` к элементу `img`, если это необходимо](#add-alt-attrbute-to-img-element-if-needed)
  - [Пустой атрибут `alt`, если это возможно](#empty-alt-attribute-if-possible)
  - [Опустите атрибут `alt`, если это возможно](#omit-alt-attribute-if-possible)
  - [Пустой элемент `iframe`](#empty-iframe-element)
  - [Разметка содержимого элемента `map`](#markup-map-element-content)
  - [Предоставьте резервное содержимое для элемента `audio` или `video`](#provide-fallback-content-for-audio-or-video-element)
- [Табличные данные](#tabular-data)
  - [Напишите по одной ячейке в строке](#write-one-cell-per-line)
  - [Используйте элемент `th` для ячейки заголовка](#use-th-element-for-header-cell)
- [Формы](#forms)
  - [Обернуть элемент управления формой элементом `label`](#wrap-form-control-with-label-element)
  - [По возможности опустите атрибут `for`](#omit-for-attribute-if-possible)
  - [Используйте соответствующий атрибут `type` для элемента `input`](#use-appropriate-type-attribute-for-input-element)
  - [Добавьте атрибут `value` к `input type="submit"`](#add-value-attribute-to-input-typesubmit)
  - [Добавьте атрибут `title` в элемент `input` при наличии атрибута `pattern`](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
  - [Не используйте атрибут `placeholder` для маркировки](#dont-use-placeholder-attribute-for-labeling)
  - [Запишите один элемент `option` в строке](#write-one-option-element-per-line)
  - [Добавьте атрибут `max` к элементу `progress`](#add-max-attribute-to-progress-element)
  - [Добавьте атрибуты `min` и `max` к элементу `meter`](#add-min-and-max-attribute-to-meter-element)
  - [Поместите элемент `legend` в качестве первого дочернего элемента `fieldset`](#place-legend-element-as-the-first-child-of-fieldset-element)
- [Скриптинг](#scripting)
  - [Опустите атрибут `type` для JavaScript](#omit-type-attribute-for-javascript)
  - [Не комментируйте содержимое элемента `script`](#dont-comment-out-contents-of-script-element)
  - [Не используйте внедренный скриптом элемент `script`](#dont-use-script-injected-script-element)
- [Прочее](#other)
  - [Последовательный отступ](#indent-consistently)
  - [Используйте абсолютный путь для внутренних ссылок](#use-absolute-path-for-internal-links)
  - [Укажите протокл URL для внешних ресурсов](#dont-use-protocol-relative-url-for-external-resources)
- [Авторы](#contributors)
- [Переводчики](#translators)
- [Лицензия](#license)

## Общее<span id="general"></span>

### Начните с DOCTYPE<span id="start-with-doctype"></span>

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

### Не используйте устаревший или недействительный DOCTYPE<span id="dont-use-legacy-or-obsolete-doctype"></span>

DOCTYPE больше не предназначен для DTD, будьте проще.

Плохо:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Хорошо:

    <!DOCTYPE html>

### Не используйте XML Declaration<span id="dont-use-xml-declaration"></span>

Вы уверены, что хотите писать XHTML?

Плохо:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Хорошо:

    <!DOCTYPE html>

### По возможности избегайте использования ссылок на символы<span id="dont-use-character-references-as-much-as-possible"></span>

Если вы пишете HTML-документ с использованием UTF-8, почти все символы (включая
Emoji) могут быть записаны напрямую.

Плохо:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Хорошо:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

### Экранирование `&`, `<`, `>`, `"` и `'` с именованными ссылками на символы<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

Чтобы HTML-документ не содержал ошибок, эти символы следует всегда экранировать.

Плохо:

    <h1>The "&" character</h1>

Хорошо:

    <h1>The &quot;&amp;&quot; character</h1>

### Используйте числовые ссылки на символы управления или невидимые символы<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

Эти символы легко перепутать с другим символом. Кроме того, спецификация
не гарантирует определение человеко-понятного имени для этих символов.

Плохо:

    <p>This book can read in 1 hour.</p>

Хорошо:

    <p>This book can read in 1&#xA0;hour.</p>

### Поместите пробелы вокруг содержимого комментария<span id="put-white-spaces-around-comment-contents"></span>

Некоторые символы нельзя использовать сразу после открытия комментария или до закрытия комментария.

Плохо:

    <!--This section is non-normative-->

Хорошо:

    <!-- This section is non-normative -->

### Не пропускайте закрывающий тег<span id="dont-omit-closing-tag"></span>

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

### Не смешивайте пустой формат элемента<span id="dont-mix-empty-element-format"></span>

Последовательность - залог удобоного чтения.

Плохо:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

### Не ставьте пробелы вокруг тегов и значений атрибутов<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

Для этого нет никаких причин.

Плохо:

    <h1 class=" title " >HTML Best Practices</h1>

Хорошо:

    <h1 class="title">HTML Best Practices</h1>

### Не смешивайте регистры символов<span id="dont-mix-character-cases"></span>

Он также придает консистенцию.

Плохо:

    <a HREF="#general">General</A>

Хорошо:

    <a href="#general">General</a>

Так же хорошо:

    <A HREF="#general">General</A>

### Не смешивайте кавычки<span id="dont-mix-quotation-marks"></span>

То же, что и выше.

Плохо:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### Не разделяйте атрибуты двумя или более пробелами<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

Ваше странное правило форматирования сбивает кого-то с толку.

Плохо:

    <input   name="q"  type="search">

Хорошо:

    <input name="q" type="search">

### Пропустите логическое значение атрибута<span id="omit-boolean-attribute-value"></span>

Писать легко, не так ли?

Плохо:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Хорошо:

    <audio autoplay src="/audio/theme.mp3">

### Опустите пространства имен<span id="omit-namespaces"></span>

SVG и MathML можно использовать непосредственно в HTML-документе.

Плохо:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Хорошо:

    <svg>
      ...
    </svg>

### Не используйте атрибуты XML<span id="dont-use-xml-attributes"></span>

Мы пишем HTML-документ.

Плохо:

    <span lang="ja" xml:lang="ja">...</span>

Хорошо:

    <span lang="ja">...</span>

### Не смешивай `data-*`, Microdata, и RDFa Lite атрибуты с обычными атрибутами<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

Строка тега может быть очень сложной. Это простое правило поможет прочитать такую строку тегов.

Плохо:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### Предпочитайте неявную семантику ARIA по умолчанию<span id="prefer-default-implicit-aria-semantics"></span>

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

## Корневой элемент<span id="the-root-element"></span>

### Добавьте атрибут `lang`<span id="add-lang-attribute"></span>

Атрибут `lang` поможет перевести HTML-документ.

Плохо:

    <html>

Хорошо:

    <html lang="en-US">

### Держите значение атрибута `lang` как можно короче<span id="keep-lang-attribute-value-as-short-as-possible"></span>

Японский язык используется только в Японии. Поэтому код страны не нужен.

Плохо:

    <html lang="ja-JP">

Хорошо:

    <html lang="ja">

### По возможности избегайте `data-*`<span id="avoid-data-as-much-as-possible"></span>

Соответствующий атрибут может быть правильно обработан браузерами.

Плохо:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Хорошо:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## Метаданные документа<span id="document-metadata"></span>

### Добавить элемент `title`<span id="add-title-element"></span>

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

### Не используйте элемент `base`<span id="dont-use-base-element"></span>

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

### Укажите MIME-тип второстепенных связанных ресурсов<span id="specify-mime-type-of-minor-linked-resources"></span>

Это подсказка о том, как приложение работает с этим ресурсом.

Плохо:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Хорошо:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### Не ссылайтесь на `favicon.ico`<span id="dont-link-to-faviconico"></span>

Почти все браузеры получают `/favicon.ico` автоматически и асинхронно.

Плохо:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Хорошо:

    <!-- Place `favicon.ico` in the root directory. -->

### Добавьте ссылку на `apple-touch-icon`<span id="add-apple-touch-icon-link"></span>

Путь запроса по умолчанию для сенсорного значка был неожиданно изменен.

Плохо:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Хорошо:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### Добавьте атрибут `title` к альтернативным таблицам стилей<span id="add-title-attribute-to-alternate-stylesheets"></span>

Удобная для понимания человеком метка помогает людям выбрать подходящую таблицу стилей.

Плохо:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Хорошо:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### Для URL используйте элемент `link`<span id="for-url-use-link-element"></span>

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

### Укажите кодировку символов документа<span id="specify-document-character-encoding"></span>

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

### Не используйте устаревший формат кодирования символов<span id="dont-use-legacy-character-encoding-format"></span>

HTTP-заголовки должны задаваться сервером, будь проще.

Плохо:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Хорошо:

    <meta charset="UTF-8">

### Сначала укажите кодировку символов<span id="specify-character-encoding-at-first"></span>

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

### Используйте UTF-8<span id="use-utf-8"></span>

При использовании UTF-8 вы можете свободно использовать Emoji.

Плохо:

    <meta charset="Shift_JIS">

Хорошо:

    <meta charset="UTF-8">

### Для URL используйте элемент `link`<span id="omit-type-attribute-for-css"></span>

В HTML значение атрибута `type` элемента `style` по умолчанию равно `text/css`.

Плохо:

    <style type="text/css">
      ...
    </style>

Хорошо:

    <style>
      ...
    </style>

### Не комментируйте содержимое элемента `style`<span id="dont-comment-out-contents-of-style-element"></span>

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

### Не смешивайте теги для CSS и JavaScript<span id="dont-mix-tag-for-css-and-javascript"></span>

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

## Секции<span id="sections"></span>

### Добавить элемент `body`<span id="add-body-element"></span>

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

### Забудьте об элементе `hgroup`<span id="forget-about-hgroup-element"></span>

Этот элемент используется нечасто.

Плохо:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Хорошо:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### Используйте элемент `address` только для контактной информации<span id="use-address-element-only-for-contact-information"></span>

Элемент `address` предназначен для адреса электронной почты, аккаунта в социальной сети, адреса улицы, номер телефона или что-то, с чем вы можете связаться.

Плохо:

    <address>No rights reserved.</address>

Хорошо:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## Группировка контента<span id="grouping-content"></span>

### Не начинайте с новой строки в элементе `pre`<span id="dont-start-with-newline-in-pre-element"></span>

Первая новая строка игнорируется браузерами, но вторая и последующие строки отображаются.

Плохо:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Хорошо:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### Используйте соответствующий элемент в элементе `blockquote`<span id="use-appropriate-element-in-blockquote-element"></span>

Содержимое элемента `blockquote` - это цитата, а не куски символов.

Плохо:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Хорошо:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### Не включайте атрибуцию непосредственно в элемент `blockquote`<span id="dont-include-attribution-directly-in-blockquote-element"></span>

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

### Напишите по одному элементу списка в строке<span id="write-one-list-item-per-line"></span>

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

### Используйте атрибут `type` для элемента `ol`<span id="use-type-attribute-for-ol-element"></span>

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

### Не используйте `dl` для диалога<span id="dont-use-dl-for-dialogue"></span>

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

### Поместите элемент `figcaption` в качестве первого или последнего дочернего элемента `figure`<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

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

### Используйте элемент `main`<span id="use-main-element"></span>

Элемент `main` может быть использован для обертывания содержимого.

Плохо:

    <div id="content">
      ...
    </div>

Хорошо:

    <main>
      ...
    </main>

### По возможности избегайте элемента `div`<span id="avoid-div-element-as-much-as-possible"></span>

Элемент `div` - это элемент последней надежды.

Плохо:

    <div class="chapter">
      ...
    </div>

Хорошо:

    <section>
      ...
    </section>

## Семантика на уровне текста<span id="text-level-semantics"></span>

### Не разделяйте одинаковые ссылки, которые можно сгруппировать<span id="dont-split-same-link-that-can-be-grouped"></span>

Элемент `a` может обернуть практически все элементы (кроме интерактивных элементов, таких как элементы управления формой и сам элемент `a`).

Плохо:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Хорошо:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Используйте атрибут `download` для загрузки ресурса<span id="use-download-attribute-for-downloading-a-resource"></span>

Это заставит браузеры загрузить связанный ресурс в хранилище.

Плохо:

    <a href="/downloads/offline.zip">offline version</a>

Хорошо:

    <a download href="/downloads/offline.zip">offline version</a>

### Используйте атрибуты `rel`, `hreflang` и `type` при необходимости<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

Эти подсказки помогают приложениям работать со связанным ресурсом.

Плохо:

    <a href="/ja/pdf">Japanese PDF version</a>

Хорошо:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Четкий текст ссылки<span id="clear-link-text"></span>

Текст ссылки должен представлять собой метку связанного с ней ресурса.

Плохо:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Хорошо:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Не используйте элемент `em` для предупреждения или предостережения<span id="dont-use-em-element-for-warning-or-caution"></span>

Это серьезно! Поэтому элемент `strong` подходит больше.

Плохо:

    <em>Caution!</em>

Хорошо:

    <strong>Caution!</strong>

### По возможности избегайте элементов `s`, `i`, `b` и `u`<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

Семантика этих элементов слишком сложна для человека.

Плохо:

    <i class="icon-search"></i>

Хорошо:

    <span class="icon-search" aria-hidden="true"></span>

### Не ставьте кавычки для элемента `q`<span id="dont-put-quotes-to-q-element"></span>

Кавычки предоставляются браузером.

Плохо:

    <q>“For writing maintainable and scalable HTML documents”</q>

Хорошо:

    <q>For writing maintainable and scalable HTML documents</q>

Так же хорошо:

    “For writing maintainable and scalable HTML documents”

### Добавить атрибут `title` к элементу `abbr`<span id="add-title-attribute-to-abbr-element"></span>

Нет другого способа представить его полную форму.

Плохо:

    <abbr>HBP</abbr>

Хорошо:

    <abbr title="HTML Best Practices">HBP</abbr>

### Разметка элемента `ruby` в развернутом виде<span id="markup-ruby-element-verbosely"></span>

Поддержка элемента `ruby` не завершена в современных браузерах.

Плохо:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Хорошо:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Добавьте атрибут `datetime` к элементу `time`, не поддающемуся машинному чтению<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

Когда атрибут `datetime` не присутствует, формат содержимого элемента `time` ограничивается.

Плохо:

    <time>Dec 19, 2014</time>

Хорошо:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Укажите язык кода с помощью атрибута `class` с префиксом `language-`<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

Это не формальный способ, но в спецификации он упоминается.

Плохо:

    <code>&lt;!DOCTYPE html&gt;</code>

Хорошо:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Максимально упростите элемент `kbd`<span id="keep-kbd-element-as-simple-as-possible"></span>

Вложенность элемента `kbd` слишком сложна для человека.

Плохо:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Хорошо:

    <kbd>Ctrl+F5</kbd>

### По возможности избегайте элемента `span`<span id="avoid-span-element-as-much-as-possible"></span>

Элемент `span` - это элемент последней надежды.

Плохо:

    HTML <span class="best">Best</span> Practices

Хорошо:

    HTML <em>Best</em> Practices

### Разрыв после элемента `br`<span id="break-after-br-element"></span>

Перевод строки должен быть необходим там, где используется элемент `br`.

Плохо:

    <p>HTML<br>Best<br>Practices</p>

Хорошо:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Не используйте элемент `br` только в презентационных целях<span id="dont-use-br-element-only-for-presentational-purpose"></span>

Элемент `br` не предназначен для декоративного перевода строки, он предназначен для перевода строки в содержимом.

Плохо:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Хорошо:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Edits<span id="edits"></span>

### Не накладывайте элементы `ins` и `del` на другие элементы<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

Элементы не могут быть переполнены другими элементами.

Плохо:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Хорошо:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Встроенный контент<span id="embedded-content"></span>

### Предоставьте резервные ресурсы элемента `img` для элемента `picture`<span id="provide-fallback-img-element-for-picture-element"></span>

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

### Добавьте атрибут `alt` к элементу `img`, если это необходимо<span id="add-alt-attrbute-to-img-element-if-needed"></span>

Атрибут `alt` помогает тем, кто не может обрабатывать изображения или у кого загрузка изображений отключена.

Плохо:

    <img src="/img/logo.png">

Хорошо:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Пустой атрибут `alt`, если это возможно<span id="empty-alt-attribute-if-possible"></span>

Если изображение является дополнительным, значит, где-то рядом находится эквивалентный контент.

Плохо:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Хорошо:

    <img alt="" src="/img/icon/help.png"> Help

### Опустите атрибут `alt`, если это возможно<span id="omit-alt-attribute-if-possible"></span>

Иногда вы не знаете, какой текст подходит для атрибута `alt`.

Плохо:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Хорошо:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

### Пустой элемент `iframe`<span id="empty-iframe-element"></span>

Существует некоторое ограничение в его содержании. Быть пустым всегда безопасно.

Плохо:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Хорошо:

    <iframe src="/ads/default.html"></iframe>

### Разметка содержимого элемента `map`<span id="markup-map-element-content"></span>

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

### Предоставьте резервное содержимое для элемента `audio` или `video`<span id="provide-fallback-content-for-audio-or-video-element"></span>

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

## Табличные данные<span id="tabular-data"></span>

### Напишите по одной ячейке в строке<span id="write-one-cell-per-line"></span>

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

### Используйте элемент `th` для ячейки заголовка<span id="use-th-element-for-header-cell"></span>

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

## Формы<span id="forms"></span>

### Обернуть элемент управления формой элементом `label`<span id="wrap-form-control-with-label-element"></span>

Элемент `label` помогает сфокусировать элемент формы.

Плохо:

    <p>Query: <input name="q" type="text"></p>

Хорошо:

    <p><label>Query: <input name="q" type="text"></label></p>

### По возможности опустите атрибут `for`<span id="omit-for-attribute-if-possible"></span>

Элемент `label` может содержать некоторые элементы формы.

Плохо:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Хорошо:

    <label>Query: <input name="q" type="text"></label>

### Используйте соответствующий атрибут `type` для элемента `input`<span id="use-appropriate-type-attribute-for-input-element"></span>

С помощью соответствующего `type` браузер наделяет элемент `input` крошечными возможностями.

Плохо:

    <label>Search keyword: <input name="q" type="text"></label>

Хорошо:

    <label>Search keyword: <input name="q" type="search"></label>

### Добавьте атрибут `value` к `input type="submit"`<span id="add-value-attribute-to-input-typesubmit"></span>

Метка по умолчанию для кнопки submit не стандартизирована для разных браузеров и языков.

Плохо:

    <input type="submit">

Хорошо:

    <input type="submit" value="Search">

### Добавьте атрибут `title` в элемент `input` при наличии атрибута `pattern`<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

Если вводимый текст не соответствует атрибуту `pattern`, значение атрибута `title` будет отображаться в качестве подсказки.

Плохо:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Хорошо:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Не используйте атрибут `placeholder` для маркировки<span id="dont-use-placeholder-attribute-for-labeling"></span>

Элемент `label` предназначен для метки, атрибут `placeholder` - для короткой подсказки.

Плохо:

    <input name="email" placeholder="Email" type="text">

Хорошо:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Запишите один элемент `option` в строке<span id="write-one-option-element-per-line"></span>

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

### Добавьте атрибут `max` к элементу `progress`<span id="add-max-attribute-to-progress-element"></span>

С помощью атрибута `max` атрибут `value` может быть записан в удобном формате.

Плохо:

    <progress value="0.5"> 50%</progress>

Хорошо:

    <progress max="100" value="50"> 50%</progress>

### Добавьте атрибуты `min` и `max` к элементу `meter`<span id="add-min-and-max-attribute-to-meter-element"></span>

С помощью атрибутов `min` и `max` атрибут `value` может быть записан в удобном формате.

Плохо:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Хорошо:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Поместите элемент `legend` в качестве первого дочернего элемента `fieldset`<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

Спецификация требует этого.

Плохо:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Хорошо:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Скриптинг<span id="scripting"></span>

### Опустите атрибут `type` для JavaScript<span id="omit-type-attribute-for-javascript"></span>

В HTML значение атрибута `type` элемента `script` по умолчанию равно `text/javascript`.

Плохо:

    <script type="text/javascript">
      ...
    </script>

Хорошо:

    <script>
      ...
    </script>

### Не комментируйте содержимое элемента `script`<span id="dont-comment-out-contents-of-script-element"></span>

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

### Не используйте внедренный скриптом элемент `script`<span id="dont-use-script-injected-script-element"></span>

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

## Прочее<span id="other"></span>

### Последовательный отступ<span id="indent-consistently"></span>

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

### Используйте абсолютный путь для внутренних ссылок<span id="use-absolute-path-for-internal-links"></span>

Абсолютный путь лучше работает на локальном хосте без подключения к Интернету.

Плохо:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Хорошо:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Укажите протокл URL для внешних ресурсов<span id="dont-use-protocol-relative-url-for-external-resources"></span>

С помощью протокола вы можете надежно и безопасно загружать внешние ресурсы.

Плохо:

    <script src="//example.com/js/library.js">

Хорошо:

    <script src="https://example.com/js/library.js">

## Авторы<span id="contributors"></span>

- [@hail2u\_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)

## Переводчики

- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@mrcaidev](https://github.com/mrcaidev)
- [@kobyborali](https://github.com/kobyborali)

## Лицензия

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
