---
title: 多階層人類視覺運動處理的機器學習模型
lang: zh
translation_key: motion-model
layout: project
permalink: /zh/research/motion-model/
image: /images/Research_Intro_image/motion-model/Mario_model.gif
tags:
  - 運動知覺
  - 深度學習
  - 計算建模
  - 一階運動
  - 二階運動
---

# 多階層人類視覺運動處理的機器學習模型

本計畫發展一個受生物視覺啟發的運動知覺模型，能同時處理**一階運動**（以亮度為基礎）與**高階**特徵運動，並將模型行為與人類在自然場景中的視覺表現進行比較。

核心想法是結合**可訓練的 motion-energy sensing** 與**圖結構 recurrent integration network**，並檢驗模型在何種訓練環境下，會自然獲得接近人類的二階運動敏感性；特別是面對由非 Lambertian 材質構成的物體，例如具光澤、透明或金屬表面的物體。

---

## 概觀

電腦視覺中的古典 optical-flow 模型在標準 benchmark 上可以達到甚至超越人類的準確度，但這些模型通常仰賴**亮度守恆定律**，因此無法充分捕捉由高階特徵所承載的運動，例如對比包絡或動態紋理。

然而，心理物理與神經生理研究顯示，生物視覺系統對一階與二階運動具有**分離但彼此互動的處理路徑**。

在本計畫中，我們：

- 建立一個模擬 **V1 → MT** 運動處理階層的兩階段、雙路徑運動模型。
- 使用**自然影片**訓練模型估計物體運動。
- 操弄移動物體的**材質屬性**，測試二階運動機制是否有助於在**光學擾動**下進行穩健的運動估計。
- 將模型反應與**人類心理物理資料**以及傳統電腦視覺模型進行比較。

---

## 模型與方法

### 第一階段：可訓練的 motion-energy sensing

- 在深度學習框架中實作 256 個 motion-energy units，包含 **Gabor 空間濾波器**與時間濾波器。
- 這些單元的參數（偏好速度、方向、空間頻率等）皆可訓練，因此能從自然影片中學習有效率的運動編碼。
- 此階段模擬 **V1-like 局部運動偵測器**，並能重現古典發現，例如 component-selective 與 pattern-selective cells，以及對運動錯覺（reverse phi、missing fundamental 等）的反應。

### 第二階段：圖結構 recurrent integration

- 將局部 motion energies 視為**完全連接運動圖**中的節點。
- 以 **self-attention mechanism** 定義節點之間的自適應連結；透過 recurrent updates 將局部運動整合成一致的全域運動場。
- 此階段模擬 **MT-like integration**，能解決 aperture problem，並可在不額外訓練的情況下，透過圖分割支援**基於運動的 instance segmentation**。

### 高階運動的雙路徑設計

- 在 motion-energy stage 之前加入第二條 sensing pathway：一組 **3D CNN layers** 進行非線性前處理，用來抽取高階時空特徵（動態紋理、閃爍等）。
- 此結構受到二階運動處理中 **filter–rectify–filter** 架構的啟發。
- 兩條路徑皆以 end-to-end 方式訓練，以從影片中估計物體運動。

### 訓練資料與材質操弄

- 以自然運動資料集作為 baseline。
- 為了檢驗二階機制的角色，研究者建立兩種版本的運動資料集：
  - **Lambertian** 物體：表面為霧面材質。
  - **Non-Lambertian** 物體：具有光澤、透明或金屬材質，會誘發強烈光學擾動。
- 透過分別訓練雙路徑模型，研究測試**材質統計特性**如何驅動二階運動敏感性的產生。

---

## 主要發現

### 與人類一致的運動編碼

- 第一階段與第二階段的單元會自然分化出 **component** 與 **pattern** motion-selective populations，對應 V1 與 MT 的神經紀錄。
- 模型能重現多種**心理物理現象**，包括全域運動整合與依賴脈絡的 pooling，而且參數範圍與人類資料相當接近。

### 穩健的運動估計與分割

- 在 **MPI-Sintel** 與 **KITTI** 等 benchmark 上，模型能達到具競爭力的 optical-flow 估計，同時比標準電腦視覺模型更接近人類的知覺錯誤型態。
- 第二階段的圖表示可支援**不需額外訓練的基於運動分割**：只要對運動圖進行簡單二分，就能得到近似 instance-level 的移動物體分割。

### 二階運動知覺的獲得

- 當模型只在標準運動資料集上訓練時，模型無法知覺二階運動，這與目前許多電腦視覺模型的限制相符。
- 當模型訓練於包含**非 Lambertian 材質**與光學擾動的資料集時，雙路徑模型會：
  - 自發發展出與人類觀察者相當的**二階運動敏感性**。
  - 使用高階訊號在一階 optical flow 受到干擾時，**穩定物體運動估計**。
- 這些結果支持一個假設：生物視覺中的二階運動機制，可能是為了在複雜材質造成的光學變化下，仍能**穩健追蹤物體運動**而演化出來。

---

## 圖示

![Dual-pathway motion perception model]({{ "/images/Research_Intro_image/motion-model/image.png" | relative_url }})
![Some fantastic model output]({{ "/images/Research_Intro_image/motion-model/modeldemo.gif" | relative_url }})

*圖。兩階段雙路徑運動模型概觀。第一階段實作可訓練的 motion-energy sensors，用於一階與高階運動；第二階段透過圖結構 recurrent network 整合局部運動，以推論物體運動並分割移動物體。*

## 相關出版

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., Li, Y., & Nishida, S.  
Machine learning modelling for multi-order human visual motion processing. Nature Machine Intelligence, 2025.  
DOI: 10.1038/s42256-025-01068-w

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.  
Modelling Human Visual Motion Processing with Trainable Motion Energy Sensing and a Self-attention Network. arXiv:2305.09156, 2023.  
DOI: 10.48550/arXiv.2305.09156

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.  
Modeling of Human Motion Perception Mechanism: A Simulation based on Deep Neural Network and Attention Transformer. Journal of Vision, 23(9), 4894, 2023.  
DOI: 10.1167/jov.23.9.4894

Sun, Z., **Chen, Y.-J.**, Yang, Y.-H., & Nishida, S.  
Acquisition of second-order motion perception by learning to recognize the motion of objects made by non-diffusive materials. Journal of Vision, 24(10), 374, 2024.  
DOI: 10.1167/jov.24.10.374
