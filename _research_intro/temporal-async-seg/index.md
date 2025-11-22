---
title: Temporal synchrony and structure in visual segmentation
layout: project
permalink: /research/temporal-async-seg/
image: /images/Research_Intro_image/motion-model/Mario_model.gif
tags:
  - motion perception
  - deep learning
  - computational modeling
  - first-order motion
  - second-order motion
---

# Temporal synchrony and structure in visual segmentation

How does the visual system use **time** to decide which elements belong together?  
In this research line, we combine **segmentation tasks**, **common-fate motion displays**, and a **synchrony detection / grouping paradigm** to dissect two key temporal cues:

- **Temporal synchrony** – whether elements change at the same time.
- **Temporal structure** – the overall pattern of change over time, even when local synchrony is noisy or jittered.

Together, these projects show that temporal structure is **not just “noisy synchrony”**, but a partly **independent cue** that can dominate segmentation under suitable temporal conditions.【:contentReference[oaicite:0]{index=0}】

---

## Three tightly linked studies

### 1. Segmentation by temporal synchrony with structural support (Journal of Vision 2021)

In the first stage, we used a temporal segmentation task with dynamic displays whose elements changed over time with controlled (a)synchrony and structure. By manipulating whether temporal synchrony was **accompanied by a consistent structure cue** or embedded in more irregular patterns, we showed that **synchrony is markedly more effective when supported by temporal structure** in segmenting textures or regions over time.【:contentReference[oaicite:1]{index=1}】

In other words, the visual system does not treat “synchrony” as a purely local, frame-by-frame signal. Instead, it is evaluated against the **larger temporal pattern** in which it is embedded.

---

### 2. Generalized common fate and structure dominance (Journal of Vision 2022)

The second study extended the question to a **motion-based common-fate display**.  
Observers viewed random-dot patterns where a subset of dots (signal dots) shared a motion direction, while others moved randomly. The display could be grouped into **rows vs. columns** based on temporal asynchrony in the direction changes across regions.

Crucially, we orthogonally manipulated:

- Whether regions shared the **same temporal structure** vs. **different structures**, while  
- Keeping the **local temporal asynchrony** between regions identical.

Results showed that:

- The visual system relies on **both** temporal synchrony and temporal structure to achieve perceptual grouping.
- As **temporal frequency increases**, **temporal structure becomes more effective**, producing a clear **structure-dominance effect** in generalized common fate.【:contentReference[oaicite:2]{index=2}】

This work links the classic Gestalt idea of common fate to a more general notion of **temporal similarity structures**, where the **pattern of correlation over time** is a primary basis for segmentation.

---

### 3. Master’s thesis: temporal structure at low temporal frequencies

Your master’s thesis, *Temporal structure does not trump temporal synchrony in low temporal frequency: Implication and its potential interpretation*, directly addressed whether temporal structure is merely an **uncertainty manipulation on synchrony**, or an **independent temporal cue** in its own right.【:contentReference[oaicite:3]{index=3}】

Two key manipulations were implemented:

- **Fixed structure pair** – two flickering discs (or a lattice of flicker elements) sharing the **same temporal structure**.
- **Jitter structure pair** – same amount of local temporal synchrony, but with **unstable lead/lag directions**, increasing **uncertainty in synchrony timing**.

Across a **synchrony detection task** and a **temporal-information-based grouping task** (with 4×4 flicker lattices), and across **low vs. high temporal frequencies**, you found that:

- Performance in the **jitter structure** condition, despite higher temporal uncertainty, **did not fall below** the fixed structure condition.
- At **higher temporal frequencies** (e.g., around 8 Hz in this work), **temporal structure behaved like an independent, more salient cue**, rather than a mere degradation of synchrony.【:contentReference[oaicite:4]{index=4}】

These results argue that temporal structure is **probably not reducible** to “synchrony plus noise,” and that its contribution is **frequency-dependent**.

---

## Conceptual integration

Across the three pieces of work, a coherent picture emerges:

1. **Synchrony is necessary but not sufficient.**  
   Local temporal synchrony alone cannot fully explain segmentation performance when higher-order temporal patterns are manipulated.【:contentReference[oaicite:5]{index=5}】

2. **Temporal structure is an additional, global cue.**  
   When temporal structure is consistent within a region and distinct across regions, it supports both **segmentation** and **common-fate grouping**, even when local synchrony is matched.【:contentReference[oaicite:6]{index=6}】

3. **The balance between structure and synchrony depends on temporal frequency.**  
   At **low temporal frequencies**, synchrony remains a strong and sometimes dominant cue. At **higher temporal frequencies**, temporal structure increasingly **“trumps” synchrony**, acting as a more powerful organizing signal for dynamic scenes.【:contentReference[oaicite:7]{index=7}】

Together, these studies help refine theories of **temporal vision and perceptual grouping**, clarifying when the brain reads out **instantaneous timing** and when it relies on the **shape of temporal change** over extended windows.

---

## Publications and thesis

- **Chen, Y.-J., & Huang, P.-C. (2021).** Temporal synchrony accompany with structure cue is more effective in the segmentation task. *Journal of Vision, 21*(9), 2137.  
  DOI: 10.1167/jov.21.9.2137

- **Chen, Y.-J., & Huang, P.-C. (2022).** Generalized form of common fate: Evidence of structure dominance effect. *Journal of Vision, 22*(14), 3830.  
  DOI: 10.1167/jov.22.14.3830【:contentReference[oaicite:8]{index=8}】

- **Chen, Y.-J. (2022).** *Temporal structure does not trump temporal synchrony in low temporal frequency: Implication and its potential interpretation.* Master’s thesis, National Cheng Kung University, Department of Psychology.【:contentReference[oaicite:9]{index=9}】

---

