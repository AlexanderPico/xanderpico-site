---
title: "Which senses does a text-only AI hear in a word?"
url: https://xanderpico.com/resources/jev-senses-of-words/index.html
author: Alex Pico
published: 2026-10-26
updated: 2026-10-26
kind: results
thread: "Cognitive tests at scale, for pennies"
thread_url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
summary: "Jev rates 600 words on six senses and two body actions and is compared with human norms: closest on touch, furthest on the inner-body sense. Work in progress."
---
RESOURCE · COGNITIVE TESTS AT SCALE · Results · October 2026 · work in progress

# Which senses does a text-only AI hear in a word?

A text-only model matches people’s ratings of touch words best and inner-body words least. That is a pattern in text judgments, not evidence that it senses either one.

**How to read this.** We sampled 600 words from a public mirror of the Lancaster Sensorimotor Norms. Jev rated each word on eight dimensions, in two wordings. Bars show correlation with people’s ratings; whiskers are bootstrap 95% intervals. The probe calls are in the cost ledger but not in the analysis.

[Figure: Bar chart of Jev-human correlations for eight sensory and body dimensions.]

Touch is highest. The highlighted inner-body dimension, interoception, is lowest.

## Text tracks touch best, inner body least

Jev’s highest correlation was touch: **0.783** (95% interval 0.745 to 0.818). Its lowest was interoception, the inner-body sense: **0.494** (0.431 to 0.557). This does not mean it feels touch or body states. It means its text judgments align with the human ratings to different degrees.

## The surprise was taste and smell

We expected smell and taste to be weaker than vision. They were not: taste was 0.747 and smell was 0.705, above vision at 0.683. Hearing was 0.679; hand/arm was 0.694; mouth was 0.645.

## Can it name the main sense?

Across the six perceptual senses, Jev and people chose the same highest-rated sense for 379 of 600 words: 63.2%. A uniform six-way chance baseline is 16.7%. That is useful agreement, but below the pre-registered 70% target.

## What it cost

All logged L1 calls, including the probe, were 10,080 calls and $0.1548. Source: the `calls*.jsonl` ledger read by this build script.

## Sources

1. [Lynott, Connell, Brysbaert, Brand and Carney (2020), The Lancaster Sensorimotor Norms](https://doi.org/10.3758/s13428-019-01316-z) (abstract read through a search result)

The file used here is the `seantrott/cs_norms` GitHub mirror; where it came from was not checked against the authors’ source. The human side is Mechanical Turk ratings. One model version: jev-1.13.0. Independent work using Jev from TypeSafe AI; not affiliated with or endorsed by TypeSafe.

---

## About this page

- Cite as: Alex Pico. “Which senses does a text-only AI hear in a word?.” xanderpico.com, published October 26, 2026. https://xanderpico.com/resources/jev-senses-of-words/index.html
- Thread: [Cognitive tests at scale, for pennies](https://xanderpico.com/threads/jev-cognitive-tests-at-scale.md)
- Previous in this thread: [Do word pairs feel as similar to Jev as to people?](https://xanderpico.com/resources/jev-word-similarity/index.md)
- Next in this thread: [Cognitive tests at scale, for pennies: a short research article](https://xanderpico.com/resources/jev-synthesis/index.md)
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
