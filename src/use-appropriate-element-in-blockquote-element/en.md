# Use appropriate element in `blockquote` element

`blockquote` element’s content is a quote, not a chunks of characters.

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
