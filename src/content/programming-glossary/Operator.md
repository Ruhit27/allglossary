---
description: A symbol that does something with values, such as + for adding or == for comparing.
---

Operators are the verbs of [expressions](./Expression.md). Maths operators work on numbers: `+`, `-`, `*` (multiply), `/` (divide). Comparison operators produce a [boolean](./Boolean.md): `==` (equal to), `!=` (not equal), `<` and `>`. Logical operators combine booleans: AND, OR and NOT (written `&&`, `||`, `!` in many languages).

The same symbol can mean different things for different [data types](./Data%20type.md): `+` adds numbers but joins [strings](./String.md), so `"5" + "5"` gives `"55"`.

A classic beginner slip is mixing up `=` (store a value in a [variable](./Variable.md)) with `==` (compare two values). It's a different operator, and the program behaves very differently.

_Avoid:_ "=" for checking equality — in most languages a single = stores a value; comparing needs ==.

_Usage:_

"The code says every user is an admin."

"Line 12 uses = instead of ==, so it sets the role to admin instead of checking it."
