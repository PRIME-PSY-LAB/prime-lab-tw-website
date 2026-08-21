---
layout: project
title: LLM Agent Simulation of Exclusionary Cyber Aggression
lang: en
translation_key: llm-agent-cyber-aggression
subtitle: Modeling moderator behavior, group dark-triad composition, and exclusion dynamics
image: /images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp
permalink: /research/llm-agent-cyber-aggression/
tags:
  - cyber aggression
  - LLM agents
  - computational social science
  - personality modeling
  - QLoRA
---

# LLM Agent Simulation of Exclusionary Cyber Aggression

This collaborative project examines how moderator behavior and the proportion of group members with higher dark-triad tendencies may jointly shape exclusionary cyber aggression in simulated online groups. It uses large language model (LLM) agents to run a controlled in-silico experiment before later comparison with small-scale human data.

## Research Design

- Cross five levels of moderator behavior with five levels of group dark-triad composition.
- Have groups of agents reenact a fixed online-discussion scenario and make exclusion votes.
- Compare moderator effects, group-composition effects, their interaction, and the possible mediating role of toxic online disinhibition.

## AI Participant Modeling

The AI participant model keeps one pretrained language model frozen and learns two QLoRA endpoint adapters, `Q_High` and `Q_Low`. Each simulated participant receives a continuous trait score from 0 to 1; this score mixes the two endpoint Likert-response distributions instead of assigning the participant to a fixed high or low group. Evaluation uses subject-wise cross-validation, multiple random seeds, construct and criterion validity checks, and cross-model comparisons.

## Scope

The simulation is intended as a reproducible hypothesis-testing and method-development environment. Its outputs are not treated as direct evidence of human behavior and will require follow-up validation with human participants.

**Collaborators:** [Cheng-Yen Wang](https://resume.thu.edu.tw/portfolio/main/if266/B00), Tunghai University; Yen-Ju Chen, PRIME Lab.

![Abstract network of simulated agents and an excluded participant]({{ "/images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp" | relative_url }})
