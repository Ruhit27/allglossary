---
description: A step-by-step method for turning a scary wall of error text into the one line that tells you what went wrong and where.
published: 2026-10-04
---

Your program stops and prints a block of text, maybe red, maybe dozens of lines long. It looks like the computer is shouting at you. It isn't. An [error](../programming-glossary/Error.md) message is the program telling you, as precisely as it can, what it couldn't do and where. Most of it is directions.

The trick is knowing which parts to read, in what order. Here's a method that works in almost any [programming language](../programming-glossary/Programming%20language.md).

## An example

Here's a typical error from a Python program:

- `Traceback (most recent call last):`
- `File "app.py", line 12, in <module>`
- `total = order_total(cart)`
- `File "app.py", line 7, in order_total`
- `return sum(item["price"] for item in items)`
- `TypeError: 'NoneType' object is not iterable`

Six lines, and every one is useful. We'll come back to it at each step.

## 1. Read the last line first

In Python, the most important line is at the bottom: `TypeError: 'NoneType' object is not iterable`. It has two parts.

The first word is the type of error: here, a TypeError, meaning a value was the wrong [data type](../programming-glossary/Data%20type.md) for what the code tried to do. The rest is the message: the code tried to [loop](../programming-glossary/Loop.md) over something that was None, Python's word for "no value". Other languages put the summary at the top instead, so look for the line that starts with an error type.

## 2. Translate the message into plain English

Messages are terse, but they're consistent, and the same few come up again and again. Put this one into everyday words: "I was asked to go through a list of items one by one, but there was no list. There was nothing."

Some messages you'll meet constantly:

- **"is not defined" or "cannot find symbol"**: you used a name the program doesn't know, often a typo or a [variable](../programming-glossary/Variable.md) created somewhere else.
- **"cannot read properties of undefined" or "NoneType has no attribute"**: you used a value that was missing. This is the [null](../programming-glossary/Null.md) problem, one of the most common errors there is.
- **"unexpected token" or "invalid syntax"**: the code breaks the language's [syntax](../programming-glossary/Syntax.md) rules, like a missing bracket or comma. The real mistake is often on the line before the one reported.
- **"no such file or directory"**: the program looked for a file at a path that doesn't exist, often because it's running from a different folder than you expect.

## 3. Find where it happened

The lines above the message are the traceback, also called a stack trace. It's the trail of [functions](../programming-glossary/Function.md) that were running when the error happened, like breadcrumbs. In Python, read from the bottom up: the error happened on line 7, inside a function called `order_total`, which was called from line 12.

Look for the first line that points into your own files. In a real project the trail often passes through other people's [libraries](../programming-glossary/Library.md), and the error surfaces deep inside one of them. The library is rarely the culprit; the clue is where your code called it.

## 4. Ask why the value was wrong

The line where the program crashed is where the problem showed up, not always where it started. Line 7 tried to loop over `items`, and `items` was None. But line 7 didn't create that None. It was handed it.

So follow it backwards. Line 12 passed in `cart`, so where did `cart` come from? Perhaps a function that looks up a saved cart returns None when the customer doesn't have one yet, and nothing checked for that. That's the real [bug](../programming-glossary/Bug.md): not "line 7 crashed", but "a customer with no saved cart isn't handled".

This is the heart of [debugging](../programming-glossary/Debugging.md): from the symptom, to the location, to the cause.

## 5. Check your guess

Before changing anything, confirm your theory. Print the value just before the crash, or pause the program with a debugger and look at it. If `cart` really is None for a new customer, you've found it. If it isn't, your guess was wrong, and you've saved yourself a fix that fixes nothing.

## 6. Then search, carefully

If the message still makes no sense, copy the error type and message into a search engine, leaving out your own file names and values. Someone has almost certainly hit it before. Read the explanations, not just the code, and check that the situation matches yours before pasting in a fix.

## Habits that help

- **Read the whole message before reacting.** Most of the time the answer is in the text.
- **Fix the first error first.** One mistake can trigger a cascade of later errors that vanish once the first is fixed.
- **Make it happen again on purpose.** A bug you can trigger reliably is a bug you can fix and confirm fixed.
- **Write a test for it.** Once it's fixed, a [unit test](../programming-glossary/Unit%20test.md) that reproduces the error makes sure it never quietly comes back.
- **Show your own users friendly messages.** Raw errors confuse people, and they can reveal details attackers would like to know. Catch problems with an [exception](../programming-glossary/Exception.md) handler and log the details for yourself.

Error messages get less scary with practice, because the same dozen come up over and over. After a while, you read "NoneType is not iterable" and think "something's missing, where did it come from?" before you've finished the line.
