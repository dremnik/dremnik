---
title: "design is the new bottleneck"
date: "2025-06-24"
slug: "design-is-the-new-bottleneck"
---

i've been thinking a lot about what it means to build software now that AI can write code. the pitch from AI companies is that we'll have "thousands of agents" running in parallel, all working tirelessly for us. sounds wonderful. but if you've ever thought about Amdahl's law, you know the disappointment is inevitable.

#### amdahl's law

the basic insight is this: your overall speedup is limited by whatever portion of the work has to happen serially. even if you parallelize 99% of a process to infinity, that remaining 1% cuts your gains in half.

a quick intuition of the problem is offered by this question: why do we not observe teams of thousands of _human_ engineers? Dropbox has thousands of engineers, but when's the last time it actually changed?

![Amdahl's Law Graph](/blog/design-is-the-new-bottleneck/amdahls-law-speedup.png)

#### nobody knows what to build

so if AI gives us unlimited engineering manpower, what's left? what are the serial bottlenecks that can't be parallelized away?

i think the answer is pretty clear if you've spent any time building products: the hard part isn't writing code. it hasn't been for a while. frameworks give you most of any app for free. cloud providers sell infinite scale by the hour. AI finishes your functions before you've thought them through. code is cheap. code is not the problem.

the problem is that nobody knows what to build.

i don't mean this in the shallow startup sense. i mean something more basic: the actual difficult work is figuring out what the thing should *be*. what it should feel like. what to leave out. this requires the kind of slow, contextual, human judgment that can't be parallelized.

#### design is more than pretty colors

design is not just pretty colors + decoration. design is the upstream work of framing the problem correctly. asking: what does the user actually need? what are we pretending isn't a tradeoff? what would make this feel *right* rather than just functional? a question is its answer with noise, and asking the right question in the first place presupposes a latent understanding of the problem.

> whatever we have words for, that we have already got beyond.

design is that frontier: the work of fumbling in the dark, of coining new language to describe new possibilities, of inventing the frame that makes the problem legible. that is not work you can outsource to a machine, at least not today. AI will happily optimize the wrong thing with dazzling efficiency—but it won't tell you that you're asking the wrong question.

a great designer is part detective, part psychologist, part philosopher. they chase down the hidden assumptions that shape our understanding of the problem. a rough heuristic i've noticed: designers tend to put the user first, engineers tend to put themselves first. an engineer optimizes for what's elegant to build, what's easy to maintain. a designer asks what will make life easier for the person who actually has to use the thing. these are different skills. the second requires a kind of empathy that doesn't come naturally to people who like computers.

#### apple got it

Apple understood this. not because their engineers were better, but because design sat at the top rather than the bottom. designers defined the problem, they didn't just decorate the solution.

> designers at Apple reported to the company's engineers and saw no reason to change their weak position within the organizational hierarchy—but i did because design must be "top down". from the start of my career, i insisted on working directly with the owners or leaders of companies that contracted with me, because design cannot succeed from the "bottom up." it was clear to me that it would be impossible to achieve Steve's goal if designers remained servants at the mercy of conservative engineers. Steve agreed.

if code is abundant, clarity is scarce. the builders who get this will stop competing on engineering throughput and start competing on understanding. in a world where execution is cheap, the only real advantage is knowing what's worth executing.
