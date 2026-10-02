---
description: A value that can only be true or false.
---

Named after the mathematician George Boole, a boolean is the simplest [data type](./Data%20type.md): just true or false. Is the user logged in? Is the cart empty? Has the payment gone through? Each answer is a boolean.

Booleans drive every decision a [program](./Program.md) makes. A [condition](./Condition.md) like `if is_logged_in` checks a boolean; comparisons like `age >= 18` produce one. [Operators](./Operator.md) combine them: AND (both must be true), OR (either), NOT (flip it).

Naming boolean [variables](./Variable.md) as yes/no questions — `is_paid`, `has_access` — makes code read almost like English.

_Avoid:_ storing yes/no as text like "yes" or "Y" — use a true boolean, or different spellings will slip through.

_Usage:_

"Some users have 'active' set to 'Yes' and others to 'yes'."

"That should be a boolean. Then there's only true or false, with no spelling to get wrong."
