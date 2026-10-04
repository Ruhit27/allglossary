---
description: Two AI coding agents that do the same job in different ways, compared in plain English so you can pick the one that fits how you work.
published: 2026-10-04
---

Codex, from OpenAI, and Claude Code, from Anthropic, are both coding [agents](../ai-glossary/Agent.md). You describe a task in plain words, and the agent reads your project, edits files, runs commands, and reports back. Under the hood, each one is a [harness](../ai-glossary/Harness.md) wrapped around its maker's own [models](../ai-glossary/Model.md): Codex runs OpenAI's GPT models, and Claude Code runs Anthropic's Claude models.

So the honest short answer is that they do the same job. The differences are in where they run, how they keep you safe, how you configure them, and what you pay. Those differences matter more than any benchmark, because they decide how the tool fits into your day.

Everything below was checked against each company's own documentation in October 2026. Both products change monthly, so follow the links before you make a decision that costs money.

## At a glance

| | Codex | Claude Code |
| --- | --- | --- |
| Made by | OpenAI | Anthropic |
| Models | OpenAI's GPT models | Anthropic's Claude models |
| Where it runs | [Terminal](../programming-glossary/Terminal.md), [IDE](../programming-glossary/IDE.md) extension, desktop app, web, iOS, Slack | Terminal, VS Code and JetBrains, desktop app, web, mobile, Slack |
| Project instructions | [AGENTS.md](../ai-glossary/AGENTS.md.md) | CLAUDE.md, and it can also read AGENTS.md |
| Default safety | A [sandbox](../ai-glossary/Sandbox.md) limits what commands can touch | [Permission modes](../ai-glossary/Permission%20mode.md) decide what needs your approval, with an optional sandbox |
| Free option | The desktop app is included on ChatGPT Free | No: it needs a paid Claude plan or a pay-per-use API account |

## Where they run

Both started in the terminal and have spread everywhere. Codex has a command-line tool, an extension for editors like VS Code and Cursor, a desktop app, and Codex cloud on the web, which runs tasks on OpenAI's computers while you do something else. See [OpenAI's Codex page](https://openai.com/codex/).

Claude Code has the same spread: a command-line tool, extensions for VS Code and JetBrains editors, a desktop app, and Claude Code on the web, plus a phone app and a Slack integration. Its [overview](https://code.claude.com/docs/en/overview) lists every surface.

The cloud versions are what make the [AFK](../ai-glossary/AFK.md) style of working possible: you start a long task, close the laptop, and check the result later. Both offer it. Both can also take tasks from Slack ([Codex](https://learn.chatgpt.com/docs/third-party/slack), [Claude Code](https://code.claude.com/docs/en/slack)) and review pull requests automatically. Claude Code adds [routines](https://code.claude.com/docs/en/routines), which run a task on a schedule in the cloud even when your computer is off.

## How they keep you safe

An agent that can run commands can also run the wrong one. The two tools put the guard rail in different places.

Codex leans on a sandbox: an operating-system boundary that limits which files a command can change and whether it can reach the network. The default lets it edit inside your project and nothing outside it. A separate approval setting decides when it stops to ask you. Both are described in [OpenAI's sandboxing docs](https://learn.chatgpt.com/docs/sandboxing).

Claude Code leans on permission modes: settings that decide which actions run straight away and which wait for your yes. They range from Manual, where it asks before almost everything, to an auto mode where a second model checks each action instead of you. A command sandbox is available too, on macOS, Linux, and WSL2. See [Anthropic's permission modes guide](https://code.claude.com/docs/en/permission-modes).

Neither approach replaces [human review](../ai-glossary/Human%20review.md). Both tools can write code that runs and still does the wrong thing, so read the changes before you merge them.

## How you configure them

Both read a plain Markdown file from your project at the start of every [session](../ai-glossary/Session.md): your standing brief to the agent, covering things like how to run the tests and which patterns to avoid. Codex [reads AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md). Claude Code reads CLAUDE.md, and it [can read an existing AGENTS.md too](https://code.claude.com/docs/en/memory), so one file can serve both.

Both connect to outside services through [MCP](../ai-glossary/MCP.md) ([Codex](https://learn.chatgpt.com/docs/extend/mcp), [Claude Code](https://code.claude.com/docs/en/mcp)), so the same connector for your issue tracker or database can work in either one. Both can hand parts of a job to [subagents](../ai-glossary/Subagent.md) ([Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Claude Code](https://code.claude.com/docs/en/sub-agents)), which work separately and report back. Both support [skills](../ai-glossary/Skill.md), reusable instructions loaded only when a task needs them ([Codex](https://learn.chatgpt.com/docs/build-skills), [Claude Code](https://code.claude.com/docs/en/skills)). Claude Code also has [hooks](https://code.claude.com/docs/en/hooks), which run your own commands before or after its actions.

## What they cost

Codex comes with ChatGPT plans. ChatGPT Free and Go include the Codex desktop app. Plus ($20 a month) adds the terminal tool, the editor extension, the web, and cloud tasks. Pro starts at $100 a month for much higher limits. You can also sign in with an OpenAI [API](../programming-glossary/API.md) key instead and pay per use, but then cloud tasks aren't available. The current table is on [OpenAI's Codex pricing page](https://learn.chatgpt.com/docs/pricing).

Claude Code comes with paid Claude plans: Pro is $20 a month billed monthly, Max starts at $100 a month for higher limits, and Team and Enterprise plans cover companies. It isn't on the free plan. You can also use it through an Anthropic API account and pay per [token](../ai-glossary/Token.md). See [Claude's pricing page](https://claude.com/pricing).

At the $20 level the two are priced the same. The real cost difference is in how much work each plan's limits allow, and both companies adjust those often.

## Which should you pick?

There's no winner that holds for everyone. A few honest rules of thumb:

- **You already pay for one of them.** Start with the agent included in the plan you have. At the entry level, the difference between them is smaller than the difference between using an agent and not using one.
- **You want to try one for free.** Codex's desktop app comes with ChatGPT's free plan; Claude Code needs a paid plan.
- **You care about reading the tool's code.** The Codex terminal tool is [open source](../web-glossary/Open%20source.md), under the [Apache 2.0 license](https://github.com/openai/codex/blob/main/LICENSE), so you can read and change it.
- **You want fine control over what runs unattended.** Compare Codex's sandbox settings with Claude Code's permission modes and see which way of thinking suits you.
- **Your team uses both.** Keep the shared instructions in AGENTS.md, which both can read, and connect tools through MCP, which both support.

The best test is cheap: give both the same small, real task from your own project, such as a bug with a clear reproduction, and read what each one changes. Ten minutes of that will tell you more than any comparison, this one included.
