# Mümkünse `for` özelliğini kullanmayın

`label` etiketi bazı form etiketlerini içerebilir.

Yanlış:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Doğru:

    <label>Query: <input name="q" type="text"></label>
