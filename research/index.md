---
title: Research
nav:
  order: 1
  tooltip: Research direction, projects, environment
---

# {% include icon.html icon="fa-solid fa-wrench" %} Research

Our lab studies human visual perception and temporal processing,  
with a particular focus on motion perception, perceptual organization,  
and image-computable / deep-learning models of human vision.  

We combine psychophysical experiments (continuous tracking, segmentation tasks,  
motion perception tasks) with computational modeling.  
Experiments are run in a controlled visual environment using calibrated displays  
and high-performance computing resources for large-scale simulations and training.

{% include section.html %}

## Explore our projects

{% include search-box.html %}

{% include search-info.html %}

{% include section.html %}

## Current projects

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects"
    filter="group == 'Current'" 
  %}
</div>

{% include section.html %}

## Collaborative projects

<div class="project-grid">
  {% include list.html
    component="card"
    data="projects"
    filter="group == 'Collaborative'"
  %}
</div>

{% include section.html %}

## Past projects

<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">▶</span>
    <span class="collapse-label">click to see past projects</span>
  </summary>

  <section markdown="1">
  <div class="project-grid project-grid--past">
    {% include list.html
      component="card"
      data="projects"
      filter="group == 'Past'"
    %}
  </div>
  </section>
</details>

{% include section.html %}

## Research environment

{% capture content %}
  {% include card.html
    title="CRS Display ++"
    subtitle="High quality research-oriented monitor"
    link = "https://www.crsltd.com/tools-for-vision-science/calibrated-displays/displaypp-uhd-lcd-monitor/"
    image = "images/EnviromentDemoImage/Display++.png"
  %}
  {% include card.html
    title="Tobii Pro Glasses 3"
    subtitle = "wearable goggles"
    link = "https://www.tobii.com/products/eye-trackers/wearables/tobii-pro-glasses-3"
    image = "images/EnviromentDemoImage/TobiiProGlass.webp"
  %}
{% endcapture %}

{% 
  include grid.html
  content = content
  style = "square"
%}

