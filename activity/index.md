---
title: Activity
nav:
  order: 5
  tooltip: lab research, activity gallery
permalink: /activity/
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %}Activity

<style>
    /* 預設隱藏所有輪播項目 */
    .carousel-item {
        display: none;
        transition: transform 0.6s ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    
    /* 只有擁有 active 標記的項目才顯示 */
    .carousel-item.active {
        display: block;
    }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>


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


<script>
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': "Image %1 of %2",
      'fadeDuration': 300
    })

    // 確保文件載入完成後啟動輪播
    $(document).ready(function(){
        $('.carousel').carousel();
    });
</script>