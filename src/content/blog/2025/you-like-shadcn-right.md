---
title: "you like shadcn, right?"
date: "2025-12-18"
slug: "you-like-shadcn-right"
---

so do i.

so let's take a trip down memory lane together and dissect this strange success (or not so strange .. as we'll see).

#### the dark ages

for years, UI libraries were basically landlords, running local fiefdoms like little dictatorial overlords (albeit benign ones). you didn't own your buttons, you rented them. and every abstraction came with a silent contract: you can use them, but they don't belong to you.

thus came the decree from above:

> You may change the color, peasant, but only through my narrow API, and only on the third full moon of a minor version release. And don't even think about writing a theme of your own.

tweaking anything meaningful is bashing your head against the wall of someone else's choices — like entering a marriage where your partner didn't tell you they were $100k in debt when you signed the contract. oopsies.

#### the age of reason

then an enlightened traveler came onto the scene to challenge the old medieval tyrants — and the age of reason was upon us. he said: "what if we shipped a _standardized_ set of components that you actually _own_, like source code?"

shadcn changed one essential variable: instead of giving you a black-box, he gives you the code itself, right there in your repo — customizable to your needs, infinitely tweakable, limitlessly malleable. And *that* has made all the difference.

why?

- "design system" thinking was mainstream, but most teams didn't have time to build one from scratch
- the ecosystem was quietly converging on React, Next, Tailwind, Radix anyway

so when shadcn showed up with:

> "here's a tasteful, standardized design system you can *fork* instead of *borrow*"

it was the puzzle piece that fit into the mental model we all already wanted.

he offers us the best of both worlds:

- **standardization** gives us the speed, shared patterns, and community of examples to build fast and learn together
- **ownership** gives us the freedom to go offroad without asking a landlord first

held up as an ideal, shadcn stops being a library and becomes a philosophy:

the tools that win will give us a common foundation we can build on quickly — and then get out of the way when it's time to make something only _we_ would build.

#### the perfect tailwind ;)

turns out that philosophy also had a secret unexpected ally.

none of this was designed for AI. i don't think that shadcn had some genius-level foresight into the future here. but as it turns out, AI loves his design.

LLMs need readable, standardized code. they work best when these two things are true:

- the code is **standardized** enough that patterns are obvious
- the code is **owned** enough that they're allowed to rewrite it

so some might say the he had the perfect tailwind ;)

> shadcn won because it's the first UI library that's AI-native by accident.

if AI is going to sit in your editor as a permanent pair, then the tools that win next will all rhyme with this pattern:

- they **standardize** the boring 80% into clear, repeatable shapes
- they **ship as source** in your repo, not as a black box in `node_modules`
- they're **safe for agents** (claude code, cursor, whatever) to read, refactor, and rewrite end-to-end

shadcn just happened to get there first for UI.

the next wave of devtools will look the same: design systems, form builders, CMSs, infra-as-code — anything that ships as a forkable, well-structured canon the robots can confidently mangle on your behalf.
