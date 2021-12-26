# Evite os elementos `s`, `i`, `b`, e `u` sempre que possível

A semântica desses elementos é muito difícil para humanos.

Ruim:

    <i class="icone-busca"></i>

Bom:

    <span class="icone-busca" aria-hidden="true"></span>
