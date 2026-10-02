---
description: A piece of code that works out to a value, such as 2 + 3 or price * quantity.
---

An expression is code the computer can evaluate to get a single value. `2 + 3` gives 5. `price * quantity` gives a number. `age >= 18` gives true or false — a [boolean](./Boolean.md). Even a lone [variable](./Variable.md) name is an expression: it gives whatever value the variable holds.

Expressions are built from values, variables, [operators](./Operator.md) and [function](./Function.md) calls, and they can nest: `(price * quantity) - discount`. They sit inside [statements](./Statement.md): in `total = price * quantity`, the right-hand side is the expression and the whole line is the statement.

When a result is wrong, breaking a long expression into named steps often reveals where.

_Avoid:_ "expression" in its everyday sense of a phrase or feeling — in code it's anything that produces a value.

_Usage:_

"This one line is impossible to read."

"Split the expression into a few named variables. Each step will be clear, and we can check them one by one."
