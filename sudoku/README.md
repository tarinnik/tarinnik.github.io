# Server

Due to the way local storage works on local files, items saved to local storage on one
page are inaccessible to another page. There are, however, accessible when served from
a server. I used a python http server to test the local storage implementation on my
machine. To setup the server run `python3 -m http.server 12345` in the root directory
of the project. It will then be accessible from `127.0.0.1:12345`. The website will
still work without it, but the statistics page won't display any values, and any settings
you change won't be registered. I have manually enabled all but one settings, quick nav,
when a server isn't used so that you can still test some of the settings.