---
layout: page
title: music
page_name: music

category:
  - name: Projects
    url: /projects/

seo_title: music page
seo_description: music page

permalink: /projects/music/
---

Here are two types of trucks:

- Music composed for competitions at <a href="https://www.sanusart.com/wp-content/images/www.kvraudio.com" target="_blank">kvraudio.com</a> music cafe.

- Various music composed with no particular purpose in mind (lower on this page)

##Those once are for the competitions:

{% for track in site.data.music %}

### {{track.name}}

{{track.description}}

<audio controls>
  <source src="{{track.mp3}}" type="audio/mpeg">
  <source src="{{track.ogg}}" type="audio/ogg">
  <iframe width="600" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/{{track.soundcloud}}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&visual=true"></iframe>
</audio>

{% if track.name == "February" %}
## And those once composed with no particular purpose in mind
{% endif %}

{% endfor %}