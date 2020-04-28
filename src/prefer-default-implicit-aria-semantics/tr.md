# Varsayılan örtülü ARIA gramerini tercih edin

Bazı öğelerin bir HTML belgesinde örtük olarak bir ARIA `role` değeri vardır, belirtmenize gerek yoktur.

Yanlış:

    <nav role="navigation">
      ...
    </nav>
    
    <hr role="separator">

Doğru:

    <nav>
      ...
    </nav>
    
    <hr>
