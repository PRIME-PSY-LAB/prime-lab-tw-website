---
title: Publications
nav:
  order: 1
  tooltip: Publications
---

# {% include icon.html icon="fa-solid fa-book-open" %} Publications

Our lab publishes work on visual perception, temporal processing,  
motion perception, and computational models of human vision.

{% include section.html %}

## Highlighted

{% include list.html
  data="citations"
  component="citation"
  style="rich"
  filter="group == 'highlighted'"
%}

{% include section.html %}

## All publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html
  data="citations"
  component="citation"
  style="rich"
%}

