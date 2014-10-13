---
layout: page
title: Code
page_name: code

category:
  - name: Projects
    url: /projects/

seo_title: code page
seo_description: code page

permalink: /projects/code/
---

{% for code in site.codes %}
<a class="post-list-item" href="{{site.baseurl}}{{ code.url }}">
<i class="fa fa-angle-right"></i> <span>{{ code.title }}</span></a>
{% endfor %}