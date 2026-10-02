---
description: A check that decides which code runs, usually written with if and else.
---

A condition lets a program make choices: "if the cart is empty, show a message; otherwise, show the total". In code: `if cart_is_empty: ... else: ...`. The check itself is a [boolean](./Boolean.md) [expression](./Expression.md) — something that's true or false — often built with comparison [operators](./Operator.md).

Conditions can chain ("else if") and nest inside each other, which is how programs handle many different cases. Together with [loops](./Loop.md), they're what makes a program more than a fixed list of [statements](./Statement.md).

Lots of [bugs](./Bug.md) live in conditions: a case nobody thought of, or `>` where `>=` was meant. Good [testing](./Testing.md) checks the edges — exactly 18, not just 17 and 30.

_Avoid:_ "condition" meaning a requirement or the state something's in — in code it's the check that picks which way to go.

_Usage:_

"Customers who are exactly 18 can't sign up."

"The condition says age > 18. It should be age >= 18."
