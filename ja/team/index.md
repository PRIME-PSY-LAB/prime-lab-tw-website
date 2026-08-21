---
title: メンバー
lang: ja
translation_key: team
permalink: /ja/team/
nav:
  order: 3
  tooltip: 研究室メンバー
---

# {% include icon.html icon="fa-solid fa-users" %} メンバー

{% include section.html %}

## 主任研究者
{% include list.html data="members" component="portrait" filter="role == 'pi' and lang == 'ja'" %}

## ポストドクトラル研究員
{% include list.html data="members" component="portrait" filter="role == 'pd' and lang == 'ja'" %}

## 博士課程学生
{% include list.html data="members" component="portrait" filter="role == 'phd' and lang == 'ja'" %}

## 修士課程学生
{% include list.html data="members" component="portrait" filter="role == 'ms' and lang == 'ja'" %}

## 学部生
{% include list.html data="members" component="portrait" filter="role == 'bs' and lang == 'ja'" %}

## 卒業生
<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">›</span>
    <span class="collapse-label">詳細を表示</span>
  </summary>

  {% include list.html data="members" component="portrait" filter="role == 'al' and lang == 'ja'" %}
</details>

## 共同研究者
{% include collaborator-section.html lang="ja" %}
