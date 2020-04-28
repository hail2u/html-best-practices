# Karakter referanslarını mümkün olduğunca kullanmayın

UTF-8 ile bir HTML belgesi yazarsanız, hemen hemen tüm karakterler (Emoji dahil) doğrudan yazılabilir.

Yanlış:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Doğru:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>
