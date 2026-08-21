---
layout: project
title: 排他的サイバー攻撃のLLMエージェント・シミュレーション
lang: ja
translation_key: llm-agent-cyber-aggression
subtitle: モデレーター行動、集団のダークトライアド構成、排除ダイナミクスのモデル化
image: /images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp
permalink: /ja/research/llm-agent-cyber-aggression/
tags:
  - サイバー攻撃
  - LLMエージェント
  - 計算社会科学
  - パーソナリティ・モデリング
  - QLoRA
---

# 排他的サイバー攻撃のLLMエージェント・シミュレーション

本共同研究は、モデレーターの行動と、ダークトライアド傾向が比較的高い成員の割合が、模擬オンライン集団における排他的サイバー攻撃をどのように形成するかを検討します。まず大規模言語モデル（LLM）エージェントによる統制された in-silico 実験を行い、その後、小規模な人間データとの比較を計画します。

## 研究デザイン

- 5段階のモデレーター行動と5段階の集団構成を交差させる。
- 固定されたオンライン討論場面でエージェント集団を相互作用させ、排除投票を行わせる。
- モデレーター効果、集団構成効果、その交互作用、および有害なオンライン脱抑制の媒介可能性を比較する。

## AI参加者モデリング

AI参加者モデルでは、同一の事前学習済み言語モデルを凍結し、`Q_High` と `Q_Low` の2つのQLoRA端点アダプターのみを学習します。各模擬参加者には0から1の連続特性スコアを与え、その値に応じて両端点のLikert反応確率分布を混合します。検証には、参加者単位の交差検証、複数のランダムシード、構成概念妥当性・基準関連妥当性の確認、およびモデル間比較を用います。

## 研究の位置づけ

本シミュレーションは、再現可能な仮説検証と方法開発の環境として位置づけます。出力を人間行動の直接的証拠とはみなさず、今後の人間参加者研究による検証を必要とします。

**共同研究者：** [王承諺（Cheng-Yen Wang）](https://resume.thu.edu.tw/portfolio/main/if266/B00)、東海大学；陳彥儒、PRIME Lab。

![模擬エージェントのネットワークと排除された参加者を示す抽象図]({{ "/images/Research_Intro_image/llm-agent-cyber-aggression/network-agents.webp" | relative_url }})
