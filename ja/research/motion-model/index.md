---
title: 多階層の人間視覚運動処理の機械学習モデル
lang: ja
translation_key: motion-model
layout: project
permalink: /ja/research/motion-model/
image: /images/Research_Intro_image/motion-model/Mario_model.gif
tags:
  - 運動知覚
  - 深層学習
  - 計算モデリング
  - 一次運動
  - 二次運動
---

# 多階層の人間視覚運動処理の機械学習モデル

このプロジェクトでは、生物視覚に着想を得た運動知覚モデルを開発します。モデルは**一次運動**（輝度に基づく運動）と**高次特徴運動**の両方を処理し、自然場面における人間視覚と比較されます。

中心的な考えは、**学習可能な motion-energy sensing** と **グラフベースの recurrent integration network** を組み合わせることです。さらに、光沢、透明、金属のような非 Lambertian 材質を持つ物体に対して、どのような訓練環境でモデルが人間に似た二次運動感度を獲得するかを検討します。

---

## 概要

古典的な optical-flow モデルは標準ベンチマークで高い精度を示しますが、多くは**輝度保存則**に依存しているため、コントラスト包絡や動的テクスチャなどの高次特徴によって運ばれる運動を十分に扱えません。

一方、心理物理学と神経生理学の研究は、生物視覚系が一次運動と二次運動に対して**分離しつつ相互作用する処理経路**を持つことを示しています。

このプロジェクトでは、次の点に取り組みます。

- **V1 → MT** の運動処理階層を模倣する二段階・二経路型モデルを構築する。
- **自然動画**でモデルを訓練し、物体運動を推定する。
- 物体の**材質属性**を操作し、光学的乱れの下で二次運動機構が頑健な運動推定に寄与するかを検証する。
- モデル反応を**人間の心理物理データ**および従来のコンピュータビジョンモデルと比較する。

---

## モデルと方法

### 第 1 段階：学習可能な motion-energy sensing

- Gabor 空間フィルタと時間フィルタを持つ 256 個の motion-energy units を深層学習フレームワークで実装する。
- 好みの速度、方向、空間周波数などのパラメータを訓練可能にし、自然動画から効率的な運動符号を学習する。
- この段階は **V1-like な局所運動検出器**を模倣し、component / pattern 選択性や reverse phi などの運動錯視への応答を再現できる。

### 第 2 段階：グラフベースの recurrent integration

- 局所 motion energies を**完全結合の運動グラフ**のノードとして扱う。
- **self-attention mechanism** によりノード間の適応的結合を定義し、recurrent updates によって局所運動を一貫した全体運動場へ統合する。
- この段階は **MT-like integration** を模倣し、aperture problem を解き、追加訓練なしに運動に基づく instance segmentation も支援する。

### 高次運動の二経路設計

- motion-energy stage の前に第二の sensing pathway を追加し、**3D CNN layers** で動的テクスチャやちらつきなどの高次時空間特徴を抽出する。
- この構造は二次運動処理の **filter-rectify-filter** フレームワークに着想を得ている。
- 二つの経路は動画から物体運動を推定するよう end-to-end で訓練される。

---

## 主な知見

### 人間に整合した運動符号化

- 第 1 段階と第 2 段階のユニットは、V1 と MT の記録に対応するような component / pattern motion-selective populations へ自然に分化する。
- モデルは全体運動統合や文脈依存的 pooling など、複数の心理物理現象を人間データに近いパラメータ範囲で再現する。

### 頑健な運動推定と分割

- **MPI-Sintel** や **KITTI** などのベンチマークで競争力のある optical-flow 推定を示しつつ、標準的な CV モデルよりも人間の知覚誤差と整合する。
- 第 2 段階のグラフ表現により、追加訓練なしで運動に基づく分割が可能になる。

### 二次運動知覚の獲得

- 標準的な運動データセットだけで訓練した場合、モデルは二次運動を知覚できない。
- 非 Lambertian 材質と光学的乱れを含むデータセットで訓練すると、二経路モデルは人間に近い二次運動感度を自発的に獲得し、高次信号を使って物体運動推定を安定化する。

---

## 図

![二経路型運動知覚モデル]({{ "/images/Research_Intro_image/motion-model/image.png" | relative_url }})
![モデル出力例]({{ "/images/Research_Intro_image/motion-model/modeldemo.gif" | relative_url }})

*図。二段階・二経路型運動モデルの概要。第 1 段階は一次運動と高次運動のための学習可能な motion-energy sensors を実装し、第 2 段階はグラフベースの recurrent network で局所運動を統合する。*

## 関連発表

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
