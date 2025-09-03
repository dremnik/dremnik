---
title: "design is the new bottleneck"
date: "2025-06-24" # August 24, 2025
slug: "design-is-the-new-bottleneck"
---

For the past few months, I’ve been thinking a lot about the process of building software in light of AI, and what it means for us builders. Code is quickly becoming a commodity, but what does that really mean?

AI companies would have us believe we are going to have “thousands of agents” running in parallel, all working tirelessly on the tasks we set for them. That sure sounds wonderful, but the inevitable disappointment will be obvious to anyone familiar with Amdahl’s law. It gives us a way to quantify and think about the limitations of parallel execution where we can only parallelize a portion of the overall process.

A quick intuition of the problem is offered by this question: why do we not observe teams of thousands of _human_ engineers?

![Amdahl's Law Graph](/blog/design-is-the-new-bottleneck/amdahls-law-speedup.png)

From Wikipedia:

> The Speedup~overall~ is frequently much lower than one might expect. For instance, if a programmer enhances a part of the code that represents 10% of the total execution time and achieves a Speedup~optimized~ of 10,000, then Speedup~overall~ becomes 1.11 which means only 11% improvement in total speedup of the program. So, despite a massive improvement in one section, the overall benefit is quite small. In another example, if the programmer optimizes a section that accounts for 99% of the execution time (i.e. Time~optimized~ of 0.99) with a speedup factor of 100 (i.e. Speedup~optimized~ of 100), the Speedup~overall~ only reaches 50. This indicates that half of the potential performance gain (Speedup~overall~ will reach 100 if 100% of the execution time is covered) is lost due to the remaining 1% of execution time that was not improved.

The theory of constraints also reminds us that the overall rate of production is limited by the rate of the weakest link in the chain. We see that the limitations imposed by the law are quite significant even when only a fraction of the process is limited to serial execution. When we consider the optimization of a system whose goal is to produce software (i.e. a software company), these serial choke points are where we can expect to find the limits of this new “agentic” parallelism.

#### the serial realities

Suppose that AI offers us the prospect of virtually unlimited engineering “manpower”, what are the remaining serial bottlenecks in the process? Why—_to repeat a question my friend recently asked_—do we see products like Dropbox that almost never change despite engineering headcounts in the thousands? Are they at a loss for ideas? Is it a failure of coordination? Is it simply the complacency that comes with success?

For most modern products, we already know how to build the thing. Frameworks, infrastructure, and now AI assistance make the act of writing code fast and cheap. What slows us down is not implementation, but the serial process of _understanding_—of figuring out what should be built, how it should feel, and why it matters in the first place.

If you’ve ever watched a team deliberate over a product direction, you’ll know what I mean. The debate rarely centers on _whether_ we can build it. The hard part is deciding _what the right thing is to build at all_.

#### the shift

Historically, programming itself was the constraint. It was slow, expensive, and error-prone, so organizations optimized around making the most of scarce engineering resources. The best companies were those that could execute technically complex feats.

But the terrain has shifted. We are living in a world where AI can churn out boilerplate code faster than we can articulate requirements. Frameworks abstract away complexity, cloud providers give us infinite scale on demand, and open-source libraries mean that no one starts from zero anymore.

The bottleneck has moved. The scarce thing today is not code but clarity. The limiting reagent in the production of software is not keystrokes but cognition: how quickly humans can grasp a messy, ambiguous reality and frame it as a solvable problem.

That’s why the hardest work in building products is no longer writing code but asking better questions.

Design—real design—is not “making it pretty.” It’s the process of framing the problem, of making tradeoffs about what matters and what doesn’t, of imagining how someone else might experience what you’re building. It’s not decoration; it’s the discipline of sense-making.

A great designer is part detective, part psychologist, part philosopher. They chase down the hidden assumptions that shape our understanding of the problem. They decide when simplicity is clarity and when it is cowardice. They exercise empathy not as a slogan but as a tool for discovery: what’s it actually like to live inside the head of the person who will use this?

This is the new bottleneck. We can have thousands of agents or engineers or even AI copilots, but unless the problem is framed correctly, all that parallelism cannot be coherently synthesized or made sense of.

#### what i mean by "design"

I want to be clear about what I mean by “design.”

Design isn’t only about aesthetics or decoration. By “design,” I mean everything about the product as experienced from the user’s perspective:

* Gaining a deep comprehension of the user’s problems—in other words, what the product is really intended to solve.
* The user experience: how intuitive, humane, and frictionless the interaction feels.
* The product’s perception: how it communicates what it is, what it stands for, and why it matters.

A rough heuristic I’ve noticed between “designers” and “engineers” is this: designers put the user first, while engineers often—quite naturally—put themselves first. An engineer might prioritize what makes the system easiest to build or maintain. A designer pushes back, asking what will make life easiest for the person who actually has to use it.

As a designer myself, this feels almost too obvious to say. Yet in many companies, the prestige still tilts heavily toward engineering. That might be a relic of the old bottlenecks, when the limiting factor was how quickly code could be written and shipped. In that world, designers’ ideas often sat idle for months before engineers could execute them, which inevitably reduced design’s perceived leverage. But in today’s world—where execution is cheap and fast—that hierarchy makes less and less sense.

This is also why AI, for all its impressiveness, cannot yet displace design. Machines are great at answers, but design is about _questions_. Asking the right question presupposes a latent understanding of the problem:

> Whatever we have words for, that we have already got beyond.

Design is that frontier: the work of fumbling in the dark, of coining new language to describe new possibilities, of inventing the frame that makes the problem legible. That is not work you can outsource to a machine, at least not today. AI will happily optimize the wrong thing with dazzling efficiency—but it won’t tell you that you’re asking the wrong question.

#### implications for builders + companies

If this is right, then the organizations that thrive in the age of AI won’t be those with the largest fleets of agents or the lowest unit cost of code. They will be the ones that iterate fastest on _understanding_.

That means collapsing the loop between design → build → experiment → learn → redesign. It means treating design not as a surface polish applied at the end but as the engine of the process itself. It means hiring not just “pixel pushers” but problem framers—designers and product thinkers who can sit at the intersection of engineering and user experience and make sense of the ambiguity upstream.

The competitive advantage will belong to those who can refine their questions faster than their rivals. Because once the right question is on the table, building an answer is almost trivial.

This is what set Apple apart. In most organizations, design lives downstream from engineering—subordinate, service-oriented, a finishing touch. At Apple, design was top-down. Steve Jobs insisted that designers report directly to leadership because he knew that design, to be effective, had to define the problem, not just decorate the solution.

> Designers at Apple reported to the company’s engineers and saw no reason to change their weak position within the organizational hierarchy—but I did because design must be “top down”. From the start of my career, I insisted on working directly with the owners or leaders of companies that contracted with me, because design cannot succeed from the “bottom up.” It was clear to me that it would be impossible to achieve Steve’s goal if designers remained servants at the mercy of conservative engineers. Steve agreed.

Esslinger was a design consultant who ended up leading design at Apple. He made it clear that it was impossible to realize Steve’s vision if designers remained servants to conservative engineers. The magic of Apple was not that its engineers wrote better code than anyone else. It was that the company put design—the act of framing the problem, of deciding what mattered—at the very center of its process, of its identity.

#### closing thoughts

The lesson here is simple: if code is abundant, clarity is scarce. AI accelerates execution, but it does not replace the messy, human work of asking better questions.

The builders and companies who understand this will stop competing on brute force and start competing on insight. They will treat design not as an afterthought but as the bottleneck worth breaking.

And in a world where execution is cheap, the only real advantage left is knowing what’s worth executing at all.
