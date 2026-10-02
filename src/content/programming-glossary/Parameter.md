---
description: An input a function accepts, so it can work with different values each time it's called.
---

A [function](./Function.md) like `greet(name)` has one parameter, `name`. Each time you call it, you pass a value in: `greet("Ada")` says hello to Ada, `greet("Sam")` to Sam. The function is written once and works for any name. The value passed in a particular call is often called an argument.

Parameters make functions flexible and reusable. Inside the function, a parameter behaves like a [variable](./Variable.md) whose [scope](./Scope.md) is just that function. Many languages let parameters have default values, used when the caller doesn't supply one.

Too many parameters is a warning sign. A function needing eight inputs is usually doing too much and could be split.

_Avoid:_ "parameter" meaning a limit, as in everyday speech — in code it's an input slot a function fills each time it runs.

_Usage:_

"The report function always uses last month."

"The month is hard-coded. Make it a parameter so we can ask for any month."
