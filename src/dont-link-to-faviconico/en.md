# Don’t link to `favicon.ico`

Almost all browsers fetch `/favicon.ico` automatically and asynchronously.

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->
