---
title: "background agents are a larp"
date: "2026-02-07"
slug: "background-agents-are-a-larp"
---

> *a sober review of agent autonomy, and working with semi-toddlerish models*

if you've been trying to manage 20 claude sessions in tmux, or using cursor's background agents - i have bad news for you: you're probably doing yourself more harm than good.

there are a few names that people are giving to this idea right now:

* background agents
* ambient agents
* async agents

i like to think of them as landing somewhere on Karpathy's _autonomy slider_: 

![Karpathy autonomy slider](/blog/2026/autonomy-slider.png)

- _partial autonomy_: human observes partial outputs → intervenes early → constrains trajectory
- _fuller autonomy_: agent commits to a trajectory → human evaluates only after substantial work exists (work continues without waiting for feedback or results)

thinking about the degree of autonomy is clearer than the "background agents" notion, because that tends to mean it runs in the cloud. for the purposes of this discussion, only the autonomy matters.

the core distinction isn't _where_ the agent runs but rather the _feedback topology_. in other words, how tight is the feedback loop on decision making?

moving right means batching more decisions before a human corrects course. that increases both the delay *and* the amount of output you have to verify and unwind if the early assumptions are wrong.

#### why delayed feedback compounds errors

today, agents make non-trivial mistakes with meaningful probability. early assumptions are often wrong or underspecified, and downstream code depends on them.

in this world, background work is actively harmful. why?

when feedback is delayed:

* the agent continues generating code conditioned on its own incorrect assumptions.
* wrong decisions accrete dependent structure: APIs, data models, etc.
* by the time a human looks, the result is merely delayed confusion.

agents are highly sensitive to initial specifications, so small early ambiguities are amplified over long sequences of actions, making outcomes effectively unpredictable and late correction disproportionately expensive.

but you might think: *“If the agent goes down a wrong path, I’ll just reject the PR and rerun it.”*

that only works if rejection is stateless and obvious. but in order to confidently reject, the human figure out:

- Is this wrong, or just unfamiliar?
- Is it wrong at the root, or salvageable?
- Is it misaligned with the spec, or did the spec change?

and in order to do that, the human must:

* reload context into memory, recall constraints + initial intent / request (remember we are now at a later point in time)
* reconstruct the agent’s intent
* diagnose why the approach is wrong (vs merely unfamiliar)
* decide it’s irrecoverable rather than salvageable

so clearly rejection is not free.

#### a simple cost model

call this **diagnosis cost**. formally, if:

* $p$ is the probability of a bad trajectory.
  * if you want to connect this to per-step error: for a task requiring $k$ meaningful decisions and per-step error rate $e$, a simple model gives:

$$
p = 1 - (1-e)^k \approx k e \quad \text{(for small } e\text{)}
$$

  so longer autonomous runs raise the chance of going off-trajectory even when $e$ is low.
* $d$ is the delay before human feedback,
* $n$ is the amount of accumulated output / number of decisions the human has to verify,
* $R(d, n)$ is the human cost of diagnosing and rejecting after delay $d$ with review load $n$,

then the expected human cost from wrong paths is:

$$
\mathbb{E}[\text{human cost}] = p \cdot R(d, n)
$$

with $R(d, n)$ non-decreasing in both arguments. in particular, as $n$ grows (batch size / review load), decision fatigue makes review slower + more error-prone.

background agents increase $d$, while tight feedback loops minimize it because they prune bad branches early. in a tight loop, the human remembers what they just asked for because the mental state is warm, so rejection is fast + local - the cognitive overhead of context switching is limited.

in other words, background agents only become useful when they can complete an end-to-end trajectory with a low enough probability of “trajectory-level” failure that the expected cost of delayed correction is small.

until models cross the reliability threshold, the winning workflow is boring:

* keep the loop tight for anything with unclear requirements or high leverage decisions.
* steer aggressively, constantly re-referencing the specs + agreed-upon plans.
* invest in automation that makes mistakes cheap to detect: tests, linters, type checks, evals.

but: prepare for the moment when the phase transition happens.

the practical rule is simple: **until agents are end-to-end reliable, keep autonomy proportional to how cheap it is to detect + undo mistakes.**
