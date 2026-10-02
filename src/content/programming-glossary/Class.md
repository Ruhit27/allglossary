---
description: A blueprint that describes what a kind of object holds and can do.
---

A class defines a type of [object](./Object.md): what data each one has and which actions (methods) it offers. A `Customer` class might say every customer has a name and email, and can place an order. Each actual customer in the program is an object built from that class — an "instance" of it.

Classes are the main building block of [object-oriented programming](./Object-oriented%20programming.md). A class can also build on another — a `PremiumCustomer` class inheriting everything from `Customer` and adding perks. That's called inheritance.

A class is like a cookie cutter and objects are the cookies: one shape, as many cookies as you like, each with its own toppings.

_Avoid:_ "class" and "object" as the same — the class is the blueprint; objects are the individual things made from it.

_Usage:_

"Every invoice needs a due date now."

"Add it to the Invoice class, and every invoice object will have one."
