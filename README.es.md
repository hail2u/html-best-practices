Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md)

# Mejores prácticas de HTML

Para escribir documentos HTML mantenibles y escalables.


## General


### Empieza con DOCTYPE

DOCTYPE es necesario para activar el modo estándar.

Mal:

    <html>
      ...
    </html>

Bien:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### No utilices DOCTYPE obsoletos

DOCTYPE ya no se usa para DTD, mantenlo simple.

Mal:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Bien:

    <!DOCTYPE html>


### No utilices declaraciones XML

¿Estás seguro de querer escribir XHTML?

Mal:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Bien:

    <!DOCTYPE html>


### Evita usar referencias de caracteres tanto como sea posible

Si escribes un documento HTML con UTF-8, casi todos los caracteres (incluyendo emojis) pueden ser escritos directamente.

Mal:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Bien:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Escapa `&`, `<`, `>`, `"`, y `'` con referencias de caracteres con nombre

Estos caracteres se deberían de escapar siempre para un documento HTML sin bugs.

Mal:

    <h1>The "&" character</h1>

Bien:

    <h1>The &quot;&amp;&quot; character</h1>


### Usa referencias de caracteres numéricas para caracteres de control o invisibles

Estos caracteres son fácilmente confundidos por otro carácter. además la especificación no garantiza el definir un nombre legible por humanos para estos caracteres.

Mal:

    <p>This book can read in 1 hour.</p>

Bien:

    <p>This book can read in 1&#xA0;hour.</p>


### Pon espacios alrededor del contenido de los comentarios

Algunos caracteres no pueden ser utilizados inmediatemente después de abrir o antes de cerrar un comentario.

Mal:

    <!--This section is non-normative-->

Bien:

    <!-- This section is non-normative -->


### No omitas la etiqueta de cierre

Tal vez no entiendas las reglas para omitir la etiqueta de cierre.

Mal:

    <html>
      <body>
        ...

Bien:

    <html>
      <body>
        ...
      </body>
    </html>


### Usa un solo formato para elementos vacíos

La consistencia es clave para un código legible.

Mal:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Bien:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### No pongas espacios alrededor de etiquetas o atributos

No hay ninguna razón para hacerlo.

Mal:

    <h1 class=" title " >HTML Best Practices</h1>

Bien:

    <h1 class="title">HTML Best Practices</h1>


### No mezcles mayúsculas y minúsculas

También ayuda a la consistencia.

Mal:

    <a HREF="#general">General</A>

Bien:

    <a href="#general">General</a>

Bien también:

    <A HREF="#general">General</A>


### No mezcles las comillas

Igual que el anterior.

Mal:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Bien:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### No separes los atributos con dos o más espacios

Un formato extraño puede confundir a otras personas.

Mal:

    <input   name="q"  type="search">

Bien:

    <input name="q" type="search">


### Omite el valor de los atributos booleanos

Es más fácil de escribir, ¿no es así?

Mal:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Bien:

    <audio autoplay src="/audio/theme.mp3">


### Omite los namespaces

SVG y MathML pueden ser usados directamente en un documento HTML.

Mal:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Bien:

    <svg>
      ...
    </svg>


### No uses atributos XML

Estamos escribiendo un documento HTML.

Mal:

    <span lang="ja" xml:lang="ja">...</span>

Bien:

    <span lang="ja">...</span>


### No mezcles atributos `data-*`, Microdata, y RDFa Lite con atributos comunes

El texto en una etiqueta puede ser muy complicado, estas reglas simples ayudan a leer una etiqueta así.

Mal:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Bien:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Usa semánticas ARIA implícitas

Si un elemento tiene un ARIA `role` implícitamente en un documento HTML, no lo especifiques.

Mal:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Bien:

    <nav>
      ...
    </nav>

    <hr>


## El elemento raíz


### Añade el atributo `lang`

El atributo `lang` ayudará a traducir un documento HTML.

Mal:

    <html>

Bien:

    <html lang="en-US">


### Mantén el valor del atributo `lang` tan corto como sea posible

El japonés solo es usado en Japón. El código del país no es necesario.

Mal:

    <html lang="ja-JP">

Bien:

    <html lang="ja">


### Evita `data-*` tanto como sea posible

Los navegadores pueden manejar adecuadamente un atributo apropiado.

Mal:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Bien:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadatos del documento


### Añade un elemento `title`

Un valor para el elemento `title` puede ser usado por varias aplicaciones, no solamente el navegador.

Mal:

    <head>
      <meta charset="UTF-8">
    </head>

Bien:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### No uses el elemento `base`

Una ruta absoluta o un URL es más seguro tanto para desarrolladores como para los usuarios.

Mal:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Bien:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Especifica el MIME type de recursos menores vinculados

Es una pista acerca de cómo la aplicación maneja el recurso.

Mal:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Bien:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### No uses un link para `favicon.ico`

Casi todos los navegadores obtienen `/favicon.ico` de forma automática y asíncrona.

Mal:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Bien:

    <!-- Pon `favicon.ico` en el directorio raíz. -->


### Añade un link para `apple-touch-icon`

Informa qué icono utilizan las plataformas iOS para representar el sitio.

Mal:

    <!-- Oye Apple! Por favor descarga `/apple-touch-icon.png`! -->

Bien:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Añade el atributo `title` a las hojas de estilo alternativas

Un título comprensible para los humanos ayuda a las personas a elegir la hoja de estilo adecuada.

Mal:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Bien:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Para URLs, usa el elemento `link`

El valor del atributo `href` se puede resolver como una URL.

Mal:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Bien:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Especifica la codificación de caracteres del documento

UTF-8 no está por defecto en todos los buscadores aún.

Mal:

    <head>
      <title>HTML Best Practices</title>
    </head>

Bien:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### No uses una codificación de carateres obsoleta

Los headers HTTP deben ser especificados por el servidor, mantenlo simple.

Mal:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Bien:

    <meta charset="UTF-8">


### Ubica la codificación de caracteres primero

La especificación requiere que la codificación de caracteres se establezca dentro de los primeros 1024 bytes del documento.

Mal:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Bien:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Usa UTF-8

Con UTF-8, eres libre de usar Emojis.

Mal:

    <meta charset="Shift_JIS">

Bien:

    <meta charset="UTF-8">


### Omite el atributo `type` para CSS

En HTML, el valor por defecto para el atributo `type` de las etiquetas `style` es `text/css`.

Mal:

    <style type="text/css">
      ...
    </style>

Bien:

    <style>
      ...
    </style>


### No comentes el contenido del elemento `style`

Solamente era necesario en navegadores antiguos.

Mal:

    <style>
    <!--
      ...
      -->
    </style>

Bien:

    <style>
      ...
    </style>


### No mezcles etiquetas para CSS y JavaScript

Algunas veces los elementos `script` bloquean la construcción del DOM.

Mal:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Bien:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Bien también:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Secciones


### Añade el elemento `body`

No usar el elemento `body` para envolver el contenido de la página puede causar comportamientos inesperados en los navegadores.

Mal:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Bien:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Olvida el elemento `hgroup`

Este elemento no es muy utilizado.

Mal:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Bien:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Usa el elemento `address` solamente para información de contacto

El elemento `address` es para direcciones de email, redes sociales, domicilio, número de teléfono y otros medios de contacto.

Mal:

    <address>No rights reserved.</address>

Bien:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Agrupando contenido


### No empieces en una nueva línea con un elemento `pre`

La primera nueva línea será ignorada en los navegadores, pero la segunda y posteriores son renderizadas.

Mal:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Bien:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Usa de forma apropiada el elemento `blockquote`

El contenido del elemento `blockquote` es una cita, no bloques de caracteres.

Mal:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Bien:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### No incluyas la atribución en el elemento `blockquote`

El contenido del elemento `blockquote` es una cita.

Mal:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Bien:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Bien también:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Escribe un único elemento de lista por línea

Las líneas laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaargas son difíciles de leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer.

Mal:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Bien:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Usa el atributo `type` para elementos `ol`

Algunas veces el marcador es referenciado por los contenidos cercanos. Si cambias el tipo del marcador
con el atributo `type`, estarás seguro ante esas referencias.

Mal:

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

Bien:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### No uses `dl` para diálogos

El elemento `dl` es usado para listas descriptivas en HTML.

Mal:

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

Bien:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Coloca el elemento `figcaption` como primer o último hijo del elemento `figure`

La especificación no permite al elemento `figcaption` en el medio del elemento `figure`.

Mal:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Bien:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Usa el elemento `main`

El elemento `main` puede ser usado para envolver contenido.

Mal:

    <div id="content">
      ...
    </div>

Bien:

    <main>
      ...
    </main>


### Evita el elemento `div` tanto como sea posible

El elemento `div` es el último recurso.

Mal:

    <div class="chapter">
      ...
    </div>

Bien:

    <section>
      ...
    </section>


## Semántica a nivel de texto


### No dividas un enlace que puede ser agrupado

El elemento `a` puede envolver a casi todos los elementos (excepto elementos interactivos como
controles de un formulario y el mismo elemento `a`).

Mal:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Bien:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Usa el atributo `download` para descargar un recurso

Esto forzará a los navegadores a descargar el recurso vinculado al almacenamiento.

Mal:

    <a href="/downloads/offline.zip">offline version</a>

Bien:

    <a download href="/downloads/offline.zip">offline version</a>


### Usa los atributos `rel`, `hreflang`, y `type` si es necesario

Estas pistas ayudan a las aplicaciones a manejar el recurso vinculado.

Mal:

    <a href="/ja/pdf">Japanese PDF version</a>

Bien:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Pon un texto claro en los enlaces

El texto de un enlace debe describir el recurso vinculado.

Mal:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Bien:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### No uses el elemento `em` como advertencia o precaución

Esto es algo serio, por eso el elemento `strong` es más apropiado.

Mal:

    <em>Caution!</em>

Bien:

    <strong>Caution!</strong>


### Evita los elementos `s`, `i`, `b`, y `u` tanto como sea posible

La semántica de estos elementos es difícil para los humano.

Mal:

    <i class="icon-search"></i>

Bien:

    <span class="icon-search" aria-hidden="true"></span>


### No pongas comillas en el elemento `q`

Las comillas son puestas por el navegador.

Mal:

    <q>“For writing maintainable and scalable HTML documents”</q>

Bien:

    <q>For writing maintainable and scalable HTML documents</q>

Bien también:

    “For writing maintainable and scalable HTML documents”


### Añade el atributo `title` al elemento `abbr`

No hay otra forma de representar su expansión.

Mal:

    <abbr>HBP</abbr>

Bien:

    <abbr title="HTML Best Practices">HBP</abbr>


### Marca el elemento `ruby` detalladamente

El soporte para el elemento `ruby` no está completo entre los navegadores modernos.

Mal:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Bien:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Añade el atributo `datetime` al elemento `time` si usa formatos no reconocibles por la máquina

Cuando el atrubuto `datetime` no está presente, el formato del contenido del elemento `time` es restringido.

Mal:

    <time>Dec 19, 2014</time>

Bien:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Especifica el lenguaje del código con un atributo `class` con prefijo `language-`

No es una manera muy formal, pero la especificación lo menciona así.

Mal:

    <code>&lt;!DOCTYPE html&gt;</code>

Bien:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Mantén el elemento `kbd` tan simple como sea posible

Anidar el elemento `kbd` es difícil para los humanos.

Mal:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Bien:

    <kbd>Ctrl+F5</kbd>


### Evita el elemento `span` tanto como sea posible

El elemento `span` es el último recurso.

Mal:

    HTML <span class="best">Best</span> Practices

Bien:

    HTML <em>Best</em> Practices


### Usa un salto de línea al usar el elemento `br`

Debería ser necesario cuando el elemento `br` es usado.

Mal:

    <p>HTML<br>Best<br>Practices</p>

Bien:

    <p>HTML<br>
    Best<br>
    Practices</p>


### No uses el elemento `br` solo con fines de presentación

El elemento `br` es para dar saltos de línea en el contenido.

Mal:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Bien:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Ediciones


### No coloques elementos `ins` y `del` sobre otros elementos

Los elementos no pueden desbordar otros elementos.

Mal:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Bien:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Contenido incrustado


### Usa un elemento `img` alternativo para el elemento `picture`

El soporte del elemento `picture` aún no es bueno.

Mal:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Bien:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Añade el atributo `alt` al elemento `img` si es necesario

El atributo `alt` ayuda a aquellos que no pueden procesar imágenes o tienen
la carga de imágenes deshabilitada.

Mal:

    <img src="/img/logo.png">

Bien:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Usa el atributo `alt` vacío de ser posible

Si la imagen es suplementaria, hay contenido equivalente cerca de ella.

Mal:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Bien:

    <img alt="" src="/img/icon/help.png"> Help


### Omite el atributo `alt` de ser posible

A veces no se sabe qué texto es adecuado para el atributo `alt`.

Mal:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Bien:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (Si no puedes ver la imagen, puedes usar un <a href="?audio">audio</a> de prueba en su lugar.)


### Elemento `iframe` vacío

Hay restricciones para su contenido. Tenerlo vacío es seguro siempre.

Mal:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Bien:

    <iframe src="/ads/default.html"></iframe>


### Marca el contenido del elemento `map`

Este contenido se presenta a los lectores de pantalla.

Mal:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Bien:

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


### Proporciona contenido alternativo para los elementos `audio` o `video`

El contenido alternativo es necesario para elementos recién introducidos en HTML.

Mal:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Bien:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Tablas


### Escribe una celda por línea

Las líneas largas son difíciles de leer.

Mal:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Bien:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Usa el elemento `th` para las celdas de cabecera

No hay razón para evitarlo.

Mal:

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

Bien:

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


## Formularios


### Envuelve los controles del formilario con el elemento `label`

El elemento `label` ayuda a enfocar el elemento del formulario.

Mal:

    <p>Query: <input name="q" type="text"></p>

Bien:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omite el atributo `for` de ser posible

El elemento `label` puede contener a algunos elementos del formulario.

Mal:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Bien:

    <label>Query: <input name="q" type="text"></label>


### Usa un atributo `type` apropiado para el elemento `input`

Con un `type` apropiado, los navegadores brindan funciones extra a los elementos `input`.

Mal:

    <label>Search keyword: <input name="q" type="text"></label>

Bien:

    <label>Search keyword: <input name="q" type="search"></label>


### Añade el atributo `value` a los elementos `input type="submit"`

El texto por defecto para el botón de enviar no está estandarizado
en distintos navegadores e idiomas.

Mal:

    <input type="submit">

Bien:

    <input type="submit" value="Search">


### Añade el atributo `title` a elementos `input` que tienen un atributo `pattern`

Si el texto introducido no es aceptado con el atributo `pattern`, el valor del atributo `title`
se mostrará como una guia.

Mal:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Bien:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### No uses el atributo `placeholder` como etiqueta

El elemento `label` es para etiquetar, el elemento `placeholder` es para mostrar una pista breve.

Mal:

    <input name="email" placeholder="Email" type="text">

Bien:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Escribe un elemento `option` por línea

Las líneas largas son difíciles de leer..

Mal:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Bien:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Añade el atributo `max` al elemento `progress`

Con el atributo `max`, el atributo `value` puede ser escrito en un formato sencillo.

Mal:

    <progress value="0.5"> 50%</progress>

Bien:

    <progress max="100" value="50"> 50%</progress>


### Añade los atributos `min` y `max` al elemento `meter`

Con los atributos `min` y `max`, el atributo `value` puede ser escrito en un formato sencillo.

Mal:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Bien:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Pon el elemento `legend` como primer hijo del elemento `fieldset`

La especificación pide ésto.

Mal:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Bien:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scripts


### Omite el atributo `type` para JavaScript

En HTML, el valor por defecto del atributo `type` del elemento `script`
es `text/javascript`.

Mal:

    <script type="text/javascript">
      ...
    </script>

Bien:

    <script>
      ...
    </script>


### No comentes el contenido del elemento `script`

Solamente era necesario en navegadores antiguos.

Mal:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Mal también:

    <script>
    <!--
      ...
    // -->
    </script>

Bien:

    <script>
      ...
    </script>


### No uses elementos `script` inyectados por script

El atributo `async` es major para la simplicidad y el rendimiento.

Mal:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Bien:

    <script async defer src="https://example.com/widget.js"></script>


## Otros


### Usa indentación consistente

La indentación es importante para la legibilidad.

Mal:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Bien:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Usa rutas absolutas para enlaces internos

Una ruta absoluta funciona mejor en tu localhost sin conexión a internet.

Mal:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Bien:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### No uses protocolos relativos en URLs para recursos externos

Con el protocolo, puedes cargar recursos externos de forma segura y confiable.

Mal:

    <script src="//example.com/js/library.js">

Bien:

    <script src="https://example.com/js/library.js">




## Contributors

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## Translators

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@sliderkh](https://github.com/sliderkh)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@victorchao996](https://github.com/victorchao996)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar29](https://github.com/zulkar29)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
