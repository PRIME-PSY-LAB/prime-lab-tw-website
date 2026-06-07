---
title: "When AI Seems Omnipotent: A Seminar at NCKU Psychology"
lang: en
translation_key: ncku-ai-vision-seminar
image: /images/activity/ncku-ai-seminar-20260605.jpg
author: Yen-Ju Chen
highlight: true
tags:
  - news
  - seminar
  - AI
  - visual perception
  - psychology
---

![Invited seminar at the Department of Psychology, National Cheng Kung University]({{ "/images/activity/ncku-ai-seminar-20260605.jpg" | relative_url }})

I was grateful for the invitation from Liang-Sheng, my former junior colleague from graduate school, to return to my alma mater, the Department of Psychology at National Cheng Kung University, for a seminar. It was a special experience to stand again in a place where many of my own questions about perception, computation, and psychological theory first took shape.

The talk was titled **"When AI Seems Omnipotent: Perspectives from Visual Perception Research."** The full slide deck is available here:

[Download the seminar slides]({{ "/assets/slides/ncku-ai-vision-seminar-20260605-web.pptx" | relative_url }})

## When performance looks like intelligence

The talk began with a familiar impression: AI now seems able to do almost everything. It recognizes objects, segments images, follows speech, answers questions, plans actions, plays games, and generates images or text with striking fluency. Many of these abilities once sat close to the center of psychological inquiry. If a single family of models can now perform them, it is natural to ask whether psychological theory has become less necessary.

My answer was no. Strong performance is an engineering achievement, but it is not yet a scientific explanation of human cognition. A benchmark tells us that a system can solve a task under a defined objective and data distribution. It does not automatically tell us what problem the human mind is solving, what representation it uses, or why the mechanism takes the form it does.

![Marr's three levels of analysis]({{ "/images/blog/ncku-ai-vision-seminar/slide-14-marr-three-levels.png" | relative_url }})

This distinction is close to Marr's classical three levels of analysis. A complete explanation asks about the computational goal, the algorithmic or representational process, and the physical implementation. Modern AI often pushes us toward the implementation and performance side: build a system, train it, evaluate it. Psychology must keep asking a different kind of question: what is the organism trying to compute, and why is that computation useful in the world it inhabits?

## AI models are not human mechanisms

One central theme of the seminar was that AI models and human cognitive mechanisms should not be treated as the same thing. An AI model may be excellent at estimating optical flow, recognizing an object, or generating a plausible image, but it was not necessarily built to reproduce how a human observer interacts with the world.

Visual perception makes this gap visible. Human motion perception is sensitive to particular spatiotemporal structures, and some illusions expose the detectors and assumptions used by the visual system. Computer vision models can succeed on natural-image benchmarks while failing on stimuli designed around the human algorithm. That failure is not a defect in engineering terms, but it is scientifically informative. It tells us that "solving the task" and "using the same computation" are different claims.

In this sense, AI becomes useful not because it replaces psychological theory, but because it sharpens theory. A model failure can force us to specify what the human system must be doing. A model success can become meaningful only after we ask which constraints made the success possible.

## AI as a scientific instrument

The seminar then turned to two research examples. The first treated AI as a **hypothesis testing proxy**. In work on multi-order motion perception, computational models can be used to test whether a proposed architecture and training environment are sufficient to reproduce human-like responses. The philosophical point is subtle: the model is not the organism, but it can become a controlled thought experiment. If a model trained under one set of assumptions fails, and a model trained with different constraints succeeds, we gain a sharper view of what kind of natural regularities the human visual system may have adapted to.

The second example treated AI as a **flexible stimulus generator**. In psychophysics, the hardest part is often not measuring behavior, but creating stimuli that isolate the intended variable without smuggling in unwanted confounds. When a research question requires controlling many pairwise temporal correlations among visual elements, traditional construction can quickly become mathematically impossible. A machine-learning generator can instead optimize stimuli toward a desired structure.

![Feedforward generation and backward propagation loss for AI-based stimulus generation]({{ "/images/blog/ncku-ai-vision-seminar/slide-47-feedforward-backward-loss.png" | relative_url }})

![Behavioral results from temporal grouping research]({{ "/images/blog/ncku-ai-vision-seminar/slide-49-temporal-grouping-results.png" | relative_url }})

This use of AI is very different from asking an AI to "give the answer." Here, the model is part of the experimental apparatus. It helps us create observations that would otherwise be difficult to obtain. The scientific value still depends on the human act of defining the question, designing the constraint, and interpreting what the resulting behavior means.

## The problem is the problem

The talk ended with a more philosophical claim: as AI becomes better at solving well-defined tasks, the value of science does not disappear. It moves upstream. The hardest work is often defining what the problem is.

Science expands knowledge in two ways. Sometimes it fills in potential knowledge within an existing framework: a theory predicts something, an experiment tests it, and the known world grows. At other times, science changes the framework itself. It creates new measurements, new representations, and new ways of making a previously inaccessible question researchable.

![Scientific revolution as a reframing of what can be measured and tested]({{ "/images/blog/ncku-ai-vision-seminar/slide-60-expanding-knowledge-boundary.png" | relative_url }})

AI is already powerful in the first route. It can search, optimize, approximate, and simulate at enormous scale. But the second route remains deeply human: deciding what counts as a phenomenon, what should be measured, what is missing from our current language, and what kind of question would make the invisible visible.

That is why I think psychological theory remains essential in the age of AI. It does not merely compete with models for predictive accuracy. It defines the level at which a phenomenon becomes intelligible.

Thank you again to Liang-Sheng for the invitation, and to the faculty and students at NCKU Psychology for the warm discussion. Returning to NCKU reminded me that scientific training is not only about learning methods. It is also about learning how to ask questions that remain worth asking even when technology changes.
