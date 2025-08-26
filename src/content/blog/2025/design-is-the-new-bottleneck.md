---
title: "design is the new bottleneck"
date: "2025-06-24" # August 24, 2025
slug: "design-is-the-new-bottleneck"
---

For the past few months, I’ve been thinking a lot about the process of building software in light of AI, and what it means for us builders. Code is quickly becoming a commodity, but what does that really mean?

The hype from AI companies would have us believe that we are going to have “thousands of agents” running in parallel, all working tirelessly on the tasks we set for them. That sure sounds wonderful, but the inevitable disappointment will be obvious to anyone familiar with Amdahl’s law.

A quick intuition of the problem is offered by this question: why do we not observe teams of thousands of _human_ engineers?

[ ... ]

The theory of constraints reminds us that the overall rate of production is limited by the weakest link in the chain. When we consider the optimization of a system whose goal is to produce software (i.e. a software company), we should examine the slowest links in the chain to understand where we can expect to find the limits of this new “agentic” parallelism.

#### the weakest links

What then, are the slowest links in a software company? Why—_to repeat a question my friend recently asked_—do we see products like Dropbox that almost never change despite engineering headcounts in the thousands? And why do companies so consistently seem to lose sight of themselves and their mission as they scale, such that Conquest’s third law really needs no explanation?

> The simplest way to explain the behavior of any bureaucratic organization is to assume that it is controlled by a cabal of its enemies.

No doubt there are political considerations that enter the picture whenever so many people with various interests / goals come together to collaborate on a shared task: frequently one pulls down out of jealousy what the other has put up with skill, and achieving consensus of so many voices is never an easy task.

It would be difficult to quantify the precise degree of this political friction, but I think for our purposes it is safe to assume that it accounts for a significant proportion of organizational inefficiency. For the most part, it is the irreducible _sine qua non_ of collaboration (though there are a few conclusions that can be reached with this in mind—more on that later). It suffices to assume that this source of friction will apply only partially, if at all, to the collaboration of AI agents. They have no agendas of their own (as far as we yet know), and merely execute faithfully the instructions they are given; whatever misalignment we can expect to find in their objectives will likely be introduced by the humans who assign them.

Having set aside the question of political friction as either inapplicable or irreducible, the question we are now concerned with is this: what are the remaining sources of _reducible_ friction which will prevent the full parallelization that AI promises in theory?
