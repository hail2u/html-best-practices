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

    <img alt="She sits infront of a mirror." src='cat-and-mirror.jpg'>

Good:

    <img alt="She sits infront of a mirror." src="cat-and-mirror.jpg">


### Don't mix character cases

Bad:

    <a HREF="foo">foo</a>

Good:

    <a href="foo">foo</a>


### Don't put white spaces around tags and attribute values

Bad:

    <em class=" foo bar " >hot</em>

Good:

    <em class="foo bar">hot</em>


### Omit boolean attribute value

Bad:

    <audio autoplay="autoplay" src="foo.png">

Good:

    <audio autoplay src="foo.png">


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

    <img alt="To right" src="right.png">
    <img alt="To left" src="left.png" />

Good:

    <img alt="To right" src="right.png">
    <img alt="To left" src="left.png">


The root element
----------------

### Don't omit lang attribute

Bad:

    <html>

Good:

    <html lang="ja-JP">


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
    <link href="/css/high-contrast.css" rel="stylesheet" title="High contrast">


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
      <meta charset="utf-8">
      ...
    </head>

Good:

    <head>
      <meta charset="utf-8">
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

    <address>Copyright © 2014 John Doe, all rights reserved.</address>

Good:

    <address>Contact: <a href="mailto:john.doe@example.com">John Doe</a></address>


Grouping content
----------------


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
