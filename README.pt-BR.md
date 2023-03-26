Translations: [English](README.md) · [বাংলা](README.bn.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Français](README.fr.md) · [Indonesia](README.id.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português (BR)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh-CN.md) · [正體中文](README.zh-TW.md) · [فارسی](README.fa-IR.md)

# Boas Práticas HTML

Para escrever documentos HTML sustentáveis e escaláveis.


## Geral


### Comece com DOCTYPE

DOCTYPE é necessário para ativar o modo padrão.

Ruim:

    <html>
      ...
    </html>

Bom:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### Não utilize DOCTYPE legado ou obsoleto

DOCTYPE não é mais para DTD, seja simples.

Ruim:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Bom:

    <!DOCTYPE html>


### Não utilize declaração de XML

Você tem certeza que quer escrever um XHTML?

Ruim:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Bom:

    <!DOCTYPE html>


### Não utilizar referências de caracteres sempre que possível

Se você estiver utilizando um documento HTML com UTF-8, quase todos caracteres (inclusive Emoji) podem ser escritos diretamente.

Ruim:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Bom:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### Utilize as entidades dos caracteres `&`, `<`, `>`, `"`, e `'`

Esses caracteres devem ser utilizados com suas entidades para evitar problemas no documento HTML.

Ruim:

    <h1>The "&" character</h1>

Bom:

    <h1>The &quot;&amp;&quot; character</h1>


### Use referência numérica de caracteres para controle ou caracteres invisíveis

Esses caracteres podem ser facilmente confundidos com outros caracteres.
Nem a especificação garante que esses caracteres tenham nomes amigáveis ​​para humanos.

Ruim:

    <p>This book can read in 1 hour.</p>

Bom:

    <p>This book can read in 1&#xA0;hour.</p>


### Coloque espaços envolta do conteúdo dos seus comentários

Alguns caracteres não podem ser utilizados imediatamente após ou antes do fim do comentário.

Ruim:

    <!--This section is non-normative-->

Bom:

    <!-- This section is non-normative -->


### Não esqueça da tag de fechamento

Talvez você não tenha entendido quando fechar ou não as tags.

Ruim:

    <html>
      <body>
        ...

Bom:

    <html>
      <body>
        ...
      </body>
    </html>


### Não misture as formatações de elementos vazios

A consistência é a chave para a legibilidade.

Ruim:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Bom:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### Não coloque espaços em branco em volta das tags e valores dos atributos

Não tem motivo para fazer isso.

Ruim:

    <h1 class=" title " >HTML Best Practices</h1>

Bom:

    <h1 class="title">HTML Best Practices</h1>


### Não misture caracteres em maiúsculo e minúsculo

Torna o código mais consistente.

Ruim:

    <a HREF="#geral">Geral</A>

Bom:

    <a href="#geral">Geral</a>

Bom também:

    <A HREF="#geral">Geral</A>


### Não misture as aspas

O mesmo que acima.

Ruim:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Bom:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Não separe os atributos com dois o mais espaços

Sua regra de formatação estranha pode confundir outra pessoa.

Ruim:

    <input   name="q"  type="search">

Bom:

    <input name="q" type="search">


### Omita o valor de um atributo booleano

É mais fácil escrever assim, não é?

Ruim:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Bom:

    <audio autoplay src="/audio/theme.mp3">


### Omita os namespaces

SVG e MathML podem ser usados diretamente em um documento HTML

Ruim:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Bom:

    <svg>
      ...
    </svg>


### Não utilize atributos de XML

Nós escrevemos um documento HTML.

Ruim:

    <span lang="ja" xml:lang="ja">...</span>

Bom:

    <span lang="ja">...</span>


### Não misture atributos com prefixo `data-*`, Microdata e RDFa Lite com atributos comuns

O texto de uma tag pode ser muito complicado. Essa regra simples ajuda na leitura de tal tag.

Ruim:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Bom:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### Prefira o padrão das semânticas do ARIA

Alguns elementos tem um ARIA `role` implícito no documento HTML, não especifique isso.

Ruim:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Bom:

    <nav>
      ...
    </nav>

    <hr>


## O elemento raiz


### Adicione o atributo `lang`

Utilizar o `lang` auxilia os tradutores automáticos de página a identificar a língua do conteúdo.

Ruim:

    <html>

Bom:

    <html lang="pt-BR">


### Mantenha o valor do atributo `lang` o mais curto possível

Japonês é utilizado apenas no Japão, então o código do país não é necessário.

Ruim:

    <html lang="ja-JP">

Bom:

    <html lang="ja">


### Evite atributos com prefixo `data-*` sempre que possível

Utilize de atributos que podem ser tratados corretamente pelos navegadores.

Ruim:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Bom:

    <span title="French"><span lang="fr">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>


## Metadados do documento


### Adicione o elemento `title`

O valor do elemento `title` é usado para várias aplicações não se limitando apenas ao navegador.

Ruim:

    <head>
      <meta charset="UTF-8">
    </head>

Bom:

    <head>
      <meta charset="UTF-8">
      <title>Boas práticas de HTML</title>
    </head>


### Não utilize o elemento `base`

Um caminho absoluto ou URL é mais seguro, tanto para os desenvolvedores como para os usuários.

Ruim:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Bom:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### Especifique o tipo do MIME dos recursos linkados

Isso é uma dica para aplicação lidar com esse recurso.

Ruim:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Bom:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Não crie um link para o `favicon.ico`

Quase todos os navegadores modernos fazem a requisição para `/favicon.ico` automaticamente e assíncrono.

Ruim:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Bom:

    <!-- Coloque `favicon.ico` na raiz do diretório. -->


### Adicione `apple-touch-icon` ao link

Informa qual ícone as plataformas do iOS utilizam para representar o site.

Ruim:

    <!-- Olá Maçã! Por faça o download de `/apple-touch-icon.png`! -->

Bom:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">


### Adicione o atributo `title` em folhas de estilo alternativas

Uma legenda entendível por humanos ajuda as pessoas a selecionar a folha de estilos apropriada.

Ruim:

    <link href="/css/tela.css" rel="stylesheet">
    <link href="/css/alto-contraste.css" rel="stylesheet alternativo">

Bom:

    <link href="/css/tela.css" rel="stylesheet">
    <link href="/css/alto-contraste.css" rel="stylesheet alternativo" title="Alto contraste">


### Para URL use o elemento `link`

Quando o valor do atributo `href` puder ser resolvido como URL.

Ruim:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

Bom:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>


### Especifique a codificação dos caracteres do documento

UTF-8 não é o padrão em todos os navegadores ainda.

Ruim:

    <head>
      <title>HTML Best Practices</title>
    </head>

Bom:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Não utilize formato codificação legado

Cabeçalhos do HTTP devem ser especificados por um servidor, seja simples.

Ruim:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Bom:

    <meta charset="UTF-8">


### Especifique a codificação dos caracteres logo no início

A especificação pede para que a codificação dos caracteres seja identificada nos primeiros 1024 bytes do documento.

Ruim:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Bom:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Use UTF-8

Com UTF-8, você pode usar Emoji à vontade.

Ruim:

    <meta charset="Shift_JIS">

Bom:

    <meta charset="UTF-8">


### Omita o atributo `type` para CSS

Em HTML, por padrão o atributo `type` do elemento `style` ja é `text/css`.

Ruim:

    <style type="text/css">
      ...
    </style>

Bom:

    <style>
      ...
    </style>


### Não comente os conteúdos do elemento `style`

Apenas nos navegadores antigos era necessário.

Ruim:

    <style>
    <!--
      ...
      -->
    </style>

Bom:

    <style>
      ...
    </style>


### Não misture tags de CSS com JavaScript

Alguns elementos `script` bloqueiam a construção do DOM

Ruim:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Bom:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Bom também:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


## Seções


### Adicione o elemento `body`

Ao não utilizar o elemento `body` para envolver o conteúdo da página pode causar comportamentos não esperados nos navegadores.

Ruim:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Bom:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Esqueça o elemento `hgroup`

Esse elemento não é muito utilizado.

Ruim:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Bom:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use o elemento `address` apenas para informações de contato

O elemento `address` é para o endereço de email, contas em redes sociais, endereço físico, número de telefone e ou algum modo de entrar em contato com.

Ruim:

    <address>No rights reserved.</address>

Bom:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


## Agrupando conteúdos


### Não comece uma nova linha com o elemento `pre`

A primera quebra de linha vai ser ignorada nos navegadores, porém a segunda em diante são renderizadas.

Ruim:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Bom:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### Use de forma apropriada  o elemento `blockquote`

O conteúdo do elemento `blockquote` é uma citação, e não vários blocos de caracteres.

Ruim:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Bom:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Não inclua a atribuição direto no elemento `blockquote`

O conteúdo do elemento `blockquote` é apenas um parágrafo.

Ruim:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Bom:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

    <p>— HTML Best Practices</p>

Bom também:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>

      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Escreva um elemento da lista por linha

Listas looooooooooooooooooooooooooooooooooooooooogas
são difíceis deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ler

Ruim:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Bom:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Use o atributo `type` para o elemento `ol`

Com a utilização do atributo `type` você não precisa utilizar uma classe e definir o estilo da lista ordenada, pode se referir diretamente.

Ruim:

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

Bom:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Não use `dl` para diálogos

O elemento `dl` é restrito para associação com listas em HTML.

Ruim:

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

Bom:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### Coloque um elemento `figcaption` como primeiro ou último filho do elemento `figure`

A especificação não permite o elemento `figcaption` no meio de um elemento `figure`.

Ruim:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Bom:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Use o elemento `main`

O elemento `main` pode ser utilizado para envolver conteúdos

Ruim:

    <div id="content">
      ...
    </div>

Bom:

    <main>
      ...
    </main>


### Evite utilizar `div` sempre que possível

A `div` é um elemento de última instância.

Ruim:

    <div class="capitulo">
      ...
    </div>

Bom:

    <section>
      ...
    </section>


## Semânticas a nível de texto


### Não divida o mesmo link que pode estar agrupado

O elemento `a` pode envolver quase todos elementos (exceto elementos interativos como controles de formulário e um elemento `a` igual ele)

Ruim:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>

    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Bom:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>

      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### Use o atributo `download` para baixar um recurso

Ele vai forçar os navegadores baixarem o recurso linkado para o armazenamento.

Ruim:

    <a href="/downloads/offline.zip">offline version</a>

Bom:

    <a download href="/downloads/offline.zip">offline version</a>


### Use os atributos `rel`, `hreflang`, e `type` quando necessário

Esses atributos auxiliam o navegador a como lidar com o conteúdo indicado pelo link.

Ruim:

    <a href="/ja/pdf">Japanese PDF version</a>

Bom:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### Texto do link evidente

O texto do link deve ser o rótulo do recurso que ele aponta.

Ruim:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Clique aqui</a> para ver a versão em PDF.</p>

Bom:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Versão em PDF</a> também disponível.</p>


### Não utilize o elemento `em` para avisos ou cuidado

Isso é sério. Então utilize o elemento `strong` por ser mais apropriado.

Ruim:

    <em>Caution!</em>

Bom:

    <strong>Caution!</strong>


### Evite os elementos `s`, `i`, `b`, e `u` sempre que possível

A semântica desses elementos é muito difícil para humanos.

Ruim:

    <i class="icone-busca"></i>

Bom:

    <span class="icone-busca" aria-hidden="true"></span>


### Não coloque aspas no texto do elemento `q`

As aspas são inseridas automaticamente pelo navegador.

Ruim:

    <q>“For writing maintainable and scalable HTML documents”</q>

Bom:

    <q>For writing maintainable and scalable HTML documents</q>

Bom também:

    “For writing maintainable and scalable HTML documents”


### Adicione o atributo `title` ao elemento `abbr`

Não existe outra forma para representar sua forma completa.

Ruim:

    <abbr>BPH</abbr>

Bom:

    <abbr title="Boas práticas de HTML">HBP</abbr>


### Marque o elemento `ruby` detalhadamente

O suporte para elemento `ruby` não é completo nos navegadores modernos.

Ruim:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Bom:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### Use o atributo `datetime`  em formatos não reconhecidos por máquina no elemento `time`

Quando o atributo `datetime` não é informado, o formato do conteúdo elemento `time` é restrito.

Ruim:

    <time>Dez 19, 2014</time>

Bom:

    <time datetime="2014-12-19">Dez 19, 2014</time>


### Especifique a linguagem do código com o atributo `class` prefixado com `language-`

Não é um método comum, mas as especificações mencionam.

Ruim:

    <code>&lt;!DOCTYPE html&gt;</code>

Bom:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>


### Mantenha o elemento `kbd` o mais simples possível

Aninhar o elemento `kbd` torna dificil para os humanos.

Ruim:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Bom:

    <kbd>Ctrl+F5</kbd>


### Evite o elemento `span` sempre que possível

O `span` é um elemento de última instância.

Ruim:

    HTML <span class="best">Best</span> Practices

Bom:

    HTML <em>Best</em> Practices


### Quebre a linha depois do elemento `br`

Uma quebra de linha é necessária quando o elemento `br` é utilizado.

Ruim:

    <p>HTML<br>Best<br>Practices</p>

Bom:

    <p>HTML<br>
    Best<br>
    Practices</p>


### Não utilize o elemento `br` apenas para propósito visual

O elemento `br` não é para quebrar linhas, é para quebrar linhas dos conteúdos.

Ruim:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Bom:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


## Edições


### Não insira elementos `ins` e `del` entre outros elementos

Elementos não podem transbordar para outros elementos.

Ruim:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Bom:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>


## Conteúdo embutido


### Garanta um um elemento `img` como substituto para um elemento `picture`

O suporte para o elemento `picture` ainda não é tão vasto.

Ruim:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Bom:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### Adicione o atributo `alt` em uma `img` se necessário

O atributo `alt` auxilia quem não pode processar imagens ou está com o carregamento de imagens desabilitado.


Ruim:

    <img src="/img/logo.png">

Bom:

    <img alt="Boas Práticas de HTML" src="/img/logo.png">


### Deixe vazio o atributo `alt` sempre que possível

Se a imagem é suplementar, ou tem um conteúdo equivalente perto da mesma.

Ruim:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Bom:

    <img alt="" src="/img/icon/help.png"> Help


### Omita o atributo `alt` se possível

As vezes você não sabe um algo que seja adequado ao atributo `alt`.

Ruim:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Bom:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (Se você não consegue ver a imagem, você poderia utilizar um teste <a href="?audio">audio</a>)


### Elemento `iframe` vazio

Se tiver alguma restrição no conteúdo, é sempre bom manter o `iframe` vazio.

Ruim:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Bom:

    <iframe src="/ads/default.html"></iframe>


### Marque o conteúdo do elemento `map`

Esse conteúdo é apresentado por um leitor de tela.

Ruim:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Bom:

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


### Disponibilize um conteúdo substituto para os elementos `audio` e `video`

O conteúdo substituto é necessário para novos elementos introduzidos no HTML.

Ruim:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Bom:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


## Dados tabulares


### Escreve uma célula por linha

Linhas longas são díficeis de ler.

Ruim:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Bom:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### Use o elemento `th` para o cabeçalho da célula

Não existe motivo para evitar o uso.

Ruim:

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

Bom:

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


## Formulários


### Envolva um controle de formulário com o elemento `label`

O elemento `label` auxilia o focar no elemento do formulário

Ruim:

    <p>Query: <input name="q" type="text"></p>

Bom:

    <p><label>Query: <input name="q" type="text"></label></p>


### Omita o atributo `for` se possível

O elemento `label` pode conter alguns elementos de formulário.

Ruim:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Bom:

    <label>Query: <input name="q" type="text"></label>


### Use o atributo `type` apropriado para o element `input`

Com a `type` apropriado o navegador adiciona pequenas funções ao elemento `input`

Ruim:

    <label>Search keyword: <input name="q" type="text"></label>

Bom:

    <label>Search keyword: <input name="q" type="search"></label>


### Adicione o atributo `value` ao elemento `input type="submit"`

O rótulo padrão para o botão de submissão não é padronizado pelos navegadores e linguagens.

Ruim:

    <input type="submit">

Bom:

    <input type="submit" value="Procurar">


### Adicione o atributo `title` ao elemento input `input` quando existir o atributo `pattern`

Se um input não estiver de acordo com a `pattern`  indicada, o conteúdo do atributo `title` será apresentado como uma dica.

Ruim:

    <input name="codigo-de-seguranca" pattern="[0-9]{3}" type="text">

Bom:

    <input name="codigo-de-seguranca" pattern="[0-9]{3}" title="O Código de segurança é um número de três dígitos." type="text">


### Não utilize o atributo `placeholder` como um rótulo

O elemento `label` é para rotular, o atributo `placeholder` é para uma breve dica do campo.

Ruim:

    <input name="email" placeholder="Email" type="text">

Bom:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### Escreva um elemento `option` por linha

Linhas longas são difíceis de serem lidas.

Ruim:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Bom:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### Adicione o atributo `max` ao elemento de `progress`

Com o atributo `max`, o atributo `value` pode ser preenchido em um formato mais acessível.

Ruim:

    <progress value="0.5"> 50%</progress>

Bom:

    <progress max="100" value="50"> 50%</progress>


### Adicione os atributos `min` e `max` ao elemento `meter`

With `min` and `max` attribute, the `value` attribute can be write in an easy
format.

Com os atributos `min` e `max`, o `value` pode ser preenchido em um formato mais acessível.

Ruim:

    <meter value="0.5"> 512GB usado (1024GB total)</meter>

Bom:

    <meter min="0" max="1024" value="512"> 512GB usado (1024GB total)</meter>


### Coloque o elemento `legend` como o primeiro filho do elemento `fieldset`

A especificação pede dessa forma.

Ruim:

    <fieldset>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Bom:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


## Scripts


### Omita o atributo `type` para JavaScript

Em HTML, o atributo `type` do elemento `script` é por padrão `text/javascript`.

Ruim:

    <script type="text/javascript">
      ...
    </script>

Bom:

    <script>
      ...
    </script>


### Não comente os conteúdos do elemento `script`

Apenas nos navegadores antigos era necessário.

Ruim:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Ruim também:

    <script>
    <!--
      ...
    // -->
    </script>

Bom:

    <script>
      ...
    </script>


### Não utilzie elementos `script` injetados por script

Utilizar o atributo `async` é o melhor tanto para simplicidade como para performance.

Ruim:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Bom:

    <script async defer src="https://example.com/widget.js"></script>


## Outro


### Indentação consistente

A indentação  é importante na legibilidade do código.

Ruim:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Bom:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### Use caminhos absolutos para links internos

Um caminho absoluto funciona melhor no seu localhost sem conexão com a internet.

Ruim:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Bom:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


### Não utilize protocolo relativo em URL para recursos externos

Com o protocolo você pode carregar recursos externos com seguração e estabilidade.

Ruim:

    <script src="//example.com/js/library.js">

Bom:

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
