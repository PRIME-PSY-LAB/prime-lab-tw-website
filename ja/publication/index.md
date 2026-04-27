---
title: 研究業績
lang: ja
translation_key: publication
permalink: /ja/publication/
nav:
  order: 2
  tooltip: 論文、学会発表、プレプリント
---

# {% include icon.html icon="fa-solid fa-book-open" %} 研究業績

私たちの研究は、視覚知覚、時間処理、運動知覚、そして人間視覚の計算モデルに焦点を当てています。

PRIME Lab の研究業績は、人間の知覚が動的でノイズを含む感覚入力を、どのように安定した構造的で意味のある表現へ変換するのかを扱っています。心理物理実験、計算モデリング、深層学習、認知神経科学を組み合わせ、視覚運動処理、時間的組織化、知覚的群化、視覚運動制御、人間に整合した人工視覚モデルを検討します。中心的な考えは、人間視覚は静的な画像分類だけでは説明できず、時間統合、構造分解、文脈に基づく認識過程を含めて理解する必要があるという点です。長期的には、外界刺激から内的処理機構、さらに意思決定と行動出力までを結ぶ、人間知覚システムの計算可能なモデルを構築することを目指しています。

{% include section.html %}

## ハイライト論文

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
_現在、ハイライト論文は設定されていません。_
{% endif %}

{% include section.html %}

## すべての研究業績

{% include search-box.html %}

{% include publication-tag-filter.html %}

{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}
