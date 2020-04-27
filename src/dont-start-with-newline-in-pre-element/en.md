# Don’t start with newline in `pre` element

A first newline will ignored in the browsers, but second and later are rendered.

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>
