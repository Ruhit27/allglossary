---
description: A simple text format for structured data, widely used for sending data between programs.
---

JavaScript Object Notation. JSON writes data as labeled values in curly braces, such as `{"name": "Ada", "age": 36}` — readable by people and easy for programs to process. Despite the name, almost every programming language can read and write it.

JSON is the standard format for web [APIs](./API.md), including most [REST](./REST.md) APIs. When the [frontend](./Frontend.md) asks the [backend](./Backend.md) for your orders, the [response](./Request%20and%20response.md) is usually JSON, which [JavaScript](./JavaScript.md) then turns into something on screen. It's also used for configuration files and in [local storage](./Local%20storage.md).

JSON is strict: one missing comma or quote and the whole thing fails to parse.

_Avoid:_ "JSON" as only for JavaScript — almost every programming language reads and writes it.

_Usage:_

"The app crashed after I updated the settings file."

"There's a trailing comma on line 12. JSON doesn't allow that."
