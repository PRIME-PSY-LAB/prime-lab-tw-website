---
title: Activity
nav:
  order: 5
  tooltip: lab research, activity gallery
permalink: /activity/
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %}Activity

<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet" />

<div class="row">
  
  <div class="col-md-6 mb-4">
    <h3 class="text-center mb-3">Research & Teaching</h3>
    {% include album_carousel.html album_id="research" interval="4000" %}
  </div>

  <div class="col-md-6 mb-4">
    <h3 class="text-center mb-3">Lab Life</h3>
    {% include album_carousel.html album_id="life" interval="5000" %}
  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
<script>
    lightbox.option({ 'resizeDuration': 200, 'wrapAround': true })
</script>