---
description: The set of rules browsers and servers use to request and send web pages and data.
---

HyperText Transfer Protocol: the common language of the web. A [client](./Client.md) sends an HTTP [request](./Request%20and%20response.md) — "GET me /about" — and the [server](./Server.md) sends back a response with a [status code](./Status%20code.md) and the content.

HTTP requests have a method saying what you want to do. GET fetches something, POST sends something (like a [form](./Form.md)), and others update or delete. HTTP is stateless: each request stands alone, so the server doesn't remember you between requests. [Cookies](./Cookie.md) were added to work around that.

Plain HTTP sends everything as readable text, so anyone along the way could see or change it. That's why the web has moved to [HTTPS](./HTTPS.md), the encrypted version.

_Avoid:_ "HTTP" as the web itself — it's the rules for asking and answering, not the pages.

_Usage:_

"Why does the browser say 'Not secure'?"

"The page is loading over plain HTTP. Switch it to HTTPS and the warning goes away."
