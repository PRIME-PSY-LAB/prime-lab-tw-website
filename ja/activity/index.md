---
title: 活動
lang: ja
translation_key: activity
permalink: /ja/activity/
nav:
  order: 5
  tooltip: 研究、教育、研究室アルバム
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %} 活動

<div class="activity-page-grid">

  {% include activity_album.html
      data=site.data.activity.research
      title="研究と教育"
      id="research-album"
  %}

  {% include activity_album.html
      data=site.data.activity.life
      title="生活と活動"
      id="life-album"
  %}

</div>
