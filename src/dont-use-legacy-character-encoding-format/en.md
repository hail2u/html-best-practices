# Don’t use legacy character encoding format

HTTP headers should be specified by a server, be simple.

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">
