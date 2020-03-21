# Twin Cities Code Camp web site

* hosted at [twincitiescodecamp.com](http://twincitiescodecamp.com)
* runs on [Jekyll](http://jekyllrb.com)

# Prerequisites

To run the site on your computer, you need to have Jekyll installed.
Jekyll itself has its own installation prerequisites, so please make
sure you _follow them closely_ for your own operating system:

* [Windows](https://jekyllrb.com/docs/installation/windows/)
* [MacOS](https://jekyllrb.com/docs/installation/macos/)
* [Linux](https://jekyllrb.com/docs/installation/ubuntu/)

Please check out the [full Jekyll documentation](https://jekyllrb.com/docs/) to familiarize yourself
with Jekyll.

# Build and run the site

Clone the repository:

``` 
git clone git@github.com:TwinCitiesCodeCamp/tccc-prototype.git
```

Install Ruby gems:

``` 
cd tccc-prototype
bundle install
```

Build and run the site with Jekyll:

``` 
bundle exec jekyll serve
```

# Site Structure

All data about events, talks, speakers, and sponsors is store
in Jekyll _collections_. These collections are located under the
`_collections` folder.

Speakers, sponsors, and talks are stored in sub-folders specific
to an event:

``` 
_collections/
├── _events/
│   ├── tccc1.html
│   ├── tccc2.html
│   ├── ...
│   └── tccc24.html
|
├── _speakers/
│   ├── tccc1
│   |   ├── hank-hankerson.html
│   |   ├── jane-smith.html
|   |
│   ├── tccc24
│       ├── karen-anderson.html
│       ├── peter-gibbons.html
|
├── _sponsors/
│   ├── tccc1
│   |   ├── sponsor1.html
│   |   ├── sponsor2.html
|   |
│   ├── tccc24
│       ├── sponsor3.html
│       ├── sponsor4.html
|
├── _talks/
    ├── tccc1
    |   ├── hank-hankerson-intro-to-javascript.html
    |   ├── jane-smith-advanced-aws.html
    |
    ├── tccc24
        ├── karen-anderson-amazing-testing.html
        ├── peter-gibbons-functional-programming-is-dead.html
```

## Event files

Event files are primarily used to store data about the event:

``` 
---
layout: event
event: tccc1
title: TCCC 1
eventDate: 2006-10-01
address: ""
locationName: ""
number: 1
registerUrl: 
seasonYear: "Fall 2006"
---
```

When the event is rendered, the `event` layout will also include
a listing of talks for that event.

## Speaker files

Speaker files contain metadata along with an HTML biography:

``` 
---
speakerId: KarenAnderson
name: Karen Anderson
image: http://url.to.image/profile.jpg
speakerUrl: http://url.to.speaker.web.page
twitter: twitter_username
github: github_username
event: tccc3
---

<p>Speaker bio with optional markup.</p>

```

NOTE: it is important to set the `speakerId` attribute equal to
a talk file's `speakerId` attribute in order to link the speaker
to the talk (see talk file information below).

## Sponsor files

Sponsor files contain metadata along with an HTML
description:

``` 
--- 
name: Sponsor Name
level: Diamond
image: http://url.to.sponsor.logo/image.jpg
link: https://url.to.sponsor.web.site
twitter: twitter_username
event: tccc23
---

Sponsor information with <strong>optional markup</strong>.
```

## Talk files

Talk files contain metadata along with an HTML
abstract:

``` 
---
event: tccc22
title: "An amazing talk!"
speakerId: KarenAnderson
layout: talk
room: <room number, if known>
time: <time of day, if known>
tags: ["list", "of", "tags"]
---

Talk abstract <em>with optional markup</em>.

```

NOTE: it is important to set the `speakerId` attribute equal to
a speaker file's `speakerId` attribute in order to link the speaker
to the talk (see speaker file information above).

Tags are used to display tag stats on the main page.

# How to Create a New Event

Let's say that you need to create an event for the
100th code camp event. This event will be identified as `tccc100` .

1. Create a new event file: `_collections/_events/tccc100.html` .

2. In the new event file, set the `event` attribute in the YAML front-matter equal to `tccc100` , and fill in the rest of the metadata (reference the Event file information above).

2. Create a new speakers, sponsors, and talks subfolders: 

`_collections/_speakers/tccc100/` <br/>
`_collections/_sponsors/tccc100/` <br/>
`_collections/_talks/tccc100/` 

3. Create individual speakers, sponsors, and talks files in their

respective subfolders. Make sure to set the `event` attribute in the
YAML front-matter equal to `tccc100` 

4. When creating related speaker and talk files, make sure to link them by using the same `speakerId` attribute value in the two files.

