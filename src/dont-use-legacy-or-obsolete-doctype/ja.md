# 置き換えられるべきまたは旧式のDOCTYPEを使わない

もはやDOCTYPEはDTDのためにあるわけではないので、シンプルにしましょう。

悪い例:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

良い例:

    <!DOCTYPE html>
