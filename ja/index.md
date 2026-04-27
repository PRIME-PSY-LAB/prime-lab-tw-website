---
lang: ja
translation_key: home
permalink: /ja/
---

# PRIME Lab について

**知覚表現・情報モデリング研究室（PRIME Lab）**は、**視覚知覚と時間処理**を中心に研究しています。主な関心は次の通りです。

- 知覚心理学と視覚科学
- 視覚情報の時間的組織化と分割
- 知覚の数理・計算モデル
- 人間視覚の深層学習・機械学習モデル

私たちは、**行動実験**、**計算モデリング**、**機械学習に基づく image-computable models** を組み合わせ、脳が時間の中で運動、構造、物体をどのように追跡し、安定した表現へ変換するのかを調べています。

研究室については、以下のページから確認できます。

- [研究テーマ]({{ "/ja/research/" | relative_url }}) - 主な研究方向と研究環境。
- [研究業績]({{ "/ja/publication/" | relative_url }}) - 論文、学会発表、プレプリント。
- [メンバー]({{ "/ja/team/" | relative_url }}) - 研究室メンバーと共同研究者。
- [ブログ]({{ "/ja/blog/" | relative_url }}) - 研究の節目と研究室ニュース。
- [活動記録]({{ "/ja/activity/" | relative_url }}) - 学術活動、講演、写真アーカイブ。
- [お問い合わせ]({{ "/ja/contact/" | relative_url }}) - 訪問、共同研究、参加に関する連絡先。

{% include section.html %}

## ハイライト

{% assign highlight_posts = site.posts | data_filter: "lang == 'ja'" | sort: "date" | reverse %}

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
_現在、日本語のハイライト記事はありません。_
{% endif %}

{% include section.html %}

## 最新ニュース

研究室からの最近の更新です。

{% assign news_posts = site.posts | data_filter: "lang == 'ja'" | sort: "date" | reverse %}

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
