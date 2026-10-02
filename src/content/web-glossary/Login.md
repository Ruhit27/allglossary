---
description: Proving to a website who you are, usually with an email and password, to get into your account.
---

Logging in is the step where a website checks you are who you claim to be — usually with a password, sometimes with a code sent to your phone, or by signing in with Google or Apple. The checking is called [authentication](./Authentication.md), and it happens on the [server](./Server.md).

Once you've logged in, the server starts a [session](./Session.md) and gives your [browser](./Browser.md) a [cookie](./Cookie.md) to prove it on later requests, so you don't have to type your password on every page. Logging out ends the session.

Login [forms](./Form.md) must only ever be sent over [HTTPS](./HTTPS.md), so passwords can't be read on the way.

_Avoid:_ "login" and "account" as the same — your account is what the site stores about you; logging in is how you prove it's yours.

_Usage:_

"Can we email users their password when they forget it?"

"No — we shouldn't even be able to see it. Send a reset link instead."
