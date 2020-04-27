# `audio`나 `video` 요소를 위한 폴백 콘텐츠를 제공해라.

HTML에 새로 추가된 요소들을 위해 폴백 콘텐츠가 필요하다.

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
