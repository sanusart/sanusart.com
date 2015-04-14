---
layout: page
title: Code and open source projects
page_name: code

category:
  - name: Projects
    url: /projects/

seo_title: code page
seo_description: code page

permalink: /projects/code/
---

{% assign sorted_codes = site.codes | sort:'date' %}
{% for code in sorted_codes reversed %}
<a class="post-list-item" href="{{site.baseurl}}{{ code.url }}"><i class="fa fa-angle-right"></i> <span>{{ code.title }}</span><cite>{{ code.content | strip_newlines | strip_html }}</cite><tags>{{code.tags | join: ', '}}</tags></a>
{% endfor %}