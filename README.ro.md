Translations: [English (en)](README.md) · [বাংলা (bn)](README.bn.md) · [Dansk (da)](README.da.md) · [Deutsch (de)](README.de.md) · [Español (es)](README.es.md) · [Français (fr)](README.fr.md) · [Indonesia (id)](README.id.md) · [日本語 (ja)](README.ja.md) · [한국어 (ko)](README.ko.md) · [Português (BR) (pt-BR)](README.pt-BR.md) · [Română (ro)](README.ro.md) · [Русский (ru)](README.ru.md) · [Türkçe (tr)](README.tr.md) · [Українська (uk)](README.uk.md) · [Tiếng Việt (vi)](README.vi.md) · [简体中文 (zh-CN)](README.zh-CN.md) · [正體中文 (zh-TW)](README.zh-TW.md)

# Bune practici în HTML

Pentru o scriere scalabilă și ușoară de întreținut în HTML


## Generalitați


### Începe cu DOCTYPE

DOCTYPE este necesar pentru a activa modul "no-quirks".

Greșit:

    <html>
      ...
    </html>

Corect:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Nu folosiți expresii învechite DOCTYPE

DOCTYPE nu mai este un DTD (Document Type Definition).

Greșit:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Corect:

    <!DOCTYPE html>


### Nu folosiți declarații XML

Ești sigur că vrei să scrii XHTML?

Greșit:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Corect:

    <!DOCTYPE html>


### Nu folosiți caractere de referință

Dacă scrii un document HTML în UTF-8, aproape toate caracterele (inclusiv
Emoji) pot fi scrise direct.

Greșit:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Corect:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Nu folosiți `&`, `<`, `>`, `"`, și `'`, folosiți caractere de referință

Pentru evitarea erorilor în HTML, aceste caractere nu trebuie folosite.

Greșit:

    <h1>The "&" character</h1>

Corect:

    <h1>The &quot;&amp;&quot; character</h1>


### Folosiți caractere de referință numerice, pentru caracterele invizibile sau de control

Aceste caractere sunt ușor de confundat cu alte caractere. De asemenea specificațiile
nu garantează să definească un limbaj uman pentru aceste caractere.

Greșit:

    <p>This book can read in 1 hour.</p>

Corect:

    <p>This book can read in 1&#xA0;hour.</p>


### Lasă spații libere înainte și după comenturi

Unele caractere nu pot fi folosite imediat după începutul și sfârșitul comentului.


Greșit:

    <!--This section is non-normative-->

Corect:

    <!-- This section is non-normative -->


### Nu omiteți închiderea tag-ului

E posibil să nu înțelegi regula dacă uitați să închideți tag-ul.

Greșit:

    <html>
      <body>
        ...

Corect:

    <html>
      <body>
        ...
      </body>
    </html>


### Păstrează același tip de format pentru elementele deschise

Consistența este cheia lizibilității.

Greșit:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Corect:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Nu lăsa spații libere în jurul tag-urilor sau valorilor atributelor

Nu există vreun motiv pentru a lăsa aceste spații.

Greșit:

    <h1 class=" title " >HTML Best Practices</h1>

Corect:

    <h1 class="title">HTML Best Practices</h1>


### Nu amesteca tipul de caractere


Oferă consistență.

Greșit:

    <a HREF="#general">General</A>

Corect:

    <a href="#general">General</a>

De asemenea corect, dar de preferat varianta de mai sus:

    <A HREF="#general">General</A>


### Nu amesteca semnele de apostrof

La fel ca mai sus.

Greșit:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Corect:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Nu despărții atributele prin două sau mai multe spații libere

Formatarea atipică poate crea confuzie celorlalți.

Greșit:

    <input   name="q"  type="search">

Corect:

    <input name="q" type="search">


### Omite atributele cu valoare booleană

Este mult mai ușor de scris.

Greșit:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Corect:

    <audio autoplay src="/audio/theme.mp3">


### Omite "namespaces"

SVG și MathML pot fi folosite direct in HTML.

Greșit:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Corect:

    <svg>
      ...
    </svg>


### Nu folosiți atribute XML

Scriem un document HTML.

Greșit:

    <span lang="ja" xml:lang="ja">...</span>

Corect:

    <span lang="ja">...</span>


### Nu amesteca atributele de tip `data-*`, `Microdata` și `RDFa Lite` cu atributele comune

Șirul de atribute din `tag` poate fi foarte complicat. Aceasta simplă regulă poate duce la
o citire mult mai ușoară a șirului.

Greșit:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Corect:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Folosiți semantica implicită ARIA

Unele elemente au un ARIA `role` implicit, nu îl specifica din nou.

Greșit:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Corect:

    <nav>
      ...
    </nav>

    <hr>


## Elementul `root`


### Adaugă atributul `lang`

Atributul `lang` va ajuta la traducerea documentului HTML.

Greșit:

    <html>

Corect:

    <html lang="en-US">


### Folosiți valoarea cât mai scurtă a atributului `lang`

Limba Japoneză este folosită doar în Japonia, de aceea codul țării nu este necesar.

Greșit:

    <html lang="ja-JP">

Corect:

    <html lang="ja">


### Evită pe cât de mult posibil atributele de tip `data-*`

Un atribut adecvat poate fi gestionat corect de către browser.

Greșit:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Corect:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadatele documentului


### Adaugă elementul `title`

Valoarea elementului `title` este folosit de diverse aplicații, nu numai de browser.

Greșit:

    <head>
      <meta charset="UTF-8">
    </head>

Corect:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Nu folosiți elementul `base`

O cale de tip absolut sau URL este mult mai sigură atât pentru developer cât și pentru user.

Greșit:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Corect:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Specifică atașamentelor, tipul de resursă `MIME` (Media Type)

Acesta oferă un indiciu aplicației în a gestiona resursa.

Greșit:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Corect:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Nu face legatura cu `favicon.ico`

Aproape toate browserele preiau `/favicon.ico` automat și asincron.

Greșit:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Corect:

    <!-- Place `favicon.ico` in the root directory. -->


### Adaugă `apple-touch-icon`

Valoarea implicită a căii pentru `touch icon` a fost schimbată.

Greșit:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Corect:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Pentru stylesheet-uri alternative, adaugă atributul `title`

Eticheta poate ajuta userul la selectarea stylesheet-ului corespunzător.

Greșit:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Corect:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Pentru URL-uri, folosiți elementul `link`

O valoarea a atributului `href` poate fi rezolvată ca URL.

Greșit:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Corect:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Specifică tipul de codificare a caracterelor

UTF-8 nu este încă folosit ca valoare inițială de toate browserele.

Greșit:

    <head>
      <title>HTML Best Practices</title>
    </head>

Corect:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Nu folosiți formate învechite de codificare a caracterelor

Header-ul HTTP ar trebui specificat de un server.

Greșit:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Corect:

    <meta charset="UTF-8">


### Declarați mai intăi tipul de codificare al caracterlor

Conform specificațiilor este necesară declararea tipului de codificare a caracterelor în primi
1024 biți ai documentului.


Greșit:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Corect:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Folosiți UTF-8

Cu UTF-8, sunteți liber să utilizați Emoji.

Greșit:

    <meta charset="Shift_JIS">

Corect:

    <meta charset="UTF-8">


### Omite atributul `type` pentru CSS

În HTML, valoarea inițială a atributului `type` pentru elementele de tip `style` sunt în format `text/css`

Greșit:

    <style type="text/css">
      ...
    </style>

Corect:

    <style>
      ...
    </style>


### Nu comentați conținutul elementului „style”.

Acestă practică este pentru versiuni mai vechi de browsere.

Greșit:

    <style>
    <!--
      ...
      -->
    </style>

Corect:

    <style>
      ...
    </style>


### Nu amesteca tag-urile de CSS cu cele de Javascript

Uneori elementele `script` blochează construcția DOM-ului.

Greșit:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Corect:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

De asemenea corect:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Secțiuni


### Adaugă elementul `body`

Uneori elementul `body` dacă nu este declarat, este complementat automat de către browser în zone neașteptate.

Greșit:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Corect:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


###  Nu folosiți elementul `hgroup`

Acest element nu se mai folosește.

Greșit:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Corect:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Folosiți elementul `address` doar pentru informațiile de contact

Elementul `address` se folosește doar pentru adresa de e-mail, conturile sociale,
adresă, număr de telefon, sau orice altă informație referitoare la contact.

Greșit:

    <address>No rights reserved.</address>

Corect:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Gruparea conținutului


### Nu începe cu un rând gol în elementul `pre`

Un rând nou liber va fi complet ignorat de către browser.

Greșit:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Corect:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Folosiți elemente corespunzătoare în interiorul elementului `blockquote`

Conținutul elementului `blockquote` este un citat, nu un grup de caractere.

Greșit:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Corect:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Nu includeți atribuirea, direct în elementul `blockquote`

Conținutul elementului `blockquote` este un citat.

Greșit:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Corect:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

De asemenea corect:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Declară doar un obiect (item) din listă per rând

Rândurile luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuungi
sunt greuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu de citit.

Greșit:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Corect:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Pentru elementel `ol` folosiți atributul `type`

Sometimes marker referenced by the contents in the near. If you change marker
with `type` attribute, you will be safe to reference.

Greșit:

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

Corect:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Nu folosiți `dl` pentru dialoguri

Elementul `dl` este folosit în HTML doar pentru asocierea listelor.

Greșit:

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

Corect:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Declară elementul `figcaption` ca fiind primul sau ultimul descendent din elementul `figure`

Specificațiile interzic folosirea elementului `figcaption` în mijlocul elementului `figure`.


Greșit:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Corect:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Folosiți elementul `main`

Elementul `main` poate fi folosit pentru a înfășura conținutul.

Greșit:

    <div id="content">
      ...
    </div>

Corect:

    <main>
      ...
    </main>


### Evitați cât mai mult posibil elementul `div`

Elementul `div` este un element de ultimă instanță.


Greșit:

    <div class="chapter">
      ...
    </div>

Corect:

    <section>
      ...
    </section>


## Semantică la nivel de text


### Nu împărți același link dacă se poate grupa

Elementul `a` poate înfășura aproape toate elementele (mai puțin elementele interactive
cum ar fi `form controls` și însuși elementul `a`).

Greșit:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Corect:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Folosiți atributul `download` pentru a descărca o resursă

Va forța browserul să descarce resursa în locația dorită.

Greșit:

    <a href="/downloads/offline.zip">offline version</a>

Corect:

    <a download href="/downloads/offline.zip">offline version</a>


### Folosiți atributele `rel`, `hreflang` și `type`  dacă este necesar

Aceste indicii ajută aplicațiile să gestioneze resursele.

Greșit:

    <a href="/ja/pdf">Japanese PDF version</a>

Corect:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Textul link-ului trebuie să fie concis / clar

Textul link-ului trebuie să fie eticheta resursei asociate.

Greșit:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Corect:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### Nu folosiți elementul `em` pentru avertizare sau atenționare

În acest caz elementul `strong` este mult mai potrivit.


Greșit:

    <em>Caution!</em>

Corect:

    <strong>Caution!</strong>


### Evită folosirea elementelor `s`, `i`, `b` și `u` pe cât posibil

Nu au o semantică bună.

Greșit:

    <i class="icon-search"></i>

Corect:

    <span class="icon-search" aria-hidden="true"></span>


### Nu cita elementul `q`

Ghilimelele sunt furnizate de către browser.

Greșit:

    <q>“For writing maintainable and scalable HTML documents”</q>

Corect:

    <q>For writing maintainable and scalable HTML documents</q>

De asemenea corect:

    “For writing maintainable and scalable HTML documents”


### Adăugați elementului `abbr` atributul `title`

Nu există o altă modalitate de a vedea expansiunea abrevierii.

Greșit:

    <abbr>HBP</abbr>

Corect:

    <abbr title="HTML Best Practices">HBP</abbr>

### Marcați în mod verbos elementul `ruby`

Suportul pentru elementul `ruby` nu este finalizat în browserele moderne.

Greșit:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Corect:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Adăugați elementului `time` atributul `datetime`


Dacă atributul `datetime` nu este prezent, accestul la formatul elementului `time`
este restricționat.

Greșit:

    <time>Dec 19, 2014</time>

Corect:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Specificați limbajul codului cu atributul `class` având ca prefix `language-`

Aceasta nu este o modalitate formală, dar specificațiile menționează acest lucru.

Greșit:

    <code>&lt;!DOCTYPE html&gt;</code>

Corect:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Păstrați elementul `kbd` cât mai simplu posibil

Nestarea multiplă a acestuia îngreunează citirea.

Greșit:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### Evitați cât mai mult posibil elementul `span`

Elementul `span` este un element de ultimă instanță.

Greșit:

    HTML <span class="best">Best</span> Practices

Corect:

    HTML <em>Best</em> Practices


### Rând nou după elementul `br`

Este necesar saltul la un rând nou după folosirea elementului `br`.

Greșit:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Nu utilizați elementul `br` doar în scop de prezentare

Elementul `br` se folosește la întreruperile de linie din conținut.

Greșit:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Corect:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Editări

### Nu săriți cu elementele `ins` și `del` peste alte elemente

Elementele nu pot sări peste alte elemente.

Greșit:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Corect:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Conținut `Embedded`


### Pentru elementul `picture` furnizați întotdeauna ca element de rezervă `img`

Suportul pentru elementul `picture` nu este încă foarte bun.

Greșit:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Corect:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Adăugați atributul `alt` la elementul `img` dacă este necesar

Atributul `alt` oferă informații text adiționale în caz ca imaginile nu pot fi accesate
sau este dezactivată încărcarea acestora.

Greșit:

    <img src="/img/logo.png">

Corect:

    <img alt="HTML Best Practices" src="/img/logo.png">


### Omite conținutul atributului `alt` atunci când este cazul

Dacă imaginea este suplimentară și există conținut echivalent undeva în apropiere.

Greșit:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Corect:

    <img alt="" src="/img/icon/help.png"> Help


### Omite atributul `alt` dacă este posibil

Uneori nu știți ce text este potrivit pentru atributul `alt`.

Greșit:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Corect:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### Elementul `iframe` deschis

Există anumite restricții în conținutul său. A fi gol este întotdeauna în siguranță.

Greșit:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Corect:

    <iframe src="/ads/default.html"></iframe>


### Marcați conținutul elementului `map`.

Conținutul acestuia este prezentat de către un cititor de ecran.

Greșit:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Corect:

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


### Furnizați conținut alternativ pentru elementul `audio` sau `video`

Conținutul de rezervă este necesar pentru noile elementele introduse în HTML.

Greșit:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Corect:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Date tabulare


### Scrieți doar câte o celulă a tabelului pe fiecare rând

Randurile lungi sunt greu de urmărit.

Greșit:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Corect:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Utilizați elementul `th` pentru antetul celulei

Nu există vreun motiv să nu faci acest lucru.

Greșit:

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

Corect:

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


## Form

### Înfășoară `form control` cu elementul `label`

Elementul `label` ajută la focalizarea elementului de formular.

Greșit:

    <p>Query: <input name="q" type="text"></p>

Corect:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omite atributul `for` dacă este posibil

Elementul `label` poate conține un tip de formă.

Greșit:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Corect:

    <label>Query: <input name="q" type="text"></label>


### Utilizați atributul `type` adecvat pentru elementul `input`

Prin folosirea atributului `type` adecvat, browserul ofera niște caracteristici elementului `input`

Greșit:

    <label>Search keyword: <input name="q" type="text"></label>

Corect:

    <label>Search keyword: <input name="q" type="search"></label>


### Adăugați atributul `value` la `input type="submit"`

Valoarea implicita a `label-ului` pentru butonul `submit` nu este standardizat
în rândul browserelor și limbajelor.

Greșit:

    <input type="submit">

Corect:

    <input type="submit" value="Search">


### Adăugați atributul `title` la elementul `input` atunci când există atributul `pattern`

Dacă textul introdus nu se potrivește cu atributul `pattern`, valoarea atributului `title`
va fi afișat ca indiciu.

Greșit:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Corect:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Nu folosiți atributul `placeholder` pentru etichetare

Elementul `label` este folosit pentru etichetare, iar elementul `placeholder` este folosit drept scurt indiciu.

Greșit:

    <input name="email" placeholder="Email" type="text">

Corect:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Scrieți câte un element `option` per rând.

Rândurile lungi sunt greu de scanat.


Greșit:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Corect:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Adăugați atributul `max` la elementul `progress`

Cu atributul `max`, atributul `value` poate fi scris într-un format simplu.

Greșit:

    <progress value="0.5"> 50%</progress>

Corect:

    <progress max="100" value="50"> 50%</progress>


### Adăugați atributele `min` și `max` la elementul `meter`

Cu atributele `min` și `max`, atributul `value` poate fi scris într-un format ușor.


Greșit:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Corect:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Plasați elementul `legend` ca prim descendent al elementului `fieldset`

Specificațiile cer acest lucru.

Greșit:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Corect:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scriptare


### Omite atributul `type` pentru Javascript

În HTML, valoarea inițială a atributului `type` pentru elementul `script` este `text/javascript`.

Greșit:

    <script type="text/javascript">
      ...
    </script>

Corect:

    <script>
      ...
    </script>


### Nu comentați conținutul elementului `script`

Acestă practică este pentru versiuni mai vechi de browsere.

Greșit:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

De asemenea greșit:

    <script>
    <!--
      ...
    // -->
    </script>

Corect:

    <script>
      ...
    </script>


### Nu folosi "script-injected" în elementul `script`

Atributul `async` este cel mai bun atât pentru simplitate, cât și pentru performanță.

Greșit:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Corect:

    <script async defer src="https://example.com/widget.js"></script>


## Alte


### Indentează în mod constant

Indentarea este importantă pentru lizibilitate.

Greșit:

    <html>
	<head>
	  ...
	</head>
      <body>
        ...
      </body>
    </html>

Corect:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Pentru linkurile interne folosiți căi absolute

O cale absolută funcționează mai bine pe localhost fără conexiune la internet.

Greșit:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Corect:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


###  Nu folosiți adrese protocol relative URL pentru resurse externe


Prin protocol puteți încărca resurse externe în mod fiabil și în siguranță.

Greșit:

    <script src="//example.com/js/library.js">

Corect:

    <script src="https://example.com/js/library.js">




## Contribuitori

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## Traducători

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


## Licență

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
