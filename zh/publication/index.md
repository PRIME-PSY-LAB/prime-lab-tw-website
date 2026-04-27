---
title: 發表成果
lang: zh
translation_key: publication
permalink: /zh/publication/
nav:
  order: 2
  tooltip: 期刊、會議與預印本
---

# {% include icon.html icon="fa-solid fa-book-open" %} 發表成果

我們的研究聚焦於視覺知覺、時間處理、運動知覺，以及人類視覺的計算模型。

PRIME Lab 的發表成果聚焦於人類知覺如何將動態、雜訊且不穩定的感覺輸入，轉換成穩定、有結構且具意義的表徵。我們結合心理物理實驗、計算建模、深度學習與認知神經科學，研究視覺運動處理、時間組織、知覺分組、視覺動作系統，以及更貼近人類行為的人工視覺模型。核心觀點是：人類視覺不能只用靜態影像分類來理解，而必須納入時間整合、結構分解與情境限制下的辨識歷程。我們的長期目標，是建構人類知覺系統的可計算模型：從外在刺激出發，描述內在處理機制，最後連結到決策歷程與行為輸出。

{% include section.html %}

## 精選論文

{% assign highlighted_pubs = site.data.citations | where: "group", "highlighted" | sort: "date" | reverse %}

{% if highlighted_pubs and highlighted_pubs.size > 0 %}

<div class="pub-carousel">
  <button class="pub-carousel-arrow pub-carousel-prev" type="button" aria-label="Previous highlighted publication">‹</button>

  <div class="pub-carousel-viewport">
    <div class="pub-carousel-track">
      {% for pub in highlighted_pubs %}
      <article class="pub-highlight-card">
        <div class="pub-highlight-inner">
          <div class="pub-highlight-image">
            {% if pub.image %}
              <img src="{{ pub.image | relative_url | uri_escape }}" alt="Thumbnail for {{ pub.title | escape }}" loading="lazy">
            {% else %}
              <span class="pub-placeholder-icon">Paper</span>
            {% endif %}
          </div>

          <div class="pub-highlight-content">
            <h3 class="pub-highlight-title">
              {% if pub.link %}
                <a href="{{ pub.link }}" target="_blank" rel="noopener">{{ pub.title | default: "[no title]" }}</a>
              {% else %}
                {{ pub.title | default: "[no title]" }}
              {% endif %}
            </h3>

            <p class="pub-highlight-meta">
              {% if pub.authors %}
                <span class="pub-highlight-authors">{{ pub.authors | join: ", " }}</span>
              {% endif %}
              {% if pub.publisher %}
                · <span class="pub-highlight-publisher">{{ pub.publisher }}</span>
              {% endif %}
              {% if pub.date %}
                · <span class="pub-highlight-date">{{ pub.date | date: "%Y-%m-%d" }}</span>
              {% endif %}
            </p>

            {% if pub.tags %}
              <p class="pub-highlight-tags">
                {% for tag in pub.tags %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </p>
            {% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>

  <button class="pub-carousel-arrow pub-carousel-next" type="button" aria-label="Next highlighted publication">›</button>
</div>

{% else %}
_目前尚未設定精選論文。_
{% endif %}

{% include section.html %}

## 全部發表

{% include search-box.html %}

{% include publication-tag-filter.html %}

{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}
