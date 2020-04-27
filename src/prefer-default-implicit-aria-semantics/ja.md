# デフォルトの暗黙のARIAセマンティックスを尊重する

いくつかの要素はHTML文章において暗黙的にARIA `role`を持っているので、それは指定しないようにしましょう。

悪い例:

    <nav role="navigation">
      ...
    </nav>

    <hr role="separator">

良い例:

    <nav>
      ...
    </nav>

    <hr>
