# Add `apple-touch-icon` link

A default request path for touch icon was changed suddenly.

Bad:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

Good:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">
