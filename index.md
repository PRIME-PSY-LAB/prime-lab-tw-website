---
---

# Quick about us

Our lab studies **visual perception and temporal processing**, with a focus on:
- Perceptual psychology and visual science  
- Computational & mathematical modeling  
- Machine learning / deep learning models of human perception  

We mainly use **behavioral experiments**, combined with **computational modeling** and **machine learning**, to understand how the human visual system perceives motion, temporal structure, and object organization.

You can learn more from:

- [Research topics]({{ "/projects/" | relative_url }}) – overview of our main research themes and our research enviroment.  
- [Publications]({{ "/publication/" | relative_url }}) – journal papers, conference papers, and preprints.  
- [Team]({{ "/team/" | relative_url }}) – Everythings about our members.  
- [Blog]({{ "/blog/" | relative_url }}) – All the record of our milestones.  
- [Activities]({{ "/blog/" | relative_url }}) – lab news, talks, image records for academic or social events.  
- [Contact]({{ "/contact/" | relative_url }}) – how to reach us if you interest.  

{% include section.html %}

## Highlights

{% comment %}
  這裡會抓出：
  - front matter 有 `group: highlight` 的 post，或
  - tags 裡面包含 `highlight` 的 post
  並用 grid 方式排版。
{% endcomment %}

{% assign highlight_posts = site.posts
  | where_exp: "post", "post.group == 'highlight' or post.tags contains 'highlight'" %}

{% if highlight_posts.size > 0 %}

  {% capture content %}
  {% for post in highlight_posts %}
    {% include post-excerpt.html post=post %}
  {% endfor %}
  {% endcapture %}

  {% include grid.html style="boxes" content=content %}

{% else %}

  _Highlighted posts will appear here once you add `group: highlight` or tag `highlight` in your posts._

{% endif %}

{% include section.html %}

## News

Latest updates from our lab.

{% comment %}
  下面這個 table：
  - 依照時間由新到舊排列
  - 容器高度固定，約同時顯示 ~5 筆
  - 可以用滑鼠滾輪向下捲動看更舊的內容
{% endcomment %}

{% assign news_posts = site.posts | sort: "date" | reverse %}

<div style="max-height: 14rem; overflow-y: auto; margin-top: 0.5rem;">
  <table class="table">
    <thead>
      <tr>
        <th style="width: 60%;">Title</th>
        <th style="width: 20%;">Author</th>
        <th style="width: 20%;">Date</th>
      </tr>
    </thead>
    <tbody>
      {% for post in news_posts %}
      <tr>
        <td>
          <a href="{{ post.url | relative_url }}">
            {{ post.title }}
          </a>
        </td>
        <td>
          {{ post.author | default: post.authors | default: site.title }}
        </td>
        <td>
          {{ post.date | date: "%Y-%m-%d" }}
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
