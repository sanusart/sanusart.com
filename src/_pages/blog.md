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
<a class="post-list-item" href="{{site.baseurl}}{{ post.url }}"><i class="fa fa-angle-right"></i> <span>{{ post.title }}</span><cite>{{ post.excerpt | strip_newlines | strip_html }}</cite><tags>{{post.tags | join: ', '}}</tags></a>
{% endfor %}
