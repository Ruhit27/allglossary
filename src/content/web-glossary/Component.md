---
description: A reusable, self-contained piece of a user interface, like a button, card or menu.
---

Modern [frontends](./Frontend.md) are built like LEGO: small pieces — a button, a product card, a search bar — combined into bigger ones, then into whole pages. Each piece is a component. It bundles its own structure ([HTML](./HTML.md)), look ([CSS](./CSS.md)) and behavior ([JavaScript](./JavaScript.md)).

Components are the core idea of most [frameworks](./Framework.md). You build a "product card" once and reuse it everywhere, passing in different details each time. Fix a bug in the component and it's fixed on every page.

Teams often collect their components into a shared library or "design system", so the whole [website](./Website.md) stays consistent.

_Avoid:_ "component" as a whole page — it's one reusable piece, and a page is built from many of them.

_Usage:_

"We need to change the checkout button color on twelve pages."

"It's one component. Change it once and all twelve update."
