# Don’t mix `data-*`, Microdata, and RDFa Lite attributes with common attributes

A tag string can be very complicated. This simple rule helps reading such tag
string.

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">
