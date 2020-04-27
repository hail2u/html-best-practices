# Don’t use protocol-relative URL for external resources

With protocol, you can load external resources reliably and safely.

Bad:

    <script src="//example.com/js/library.js">

Good:

    <script src="https://example.com/js/library.js">
