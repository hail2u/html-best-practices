# Não utilize protocolo relativo em URL para recursos externos

Com o protocolo você pode carregar recursos externos com seguração e estabilidade.

Ruim:

    <script src="//example.com/js/library.js">

Bom:

    <script src="https://example.com/js/library.js">
