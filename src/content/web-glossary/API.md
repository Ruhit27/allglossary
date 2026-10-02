---
description: Application Programming Interface: a defined way for programs to ask another program for data or actions.
---

An API is a menu of requests one program offers to others. A weather service's API might accept "give me tomorrow's forecast for Paris" and answer with the data. On the web, APIs usually work over [HTTP](./HTTP.md) and return [JSON](./JSON.md).

APIs connect the [frontend](./Frontend.md) to the [backend](./Backend.md): your browser calls the site's API to load your messages or place an order. They also connect different companies' systems — a shop uses a payment provider's API to charge cards, and a map provider's API to show locations. [Webhooks](./Webhook.md) are the reverse: the other system calls you.

A common style for web APIs is [REST](./REST.md). Good APIs are documented, stable and versioned, because other people's code depends on them.

_Avoid:_ "API" as a website or app — it's a way for programs to talk to each other, not something people browse.

_Usage:_

"The mobile app stopped loading orders this morning."

"We renamed a field in the orders API. The app is still asking for the old name."
