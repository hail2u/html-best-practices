# できる限り`data-*`属性は避ける

適切な属性は、ブラウザーがうまく扱ってくれるかもしれません。

悪い例:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

良い例:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>
