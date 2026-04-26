---
lang: zh
translation_key: home
permalink: /zh/
---

# 關於知覺表徵與建模實驗室

**知覺表徵與建模實驗室（PRIME Lab）**研究**視覺知覺與時間處理**，主要關注：

- 知覺心理學與視覺科學
- 視覺資訊的時間組織與分割
- 知覺的計算與數學模型
- 人類視覺的深度學習與機器學習模型

我們結合**行為實驗**、**計算建模**與**以機器學習為基礎的 image-computable models**，理解大腦如何在時間中追蹤運動、結構與物件。

你可以從以下頁面認識我們：

- [研究主題]({{ "/zh/research/" | relative_url }}) - 實驗室主要研究方向與研究環境。
- [發表成果]({{ "/zh/publication/" | relative_url }}) - 期刊論文、會議論文與預印本。
- [團隊成員]({{ "/zh/team/" | relative_url }}) - 實驗室成員與合作夥伴。
- [部落格]({{ "/zh/blog/" | relative_url }}) - 研究進展、里程碑與實驗室近況。
- [活動紀錄]({{ "/zh/activity/" | relative_url }}) - 學術活動、演講與生活照片。
- [聯絡我們]({{ "/zh/contact/" | relative_url }}) - 拜訪、合作或加入實驗室。

{% include section.html %}

## 精選

{% assign highlight_posts = site.posts | data_filter: "lang == 'zh'" | sort: "date" | reverse %}

{% if highlight_posts.size > 0 %}

<div class="highlight-grid">
  {% for post in highlight_posts %}
    {% if post.highlight %}
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
          <span>{{ post.date | date: "%Y-%m-%d" }}</span>
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
    {% endif %}
  {% endfor %}
</div>

{% else %}
_目前還沒有中文精選文章。_
{% endif %}

{% include section.html %}

## 最新消息

實驗室近期更新。

{% assign news_posts = site.posts | data_filter: "lang == 'zh'" | sort: "date" | reverse %}

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
