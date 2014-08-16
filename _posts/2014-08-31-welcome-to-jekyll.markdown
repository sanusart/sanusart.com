---
layout: post

title:  "Another post of some kind"
date:   2014-07-31 10:01:53

category: Blog
category_url: /blog/

seo_title: "Another post of some kind"
seo_description: "Another post of some kind"

categories: jekyll update blog

permalink: /blog/another-post-of-some-kind

---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight liquid %}
{% raw %}
{% for post in paginator.posts %}
   <div class="author">{{ post.date | date_to_string }}</div>
   <h3><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
   <div class="content">
       {{ post.content | split:"<!--break-->" | first }}
   </div>
   <b><a href="{{ BASE_PATH }}{{ post.url }}">continue reading >></a></b>
   <hr/>
{% endfor %}
{% endraw %}
{% endhighlight %}


Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll]:    http://jekyllrb.com
