# 레거시 혹은 폐기된 DOCTYPE을 쓰지 마라

DOCTYPE은 더 이상 DTD가 아니다, 간단해져라

Bad:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

Good:

    <!DOCTYPE html>
