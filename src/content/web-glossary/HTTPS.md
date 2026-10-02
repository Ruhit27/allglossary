---
description: The secure version of HTTP, which encrypts traffic between browser and server.
---

[HTTP](./HTTP.md) with encryption added, using a technology called TLS. With HTTPS, the data between your [browser](./Browser.md) and the [server](./Server.md) is scrambled, so others on the network — a café Wi-Fi, your [ISP](./Internet%20service%20provider%20%28ISP%29.md) — can't read or change it. It also proves you're talking to the real site, using a certificate tied to its [domain name](./Domain%20name.md).

The padlock in the address bar means a page loaded over HTTPS. Browsers now mark plain HTTP pages as "Not secure", and many modern features only work over HTTPS. Certificates are free today, and most [hosting](./Hosting.md) sets them up automatically.

HTTPS protects the connection, not the site's honesty. A scam site can have a padlock too.

_Avoid:_ "the padlock means the site is safe" — it means the connection is private, not that the site is trustworthy.

_Usage:_

"Do we really need HTTPS? We don't take payments."

"Yes. Logins, cookies and form data all need it, and browsers warn visitors away without it."
