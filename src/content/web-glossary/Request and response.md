---
description: The basic exchange of the web: a client asks for something and the server answers.
---

Everything on the web happens in pairs. The [client](./Client.md) sends a request saying what it wants — a [URL](./URL.md), a method like GET or POST, and some extra details called headers, such as which language you prefer or your [cookies](./Cookie.md). The [server](./Server.md) sends back a response: a [status code](./Status%20code.md), headers of its own, and usually some content like [HTML](./HTML.md), an image or [JSON](./JSON.md).

Loading a single [web page](./Web%20page.md) usually takes dozens of these pairs — one for the HTML, then one for each image, stylesheet and script it mentions. Browser developer tools show the full list, which is the first place to look when a page is slow or broken.

Every request takes time to travel, so fewer and smaller requests make a faster site — a big part of [web performance](./Web%20performance.md).

_Avoid:_ thinking one page equals one request — most pages make dozens.

_Usage:_

"The page shows but the pictures are missing."

"Open the network tab. The image requests are probably getting error responses."
