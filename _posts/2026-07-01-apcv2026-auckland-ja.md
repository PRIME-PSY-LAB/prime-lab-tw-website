---
title: "APCV 2026 オークランド参加記録：temporal segmentation と属性間統合"
lang: ja
translation_key: apcv2026-auckland
permalink: /ja/2026/07/01/apcv2026-auckland.html
image: /images/activity/apcv2026-auckland-harbour.jpg
author: Yen-Ju Chen
highlight: true
tags:
  - ニュース
  - APCV
  - 視覚知覚
  - temporal segmentation
  - 心理物理学
---

![APCV 2026 参加時のオークランド港の眺め]({{ "/images/activity/apcv2026-auckland-harbour.jpg" | relative_url }})

2026 年 7 月 1 日から 7 月 4 日まで、ニュージーランドのオークランドで開催された APCV & EPC 2026 に参加しました。会場はオークランド大学で、港と街を見渡すところから始まり、その後は視覚科学と実験心理学に関する発表と議論が続く数日間となりました。

![オークランド大学 City Campus]({{ "/images/activity/apcv2026-university-of-auckland.jpg" | relative_url }})

## APCV & EPC 2026 への参加

![APCV & EPC 2026 の参加証]({{ "/images/activity/apcv2026-name-badge.jpg" | relative_url }})

APCV は Asia-Pacific Conference on Vision の略称で、視覚知覚、心理物理学、神経科学、認知、計算論的アプローチに関心をもつ研究者が集まる会議です。2026 年は Australasian Experimental Psychology Conference（EPC）との合同開催であり、視覚科学の議論をより広い実験心理学の文脈に接続できる場でもありました。

PRIME Lab にとって、今回の主な目的は temporal segmentation に関する最近の研究を発表し、動的な視覚場面において異なる視覚属性がどのように統合されるのかについて議論することでした。

## 今回の発表

![APCV 2026 の poster session で研究を発表する Yen-Ju Chen]({{ "/images/activity/apcv2026-poster-session.jpg" | relative_url }})

発表したポスターの題目は **"Integration of visual attributes in spatial segmentation based on temporal asynchrony revealed by a noise masking paradigm"** で、著者は Yen-Ju Chen、Zitang Sun、Shin'ya Nishida です。

[APCV 2026 poster をダウンロード]({{ "/assets/posters/apcv2026-temporal-segmentation-poster.pdf" | relative_url }})

この研究では、視覚系が時間的な共変動に基づいて動的な場面を分割するとき、輝度、色、空間位相といった異なる視覚属性が独立したチャネルで処理されるのか、それとも temporal correlation の計算前に統合されるのかを検討しました。これまでの研究から、局所要素間の temporal correlation が spatial segmentation を支えることは示されていましたが、異なる属性間の相互作用は明確ではありませんでした。

この問題を調べるために、noise masking paradigm を用いました。参加者は Gaussian blobs または Gabor patches からなる 8 x 16 の動的格子刺激を観察しました。同じ領域内の要素が temporal correlation を共有し、境界をまたぐ領域間では相関しない場合、刺激は左右の領域として分割されます。各条件では、segmentation signal が 1 つまたは 2 つの属性によって定義され、要素の半分が同じ属性または異なる属性からの時間的に無相関な noise に置き換えられました。

結果として、異なる属性からの noise も temporal segmentation を妨害することが示されました。信号強度をそろえた場合、いくつかの条件では属性内 noise に近い大きさの妨害が生じました。フル強度条件では輝度による妨害が強く見られましたが、補足実験から、この非対称性は相対的な信号強度に依存することが示されました。さらに、各属性が temporal correlation の計算前に gain-weighted single-channel の表現へ統合されると仮定したモデルは、行動データの大部分を説明しました。これらの結果は、temporal segmentation が各属性内で独立に完結するのではなく、異なる属性からの信号が統合段階で相互作用することを示唆しています。

Poster session では、この考え方をより明確に議論することができました。特に、属性特異的な処理と統合された temporal computation の境界がどこにあるのかという質問が多く、この研究が焦点を当てている理論的なポイントを改めて確認する機会になりました。
