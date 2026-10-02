---
description: An ordered list of values stored under one name, such as a list of names or prices.
---

An array (called a list in some languages) holds many values in order: `["apples", "bread", "milk"]`. Each item has a position number, called an index. In most languages counting starts at 0, so "apples" is item 0 and "milk" is item 2.

Arrays are everywhere: the products in a cart, the messages in a chat, the rows from a spreadsheet. Programs often use a [loop](./Loop.md) to do something with every item. An array is one of the basic [data structures](./Data%20structure.md); a [dictionary](./Dictionary.md) is its labeled cousin.

Counting from 0 causes a famous family of [bugs](./Bug.md) called "off-by-one" errors — asking for item 3 of a three-item list, which doesn't exist.

_Avoid:_ assuming the first item is number 1 — in most languages it's number 0.

_Usage:_

"Why does it skip the first customer?"

"The loop starts at index 1. Arrays start at 0, so it never looks at the first one."
