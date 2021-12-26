# Não insira elementos `ins` e `del` entre outros elementos

Elementos não podem transbordar para outros elementos.

Ruim:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>

    <p>Don’t trust!</p></del>

Bom:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>

    <del><p>Don’t trust!</p></del>
