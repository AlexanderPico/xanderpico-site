---
title: "Eight classic bias tests, one cheap AI model, two cents"
url: https://xanderpico.com/resources/jev-bias-battery/index.html
author: Alex Pico
published: 2026-10-25
updated: 2026-10-25
kind: results
thread: "Cognitive tests at scale, for pennies"
thread_url: https://xanderpico.com/threads/jev-cognitive-tests-at-scale.html
summary: "A battery of classic psychology tests run on a fast, cheap AI judgment model: which human quirks it shows, which it does not, and the one it reverses. Includes the Linda problem and a first-impressions test that comes out the opposite way to people. Work in progress."
---
RESOURCE · COGNITIVE TESTS AT SCALE · Results · October 2026 · work in progress

# Eight classic bias tests, one cheap AI model, two cents

Jev answers a typed question about a text in about a fifth of a second for about two thousandths of a cent. That makes a whole psychology-style battery a few minutes’ work. Here is what eight classic judgment tests found, where it matches published human findings, and where it does the opposite.

**How to read this.** Each test uses about a dozen items written for this work, two phrasings per item, on one version of the model (jev-1.13.0). Every number is an average over items, and every call was logged with its cost. We wrote down our guesses before each run; most were wrong, and the pages say where. Where a result is compared with people, the paper was read; where it wasn’t, the page says so.

[Figure: A three-column card: effects Jev shows, effects it does not show, and the one it reverses.]

The whole battery on one page.

## The one that goes the other way

In 1946 Solomon Asch read two groups of people the same six traits about a person: intelligent, industrious, impulsive, critical, stubborn, envious. One group heard them in that order, the other in reverse. The first group pictured an able person with some flaws; the second pictured a “problem” whose abilities were held back by serious difficulties. Asch’s explanation was that the first terms set a direction that colors the rest.1

[Figure: Two lists of the same six words in opposite order.]

The same six words, in two orders.

We gave Jev the same kind of test on sets of traits. It did the opposite: with the bad traits last, its impression was lower than for the identical traits the other way round. The effect holds for short and long lists, for traits and for facts about a job candidate, and it grows with the length of the list.

[Figure: Dot plot of seven settings, all to the left of zero except one near zero.]

Each dot is one set of traits or facts. The black bar is the average. Left of zero means the last items win; people in Asch’s study would sit to the right.

| Setting | Good-first minus bad-first (9-point scale) | Sets where the last items won |
| --- | --- | --- |
| 2 good + 2 bad traits | −0.38 | 11 of 12 |
| 3 + 3 traits, first run | −0.31 | 10 of 12 |
| 3 + 3 traits, new items | −0.63 | 12 of 12 |
| 5 + 5 traits | −0.75 | 12 of 12 |
| Job candidate, 3 good + 3 bad facts | −0.82 | 12 of 12 |
| One good and one bad trait joined by “but” | −0.29 | 10 of 12 |
| The same pairs joined by “and” | −0.04 | no effect |

It is not simply “the last word wins” language logic: a “but” sentence moved it only a little and a plain “and” not at all. The pattern looks more like evidence building up across the list with later items weighing more. We don’t know why. We also haven’t separated “the last items win” from “bad news last hurts more”.

## A split personality: the Linda problem

Linda is bright, outspoken and passionate about social justice. Is she more probably a bank teller, or a bank teller active in the feminist movement? Many people choose the second, which cannot be more probable than the first. The original paper reports violations of this rule in lay people and experts, in comparisons between people and within people.2 GPT-3 was reported to fall for it too.4

On 20 profiles of this kind, Jev rating each statement on its own scored the “and” version higher on all 20 (by about 0.9 points on a 9-point scale). Shown both statements together and asked which is more probable, it picked the “and” version on none. That does not make it more rational than people: our side-by-side question states the comparison outright, which may cue the rule.

[Figure: Three panels: Linda rated alone, Linda side by side, and anchoring on known versus unknowable questions.]

Left and middle: the same 20 profiles, rated alone and side by side. Right: how far a random ‘high’ number drags an answer above a random ‘low’ one.

## Anchors work where its knowledge ends

We mentioned a random-looking “10” or “90” before asking for an estimate. On facts Jev knows, such as the share of the Earth covered by water, the anchor moved its answer 0.7 points on a 0–100 scale. On things it cannot know, such as the share of a stranger’s income that goes to rent, it moved 8.6 points. A 2026 study of eight chat models also found weak anchoring, especially on factual questions.5

## Smaller effects, and the ones that are absent

- **Outcome bias, present.** The same decision, with the same information at the time, was rated slightly better when it turned out well (+0.35 on a 9-point scale, 20 of 20 decisions), even though the question said to judge by what was known then. People do this too: in Baron and Hershey’s studies they understood they had the decision maker’s information and were asked about decision quality, yet rated good outcomes higher.3
- **Dilution, small.** Adding irrelevant facts made its judgments about 0.2 points less extreme, which is the direction reported for people.6
- **Framing, none.** The same choice worded as lives saved or lives lost made no difference. The 2026 study found framing among the strongest effects in chat models,5 so Jev is not behaving like a small chatbot.
- **Halo, none.** Whether a person was described as strikingly good-looking or as having a scar did not move judgments of honesty, maths ability or reliability. Its answers sat near “neutral”, so there may have been little room to move.
- **Base-rate neglect, none.** On Bayes problems stated as probabilities it was right 288 of 288 times; GPT-3 also avoided a base-rate trap.4
- **Sunk cost, nearly none.** 30% were willing to continue when money was already spent, 27% when it was not.

## What this shows, and what it doesn’t

It shows that a fast, cheap judgment model has a specific bias profile that can be measured in a few minutes: some human quirks appear (rating alone, anchoring where knowledge ends, outcome bias), some do not (framing, halo), and one reverses. For people building systems around such a model, the practical points are that the order of evidence is part of the input and that comparing is not the same as rating. For researchers of human judgment, it offers a very cheap stand-in participant for asking which quirks come from the information and which from being a person. It does not show that the model has these effects for the same reasons people do, and it says nothing about brains.

## What it cost

[Figure: A receipt listing five runs and the total cost.]

Calls and costs read from the call ledgers.

## What is still open

- Why the last items weigh more, and whether it is really “bad news last”.
- Whether other versions of the model, and other small judgment models, share this profile. A newer version changes about one answer in ten on some tests, so these numbers are for jev-1.13.0.
- Larger item sets. About a dozen items per test is enough to see a large effect, not to rank small ones.

## Sources

1. [Asch (1946), Forming impressions of personality](https://doi.org/10.1037/h0055756) (full text read; Experiment VI)
2. [Tversky and Kahneman (1983), the conjunction fallacy](https://doi.org/10.1037/0033-295X.90.4.293) (abstract read)
3. [Baron and Hershey (1988), Outcome bias in decision evaluation](https://doi.org/10.1037/0022-3514.54.4.569) (abstract and method read)
4. [Binz and Schulz (2023), Using cognitive psychology to understand GPT-3](https://doi.org/10.1073/pnas.2218523120) (full text read)
5. [Pagliaro (2026), Cognitive Biases in Large Language Models: A Systematic Quantitative Assessment and Debiasing Analysis](https://doi.org/10.3390/electronics15112428) (full text read)
6. [Dilution in legal decision making, Current Psychology (1998)](https://link.springer.com/article/10.1007/s12144-998-1015-6) (abstract read; it describes the dilution effect of Nisbett, Zukier and Lemley, 1981)

The original anchoring, framing, sunk-cost and halo papers were not read for this page, so it makes no claims about what people do in them. The model is Jev from TypeSafe AI; this is independent work and not affiliated with or endorsed by TypeSafe.

---

## About this page

- Cite as: Alex Pico. “Eight classic bias tests, one cheap AI model, two cents.” xanderpico.com, published October 25, 2026. https://xanderpico.com/resources/jev-bias-battery/index.html
- Tables as CSV: https://xanderpico.com/resources/jev-bias-battery/data/table-1.csv
- Thread: [Cognitive tests at scale, for pennies](https://xanderpico.com/threads/jev-cognitive-tests-at-scale.md)
- Next in this thread: [Rating words the way people do](https://xanderpico.com/resources/jev-word-ratings/index.md)
- Updates for this thread: https://xanderpico.com/feeds/jev-cognitive-tests-at-scale.xml
- Site index: https://xanderpico.com/llms.txt · connections between threads: https://xanderpico.com/site.json
