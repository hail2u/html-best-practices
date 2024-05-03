Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [فارسی](README.fa-IR.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md)

# Erfolgsrezepte für HTML

Für das Schreiben wartbarer und skalierbarer HTML-Dokumente

## Allgemein

### Den Start bildet immer DOCTYPE

DOCTYPE wird zum Aktivieren des No-Quirks-Modus benötigt. In diesem Modus entspricht das Verhalten (hoffentlich) dem gewünschten Verhalten, das in den modernen HTML- und CSS-Spezifikationen beschrieben ist.

Schlecht:

    <html>
      ...
    </html>

Gut:

    <!DOCTYPE html>
    <html>
      ...
    </html>

### Verwende kein veraltetes DOCTYPE

DOCTYPE gibt die verwendete HTML-Version an. Für die aktuelle Version HTML 5 ist das dazugehörige Attribut ganz simpel `html`.

Schlecht:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Gut:

    <!DOCTYPE html>

### Verwende keine XML-Deklaration

Bist Du Dir sicher, dass Du XHTML schreiben möchtest?

Schlecht:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Gut:

    <!DOCTYPE html>

### Verwende so wenig Character References wie möglich

Wenn Du ein HTML-Dokument mit UTF-8 (meta charset="UTF-8" />) schreibst, können fast alle Zeichen, inklusive Emojies, direkt geschrieben werden.

Schlecht:

    <p><small>Copyright &copy; 2024 W3C<sup>&reg;</sup></small></p>

Gut:

    <p><small>Copyright © 2024 W3C<sup>®</sup></small></p>

### Ersetze `&`, `<`, `>`, `"` und `'` durch Character References

Diese Zeichen sollten für ein fehlerfreies HTML-Dokument immer durch HTML Entities ersetzt werden.

Schlecht:

    <h1>The "&" character</h1>

Gut:

    <h1>The &quot;&amp;&quot; character</h1>

### Verwende numerische Character References für Steuerzeichen oder unsichtbare Zeichen

Diese Zeichen werden leicht mit anderen Zeichen verwechselt.

Schlecht:

    <p>This book can be read in 1 hour.</p>

Gut:

    <p>This book can be read in 1&#xA0;hour.</p>

### Platziere Leerzeichen um Kommentare

Einige Zeichen können nicht unmittelbar nach dem Öffnen oder Schließen eines Kommentars verwendet werden.

Schlecht:

    <!--This section is non-normative-->

Gut:

    <!-- This section is non-normative -->

### Vergiss das schließende Tag nicht

Ich glaube, Du verstehest die Regel, dass ein schließendes Tag nicht weggelassen werden darf.

Schlecht:

    <html>
      <body>
        ...

Gut:

    <html>
      <body>
        ...
      </body>
    </html>

### Vermische nicht Deinen Style für Singeltons

Konsistenz ist ein Schlüssel zur Lesbarkeit.

Schlecht:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

Auch gut:

    <img alt="HTML Best Practices" src="/img/logo.png" />
    <hr />

### Verwende keine Leerzeichen um Tags und Attribute

Es gibt keinen Grund dafür, dies zu tun.

Schlecht:

    <h1 class=" title " >HTML Best Practices</h1>

Gut:

    <h1 class="title">HTML Best Practices</h1>

### Vermische nicht Groß- und Kleinschreibung

Damit wird sowohl Konsistenz als auch Lesbarkeit sichergestellt.

Schlecht:

    <a HREF="#general">General</A>

Gut:

    <a href="#general">General</a>

Auch gut:

    <A HREF="#general">General</A>

### Mische keine unterschiedlichen Anführungszeichen

Das gleiche wie oben.

Schlecht:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Gut:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### Trenn Attribute nicht durch zwei oder mehr Leerzeichen

Diese seltsame Formatierungsregel verwirrt bloß.

Schlecht:

    <input   name="q"  type="search">

Gut:

    <input name="q" type="search">

### Lass boolesche Attribute weg

Es ist einfacher zu schreiben, oder?

Schlecht:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Gut:

    <audio autoplay src="/audio/theme.mp3">

### Namensräume weglassen

SVG und MathML können direkt in einem HTML-Dokument verwendet werden.

Schlecht:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Gut:

    <svg>
      ...
    </svg>

### Verwende keine XML-Attribute

Wir schreiben schließlich ein HTML-Dokument.

Schlecht:

    <span lang="ja" xml:lang="ja">...</span>

Gut:

    <span lang="ja">...</span>

### Mische die `data-*`-, Mikrodaten- und RDFa-Lite-Attribute nicht mit gewöhnlichen Attributen

Ein Tag-String kann sehr kompliziert werden. Diese einfache Regel hilft beim Lesen eines solchen Tags.

Schlecht:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### Bevorzuge implizite ARIA-Standardsemantik

Einige Elemente haben implizit eine ARIA-`role` in einem HTML-Dokument, gib sie nicht explizit an.

Schlecht:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Gut:

    <nav>
      ...
    </nav>

    <hr>

## Das Wurzelelement

### Füge das Attribut `lang` hinzu

Das Attribut `lang` hilft beim Übersetzen eines HTML-Dokuments.

Schlecht:

    <html>

Gut:

    <html lang="de">

### Halte den Attributwert von `lang` so kurz wie möglich

Japanisch wird nur in Japan verwendet. Der Ländercode ist demnach nicht erforderlich.

Schlecht:

    <html lang="ja-JP">

Gut:

    <html lang="ja">

### Vermeide `data-*`-Attribute so weit wie möglich

Benutzeragenten können diese Attribute nicht interpretieren, was gleichzeitig die Barrierefreiheit behindert.

Schlecht:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Gut:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## Dokument-Metadaten

### Verwende das Element `title`

Der Wert für das Element `title` wird von verschiedenen Anwendungen verwendet, nicht nur vom Browser.

Schlecht:

    <head>
      <meta charset="UTF-8">
    </head>

Gut:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Verwende kein `base`-Element

Ein absoluter Pfad oder eine URL ist sowohl für Entwickler als auch für Benutzer sicherer.

Schlecht:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Gut:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>

### Gib den MIME-Typ der untergeordneten verknüpften Ressourcen an

Dies ist ein Hinweis darauf, wie die Anwendung mit dieser Ressource umgeht.

Schlecht:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Gut:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### Weis nicht explizit auf `favicon.ico` hin

Fast alle Browser holen `/favicon.ico` automatisch und asynchron.

Schlecht:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Gut:

    <!-- Speicher `favicon.ico` im Wurzelverzeichnis -->

### Verwende den Link für `apple-touch-icon`

Ein Standardanforderungspfad für das Touch-Icon wurde plötzlich geändert.

Schlecht:

    <!-- Hey Apple! Bitte lad `/apple-touch-icon.png` herunter! -->

Gut:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### Füge das Attribut `title` zu alternativen Stylesheets hinzu

Ein für Menschen lesbares Label hilft Menschen bei der Auswahl des richtigen Stylesheets.

Schlecht:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Gut:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### Verwende das `link`-Element für URLs

Ein Wert des Attributs `href` kann als URL aufgelöst werden.

Schlecht:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Gut:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>

### Gib die Zeichenkodierung des Dokuments an

UTF-8 ist noch nicht in allen Browsern als Standard festgelegt.

Schlecht:

    <head>
      <title>HTML Best Practices</title>
    </head>

Gut:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Verwende kein altes Zeichenkodierungsformat

HTTP-Header sollten von einem Server angegeben werden. Das Attribut `http-equiv` ist heutzutage nicht mehr vorgesehen.

Schlecht:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Gut:

    <meta charset="UTF-8">

### Gib zuerst die Zeichenkodierung an

Die Spezifikation für das Übertragungsprotokoll HTTP/1.1. fordert, dass die Zeichencodierung innerhalb der ersten 1024 Bytes des Dokuments angegeben wird.

Schlecht:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Gut:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>

### Verwende UTF-8

Mit UTF-8 kannst Du problemlos Emojies verwenden.

Schlecht:

    <meta charset="Shift_JIS">

Gut:

    <meta charset="UTF-8">

### Lassdas Attribut `type` für CSS weg

In HTML ist der Standardwert des `type`-Attributs des `style`-Elements `text/css`, da es außer CSS keine weitere Style-Sprache gibt.

Schlecht:

    <style type="text/css">
      ...
    </style>

Gut:

    <style>
      ...
    </style>

### Kommentiere den Inhalt des Elements `style` nicht aus

Alte Browser nehmen möglicherweise den Kommentar nicht wahr und zeigen die Style-Regeln dennoch an.

Schlecht:

    <style>
    <!--
      ...
      -->
    </style>

Gut:

    <style>
      ...
    </style>

### Vermische keine Tags für CSS und JavaScript

Manchmal blockiert das `script`-Element die DOM-Konstruktion.

Schlecht:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Gut:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Auch gut:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

## Abschnitte

### Nutze das `body`-Element

Manchmal wird das `body`-Element von einem Browser an einer unerwarteten Position ergänzt.

Schlecht:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Gut:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Vergiss das `hgroup`-Element

Dieses Element umgibt ein `<h*>`- und mindestens ein `<p>`-Element, wird jedoch nicht sehr oft verwendet.

Schlecht:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <p>For writing maintainable and scalable HTML documents.</p>
    </hgroup>

Gut:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### Verwende das Element `address` nur für Kontaktinformationen

Das Element `address` wird für E-Mail-Adressne, einen Account für ein soziales Netzwerk, die Adresse, eine Telefonnummer oder etwas anderes, mit dem man sich in Verbindung setzen kann, verwendet.

Schlecht:

    <address>No rights reserved.</address>

Gut:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## Inhalte gruppieren

### Fang nicht mit einem Zeilenumbruch im `pre`-Element an

Ein erster Zeilenumbruch wird in Browsern ignoriert, aber ab dem zweiten werden alle gerendert.

Schlecht:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Gut:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### Verwende ein angemessenes Element innerhalb von `blockquote`

Der Inhalt des `blockquote`-Elements ist ein Zitat, keine Aneinanderreihung von Zeichen.

Schlecht:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Gut:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### Füge die Quellenangabe nicht direkt in das `blockquote`-Element ein

Der Inhalt des Elements `blockquote` ist ein Zitat. Die Quelle steht daher außerhalb.

Schlecht:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Gut:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Auch gut:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>

### Schreibe einen Listeneintrag pro Zeile

Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaangeeeeeeeeeeeeeeeeeee
Zeilen sind schweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer zuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu lesen

Schlecht:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Gut:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>

### Verwende das Attribut `type` für das Element `ol`.

Manchmal wird durch einen Klassennamen der Typ einer Liste festgelegt. Leg stattdessen den Typ durch das `type`-Attribut fest.

Schlecht:

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

Gut:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

### Verwende `dl` nicht für Dialoge

Das `dl`-Element ist auf eine Assoziationsliste in HTML beschränkt.

Schlecht:

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

Gut:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>

### Platziere das Element `figcaption` als erstes oder letztes untergeordnetes Element von `figure`

Das `figcaption`-Element sollte nicht in der Mitte des `figure`-Elements platziert werden.

Schlecht:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Gut:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>

### Verwende das `main`-Element

Das `main`-Element kann verwendet werden, um Inhalte zu umhüllen und dadurch den Hauptinhalt einer Seite zu markieren.

Schlecht:

    <div id="content">
      ...
    </div>

Gut:

    <main>
      ...
    </main>

### Vermeide das `div`-Element so weit wie möglich

Das `div`-Element sollte Dein letzter Ausweg sein. Verwende stattdessen andere semantische Elemente, wie `<section>`, `<p>` oder `<article>`.

Schlecht:

    <div class="chapter">
      ...
    </div>

Gut:

    <section>
      ...
    </section>

## Semantik auf Textebene

### Wenn mehrere Elemente auf denselben Link verweisen, werden sie gruppiert

Das `a`-Element kann fast alle Elemente umschließen (außer interaktive Elemente wie Formulare und das`a`-Element selbst).

Schlecht:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Gut:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Verwende das Attribut `download`, um eine Ressource herunterzuladen

Dieses Attribut zwingt den Browser, verknüpfte Ressourcen in den Speicher herunterzuladen.

Schlecht:

    <a href="/downloads/offline.zip">offline version</a>

Gut:

    <a download href="/downloads/offline.zip">offline version</a>

### Verwende bei Bedarf die Attribute `rel`, `hreflang` und `type`

Diese Hinweise helfen Anwendungen beim Umgang mit verknüpften Ressourcen.

Schlecht:

    <a href="/ja/pdf">Japanese PDF version</a>

Gut:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Eindeutiger Linktext

Der Linktext sollte die verlinkte Ressource beschreiben, was gleichzeitig zur digitalen Barrierefreiheit beiträgt.

Schlecht:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Gut:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Verwende das Element `em` nicht zur Warnung

Für diesen Zweck ist das `strong` Element angemessener.

Schlecht:

    <em>Caution!</em>

Gut:

    <strong>Caution!</strong>

### Vermeide die Elemente `s`, `i`, `b` und `u` so weit wie möglich

Die Semantik dieser Elemente ist für Menschen zu schwierig.

Schlecht:

    <i class="icon-search"></i>

Gut:

    <span class="icon-search" aria-hidden="true"></span>

### Verwende keine Anführungszeichen im `q`-Element

Anführungszeichen werden vom Browser durch das Element bereitgestellt.

Schlecht:

    <q>"For writing maintainable and scalable HTML documents"</q>

Gut:

    <q>For writing maintainable and scalable HTML documents</q>

Auch gut:

    "For writing maintainable and scalable HTML documents"

### Füge das Attribut `title` zum Element `abbr` hinzu

Es gibt keine andere Möglichkeit, die lange Version der Abkürzung darzustellen.

Schlecht:

    <abbr>HBP</abbr>

Gut:

    <abbr title="HTML Best Practices">HBP</abbr>

### Hebe das `ruby`-Element ausführlich semantisch hervor

Die vollständige Unterstützung für `ruby`-Elemente ist in den modernen Browsern noch nicht abgeschlossen.

Schlecht:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Gut:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Füge dem nicht maschinenlesbaren Element `time` das Attribut `datetime` hinzu

Wenn das Attribut `datetime` nicht vorhanden ist, dann ist das Format des Inhalts des Elements `time` eingeschränkt.

Schlecht:

    <time>Dec 19, 2014</time>

Gut:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Gib die Codesprache mit dem Attribut `class` als Präfix von `language-` an

Dies ist kein offizieller Weg, aber die Spezifikation von HTML erwähnt diesen Punkt.

Schlecht:

    <code>&lt;!DOCTYPE html&gt;</code>

Gut:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Halte das `kbd`-Element so einfach wie möglich

Das Verschachteln des `kbd`-Elements ist für Menschen zu schwierig.

Schlecht:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Gut:

    <kbd>Ctrl+F5</kbd>

### Vermeide das Element `span` so weit wie möglich

Das `span`-Element ist genau wie das `<div>`-Element als letzter Ausweg gedacht.

Schlecht:

    HTML <span class="best">Best</span> Practices

Gut:

    HTML <em>Best</em> Practices

### Zeilenumbruch nach dem `br`-Element

Ein Zeilenumbruch sollte auch im Code angedeutet werden, wenn das Element `br` verwendet wird.

Schlecht:

    <p>HTML<br>Best<br>Practices</p>

Gut:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Verwende das `br`-Element nicht zu Präsentationszwecken

Das `br`-Element dient dem Zeilenumbruch im Inhalt. Wenn der Zeilenumbruch einen neuen logischen Abschnitt beginnen soll, verwende ein weiteres semantisches Element.

Schlecht:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Gut:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Bearbeitungen

### Vorsicht bei den Elementen `ins` und `del`

Elemente können nicht über andere Elemente hinausragen. HTML-Elemente müssen sauber verschachtelt werden: Bevor ein äußeres Element durch ein schließendes Tag geschlossen wird, müssen alle inneren Elemente ebenfalls geschlossen werden.

Schlecht:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Gut:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Eingebetteter Inhalt

### Stelle ein Fallback-`img` für das `picture`-Element bereit

Die Unterstützung des `picture`-Elements ist noch nicht gut ausgebaut.

Schlecht:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Gut:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

### Füge jedes Mal das Attribut `alt` zum Element `img` hinzu

Das Attribut `alt` hilft in Fällen, in denen keine Bilder verarbeitet werden können, und Menschen, die auf Screenreader angewiesen sind. Screenreader lesen an der Stelle des Bildes den Inhalt des `alt`-Attributs vor.

Schlecht:

    <img src="/img/logo.png">

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Leeres `alt`-Attribut in Ausnahmefällen

Wenn das Bild lediglich zur Dekoration dient und von assistierenden Technologien ignoriert werden darf, muss das `alt`-Attribut zwar gesetzt werden, darf aber keinen Inhalt aufweisen.

Schlecht:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Gut:

    <img alt="" src="/img/icon/help.png"> Help

### Leeres `iframe`-Element

Inhaltlich gibt es einige Einschränkungen. Wenn es leer ist, riskierst Du keine unnötigen Fehler.

Schlecht:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Gut:

    <iframe src="/ads/default.html"></iframe>

### Hebe den Inhalt des `map`-Elements semantisch hervor

Dieser Inhalt wird einem Screenreader angezeigt.

Schlecht:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Gut:

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

### Biete Fallback-Inhalte für `audio`- oder `video`-Elemente an

Fallback-Content wird immer für neu eingeführte Elemente in HTML benötigt.

Schlecht:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Gut:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

## Tabellendaten

### Schreibe eine Zelle pro Zeile

Lange Zeilen sind schwer zu lesen.

Schlecht:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Gut:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>

### Verwende das `th`-Element für die Kopfzelle

Dadurch wird digitale Barrierefreiheit gefördert.

Schlecht:

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

Gut:

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

## Formulare

### Forumlare werden mit einem `label`-Element umschlossen

Das `label`-Element hilft beim Fokussieren des `form`-Elements.

Schlecht:

    <p>Query: <input name="q" type="text"></p>

Gut:

    <p><label>Query: <input name="q" type="text"></label></p>

### Verwende das geeignete `type`-Attribut für das `input`-Element

Mit dem entsprechende `type`-Attribut kann ein Browser dem `input`-Element die dazugehörigen Funktionen verleihen.

Schlecht:

    <label>Search keyword: <input name="q" type="text"></label>

Gut:

    <label>Search keyword: <input name="q" type="search"></label>

### Füge das Attribut `value` bei ​​`input type="submit"` hinzu

Der Wert dieses Attributs wird dem End-Nutzer optisch als Label des Submit-Buttons angezeigt.

Schlecht:

    <input type="submit">

Gut:

    <input type="submit" value="Search">

### Füge das Attribut `title` dem `input`-Element hinzu, wenn das Attribut `pattern` vorhanden ist

Wenn der Eingabetext nicht mit dem Attribut `pattern` übereinstimmt, wird der Wert von `title` als Hinweis angezeigt.

Schlecht:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Gut:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Verwende kein `placeholder`-Attribut für Beschriftungen

Das `label`-Element steht für eine Beschriftung, das `placeholder`-Attribut für einen kurzen Hinweis.

Schlecht:

    <input name="email" placeholder="Email" type="text">

Gut:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Verwende ein `option`-Element pro Zeile

Lange Zeilen sind schwer zu lesen.

Schlecht:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Gut:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>

### Füge das Attribut `max` dem Element `progress` hinzu

Mit dem Attribut `max` kann das Attribut `value` in einem einfachen Format geschrieben werden.

Schlecht:

    <progress value="0.5"> 50%</progress>

Gut:

    <progress max="100" value="50"> 50%</progress>

### Verwende die Attribute `min` und `max` beim Element `meter`

Mit den `min`- und `max`-Attributen kann das `value`-Attribut in einem einfachen Format geschrieben werden.

Schlecht:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Gut:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Platziere das `legend`-Element als erstes untergeordnetes Element des `fieldset`-Elements

Gemäß der Spezifikation von HTML soll das `legend`-Element als erstes untergeordnetes Element des `fieldset`-Elements platziert werden.

Schlecht:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Gut:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Skripte

### Lasse das `type`-Attribut für JavaScript weg

In HTML ist der Standard des Elements `script` für das Attribut `type` der Wert `text/javascript`.

Schlecht:

    <script type="text/javascript">
      ...
    </script>

Gut:

    <script>
      ...
    </script>

### Kommentiere Inhalte des `script`-Elements nicht aus

Ein beispielhafter Grund dafür ist, dass der Browser zwar den Code ignoriert, ihn aber dennoch herunterlädt und analysiert und somit die Performance beeinflusst.

Schlecht:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Auch schlecht:

    <script>
    <!--
      ...
    // -->
    </script>

Gut:

    <script>
      ...
    </script>

### Verwende kein Skript-injiziertes `script`-Element

Verwende stattdessen `async`. Dies ist das Beste sowohl für Einfachheit als auch für Leistung.

Schlecht:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Gut:

    <script async defer src="https://example.com/widget.js"></script>

## Andere Punkte

### Konsequent einrücken

Die konsequente Einrückung ist wichtig für die Lesbarkeit. Gerne kannst Du dafür auch externe Tools, wie bspw. `prettier` verwenden.

Schlecht:

    <html>
        <head>
    	  ...
    	  </head>
      <body>
        ...
         </body>
     </html>

Gut:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

### Verwende absolute Pfade für interne Links

Ein absoluter Pfad funktioniert besser auf Deinem localhost ohne Internetverbindung.

Schlecht:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Gut:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Verwende keine protokollrelative URL für externe Ressourcen

Mit einem Protokoll (http oder https) kannst Du externe Ressourcen zuverlässiger und sicher laden.

Schlecht:

    <script src="//example.com/js/library.js">

Gut:

    <script src="https://example.com/js/library.js">

## Mitwirkende

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)

## Übersetzer

- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@shayanthenerd](https://github.com/shayanthenerd)
- [@sliderkh](https://github.com/sliderkh)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@victorchao996](https://github.com/victorchao996)
- [@wesleynepo](https://github.com/wesleynepo)
- [@zulkar29](https://github.com/zulkar29)
- [@StackOverflowIsBetterThanAnyAI](https://github.com/StackOverflowIsBetterThanAnyAI)

## Lizenz

[CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/)
