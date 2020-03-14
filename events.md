---
layout: default
title: events
---

An events page or something.

<ul>
{% for event in site.events %}
  <li>
    <a href="{{ event.url }}">{{ event.title }}</a>
  </li>
{% endfor %}
</ul>
