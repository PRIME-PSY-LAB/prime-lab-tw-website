---
title: ブログ
lang: ja
translation_key: blog
permalink: /ja/blog/
nav:
  order: 4
  tooltip: ニュースと研究ノート
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %} ブログ

{% include section.html %}

{% include search-box.html %}

{% assign ja_posts = site.posts | data_filter: "lang == 'ja'" %}
{% assign ja_tags = "" | split: "" %}
{% for post in ja_posts %}
  {% if post.tags %}
    {% assign ja_tags = ja_tags | concat: post.tags %}
  {% endif %}
{% endfor %}
{% include tags.html tags=ja_tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" filter="lang == 'ja'" %}
