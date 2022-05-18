Translations: [English (en)](README.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português brasileiro (pt-BR)](README.pt-BR.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [简体中文 (zh-CN)](README.zh-CN.md)

# Bewährte Verfahren für HTML

Zum Schreiben wartbarer und skalierbarer HTML-Dokumente

## Allgemein

### Beginnen Sie mit DOCTYPE

DOCTYPE wird zum Aktivieren des No-Quirks-Modus benötigt.

Schlecht:

    <html>
      ...
    </html>

Gut:

    <!DOCTYPE html>
    <html>
      ...
    </html>

### Verwenden Sie kein veraltetes oder veraltetes DOCTYPE

DOCTYPE ist nicht mehr für DTD, seien Sie einfach.

Schlecht:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Gut:

    <!DOCTYPE html>

### Verwenden Sie keine XML-Deklaration

Sind Sie sicher, dass Sie XHTML schreiben möchten?

Schlecht:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Gut:

    <!DOCTYPE html>

### Don’t use character references as much as possible

Wenn Sie ein HTML-Dokument mit UTF-8 schreiben, werden fast alle Zeichen (einschließlich
Emoji) können direkt geschrieben werden.

Schlecht:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Gut:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

### Escape `&`, `<`, `>`, `"` und `'` mit benannten Zeichenreferenzen

Diese Zeichen sollten für ein fehlerfreies HTML-Dokument immer maskiert werden.

Schlecht:

    <h1>The "&" character</h1>

Gut:

    <h1>The &quot;&amp;&quot; character</h1>

### Verwenden Sie numerische Zeichenreferenzen für Steuerzeichen oder unsichtbare Zeichen

Diese Zeichen werden leicht mit anderen Zeichen verwechselt. Und auch spec tut
garantiert nicht, einen für Menschen lesbaren Namen für diese Zeichen zu definieren.

Schlecht:

    <p>This book can read in 1 hour.</p>

Gut:

    <p>This book can read in 1&#xA0;hour.</p>

### Platzieren Sie Leerzeichen um Kommentarinhalte

Einige Zeichen können nicht unmittelbar nach dem Öffnen des Kommentars oder vor dem Kommentar verwendet werden
nah dran.

Schlecht:

    <!--This section is non-normative-->

Gut:

    <!-- This section is non-normative -->

### Lassen Sie das schließende Tag nicht aus

Ich glaube, Sie verstehen eine Regel zum Weglassen des schließenden Tags nicht.

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

### Mischen Sie kein leeres Elementformat

Konsistenz ist ein Schlüssel zur Lesbarkeit.

Schlecht:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

### Platzieren Sie keine Leerzeichen um Tags und Attributwerte

Es gibt keinen Grund, dies zu tun.

Schlecht:

    <h1 class=" title " >HTML Best Practices</h1>

Gut:

    <h1 class="title">HTML Best Practices</h1>

### Mischen Sie keine Groß- und Kleinschreibung

Es gibt auch eine Konsistenz.

Schlecht:

    <a HREF="#general">General</A>

Gut:

    <a href="#general">General</a>

Also Gut:

    <A HREF="#general">General</A>

### Mischen Sie keine Anführungszeichen

Das gleiche wie oben.

Schlecht:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Gut:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

### Trennen Sie Attribute nicht durch zwei oder mehr Leerzeichen

Ihre seltsame Formatierungsregel verwirrt jemanden.

Schlecht:

    <input   name="q"  type="search">

Gut:

    <input name="q" type="search">

### Booleschen Attributwert weglassen

Es ist einfach zu schreiben, nicht wahr?

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

### Verwenden Sie keine XML-Attribute

Wir schreiben ein HTML-Dokument.

Schlecht:

    <span lang="ja" xml:lang="ja">...</span>

Gut:

    <span lang="ja">...</span>

### Mischen Sie die Attribute `data-*`, Mikrodaten und RDFa Lite nicht mit gemeinsamen Attributen

Ein Tag-String kann sehr kompliziert sein. Diese einfache Regel hilft beim Lesen eines solchen Tags
Schnur.

Schlecht:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

### Implizite ARIA-Standardsemantik bevorzugen

Einige Elemente haben implizit eine ARIA- `role` in einem HTML-Dokument, geben Sie sie nicht an.

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

### Fügen Sie das Attribut „lang“ hinzu

Das Attribut `lang` hilft beim Übersetzen eines HTML-Dokuments.

Schlecht:

    <html>

Gut:

    <html lang="en-US">

### Halten Sie den Attributwert `lang` so kurz wie möglich

Japanisch wird nur in Japan verwendet. Der Ländercode ist also nicht erforderlich.

Schlecht:

    <html lang="ja-JP">

Gut:

    <html lang="ja">

### Vermeiden Sie `data-*` so weit wie möglich

Ein entsprechendes Attribut kann von Browsern richtig gehandhabt werden.

Schlecht:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Gut:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

## Dokument-Metadaten

### Fügen Sie das Element `title` hinzu

Ein Wert für das Element `title` wird von verschiedenen Anwendungen verwendet, nicht nur von einem Browser.

Schlecht:

    <head>
      <meta charset="UTF-8">
    </head>

Gut:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Verwenden Sie kein `base`-Element

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

### Geben Sie den MIME-Typ der untergeordneten verknüpften Ressourcen an

Dies ist ein Hinweis darauf, wie die Anwendung mit dieser Ressource umgeht.

Schlecht:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Gut:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

### Verlinken Sie nicht auf `favicon.ico`

Fast alle Browser holen `/favicon.ico` automatisch und asynchron.

Schlecht:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Gut:

    <!-- Place `favicon.ico` in the root directory. -->

### Fügen Sie den Link `apple-touch-icon` hinzu

Ein Standardanforderungspfad für das Touch-Symbol wurde plötzlich geändert.

Schlecht:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Gut:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

### Fügen Sie das Attribut `title` zu alternativen Stylesheets hinzu

Ein für Menschen lesbares Etikett hilft Menschen bei der Auswahl des richtigen Stylesheets.

Schlecht:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Gut:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

### Verwenden Sie als URL das Element `link`.

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

### Geben Sie die Zeichencodierung des Dokuments an

UTF-8 ist noch nicht in allen Browsern voreingestellt.

Schlecht:

    <head>
      <title>HTML Best Practices</title>
    </head>

Gut:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

### Verwenden Sie kein altes Zeichenkodierungsformat

HTTP-Header sollten von einem Server angegeben werden, einfach sein.

Schlecht:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Gut:

    <meta charset="UTF-8">

### Geben Sie zuerst die Zeichenkodierung an

Spec erfordert, dass die Zeichencodierung innerhalb der ersten 1024 Bytes angegeben wird
das Dokument.

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

### Verwenden Sie UTF-8

Mit UTF-8 können Sie Emoji frei verwenden.

Schlecht:

    <meta charset="Shift_JIS">

Gut:

    <meta charset="UTF-8">

### Lassen Sie das Attribut `type` für CSS weg

In HTML ist der Standardwert des `type`-Attributs des `style`-Elements `text/css`.

Schlecht:

    <style type="text/css">
      ...
    </style>

Gut:

    <style>
      ...
    </style>

### Kommentieren Sie den Inhalt des Elements `style` nicht aus

Dieses Ritual ist für den alten Browser.

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

### Vermische kein Tag für CSS und JavaScript

Manchmal blockiert das `script`-Element die DOM-Konstruktion.

Schlecht:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Gut:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Also Gut:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

## Abschnitte

### Fügen Sie das Element `body` hinzu

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

### Vergessen Sie das `hgroup`-Element

Dieses Element wird nicht sehr oft verwendet.

Schlecht:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Gut:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

### Verwenden Sie das Element `address` nur für Kontaktinformationen

Das Element `address` ist für E-Mail-Adresse, Konto bei sozialen Netzwerken, Adresse,
Telefonnummer oder etwas, mit dem Sie sich in Verbindung setzen können.

Schlecht:

    <address>No rights reserved.</address>

Gut:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

## Inhalte gruppieren

### Beginnen Sie nicht mit einem Zeilenumbruch im `pre`-Element

Ein erster Zeilenumbruch wird in den Browsern ignoriert, aber der zweite und spätere werden gerendert.

Schlecht:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Gut:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

### Verwenden Sie das entsprechende Element im Element `blockquote`.

Der Inhalt des `blockquote`-Elements ist ein Zitat, keine Aneinanderreihung von Zeichen.

Schlecht:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Gut:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

### Fügen Sie die Quellenangabe nicht direkt in das Element `blockquote` ein

Der Inhalt des Elements `blockquote` ist ein Zitat.

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

Also Gut:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>

### Schreiben Sie einen Listenpunkt pro Zeile

Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaang
Zeile ist schwer zuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu lesen

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

### Verwenden Sie das Attribut `type` für das Element `ol`.

Manchmal wird durch den Inhalt in der Nähe auf eine Markierung verwiesen. Wenn Sie die Markierung ändern
Mit dem Attribut `type` können Sie sicher referenzieren.

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

### Verwenden Sie `dl` nicht für Dialoge

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

### Platzieren Sie das Element `figcaption` als erstes oder letztes untergeordnetes Element des Elements `figure`.

Die Spezifikation verbietet das `figcaption`-Element in der Mitte des `figure`-Elements.

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

### Verwenden Sie das `Haupt`-Element

Das `main`-Element kann verwendet werden, um den Inhalt zu umhüllen.

Schlecht:

    <div id="content">
      ...
    </div>

Gut:

    <main>
      ...
    </main>

### Vermeiden Sie das `div`-Element so weit wie möglich

Das `div`-Element ist ein Element der letzten Instanz.

Schlecht:

    <div class="chapter">
      ...
    </div>

Gut:

    <section>
      ...
    </section>

## Semantik auf Textebene

### Teilen Sie nicht denselben Link, der gruppiert werden kann

Das `a`-Element kann fast alle Elemente umschließen (außer interaktiven Elementen wie form
Steuerelemente und `a` Element selbst).

Schlecht:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Gut:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

### Verwenden Sie das Attribut `download`, um eine Ressource herunterzuladen

Es zwingt Browser, verknüpfte Ressourcen in den Speicher herunterzuladen.

Schlecht:

    <a href="/downloads/offline.zip">offline version</a>

Gut:

    <a download href="/downloads/offline.zip">offline version</a>

### Verwenden Sie bei Bedarf die Attribute `rel`, `hreflang` und `type`

Diese Hinweise helfen Anwendungen beim Umgang mit verknüpften Ressourcen.

Schlecht:

    <a href="/ja/pdf">Japanese PDF version</a>

Gut:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

### Linktext löschen

Der Linktext sollte die Bezeichnung der verlinkten Ressource sein.

Schlecht:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Gut:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

### Verwenden Sie das Element „em“ nicht zur Warnung oder Warnung

Das sind Ernsthaftigkeit. Daher ist das `strong` Element angemessener.

Schlecht:

    <em>Caution!</em>

Gut:

    <strong>Caution!</strong>

### Vermeiden Sie die Elemente `s`, `i`, `b` und `u` so weit wie möglich

Die Semantik dieser Elemente ist für Menschen zu schwierig.

Schlecht:

    <i class="icon-search"></i>

Gut:

    <span class="icon-search" aria-hidden="true"></span>

### Setzen Sie keine Anführungszeichen in das `q`-Element

Kurse werden vom Browser bereitgestellt.

Schlecht:

    <q>“For writing maintainable and scalable HTML documents”</q>

Gut:

    <q>For writing maintainable and scalable HTML documents</q>

Also Gut:

    “For writing maintainable and scalable HTML documents”

### Attribut `title` zum Element `abbr` hinzufügen

Es gibt keine andere Möglichkeit, seine Expansion darzustellen.

Schlecht:

    <abbr>HBP</abbr>

Gut:

    <abbr title="HTML Best Practices">HBP</abbr>

### Markieren Sie das `ruby`-Element ausführlich

Die Unterstützung für `ruby`-Elemente ist in den modernen Browsern nicht abgeschlossen.

Schlecht:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Gut:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

### Fügen Sie dem nicht maschinenlesbaren Element `time` das Attribut `datetime` hinzu

Wenn das Attribut `datetime` nicht vorhanden ist, das Format des Elements `time`.
Inhalte sind eingeschränkt.

Schlecht:

    <time>Dec 19, 2014</time>

Gut:

    <time datetime="2014-12-19">Dec 19, 2014</time>

### Geben Sie die Codesprache mit dem Attribut `class` mit dem Präfix `language-` an

Dies ist kein formaler Weg, aber die Spezifikation erwähnt dies.

Schlecht:

    <code>&lt;!DOCTYPE html&gt;</code>

Gut:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

### Halten Sie das `kbd`-Element so einfach wie möglich

Das Verschachteln des `kbd`-Elements ist für Menschen zu schwierig.

Schlecht:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Gut:

    <kbd>Ctrl+F5</kbd>

### Vermeiden Sie das Element `span` so weit wie möglich

Das `span`-Element ist ein Element der letzten Instanz.

Schlecht:

    HTML <span class="best">Best</span> Practices

Gut:

    HTML <em>Best</em> Practices

### Umbruch nach `br`-Element

Ein Zeilenumbruch sollte erforderlich sein, wenn das Element `br` verwendet wird.
Schlecht:

    <p>HTML<br>Best<br>Practices</p>

Gut:

    <p>HTML<br>
    Best<br>
    Practices</p>

### Verwenden Sie das `br`-Element nicht nur zu Präsentationszwecken

Das `br`-Element dient nicht dem Zeilenumbruch, sondern dem Zeilenumbruch im Inhalt.

Schlecht:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Gut:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

## Bearbeitungen

### Überschreiten Sie nicht die Elemente `ins` und `del` über andere Elemente

Elemente können andere Elemente nicht überlaufen lassen.

Schlecht:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Gut:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>

## Eingebetteter Inhalt

### Stellen Sie das Fallback-Element `img` für das Element `picture` bereit

Die Unterstützung des `Bild`-Elements ist noch nicht gut.

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

### Fügen Sie bei Bedarf das Attribut `alt` zum Element `img` hinzu

Das Attribut `alt` hilft denen, die keine Bilder verarbeiten oder Bilder laden können
deaktiviert.

Schlecht:

    <img src="/img/logo.png">

Gut:

    <img alt="HTML Best Practices" src="/img/logo.png">

### Leeres `alt`-Attribut wenn möglich

Wenn das Bild ergänzend ist, gibt es irgendwo in der Nähe äquivalenten Inhalt.

Schlecht:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Gut:

    <img alt="" src="/img/icon/help.png"> Help

### Lassen Sie das Attribut `alt` weg, wenn möglich

Manchmal wissen Sie nicht, welcher Text für das Attribut `alt` geeignet ist.

Schlecht:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Gut:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

### Leeres `iframe`-Element

Inhaltlich gibt es einige Einschränkungen. Leer zu sein ist immer sicher.

Schlecht:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Gut:

    <iframe src="/ads/default.html"></iframe>

### Markieren Sie den Inhalt des `map`-Elements

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

### Bereitstellen von Fallback-Inhalten für `audio`- oder `video`-Elemente

Fallback-Content wird für neu eingeführte Elemente in HTML benötigt.

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

### Schreiben Sie eine Zelle pro Zeile

Lange Zeilen sind schwer zu scannen.

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

### Verwenden Sie das `th`-Element für die Kopfzelle

Es gibt keinen Grund, dies zu vermeiden.

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

## Formen

### Formsteuerelement mit `label`-Element umschließen

Das `label`-Element hilft beim Fokussieren des Formularelements.

Schlecht:

    <p>Query: <input name="q" type="text"></p>

Gut:

    <p><label>Query: <input name="q" type="text"></label></p>

### Lassen Sie das `for`-Attribut wenn möglich weg

Das `label`-Element kann einige Formularelemente enthalten.

Schlecht:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Gut:

    <label>Query: <input name="q" type="text"></label>

### Verwenden Sie das geeignete `type`-Attribut für das `input`-Element

Mit entsprechendem `type` verleiht ein Browser dem `input`-Element winzige Funktionen.

Schlecht:

    <label>Search keyword: <input name="q" type="text"></label>

Gut:

    <label>Search keyword: <input name="q" type="search"></label>

### Attribut `value` zu ​​`input type="submit"` hinzufügen

Die Standardbezeichnung für die Schaltfläche Senden ist nicht im Browser standardisiert und
Sprachen.

Schlecht:

    <input type="submit">

Gut:

    <input type="submit" value="Search">

### Attribut `title` zum `input`-Element hinzufügen, wenn Attribut `pattern` vorhanden ist

Wenn der Eingabetext nicht mit dem Attribut `pattern` übereinstimmt, wird der Wert von `title` angezeigt
Attribut wird als Hinweis angezeigt.

Schlecht:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Gut:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

### Verwenden Sie kein `placeholder`-Attribut für die Beschriftung

Das `label`-Element steht für eine Beschriftung, das `placeholder`-Attribut für einen kurzen Hinweis.

Schlecht:

    <input name="email" placeholder="Email" type="text">

Gut:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

### Schreiben Sie ein `option`-Element pro Zeile

Lange Zeilen sind schwer zu scannen.

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

### Fügen Sie das Attribut `max` zum Element `progress` hinzu

Mit dem Attribut `max` kann das Attribut `value` in einem einfachen Format geschrieben werden.
Schlecht:

    <progress value="0.5"> 50%</progress>

Gut:

    <progress max="100" value="50"> 50%</progress>

### Fügen Sie die Attribute `min` und `max` zum Element `meter` hinzu

Mit `min` und `max` Attribut kann das `value` Attribut einfach geschrieben werden
Format.

Schlecht:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Gut:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

### Platzieren Sie das `legend`-Element als erstes untergeordnetes Element des `fieldset`-Elements

Spec erfordert dies.

Schlecht:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Gut:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

## Skripterstellung

### Lassen Sie das `type`-Attribut für JavaScript weg

In HTML ist der Standardwert des Attributs `type` des Elements `script`
`text/javascript`.

Schlecht:

    <script type="text/javascript">
      ...
    </script>

Gut:

    <script>
      ...
    </script>

### Inhalt des `script`-Elements nicht auskommentieren

Dieses Ritual ist für den alten Browser.

Schlecht:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Also Schlecht:

    <script>
    <!--
      ...
    // -->
    </script>

Gut:

    <script>
      ...
    </script>

### Verwenden Sie kein Skript-injiziertes `script`-Element

Das Attribut `async` ist das Beste für Einfachheit und Leistung.

Schlecht:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Gut:

    <script async defer src="https://example.com/widget.js"></script>

## Andere

### Konsequent einrücken

Die Einrückung ist wichtig für die Lesbarkeit.

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

### Absoluten Pfad für interne Links verwenden

Ein absoluter Pfad funktioniert besser auf Ihrem Localhost ohne Internetverbindung.

Schlecht:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Gut:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

### Verwenden Sie keine protokollrelative URL für externe Ressourcen

Mit dem Protokoll können Sie externe Ressourcen zuverlässig und sicher laden.

Schlecht:

    <script src="//example.com/js/library.js">

Gut:

    <script src="https://example.com/js/library.js">




## Contributors

- [@hail2u_](https://github.com/hail2u_)
- [@momdo](https://github.com/momdo)


## Translators

- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@mrcaidev](https://github.com/mrcaidev)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
