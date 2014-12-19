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


The root element
----------------


Document metadata
-----------------


Sections
--------


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

  - [@hail2u][]


License
-------

[CC0][]


[@hail2u]: https://github.com/hail2u
[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
