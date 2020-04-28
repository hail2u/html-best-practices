# `ins` ve `del` etiketlerini diğer öğelerin arasında kullanmayın

Etiketler diğer etidektlere taşamaz.

Yanlış:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Doğru:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>
