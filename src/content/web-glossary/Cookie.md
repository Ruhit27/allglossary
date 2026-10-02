---
description: A small piece of data a website stores in your browser and gets back on every visit.
---

[HTTP](./HTTP.md) on its own doesn't remember anything between [requests](./Request%20and%20response.md). Cookies fix that. A [server](./Server.md) sends a small labeled value — "session=abc123" — and the [browser](./Browser.md) stores it and automatically sends it back with every later request to that site.

That's how a site keeps you logged in, remembers your cart, or remembers your language. A cookie usually holds an ID for a [session](./Session.md) kept on the server, rather than your actual details. Cookies have expiry dates, and settings that limit which sites can read them and whether they travel only over [HTTPS](./HTTPS.md).

Cookies set by the site you're visiting are generally useful. [Third-party cookies](./Third-party%20cookie.md) set by other companies are the ones used for [tracking](./Tracking.md), and the reason for [consent banners](./Consent%20banner.md).

_Avoid:_ "cookies" as always bad — most are what keep you logged in and your cart full.

_Usage:_

"Customers keep getting logged out."

"Their login cookie expires after an hour. Let's extend it and add a 'remember me' option."
