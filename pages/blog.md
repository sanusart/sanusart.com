---
layout: page

title: Blog
page_name: blog

category:
  - name: none
    url: none

seo_title: Blog
seo_description: Blog

permalink: /blog/
---

{% for post in site.posts %}
<a class="post-list-item" href="{{site.baseurl}}{{ post.url }}"><date>{{ post.date | date_to_long_string}}</date>
<i class="fa fa-angle-right"></i> <span>{{ post.title }}</span></a>
{% endfor %}