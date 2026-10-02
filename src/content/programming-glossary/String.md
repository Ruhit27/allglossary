---
description: A piece of text in a program, such as a name, a sentence, or a password.
---

In programming, text is called a string — a string of characters. In [code](./Code.md) it's usually wrapped in quotes: `"Hello, Ada"`. Names, email addresses, messages, and the contents of files are all strings. It's one of the most common [data types](./Data%20type.md).

Programs constantly work with strings: joining them, searching them, cutting them up, changing upper and lower case. Strings that look like numbers ("42") are still text until converted, which trips up beginners.

Strings that come from users need care. A name field can contain anything — accents, emoji, even code — so programs must handle unexpected text safely.

_Avoid:_ "string" meaning only words — digits, symbols, spaces and emoji in quotes are strings too.

_Usage:_

"The search can't find 'José'."

"Our string comparison doesn't handle accents. We need to normalize the text first."
