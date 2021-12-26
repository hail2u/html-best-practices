# Prefira o padrão das semânticas do ARIA

Alguns elementos tem um ARIA `role` implícito no documento HTML, não especifique isso.

Ruim:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

Bom:

    <nav>
      ...
    </nav>

    <hr>
