---
description: A collection that stores values under labels (keys), so you can look them up by name.
---

Where an [array](./Array.md) is numbered, a dictionary is labeled. `{"name": "Ada", "city": "London"}` stores the value "Ada" under the key "name". You look things up by key, just as you look up a word in a real dictionary to find its meaning. Other names for the same idea: map, hash map, or (in JavaScript) object.

Dictionaries are perfect for describing one thing with several properties — a user, a product, a setting — and for fast lookups: finding a customer by ID in a dictionary of a million is almost instant.

Each key is unique: storing a second value under the same key replaces the first. It's one of the most used [data structures](./Data%20structure.md).

_Avoid:_ "dictionary" as a word list — in programming it means any set of labeled values.

_Usage:_

"How do I get the user's email out of this?"

"It's a dictionary. Look up the key called 'email'."
