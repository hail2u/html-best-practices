# Özniteliği doğrudan `blockquote` öğesinin içine dahil etme

`blockquote` içeriği bir alıntıdır.

Yanlış:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    
      <p>— HTML Best Practices</p>
    </blockquote>

Doğru:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

Bu da doğru:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>
