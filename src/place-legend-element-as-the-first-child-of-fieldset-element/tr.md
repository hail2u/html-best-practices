# `legend` etiketini `fieldset` etiketinin ilk çocuğu olarak elemanı olarak oluşturun

Spec bunu gerektirir.

Yanlış:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
        ...
      <legend>About "General"</legend>
    </fieldset>

Doğru:

    <fieldset>
      <legend>About "General"</legend>
        <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
          ...
    </fieldset>
