---
title: 部落格
lang: zh
translation_key: blog
permalink: /zh/blog/
nav:
  order: 4
  tooltip: 最新消息與研究筆記
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %} 部落格

{% include section.html %}

{% include search-box.html %}

{% assign zh_posts = site.posts | data_filter: "lang == 'zh'" %}
{% assign zh_tags = "" | split: "" %}
{% for post in zh_posts %}
  {% if post.tags %}
    {% assign zh_tags = zh_tags | concat: post.tags %}
  {% endif %}
{% endfor %}
{% include tags.html tags=zh_tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" filter="lang == 'zh'" %}
