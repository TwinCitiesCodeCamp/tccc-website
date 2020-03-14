---
layout: default
title: Sponsors
---

<h2>Sponsors of Twin Cities Code Camp 24</h2>

<p>A huge THANK YOU to our sponsors; these are the excellent companies who enable us to put on Code Camp. Please check out their websites and utilize their services as a way to thank them for their support of #tccc24.</p>

<p>Interested in becoming a sponsor? It's easy. Head over to sponsorship details. </p>

{% assign currentSponsors = site.data.sponsors[site.currentEvent] %}
{% assign diamondSponsors = currentSponsors | where: "level","diamond" %}
{% assign platinumSponsors = currentSponsors | where: "level","platinum" %}

<h3>Diamond</h3>
<p>Diamond sponsors are the best! They're our biggest fans, and we couldn't host Code Camp without them. While you're at the event, check out their booths and thank them for supporting Code Camp!</p>

{% for sponsor in diamondSponsors %}
{% include sponsor.md sponsor=sponsor %}
{% endfor %}

<h3>Platinum</h3>
<p>Platinum sponsors help us out in a big way. They support Code Camp financially, have contributed giveaways to attendees, and host booth at Code Camp.</p>

{% for sponsor in platinumSponsors %}
{% include sponsor.md sponsor=sponsor %}
{% endfor %}
