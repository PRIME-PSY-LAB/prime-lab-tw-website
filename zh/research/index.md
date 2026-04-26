---
title: 研究
lang: zh
translation_key: research
permalink: /zh/research/
nav:
  order: 1
  tooltip: 研究方向、計畫與實驗環境
---

# {% include icon.html icon="fa-solid fa-wrench" %} 研究

本實驗室研究人類視覺知覺與時間處理，特別關注運動知覺、知覺組織，以及能夠直接從影像輸入預測人類視覺表現的 image-computable / deep-learning models。

我們結合心理物理實驗（連續追蹤、分割作業、運動知覺作業）與計算模型。實驗會在受控視覺環境中進行，並搭配校正過的顯示設備、眼動與生理量測工具，以及高效能運算資源進行大規模模擬與模型訓練。

{% include section.html %}

## 探索研究計畫

{% include search-box.html %}

{% include search-info.html %}

{% include section.html %}

## 目前進行中的計畫

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects_zh"
    filter="group == 'Current'"
  %}
</div>

{% include section.html %}

## 合作計畫

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects_zh"
    filter="group == 'Collaborative'"
  %}
</div>

{% include section.html %}

## 過去計畫

<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">▶</span>
    <span class="collapse-label">點擊查看過去計畫</span>
  </summary>

  <section markdown="1">
  <div class="project-grid project-grid--past">
    {% include list.html
      component="card"
      data="projects_zh"
      filter="group == 'Past'"
    %}
  </div>
  </section>
</details>

{% include section.html %}

## 研究環境

{% include equipment-section.html lang="zh" %}
