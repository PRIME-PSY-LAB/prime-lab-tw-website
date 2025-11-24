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
    
    <div id="carouselResearch" class="carousel slide" data-ride="carousel" data-interval="4000">
      
      <div class="carousel-inner">
        {% for item in site.data.activities.research %}
        <div class="carousel-item {% if forloop.first %}active{% endif %}">
            <a href="{{ item.image | relative_url }}" data-lightbox="research-gallery" data-title="{{ item.caption }}">
                <img src="{{ item.image | relative_url }}" class="d-block w-100" alt="{{ item.title }}" style="height: 300px; object-fit: cover; border-radius: 5px;">
            </a>
            
            <div class="mt-2 text-center">
                <h5>{{ item.title }}</h5>
                <p class="small text-muted">{{ item.caption }}</p>
                {% if item.link %}
                <a href="{{ item.link | relative_url }}" class="btn btn-sm btn-outline-primary">Read More</a>
                {% endif %}
            </div>
        </div>
        {% endfor %}
      </div>

      <a class="carousel-control-prev" href="#carouselResearch" role="button" data-slide="prev" style="height: 300px;">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselResearch" role="button" data-slide="next" style="height: 300px;">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>


  <div class="col-md-6 mb-4">
    <h3 class="text-center mb-3">Lab Life</h3>
    
    <div id="carouselLife" class="carousel slide" data-ride="carousel" data-interval="5000">
      
      <div class="carousel-inner">
        {% for item in site.data.activities.life %}
        <div class="carousel-item {% if forloop.first %}active{% endif %}">
            <a href="{{ item.image | relative_url }}" data-lightbox="life-gallery" data-title="{{ item.caption }}">
                <img src="{{ item.image | relative_url }}" class="d-block w-100" alt="{{ item.title }}" style="height: 300px; object-fit: cover; border-radius: 5px;">
            </a>

            <div class="mt-2 text-center">
                <h5>{{ item.title }}</h5>
                <p class="small text-muted">{{ item.caption }}</p>
                {% if item.link %}
                <a href="{{ item.link | relative_url }}" class="btn btn-sm btn-outline-primary">Read More</a>
                {% endif %}
            </div>
        </div>
        {% endfor %}
      </div>

      <a class="carousel-control-prev" href="#carouselLife" role="button" data-slide="prev" style="height: 300px;">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselLife" role="button" data-slide="next" style="height: 300px;">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>

<script>
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': "Image %1 of %2"
    })
</script>