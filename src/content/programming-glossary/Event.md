---
description: Something that happens while a program runs — a click, a key press, a message arriving — that code can react to.
---

Many programs spend most of their time waiting. When something happens — the user clicks a button, a file finishes downloading, a timer goes off — that's an event. Code registers a [function](./Function.md) to run when a particular event occurs; this function is called an event handler or listener.

Apps, websites and games are mostly event-driven: rather than running top to bottom and stopping, they react to events as they come. Events often arrive unpredictably, which links them closely to [asynchronous code](./Asynchronous%20code.md).

A common [bug](./Bug.md) is attaching a handler twice, so one click triggers the action twice — say, two payments.

_Avoid:_ "event" as a scheduled occasion — in code it's anything that happens which the program can respond to.

_Usage:_

"Customers were charged twice."

"The click event handler was attached twice, so one click ran it twice."
