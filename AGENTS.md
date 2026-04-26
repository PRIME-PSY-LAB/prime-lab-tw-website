\# Instructions for Codex



This repository is a Jekyll-based academic lab website.



\## General rules



1\. Do not edit the main branch directly.

2\. Prefer small, focused changes.

3\. Before modifying files, explain which files are likely to be changed.

4\. Do not change layout, theme, CSS, plugins, or deployment settings unless explicitly requested.

5\. Preserve the existing site structure.

6\. Use Traditional Chinese for Chinese pages.

7\. Use professional academic tone.

8\. Do not fabricate publications, members, affiliations, grants, or research content.

9\. When editing content, keep front matter fields valid.

10\. After changes, tell me how to verify the website locally.



\## Directory guide



\- `index.md`: homepage

\- `\_config.yaml`: site configuration

\- `\_data/`: structured site data

\- `\_members/`: lab member pages

\- `\_posts/`: blog or news posts

\- `\_research\_intro/`: research introduction pages

\- `research/`: research landing pages

\- `publication/`: publication pages

\- `team/`: team pages

\- `images/`: content images

\- `assets/`: static assets

\- `\_layouts/`, `\_includes/`, `\_styles/`, `\_plugins/`: theme and system files. Do not edit unless explicitly requested.



\## Preferred workflow



1\. Inspect relevant files first.

2\. Make the smallest necessary change.

3\. Summarize changed files.

4\. Explain how to verify locally using:

&#x20;  - bundle exec jekyll build

&#x20;  - bundle exec jekyll serve

