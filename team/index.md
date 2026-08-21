---
title: Team
lang: en
translation_key: team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Principle Investigator
{% include list.html data="members" component="portrait" filter="role == 'pi' and lang == 'en'" %}

## Post Doc researcher
{% include list.html data="members" component="portrait" filter="role == 'pd' and lang == 'en'" %}

## Doctoral student
{% include list.html data="members" component="portrait" filter="role == 'phd' and lang == 'en'" %}

## Master student
{% include list.html data="members" component="portrait" filter="role == 'ms' and lang == 'en'" %}

## Bachelor student
{% include list.html data="members" component="portrait" filter="role == 'bs' and lang == 'en'" %}

## Alumni
<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">▶</span>
    <span class="collapse-label">click for details</span>
  </summary>
  

  {% include list.html data="members" component="portrait" filter="role == 'al' and lang == 'en'" %}


</details>


## Our collaborators
{% include collaborator-section.html lang="en" %}

