# Prefer default implicit ARIA semantics

Some element has an ARIA `role` implicitly in an HTML document, don’t specify it.

Bad:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Good:

    <nav>
      ...
    </nav>

    <hr>
