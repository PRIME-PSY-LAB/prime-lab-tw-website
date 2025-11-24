---
title: Activity
nav:
  order: 5
  tooltip: lab research, activity gallery
permalink: /activity/
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %}Activity

<div class="activity-page-grid">

  {% include activity_album.html 
      data=site.data.activity.research 
      title="Research & Teaching"
      id="research-album" 
  %}

  {% include activity_album.html 
      data=site.data.activity.life 
      title="Life & Fun"
      id="life-album" 
  %}

</div>