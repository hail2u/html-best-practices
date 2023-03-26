Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md) · [فارسی](README.fa-IR.md)

# Meilleures pratiques HTML

Pour rédiger des documents HTML maintenables et extensibles.


## General


### Commencez avec DOCTYPE

DOCTYPE est nécessaire pour activer le mode standard

Mal :

    <html>
      ...
    </html>

Bon :

    <!DOCTYPE html>
    <html>
      ...
    </html>


### N’utilisez pas un DOCTYPE obsolète

DOCTYPE n’est plus pour la DTD, soyez simple.

Mal :

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Bon :

    <!DOCTYPE html>


### N'utilisez pas la déclaration XML

Êtes-vous sûr de vouloir écrire XHTML ?

Mal :

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Bon :

    <!DOCTYPE html>


### Évitez autant que possible d’utiliser des références de caractères

Si vous écrivez un document HTML avec UTF-8, presque tous les caractères (y compris les emojis) peuvent être écrits directement.

Mal :

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Bon :

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Evitez &, <, >, ", et ' , et remplacez les avec les entités de charactère

Il faut toujours éviter ces caractères pour un document HTML sans bugs.

Mal :

    <h1>The "&" character</h1>

Bon :

    <h1>The &quot;&amp;&quot; character</h1>


### Utilisez les références numériques pour les caractères invisibles ou de contrôle 

Ces caractères sont facilement confondus avec d'autre caractères. En outre, la spécification ne garantit pas la définition d’un nom lisible par l’homme pour ces caractères.

Mal :

    <p>This book can read in 1 hour.</p>

Bon :

    <p>This book can read in 1&#xA0;hour.</p>


### Placez des espaces autour du contenu des commentaires

Quelques caractères ne peuvent pas être utilisés immédiatement après l'ouverture ou avant la fermeture du commentaire.

Mal :

    <!--This section is non-normative-->

Bon :

    <!-- This section is non-normative -->


### Ne pas omettre la balise de fermeture

Peut-être que vous ne comprenez pas les règles pour omettre la balise de fermeture.

Mal :

    <html>
      <body>
        ...

Bon :

    <html>
      <body>
        ...
      </body>
    </html>


### Utilisez un seul format pour les éléments vides

La consistance est la clé pour un code lisible.

Mal :

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Bon :

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Ne mettez pas d’espaces blancs autour des balises et des d’attributs

Il n’y a aucune raison de faire cela.

Mal :

    <h1 class=" title " >HTML Best Practices</h1>

Bon :

    <h1 class="title">HTML Best Practices</h1>


### Ne mélangez pas les majuscules et les minuscules

Pour la consistance aussi

Mal :

    <a HREF="#general">General</A>

Bon :

    <a href="#general">General</a>

Egalement Bon :

    <A HREF="#general">General</A>


### Ne pas mélanger les guillemets

Comme ci-dessus.

Mal :

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Bon :

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Ne séparez pas les attributs avec deux ou plus d'espaces blancs

Ta règle de formatage bizarre peut embrouiller quelqu’un.

Mal :

    <input   name="q"  type="search">

Bon :

    <input name="q" type="search">


### Omettre la valeur de l’attribut booléen

C'est facile à écrire, non? 

Mal :

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Bon :

    <audio autoplay src="/audio/theme.mp3">


### Ignorer les espaces de noms (namespaces)

SVG et MathML peuvent être utilisés directement dans un document HTML.

Mal :

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Bon :

    <svg>
      ...
    </svg>


### N'utilisez pas les attributs XML

Nous sommes en train d'écrire un document HTML.

Mal :

    <span lang="ja" xml:lang="ja">...</span>

Bon :

    <span lang="ja">...</span>


### Ne mélangez pas les attributs `data-*`, Microdata, et RDFa Lite avec des attributs communs.

Un texte dans une balise peut devenir très compliqué. Cette règle simple aide à lire ces textes. 

Mal :

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Bon :

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Privilégier la sémantique implicite ARIA par défaut

Quelques élements ont implicitement un `role` dans un document HTML, ne les spécifiez pas.

Mal :

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Bon :

    <nav>
      ...
    </nav>

    <hr>


## L'élement racine


### Ajouter un attribut `lang`

`lang` aide à traduire un document HTML.

Mal :

    <html>

Bon :

    <html lang="en-US">


### Gardez la valeur de l'attribut `lang` aussi court que possible

Le Japonais n'est utilisé que dans le Japon. Donc, le code pays n'est pas nécessaire.

Mal :

    <html lang="ja-JP">

Bon :

    <html lang="ja">


### Evitez `data-*` le maximum possible

Un attribut approprié peut être traité correctement par les navigateurs.

Mal :

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Bon :

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Les métadonnées du document


### Ajouter l'élément `title` 

Une valeur pour l'éément `title` est utilisée par plusieurs applications, et non pas seulement les navigateurs 

Mal :

    <head>
      <meta charset="UTF-8">
    </head>

Bon :

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### N'utiliser pas l'élément `base` 

Un chemin absolu ou une URL est plus sûr pour les développeurs et les utilisateurs.

Mal :

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Bon :

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Spécifier le type du MIME des ressources mineures liées

C’est un conseil sur la façon dont l’application gère cette ressource.

Mal :

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Bon :

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### N’utilisez pas de lien pour `favicon.ico`

Presque tous les navigateurs vont chercher  `/favicon.ico` automatiquement et de façon asynchrone.

Mal :

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Bon :

    <!-- Place `favicon.ico` in the root directory. -->


### Ajouter le lien `apple-touch-icon` 

Indique quelle icône les plateformes iOS utilisent pour représenter le site.

Mal :

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Bon :

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Ajouter l'attribut `title` à d’autres feuilles de style

Une balise lisible par l’homme aide les gens à choisir la feuille de style appropriée.

Mal :

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Bon :

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Pour l'URL, utiliser l'élément `link` 

Une valeur pour l'attribut `href` attribute peut être résolue en tant qu’URL.

Mal :

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Bon :

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Spécifier l’encodage des caractères du document

UTF-8 n’est pas encore par défaut sur tous les navigateurs.

Mal :

    <head>
      <title>HTML Best Practices</title>
    </head>

Bon :

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### N’utilisez pas un codage de caractères obsolète

Les en-têtes HTTP doivent être spécifiés par un serveur, soyez simples.

Mal :

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Bon :

    <meta charset="UTF-8">


### Spécifier l’encodage des caractères en premier

La spécification exige que l’encodage des caractères soit défini dans les 1024 premiers octets du document.

Mal :

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Bon :

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Utiliser UTF-8

Avec UTF-8, tu peux utiliser des Emojis

Mal :

    <meta charset="Shift_JIS">

Bon :

    <meta charset="UTF-8">


### Evite l'attribut `type` pour CSS

Sur HTML, la valeur par défaut de l'attribut `type` de la balise `style` est `text/css`.

Mal :

    <style type="text/css">
      ...
    </style>

Bon :

    <style>
      ...
    </style>


### Ne pas commenter le contenu de l'élément `style` 

Ce rituel n'est nécessaire que pour les anciens navigateurs

Mal :

    <style>
    <!--
      ...
      -->
    </style>

Bon :

    <style>
      ...
    </style>


### Ne mélanger pas les balises CSS et JavaScript

Parfois, l'élément `script` bloque la construction du DOM.

Mal :

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Bon :

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Egalement Bon :

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Sections


### Ajouter un élément `body` 

Ne pas utiliser l’élément `body` pour envelopper le contenu de la page peut provoquer des comportements inattendus dans les navigateurs.

Mal :

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Bon :

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Oublie l'élément `hgroup`

Cet élément n'est pas trop utilisé

Mal :

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Bon :

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### N'utilise l'élément `address` que pour les coordonnées

L'élément `address`est pour les adresses e-mail, réseaux sociaux, domicile, numéro de téléphone et autres moyens de contact.

Mal :

    <address>No rights reserved.</address>

Bon :

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Regroupement du contenu


### Ne saute pas la ligne après l'élément `pre` 

La première ligne sera ignorée dans les navigateurs, mais la seconde et les suivantes seront affichées.

Mal :

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Bon :

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Utilise un format approprié dans l'élément `blockquote`

Le contenu de l'élément `blockquote` est une citation et non pas un bloc de caractères

Mal :

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Bon :

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Ne pas inclure l'attribution directement dans l'élément `blockquote` 

Le contenu de l'élément `blockquote` est une citation

Mal :

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Bon :

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Egalement Bon :

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Ecrire un seul élément de liste par ligne

Une ligne looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongue
est difficiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiile à lire. 

Mal :

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Bon :

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Utilise l'attribut `type` pour l'élément `ol` 

Parfois, le marqueur est référencé par le contenu à proximité. Si vous changez le type du marqueur
avec l’attribut type, vous serez en sécurité avec ces références.

Mal :

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

Bon :

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Ne pas utiliser `dl` pour le dialogue

L'élément `dl` est utilisé pour les listes descriptives en HTML.

Mal :

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

Bon :

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Place l'élément `figcaption` comme premier ou dernier enfant de l’élément `figure` 

Les spécifications n'autorisent pas l'élément `figcaption` au milieu de l'élément `figure`.

Mal :

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Bon :

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Utilise l'élément `main`

L'élément `main` peut être utilisé pour envelopper le contenu.

Mal :

    <div id="content">
      ...
    </div>

Bon :

    <main>
      ...
    </main>


### Evite l'élément `div` le maximum possible

L'élément `div` est un élément de dernier recours.

Mal :

    <div class="chapter">
      ...
    </div>

Bon :

    <section>
      ...
    </section>


## Sémantique au niveau du texte


### Ne pas diviser un lien qui peut être groupé

L'élément `a` peut envelopper presque tous les éléments (sauf les éléments interactifs 
tels que les contrôles d’un formulaire et l'élément `a`).

Mal :

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Bon :

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Utiliser l'attribut `download` pour télécharger une resource

Il forcera les navigateurs à télécharger la ressource liée au stockage.

Mal :

    <a href="/downloads/offline.zip">offline version</a>

Bon :

    <a download href="/downloads/offline.zip">offline version</a>


### Utiliser les attributs `rel`, `hreflang`, and `type` au besoin

Ces pistes aident les applications à gérer la ressource liée.

Mal :

    <a href="/ja/pdf">Japanese PDF version</a>

Bon :

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Pour un texte clair sur les liens

Le texte du lien doit être l’étiquette de sa ressource liée.

Mal :

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Bon :

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### N'utilise pas l'élément `em` pour l'avertissement ou la mise en garde

Ce sont des choses sérieuses. Donc, l'élément `strong` est plus approprié

Mal :

    <em>Caution!</em>

Bon :

    <strong>Caution!</strong>


### Evite les éléments `s`, `i`, `b`, et `u` le maximum possible

La sémantique de ces éléments est difficile pour les humains

Mal :

    <i class="icon-search"></i>

Bon :

    <span class="icon-search" aria-hidden="true"></span>


### Ne mettez pas de guillemets sur l’élément `q` element

Les guillements sont fournis par le navigateur.

Mal :

    <q>“For writing maintainable and scalable HTML documents”</q>

Bon :

    <q>For writing maintainable and scalable HTML documents</q>

Egalement Bon :

    “For writing maintainable and scalable HTML documents”


### Ajouter l'attribut `title` à l'élément `abbr` 

Il n’y a pas d’autre façon de représenter son expansion.

Mal :

    <abbr>HBP</abbr>

Bon :

    <abbr title="HTML Best Practices">HBP</abbr>


### Marque l'élément `ruby` en détail

Le support de l’élément `ruby` n’est pas complet parmi les navigateurs modernes.

Mal :

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Bon :

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Ajouter l'attribut `datetime` à l’élément `time` si vous utilisez des formats non reconnaissables par l'ordinateur

Quand l'attribut `datetime` n'est pas présent, le format du contenu de
l'élément `time` est restreint.

Mal :

    <time>Dec 19, 2014</time>

Bon :

    <time datetime="2014-12-19">Dec 19, 2014</time>


### Spécifie le langage du code avec l'attribut `class` avec comme préfixe : `language-`

Ce n’est pas formel, mais la spécification le mentionne ainsi.

Mal :

    <code>&lt;!DOCTYPE html&gt;</code>

Bon :

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Garde l'élément `kbd` le plus simple possible

Imbriquer l'élément `kbd` est difficile pour les humains.

Mal :

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Bon :

    <kbd>Ctrl+F5</kbd>


### Eviter l'élément `span` le maximum possible

L'élément `span` est un élément de dernier recours.

Mal :

    HTML <span class="best">Best</span> Practices

Bon :

    HTML <em>Best</em> Practices


### Saute la ligne lors de l’utilisation de l’élémen `br` 

Un saut de ligne doit être nécessaire lorsque l’élément `br` est utilisé.

Mal :

    <p>HTML<br>Best<br>Practices</p>

Bon :

    <p>HTML<br>
    Best<br>
    Practices</p>


### Ne pas utiliser l'élément `br` uniquement à des fins de présentation

L'élément `br` est pour donner des sauts de ligne au contenu.

Mal :

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Bon :

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Editions


### Ne placez pas les éléments `ins` and `del` sur d'autres éléments

Les éléments ne peuvent pas déborder d’autres éléments.

Mal :

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Bon :

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Contenu intégré


### Fournir l’élément de repli `img` pour l'élément `picture` 

Le support de l’élément `picture` n’est pas encore bon.

Mal :

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Bon :

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Ajoute l'attribut `alt` à l'élément `img` au besoin

L'attribut `alt` aide ceux qui ne peuvent pas traiter les images 
ou dont le chargement des images est désactivé.

Mal :

    <img src="/img/logo.png">

Bon :

    <img alt="HTML Best Practices" src="/img/logo.png">


### Utilise l’attribut `alt` vide si possible

Si l’image est supplémentaire, il y a du contenu équivalent à proximité.

Mal :

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Bon :

    <img alt="" src="/img/icon/help.png"> Help


### Evite l'attribut `alt` si possible

Parfois, vous ne savez pas quel texte convient à l’attribut `alt`.

Mal :

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Bon :

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### L'élément `iframe` vide

Il y a une certaine restriction dans son contenu. Vide est toujours sûr.

Mal :

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Bon :

    <iframe src="/ads/default.html"></iframe>


### Marque le contenu de l'élément `map` 

Ce contenu se présente à un lecteur d’écran.

Mal :

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Bon :

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


### Proposer un contenu alternatif pour les éléments `audio` et `video` 

Un contenu alternatif est nécessaire pour les éléments nouvellement introduits en HTML.

Mal :

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Bon :

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Données tabulaires


### Taper une cellule par ligne

Les longues lignes sont difficiles à lire 

Mal :

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Bon :

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Utilise l'élément `th` pour le cellule d'en-tête.

Il n’y a aucune raison d’éviter cela.

Mal :

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

Bon :

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


## Formulaires


### Enveloppe le formulaire de contrôle avec l'élément `label` 

L'élément `label` aide à focaliser l’élément de forme.

Mal :

    <p>Query: <input name="q" type="text"></p>

Bon :

    <p><label>Query: <input name="q" type="text"></label></p>


### Omettre l'attribut `for` si possible

L'élément `label` peut contenir certains éléments du formulaire.

Mal :

    <label for="q">Query: </label><input id="q" name="q" type="text">

Bon :

    <label>Query: <input name="q" type="text"></label>


### Utiliser un attribut `type` approprié pour l'élément `input` 

Avec un `type` approprié, les navigateurs offrent des fonctions supplémentaires aux éléments `input`.

Mal :

    <label>Search keyword: <input name="q" type="text"></label>

Bon :

    <label>Search keyword: <input name="q" type="search"></label>


### Ajouter un attribut `value` à `input type="submit"`

Le texte par défaut pour le bouton d’envoi n’est pas standardisé dans 
différents navigateurs et langues.

Mal :

    <input type="submit">

Bon :

    <input type="submit" value="Search">


### Ajouter l'attribut `title` à l'élément `input` quand il y'a un attribut `pattern` 

Si le texte saisi ne correspond pas à l’attribut `pattern`, la valeur de l’attribut `title`
s’affichera comme indice.

Mal :

    <input name="security-code" pattern="[0-9]{3}" type="text">

Bon :

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### Ne pas utiliser l'attribut `placeholder` pour étiquetter 

L'élément `label` est pour une étiquette, l'attribut `placeholder` est pour un petit indice.

Mal :

    <input name="email" placeholder="Email" type="text">

Bon :

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Ecrit un seul élément `option` par line.

Les longues lignes sont difficiles à lire. 

Mal :

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Bon :

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Ajouter un attribut `max` à l'élément `progress` 

Avec l'attribut `max`, l'attribut `value` peut être écrit dans un format simple.

Mal :

    <progress value="0.5"> 50%</progress>

Bon :

    <progress max="100" value="50"> 50%</progress>


### Ajouter les attributs `min` et `max` à l'élément `meter` 

Avec les attributs `min` et `max`, l'attribut `value` peut être écrit dans un 
format simple

Mal :

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Bon :

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### Placer l'élément `legend` comme premier enfant de l'élément `fieldset` 

C'est nécessaire.

Mal :

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Bon :

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Script


### Omettre l'attribut `type` pour JavaScript

Dans HTML, la valeur par défaut de l'attribut `type` de l'élément `script` est
`text/javascript`.

Mal :

    <script type="text/javascript">
      ...
    </script>

Bon :

    <script>
      ...
    </script>


### DNe pas commenter le contenu de l'élément `script` 

Ce rituel est pour les navigateurs anciens

Mal :

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Aussi mal :

    <script>
    <!--
      ...
    // -->
    </script>

Bon :

    <script>
      ...
    </script>


### N’utilisez pas d’éléments de `script` injectés par script

L'attribut `async` est le meilleur pour la simplicité et la performance.

Mal :

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Bon :

    <script async defer src="https://example.com/widget.js"></script>


## Autres


### Indenter constamment

L'indentation est importante pour la lisibilité.

Mal :

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Bon :

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Utiliser un chemin absolu pour les liens internes

Un lien absolu fonctionne mieux sur votre localhost sans connexion Internet.

Mal :

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Bon :

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### N’utilisez pas l’URL relative au protocole pour les ressources externes

Avec le protocole, vous pouvez charger des ressources externes de manière 
fiable et en toute sécurité.

Mal :

    <script src="//example.com/js/library.js">

Bon :

    <script src="https://example.com/js/library.js">




## Contributors

- [@hail2u_](https://github.com/hail2u)
- [@momdo](https://github.com/momdo)


## Translators

- [@ShayanTheNerd](https://github.com/ShayanTheNerd)
- [@costinlotreanu](https://github.com/costinlotreanu)
- [@edgar-avila](https://github.com/edgar-avila)
- [@kobyborali](https://github.com/kobyborali)
- [@m1nhnv](https://github.com/m1nhnv)
- [@mrcaidev](https://github.com/mrcaidev)
- [@naufalk25](https://github.com/naufalk25)
- [@oebelus](https://github.com/oebelus)
- [@oebelus](https://github.com/oebelus)
- [@sahilmaniyar](https://github.com/sahilmaniyar)
- [@sliderkh](https://github.com/sliderkh)
- [@stenbaek](https://github.com/stenbaek)
- [@techhtml](https://github.com/techhtml)
- [@umutphp](https://github.com/umutphp)
- [@wesleynepo](https://github.com/wesleynepo)
- [@oebelus](https://github.com/oebelus)
- [@zulkar29](https://github.com/zulkar29)
- [@victorchao996](https://github.com/victorchao996)


## License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
