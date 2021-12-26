# Evite atributos com prefixo `data-*` sempre que possível

Utilize de atributos que podem ser tratados corretamente pelos navegadores.

Ruim:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Bom:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>
