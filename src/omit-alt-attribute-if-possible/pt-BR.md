# Omita o atributo `alt` se possível

As vezes você não sabe um algo que seja adequado ao atributo `alt`.

Ruim:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Bom:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (Se você não consegue ver a imagem, você poderia utilizar um teste <a href="?audio">audio</a>)
