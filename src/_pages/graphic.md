---
layout: page
title: Graphic elements
page_name: Graphics

category:
  - name: Projects
    url: /projects/

seo_title: Graphic elements page
seo_description: Graphic elements page

permalink: /projects/graphics/
---

{% for graphic in site.graphics %}
<a class="post-list-item" href="{{site.baseurl}}{{ graphic.url }}">
<i class="fa fa-angle-right"></i> <span>{{ graphic.title }}</span></a>
{% endfor %}