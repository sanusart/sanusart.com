---
layout: page

title: Blog
page_name: blog

category: none
category_url: none

seo_title: Blog
seo_description: Blog

permalink: /blog/
---

{% for post in site.posts %}
<a class="post-list-item" href="{{ post.url }}"><strong>{{ post.title }}</strong><date>{{ post.date }}</date></a>
{% endfor %}