---
title: Activity
nav:
  order: 5
  tooltip: lab research, activity gallery
permalink: /activity/
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %}Activity

<style>
    .carousel-item { display: none; transition: transform 0.6s ease-in-out; }
    .carousel-item.active { display: block; }
</style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet" />

<div class="row">
  <div class="col-md-6 mb-4">
    <h3 class="text-center mb-3">Research & Teaching</h3>
    {% include album_carousel.html album_id="research" interval="4000" %}
  </div>
  {% include section.html %}
  <div class="col-md-6 mb-4">
    <h3 class="text-center mb-3">Lab Life</h3>
    {% include album_carousel.html album_id="life" interval="5000" %}
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>

<script>
    // 1. 設定 Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false
    })

    // 2. 強制重新啟動 Carousel (解決按鈕點擊無效的問題)
    $(document).ready(function(){
        $('.carousel').carousel();
        
        // 強制綁定點擊事件 (雙重保險)
        $('.carousel-control-prev').click(function(e){
            e.preventDefault();
            var targetId = $(this).attr('href');
            $(targetId).carousel('prev');
        });
        $('.carousel-control-next').click(function(e){
            e.preventDefault();
            var targetId = $(this).attr('href');
            $(targetId).carousel('next');
        });
    });
</script>