---
title: "Designing an autonomous company"
date: "2026-03-08"
slug: "company-as-filesystem"
description: "Every piece of company state lives in a folder. Markdown files and shell scripts. The filesystem is the API."
ogImage: "/favicon.ico"
published: true
---

Everyone is trying to figure out the "company graph" right now. How to give AI agents access to the full state of a business — knowledge bases, context repositories, operating systems for companies.

I have been running mine out of a folder. Markdown files and a few shell scripts. It started as a `.self/` folder holding mission and principles, and a `.cycle/` folder holding weekly plans. Over time it became something more: a complete operating system that AI agents can read, write, and act on autonomously.

## The outer loop

Most companies treat engineering, sales, marketing, hiring, and ops as fundamentally different functions with different workflows. They are not. They are all instances of the same process: the scientific method.

Everything a company does is a query against reality. A hypothesis about what might be true at this moment, and the consequent actions that would generate profit if that statement — or bundle of statements — is true. Building a company is a search for truth.

The objective function is simple: maximize profit within your constraints (industry, values, risk tolerance). The scientific method is how you search the space of possibilities.

1. **Hypothesis** — "If we build X, customers will pay for it." Or: "If we pitch this way, this buyer persona converts." Or: "If we hire for this role, it unblocks throughput."
2. **Design experiment** — the product spec, the outreach campaign, the job posting.
3. **Execute** — build it, send it, run it.
4. **Collect data** — usage metrics, response rates, pipeline quality.
5. **Interpret** — did the hypothesis hold? What do we believe now that we did not before?

The inner loop changes by domain. For engineering it is an SDLC (requirements → spec → design → build → verify → release). For GTM it is a campaign (target list → messaging → outreach → follow-up). For hiring it is a pipeline. But the outer loop is always the same.

This matters because it means you only need one system. Not a project management tool *and* a CRM *and* a wiki *and* a sales tracker. One system that captures what you believe, what you are doing about it, and what happened.

The key is closing the loop: every action traces back to a decision, every decision to a hypothesis, every hypothesis to a goal. If that chain breaks, you stop learning. The filesystem is where it becomes practical.

## The filesystem

```
company/
├── .self/                # identity — mission, values, principles
│   ├── mission.md
│   ├── values.md
│   └── principles.md
├── .cycle/
│   ├── C-09/
│   │   ├── plan.md       # what we intend to do
│   │   └── review.md     # what happened + conclusions
│   ├── C-10/
│   │   └── plan.md
│   └── ...
├── .inbox/               # unprocessed inputs — triage weekly
├── .tasks/
│   └── TODO.md           # stack (active) + heap (deferred)
├── strategy/
│   ├── positioning.md    # how we win
│   ├── competitors/      # landscape, threat profiles
│   ├── maxims.md         # hard-won truths we operate from
│   ├── quarterly/        # quarterly strategy reviews
│   └── yearly/           # annual planning + retrospectives
├── signals/              # raw observations — what happened
├── worldview/            # hypotheses, beliefs, confidence
│   ├── daily/            # short-lived observations
│   ├── cycle/            # beliefs that survived a cycle
│   ├── monthly/          # durable convictions
│   └── quarterly/        # strategic-grade theses
├── projects/
│   ├── product-alpha/
│   │   ├── .tasks/
│   │   ├── .plan/
│   │   └── ...
│   ├── product-beta/
│   │   ├── .tasks/
│   │   └── .plan/
│   └── index.md          # all projects, statuses, focus
├── SOP/
│   ├── cycle-review.md
│   ├── cycle-plan.md
│   ├── daily-shutdown.md
│   └── morning-brief.md
└── index.md              # root — current cycle, links
```

Every piece of company state lives here.

`.self/` is the constitution — it changes rarely and constrains everything downstream. `worldview/` holds current beliefs about the market, competitors, and opportunities, updated every cycle as new data comes in. `strategy/` holds positioning, competitive landscape, and the hard-won truths you operate from. `signals/` captures raw observations — things that happened in the world that might matter. `projects/` holds the actual work. `.cycle/` holds the rhythm of planning and reflection. `.inbox/` is where raw inputs land before being routed. `.tasks/` is working memory.

The `index.md` at the root is the dashboard. It links to the current cycle, lists active projects and their statuses, and serves as the entry point for any agent — or human — trying to understand what the company is doing right now.

Each project gets its own `.tasks/` and `.plan/`. A GTM motion and a product build have the same rough shape.

`SOP/` deserves a mention. These are step-by-step standard operating procedures — how to run a cycle review, how to do a daily shutdown, how to produce a morning brief. Written in plain English, specific enough that an AI agent can follow them directly. If the filesystem is state, the SOPs are the functions that operate on it.

## Cycles

The cycle is the heartbeat. A week-long sprint with a plan and a review.

**Planning (start of cycle):**

1. Scan opportunities — inventory everything across projects, network, signals.
2. Evaluate — expected payoff = likelihood × magnitude. Factor in effort, time-to-first-dollar, dependencies.
3. Budget — allocate hours top-down by expected payoff. Hard constraint: nothing gets time unless it clears the budget check.
4. Pick the main effort — *what really matters* this cycle.
5. Write the plan → save in `.cycle/C-{NN}/plan.md`.

**Review (end of cycle):**

1. What happened vs. what was planned?
2. What got deferred, and why? If something has been deferred three or more cycles, force a decision: commit, kill, or redesign.
3. Signal analysis — what patterns are emerging? Where are independent signals converging?
4. Worldview update — how should beliefs change given new information?
5. Conclusions → feed into next cycle's planning.

The review is the "interpret and draw conclusions" step. The plan is "hypothesis and design experiment." The cycle itself is execution.

What makes this work is that the review is brutally honest. The outer loop only compounds if the "interpret" step is truthful. A real one:

> Planned to build feature X. By day three, two prospect calls revealed the pricing assumption was wrong — they wanted it, but not at that price point. Killed the feature. Pivoted the cycle to validating a different pricing model. Would not have caught it without the signal capture.

The review is the mechanism by which you update your beliefs. Did you actually do what you said you would do? If not, why? Is the plan wrong, or are you avoiding something?

This is where learning compounds. `.cycle/` is the log: you can go back to C-03 and trace which bets you made, which ones paid off. But the learning also crystallizes upward. Insights that survive multiple cycles get promoted into `worldview/` as durable beliefs. Beliefs that prove out over longer time horizons harden into `strategy/` — maxims, heuristics, structural truths you operate from. The temporal structure mirrors the confidence level: cycles are weekly experiments, worldview is medium-term conviction, strategy is what you have learned the hard way and do not expect to change soon.

## Signal processing

The outer loop only works if you are actually collecting data. It is easy to run experiments without systematically capturing what happened. The learnings live in someone's head, or in a Slack thread no one will ever find again.

`signals/` is where raw observations go. A signal is just: something happened in the world that might matter. No analysis, no judgment — just capture it.

- A competitor launched a new feature.
- A prospect said something interesting on a call.
- A pricing experiment got an unexpected response.
- An industry report dropped with relevant data.

```
signals/
├── 2026-03-01-competitor-x-launched-agents.md
├── 2026-03-03-prospect-call-acme-objections.md
├── 2026-03-05-pricing-test-results.md
└── ...
```

Each signal is a short file: date, source, what happened. That is it.

The magic is in the processing. During the cycle review, you scan all signals from the past week and ask:

- **Trendlines** — what patterns are emerging across multiple signals?
- **Convergences** — where are independent signals pointing the same way?
- **Surprises** — anything contradicting our current hypotheses?

Signals that matter get promoted into `worldview/` — they update your beliefs. Signals that do not matter get archived or discarded. The point is that *nothing falls through the cracks*. Every observation enters the system, gets evaluated, and either changes your beliefs or gets explicitly dismissed.

This is the "collect data" step of the scientific method, made concrete. Without it, the cycle review is just vibes — you are reflecting on what you *remember* happened, not what *actually* happened. And memory is a terrible database.

The `.inbox/` folder serves a similar purpose for internal inputs — emails, ideas, todos that do not have a home yet. Signals are external; inbox is internal. Both get triaged on the same cadence.

## Automation

Once all of this lives in files, you can point agents at it.

The SOPs are already written as step-by-step procedures. So you schedule them. In my case it is macOS launchd jobs that call `claude` with the relevant SOP as the prompt:

- **Morning brief** — daily. Reads the cycle plan, today's calendar, the inbox. Produces a briefing.
- **Daily shutdown** — daily. Reconciles tasks, archives the day's TODO, captures loose inputs from email.
- **Cycle review** — weekly. Scans signals, evaluates worldview, drafts the review.

The agents do not need special integrations. They read files, follow the procedure, write the output back to disk. The filesystem is the API.

This is the real payoff of the structure. If your company state lives in Notion, Slack, Google Docs, Jira, and Salesforce, no agent can reason about all of it. But if it lives in a folder, any agent that can read a file can understand the full state of the business and act on it.

## Why this works

The whole thing is three nested loops at different timescales:

1. **Daily** — morning brief → work → shutdown. Tight feedback, task-level.
2. **Weekly** — cycle plan → execute → cycle review. Experiment-level. This is where most of the learning happens.
3. **Monthly / quarterly** — worldview and strategy updates. Beliefs that survived multiple cycles harden into conviction.

Each loop feeds the next. Daily observations bubble up into weekly reviews. Weekly learnings update the worldview. Durable worldview shifts reshape strategy. Strategy constrains the next cycle's planning. It compounds.

And because it is all files, it is all version-controlled. You can diff your beliefs from three months ago against today. You can grep across every cycle review you have ever written. You can trace exactly when and why you changed your mind about something.

I do not think this is the final form. But the core idea is right: structure your company state so that agents can read it, write it, and run procedures against it. Start with `.self/`, `.cycle/`, and a few SOPs. The rest will grow as you need it.
