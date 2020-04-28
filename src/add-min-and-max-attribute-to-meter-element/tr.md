# `meter` etiketine `min` ve `max` özelliği ekleyin

`min` ve `max` özelliği ile `value` özelliği kolay bir şekilde yazılabilir.

Yanlış:

    <meter value="0.5"> 512GB used (1024GB total</meter>

Doğru:
    <meter min="0" max="1024" value="512"> 512GB used (1024GB total</meter>
