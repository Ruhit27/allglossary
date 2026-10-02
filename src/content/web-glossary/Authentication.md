---
description: Checking that someone is who they say they are, such as during login.
---

Authentication answers "who are you?". On the web it usually happens at [login](./Login.md): you prove your identity with something you know (a password), something you have (a code from your phone) or both. Many sites also let you sign in with an existing account from Google or Apple, so they don't have to store your password.

Authentication happens on the [backend](./Backend.md). Once you're proven, the server starts a [session](./Session.md) or issues a token, so later [requests](./Request%20and%20response.md) can show who you are without asking again. [APIs](./API.md) authenticate too, often using a secret key.

It's different from deciding what you're allowed to do, which comes after. Logging in proves you're Sam; a separate check decides whether Sam may delete posts.

_Avoid:_ "logged in" meaning "allowed to do anything" — proving who you are is separate from checking permissions.

_Usage:_

"Anyone logged in can see the admin page."

"Authentication works, but we never check whether they're an admin. Add a permission check."
