Translations: [English (en)](README.md) · [日本語 (ja)](README.ja.md)

普通のHTMLの書き方
==================

保守しやすく、規模に依存しないHTML文書のために

<!-- #toc -->

* [一般](#%E4%B8%80%E8%88%AC)
  * [DOCTYPEで始める](#doctype%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B)
  * [置き換えられるべきまたは旧式のDOCTYPEを使わない](#%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88%E3%82%89%E3%82%8C%E3%82%8B%E3%81%B9%E3%81%8D%E3%81%BE%E3%81%9F%E3%81%AF%E6%97%A7%E5%BC%8F%E3%81%AEdoctype%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [XML宣言を使用しない](#xml%E5%AE%A3%E8%A8%80%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [文字参照はできる限り使わない](#%E6%96%87%E5%AD%97%E5%8F%82%E7%85%A7%E3%81%AF%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8A%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [`&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする](#%E3%81%A8%E3%81%AF%E5%90%8D%E5%89%8D%E6%96%87%E5%AD%97%E5%8F%82%E7%85%A7%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%E3%81%99%E3%82%8B)
  * [制御文字や不可視文字は数値文字参照を使う](#%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97%E3%82%84%E4%B8%8D%E5%8F%AF%E8%A6%96%E6%96%87%E5%AD%97%E3%81%AF%E6%95%B0%E5%80%A4%E6%96%87%E5%AD%97%E5%8F%82%E7%85%A7%E3%82%92%E4%BD%BF%E3%81%86)
  * [コメントではその内容の前後へ空白文字を置く](#%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%81%A7%E3%81%AF%E3%81%9D%E3%81%AE%E5%86%85%E5%AE%B9%E3%81%AE%E5%89%8D%E5%BE%8C%E3%81%B8%E7%A9%BA%E7%99%BD%E6%96%87%E5%AD%97%E3%82%92%E7%BD%AE%E3%81%8F)
  * [終了タグを省略しない](#%E7%B5%82%E4%BA%86%E3%82%BF%E3%82%B0%E3%82%92%E7%9C%81%E7%95%A5%E3%81%97%E3%81%AA%E3%81%84)
  * [空要素の書き方を混ぜない](#%E7%A9%BA%E8%A6%81%E7%B4%A0%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%82%92%E6%B7%B7%E3%81%9C%E3%81%AA%E3%81%84)
  * [タグや属性値の前後へ空白文字を置かない](#%E3%82%BF%E3%82%B0%E3%82%84%E5%B1%9E%E6%80%A7%E5%80%A4%E3%81%AE%E5%89%8D%E5%BE%8C%E3%81%B8%E7%A9%BA%E7%99%BD%E6%96%87%E5%AD%97%E3%82%92%E7%BD%AE%E3%81%8B%E3%81%AA%E3%81%84)
  * [大文字・小文字を混ぜない](#%E5%A4%A7%E6%96%87%E5%AD%97%E5%B0%8F%E6%96%87%E5%AD%97%E3%82%92%E6%B7%B7%E3%81%9C%E3%81%AA%E3%81%84)
  * [引用符を混ぜない](#%E5%BC%95%E7%94%A8%E7%AC%A6%E3%82%92%E6%B7%B7%E3%81%9C%E3%81%AA%E3%81%84)
  * [属性を2文字以上の空白文字で区切らない](#%E5%B1%9E%E6%80%A7%E3%82%922%E6%96%87%E5%AD%97%E4%BB%A5%E4%B8%8A%E3%81%AE%E7%A9%BA%E7%99%BD%E6%96%87%E5%AD%97%E3%81%A7%E5%8C%BA%E5%88%87%E3%82%89%E3%81%AA%E3%81%84)
  * [真偽値を取る属性の値は省略する](#%E7%9C%9F%E5%81%BD%E5%80%A4%E3%82%92%E5%8F%96%E3%82%8B%E5%B1%9E%E6%80%A7%E3%81%AE%E5%80%A4%E3%81%AF%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [名前空間は省略する](#%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%AF%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [XML属性は使わない](#xml%E5%B1%9E%E6%80%A7%E3%81%AF%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [`data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない](#data-%E3%81%A8microdatardfa-lite%E7%94%A8%E3%81%AE%E5%B1%9E%E6%80%A7%E3%81%A8%E9%80%9A%E5%B8%B8%E3%81%AE%E5%B1%9E%E6%80%A7%E3%82%92%E6%B7%B7%E3%81%9C%E3%81%AA%E3%81%84)
  * [暗黙のセマンティクスを尊重する](#%E6%9A%97%E9%BB%99%E3%81%AE%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9%E3%82%92%E5%B0%8A%E9%87%8D%E3%81%99%E3%82%8B)
* [文書要素](#%E6%96%87%E6%9B%B8%E8%A6%81%E7%B4%A0)
  * [`lang`属性を追加する](#lang%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`lang`属性の値はできる限り短くする](#lang%E5%B1%9E%E6%80%A7%E3%81%AE%E5%80%A4%E3%81%AF%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8A%E7%9F%AD%E3%81%8F%E3%81%99%E3%82%8B)
* [文書メタデータ](#%E6%96%87%E6%9B%B8%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF)
  * [`title`要素を書く](#title%E8%A6%81%E7%B4%A0%E3%82%92%E6%9B%B8%E3%81%8F)
  * [`base`要素を使わない](#base%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [マイナーな参照先リソースのMIMEタイプを指定する](#%E3%83%9E%E3%82%A4%E3%83%8A%E3%83%BC%E3%81%AA%E5%8F%82%E7%85%A7%E5%85%88%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AEmime%E3%82%BF%E3%82%A4%E3%83%97%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  * [`favicon.ico`へリンクしない](#faviconico%E3%81%B8%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%97%E3%81%AA%E3%81%84)
  * [代替スタイルシートへ`title`属性を追加する](#%E4%BB%A3%E6%9B%BF%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88%E3%81%B8title%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [文書の文字エンコーディングを指定する](#%E6%96%87%E6%9B%B8%E3%81%AE%E6%96%87%E5%AD%97%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  * [置き換えられるべき文字エンコーディング指定フォーマットを使わない](#%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88%E3%82%89%E3%82%8C%E3%82%8B%E3%81%B9%E3%81%8D%E6%96%87%E5%AD%97%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%8C%87%E5%AE%9A%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [最初に文字エンコーディングを指定する](#%E6%9C%80%E5%88%9D%E3%81%AB%E6%96%87%E5%AD%97%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  * [UTF-8を使う](#utf-8%E3%82%92%E4%BD%BF%E3%81%86)
  * [CSSの`type`属性は省略する](#css%E3%81%AEtype%E5%B1%9E%E6%80%A7%E3%81%AF%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [`style`要素の中をコメントアウトしない](#style%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%AD%E3%82%92%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%82%A2%E3%82%A6%E3%83%88%E3%81%97%E3%81%AA%E3%81%84)
  * [CSSとJavaScriptのタグを混ぜない](#css%E3%81%A8javascript%E3%81%AE%E3%82%BF%E3%82%B0%E3%82%92%E6%B7%B7%E3%81%9C%E3%81%AA%E3%81%84)
* [セクション](#%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3)
  * [`body`要素を書く](#body%E8%A6%81%E7%B4%A0%E3%82%92%E6%9B%B8%E3%81%8F)
  * [`hgroup`要素のことは忘れる](#hgroup%E8%A6%81%E7%B4%A0%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AF%E5%BF%98%E3%82%8C%E3%82%8B)
  * [`address`要素は連絡先情報にのみ使う](#address%E8%A6%81%E7%B4%A0%E3%81%AF%E9%80%A3%E7%B5%A1%E5%85%88%E6%83%85%E5%A0%B1%E3%81%AB%E3%81%AE%E3%81%BF%E4%BD%BF%E3%81%86)
* [グルーピングコンテンツ](#%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%94%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84)
  * [`pre`要素は改行で始めない](#pre%E8%A6%81%E7%B4%A0%E3%81%AF%E6%94%B9%E8%A1%8C%E3%81%A7%E5%A7%8B%E3%82%81%E3%81%AA%E3%81%84)
  * [`blockquote`要素内でも適切な要素を使う](#blockquote%E8%A6%81%E7%B4%A0%E5%86%85%E3%81%A7%E3%82%82%E9%81%A9%E5%88%87%E3%81%AA%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%81%86)
  * [`blockquote`要素内に帰属情報を含めない](#blockquote%E8%A6%81%E7%B4%A0%E5%86%85%E3%81%AB%E5%B8%B0%E5%B1%9E%E6%83%85%E5%A0%B1%E3%82%92%E5%90%AB%E3%82%81%E3%81%AA%E3%81%84)
  * [リスト項目は1行に1つずつ書く](#%E3%83%AA%E3%82%B9%E3%83%88%E9%A0%85%E7%9B%AE%E3%81%AF1%E8%A1%8C%E3%81%AB1%E3%81%A4%E3%81%9A%E3%81%A4%E6%9B%B8%E3%81%8F)
  * [`ol`要素では`type`属性を使う](#ol%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AFtype%E5%B1%9E%E6%80%A7%E3%82%92%E4%BD%BF%E3%81%86)
  * [`dl`を会話のために使わない](#dl%E3%82%92%E4%BC%9A%E8%A9%B1%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [`figcaption`要素は`figure`要素の最初か最後に置く](#figcaption%E8%A6%81%E7%B4%A0%E3%81%AFfigure%E8%A6%81%E7%B4%A0%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%8B%E6%9C%80%E5%BE%8C%E3%81%AB%E7%BD%AE%E3%81%8F)
  * [`main`要素を使う](#main%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%81%86)
  * [できる限り`div`要素は避ける](#%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8Adiv%E8%A6%81%E7%B4%A0%E3%81%AF%E9%81%BF%E3%81%91%E3%82%8B)
* [テキストレベルセマンティックス](#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%83%AC%E3%83%99%E3%83%AB%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9)
  * [グループ化できるリンクは分割しない](#%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E5%8C%96%E3%81%A7%E3%81%8D%E3%82%8B%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AF%E5%88%86%E5%89%B2%E3%81%97%E3%81%AA%E3%81%84)
  * [リソースをダウンロードさせる場合は`download`属性を使う](#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%95%E3%81%9B%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AFdownload%E5%B1%9E%E6%80%A7%E3%82%92%E4%BD%BF%E3%81%86)
  * [`rel`や`hreflang`、`type`属性を必要ならば使う](#rel%E3%82%84hreflangtype%E5%B1%9E%E6%80%A7%E3%82%92%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%89%E3%81%B0%E4%BD%BF%E3%81%86)
  * [リンク文字列は明確にする](#%E3%83%AA%E3%83%B3%E3%82%AF%E6%96%87%E5%AD%97%E5%88%97%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%81%99%E3%82%8B)
  * [`em`要素を警告や注意に使わない](#em%E8%A6%81%E7%B4%A0%E3%82%92%E8%AD%A6%E5%91%8A%E3%82%84%E6%B3%A8%E6%84%8F%E3%81%AB%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [できる限り`s`や`i`、`b`、`u`要素を避ける](#%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8As%E3%82%84ibu%E8%A6%81%E7%B4%A0%E3%82%92%E9%81%BF%E3%81%91%E3%82%8B)
  * [`q`要素内へ引用符は置かない](#q%E8%A6%81%E7%B4%A0%E5%86%85%E3%81%B8%E5%BC%95%E7%94%A8%E7%AC%A6%E3%81%AF%E7%BD%AE%E3%81%8B%E3%81%AA%E3%81%84)
  * [`abbr`要素へ`title`属性を追加する](#abbr%E8%A6%81%E7%B4%A0%E3%81%B8title%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`ruby`要素は冗長にマークアップする](#ruby%E8%A6%81%E7%B4%A0%E3%81%AF%E5%86%97%E9%95%B7%E3%81%AB%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%81%99%E3%82%8B)
  * [機械的に解釈可能でない`time`要素では`datetime`属性を追加する](#%E6%A9%9F%E6%A2%B0%E7%9A%84%E3%81%AB%E8%A7%A3%E9%87%88%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%AA%E3%81%84time%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AFdatetime%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [コードの言語は`class`属性で`language-`で始めることで指定する](#%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E8%A8%80%E8%AA%9E%E3%81%AFclass%E5%B1%9E%E6%80%A7%E3%81%A7language-%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  * [できる限り`kbd`要素はシンプルにする](#%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8Akbd%E8%A6%81%E7%B4%A0%E3%81%AF%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AB%E3%81%99%E3%82%8B)
  * [できる限り`span`要素は使わない](#%E3%81%A7%E3%81%8D%E3%82%8B%E9%99%90%E3%82%8Aspan%E8%A6%81%E7%B4%A0%E3%81%AF%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [`br`要素の後ろでは改行する](#br%E8%A6%81%E7%B4%A0%E3%81%AE%E5%BE%8C%E3%82%8D%E3%81%A7%E3%81%AF%E6%94%B9%E8%A1%8C%E3%81%99%E3%82%8B)
  * [見た目だけのために`br`要素を使わない](#%E8%A6%8B%E3%81%9F%E7%9B%AE%E3%81%A0%E3%81%91%E3%81%AE%E3%81%9F%E3%82%81%E3%81%ABbr%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
* [編集](#%E7%B7%A8%E9%9B%86)
  * [`ins`や`del`要素は他の要素をまたがせない](#ins%E3%82%84del%E8%A6%81%E7%B4%A0%E3%81%AF%E4%BB%96%E3%81%AE%E8%A6%81%E7%B4%A0%E3%82%92%E3%81%BE%E3%81%9F%E3%81%8C%E3%81%9B%E3%81%AA%E3%81%84)
* [エンベディッドコンテンツ](#%E3%82%A8%E3%83%B3%E3%83%99%E3%83%87%E3%82%A3%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84)
  * [`picture`要素ではフォールバックのための`img`要素を提供する](#picture%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AF%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEimg%E8%A6%81%E7%B4%A0%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B)
  * [必要な時は`img`要素へ`alt`属性を追加する](#%E5%BF%85%E8%A6%81%E3%81%AA%E6%99%82%E3%81%AFimg%E8%A6%81%E7%B4%A0%E3%81%B8alt%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [可能ならば`alt`属性は空にする](#%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%89%E3%81%B0alt%E5%B1%9E%E6%80%A7%E3%81%AF%E7%A9%BA%E3%81%AB%E3%81%99%E3%82%8B)
  * [可能ならば`alt`属性は省略する](#%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%89%E3%81%B0alt%E5%B1%9E%E6%80%A7%E3%81%AF%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [`iframe`要素の中は空にする](#iframe%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%AD%E3%81%AF%E7%A9%BA%E3%81%AB%E3%81%99%E3%82%8B)
  * [`map`要素の中はマークアップする](#map%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%AD%E3%81%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%81%99%E3%82%8B)
  * [`audio`や`video`要素にフォールバックのためのコンテンツを提供する](#audio%E3%82%84video%E8%A6%81%E7%B4%A0%E3%81%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B)
* [テーブルデータ](#%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%83%87%E3%83%BC%E3%82%BF)
  * [1行に1つのセルを書く](#1%E8%A1%8C%E3%81%AB1%E3%81%A4%E3%81%AE%E3%82%BB%E3%83%AB%E3%82%92%E6%9B%B8%E3%81%8F)
  * [見出しセルには`th`要素を使う](#%E8%A6%8B%E5%87%BA%E3%81%97%E3%82%BB%E3%83%AB%E3%81%AB%E3%81%AFth%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%81%86)
* [フォーム](#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0)
  * [フォームコントロールは`label`要素で括る](#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AFlabel%E8%A6%81%E7%B4%A0%E3%81%A7%E6%8B%AC%E3%82%8B)
  * [可能ならば`for`属性は省略する](#%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%89%E3%81%B0for%E5%B1%9E%E6%80%A7%E3%81%AF%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [`input`要素では適切な`type`属性を使う](#input%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AF%E9%81%A9%E5%88%87%E3%81%AAtype%E5%B1%9E%E6%80%A7%E3%82%92%E4%BD%BF%E3%81%86)
  * [`input type="submit"`には`value`属性を追加する](#input-typesubmit%E3%81%AB%E3%81%AFvalue%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`pattern`属性を持つ`input`要素には`title`属性を追加する](#pattern%E5%B1%9E%E6%80%A7%E3%82%92%E6%8C%81%E3%81%A4input%E8%A6%81%E7%B4%A0%E3%81%AB%E3%81%AFtitle%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`placeholder`属性をラベル付けに使わない](#placeholder%E5%B1%9E%E6%80%A7%E3%82%92%E3%83%A9%E3%83%99%E3%83%AB%E4%BB%98%E3%81%91%E3%81%AB%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  * [`option`要素は1行に1つ書く](#option%E8%A6%81%E7%B4%A0%E3%81%AF1%E8%A1%8C%E3%81%AB1%E3%81%A4%E6%9B%B8%E3%81%8F)
  * [`progress`要素には`max`属性を追加する](#progress%E8%A6%81%E7%B4%A0%E3%81%AB%E3%81%AFmax%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`meter`要素では`min`及び`max`属性を追加する](#meter%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AFmin%E5%8F%8A%E3%81%B3max%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
  * [`legend`要素は`fieldset`要素の最初に置く](#legend%E8%A6%81%E7%B4%A0%E3%81%AFfieldset%E8%A6%81%E7%B4%A0%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%AB%E7%BD%AE%E3%81%8F)
* [スクリプティング](#%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)
  * [JavaScriptでは`type`属性を省略する](#javascript%E3%81%A7%E3%81%AFtype%E5%B1%9E%E6%80%A7%E3%82%92%E7%9C%81%E7%95%A5%E3%81%99%E3%82%8B)
  * [`script`要素の中をコメントアウトしない](#script%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%AD%E3%82%92%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%82%A2%E3%82%A6%E3%83%88%E3%81%97%E3%81%AA%E3%81%84)
  * [`script`要素を動的に生成するテクニックを使わない](#script%E8%A6%81%E7%B4%A0%E3%82%92%E5%8B%95%E7%9A%84%E3%81%AB%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
* [その他](#%E3%81%9D%E3%81%AE%E4%BB%96)
  * [一貫した量でインデントする](#%E4%B8%80%E8%B2%AB%E3%81%97%E3%81%9F%E9%87%8F%E3%81%A7%E3%82%A4%E3%83%B3%E3%83%87%E3%83%B3%E3%83%88%E3%81%99%E3%82%8B)
  * [内部リンクには絶対パスを使う](#%E5%86%85%E9%83%A8%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AB%E3%81%AF%E7%B5%B6%E5%AF%BE%E3%83%91%E3%82%B9%E3%82%92%E4%BD%BF%E3%81%86)
* [投稿者](#%E6%8A%95%E7%A8%BF%E8%80%85)
* [ライセンス](#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9)

<!-- /toc -->


一般
----

### DOCTYPEで始める

DOCTYPEは標準モードを有効にするために必要です。

Bad:

    <html>
      ...
    </html>

Good:

    <!DOCTYPE html>
    <html>
      ...
    </html>


### 置き換えられるべきまたは旧式のDOCTYPEを使わない

もはやDOCTYPEはDTDのためにあるわけではないので、シンプルにしましょう。

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>


### XML宣言を使用しない

まだXHTMLを書きたいんですか？

Bad:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

Good:

    <!DOCTYPE html>


### 文字参照はできる限り使わない

UTF-8でHTML文書を書くなら、Emojiも含めほとんどあらゆる文字はそのまま書けます。

Bad:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

Good:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>


### `&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする

これらの文字は、バグのないHTML文書のため、常にエスケープするべきです。

Bad:

    <h1>The "&" character</h1>

Good:

    <h1>The &quot;&amp;&quot; character</h1>


### 制御文字や不可視文字は数値文字参照を使う

これらの文字は簡単に他の文字と間違えられます。また、仕様ではこれらの文字に人間にわかりやすい名前がついているかどうかを保証していません。

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>


### コメントではその内容の前後へ空白文字を置く

いくつかの文字はコメントの開始タグの直後や終了タグの直前に書くことができません。

Bad:

    <!--This section is non-normative-->

Good:

    <!-- This section is non-normative -->


### 終了タグを省略しない

多分、あなたは終了タグを省略するためのルールを理解していないでしょう。

Bad:

    <html>
      <body>
        ...

Good:

    <html>
      <body>
        ...
      </body>
    </html>


### 空要素の書き方を混ぜない

一貫性は読みやすさのキーポイントです。

Bad:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>


### タグや属性値の前後へ空白文字を置かない

そうする必要はまったくありません。

Bad:

    <h1 class=" title " >HTML Best Practices</h1>

Good:

    <h1 class="title">HTML Best Practices</h1>


### 大文字・小文字を混ぜない

これも一貫性を与えてくれます。

Bad:

    <a HREF="#general">General</A>

Good:

    <a href="#general">General</a>


### 引用符を混ぜない

上に同じです。

Bad:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

Good:

    <img alt="HTML Best Practices" src="/img/logo.jpg">


### 属性を2文字以上の空白文字で区切らない

あなたのよくわからない整形ルールは誰かを混乱させます。

Bad:

    <input   name="q"  type="search">

Good:

    <input name="q" type="search">


### 真偽値を取る属性の値は省略する

この方が簡単に書けますよね？

Bad:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

Good:

    <audio autoplay src="/audio/theme.mp3">


### 名前空間は省略する

SVGやMathMLはHTML5の文書では直接扱えます。

Bad:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

Good:

    <svg>
      ...
    </svg>


### XML属性は使わない

我々はHTML文書を書いています。

Bad:

    <span lang="ja" xml:lang="ja">...</span>

Good:

    <span lang="ja">...</span>


### `data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない

タグ文字列はとても複雑になりえます。こういった簡単なルールによってタグ文字列を読みやすくできるでしょう。

Bad:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">


### 暗黙のセマンティクスを尊重する

いくつかの要素はHTML文章において暗黙のroleを持っているので、わざわざ指定（変更）してはいけません。

Bad:

    <nav role="navigation">
      ...
    </nav>
    
    <hr role="separator">

Good:

    <nav>
      ...
    </nav>
    
    <hr>


文書要素
--------

### `lang`属性を追加する

`lang`属性はHTML文書の翻訳に役立ちます。

Bad:

    <html>

Good:

    <html lang="en-US">


### `lang`属性の値はできる限り短くする

日本語は日本でのみ使われます。つまり国コードは必要ありません。

Bad

    <html lang="ja-JP">

Good:

    <html lang="ja">


文書メタデータ
--------------

### `title`要素を書く

`title`要素の中身は、ブラウザーに限らず、様々なアプリケーションにより利用されます。

Bad:

    <head>
      <meta charset="UTF-8">
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### `base`要素を使わない

絶対パスや絶対URLの方が開発者とユーザーの双方に安全です。

Bad:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

Good:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>


### マイナーな参照先リソースのMIMEタイプを指定する

アプリケーションがそのリソースをどう取り扱うべきかのヒントになります。

Bad:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

Good:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">


### `favicon.ico`へリンクしない

ほとんどのブラウザーは`/favicon.ico`を自動的に非同期で取得します。

Bad:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

Good:

    <!-- Place `favicon.ico` in the root directory. -->


### 代替スタイルシートへ`title`属性を追加する

人間にわかりやすいラベルは人々が適切なスタイルシートを選択しやすくします。

Bad:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">


### 文書の文字エンコーディングを指定する

まだすべてのブラウザーでUTF-8がデフォルトになっていません。

Bad:

    <head>
      <title>HTML Best Practices</title>
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>


### 置き換えられるべき文字エンコーディング指定フォーマットを使わない

HTTPヘッダーはサーバー側で指定されるべきで、簡単に書くべきです。

Bad:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

Good:

    <meta charset="UTF-8">


### 最初に文字エンコーディングを指定する

仕様では文書の先頭1024バイトまでに文字エンコーディングを指定することを要求しています。

Bad:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

Good:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>


### UTF-8を使う

UTF-8ならEmojiを自由に使えます。

Bad:

    <meta charset="Shift_JIS">

Good:

    <meta charset="UTF-8">


### CSSの`type`属性は省略する

HTML5では、`style`要素における`type`属性の初期値は`text/css`です。

Bad:

    <style type="text/css">
      ...
    </style>

Good:

    <style>
      ...
    </style>


### `style`要素の中をコメントアウトしない

この儀式は古いブラウザーのためです。

Bad:

    <style>
    <!--
      ...
      -->
    </style>

Good:

    <style>
      ...
    </style>


### CSSとJavaScriptのタグを混ぜない

時々`script`要素はDOMの構築をブロックします。

Bad:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

Good:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

Also good:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">


セクション
----------

### `body`要素を書く

時々、思っても見ない位置へブラウザーは`body`要素を補完します。

Bad:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

Good:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### `hgroup`要素のことは忘れる

W3C版仕様では削除されました。

Bad:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

Good:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>


### `address`要素は連絡先情報にのみ使う

`address`要素はメールアドレスやSNSアカウント、住所、電話番号など、実際にあなたと連絡できる何かのためのものです。

Bad:

    <address>No rights reserved.</address>

Good:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>


グルーピングコンテンツ
----------------------

### `pre`要素は改行で始めない

最初の改行はブラウザーに無視されますが、2番目以降はそのまま表示されます。

Bad:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

Good:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>


### `blockquote`要素内でも適切な要素を使う

`blockquote`要素の中身は引用で、単なる文字の連続ではありません。

Bad:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>


### `blockquote`要素内に帰属情報を含めない

`blockquote`要素の中身は引用です。

Bad:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

Good:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

Also good (recommended by WHATWG):

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>

Also good too (recommended by W3C):

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    
      <footer>— HTML Best Practices</footer>
    </blockquote>


### リスト項目は1行に1つずつ書く

長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーい行はとっっっっっっっっっっっっっっっっっっっっっっっっっっっても読みづらいです。

Bad:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

Good:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>


### `ol`要素では`type`属性を使う

時々リスト・マーカーは周辺から参照されます。`type`属性を使ってリスト・マーカーを変更すれば、安全に参照できるでしょう。

Bad:

    <head>
      <style>
        .toc {
          list-style-type: upper-roman;
        }
      </style>
    </head>
    <body>
      <ol class="toc">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

Good:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>


### `dl`を会話のために使わない

HTML5では`dl`要素は関連付けリストに限定されています。

Bad:

    <dl>
      <dt>Costello</dt>
      <dd>Look, you gotta first baseman?</dd>
      <dt>Abbott</dt>
      <dd>Certainly.</dd>
      <dt>Costello</dt>
      <dd>Who’s playing first?</dd>
      <dt>Abbott</dt>
      <dd>That’s right.</dd>
      <dt>Costello becomes exasperated.</dd>
      <dt>Costello</dt>
      <dd>When you pay off the first baseman every month, who gets the money?</dd>
      <dt>Abbott</dt>
      <dd>Every dollar of it.</dd>
    </dl>

Good:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>


### `figcaption`要素は`figure`要素の最初か最後に置く

仕様では`figcaption`要素を`figure`要素の中ほどに置くことは許可されていません。

Bad:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

Good:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>


### `main`要素を使う

`main`要素はコンテンツをまとめるために使えます。

Bad:

    <div id="content">
      ...
    </div>

Good:

    <main>
      ...
    </main>


### できる限り`div`要素は避ける

`div`要素は最後の手段です。

Bad:

    <div class="chapter">
      ...
    </div>

Good:

    <section>
      ...
    </section>


テキストレベルセマンティックス
------------------------------

### グループ化できるリンクは分割しない

`a`要素はほとんどの要素（フォームコントロールのようなインタラクティブ要素や`a`要素自身以外）を括ることができます。

Bad:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

Good:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>


### リソースをダウンロードさせる場合は`download`属性を使う

こうすることで確実にダウンロードするリンク先のリソースをローカルに保存させることができます。

Bad:

    <a href="/downloads/offline.zip">offline version</a>

Good:

    <a download href="/downloads/offline.zip">offline version</a>


### `rel`や`hreflang`、`type`属性を必要ならば使う

これらのヒントは、アプリケーションがリンク先のリソースをどう扱えば良いのかの助けになります。

Bad:

    <a href="/ja/pdf">Japanese PDF version</a>

Good:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>


### リンク文字列は明確にする

リンク文字列はリンク先のリソースのラベルであるべきです。

Bad:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

Good:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


### `em`要素を警告や注意に使わない

それらは深刻なものです。ですから`strong`要素の方がより相応しいはずです。

Bad:

    <em>Caution!</em>

Good:

    <strong>Caution!</strong>


### できる限り`s`や`i`、`b`、`u`要素を避ける

これらの要素のセマンティクスは人類には難しすぎます。

Bad:

    <i class="icon-search"></i>

Good:

    <span class="icon-search" aria-hidden="true"></span>


### `q`要素内へ引用符は置かない

引用符はブラウザーが提供します。

Bad:

    <q>“For writing maintainable and scalable HTML documents”</q>

Good:

    <q>For writing maintainable and scalable HTML documents</q>

Also good:

    “For writing maintainable and scalable HTML documents”


### `abbr`要素へ`title`属性を追加する

他に完全表記を提示する方法がありません。

Bad:

    <abbr>HBP</abbr>

Good:

    <abbr title="HTML Best Practices">HBP</abbr>


### `ruby`要素は冗長にマークアップする

`ruby`要素のサポートはまだモダンブラウザー間でも完了していません。

Bad:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

Good:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>


### 機械的に解釈可能でない`time`要素では`datetime`属性を追加する

`datetime`属性を使わない場合、`time`要素の中身は限定されます。

Bad:

    <time>Dec 19, 2014</time>

Good:

    <time datetime="2014-12-19">Dec 19, 2014</time>


### コードの言語は`class`属性で`language-`で始めることで指定する

これは正式な方法ではありませんが、仕様では言及されています。

Bad:

    <code>&lt;DOCTYPE html&gt;</code>

Good:

    <code class="language-html">&lt;DOCTYPE html&gt;</code>


### できる限り`kbd`要素はシンプルにする

入れ子にした`kbd`要素は人類には難しすぎます。

Bad:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

Good:

    <kbd>Ctrl+F5</kbd>


### できる限り`span`要素は使わない

`span`要素は最後の手段です。

Bad:

    HTML <span class="best">Best</span> Practices

Good:

    HTML <em>Best</em> Practices


### `br`要素の後ろでは改行する

`br`要素が使われる場所には、間違いなく改行が必要です。

Bad:

    <p>HTML<br>Best<br>Practices</p>

Good:

    <p>HTML<br>
    Best<br>
    Practices</p>


### 見た目だけのために`br`要素を使わない

`br`要素は改行のためにあるのではなく、コンテンツに必要な改行のためにあります。

Bad:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

Good:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>


編集
----

### `ins`や`del`要素は他の要素をまたがせない

要素は他の要素をまたぐことはできません。

Bad:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

Good:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>


エンベディッドコンテンツ
------------------------

### `picture`要素ではフォールバックのための`img`要素を提供する

`picture`要素のサポートはまだよくありません。

Bad:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

Good:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>


### 必要な時は`img`要素へ`alt`属性を追加する

`alt`属性は、画像を表示できなかったり、画像の読み込みを無効にしている環境へ助けになります。

Bad:

    <img src="/img/logo.png">

Good:

    <img alt="HTML Best Practices" src="/img/logo.png">


### 可能ならば`alt`属性は空にする

画像が補助的なものならば、きっと周囲に同等のコンテンツが存在するはずです。

Bad:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

Good:

    <img alt="" src="/img/icon/help.png"> Help


### 可能ならば`alt`属性は省略する

たまにどのような文字列が適切な`alt`属性の値かわからないこともあります。

Bad:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

Good:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)


### `iframe`要素の中は空にする

その内容にはいくつかの制限があります。空にすれば安全です。

Bad:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

Good:

    <iframe src="/ads/default.html"></iframe>


### `map`要素の中はマークアップする

その中身はスクリーン・リーダーへ提供されます。

Bad:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

Good:

    <map name="toc">
      <p>
        <a href="#general">General</a>
        <area alt="General" coords="0, 0, 40, 40" href="#General"> |
        <a href="#the_root_element">The root element</a>
        <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
        <a href="#sections">Sections</a>
        <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
      </p>
    </map>


### `audio`や`video`要素にフォールバックのためのコンテンツを提供する

HTML5で新しく作られた要素にはフォールバックのためのコンテンツが必要です。

Bad:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

Good:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>


テーブルデータ
--------------

### 1行に1つのセルを書く

長い行は把握しづらいです。

Bad:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

Good:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>


### 見出しセルには`th`要素を使う

避ける理由はないでしょう。

Bad:

    <table>
      <thead>
        <tr>
          <td><strong>Element</strong></td>
          <td><strong>Empty</strong></td>
          <td><strong>Tag omission</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong><code>pre</code></strong></td>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <td><strong><code>img</code></strong></td>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>

Good:

    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Empty</th>
          <th>Tag omission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>pre</code></th>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <th><code>img</code></th>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>


フォーム
--------

### フォームコントロールは`label`要素で括る

`label`要素はフォーム要素へフォーカスを当てるのに役立ちます。

Bad:

    <p>Query: <input name="q" type="text"></p>

Good:

    <p><label>Query: <input name="q" type="text"></label></p>


### 可能ならば`for`属性は省略する

`label`要素はいくつかのフォーム要素を含められます。

Bad:

    <label for="q">Query: </label><input id="q" name="q" type="text">

Good:

    <label>Query: <input name="q" type="text"></label>


### `input`要素では適切な`type`属性を使う

適切な`type`属性により、ブラウザーは`input`要素へちょっとした機能を与えてくれます。

Bad:

    <label>Search keyword: <input name="q" type="text"></label>

Good:

    <label>Search keyword: <input name="q" type="search"></label>


### `input type="submit"`には`value`属性を追加する

送信ボタンのデフォルトのラベルはブラウザーや言語設定によってまちまちです。

Bad:

    <input type="submit">

Good:

    <input type="submit" value="Search">


### `pattern`属性を持つ`input`要素には`title`属性を追加する

もし入力したテキストが`pattern`属性にマッチしない場合、`title`属性の値がヒントとして表示されます。

Bad:

    <input name="security-code" pattern="[0-9]{3}" type="text">

Good:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">


### `placeholder`属性をラベル付けに使わない

`label`要素がラベルのためにあり、`placeholder`属性は短いヒントのためにあります。

Bad:

    <input name="email" placeholder="Email" type="text">

Good:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>


### `option`要素は1行に1つ書く

長い行は把握しづらいです。

Bad:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

Good:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>


### `progress`要素には`max`属性を追加する

`max`属性があると、`value`属性を簡単な形式で書くことができます。

Bad:

    <progress value="0.5"> 50%</progress>

Good:

    <progress max="100" value="50"> 50%</progress>


### `meter`要素では`min`及び`max`属性を追加する

`min`と`max`属性があると、`value`属性を簡単な形式で書くことができます。

Bad:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

Good:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>


### `legend`要素は`fieldset`要素の最初に置く

仕様がそう要求しています。

Bad:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

Good:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>


スクリプティング
----------------

### JavaScriptでは`type`属性を省略する

HTML5では、`script`要素における`type`属性の初期値は`text/javascript`です。

Bad:

    <script type="text/javascript">
      ...
    </script>

Good:

    <script>
      ...
    </script>


### `script`要素の中をコメントアウトしない

この儀式は古いブラウザーのためです。

Bad:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

Also bad:

    <script>
    <!--
      ...
    // -->
    </script>

Good:

    <script>
      ...
    </script>


### `script`要素を動的に生成するテクニックを使わない

`async`属性が明快さとパフォーマンスの両面で最良です。

Bad:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

Good:

    <script async defer src="//example.com/widget.js"></script>


その他
------

### 一貫した量でインデントする

インデントは読みやすさにおいて重要です。

Bad:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

Good:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>


### 内部リンクには絶対パスを使う

絶対パスはインターネット回線のないローカルの環境でもうまく動きます。

Bad:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

Good:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>


投稿者
------

- [@hail2u]
- [@momdo]


ライセンス
----------

[CC0]


[@hail2u]: https://github.com/hail2u
[@momdo]:  https://github.com/momdo
[CC0]:     http://creativecommons.org/publicdomain/zero/1.0/
