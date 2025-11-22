---
---

# Quick about us

Our lab investigates **visual perception and temporal processing**, with a focus on:

- Perceptual psychology and visual science  
- Temporal organization and segmentation of visual information  
- Computational & mathematical modeling of perception  
- Deep learning / machine learning models of human vision  

We mainly use **behavioral experiments** combined with **computational modeling** and **machine-learning–based image-computable models** to understand how the brain tracks motion, structure, and objects over time.

You can explore our lab through:

- [Research topics]({{ "/research/" | relative_url }}) – overview of our main research themes and our research enviroment.  
- [Publications]({{ "/publication/" | relative_url }}) – journal papers, conference papers, and preprints.  
- [Team]({{ "/team/" | relative_url }}) – Everythings about our members.  
- [Blog]({{ "/blog/" | relative_url }}) – All the record of our milestones.
- [Activities]({{ "/activity/" | relative_url }}) –  lab news, talks, image records for academic or social events.  
- [Contact]({{ "/contact/" | relative_url }}) – how to visit, collaborate, or join the lab  

{% include section.html %}

## Highlights

{% comment %}
  從 _posts 中挑出 tags 裡包含 'highlight' 的文章，
  依日期由新到舊排列，顯示為 hover 有浮起效果的卡片。
{% endcomment %}

{% assign highlight_posts = site.posts
  | where_exp: "post", "post.tags contains 'highlight'"
  | sort: "date"
  | reverse
%}

{% if highlight_posts.size > 0 %}

<div class="highlight-grid">
  {% for post in highlight_posts %}
  <article class="highlight-card">
    {% include post-excerpt.html post=post %}
  </article>
  {% endfor %}
</div>

{% else %}

_Once you tag posts with `highlight`, they will appear here as featured stories._

{% endif %}

{% include section.html %}

## News

Latest updates from our lab.

{% comment %}
  依日期由新到舊排列所有 posts，
  容器高度固定（約可見 ~5 筆），可捲動觀看更舊內容。
{% endcomment %}

{% assign news_posts = site.posts | sort: "date" | reverse %}

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
