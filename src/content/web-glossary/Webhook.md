---
description: An automatic message one system sends to another's URL when something happens.
---

Normally your code calls an [API](./API.md) to ask for news: "any new payments?". A webhook flips this around. You give another service a [URL](./URL.md) on your [backend](./Backend.md), and it sends an [HTTP](./HTTP.md) [request](./Request%20and%20response.md) to that URL the moment something happens — a payment succeeded, a form was submitted, code was pushed.

That saves checking over and over, and reacts instantly. Payment providers, [version control](./Version%20control.md) services and chat tools all use webhooks. The message body is usually [JSON](./JSON.md) describing the event.

Since anyone could send a request to your webhook URL, good webhooks include a signature you check to confirm the message is real.

_Avoid:_ "webhook" and "API" as opposites — a webhook is part of an API; it just sends the message to you instead of waiting to be asked.

_Usage:_

"How do we know when a customer pays?"

"The payment provider sends a webhook to our backend, and we mark the order paid."
