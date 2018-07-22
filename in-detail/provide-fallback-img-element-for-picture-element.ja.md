# `picture`要素ではフォールバックのための`img`要素を提供する

`picture`要素のサポートはまだよくありません。

悪い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

良い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

現在のHTML仕様では、`picture`要素を始め、いくつかのマルチメディア向け要素が追加されました。この新しい要素では、複数のソースから最適なものを選択、表示できます。悪い例で挙げたようなコードでは`source`要素をサポートしているのなら最悪でもJPEG形式の画像が表示されるでしょう。こうなっていることでサポート状況が不安な新しいフォーマットでも気軽に利用できます。

しかし、このままでは`source`要素をサポートしていないブラウザーでは何も表示できません。そこで最後のフォールバックとして`img`要素を使えるように仕様では決められました。良い例で挙げたように書くことで、適切なフォーマットを選ぶ自由さを維持しつつ、古いブラウザーでは`img`要素で指定された画像が表示されます。このフォールバックの仕組みが必要なブラウザーはごく少数になりつつありますが、`source`要素を書く場合と手間は変わらないことですし、`img`要素で書くべきでしょう。
