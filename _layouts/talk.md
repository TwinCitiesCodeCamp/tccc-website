---
layout: default
---

{% assign speaker = site.data.speakers[page.event][page.speaker]%}

<h2>{{ page.title }}</h2>

<h3>{{speaker.name}} </h3>

<p><img src="{{speaker.image}}" style="max-width: 200px;" /></p>

{{ content }}

<h4>About the speaker:</h4>
{{ speaker.bio }}
