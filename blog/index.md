---
title: Blog
lang: en
translation_key: blog
nav:
  order: 4
  tooltip: News and inspiration
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}Blog


{% include section.html %}

{% include search-box.html %}

{% assign en_posts = site.posts | data_filter: "lang == 'en'" %}
{% assign en_tags = "" | split: "" %}
{% for post in en_posts %}
  {% if post.tags %}
    {% assign en_tags = en_tags | concat: post.tags %}
  {% endif %}
{% endfor %}
{% include tags.html tags=en_tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" filter="lang == 'en'" %}
