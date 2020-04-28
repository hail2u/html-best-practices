# Mümkünse `alt` özelliğini atlayın

Bazen hangi metnin `alt` özellik için uygun olduğunu bilemezsiniz.

Yanlış:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Doğru:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)
