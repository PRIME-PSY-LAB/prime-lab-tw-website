---
title: Activity
nav:
  order: 5
  tooltip: lab research, activity gallery
permalink: /activity/
---

# {% include icon.html icon="fa-solid fa-soccer-ball" %}Activity

<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet" />

<style>
  /* 輪播容器 */
  .activity-carousel {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
  }

  /* 左右箭頭按鈕 */
  .activity-arrow {
    background: none;
    border: none;
    font-size: 3rem;
    color: #333; /* 黑色箭頭 */
    cursor: pointer;
    padding: 0 10px;
    z-index: 10;
    transition: color 0.2s;
    line-height: 1;
  }
  .activity-arrow:hover {
    color: #000;
    font-weight: bold;
  }

  /* 視窗 (Viewport) - 隱藏超出範圍的內容 */
  .activity-viewport {
    overflow: hidden;
    width: 100%;
    margin: 0 10px; /* 與箭頭保持距離 */
  }

  /* 軌道 (Track) - 用 Flexbox 橫向排列所有卡片 */
  .activity-track {
    display: flex;
    transition: transform 0.5s ease-in-out; /* 平滑移動效果 */
    width: 100%;
  }

  /* 卡片本體 */
  .activity-card {
    flex: 0 0 100%; /* 一次只顯示一張，寬度佔滿 100% */
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
  }

  /* 圖片設定 */
  .activity-image-wrapper {
    width: 100%;
    height: 300px; /* 固定高度 */
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: zoom-in;
  }
  .activity-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 確保圖片填滿且不變形 */
    display: block;
  }

  /* 文字區域 */
  .activity-content {
    text-align: center;
  }
  .activity-title {
    margin: 5px 0;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .activity-caption {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 5px;
  }
  .activity-link {
    font-size: 0.85rem;
    color: #007bff;
    text-decoration: none;
    border: 1px solid #007bff;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
  }
  .activity-link:hover {
    background: #007bff;
    color: white;
  }
</style>


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


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>

<script>
    // Lightbox 設定
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false
    });

    // === 自定義輪播功能邏輯 (取代 Bootstrap) ===
    document.addEventListener('DOMContentLoaded', function() {
        
        // 針對每一個 activity-carousel 進行初始化
        const carousels = document.querySelectorAll('.activity-carousel');

        carousels.forEach(carousel => {
            const track = carousel.querySelector('.activity-track');
            const items = carousel.querySelectorAll('.activity-card');
            const prevBtn = carousel.querySelector('.activity-prev');
            const nextBtn = carousel.querySelector('.activity-next');
            const intervalTime = parseInt(carousel.getAttribute('data-interval')) || 5000;
            
            let currentIndex = 0;
            const totalItems = items.length;
            let autoPlayTimer;

            // 移動函數
            function moveSlide(index) {
                // 邊界檢查：循環播放
                if (index < 0) {
                    currentIndex = totalItems - 1;
                } else if (index >= totalItems) {
                    currentIndex = 0;
                } else {
                    currentIndex = index;
                }
                
                // 使用 CSS transform 移動軌道
                const offset = currentIndex * -100;
                track.style.transform = `translateX(${offset}%)`;
            }

            // 按鈕事件
            nextBtn.addEventListener('click', () => {
                moveSlide(currentIndex + 1);
                resetTimer();
            });

            prevBtn.addEventListener('click', () => {
                moveSlide(currentIndex - 1);
                resetTimer();
            });

            // 自動輪播
            function startTimer() {
                autoPlayTimer = setInterval(() => {
                    moveSlide(currentIndex + 1);
                }, intervalTime);
            }

            function resetTimer() {
                clearInterval(autoPlayTimer);
                startTimer();
            }

            // 初始化
            if (totalItems > 0) {
                startTimer();
            }
        });
    });
</script>