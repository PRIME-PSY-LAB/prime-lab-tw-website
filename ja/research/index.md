---
title: 研究
lang: ja
translation_key: research
permalink: /ja/research/
nav:
  order: 1
  tooltip: 研究方向、プロジェクト、研究環境
---

# {% include icon.html icon="fa-solid fa-wrench" %} 研究

PRIME Lab は、人間の視覚知覚と時間処理を研究しています。特に、運動知覚、知覚的組織化、そして人間視覚を説明する image-computable / deep-learning models に関心があります。

私たちは、連続追跡課題、分割課題、運動知覚課題などの心理物理実験と計算モデリングを組み合わせます。実験は統制された視覚環境で行い、大規模シミュレーションやモデル学習には高性能計算環境を使用します。

{% include section.html %}

## プロジェクトを探す

{% include search-box.html %}

{% include search-info.html %}

{% include section.html %}

## 進行中のプロジェクト

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects_ja"
    filter="group == 'Current'"
  %}
</div>

{% include section.html %}

## 共同研究プロジェクト

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects_ja"
    filter="group == 'Collaborative'"
  %}
</div>

{% include section.html %}

## 過去のプロジェクト

<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">›</span>
    <span class="collapse-label">過去のプロジェクトを表示</span>
  </summary>

  <section markdown="1">
  <div class="project-grid project-grid--past">
    {% include list.html
      component="card"
      data="projects_ja"
      filter="group == 'Past'"
    %}
  </div>
  </section>
</details>

{% include section.html %}

## 研究環境

{% include equipment-section.html lang="ja" %}
