---
title: 多階層人類視覺運動處理
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

# 多階層人類視覺運動處理

本計畫建立具有生物啟發特性的運動知覺模型，目標是同時處理**一階運動**（亮度訊號）與**高階運動**（例如對比、紋理或材質造成的運動線索），並比較模型與人類視覺在自然場景中的表現。

## 研究核心

人類視覺系統不只依賴局部影像強度變化，也會使用更抽象的特徵與結構來推估物體運動。本研究以可訓練的 motion-energy sensing、圖結構整合與深度學習模型，探討模型在何種訓練環境下會自然發展出接近人類的高階運動敏感性。

## 方法

- 建立模擬 V1-like 局部運動偵測的可訓練感受器。
- 使用 graph-based recurrent integration 模擬較高階的全域運動整合。
- 加入處理高階特徵的第二路徑，測試模型是否能處理非 Lambertian 材質造成的複雜運動訊號。
- 將模型表現與人類心理物理資料和傳統 computer vision models 比較。

## 意義

這條研究線連結人類視覺科學與機器視覺，目標不是只追求 benchmark accuracy，而是建立能說明人類運動知覺機制的計算模型。

![Dual-pathway motion perception model]({{ "/images/Research_Intro_image/motion-model/image.png" | relative_url }})
