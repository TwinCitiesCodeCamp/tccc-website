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

{% assign img = speaker.image %}
{% include speaker_image.md image=img %}

</p>

{{ talk.content }}

</li>
{% endif %}

{% endfor %}

</ul>
