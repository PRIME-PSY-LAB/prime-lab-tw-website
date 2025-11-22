---
title: Comorbidity Network of Physical and Mental Disorders
slug: comorbidity-network
image: /images/ResearchFigures/comorbidity-network.png
---

# Comorbidity Network of Physical & Mental Disorders
Understanding how diseases co-occur can reveal shared biological mechanisms, lifestyle risks, and healthcare pathways.  
This project examines *population-level comorbidity patterns* and introduces a **Weighted Alternating Least Squares (WALS)** method to reconstruct and analyze disease relations from large health-record datasets.

---

## Overview

Comorbidity — the co-occurrence of two or more diseases in the same individual — is widespread across physical and mental health conditions.  
Rather than treating diseases as isolated events, this project builds a **network representation** where:

- **nodes** = diseases  
- **edges** = statistical comorbidity strengths  
- **weights** = corrected risk of co-occurrence  

The goal is to *capture hidden structure* in disease interactions and support prediction, prevention, and personalized health-management strategies.

### Research aims
- Identify systematic patterns in how diseases cluster.
- Understand the linkage between mental and physical disorders.
- Develop a more robust method to compute co-occurrence strength.
- Provide a framework for healthcare decision support.

---

## Methods

### 1. Data source
The study uses national-scale health insurance / medical database records, containing:
- diagnosis histories  
- demographic information  
- disease categories  
- temporal co-occurrence frequencies  

### 2. Preprocessing
- ICD codes grouped into clinically meaningful disease categories  
- Co-diagnosis matrices computed across population  
- Noise reduction using frequency thresholds  
- Normalization to reduce bias from highly prevalent diseases  

### 3. WALS (Weighted Alternating Least Squares)

The key methodological innovation is the **WALS algorithm**, designed to:

- factorize the comorbidity matrix  
- reduce random noise from sparse co-occurrences  
- learn a low-dimensional embedding representing disease relations  
- reconstruct a *denoised, stable* comorbidity network  

This improves upon raw matrix statistics by emphasizing *reliable* correlations.

---

## Results

Key findings include:

### ● Distinct clusters of disorders  
Mental disorders form strong links with certain chronic physical conditions—including metabolic, cardiovascular, and inflammatory diseases—suggesting shared mechanisms or lifestyle factors.

### ● Hidden structure revealed by WALS  
WALS enhances weaker but meaningful correlations while suppressing noise from accidental co-occurrence.

### ● Potential clinical applications
- identifying high-risk comorbidity pathways  
- supporting early diagnosis and integrated care  
- understanding shared etiological mechanisms  

---

## Figure

![Comorbidity Illustration](_research_intro\Comorbidity-Network\IMG1.png)

*Figure. (a) Research workflow (data → matrix → embedding → network).  
(b) Conceptual comorbidity network.  
(c) Simplified WALS processing pipeline.*

---

## Related publications

- **Wang, S.-T., Chen, Y.-J., Xu, Y.-D., Ting, T.-T., & Chan, T.-C. (2019).**  
  *Application of Weighted Alternating Least Squares on Constructing the Disease Networks in the Heterogeneous Process of Aging.*  
  IEEE Mobile Data Management (MDM).  
  DOI: [10.1109/MDM.2019.00112](https://doi.org/10.1109/MDM.2019.00112)

---

