---
title: "Do word pairs feel as similar to Jev as to people?"
url: https://xanderpico.com/resources/jev-word-similarity/index.html
author: Alex Pico
published: 2026-10-26
updated: 2026-10-26
kind: results
thread: "Cognitive tests at scale, for pennies"
thread_url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
summary: "A cheap AI model rates 999 word pairs for similarity and is compared with people's ratings: it ranks them well but is a harsher judge, and the wording of the question matters. Work in progress."
---
RESOURCE · COGNITIVE TESTS AT SCALE · Results · October 2026 · work in progress

# Do word pairs feel as similar to Jev as to people?

A text-only judgment model rated 999 word pairs, using two questions and both word orders. Its ranking tracks people’s surprisingly well. Its levels do not.

**How to read this.** We asked Jev about all 999 SimLex-999 word pairs, in two wordings and both orders. Each dot is the mean of four calls. The human data are a benchmark, not a claim that the two systems use the same scale. The probe calls are in the cost ledger but not in the analysis.

[Figure: Scatter plot comparing SimLex-999 human ratings with Jev's mean rating for 999 word pairs.]

The dashed line is equal numeric rating. The purple line is fitted to Jev's ratings. Jev usually gives lower levels.

## It sorts pairs much like people do

The pooled correlation with people’s SimLex-999 ratings was **0.854** (95% interval 0.841 to 0.868). One direct-similarity wording reached 0.888. A replacement wording reached 0.766 by Pearson correlation, despite a Spearman correlation of 0.865. The wording matters.

## But it is stricter

The fitted line has slope 0.636 and intercept 0.345. In plain language: Jev gets much of the ordering right, but it usually gives lower scores. Alcohol/gin is the sharpest example: people gave it 8.65; Jev gave it 2.65. This is why rank agreement is safer than treating its score as a human score.

## Two practical lessons

- **Ask what you mean.** The direct-similarity wording said that related is not the same as similar. That may be why association did not add the predicted residual effect: 0.047 (95% interval -0.019 to 0.116).
- **Average both orders.** Forward and reverse orders correlated 0.972, but still differed by 0.337 levels on average for wording A.

## What it cost

All logged S1 calls, including the probe, were 4,196 calls and $0.0754. Source: the `calls*.jsonl` ledger read by this build script.

## Sources

1. [Hill, Reichart and Korhonen (2015), SimLex-999](https://doi.org/10.1162/COLI_a_00237) (bibliographic record checked)

One model version: jev-1.13.0. This is independent work using Jev from TypeSafe AI, not affiliated with or endorsed by TypeSafe. We did not compare other models or methods.

---

## About this page

- Cite as: Alex Pico. “Do word pairs feel as similar to Jev as to people?.” xanderpico.com, published October 26, 2026. https://xanderpico.com/resources/jev-word-similarity/index.html
- Thread: [Cognitive tests at scale, for pennies](https://xanderpico.com/threads/jev-cognitive-tests-at-scale.md)
- Previous in this thread: [Building with a gut-feeling model: notes from 200,000 calls](https://xanderpico.com/resources/jev-builders-notes/index.md)
- Next in this thread: [Which senses does a text-only AI hear in a word?](https://xanderpico.com/resources/jev-senses-of-words/index.md)
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
