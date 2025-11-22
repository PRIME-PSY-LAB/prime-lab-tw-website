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

{%- comment -%}
  Search box for projects
{%- endcomment -%}
{% include search-box.html %}

{%- comment -%}
  Tag filter built from _data/projects.yaml
  - collect all tags
  - unique + sort
  - render as clickable tag chips
  - clicking = search for "tag: xxx"
  - make sure "granted" and "ungranted" appear first
{%- endcomment -%}

{% assign all_proj_tags = "" | split: "" %}
{% for p in site.data.projects %}
  {% if p.tags %}
    {% assign all_proj_tags = all_proj_tags | concat: p.tags %}
  {% endif %}
{% endfor %}
{% assign uniq_proj_tags = all_proj_tags | uniq | sort %}

{% if uniq_proj_tags.size > 0 %}
<div class="project-tag-filter">
  {# --- granted / ungranted first --- #}
  {% for tag in uniq_proj_tags %}
    {% if tag == "granted" or tag == "ungranted" %}
      {% assign clean = tag | strip %}
      {% assign query = '"tag: ' | append: clean | append: '"' %}
      {% assign encoded = query | uri_escape %}
      <a
        class="tag project-tag-chip project-tag-chip--status"
        href="{{ page.url | relative_url }}?search={{ encoded }}"
      >
        {{ clean }}
      </a>
    {% endif %}
  {% endfor %}

  {# --- the rest of tags --- #}
  {% for tag in uniq_proj_tags %}
    {% unless tag == "granted" or tag == "ungranted" %}
      {% assign clean = tag | strip %}
      {% assign query = '"tag: ' | append: clean | append: '"' %}
      {% assign encoded = query | uri_escape %}
      <a
        class="tag project-tag-chip"
        href="{{ page.url | relative_url }}?search={{ encoded }}"
      >
        {{ clean }}
      </a>
    {% endunless %}
  {% endfor %}
</div>
{% endif %}

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
      style="small"
    %}
  </div>
  </section>
</details>

{% include section.html %}

## Research environment

<div class="project-grid project-grid--environment">
  {%- comment -%}
    This card links to a dedicated environment / equipment page
    (see _research_intro/environment.md below).
  {%- endcomment -%}
  {% include card.html
    title="Lab space & equipment"
    subtitle="Visual psychophysics facilities, displays and computing"
    description="Overview of our experimental rooms, calibrated displays, stimulus control computers, and GPU workstations used for modeling and large-scale simulations."
    link="/research/environment/"
    tags="environment, equipment, facilities"
  %}
</div>
