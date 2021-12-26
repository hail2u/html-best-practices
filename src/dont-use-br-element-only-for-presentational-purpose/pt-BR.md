# Não utilize o elemento `br` apenas para propósito visual

O elemento `br` não é para quebrar linhas, é para quebrar linhas dos conteúdos.

Ruim:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Bom:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>
