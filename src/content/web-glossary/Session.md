---
description: The period a website remembers you as one visitor, usually from login until logout or timeout.
---

A session ties a series of separate [requests](./Request%20and%20response.md) together as "the same person". When you [log in](./Login.md), the [server](./Server.md) creates a session, gives your [browser](./Browser.md) an ID for it in a [cookie](./Cookie.md), and keeps your details on its side. Each later request carries the ID, so the server knows it's still you.

Sessions end when you log out, close the browser (for some), or after a period of inactivity. Banks use short sessions for safety; social apps keep you logged in for months.

Since the session ID proves who you are, anyone who steals it can act as you. That's why session cookies should only travel over [HTTPS](./HTTPS.md).

_Avoid:_ "session" as a single page view — it spans everything one visitor does until it ends.

_Usage:_

"Why do I have to log in again every morning?"

"Sessions time out after eight hours. That's a security choice, not a bug."
