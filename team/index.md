---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

## Principle Investigator
{% include list.html data="members" component="portrait" filter="role == 'pi'" %}

## Doctor student
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

## Master student
{% include list.html data="members" component="portrait" filter="role == 'ms'" %}

## Bachelor student
{% include list.html data="members" component="portrait" filter="role == 'bs'" %}

## Alumni
<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">▶</span>
    <span class="collapse-label">click for details</span>
  </summary>
  

  {% include list.html data="members" component="portrait" filter="role == 'al'" %}


</details>


## Our colaborators

<details class="collapse-block">
  <summary>
    <span class="collapse-arrow">▶</span>
    <span class="collapse-label">click for details</span>
  </summary>

  <section markdown="1">
  
- [Shin'ya Nishida](https://researchmap.jp/shinyanishida?lang=en),    Kyoto University, Kyoto, Japan
- [Kiyofumi Miyoshi](https://researchmap.jp/kiyofumimiyoshi?lang=en),   Kyoto University, Kyoto, Japan
- [Alan Johnston](https://www.nottingham.ac.uk/psychology/people/alan.johnston),    University of Nottingham, Nottingham, UK
- [Zitang Sun](https://www.researchgate.net/profile/Zitang-Sun),    Sony Co., Japan

  </section>

</details>

---


{% include section.html background="images/background.jpg" dark=true %}


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

%%{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
