---
title: "Rating words the way people do"
url: https://xanderpico.com/resources/jev-word-ratings/index.html
author: Alex Pico
published: 2026-10-25
updated: 2026-10-25
kind: results
thread: "Cognitive tests at scale, for pennies"
thread_url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
summary: "A cheap AI model rates 400 words each for concreteness, valence and arousal and is compared with published human norms: close on two, weaker on arousal, and where it disagrees. Work in progress."
---
RESOURCE · COGNITIVE TESTS AT SCALE · Results · October 2026 · work in progress

# Rating words the way people do

People have rated tens of thousands of English words for how concrete, pleasant or exciting they are. A fast, cheap AI model can do the same in minutes. Here is how close it gets, and where it disagrees.

**How to read this.** Each word was rated eight times (two question wordings, two ways of showing the word, two repeats) and the answers averaged. The human ratings come from two public datasets of word norms, for 400 words per measure chosen evenly across the range. The copies of the data files used here were not independently checked against the journals’ own files beyond the word counts and plausible values.

## Close to people on two of three measures

|  | Concreteness | Valence (pleasant to unpleasant) | Arousal (calm to exciting) |
| --- | --- | --- | --- |
| Correlation of Jev’s average with people’s | 0.90 | 0.88 | 0.61 |
| Spread of ratings across words, Jev vs people | 1.41 vs 1.04 | 1.93 vs 1.31 | 1.71 vs 0.92 |

A rating costs about two thousandths of a cent and takes a fifth of a second, so a whole norm of a few hundred words is a minute’s work. Jev is more extreme than people on every measure: it uses the ends of the scale more.

[Figure: Three panels comparing Jev's concreteness ratings with people's.]

Concreteness: Jev’s average rating against people’s for 400 words.

## Where it disagrees with people

- **Concreteness.** Jev rates sensory and physical-action words as more concrete than people do (crinkly, papery, bending, jolting) and some abstract-sounding words as more abstract (twentieth, nonhuman, tribe, homemaker, billing, astrophysics, sum).
- **Valence.** It is about 0.6 points more negative overall. Words about sex or crime (brothel, handgun, wanton) get lower scores than people give; upscale, recital, ska and conquering get higher ones.
- **Arousal.** The largest misses are words that are intense but not exciting to read. It calls morphine, paralysis and weak very calm (1.3 to 1.5 on a 9-point scale, against about 5 for people) and rates meth 8.7 where people gave 4.4.

[Figure: Valence ratings, Jev against people.]

Valence.

[Figure: Arousal ratings, Jev against people.]

Arousal: the weakest of the three.

## Can rewording fix arousal?

We tried the obvious explanation: that Jev rates how intense the thing is rather than how stirred up a person feels. We asked five ways: stimulated versus calm; energy or excitement; how awake and physically stirred up a person feels (not whether it is good or bad); how intense the thing itself is; and how much it would make your heart race. None got past 0.61. The heart-racing wording correlates only 0.53 with the first wording, so it makes different mistakes, and two different wordings together reached 0.67. (We looked at several combinations after seeing the data, so treat 0.67 as a hint, not a finding.) Asking the same words twice added nothing.

[Figure: Bar chart of correlations for five phrasings and two combinations.]

Correlation with people’s arousal ratings for each wording, and for combinations.

## Its uncertainty does not follow people’s disagreement

People disagree most about mid-scale words. Jev’s uncertainty is also highest in the middle of the scale, which makes the two look related. Once position on the scale is accounted for, Jev’s uncertainty barely tracks how much people disagree about a word (partial correlations −0.12 for concreteness, +0.13 for valence, −0.04 for arousal). It is unsure where words are in the middle, not where people actually dispute a word’s meaning.

## A second opinion helps only if it differs

Asking the identical question again added nothing (a gain of 0.0003 in explained variance). A different wording added a little (0.018), and a different wording plus a different way of showing the word added most (0.022). The ordering was the same on all three measures. It resembles the human “crowd within” idea, where a second guess from the same person helps more the more it differs from the first; we did not read the original study closely enough to cite its size.

## What it cost

All of the word-rating work, 12,740 calls, cost $0.22.

## Sources

1. [Brysbaert, Warriner and Kuperman, Concreteness ratings for 40 thousand English word lemmas](https://doi.org/10.3758/s13428-013-0403-5) (the concreteness data; the journal year is 2014, first published online 2013)
2. [Warriner, Kuperman and Brysbaert, Norms of valence, arousal, and dominance for 13,915 English lemmas](https://doi.org/10.3758/s13428-012-0314-x) (the valence and arousal data)

Independent work using Jev from TypeSafe AI; not affiliated with or endorsed by TypeSafe. Jev version: jev-1.13.0.

---

## About this page

- Cite as: Alex Pico. “Rating words the way people do.” xanderpico.com, published October 25, 2026. https://xanderpico.com/resources/jev-word-ratings/index.html
- Tables as CSV: https://xanderpico.com/resources/jev-word-ratings/data/table-1.csv
- Thread: [Cognitive tests at scale, for pennies](https://xanderpico.com/threads/jev-cognitive-tests-at-scale.md)
- Previous in this thread: [Eight classic bias tests, one cheap AI model, two cents](https://xanderpico.com/resources/jev-bias-battery/index.md)
- Next in this thread: [Building with a gut-feeling model: notes from 200,000 calls](https://xanderpico.com/resources/jev-builders-notes/index.md)
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
