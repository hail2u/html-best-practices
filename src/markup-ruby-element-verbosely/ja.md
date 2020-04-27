# `ruby`要素は冗長にマークアップする

`ruby`要素のサポートはまだモダンブラウザー間でも完了していません。

悪い例:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

良い例:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>
