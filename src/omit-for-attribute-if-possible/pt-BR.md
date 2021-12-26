# Omita o atributo `for` se possível

O elemento `label` pode conter alguns elementos de formulário.

Ruim:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Bom:

    <label>Query: <input name="q" type="text"></label>
