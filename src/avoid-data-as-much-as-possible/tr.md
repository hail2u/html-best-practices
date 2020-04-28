# Mümkün olduğunca `data-*` kullanmayın

Uygun bir özellik de tarayıcılar tarafından doğru bir şekilde ele alınabilir.

Yanlış:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

Doğru:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>
