---
title: "Building with a gut-feeling model: notes from 200,000 calls"
url: https://xanderpico.com/resources/jev-builders-notes/index.html
author: Alex Pico
published: 2026-10-25
updated: 2026-10-25
kind: guide
thread: "Cognitive tests at scale, for pennies"
thread_url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
summary: "Practical rules for using Jev, a fast, cheap AI judgment model, from about 200,000 logged calls, including one failed attempt at a worm's nerve circuit."
---
RESOURCE · COGNITIVE TESTS AT SCALE · Guide · October 2026 · work in progress

# Building with a gut-feeling model: notes from 200,000 calls

Jev doesn’t write; it answers typed questions about a text with a probability. These are the things that held up, the things that surprised us, and one attempt that failed.

**Where this comes from.** About 218,928 calls to Jev over three weeks, $3.75 in total, mostly small controlled tests: logic gates, parity, rating words, bias batteries, and a small attempt to wire up a worm’s nerve circuit. These are observations on one model version (jev-1.13.0), not a specification, and they are independent of TypeSafe.

## What Jev is good at

- **Cheap and fast.** About $0.00001 to $0.00005 a call and about a fifth of a second. With eight calls in parallel we ran about 39 a second.
- **Repeatable when it is confident.** Asking the identical question again returns the same probability, so repeats add no information. When you want a second opinion, change the wording or the way the input is shown instead. In word-rating tests that was the only kind of second opinion that helped.
- **Its answers are good bits.** In early tests the answers it was very sure of (probability above 0.95 or below 0.05) were right 652 of 652 times. Confident mistakes do exist, though, especially when the input is written in an unusual way, so test each way you plan to present an input.

## Rules we would follow again

1. **Keep the number of inputs small for counting.** Parity (an odd or even number of items) failed from 3 to 6 inputs and was at chance by 8. “All of these” and “exactly two” held up to 16. Break a counting rule into one-step questions.
2. **Wording matters more than repeats.** The same 999 word pairs gave r = 0.89 with one similarity wording and r = 0.77 with another. Repeats add little; a genuinely different question is a different rater.
3. **Use ranks, not raw levels.** On those pairs Jev ranked like people but was systematically stricter. Correlation is more useful than treating its 9-level score as a human score.
4. **For a symmetric pair, ask both orders.** Swapping the two words still moved ratings by 0.25 to 0.34 levels on a 9-level scale, although the two orders correlated 0.97. Average both orders.
5. **The live price was lower than the early estimate.** It was $0.071764 / 3,996 = about $0.000018 per 9-level call in S1, and $0.147422 / 9,600 = about $0.000015 in L1. Both are about a third of the earlier $0.00005 estimate.
6. **Text has a weak spot for the inner body.** On sensorimotor word ratings, Jev matched people best for touch (r = 0.78) and least for interoception, the inner-body sense (r = 0.49).
7. **Order is part of the input.** Reversing a list moved answers by about 0.2 levels on a 0–4 scale, about three times its repeat noise. Averaging two orders cut that by about 30%; four orders added little. And with mixed evidence the last items weigh more (see the bias battery).
8. **List quiet inputs separately.** If an input is described as “silent” but sits in the same list as active inputs, rewording its direction still moved the answer. Moving it to its own “inactive inputs” list removed the effect; an emphatic instruction only halved it, and writing activity as “0 of 4” made it worse.
9. **Sentences are editable.** Flipping the push direction of the strongest active input moved the answer the predicted way 88–90% of the time, from 5 to 41 inputs.
10. **Pin the model version and record it.** Version 1.14.0 changed about one answer in ten on our parity tests (26 of 248, against 7 of 248 for the unpinned name), and the unpinned name moves.
11. **Score answers are keyed by position, not label.** For a 5-level score, the answer keys are “0” to “4”, whatever you call the levels.
12. **Images need extra care.** TypeSafe describes images as an experimental “danger zone” feature that performs worse than text.1 In our tests one endpoint silently ignored images; check with a trivially visible feature before spending.

## A small attempt that didn’t work: a worm’s nerve circuit

We built a 64-neuron slice of the *C. elegans* touch circuit from a published connectome, with one Jev call per neuron per step and each connection written as a sentence. Everything saturated: within a few steps nearly every neuron was at its highest level, in every version, including a plain threshold model with no AI at all, so the test could not show the reflex. What we learned: Jev matched the plain model closely (88% of neurons at the same level), had no problem with up to 41 inputs per neuron, and responded to what each sentence said rather than to the neuron’s name. Next time, pick an outcome that cannot saturate and check the plain model first.

## Cost reference

Whole bias battery: 1,356 calls, $0.0225. Word-rating work: 12,740 calls, $0.22. A 64-neuron, 10-step, eight-version worm run: 16,520 calls, $0.39.

## Sources

1. [TypeSafe AI, Jev: For the builders AND dreamers (Oct 14, 2026)](https://typesafe.ai/blog/jev-1-14)

Independent work using Jev from TypeSafe AI; not affiliated with or endorsed by TypeSafe. Numbers come from our own call logs and are for jev-1.13.0.

---

## About this page

- Cite as: Alex Pico. “Building with a gut-feeling model: notes from 200,000 calls.” xanderpico.com, published October 25, 2026. https://xanderpico.com/resources/jev-builders-notes/index.html
- Thread: [Cognitive tests at scale, for pennies](https://xanderpico.com/threads/jev-cognitive-tests-at-scale.md)
- Previous in this thread: [Rating words the way people do](https://xanderpico.com/resources/jev-word-ratings/index.md)
- Next in this thread: [Do word pairs feel as similar to Jev as to people?](https://xanderpico.com/resources/jev-word-similarity/index.md)
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
