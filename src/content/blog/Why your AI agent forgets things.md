---
description: Why an AI coding agent loses track of instructions in long sessions, how its context window works, and the habits that keep it sharp.
published: 2026-10-04
---

You give an AI coding [agent](../ai-glossary/Agent.md) a clear instruction at the start: "use the existing date helper, never add a new library." For an hour it follows that perfectly. Then, deep into the work, it adds a new date library. You remind it. It apologises, fixes it, and twenty minutes later does it again.

It's tempting to think the agent is tired, or lazy, or wasn't listening. None of that is what's going on. The real cause is mechanical, and once you understand it, the fixes are simple.

## The model doesn't remember anything

The [model](../ai-glossary/Model.md) at the heart of an agent is [stateless](../ai-glossary/Stateless.md). It keeps nothing between requests. It doesn't learn from your corrections, and it doesn't remember yesterday.

So how does it seem to remember the start of the conversation? Every time it takes a [turn](../ai-glossary/Turn.md), the tool around it, called the [harness](../ai-glossary/Harness.md), sends the whole conversation again: your instructions, every reply, every file it read, every command's output. That bundle is the [context window](../ai-glossary/Context%20window.md), and it's the only thing the model can see. If something isn't in it, as far as the model is concerned it doesn't exist.

## The window fills up

The context window is measured in [tokens](../ai-glossary/Token.md), chunks of text roughly three-quarters of an English word long. It's large, but it's finite, and a working [session](../ai-glossary/Session.md) fills it fast. Every file the agent opens, every test run, every failed attempt and wrong turn stays in the history and is sent again on every turn.

Picture a desk. At the start of the day it holds one sheet of paper: your instructions. By late afternoon it's buried under printouts, half of them from dead ends. Your instruction sheet is still there, but it's hard to find.

## More context, less attention

That desk picture is close to how it works. Each token has a limited amount of attention to spread across everything else in the window: an [attention budget](../ai-glossary/Attention%20budget.md). The budget doesn't grow as the window fills. Your instruction is still there word for word, but it's competing with far more noise than it was at the start.

The result is [attention degradation](../ai-glossary/Attention%20degradation.md): the agent gradually gets worse as the session grows. Rules it followed for an hour start slipping, it asks things it was already told, it ignores a file it read earlier. People call the sharp early phase the [smart zone](../ai-glossary/Smart%20zone.md), and the sloppy later phase the dumb zone. Nothing about the model changed. Only the amount of context it's sifting through did.

The decline is gradual and there's no warning light. That's what makes it easy to miss until the agent does something baffling.

## What happens when the window is full

When the window gets close to full, many harnesses run [autocompact](../ai-glossary/Autocompact.md): they ask the model to summarise the session so far, throw away the original history, and carry on from the summary. This is [compaction](../ai-glossary/Compaction.md), and it is lossy by design.

A summary keeps the gist and drops detail. If your "never add a date library" rule didn't make it into the summary, the agent now has genuinely forgotten it. Because autocompact fires whenever a size threshold is hit, it can happen in the middle of a delicate change, with the summary deciding which of your decisions mattered.

## Habits that keep an agent sharp

The fixes all follow from one idea: keep the context small and relevant, and keep anything important somewhere that outlives a session.

- **Start fresh between tasks.** [Clearing](../ai-glossary/Clearing.md) the session gives the next task an empty desk. Carrying a finished task's history into a new one only adds noise.
- **Compact on purpose, at a natural break.** If you need to carry a session forward, compact yourself between phases, and say what the summary must keep.
- **Write important decisions down.** A plan or spec saved as a file is a [handoff artifact](../ai-glossary/Handoff%20artifact.md): a new session can read it back, so nothing depends on one session's memory.
- **Put standing rules in the project's instructions file.** An [AGENTS.md](../ai-glossary/AGENTS.md.md) file is loaded at the start of every session, so rules like "use the existing date helper" are fresh each time instead of buried.
- **Keep that file short.** Everything in it is loaded every turn and competes for attention. Use [progressive disclosure](../ai-glossary/Progressive%20disclosure.md): keep the essentials in the file and point to longer documents the agent can open only when a task needs them.
- **Treat repeated forgetting as a signal.** If the agent keeps slipping on things it was told, the session has probably drifted out of the smart zone. Pushing through rarely helps; a fresh session usually does.

Some harnesses also offer a [memory system](../ai-glossary/Memory%20system.md), which saves notes during a session and loads them into future ones. It helps, but it works the same way: notes are only useful once they're back in the context window.

## The short version

An agent doesn't forget the way people do. It sees only what's in its context window, the window fills, and the more it holds, the less attention each part gets. Keep sessions focused, write down what matters, and start fresh more often than feels necessary. You'll spend less time repeating yourself and more time getting work done.
