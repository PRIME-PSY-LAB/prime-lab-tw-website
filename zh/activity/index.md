---
title: 活動
lang: zh
translation_key: activity
permalink: /zh/activity/
nav:
  order: 5
  tooltip: 研究、教學與實驗室相簿
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %} 活動

<div class="activity-page-grid">

  {% include activity_album.html
      data=site.data.activity.research
      title="研究與教學"
      id="research-album"
  %}

  {% include activity_album.html
      data=site.data.activity.life
      title="生活與活動"
      id="life-album"
  %}

</div>
