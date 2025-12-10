---
title: "design is the new bottleneck"
date: "2025-06-24"
slug: "design-is-the-new-bottleneck"
---

I've been thinking a lot about what it means to build software now that AI can write code. The pitch from AI companies is that we'll have "thousands of agents" running in parallel, all working tirelessly for us. Sounds wonderful. But if you've ever thought about Amdahl's law, you know the disappointment is inevitable.

#### amdahl's law

The basic insight is this: your overall speedup is limited by whatever portion of the work has to happen serially. Even if you parallelize 99% of a process to infinity, that remaining 1% cuts your gains in half.

A quick intuition of the problem is offered by this question: why do we not observe teams of thousands of _human_ engineers? Dropbox has thousands of engineers, but when's the last time it actually changed?

![Amdahl's Law Graph](/blog/design-is-the-new-bottleneck/amdahls-law-speedup.png)

#### nobody knows what to build

So if AI gives us unlimited engineering manpower, what's left? What are the serial bottlenecks that can't be parallelized away?

I think the answer is pretty clear if you've spent any time building products: the hard part isn't writing code. It hasn't been for a while. Frameworks give you most of any app for free. Cloud providers sell infinite scale by the hour. AI finishes your functions before you've thought them through. Code is cheap. Code is not the problem.

The problem is that nobody knows what to build.

I don't mean this in the shallow startup sense. I mean something more basic: the actual difficult work is figuring out what the thing should *be*. What it should feel like. What to leave out. This requires the kind of slow, contextual, human judgment that can't be parallelized.

#### design is more than pretty colors

Design is not just pretty colors + decoration. Design is the upstream work of framing the problem correctly. Asking: what does the user actually need? What are we pretending isn't a tradeoff? What would make this feel *right* rather than just functional? A question is its answer with noise, and asking the right question in the first place presupposes a latent understanding of the problem.

> Whatever we have words for, that we have already got beyond.

Design is that frontier: the work of fumbling in the dark, of coining new language to describe new possibilities, of inventing the frame that makes the problem legible. That is not work you can outsource to a machine, at least not today. AI will happily optimize the wrong thing with dazzling efficiency—but it won't tell you that you're asking the wrong question.

A great designer is part detective, part psychologist, part philosopher. They chase down the hidden assumptions that shape our understanding of the problem. A rough heuristic I've noticed: designers tend to put the user first, engineers tend to put themselves first. An engineer optimizes for what's elegant to build, what's easy to maintain. A designer asks what will make life easier for the person who actually has to use the thing. These are different skills. The second requires a kind of empathy that doesn't come naturally to people who like computers.

#### apple got it

Apple understood this. Not because their engineers were better, but because design sat at the top rather than the bottom. Designers defined the problem, they didn't just decorate the solution.

> Designers at Apple reported to the company's engineers and saw no reason to change their weak position within the organizational hierarchy—but I did because design must be "top down". From the start of my career, I insisted on working directly with the owners or leaders of companies that contracted with me, because design cannot succeed from the "bottom up." It was clear to me that it would be impossible to achieve Steve's goal if designers remained servants at the mercy of conservative engineers. Steve agreed.

If code is abundant, clarity is scarce. The builders who get this will stop competing on engineering throughput and start competing on understanding. In a world where execution is cheap, the only real advantage is knowing what's worth executing.
