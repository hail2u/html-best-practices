# Não utilize o atributo `placeholder` como um rótulo

O elemento `label` é para rotular, o atributo `placeholder` é para uma breve dica do campo.

Ruim:

    <input name="email" placeholder="Email" type="text">

Bom:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>
