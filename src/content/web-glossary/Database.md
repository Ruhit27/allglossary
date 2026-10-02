---
description: An organized store of data that a website's backend reads and writes.
---

Where a website keeps the things it must remember: user accounts, orders, posts, comments. The [backend](./Backend.md) reads from and writes to the database; visitors never touch it directly.

Many databases store data in tables of rows and columns and are queried with a language called SQL — PostgreSQL and MySQL are common examples. Others store flexible documents, often similar to [JSON](./JSON.md). Busy sites put a [cache](./Cache.md) in front of the database so common questions don't hit it every time.

Because it holds the most valuable data, the database needs regular backups and careful access control, and it usually sits on its own [server](./Server.md), hidden from the internet.

_Avoid:_ treating the database as just a big spreadsheet — it enforces rules and handles many users changing data at once.

_Usage:_

"Can we just let the frontend talk to the database directly?"

"No. Everything goes through the backend, which checks who's asking and what they're allowed to see."
