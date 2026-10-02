---
description: A special value meaning "nothing here" or "no value yet".
---

Sometimes a value is missing: a customer hasn't given a phone number, or a search found no result. Null (also called nil, None, or undefined, depending on the language) is the [data type](./Data%20type.md) that means "empty, on purpose". It's different from 0 or an empty [string](./String.md), which are real values.

Null is the source of countless [bugs](./Bug.md). Code that expects a value and gets null instead — then tries to use it — typically crashes with an [error](./Error.md) like "cannot read property of null". The inventor of null references, Tony Hoare, later called it his "billion-dollar mistake".

Good code checks for null before using a value, and some modern languages make you handle the "might be missing" case explicitly.

_Avoid:_ treating null as zero — zero is a number; null means there's no value at all.

_Usage:_

"The page crashes for some customers."

"Those customers have no address, so it's null. The code tries to read the street without checking."
