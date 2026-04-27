---
lang: en
translation_key: home
---

# About PRIME Lab

Our lab investigates **visual perception and temporal processing**, with a focus on:

- Perceptual psychology and visual science  
- Temporal organization and segmentation of visual information  
- Computational & mathematical modeling of perception  
- Deep learning / machine learning models of human vision  

We mainly use **behavioral experiments** combined with **computational modeling** and **machine-learning-based image-computable models** to understand how the brain tracks motion, structure, and objects over time.

You can explore our lab through:

- [Research topics]({{ "/research/" | relative_url }}) - overview of our main research themes and research environment.  
- [Publications]({{ "/publication/" | relative_url }}) - journal papers, conference papers, and preprints.  
- [Team]({{ "/team/" | relative_url }}) - information about our members and collaborators.  
- [Blog]({{ "/blog/" | relative_url }}) - records of our milestones and lab updates.  
- [Activities]({{ "/activity/" | relative_url }}) - news, talks, and image archives from academic or social events.  
- [Contact]({{ "/contact/" | relative_url }}) - how to visit, collaborate, or join the lab.  


{% include section.html %}


## Highlights

{%- comment -%}
  Files in _highlight_post/ act as markers. A marker with the same
  generated name as a file in _posts/ will feature that post here.
{%- endcomment -%}
{% assign highlight_markers = site.highlight_post | sort: "name" | reverse %}

{% if highlight_markers.size > 0 %}

<div class="highlight-grid">
  {%- for marker in highlight_markers -%}
    {%- comment -%}
      Example:
      _posts/2025-11-01-lab-update.md
      _highlight_post/2025-11-01-lab-update.md
      Both resolve to the same name and are linked here.
    {%- endcomment -%}
    {% assign post = site.posts | where: "name", marker.name | first %}
    {% assign post_lang = post.lang | default: "en" %}

    {%- if post and post_lang == "en" -%}
    <article class="highlight-card">

      <a href="{{ post.url | relative_url }}" class="highlight-image-link">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" class="highlight-image">
        {% else %}
          <div class="highlight-image placeholder"></div>
        {% endif %}
      </a>

      <div class="highlight-content">
        <h3 class="highlight-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>

        <div class="highlight-meta">
          <span>{{ post.author }}</span>
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
        </div>

        {% if post.tags %}
        <div class="highlight-tags">
          {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>

    </article>
    {%- endif -%}
  {%- endfor -%}
</div>

{% else %}
_Once you add matching files to `_highlight_post/`, the corresponding posts will appear here as featured._
{% endif %}





{% include section.html %}

## News

Latest updates from our lab.

{% comment %}
  Show all posts in reverse chronological order.
{% endcomment %}

{% assign news_posts = site.posts | data_filter: "lang == 'en'" | sort: "date" | reverse %}

<div class="news-list-container">
  <ul class="news-list">
    {% for post in news_posts %}
    <li class="news-item">
      <a href="{{ post.url | relative_url }}" class="news-main">
        <span class="news-title">{{ post.title }}</span>
      </a>
      <div class="news-meta">
        <span class="news-author">
          {{ post.author | default: site.title }}
        </span>
        <span class="news-date">
          {{ post.date | date: "%Y-%m-%d" }}
        </span>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>
