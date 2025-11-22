---
title: Publications
nav:
  order: 2
  tooltip: Publications
---

# {% include icon.html icon="fa-solid fa-book-open" %} Publications

Our lab publishes work on visual perception, temporal processing,  
motion perception, and computational models of human vision.

{% include section.html %}

## Highlights

{% assign highlighted_pubs = site.data.citations | where: "group", "highlighted" | sort: "date" | reverse %}


{% if highlighted_pubs and highlighted_pubs.size > 0 %}

<div class="pub-carousel">
  <button
    class="pub-carousel-arrow pub-carousel-prev"
    type="button"
    aria-label="Previous highlighted publication"
  >
    ‹
  </button>

  <div class="pub-carousel-viewport">
    <div class="pub-carousel-track">
      {% for pub in highlighted_pubs %}
      <article class="pub-highlight-card">
        <div class="pub-highlight-inner">
          <div class="pub-highlight-image">
            {% if pub.image %}
              <img
                src="{{ pub.image | relative_url | uri_escape }}"
                alt="Thumbnail for {{ pub.title | escape }}"
                loading="lazy"
              >
            {% else %}
              <span class="pub-placeholder-icon">🧪</span>
            {% endif %}
          </div>

          <div class="pub-highlight-content">
            <h3 class="pub-highlight-title">
              {% if pub.link %}
                <a href="{{ pub.link }}" target="_blank" rel="noopener">
                  {{ pub.title | default: "[no title]" }}
                </a>
              {% else %}
                {{ pub.title | default: "[no title]" }}
              {% endif %}
            </h3>

            <p class="pub-highlight-meta">
              {% if pub.authors %}
                <span class="pub-highlight-authors">
                  {{ pub.authors | join: ", " }}
                </span>
              {% endif %}
              {% if pub.publisher %}
                · <span class="pub-highlight-publisher">
                  {{ pub.publisher }}
                </span>
              {% endif %}
              {% if pub.date %}
                · <span class="pub-highlight-date">
                  {{ pub.date | date: "%Y-%m-%d" }}
                </span>
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

  <button
    class="pub-carousel-arrow pub-carousel-next"
    type="button"
    aria-label="Next highlighted publication"
  >
    ›
  </button>
</div>

{% else %}
_Once you mark some entries in `_data/sources_*.yaml` or `citations.yaml` with `group: highlighted`, they will appear here._
{% endif %}

{% include section.html %}

## All publications

{% include search-box.html %}

{%- comment -%}
  Collect all unique tags from site.data.citations
{%- endcomment -%}

{% assign all_tags = "" | split: "" %}
{% for c in site.data.citations %}
  {% if c.tags %}
    {% assign all_tags = all_tags | concat: c.tags %}
  {% endif %}
{% endfor %}
{% assign uniq_tags = all_tags | uniq | sort %}

{% if uniq_tags.size > 0 %}
<div class="pub-tag-filter">
  {% for tag in uniq_tags %}
    {% assign clean = tag | strip %}
    {% assign query = '"tag: ' | append: clean | append: '"' %}
    {% assign encoded = query | uri_escape %}
    <a
      class="tag pub-tag-filter-chip"
      href="{{ page.url | relative_url }}?search={{ encoded }}"
    >
      {{ clean }}
    </a>
  {% endfor %}
</div>
{% endif %}


{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}

