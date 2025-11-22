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

{% assign highlight_pubs = site.data.citations
  | where_exp: "c", "c.group == 'highlighted'"
%}

{% if highlight_pubs.size > 0 %}

<div class="pub-carousel">

  <button class="pub-prev">❮</button>

  <div class="pub-carousel-track">
    {% for pub in highlight_pubs %}
      <div class="pub-slide">
        {% include citation.html
          item=pub
          style="rich"
        %}
      </div>
    {% endfor %}
  </div>

  <button class="pub-next">❯</button>
</div>

{% else %}
_You haven't marked any publications as highlighted yet._
{% endif %}


{% include section.html %}

## All publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}


