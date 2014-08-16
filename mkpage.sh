#!/bin/sh

if [ -z "$1" ]
then
    echo -e "Please set file name"
elif [ -f  "$1.md" ]
then
    echo -e "$1.md exists"
else
    touch "$1.md"
    echo "---
layout: page
title: $1
page_name: $1

category: none
category_url: /$1/

seo_title: $1 page
seo_description: $1 page

permalink: /$1/
---

This is first paragraph" >> "$1.md"
fi