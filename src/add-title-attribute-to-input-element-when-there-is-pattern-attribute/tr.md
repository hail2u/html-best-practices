# `pattern` özelliği olduğunda `input` etiketine `title` özelliği ekleyin

Girilen metni `pattern` niteliğiyle eşleşmiyorsa, `title` özelliğinin değeri ipucu olarak görüntülenecektir.

Yanlış:

    <input name="security-code" pattern="[0-9] type="text">

Doğru:
    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">
