---
layout: page
title: projects
page_name: projects

category:
  - name: none
    url: /none/

seo_title: projects page
seo_description: projects page

permalink: /projects/
---

{% for project in site.data.projects %}<a href="{{site.baseurl}}{{project.url}}"><i class="fa {{project.icon}}"></i><span>{{project.text}}</span></a>{% endfor %}
