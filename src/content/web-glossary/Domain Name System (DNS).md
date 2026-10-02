---
description: The internet's address book, which turns domain names into IP addresses.
---

Computers connect using numeric [IP addresses](./IP%20address.md), but people type [domain names](./Domain%20name.md). DNS is the system that looks up one from the other. When you visit example.com, your device asks a DNS resolver — often run by your [ISP](./Internet%20service%20provider%20%28ISP%29.md) — which finds the answer and passes back the address.

Domain owners control their DNS records, usually through their [domain registrar](./Domain%20registrar.md) or [hosting](./Hosting.md) provider. A record might say "example.com goes to this server" or "email for example.com goes to that provider". Answers are kept in a [cache](./Cache.md) for a while, so changes can take minutes to hours to spread.

DNS is the first step of almost every page load. If DNS fails, the site seems down, even though its [server](./Server.md) is fine.

_Avoid:_ "DNS" as where the website lives — DNS only points the name to an address; the site is hosted elsewhere.

_Usage:_

"I pointed the domain to the new host but I still see the old site."

"That's DNS caching. Give it an hour, or check from your phone on mobile data."
