# Don’t use character references as much as possible

If you write an HTML document with UTF-8, almost all characters (including
Emoji) can be write directly.

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
