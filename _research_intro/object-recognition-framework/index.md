---
title: "From Perceptual Structure to Semantic Space: A Human-centered Computational Framework for Object Recognition"
lang: en
translation_key: object-recognition-framework
layout: project
permalink: /research/object-recognition-framework/
image: /images/blog/nstc-object-recognition/figure-1-framework.png
tags:
  - object recognition
  - perceptual organization
  - generative models
  - computational modeling
  - NSTC
---

# From Perceptual Structure to Semantic Space

Humans recognize objects rapidly in visual environments that are unstable, dynamic, and noisy. A friend can be recognized across the street, a key can be selected from a cluttered keychain, and a falling cup can be identified quickly enough to guide action. These everyday abilities appear effortless, but they require the visual system to transform continuously changing image signals into stable and meaningful object representations.

This NSTC project, **From Perceptual Structure to Semantic Space: A Human-centered Computational Framework for Object Recognition**, develops a computational account of object recognition that is constrained by human perceptual processes. The project does not treat classification accuracy as the only goal. Instead, it asks whether each computational step in a model can be linked to measurable human behavior.

![Human-centered object recognition framework]({{ "/images/blog/nstc-object-recognition/figure-1-framework.png" | relative_url }})

## Why a new framework is needed

Modern deep neural networks perform impressively in object classification and detection, but their computations still differ from human vision in several important ways. Many models emphasize static feature extraction. They often lack explicit mechanisms for integrating temporal information, decomposing images into meaningful parts, and organizing object knowledge into hierarchical conceptual structures. As a result, systematic gaps remain between model behavior and human behavior under dynamic viewing, noisy input, material variation, and generalization demands.

Human object recognition is not simply a flat comparison between an image and all possible category labels. The visual system first extracts local visual information, integrates signals across space and time, forms perceptual units, and then relates those units to stored knowledge about object shape and meaning. This project focuses on the later stages of that process: how relational visual representations are decomposed into structured components, how those components connect to conceptual space, and how object identity is selected under contextual constraints.

## Research line 1: Perceptual units from temporal structure

The first research line tests whether human vision uses temporal correlation structure to decompose visual input into meaningful components. Dynamic visual displays will be used to measure how observers respond to different temporal-correlation patterns. The central hypothesis is that temporal structure is not only a source of noise or uncertainty, but a computational cue that supports perceptual organization.

The project will use psychophysical paradigms, including visual adaptation, to test whether observers show selective sensitivity to specific temporal-correlation structures. If the visual system contains mechanisms tuned to such structures, adapting to one correlation pattern should selectively reduce sensitivity to similar patterns. This would provide behavioral evidence that temporal organization contributes directly to the formation of perceptual units used in object recognition.

## Research line 2: Measuring conceptual structure with generative models

The second research line develops a method for measuring object concepts and their relational structure. Traditional approaches such as multidimensional scaling infer representational structure from responses to a fixed image set. These methods are useful, but once the stimulus set is fixed, it becomes difficult to manipulate conceptual distance while controlling low-level image properties.

This project uses generative artificial intelligence as a tool for high-dimensional stimulus control. The goal is not to assume that generative models perfectly reproduce human conceptual space. Instead, their latent representations provide a controllable way to sample stimuli from targeted regions of image and concept space. This makes it possible to test how humans judge similarity, how concepts cluster, and whether object knowledge is organized hierarchically.

By combining generative sampling with behavioral measurement, the project aims to build a standardized framework for quantifying conceptual structure. This framework can then be used to compare human observers with computational models under matched stimulus conditions.

![Concept metamer framework for measuring object representations]({{ "/images/blog/nstc-object-recognition/figure-4-concept-metamer.png" | relative_url }})

## Research line 3: Structured matching during object recognition

The third research line tests whether object recognition relies on subset-based matching. In many everyday scenes, context constrains the set of likely objects. A kitchen, forest, living room, or seashore each narrows the candidate space before detailed identification occurs. Human recognition may therefore proceed by selecting a relevant conceptual subset and then matching visual evidence within that subset, rather than evaluating all categories in a flat and exhaustive way.

This hypothesis will be tested using controlled object detection and visual search tasks. If distractors drawn from the same conceptual subset interfere more strongly than distractors drawn from a different subset, this would suggest that human recognition is sensitive to the structure of conceptual space. Reaction time and accuracy patterns will provide behavioral constraints for model development.

## Research line 4: A human-aligned computational model

The final stage integrates findings from the behavioral studies into a computational model. The model will incorporate spatiotemporal component decomposition and subset-based matching within conceptual space. Its value will be evaluated not only by classification accuracy, but also by human-relevant metrics: sensitivity to temporal structure, robustness under structured noise, generalization across visual variation, and interference patterns across conceptual subsets.

This approach turns psychological theory into testable model constraints. It also provides a reusable benchmark for comparing future artificial vision systems with human perception.

![Generating dynamic training data with simulated eye movements]({{ "/images/blog/nstc-object-recognition/figure-6-training-data.png" | relative_url }})

## Expected contribution

Across three years, the project will combine psychophysics, generative stimulus control, and computational modeling to clarify the key computations behind dynamic human object recognition. The expected contribution is twofold. For vision science, the project will explain how stable and meaningful object representations emerge from changing visual input. For artificial intelligence, it will offer design principles for vision systems that integrate temporal information, represent structure explicitly, and generalize more robustly under realistic conditions.
