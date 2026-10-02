---
description: The part of a website that runs on the server: data, business rules and everything users don't see.
---

The backend is the [server](./Server.md) side of a [website](./Website.md). It stores and retrieves data in a [database](./Database.md), checks who you are through [authentication](./Authentication.md), applies the rules (prices, permissions, stock levels), and sends results back to the [frontend](./Frontend.md), usually through an [API](./API.md).

Backend code can be written in many languages — Python, JavaScript, Java, Go, PHP and more — because, unlike the frontend, it runs on machines the site owner controls. That makes it the safe place for secrets like payment keys.

When a site is slow to save something, or data comes back wrong, the problem is often in the backend.

_Avoid:_ "backend" as only the database — it also runs the rules, logins and connections to other services.

_Usage:_

"Can users see our payment API key?"

"Not if it stays on the backend. Never put it in frontend code."
