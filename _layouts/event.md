---
layout: default
---

{{ content }}

<ul>

{% for talk in site.talks %}

{% if talk.event == page.event %}
{% assign speaker = site.data.speakers[page.event][talk.speaker] %}

<li>
<h2><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></h2>

<h4>{{ speaker.name }}</h4>

<p>
  {% if speaker.image != null %}
  <img src="{{speaker.image}}" style="max-width: 100px"/>
  {% else %}
  <img src="https://twincitiescodecamp.com/content/images/unknown-speaker.jpg" style="max-width: 100px" />
  {% endif %}
</p>

{{ talk.content }}

</li>
{% endif %}

{% endfor %}

</ul>
