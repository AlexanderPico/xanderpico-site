---
title: "Cognitive tests at scale, for pennies"
url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
author: Alex Pico
published: 2026-10-25
updated: 2026-10-26
kind: thread
tags: ["Judgment models", "Cognitive science", "AI & machine learning"]
feed: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
---

# Cognitive tests at scale, for pennies

**Guiding question:** Where do the quick judgments of a very cheap AI differ from ours, and what does running thousands of tests teach us about minds and about building with AI?

Jev, from TypeSafe AI, answers a typed question about a text with a probability in about a fifth of a second for about two thousandths of a cent, and when it is confident it gives the same answer each time. That makes psychology-style experiments practical at a scale that normally needs hundreds of volunteers: rating thousands of words, or running a battery of classic bias tests in minutes. What turns up matters to AI builders, Jev users and brain researchers: some human quirks appear, some do not, and on first impressions it does the opposite of people.

## Key findings

- With bad facts about a job candidate listed last, Jev's rating was 0.82 points lower on a 9-point scale in 12 of 12 sets, the reverse of people's first-impression pattern. Source: [Eight classic bias tests, one cheap AI model, two cents](https://xanderpico.com/resources/jev-bias-battery/index.md)
- Rated one at a time, Jev scored the conjunction higher on all 20 Linda-style profiles; shown both statements side by side, it picked the conjunction on none. Source: [Eight classic bias tests, one cheap AI model, two cents](https://xanderpico.com/resources/jev-bias-battery/index.md)
- A random anchor number moved Jev's estimates 0.7 points on a 0–100 scale for facts it knows, and 8.6 points for things it cannot know. Source: [Eight classic bias tests, one cheap AI model, two cents](https://xanderpico.com/resources/jev-bias-battery/index.md)
- Jev's word ratings correlated with human norms at 0.90 for concreteness and 0.88 for valence, but only 0.61 for arousal, and rewording did not repair arousal. Source: [Cognitive tests at scale, for pennies: a short research article](https://xanderpico.com/resources/jev-synthesis/index.md)
- Across the 999 SimLex-999 word pairs, Jev's similarity ratings correlated 0.854 with people's ratings, though its scores were usually lower. Source: [Do word pairs feel as similar to Jev as to people?](https://xanderpico.com/resources/jev-word-similarity/index.md)
- On 600 words, Jev matched human sensory ratings best for touch (0.783) and worst for interoception, the inner-body sense (0.494). Source: [Which senses does a text-only AI hear in a word?](https://xanderpico.com/resources/jev-senses-of-words/index.md)
- The whole bias battery took 1,356 calls and cost $0.0225; the word-rating work took 12,740 calls and cost $0.22. Source: [Building with a gut-feeling model: notes from 200,000 calls](https://xanderpico.com/resources/jev-builders-notes/index.md)

Limits: Results cover one pinned model version, prompts written for this work, and about a dozen items in many bias tests; they do not compare Jev with other models or show shared human mechanisms.

## Resources

- Results, 2026-10-25: [Eight classic bias tests, one cheap AI model, two cents](https://xanderpico.com/resources/jev-bias-battery/index.md) ([web page](https://xanderpico.com/resources/jev-bias-battery/index.html)). A battery of classic psychology tests run on a fast, cheap AI judgment model: which human quirks it shows, which it does not, and the one it reverses. Includes the Linda problem and a first-impressions test that comes out the opposite way to people. Work in progress.
- Results, 2026-10-25: [Rating words the way people do](https://xanderpico.com/resources/jev-word-ratings/index.md) ([web page](https://xanderpico.com/resources/jev-word-ratings/index.html)). A cheap AI model rates 400 words each for concreteness, valence and arousal and is compared with published human norms: close on two, weaker on arousal, and where it disagrees. Work in progress.
- Guide, 2026-10-25: [Building with a gut-feeling model: notes from 200,000 calls](https://xanderpico.com/resources/jev-builders-notes/index.md) ([web page](https://xanderpico.com/resources/jev-builders-notes/index.html)). Practical rules for using Jev, a fast, cheap AI judgment model, from about 200,000 logged calls, including one failed attempt at a worm's nerve circuit.
- Results, 2026-10-26: [Do word pairs feel as similar to Jev as to people?](https://xanderpico.com/resources/jev-word-similarity/index.md) ([web page](https://xanderpico.com/resources/jev-word-similarity/index.html)). A cheap AI model rates 999 word pairs for similarity and is compared with people's ratings: it ranks them well but is a harsher judge, and the wording of the question matters. Work in progress.
- Results, 2026-10-26: [Which senses does a text-only AI hear in a word?](https://xanderpico.com/resources/jev-senses-of-words/index.md) ([web page](https://xanderpico.com/resources/jev-senses-of-words/index.html)). Jev rates 600 words on six senses and two body actions and is compared with human norms: closest on touch, furthest on the inner-body sense. Work in progress.
- Article, 2026-10-26: [Cognitive tests at scale, for pennies: a short research article](https://xanderpico.com/resources/jev-synthesis/index.md) ([web page](https://xanderpico.com/resources/jev-synthesis/index.html)). A short summary and research article pulling the Jev results together: what a fast, cheap judgment model shares with people, where it differs, and what that means for AI builders, Jev users and brain researchers.

## Podcast

- [Cognitive tests at scale, for pennies](https://xanderpico.com/podcast/index.html#ep2) (4:16). Transcript: https://xanderpico.com/podcast/pico-bytes-ep02-jev-cognitive-tests-transcript.txt

## Records on this thread

- 2026-10-14: [Jev: For the builders AND dreamers](https://typesafe.ai/blog/jev-1-14). Announces Jev 1.14.0 and experimental image, box and long-context features behind danger-zone flags, noting that models perform worse on images than on pure text.
- 2026-06-02: [Cognitive Biases in Large Language Models: A Systematic Quantitative Assessment and Debiasing Analysis](https://doi.org/10.3390/electronics15112428). Measures eleven cognitive biases in eight language models; reports framing among the strongest effects, sunk cost largely absent and anchoring weak, especially on factual questions.
- 2023-02-02: [Using cognitive psychology to understand GPT-3](https://doi.org/10.1073/pnas.2218523120). Tests GPT-3 on classic experiments; it fell for the Linda conjunction problem, avoided a base-rate trap, and small changes to the prompts led it astray.
- 2019-12-12: [The Lancaster Sensorimotor Norms: multidimensional measures of perceptual and action strength for 40,000 English words](https://doi.org/10.3758/s13428-019-01316-z). Human ratings of how strongly about 40,000 English words are experienced through six senses and five body actions.
- 2015-12: [SimLex-999: Evaluating Semantic Models With (Genuine) Similarity Estimation](https://doi.org/10.1162/COLI_a_00237). A set of 999 word pairs rated by people for how similar their meanings are, as opposed to how related they are.
- 2013-10-19: [Concreteness ratings for 40 thousand generally known English word lemmas](https://doi.org/10.3758/s13428-013-0403-5). Human concreteness ratings for about 40 thousand generally known English word lemmas.
- 2013-02-13: [Norms of valence, arousal, and dominance for 13,915 English lemmas](https://doi.org/10.3758/s13428-012-0314-x). Human ratings of valence, arousal and dominance for 13,915 English lemmas.
- 1988: [Outcome bias in decision evaluation](https://doi.org/10.1037/0022-3514.54.4.569). Subjects rated decisions as better when the outcome was favorable, although they understood they had all the information available to the decision maker.
- 1983-10: [Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment](https://doi.org/10.1037/0033-295X.90.4.293). Reports that a conjunction can seem more probable than one of its parts, in judgments of lay people and experts, in between-subjects and within-subjects comparisons.
- 1946-07: [Forming impressions of personality](https://doi.org/10.1037/h0055756). In Experiment VI, the same six traits read forward or in reverse gave two groups different impressions; Asch concluded that the first terms set a direction that colors later ones.

## Related threads

- [Jev Turing](https://xanderpico.com/threads/jev-turing.md): Both run experiments on Jev, TypeSafe AI's judgment model: one compares its judgments with people's, the other uses them as logic gates.

---

- Cite as: Alex Pico. “Cognitive tests at scale, for pennies.” xanderpico.com, published October 25, 2026, updated October 26, 2026. https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
