---
title: 團隊
lang: zh
translation_key: team
permalink: /zh/team/
nav:
  order: 3
  tooltip: 實驗室成員
---

# {% include icon.html icon="fa-solid fa-users" %} 團隊

{% include section.html %}

## 主持人
{% include list.html data="members" component="portrait" filter="role == 'pi' and lang == 'zh'" %}

## 博士後研究員
{% include list.html data="members" component="portrait" filter="role == 'pd' and lang == 'zh'" %}

## 博士班學生
{% include list.html data="members" component="portrait" filter="role == 'phd' and lang == 'zh'" %}

## 碩士班學生
{% include list.html data="members" component="portrait" filter="role == 'ms' and lang == 'zh'" %}

## 大學部學生
{% include list.html data="members" component="portrait" filter="role == 'bs' and lang == 'zh'" %}

## 校友
<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">›</span>
    <span class="collapse-label">點擊查看</span>
  </summary>

  {% include list.html data="members" component="portrait" filter="role == 'al' and lang == 'zh'" %}
</details>

## 合作夥伴
{% include collaborator-section.html lang="zh" %}
