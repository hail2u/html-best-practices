Translations: [English (en)](README.md) · [বাংলা (bn)](README.bn.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português (BR) (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Українська (uk)](README.uk.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [正體中文 (zh-TW)](README.zh-TW.md)

# HTML Best Practices

For writing maintainable and scalable HTML documents


## General


### Start with DOCTYPE

DOCTYPE er påkrævet for at aktivere no-quirks mode.

Dårligt:

    <html>
      ...
    </html>

Godt:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Undgå forældet DOCTYPE

DOCTYPE bruges ikke længere til DTD. Gør det simpelt!

Dårligt:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Godt:

    <!DOCTYPE html>


### Undgå at deklarere XML Declaration

Are you sure you want to write XHTML?

Dårligt:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Godt:

    <!DOCTYPE html>


### Undgå for så vidt muligt at referere til karakterer med HTML

Hvis du skriver et HTML dokument med UTF-8 encoding, vil næsten alle karakterer (Emojis inkluderet) kunne anvendes direkte

Dårligt:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Godt:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Escape `&`, `<`, `>`, `"`, og `'` med navngivne referencer til karakterer

Disse karakterer bær altid "escapes" (med tilsvarende HTML) for at sikre HTML uden bugs.

Dårligt:

    <h1>The "&" character</h1>

Godt:

    <h1>The &quot;&amp;&quot; character</h1>


### Anvend numeriske karakterreferencer til kontrol- eller "usynlige" karakterer

Disse karakterer er ofte nemt forvekslet med andre karakterer. Endvidere, HTML specifikationen garanterer ikke en menneskevenlig definition for disse karakterer

Dårligt:

    <p>This book can read in 1 hour.</p>

Godt:

    <p>This book can read in 1&#xA0;hour.</p>


### Tilføj mellemrum før og efter kommentarindhold

Nogle karakterer kan ikke anvendes som første og sidste karakter i en HTML kommentar.

Dårligt:

    <!--This section is non-normative-->

Godt:

    <!-- This section is non-normative -->


### Husk at lukke ethvert HTML-element med et "lukke-tag"

Ethvert HTML-element skal lukkes korrekt for at sikre læsbarhed

Dårligt:

    <html>
      <body>
        ...

Godt:

    <html>
      <body>
        ...
      </body>
    </html>


### Husk at lukke "tomme" HTML-elementer

Sikrer læsbarhed.

Dårligt:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Godt:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Undgå overflødige mellemrum i HTML-elementers tags og værdier

Det er der ikke nogen grund til.

Dårligt:

    <h1 class=" title " >HTML Best Practices</h1>

Godt:

    <h1 class="title">HTML Best Practices</h1>


### Undgå at blande store og små bogstaver

Sikrer konsistens

Dårligt:

    <a HREF="#general">General</A>

Godt:

    <a href="#general">General</a>

OgsågGodt:

    <A HREF="#general">General</A>


### Undgå at blande typer af anførselstegn

Samme som ovenfor

Dårligt:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Godt:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Undgå at separere attributter med to eller flere mellemrum

Dårligt:

    <input   name="q"  type="search">

Godt:

    <input name="q" type="search">


### Undlad booleansk attributværdier

Det er møj' nemmere blot at skrive attributtens key, såfremt den er sand.

Dårligt:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Godt:

    <audio autoplay src="/audio/theme.mp3">


### Undlad namespaces

SVG and MathML kan anvendes direkte i et HTML dokument.

Dårligt:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Godt:

    <svg>
      ...
    </svg>


### Undgå at bruge XML-attributter

Det er HTML vi skriver!

Dårligt:

    <span lang="ja" xml:lang="ja">...</span>

Godt:

    <span lang="ja">...</span>


### Undgå at blande `data-*`, Microdata og RDFa Lite attributter med gængse attributter

for at sikre læsbarhed, bør de ovennævnte attribut-typer grupperes for sig.

Dårligt:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Godt:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Foretræk at anvende den implicitte standard-semantik

Nogle elementer har en implicit ARIA `role`-attribut. Undlad at specificere dem unødigt.

Dårligt:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Godt:

    <nav>
      ...
    </nav>

    <hr>


## root-elementet


### Tilføj `lang`-attribut

`lang` attributten hjælper med at oversætte et HTML-dokument.

Dårligt:

    <html>

Godt:

    <html lang="da-DK">


### Hold `lang` attributten så kort som mulig

Dansk er ofte kun brugt i Danmark. Landekoden er derfor ikke nødvendig.

Dårligt:

    <html lang="da-DK">

Godt:

    <html lang="da">


### Undgå `data-*` attributter i videst muligt omfang

En passende attribut håndteres bedre af browseren

Dårligt:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Godt:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Document metadata


### Tilføj `title`-element

Et `title`-element bruges af adskillige applikationer - ikke kun browseren.

Dårligt:

    <head>
      <meta charset="UTF-8">
    </head>

Godt:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Undgå `base`-element

En absolut sti eller URL er mere sikker for både udviklere og brugere

Dårligt:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Godt:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Specificer MIME-type af linket indhold

Dette giver applikationen eller browser et hint om hvad det linkede indholds type er

Dårligt:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Godt:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Undgå at linke til `favicon.ico`

Stortset alle browsere henter automatisk `/favicon.ico` asynkront.

Dårligt:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Godt:

    <!-- Placer `favicon.ico` i serverens rod. -->


### Tilføj [`apple-touch-icon`](https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/) link

Standard-stien for request af touch icon blev ændret efter iOS 8, og Safari henter ikke automatisk fra den gamle standard-sti i roden af et website.

Dårligt:

    <!-- Hey Apple! Please download `/apple-touch-icon-precomposed.png`! -->

Godt:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Tilføj `title`-attribut til alternative stylesheets

En label der er læselig for mennesker hjælper bla. folk med fx synshandicap til at vælge et passende stylesheet.

Dårligt:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Godt:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### For en URL, anvend `link`-element

En værdi af en `href`-attibut læses som en URL

Dårligt:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Godt:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Specificer et dokuments character encoding

UTF-8 er ikke standarden i alle browsere (endnu).

Dårligt:

    <head>
      <title>HTML Best Practices</title>
    </head>

Godt:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Undgå at ancende forældede character encoding formater

HTTP-headers bør specificeres af serveren.

Dårligt:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Godt:

    <meta charset="UTF-8">


### Specificer character encoding som det første

Specifikationen forventer, at character encoding specificeres inden for de første 1024 bytes af dokumentet

Dårligt:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Godt:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Brug UTF-8 😎

Med UTF-8, kan du frit bruge emojis.

Dårligt:

    <meta charset="Shift_JIS">

Godt:

    <meta charset="UTF-8">


### Undlad unødvendig `type`-attribut for CSS

I HTML er standardværdien af `type` attributten `text/css`.

Dårligt:

    <style type="text/css">
      ...
    </style>

Godt:

    <style>
      ...
    </style>


### Undlad at udkommentere `style` element

Dette er "gammel strøm" der stammer fra gamle browsere

Dårligt:

    <style>
    <!--
      ...
      -->
    </style>

Godt:

    <style>
      ...
    </style>


### Undlad at blande tags for CSS og JavaScript

I særlige tilfælde vil `script`-elementer blokere for konstruktionen af DOM.

Dårligt:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Godt:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Også Godt:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections


### Tilføj `body` element

Af og til vil `body` elementet blive suppleret uventet af en browser.

Dårligt:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Godt:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Glem alt om `hgroup`-elementet

Dette element bruges ikke særlig ofte.

Dårligt:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Godt:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Brug kun `address`-elementet til kontaktinformation

`address`-element er til email-adresser, social media konti, fysisk addresse, telefonnummer eller noget der kan bruges til at kontakte med

Dårligt:

    <address>No rights reserved.</address>

Godt:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Indholdsgruppering


### Undlad at starte ned et linjeskift (newline) i et `pre`-element

Det første linjeskift bliver ignoreret i browseren, men andet og senere linjer bliver anvendt.

Dårligt:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Godt:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Brug passende element i et `blockquote` element

`blockquote`-elementers indhold forventes at være et citat. Ikke blot en bunke karakterer.

Dårligt:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Godt:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Undlad at inkludere citatets ophavsperson direkte i `blockquote` element

`blockquote`-elementets indhold er blot et citat

Dårligt:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Godt:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Også Godt:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Skriv elementer i en liste på hver sin linje

Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaannnnnnnnnnnnnnnnnnnnge
linjer er svære at lææææææææææææææææææææææææææææææææææææææææææææææææse

Dårligt:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Godt:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Brug `type`-attribut for `ol`-elementer

Brug `type`-attributten til at bestemme hvilken type markering hver linje i en liste skal anvende, for at sikre fremtidige referencer.

Dårligt:

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

Godt:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Undgå at bruge `dl` til dialog

`dl`-element er begrænset til association list i HTML.

Dårligt:

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

Godt:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Placer `figcaption` element som det første eller sidste child af et `figure` element

HTML specifikationen foryder at placere `figcaption`inden i et `figure` element.

Dårligt:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Godt:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Brug `main` element

`main` elementet ckan bruges til at omslutte det generelle indhold.

Dårligt:

    <div id="content">
      ...
    </div>

Godt:

    <main>
      ...
    </main>


### Undgå `div` element i videst muligt omfang

`div` elementet er en sidste udvej

Dårligt:

    <div class="chapter">
      ...
    </div>

Godt:

    <section>
      ...
    </section>


## Text-level semantik


### Undgå at splitte det samme link som kan grupperes

`a` elementer kan omkranse næsten alle elementer (undtagen interaktive elementer som en form-kontrol eller et andet `a` element) .

Dårligt:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Godt:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Brug `download`-attribut hvis der kan downloades en resource

Det tvinger browseren til at downloade en linked sti til enhedens lager

Dårligt:

    <a href="/downloads/offline.zip">offline version</a>

Godt:

    <a download href="/downloads/offline.zip">offline version</a>


### Brug `rel`, `hreflang`, og `type` attributter hvis nødvendigt

Disse hints hjælper apps med at håndtere en linked resurse

Dårligt:

    <a href="/ja/pdf">Japanese PDF version</a>

Godt:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Link tekst skal være til at gennemskue

Label til et link bør beskrive hvad der linkes til.

Dårligt:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Godt:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Undgå at bruge `em` elementer til en advarsel

Disse omhandler vigtighed og seriøsitet. Derfor er et `strong` element mere passende

Dårligt:

    <em>Caution!</em>

Godt:

    <strong>Caution!</strong>


### Undgå `s`, `i`, `b`, and `u` elementer i videst muligt omfang

disse elementers semantik er for vanskelige at læse for mennesker (udviklere)

Dårligt:

    <i class="icon-search"></i>

Godt:

    <span class="icon-search" aria-hidden="true"></span>


### Undlad at tilføje anførselstegn til et `q` element

Anførselstegn bliver tilføjet af browseren.

Dårligt:

    <q>“For writing maintainable and scalable HTML documents”</q>

Godt:

    <q>For writing maintainable and scalable HTML documents</q>

Også Godt:

    “For writing maintainable and scalable HTML documents”


### tilføj `title` attribut til `abbr` element

Der er ikke nogen anden måde at repræsentere dens udvidelse

Dårligt:

    <abbr>HBP</abbr>

Godt:

    <abbr title="HTML Best Practices">HBP</abbr>


### Skriv `ruby` element helt ud

`ruby` element er ikke understøttet på tværs af moderne browsere.

Dårligt:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Godt:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Tilføj `datetime` attribut to ikke-maskin-læseligt `time` element

når `datetime` attribut ikke eksisterer, er formatet af `time` elementets indhold begrænset

Dårligt:

    <time>Dec 19, 2014</time>

Godt:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Udspecificer kodesprog med `class` attribut, anført med `language-`

Dette er ikke en formel måde, men spec nævner det.

Dårligt:

    <code>&lt;!DOCTYPE html&gt;</code>

Godt:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Hold `kbd` element så simpelt som muligt

Indlejring af `kbd` elementer i rekursive niveauer er for svært for mennesker at læse

Dårligt:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Godt:

    <kbd>Ctrl+F5</kbd>


### Undgå `span` elementet i videst muligt omfang

`span` element er en sidste udvej.

Dårligt:

    HTML <span class="best">Best</span> Practices

Godt:

    HTML <em>Best</em> Practices


### Linjeskift efter `br` element

Linjeskift bør tilføjes når der anvendes et `br` element. Læsbarhed.

Dårligt:

    <p>HTML<br>Best<br>Practices</p>

Godt:

    <p>HTML<br/>
    Best<br/>
    Practices</p>


### Brug ikke `br` element kun af præsentationsmæssige årsager

`br` elementet er ikke til linjeskift af synsmæssige årsager, men til at lave ophold i indhold.

Dårligt:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Godt:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Redaktionelle overvejelser


### Undlad `ins` og `del` elementer på tværs af andre elementer

Elementet kan ikke strække sig til andre elementer.

Dårligt:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Godt:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Embedded (indlejret) indhold


### Angiv et `img` element der kan faldes tilbage på for `picture` element

Understøttelsen af `picture` element er ikke gennemført endnu.

Dårligt:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Godt:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Tilføj `alt` attribut til `img` element hvis nødvendigt

`alt` attribut helps those who cannot process images or have image loading disabled.
`alt` attribut hjælper dem der ikke kan processere billedindhold eller har hentning af billedindhold slået fra.

Dårligt:

    <img src="/img/logo.png">

Godt:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Undgå overflødig `alt` attribut

Hvis billedet blot supplementerer indholdet, kan ekvivalent indhold findes i nærdheden af billedet. Anvendes fx for screenreaders af tilgængelighedshensyn (synshandicap.)

Dårligt:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Godt:

    <img alt="" src="/img/icon/help.png"> Help


### Undgå `alt` attribut hvis muligt

Af og til vides det korrekte indhold til en `alt` attribut ikke.

Dårligt:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Godt:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (Hvis du ikke kan se billedet, kan du bruge en <a href="?audio">audio</a> test istedet.)


### tomt `iframe` element

Der er nogle begrænsninger i indholdet af en `iframe`. Det er altid sikkert at lade denne være tom.

Dårligt:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Godt:

    <iframe src="/ads/default.html"></iframe>


### Opmærk indhold i `map` element

Dette indhold bliver præsenteret for en screen reader (skærmlæser, for folk med synshandicap)

Dårligt:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Godt:

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


### Angiv indhold at falde tilbage på for `audio` og `video` elementer

Indhold der kan faldes tilbage på sikrer bagudkompatibilitet for indholdstyper der for nyligt er tilføjet til HTML.

Dårligt:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Godt:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Data på tabelform


### Skriv en celle per linje

Lange linjer er svære at læse og overskue.

Dårligt:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Godt:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Brug `th` elementet til et beskrivende tebelhoved

Dette bør ikke undlades

Dårligt:

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

Godt:

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


## Formularer


### Omkrans form controls med `label` element

`label` elementet hjælper brugeren med at fokusere på elementet

Dårligt:

    <p>Query: <input name="q" type="text"></p>

Godt:

    <p><label>Query: <input name="q" type="text"></label></p>


### Undlad `for` attribut hvis muligt

`label` element can contain some form elements.

Dårligt:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Godt:

    <label>Query: <input name="q" type="text"></label>


### Brug passende `type` attribut til `input` element

Med passende `type`, giver browseren relevante features til `input` elementer.

Dårligt:

    <label>Search keyword: <input name="q" type="text"></label>

Godt:

    <label>Search keyword: <input name="q" type="search"></label>


### Tilføj `value` attribut til `input type="submit"`

Standardlabel for en submit-knap er ikke standardiseret på tværs af browsere og sprog.

Dårligt:

    <input type="submit">

Godt:

    <input type="submit" value="Søg">


### tilføj `title` attribut til `input` element når der er en `pattern` attribut

Hvis input tekst ikke stemmer overens med `pattern` attribut, skal værdien af en `title` attribut vises som et hint.

Dårligt:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Godt:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Undlad at bruge `placeholder` attribut som etiket

`label` element anvendes til etiketter, `placeholder` attribut er til et kort hint.

Dårligt:

    <input name="email" placeholder="Email" type="text">

Godt:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Skriv én `option` element per line

Lange linjer er svære at overskue.

Dårligt:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Godt:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Tilføj `max` attribut til `progress` element

Med `max` attribut, kan `value` attributten blive skrevet i et nemt og mere passende format.

Dårligt:

    <progress value="0.5"> 50%</progress>

Godt:

    <progress max="100" value="50"> 50%</progress>


### Tilføj `min` and `max` attribut til `meter` element

Med `min` and `max` attributterne, kan `value` attributterne blive skrevet i et nemt og mere passende format.

Dårligt:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Godt:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Placer `legend` element som det første element af et `fieldset` element

Dårligt:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Godt:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scripting


### Undlad `type` attribut for JavaScript

I HTML er standardværdien af en `type` attribut i et `script` element
`text/javascript`.

Dårligt:

    <script type="text/javascript">
      ...
    </script>

Godt:

    <script>
      ...
    </script>


### Undlad at udkommentere indhold af et `script` element

Dette er gammel strøm fra gamle browsere

Dårligt:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Also Dårligt:

    <script>
    <!--
      ...
    // -->
    </script>

Godt:

    <script>
      ...
    </script>


### Don’t use script-injected `script` element
### Undlad at bruge script-injected `script` element

`async` attribut er det bedste for både simplicitet of performance.

Dårligt:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Godt:

    <script async defer src="https://example.com/widget.js"></script>


## Other


### Konsistens med indentering

Korrekt indentering er vigtig for læsbarhed.

Dårligt:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Godt:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Anvend absolut sti til interne links

En absolut sti virker bedre på en lokal maskine uden internetforbindelse.

Dårligt:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Godt:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Undlad at anvende protokol-relative URL til eksterne resurser

Med den korrekte protokol kan man loade eksterne resurser pålideligt og sikkert.

Dårligt:

    <script src="//example.com/js/library.js">

Godt:

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
