# PRIME Lab Website

PRIME Lab website for the Perceptual Representation and InforMation modEling Lab.

Live site: [www.prime-psy-lab.com](http://www.prime-psy-lab.com)

This repository is a Jekyll static website based on the Lab Website Template, with bilingual English and Traditional Chinese pages, research/project cards, publication filtering, blog/highlight posts, and a contact form.

## Current Version

**ver 1.1.3**  
Branch: `ver-1.1.3-20260428-0017`  
Last updated: `2026-04-28 00:17 +08:00`

Version marker location on the website:

- Source data: `_data/version.yml`
- Footer display: `_includes/footer.html`
- Footer style: `_styles/footer.scss`

The footer should show:

```text
ver 1.1.3 | Updated 2026-04-28 00:17 +08:00
```

## Version Branches

Use version branches for site updates.

| Version | Branch | Meaning |
| --- | --- | --- |
| ver 1.0.0 | initial site state | Original baseline |
| ver 1.0.1 | `ver-1.0.1-20260426-2122` | Homepage copy update |
| ver 1.1.0 | `ver-1.1.0-20260426-2315` | Traditional Chinese language system |
| ver 1.1.1 | `ver-1.1.1-20260427-2357` | Chinese/equipment/research refinements |
| ver 1.1.2 | `ver-1.1.2-20260426-2212` | NSTC project/blog content |
| ver 1.1.3 | `ver-1.1.3-20260428-0017` | Noto Sans TC and visible version metadata |

Branch naming format:

```text
ver-X.Y.Z-YYYYMMDD-HHMM
```

Version bump policy:

- Patch update: change the last digit, for example `1.1.3` to `1.1.4`.
- Medium update: change the middle digit, for example `1.1.3` to `1.2.0`.
- Major update: change the first digit only when explicitly requested.

For every new version:

1. Create a new version branch from the latest stable branch.
2. Update `_data/version.yml`.
3. Update this README's Current Version and Version Branches sections.
4. Summarize the difference from the previous version near the top of README if the branch is meant to be inspected on GitHub.
5. Build locally before pushing.

## Page Audit

Last local audit: `2026-04-28`

The following local pages were checked through the generated Jekyll site at `http://127.0.0.1:4000/`:

| Page | Status | Notes |
| --- | --- | --- |
| `/` | 200 | English homepage |
| `/zh/` | 200 | Traditional Chinese homepage |
| `/team/` | 200 | English team page |
| `/zh/team/` | 200 | Chinese team page |
| `/research/` | 200 | English research overview |
| `/zh/research/` | 200 | Chinese research overview |
| `/publication/` | 200 | English publication page |
| `/zh/publication/` | 200 | Chinese publication page |
| `/blog/` | 200 | English blog page |
| `/zh/blog/` | 200 | Chinese blog page |
| `/contact/` | 200 | English contact page |
| `/zh/contact/` | 200 | Chinese contact page |

All checked pages included:

- the language switcher
- the `ver 1.1.3` footer marker
- the Google Fonts request for `Noto Sans TC`

## Repository Structure

| Path | Purpose | Edit normally? |
| --- | --- | --- |
| `index.md` | English homepage | Yes |
| `zh/index.md` | Chinese homepage | Yes |
| `team/index.md`, `zh/team/index.md` | Team listing pages | Yes |
| `_members/` | Individual member pages | Yes |
| `research/index.md`, `zh/research/index.md` | Research overview pages | Yes |
| `_research_intro/` | English research detail pages generated as a collection | Yes |
| `zh/research/*/index.md` | Chinese research detail pages | Yes |
| `_data/projects.yaml` | English research cards | Yes |
| `_data/projects_zh.yaml` | Chinese research cards | Yes |
| `_data/equipment.yaml` | Research environment equipment cards | Yes |
| `publication/index.md`, `zh/publication/index.md` | Publication pages | Yes |
| `_data/sources_*.yaml` | Manual publication source records | Yes, carefully |
| `_data/citations.yaml` | Generated publication data | Usually no |
| `_posts/` | Blog/news posts | Yes |
| `_highlight_post/` | English highlight post markers | Yes |
| `blog/index.md`, `zh/blog/index.md` | Blog index pages | Yes |
| `contact/index.md`, `zh/contact/index.md` | Contact pages | Yes |
| `_data/version.yml` | Website version metadata | Yes, every release |
| `images/` | Site images, GIFs, thumbnails | Yes |
| `assets/` | PDFs and downloadable assets | Yes |
| `_layouts/` | Jekyll page shells | Avoid unless changing site structure |
| `_includes/` | Reusable Liquid components | Avoid unless changing shared behavior |
| `_styles/` | SCSS/CSS styling system | Avoid unless changing design/site-wide UI |
| `_scripts/` | JavaScript behavior | Avoid unless changing interaction logic |
| `_plugins/` | Jekyll plugins | Avoid unless explicitly needed |
| `_site/` | Generated build output | Do not edit |
| `.jekyll-cache/` | Local build cache | Do not edit |

## Site Rendering Flow

The main rendering path is:

```text
_layouts/default.html
  -> _includes/head.html
      -> _includes/fonts.html
      -> _includes/styles.html
      -> _includes/scripts.html
  -> _includes/header.html
  -> _includes/content.html
  -> _includes/footer.html
```

Important shared components:

- `_includes/language-switcher.html`: builds the English/Chinese page switcher from `lang` and `translation_key`.
- `_includes/list.html`: renders cards, portraits, citations, and post excerpts from collections/data.
- `_includes/contact-form.html`: renders the contact form and experiment sign-up area.
- `_includes/publication-tag-filter.html`: creates publication tag chips and tag counts.
- `_includes/equipment-section.html`: renders research equipment categories.
- `_includes/fonts.html`: loads `Noto Sans TC`, `Roboto Mono`, and Font Awesome.

Important scripts:

- `_scripts/search.js`: filters cards, citations, and blog posts.
- `_scripts/publication-tags.js`: sorts publication tags by frequency and hides tags after the first 10.
- `_scripts/contact-form.js`: validates contact form fields and blocks repeated identical submissions in the same browser for 10 minutes.
- `_scripts/dark-mode.js`: stores and restores light/dark mode.
- `_scripts/activity-album`: controls activity album slideshow/lightbox.

## Homepage

English homepage:

```text
index.md
```

Chinese homepage:

```text
zh/index.md
```

The homepage contains:

- lab introduction
- links to major sections
- highlight posts
- news list

English highlight behavior:

- Real post lives in `_posts/`.
- Matching marker lives in `_highlight_post/`.
- The marker filename should match the post filename.

Chinese highlight behavior:

- Chinese posts live in `_posts/`.
- Use `lang: zh`.
- Use the same `translation_key` as the English counterpart.
- Add `highlight: true` when the Chinese post should appear in the Chinese highlights area.

## Team Members

Team listing pages:

```text
team/index.md
zh/team/index.md
```

Member detail files:

```text
_members/Yen-Ju-CHEN.md
_members/Yen-Ju-CHEN-zh.md
```

Required front matter:

```yaml
---
name: Member Name
lang: en
translation_key: member-slug
image: images/PersonalPhoto/photo.jpg
role: pi
position: Assistant Professor
description: Assistant Professor
affiliation: Department, University
aliases:
cv: /assets/file.pdf
links:
  email: name@example.com
---
```

Role filters used by team pages:

| Role | Meaning |
| --- | --- |
| `pi` | Principal Investigator |
| `pd` | Postdoctoral researcher |
| `phd` | Doctoral student |
| `ms` | Master student |
| `bs` | Bachelor student |
| `al` | Alumni |

For bilingual member pages:

- Keep the same `translation_key`.
- Use `lang: en` and `lang: zh`.
- Chinese page should set its own `permalink`, usually `/zh/members/member-slug/`.

## Research Pages

Research overview:

```text
research/index.md
zh/research/index.md
```

Research card data:

```text
_data/projects.yaml
_data/projects_zh.yaml
```

Research detail pages:

```text
_research_intro/<project-slug>/index.md
zh/research/<project-slug>/index.md
```

Project card groups:

```yaml
group: Current
group: Collaborative
group: Past
```

When adding a research project:

1. Add or update the English card in `_data/projects.yaml`.
2. Add or update the Chinese card in `_data/projects_zh.yaml`.
3. Add the English detail page under `_research_intro/<slug>/index.md`.
4. Add the Chinese detail page under `zh/research/<slug>/index.md`.
5. Use the same `translation_key` on both detail pages.
6. Put images under `images/Research_Intro_image/<slug>/` or another clear project folder.
7. Build and check both `/research/` and `/zh/research/`.

Research environment equipment:

```text
_data/equipment.yaml
```

Equipment is rendered by:

```text
_includes/equipment-section.html
```

When maintaining equipment:

- Keep equipment grouped into categories.
- Avoid exposing storage location or sensitive internal inventory notes.
- Combine components from the same equipment family into one item where possible.
- Use stable product links and local image assets when available.

## Publications

Publication pages:

```text
publication/index.md
zh/publication/index.md
```

Publication source data:

```text
_data/sources_*.yaml
```

Generated publication data:

```text
_data/citations.yaml
```

Do not manually edit `_data/citations.yaml` unless you know exactly why. It is generated by the citation workflow and `_cite/cite.py`.

Publication tag filter:

```text
_includes/publication-tag-filter.html
_scripts/publication-tags.js
```

Current behavior:

- Collects all citation tags.
- Counts tag frequency.
- Sorts by frequency from high to low.
- Shows the first 10 tags.
- Reveals the rest through the "Show more tags" button.
- Keeps tag search links working.

When adding a publication:

1. Add a record to the appropriate `_data/sources_*.yaml`.
2. Include a stable `id`, preferably DOI.
3. Add `type`, `publisher`, `date`, `image`, `buttons`, and `tags` where possible.
4. Use `group: highlighted` for highlighted publications.
5. Run `bundle exec jekyll build`.
6. Confirm `/publication/` and `/zh/publication/`.

## Blog, News, and Highlight Posts

Posts live in:

```text
_posts/
```

Filename format:

```text
YYYY-MM-DD-title.md
YYYY-MM-DD-title-zh.md
```

Recommended front matter:

```yaml
---
title: Post Title
lang: en
translation_key: shared-post-key
image: /images/blog/folder/image.png
author: Yen-Ju Chen
tags:
  - news
  - research
---
```

For Chinese posts:

```yaml
lang: zh
translation_key: same-key-as-english
permalink: /zh/YYYY/MM/DD/title.html
highlight: true
```

English highlight marker files live in:

```text
_highlight_post/
```

The marker file should match the English post filename. The marker content can be minimal; it exists to select the post as a highlight.

## Activity Page

Activity data:

```text
_data/activity.yaml
```

Activity page sources:

```text
activity/
zh/activity/
```

Activity images:

```text
images/activity/
```

The activity album/lightbox behavior is controlled by:

```text
_scripts/activity-album
_styles/activity.scss
_includes/activity_album.html
```

## Contact Page

Contact pages:

```text
contact/index.md
zh/contact/index.md
```

Shared contact form:

```text
_includes/contact-form.html
```

Contact form behavior:

```text
_scripts/contact-form.js
_styles/form.scss
```

Current behavior:

- Sends through FormSubmit to the lab email in `_config.yaml`.
- Adds `[contact from website]` to the subject.
- Requires all fields.
- Rejects whitespace-only or symbol-only input.
- Checks email validity.
- Blocks repeated identical submissions in the same browser for 10 minutes.
- Shows a sending/sent animation.
- Shows the experiment sign-up placeholder when no experiment link is available.

Important limitation:

This is a static website. True IP-based rate limiting cannot be enforced reliably without a backend service or third-party form provider rules.

## Fonts and Visual Style

Font source:

```text
_includes/fonts.html
_styles/-theme.scss
```

Current font policy:

- `Noto Sans TC` is the default font for title, heading, and body.
- `Noto Sans TC` is loaded from Google Fonts so visitors do not need it installed locally.
- `Roboto Mono` is used for code.
- Fallback fonts include `Microsoft JhengHei`, `PingFang TC`, `Heiti TC`, and `sans-serif`.

Theme variables:

```text
_styles/-theme.scss
```

Global style entry point:

```text
_styles/all.scss
```

Avoid changing `_styles/` unless the change is intentionally site-wide.

## Bilingual Maintenance Rules

Every public page should follow these rules:

- English page uses `lang: en`.
- Chinese page uses `lang: zh`.
- Both versions share the same `translation_key`.
- Chinese pages usually use a `/zh/.../` permalink.
- The language switcher depends on `translation_key` to keep users on the equivalent page.
- Do not add an English-only detail page without a Chinese counterpart unless it is intentionally temporary.
- Chinese translation should preserve the content structure and references unless there is a strong reason to reorganize.

Minimum bilingual checks:

1. Open English page.
2. Switch to Chinese.
3. Confirm it stays on the equivalent page, not just `/zh/`.
4. Switch back to English.
5. Confirm title, cards, images, and links match the intended counterpart.

## Local Verification on Windows

Recommended PowerShell setup:

```powershell
cd "D:\資料\學校_ProfessorEra\重要共通文件\實驗室網站\prime-lab-tw-website"

$env:Path = "C:\Ruby32-x64\msys64\ucrt64\bin;C:\Ruby32-x64\bin;" + $env:Path
$env:RUBY_DLL_PATH = "C:\Ruby32-x64\msys64\ucrt64\bin"

ruby -v
bundle -v
where.exe ruby
where.exe bundle
```

Expected Ruby path:

```text
C:\Ruby32-x64\bin\ruby.exe
```

Check dependencies:

```powershell
bundle check
```

Build:

```powershell
bundle exec jekyll build
```

Serve locally:

```powershell
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

Open:

```text
http://127.0.0.1:4000/
http://127.0.0.1:4000/zh/
```

If Windows native gems fail around Nokogiri:

1. Do not repeatedly retry the same stuck install.
2. Confirm Ruby is `C:\Ruby32-x64\bin\ruby.exe`.
3. Ensure MSYS2 UCRT64 libraries are available.
4. Prefer a Windows-compatible Nokogiri version in `Gemfile` / `Gemfile.lock`.

## Visual QA Checklist

Before merging or deploying:

- Homepage loads in English and Chinese.
- Navigation works.
- Language switcher stays on equivalent pages.
- Chinese characters render correctly in browser.
- `Noto Sans TC` is loaded.
- Research cards display images/GIFs.
- Research detail pages load.
- Publications page loads highlighted publications.
- Publication tag filter shows top 10 tags first and "Show more tags" works.
- Blog page lists correct language posts.
- Highlight posts appear as intended.
- Contact form layout is readable in light mode and dark mode.
- Contact form validation works.
- Footer shows the current version and updated time.
- No obvious layout break on desktop.
- No obvious layout break on mobile width.

## Git and Deploy Workflow

Normal update workflow:

```powershell
git switch ver-1.1.3-20260428-0017
git switch -c ver-X.Y.Z-YYYYMMDD-HHMM
```

After edits:

```powershell
bundle exec jekyll build
git status --short
git add <changed-files>
git commit -m "Describe the update"
git push -u origin ver-X.Y.Z-YYYYMMDD-HHMM
```

Merge/deploy workflow:

1. Review the version branch locally.
2. Merge the approved branch into `main`.
3. Push `main`.
4. GitHub Actions `on-push.yaml` runs.
5. The live site is built and deployed to `gh-pages`.

Important branches:

- `main`: source branch for live site deployment.
- `gh-pages`: generated deployment output.
- `ver-*`: versioned working/history branches.

Do not edit `gh-pages` manually unless fixing deployment output intentionally.

## GitHub Actions

Main workflows:

| Workflow | Purpose |
| --- | --- |
| `.github/workflows/on-push.yaml` | Runs after push to `main`; updates citations and builds live site |
| `.github/workflows/build-site.yaml` | Builds Jekyll site and deploys `_site` to `gh-pages` |
| `.github/workflows/on-pull-request.yaml` | Builds PR preview and updates citations |
| `.github/workflows/build-preview.yaml` | Creates preview deployment for PR branches |
| `.github/workflows/on-schedule.yaml` | Scheduled citation update |
| `.github/workflows/update-citations.yaml` | Generates `_data/citations.yaml` from source data |
| `.github/workflows/update-url.yaml` | Updates URL metadata when Pages URL changes |

## Files to Avoid Editing Casually

Avoid editing these unless the task explicitly requires system-level changes:

```text
_layouts/
_includes/
_styles/
_scripts/
_plugins/
_site/
.jekyll-cache/
.github/workflows/
_data/citations.yaml
Gemfile
Gemfile.lock
_config.yaml
```

Safe files for routine content edits:

```text
index.md
zh/index.md
_members/
_posts/
_highlight_post/
_research_intro/
zh/research/
_data/projects.yaml
_data/projects_zh.yaml
_data/equipment.yaml
_data/sources_*.yaml
images/
assets/
```

## Encoding Notes

Use UTF-8 for Markdown, YAML, HTML, SCSS, and JavaScript files.

PowerShell may display Traditional Chinese as garbled text depending on terminal encoding. Always verify Chinese content in:

- the actual browser page
- a UTF-8 capable editor
- the built `_site` output if needed

Do not rely only on terminal output when checking Chinese text.

## Troubleshooting

If a page does not appear:

- Check front matter delimiters `---`.
- Check `permalink`.
- Check `lang` and `translation_key`.
- Run `bundle exec jekyll build` and read the first error.

If the language switcher goes to the wrong page:

- Confirm both pages share the same `translation_key`.
- Confirm the Chinese page has `lang: zh`.
- Confirm the English page has `lang: en` or no `lang` only when English default is intended.

If a research card does not show:

- Check `group` spelling in `_data/projects.yaml` or `_data/projects_zh.yaml`.
- Check image paths relative to site root.
- Check card `link` points to an existing page.

If publications do not update:

- Edit `_data/sources_*.yaml`, not `_data/citations.yaml`.
- Run the citation workflow or `bundle exec jekyll build`.
- Confirm DOI and YAML indentation.

If contact form does not submit:

- Confirm `_config.yaml` has the correct `links.email`.
- Confirm FormSubmit setup allows the recipient address.
- Check browser console for JavaScript errors.

If CSS changes do not appear:

- Confirm the SCSS file is imported or included.
- Run `bundle exec jekyll build`.
- Hard refresh the browser or add a cache-busting query string.

