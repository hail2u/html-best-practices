HTML Best Practices
===================

For writing maintainable and scalable HTML documents.


General
-------

### Start with DOCTYPE

Bad:

    <html>
    ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
    ...
    </html>


### Don't use legacy or obsolete DOCTYPE

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### Don't mix quotation marks

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### Don't mix character cases

Bad:

    <a HREF="#general">General</a>

Good:

    <a href="#general">General</a>


### Don't put white spaces around tags and attribute values

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### Omit boolean attribute value

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### Don't omit closing tag

Bad:

    <html>
      <body>
      ...

Good:

    <html>
      <body>
      ...
      </body>
    </html>


### Don't mix empty elemet format

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


The root element
----------------

### Don't omit lang attribute

Bad:

    <html>

Good:

    <html lang="en-US">


### Keep lang value short as possible

Bad

    <html lang="ja-JP">

Good:

    <html lang="ja">


Document metadata
-----------------

### Don't omit title element

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Specify MIME type of minor linked resources

Bad:

    <link href="/favicon.ico" rel="icon">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/favicon.ico" rel="icon" type="image/x-icon">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### Add title to alternate stylesheets

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### Specify document character encoding

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### Don't use legacy character encoding format

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:
    <meta charset="UTF-8">


### Specify character encoding at first

Bad:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### Omit type attribute for CSS

Bad:

    <style type="text/css">
    ...
    </style>

Good:

    <style>
    ...
    </style>


Sections
--------

### Don't omit body tag

Bad:

    <html>
      <head>
      ...
      </head>
      ...
    </html>

Good:

    <html>
      <head>
      ...
      </head>
      <body>
      ...
      </body>
    </html>


### Forget about hgroup element

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### Use address element only for contact information

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


Grouping content
----------------

### Don't start with newline in pre

Bad:

    <pre>
    &lt;!DOCTYPE html>
    </pre>

Good:

    <pre>&lt;!DOCTYPE html>
    </pre>


### Use appropriate element in blockquote

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### Don't include attribution in blockquote

Bad:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

Also good:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>


### Write one list item per line

Bad:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Good:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### Use type attribute for ol

Bad:

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

Good:

    <body>
      <ol type="upper-roman">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### Place figcaption as first or last child of figure

Bad:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Good:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### Use main element

Bad:

    <div id="content">
    ...
    </div>

Good:

    <main>
    ...
    </main>


### Avoid div element as possible


Bad:

    <div class="chapter">
    ...
    </div>

Good:

    <section>
    ...
    </section>


Text-level semantics
--------------------


Edits
-----


Embedded content
----------------


Tabular data
------------


Forms
-----


Interactive elements
--------------------


Scripting
---------


Other
-----

### Indent consistently

Bad:

    <html>
    	<head>
    	...
    	</head>
      <body>
      ...
      </body>
    </html>

Good:


    <html>
      <head>
      ...
      </head>
      <body>
      ...
      </body>
    </html>


Contributers
------------

  - [@hail2u]
  - [@momdo]


License
-------

[CC0]


[@hail2u]: https://github.com/hail2u
[@momdo]:  https://github.com/momdo
[CC0]:     http://creativecommons.org/publicdomain/zero/1.0/
