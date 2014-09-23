---
layout: post

title:  "Custom roles in wordpress"
date:   2012-11-06 10:01:53

category:
  - name: Blog
    url: /blog/

seo_title: "Custom roles in wordpress"
seo_description: "Custom roles in wordpress"

categories: gisto angularjs

tags: gisto angularjs

author: '<a target="_blank" href="https://plus.google.com/111862979601357461785" rel="publisher">Sasha Khamkov</a>'
permalink: /blog/custom-roles-in-wordpress/
---

![WordPress](/images/wordpress-logo-stacked-rgb-e1350345712329.png) It is a known security suggestion that the website is better off without user with username &#8220;admin&#8221;  in it&#8217;s back-end.

Another concern (on none security matter) is a site administrator with small or total lack of WordPress knowledge &#8211; something that can lead to mismanaged, messy content entering or even worse &#8211; layout breakage.

The best solutions I see is to create a user with less abilities than &#8220;Administrator&#8221; but still let the user access features which are not available in  the next hierarchy user level &#8211; the &#8220;Editor&#8221;.

So&#8230; let&#8217;s create custom roles in WordPress&#8230;

In order to implement this we will use a snippet of code using <a href="http://codex.wordpress.org/Function_Reference/add_role" target="_blank">```add_role()```</a> function to add a new role called &#8220;Site manager&#8221; to WordPress.

### Creating new role

The following snippet need to be added to the functions.php file and executed by visiting any of the admin pages:

```function add_site_manager_role() {
    $site_manager = add_role( 'site_manager', 'Site Manager', array(
        'read' => true,
        'activate_plugins' => false,
        'create_users' => false,
        'delete_others_pages' => true,
        'delete_others_posts' => true,
        'delete_pages' => true,
        'delete_plugins' => false,
        'delete_posts' => true,
        'delete_private_pages' => true,
        'delete_private_posts' => true,
        'delete_published_pages' => true,
        'delete_published_posts' => true,
        'delete_users' => false,
        'edit_dashboard' => true,
        'edit_files' => true,
        'edit_others_pages' => true,
        'edit_others_posts' => true,
        'edit_pages' => true,
        'edit_posts' => true,
        'edit_private_pages' => true,
        'edit_private_posts' => true,
        'edit_published_pages' => true,
        'edit_published_posts' => true,
        'edit_theme_options' => true,
        'export' => false,
        'import' => false,
        'list_users' => false,
        'manage_categories' => true,
        'manage_links' => false,
        'manage_options' => true,
        'moderate_comments' => true,
        'promote_users' => false,
        'publish_pages' => true,
        'publish_posts' => true,
        'read_private_pages' => true,
        'read_private_posts' => true,
        'remove_users' => false,
        'switch_themes' => false,
        'unfiltered_upload' => true,
        'upload_files' => true
   ));
}
add_action( 'admin_init', 'add_site_manager_role' );```

Now the newly created role should appear among the other roles in the drop-down of new user creation page.

List of available capabilities can be found at the <a href="http://codex.wordpress.org/Roles_and_Capabilities" target="_blank">codex</a>.

> Note that this will write the new role data to the database, so the snippet can be deleted or commented out from the functions.php file.

### Managing role&#8217;s the capabilities

In order to add/remove capabilities, we use <a href="http://codex.wordpress.org/Function_Reference/add_cap" target="_blank">add_cap()</a> and <a href="http://codex.wordpress.org/Function_Reference/remove_cap" target="_blank">remove_cap()</a> fiunctions against the role object:

```<?php
$role = get_role( 'site_manager' );
$role->add_cap( 'upload_files' );
$role->remove_cap( 'edit_comment' );
```

### Removing the role

In order to remove the role, <a href="http://codex.wordpress.org/Function_Reference/remove_role" target="_blank">remove_role()</a> function is used: ```remove_role( 'site_manager' );```

> Note that this is also writes settings to the database, so this also may be commented out or deleted.

### CONCLUSION

There are a lot of decent plug-ins available to manage roles at the back-end, but in case if only one role need to be created &#8211; one may choose to avoid plug-in installation and create custom roles in WordPress manually.
