---
title: "APCV 2026 奧克蘭參會紀錄：temporal segmentation 與跨屬性整合"
lang: zh
translation_key: apcv2026-auckland
permalink: /zh/2026/07/01/apcv2026-auckland.html
image: /images/activity/apcv2026-auckland-harbour.jpg
author: Yen-Ju Chen
tags:
  - 最新消息
  - APCV
  - 視覺知覺
  - temporal segmentation
  - 心理物理學
---

![APCV 2026 行程中的奧克蘭港景]({{ "/images/activity/apcv2026-auckland-harbour.jpg" | relative_url }})

2026 年 7 月 1 日至 7 月 4 日，我前往紐西蘭奧克蘭參加 APCV & EPC 2026。會議地點在奧克蘭大學，這趟行程從奧克蘭港與城市景色開始，接著進入連續幾天關於視覺科學與實驗心理學的交流。

![奧克蘭大學 City Campus]({{ "/images/activity/apcv2026-university-of-auckland.jpg" | relative_url }})

## 參加 APCV & EPC 2026

![APCV & EPC 2026 會議名牌]({{ "/images/activity/apcv2026-name-badge.jpg" | relative_url }})

APCV 是 Asia-Pacific Conference on Vision，主要聚集研究視覺知覺、心理物理學、神經科學、認知，以及計算視覺的學者。2026 年的會議與 Australasian Experimental Psychology Conference（EPC）共同舉辦，因此除了視覺科學本身，也有更多機會和實驗心理學中相鄰的研究問題對話。

對 PRIME Lab 來說，這次參會的主要目的是發表我們近期關於 temporal segmentation 的研究，並和其他研究者討論視覺系統如何在動態場景中整合不同的視覺屬性。

## 本次發表

![Yen-Ju Chen 於 APCV 2026 poster session 發表研究]({{ "/images/activity/apcv2026-poster-session.jpg" | relative_url }})

本次海報題目為 **「Integration of visual attributes in spatial segmentation based on temporal asynchrony revealed by a noise masking paradigm」**，作者為 Yen-Ju Chen、Zitang Sun 與 Shin'ya Nishida。

[下載 APCV 2026 poster]({{ "/assets/posters/apcv2026-temporal-segmentation-poster.pdf" | relative_url }})

這項研究想回答的問題是：當視覺系統根據時間上的共變關係來分割動態場景時，亮度、顏色、空間相位等不同視覺屬性是各自獨立運算，還是會先被整合後再進行 temporal correlation 的計算？過去研究已經指出，局部元素之間的 temporal correlation 可以支持 spatial segmentation，但不同屬性之間如何互動仍不清楚。

為了檢驗這個問題，我們使用 noise masking paradigm。參與者觀看由 Gaussian blobs 或 Gabor patches 組成的 8 x 16 動態格狀刺激。當同一側區域內的元素共享 temporal correlation，而左右兩側跨邊界不相關時，刺激可以被知覺為左右兩個區域。在不同條件中，segmentation signal 由一個或兩個屬性承載；同時，半數元素會被替換成時間上不相關的 noise，而這些 noise 可能來自相同屬性，也可能來自不同屬性。

結果顯示，跨屬性的 noise 會干擾 temporal segmentation；在訊號強度匹配時，部分條件下的干擾程度甚至接近同屬性 noise。完整強度下，亮度通常造成較強的干擾，但補充實驗顯示這種不對稱和相對訊號強度有關。以 gain-weighted single-channel 為假設的模型，也就是不同屬性在 temporal correlation 計算前先進入整合表徵，能夠解釋大部分行為資料。這些結果支持一個觀點：temporal segmentation 並不是在每個視覺屬性內獨立完成，而是不同屬性訊號會先透過整合階段互相作用，再影響 segmentation 的判斷。

Poster session 也讓這個理論問題變得更具體。與會者的提問多半集中在「屬性特定處理」與「整合後 temporal computation」之間的邊界，而這正是這項研究想要釐清的位置。
