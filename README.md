# PRIME-LAB Website Version Notes

## Current Version

**ver 1.1.0**  
Branch: **ver-1.1.0-20260426-2315**

## Diff From Previous Version

Compared with **ver 1.0.1**, this version changes:

- Adds the Traditional Chinese language system and language switcher.
- Adds Chinese page counterparts and translated site navigation/content.
- Introduces the broader bilingual structure used by later versions.

---

  ![on-push](../../actions/workflows/on-push.yaml/badge.svg)
  ![on-pull-request](../../actions/workflows/on-pull-request.yaml/badge.svg)
  ![on-schedule](../../actions/workflows/on-schedule.yaml/badge.svg)

  # PRIME-PSY-LAB's Website

  Visit **[www.prime-psy-lab.com](http://www.prime-psy-lab.com)** 🚀

  _Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_


---

# PRIME-LAB Website Maintenance Guide

本文件說明網站的資料結構與更新流程，包含：

* Team（使用 `role` 分組）
* Posts（一般文章）
* Highlight posts（首頁高亮）
* Publications（手動更新，使用 `_data/sources`）
* Research（最複雜，有 intro 與 detail 兩層）

此文件目的在於讓後續接手的人能夠「照著做就能成功」。

---

## 1. 專案目錄結構（重點版）

```
_data/
  ├─ projects.yaml       # research intro 列表
  ├─ citations.yaml
  ├─ sources_*.yaml      # publication 資料來源
  └─ types.yaml

_members/                # 每位成員（使用 role 分群）
_posts/                  # blog posts
_highlight_post/         # 首頁 highlight 專區

_research_intro/         # 每個研究的簡介（index 顯示）
research/                # 研究詳細內容

publication/             # publication 頁面呈現（本文模板）
team/                    # 团队页面模板
images/                  # 各類圖片
```

---

# 2. Team Member 更新（使用 role 分群）

## 2.1 role 對應表

網站中成員的分組完全依靠 front matter 的 `role` 欄位，例如：

```
pi    → Principle Investigator  
pd    → Post Doc  
phd   → Doctoral student  
ms    → Master student  
bs    → Bachelor student  
al    → Alumni
```

`team/index.md` 使用的語法如下（你提供的畫面）：

```
{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
```

因此 **角色的英文字母必須完全正確**，否則會沒顯示。

---

## 2.2 新增一位成員（可直接複製）

建立新檔案：

```
_members/Firstname-Lastname.md
```

內容模板：

```markdown
---
layout: member
name: Firstname Lastname
role: ms
email: firstname.lastname@xxx.edu
image: /images/PersonalPhoto/Firstname_Lastname.jpg
---

這裡放成員介紹、研究興趣、個人背景等。
```

---

# 3. Blog Posts 更新流程

## 3.1 一般 Post

放在：

```
_posts/YYYY-MM-DD-title.md
```

模板：

```markdown
---
layout: post
title: "My Blog Title"
authors: AAA, BBB
tags: 
  -lab
  -course
---

文章內容…
```


---

## ⭐ Highlight Post（首頁高亮文章）

首頁的 Highlight 區域是透過 **資料夾決定的**。
要讓某篇文章變成首頁高亮，只需要：

### ➤ Step 1：將文章（Markdown 檔）放入

```
_highlight_post/
```

### ➤ Step 2：首頁模板會自動讀取 `_highlight_post/` 的所有檔案

只要檔案在資料夾 → 就會顯示。


---

# 5. Publications（使用 `_data/sources_*.yaml`）

本網站 **不使用 ORCID，自行更新 YAML**。

YAML 作者來源為：

```
_data/sources_novel_2025xxxx.yaml （或類似檔名）
```

每一篇論文是一個 YAML block。
模板如下（你提供的版本，這裡完全可複製使用）：

```yaml
- id: doi:10.1167/jov.25.8.19
  type: paper
  publisher: Journal of Vision
  date: 2025-07-24
  group: highlighted
  image: https://arvo.silverchair-cdn.com/arvo/content_public/journal/jov/...
  buttons:
    - type: paper
      link: https://doi.org/10.1167/jov.25.8.19
  tags:
    - temporal dynamics
    - continuous tracking
    - visuomotor
```

### 核心欄位說明

| 欄位        | 用途                                    |
| --------- | ------------------------------------- |
| `id`      | 必須以 `doi:` `arxiv:`等開頭                         |
| `group`   | 可用 `highlighted` 在首頁或 publication 頁強調 |
| `image`   | 論文縮圖（可用外部 URL）                        |
| `buttons` | 論文連結，如 DOI、PDF、code 等                 |
| `tags`    | 自訂標籤                                  |

### 新增論文流程

1. 打開 `_data/sources_*.yaml`
2. 在最後加入一個新的 YAML block（如上）
3. 儲存 → commit → push
4. publication 頁面會自動更新

---

# 6. Research 更新（重點最多的區塊）

Research 由三個部分組成：

1. `_data/projects.yaml` → 用於 **研究列表（intro 卡片）**
2. `_research_intro/<project>/index.md` → 簡介頁（顯示在 `/research/` 總覽）
3. `research/<project>/index.md` → 詳細頁（完整文章、圖表、方法）

---

## 6.1 Step 1：更新 `_data/projects.yaml`

模板（可複製）：

```yaml
- title: Temporal synchrony and structure in visual segmentation
  subtitle: When temporal structure competes with synchrony
  group: Past
  image: images/Research_Intro_image/temporal-async-seg/IMG.jpeg
  link: /research/temporal-async-seg/
  description: >
    Short intro paragraph…
  tags:
    - temporal vision
    - temporal synchrony
    - segmentation
```
group 那裡只能填 Current、Collaborative、Past擇一
---

## 6.2 Step 2：新增 intro（顯示在研究列表頁）

位置：

```
_research_intro/temporal-async-seg/index.md
```

模板：

```markdown
---
title: Temporal synchrony and structure in visual segmentation
layout: project
permalink: /research/temporal-async-seg/
image: /images/Research_Intro_image/motion-model/Mario_model.gif
tags:
  - motion perception
  - deep learning
  - computational modeling
  - first-order motion
  - second-order motion
---


# Temporal synchrony and structure in visual segmentation

研究簡介…
```

---
## 6.3 Step 3：所有圖片新增在
所有的圖片要新增在images/Research_Intro_image/"研究資料夾名"/裡
在index.md裡引用圖片必須形如  
![圖片名] ({{'位置'|relative_url}})  
中括號跟小括號中間不能空格

# 7. GitHub 操作流程（交接成員必看）

```
git pull origin main
git add .
git commit -m "Update research: temporal-async-seg"
git push origin main
```

---

# 9. 最後備註（給未來的你）

如果不知道某個東西要改哪裡，
照下面順序檢查：

1. `_data/projects.yaml`(研究列表)
2. `_research_intro/<project>/index.md`(研究詳情介紹)
3. `_data/sources_*.yaml`（論文）
4. `_members/*.md`（team）

---

