# Add `title` attribute to `input` element when there is `pattern` attribute

If input text does not match to `pattern` attribute, the value of `title`
attribute will be display as a hint.

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
