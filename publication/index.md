---
title: Publications
lang: en
translation_key: publication
nav:
  order: 2
  tooltip: Publications
---

# {% include icon.html icon="fa-solid fa-book-open" %} Publications

Our lab publishes work on visual perception, temporal processing,  
motion perception, and computational models of human vision.

The PRIME Lab studies how human perception transforms dynamic sensory input into stable, structured, and meaningful representations. Our publications combine psychophysics, computational modeling, deep learning, and cognitive neuroscience to examine visual motion processing, temporal organization, perceptual grouping, visuomotor dynamics, and human-aligned artificial vision. A central theme is that human vision cannot be explained by static image classification alone. Instead, perception depends on how the visual system integrates information over time, decomposes relational structure, and uses context to guide recognition and action. Recent work investigates temporal correlation as a cue for visual grouping, continuous tracking as a window into visuomotor dynamics, and biologically inspired motion models that bridge human and machine vision. Together, these studies aim to build computational accounts that are not only accurate, but also behaviorally interpretable and constrained by human data.

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

{% include publication-tag-filter.html %}

{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}

