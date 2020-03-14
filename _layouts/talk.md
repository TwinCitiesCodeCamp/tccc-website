---
layout: default
---

{% assign speaker = site.data.speakers[page.event][page.speaker]%}

<h2>{{ page.title }}</h2>

<h3>{{speaker.name}} </h3>

{% assign img = speaker.image %}
{% include speaker_image.md image=img %}

{{ content }}

<h4>About the speaker:</h4>
{{ speaker.bio }}
