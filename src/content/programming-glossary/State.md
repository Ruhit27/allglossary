---
description: The data a program is holding at a given moment, which can change as it runs.
---

State is everything a program currently remembers: who's logged in, what's in the cart, which screen is open, the score in a game. It lives in [variables](./Variable.md), [objects](./Object.md) and data stores. As the user acts, state changes — add an item, and the cart's state is different.

Much of programming is managing state carefully. [Bugs](./Bug.md) often come from state being changed unexpectedly, from two places at once, or getting out of sync — the screen shows three items while the cart holds four. [Functional programming](./Functional%20programming.md) tries to keep state changes to a minimum for that reason.

"Stateless" code remembers nothing between uses; each request or call starts fresh.

_Avoid:_ "state" as a country or region — in code it's what the program remembers right now.

_Usage:_

"The badge says 2 items but the cart shows 3."

"The badge keeps its own copy of the cart state and didn't get updated. It should read from one source."
