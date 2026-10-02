---
description: The side of a web connection that asks for something — usually your browser or app.
---

In every web conversation one side asks and the other answers. The asking side is the client; the answering side is the [server](./Server.md). Your [browser](./Browser.md) is the most common client, but phone apps, smart TVs and other programs calling an [API](./API.md) are clients too.

The client sends a [request](./Request%20and%20response.md) and gets a response back. This split shapes how web software is built: code that runs in the browser is the [frontend](./Frontend.md) (client side), and code that runs on the server is the [backend](./Backend.md) (server side).

Anything on the client can be seen and changed by the user, so important checks — like whether someone has paid — must happen on the server.

_Avoid:_ "client" meaning a customer — here it's the device or app that asks for something, not a person.

_Usage:_

"We hide the admin button for non-admins, so they can't delete posts."

"That's only the client. The server has to refuse the delete request too."
