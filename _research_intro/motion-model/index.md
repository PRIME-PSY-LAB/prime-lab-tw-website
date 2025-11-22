---
title: Machine learning modelling for multi-order human visual motion processing
layout: project
permalink: /research/motion-model/
image: /images/Research_Intro_image/motion-model/Mario_model.gif
tags:
  - motion perception
  - deep learning
  - computational modeling
  - first-order motion
  - second-order motion
---

# Machine learning modelling for multi-order human visual motion processing

This project develops a biologically inspired motion perception model that
can process both **first-order** (luminance-based) and **higher-order**
feature motion, and compares its behavior with human vision in natural
scenes.

The core idea is to combine **trainable motion-energy sensing** with a
**graph-based recurrent integration network**, and to ask under what
training environments the model naturally acquires human-like sensitivity
to second-order motion—especially for objects made of non-Lambertian
materials such as glossy, transparent, or metallic surfaces.

---

## Overview

Classical optical-flow models in computer vision can reach or even exceed
human accuracy on standard benchmarks, but they typically rely on the
**intensity conservation law**, and therefore fail to capture motions that
are carried by higher-order features (e.g., contrast envelopes, dynamic
textures).  

Psychophysical and neurophysiological studies, however, show that the
biological visual system has **separate, yet interacting pathways** for
first- and second-order motion.

In this project we:

- Build a two-stage, dual-pathway motion model that mimics the **V1 → MT**
  motion-processing hierarchy.
- Train the model on **naturalistic videos** to estimate object motion.
- Manipulate the **material properties** of moving objects to test the
  hypothesis that second-order motion mechanisms are useful for
  **robust motion estimation under optical turbulence**.
- Compare model responses with **human psychophysics** and with
  conventional computer-vision models.

---

## Model and methods

### Stage I – Trainable motion energy sensing

- 256 motion-energy units with **Gabor spatial filters** and temporal
  filters are implemented in a deep-learning framework.
- The parameters (preferred speed, direction, spatial frequency, etc.)
  are **trainable**, so the units learn an efficient motion code from
  natural videos.
- This stage mimics **V1-like local motion detectors** and can reproduce
  classical findings such as component- vs. pattern-selective cells and
  responses to motion illusions (reverse phi, missing fundamental, etc.).

### Stage II – Graph-based recurrent integration

- Local motion energies are treated as nodes in a **fully connected
  motion graph**.
- A **self-attention mechanism** defines adaptive connectivity between
  nodes; recurrent updates integrate local motions into a coherent
  global motion field.
- This stage mimics **MT-like integration**, solves aperture problems, and
  also supports **motion-based instance segmentation** via graph
  partitioning without extra training.

### Dual-pathway design for higher-order motion

- A second sensing pathway is added **before** the motion-energy stage:
  a stack of **3D CNN layers** performs nonlinear preprocessing to extract
  higher-order spatiotemporal features (dynamic textures, flicker, etc.).
- This structure is inspired by the **filter–rectify–filter** framework
  for second-order motion processing.
- Both pathways are trained end-to-end to estimate object motion from
  videos.

### Training data and material manipulation

- Naturalistic motion datasets are used as a baseline.
- To probe the role of second-order mechanisms, the authors create two
  versions of a motion dataset:
  - **Lambertian** objects with matte surfaces.
  - **Non-Lambertian** objects with glossy, transparent, or metallic
    materials that induce strong optical turbulence.
- By training the dual-pathway model on these datasets separately, the
  study tests how **material statistics** drive the emergence of
  second-order motion sensitivity.

---

## Key findings

### Human-aligned motion coding

- Stage I and Stage II units naturally separate into **component** and
  **pattern** motion-selective populations, paralleling V1 vs. MT
  recordings.
- The model reproduces a range of **psychophysical phenomena**, including
  global motion integration and context-dependent pooling, with parameter
  regimes that closely match human data.

### Robust motion estimation and segmentation

- On benchmarks such as **MPI-Sintel** and **KITTI**, the model achieves
  competitive optical-flow estimation while showing **stronger alignment
  with human perceptual errors** than standard CV models.
- The graph representation in Stage II enables **training-free
  motion-based segmentation**: simple graph bipartitioning on the motion
  graph yields instance-like segmentation of moving objects.

### Acquisition of second-order motion perception

- When trained only on standard motion datasets, the model fails to
  perceive second-order motion—mirroring current CV models.
- When trained on datasets containing **non-Lambertian materials** with
  optical turbulence, the dual-pathway model:
  - Spontaneously develops **second-order motion sensitivity** comparable
    to human observers.
  - Uses higher-order signals to **stabilize object motion estimation**
    in the presence of noisy first-order flow.
- These results support the hypothesis that second-order motion
  mechanisms in biological vision may have evolved to **robustly track
  object motion under complex material-dependent optics**.

---

## Figure


![Dual-pathway motion perception model]({{'/images/Research_Intro_image/motion-model/image.png'|relative_url}})
![Some fantastic model output]({{'/images/Research_Intro_image/motion-model/modeldemo.gif'|relative_url}})

*Figure. Overview of the two-stage dual-pathway motion model. Stage I
implements trainable motion-energy sensors for first- and higher-order
motions; Stage II integrates local motion via a graph-based recurrent
network to infer object motion and segment moving objects.*



## Related publications

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., Li, Y., & Nishida, S.
Machine learning modelling for multi-order human visual motion
processing. Nature Machine Intelligence, 2025.
DOI: 10.1038/s42256-025-01068-w

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.
Modelling Human Visual Motion Processing with Trainable Motion Energy
Sensing and a Self-attention Network. arXiv:2305.09156, 2023.
DOI: 10.48550/arXiv.2305.09156

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.
Modeling of Human Motion Perception Mechanism: A Simulation based on
Deep Neural Network and Attention Transformer. Journal of Vision,
23(9), 4894, 2023.
DOI: 10.1167/jov.23.9.4894

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.
Acquisition of second-order motion perception by learning to recognize
the motion of objects made by non-diffusive materials. Journal of
Vision, 24(10), 374, 2024.
DOI: 10.1167/jov.24.10.374