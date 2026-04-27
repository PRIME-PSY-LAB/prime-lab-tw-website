---
layout: project
title: 身心疾病共病網路
lang: zh
translation_key: comorbidity-network
permalink: /zh/research/comorbidity-network/
image: /images/Research_Intro_image/comorbidity-network/IMG1.png
tags:
  - 資料探勘
  - 疾病網路
  - 高齡化
---

# 身心疾病共病網路

理解疾病如何共同出現，可以揭示共享的生物機制、生活型態風險與醫療路徑。本計畫檢驗**人口層級的共病模式**，並導入 **Weighted Alternating Least Squares (WALS)** 方法，從大型健康紀錄資料中重建並分析疾病關係。

---

## 概觀

共病是指同一個人身上同時出現兩種或兩種以上疾病，這在身體與心理健康狀態中都相當普遍。與其將疾病視為孤立事件，本計畫建立一個**網路表示**：

- **節點** = 疾病
- **邊** = 統計上的共病強度
- **權重** = 修正後的共同發生風險

目標是**捕捉疾病互動中的隱藏結構**，並支援預測、預防與個人化健康管理策略。

### 研究目標

- 找出疾病如何群聚的系統性模式。
- 理解心理疾病與身體疾病之間的連結。
- 發展更穩健的方法來計算共同發生強度。
- 提供健康照護決策支援的分析架構。

---

## 方法

### 1. 資料來源

本研究使用國家規模的健康保險 / 醫療資料庫紀錄，包含：

- 診斷歷史
- 人口學資訊
- 疾病類別
- 疾病在時間上的共同發生頻率

### 2. 前處理

- 將 ICD codes 分組為臨床上有意義的疾病類別。
- 計算人口層級的共同診斷矩陣。
- 使用頻率門檻降低雜訊。
- 進行標準化，以降低高盛行率疾病造成的偏誤。

### 3. WALS（Weighted Alternating Least Squares）

本研究的主要方法創新是 **WALS algorithm**，其設計目標是：

- 分解共病矩陣。
- 降低稀疏共同發生造成的隨機雜訊。
- 學習低維度 embedding 以表示疾病關係。
- 重建一個**去雜訊且穩定**的共病網路。

相較於直接使用原始矩陣統計，這個方法更能凸顯**可靠**的相關結構。

---

## 結果

主要發現包含：

### ● 疾病群聚具有清楚結構

心理疾病會與某些慢性身體疾病形成強連結，包括代謝、心血管與發炎相關疾病，暗示可能存在共享機制或生活型態因素。

### ● WALS 揭示隱藏結構

WALS 能強化較弱但有意義的相關，同時抑制偶然共同發生所造成的雜訊。

### ● 潛在臨床應用

- 辨識高風險共病路徑。
- 支援早期診斷與整合照護。
- 理解共享病因機制。

---

## 圖示

![Comorbidity network figure]({{ "/images/Research_Intro_image/comorbidity-network/IMG1.png" | relative_url }})

*圖。（a）研究流程（資料 → 矩陣 → embedding → 網路）。（b）概念性的共病網路。（c）簡化的 WALS 處理流程。*

---

## 相關出版

- **Wang, S.-T., Chen, Y.-J., Xu, Y.-D., Ting, T.-T., & Chan, T.-C. (2019).**  
  *Application of Weighted Alternating Least Squares on Constructing the Disease Networks in the Heterogeneous Process of Aging.*  
  IEEE Mobile Data Management (MDM).  
  DOI: [10.1109/MDM.2019.00112](https://doi.org/10.1109/MDM.2019.00112)
