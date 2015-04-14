---
layout: post

title:  "wordpress unique html class for each post"
date:   2012-10-15 10:01:53

category:
  - name: Blog
    url: /blog/

seo_title: "wordpress unique html class for each post"
seo_description: "wordpress unique html class for each post"

categories:
  - PHP
  - WordPress

tags:
  - PHP
  - WordPress

permalink: /blog/wordpress-unique-html-class-for-each-post/
image: wordpress-logo-stacked-rgb.png

---

I often find myself in need to style really particular items, articles or posts on site or a blog. There is a lot of options really, like using `class-name-<?php echo $post->ID;?>` but I wanted to find a way to be able to predict the class selector name and write readable names in stylesheet for future references.

<!--more-->

In order to achieve this behavior we will use the very same function that sanitizes the post title to use as WordPress slug: `sanitize_title();`

More on `sanitize_title()` at <a href="http://codex.wordpress.org/Function_Reference/sanitize_title" target="_blank">WordPress codex</a>

### Pros and cons

Now there are pros and cons for this (there always is, isn&#8217;t it?), I&#8217;ll start with cons:

#### Cons:

*   The class selector may become very long (depends on post title)
*   Class selector may conflict with others, predefined selectors if you not careful (again, depends on post title)
*   Sometimes post title may change while if using post ID it will stay the same.

#### Pros:

*   Class selector predictable almost all the time
*   Great flexibility in design
*   Can be easily used with javascript for proccessing
*   Readable and understandable CSS selector in your stylesheet

### The template code

Place in the template loop (pay attention to line #5 &#8211; this is where the class applied).

```<div class="blog-posts-wrapper">
       <?php if(have_posts()) : while(have_posts()) : the_post();
       $the_title = get_the_title(); ?>
           <h2><?php echo $the_title; ?></h2>
           <article class="blog-post-item <?php echo sanitize_title($the_title); ?>">
               <?php
               if (has_post_thumbnail()) {
                   the_post_thumbnail('medium');
               }
               the_content();
               ?>
           </article>
       <?php endwhile; endif; ?>
   </div>```

### The CSS

So if my post is titled &#8220;How to cook an omelet&#8221;, the CSS to style this post&#8217;s background color will be:

```.how-to-cook-an-omelet {
    background: green;
}```

### Conclusion

It really depends of what you prefer: in my opinion readable selector is much better option, especially when you have a bunch of hand picked posts to style.