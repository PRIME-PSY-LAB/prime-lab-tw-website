---
title: 視覺分割中的時間同步與結構
lang: zh
translation_key: temporal-async-seg
layout: project
permalink: /zh/research/temporal-async-seg/
image: /images/Research_Intro_image/temporal-async-seg/model_fit_plot.bmp
tags:
  - 運動知覺
  - 深度學習
  - 計算建模
  - 一階運動
  - 二階運動
---

# 視覺分割中的時間同步與結構

視覺系統如何利用**時間**來判斷哪些元素屬於同一個群組？在這條研究線中，我們結合**分割作業**、**common-fate motion displays**，以及**同步偵測 / 分組典範**，拆解兩個關鍵的時間線索：

- **時間同步**：元素是否在同一時間改變。
- **時間結構**：即使局部同步受到雜訊或 jitter 影響，整體隨時間變化的模式仍可能提供訊息。

這些計畫共同顯示，時間結構不只是「有雜訊的同步」，而是一個部分**獨立的線索**；在適當時間條件下，它甚至可以主導視覺分割。

---

## 三個緊密連結的研究

### 1. 具有結構支持的時間同步分割（Journal of Vision 2021）

第一階段使用 temporal segmentation task。動態顯示中的元素會隨時間改變，並控制其同步性 / 非同步性與時間結構。透過操弄時間同步是否**伴隨一致的結構線索**，或是否嵌入更不規則的模式中，我們發現當同步性受到時間結構支持時，對於隨時間分割紋理或區域會**顯著更有效**。

換言之，視覺系統並不把「同步」視為純粹局部、逐 frame 的訊號，而是會將它放在**更大的時間模式**中加以評估。

---

### 2. 廣義 common fate 與結構主導效果（Journal of Vision 2022）

第二個研究將問題延伸到**以運動為基礎的 common-fate display**。觀察者觀看 random-dot patterns，其中一部分 dots（signal dots）共享同一運動方向，其他 dots 則隨機移動。根據不同區域中運動方向改變的 temporal asynchrony，畫面可以被分組為**列 vs. 行**。

關鍵操弄是正交控制：

- 區域之間是否具有**相同時間結構**或**不同時間結構**，同時
- 保持區域之間的**局部 temporal asynchrony** 完全相同。

結果顯示：

- 視覺系統同時依賴**時間同步**與**時間結構**來完成知覺分組。
- 當**時間頻率增加**時，**時間結構變得更有效**，在廣義 common fate 中產生明確的**結構主導效果**。

這項研究將 Gestalt 傳統中的 common fate 連結到更一般化的**時間相似性結構**概念，其中**隨時間變化的相關模式**是分割的重要基礎。

---

### 3. 碩士論文：低時間頻率下的時間結構

碩士論文 *Temporal structure does not trump temporal synchrony in low temporal frequency: Implication and its potential interpretation* 直接檢驗時間結構究竟只是**同步不確定性的操弄**，還是本身就是一個**獨立的時間線索**。

研究中實作兩個關鍵操弄：

- **Fixed structure pair**：兩個閃爍圓盤（或 flicker elements lattice）共享**相同時間結構**。
- **Jitter structure pair**：局部時間同步量相同，但 lead/lag 方向不穩定，增加**同步時間的不確定性**。

跨越**同步偵測作業**與**基於時間訊息的分組作業**（4×4 flicker lattices），並比較**低時間頻率**與**高時間頻率**後，結果顯示：

- 儘管 jitter structure 條件具有較高時間不確定性，其表現**並未低於** fixed structure 條件。
- 在**較高時間頻率**（例如本研究約 8 Hz）下，**時間結構表現得像是一個獨立且更顯著的線索**，而不是同步性退化後的結果。

這些結果支持時間結構**可能無法被簡化為「同步 + 雜訊」**，且其貢獻具有**頻率依賴性**。

---

## 概念整合

三個研究共同形成以下圖像：

1. **同步是必要但不足的。**  
   當操弄高階時間模式時，局部時間同步本身無法完整解釋分割表現。

2. **時間結構是一個額外的全域線索。**  
   當同一區域內的時間結構一致、且不同區域之間可區分時，即使局部同步被配對控制，時間結構仍能支持**分割**與 **common-fate grouping**。

3. **結構與同步之間的平衡取決於時間頻率。**  
   在**低時間頻率**下，同步性仍是強而有時主導的線索；在**較高時間頻率**下，時間結構越來越能**勝過同步性**，成為動態場景中更有力的組織訊號。

整體而言，這些研究有助於修正**時間視覺與知覺分組**理論，釐清大腦何時讀取**瞬間 timing**，何時依賴跨時間視窗的**變化形狀**。

---

## 出版與論文

- **Chen, Y.-J., & Huang, P.-C. (2021).** Temporal synchrony accompany with structure cue is more effective in the segmentation task. *Journal of Vision, 21*(9), 2137.  
  DOI: 10.1167/jov.21.9.2137

- **Chen, Y.-J., & Huang, P.-C. (2022).** Generalized form of common fate: Evidence of structure dominance effect. *Journal of Vision, 22*(14), 3830.  
  DOI: 10.1167/jov.22.14.3830

- **Chen, Y.-J. (2022).** *Temporal structure does not trump temporal synchrony in low temporal frequency: Implication and its potential interpretation.* Master’s thesis, National Cheng Kung University, Department of Psychology.

