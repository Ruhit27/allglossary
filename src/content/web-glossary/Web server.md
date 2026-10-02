---
description: Software that receives HTTP requests and sends back pages, files or data.
---

The program that actually answers when a [browser](./Browser.md) comes knocking. It listens for [HTTP](./HTTP.md) [requests](./Request%20and%20response.md), figures out what's being asked for, and sends a response. Popular ones include Nginx, Apache and Caddy, and many [backend](./Backend.md) frameworks include their own.

For a [static site](./Static%20site.md), the web server just finds the right file and sends it. For a dynamic site, it passes the request to the application code, which might query a [database](./Database.md) and build the page. Web servers also handle [HTTPS](./HTTPS.md) certificates, redirects and compression.

"Web server" can mean the software or the machine running it. Usually the meaning is clear from context.

_Avoid:_ confusing a web server with a website — one web server can serve many websites.

_Usage:_

"We're moving to a bigger machine."

"Copy the web server config too, or the redirects and HTTPS settings will be lost."
