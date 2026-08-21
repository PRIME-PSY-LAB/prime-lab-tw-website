---
layout: project
title: 排他性網路攻擊的大型語言模型代理人模擬
lang: zh
translation_key: llm-agent-cyber-aggression
subtitle: 模擬管理員行為、群體暗黑人格組成與排除動態
image: /images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp
permalink: /zh/research/llm-agent-cyber-aggression/
tags:
  - 網路攻擊
  - 大型語言模型代理人
  - 計算社會科學
  - 人格建模
  - QLoRA
---

# 排他性網路攻擊的大型語言模型代理人模擬

本合作計畫探討管理員行為與群體中較高暗黑人格傾向成員的比例，如何共同影響模擬線上群體中的排他性網路攻擊。研究先以大型語言模型（LLM）代理人建立可控制的矽基實驗環境，再規劃與小規模真人資料比較。

## 研究設計

- 交叉操弄五種管理員行為與五種群體暗黑人格組成。
- 讓代理人群體在固定的線上討論情境中互動並進行排除投票。
- 比較管理員效果、群體組成效果及其交互作用，並檢驗有毒線上去抑制的可能中介角色。

## AI 受試者建模

AI 受試者模型凍結同一個預訓練語言模型，僅學習 `Q_High` 與 `Q_Low` 兩組 QLoRA 端點。每位模擬受試者具有 0 至 1 的連續特質分數，用來混合兩端的 Likert 作答機率分布，而非被硬性分成高、低兩組。模型驗證包含受試者層級交叉驗證、多個隨機種子、建構與效標效度檢查，以及跨模型比較。

## 研究範圍

本模擬主要作為可重現的假設檢驗與方法開發環境；模擬輸出不會直接視為人類行為證據，仍須由後續真人研究驗證。

**合作成員：** [王承諺](https://resume.thu.edu.tw/portfolio/main/if266/B00)，東海大學；陳彥儒，PRIME Lab。

![模擬代理人網路與被排除成員的抽象示意圖]({{ "/images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp" | relative_url }})
