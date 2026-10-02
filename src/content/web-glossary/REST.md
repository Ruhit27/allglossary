---
description: A popular style for designing web APIs around resources and standard HTTP methods.
---

REST (Representational State Transfer) is a set of conventions for [APIs](./API.md). Everything is a resource with its own [URL](./URL.md), like /orders or /orders/42, and you use standard [HTTP](./HTTP.md) methods on it: GET to read, POST to create, PUT or PATCH to update, DELETE to remove. Results come back with a [status code](./Status%20code.md), usually as [JSON](./JSON.md).

Because it reuses the web's own rules, a REST API is predictable: if you know GET /customers lists customers, you can guess what GET /customers/7 does. Each [request](./Request%20and%20response.md) is self-contained, so the server doesn't need to remember earlier ones.

REST isn't the only option. Alternatives like GraphQL let the client ask for exactly the data it wants in one request.

_Avoid:_ calling any API that uses JSON "RESTful" — REST is about resources, URLs and methods, not the data format.

_Usage:_

"How do I delete a comment through the API?"

"Send DELETE to /comments/ and the comment's ID. It works like the other endpoints."
