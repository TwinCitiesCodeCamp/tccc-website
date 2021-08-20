# Twin Cities Code Camp Website

Source code for the TCCC static site generator. 
Uses [Eleventy](https://11ty.dev).

# Run Locally

Clone the repository and then run:

```
npm install
npm run start
```

You should then see some URLs to access the site locally:

```
[Browsersync] Access URLs:
 -----------------------------------
       Local: http://localhost:8083
    External: http://10.0.0.239:8083
 -----------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 -----------------------------------
[Browsersync] Serving files from: _site
```

# How to Maintain Site Content

All site content is driven from .json data files located in
[_data](_data).

## Events

To add or edit an event, use the 
[_data/events/events.json](_data/events/events.json) file.

Event object example:

```json
{
  "eventId": "tccc24",
  "number": 24,
  "registerUrl": "",
  "dateTime": "2020-01-09T00:06:00.000Z",
  "locationFriendlyName": "Normandale Community College",
  "address": "9700 France Ave S, Bloomington, MN 55431",
  "seasonYear": "Spring 2020",
}
```

## Talks

Talks are divided into files per event, located under the 
[_data/talks](_data/talks) folder. 

To create talks for a new event, first create a new .json file 
under [_data/talks](_data/talks) for the event. For example,
if you wanted to create talks for TCCC57, you would create
`_data/talks/tccc57.json`. 

Once you have located the talks .json file for the specific event,
you can add, edit or remove talks from the array in the file.

Talk object example:

```json
{
  "eventId": "tccc24",
  "title": "Advanced Machine Learning for Absolute Beginners",
  "abstract": "In this session, <em>you will be confused</em>.",
  "author": "Bill Gate",
  "authorBio": "6 months experience. I like to play video games.",
  "authorEmail": "expert@vr-sunset.xyz",
  "authorUrl": "https://vr-sunset.xyz",
  "authorTwitter": "all_about_teh_socialz",
  "authorGitHub": "",
  "room": "103",
  "hour": 0,
  "pictureUrl": "https://vr-sunset.xyz/404.jpg",
  "tags": [
    "machine learning",
    "expert",
    "fun",
    "llamas"
  ],
}
```

> For what it's worth, you don't have to name these files with
> the convention "`tcccXX.json`"
> and they don't have to conform to a numbering scheme. All .json
> files in this folder will be included and can be named anything, but
> they should follow the numbering convention for maintainability.

## Sponsors

Sponsors work just like talks. They are divided into files per event,
located under the [_data/sponsors](_data/sponsors) folder.

Create a sponsors .json file for its event. For example, to create
sponsors for TCCC31, you would create `_data/sponsors/tccc31.json`.

Once you've located the sponsors data file, you can add, edit, or 
remove sponsors from the array in the file.

Sponsor object example:

```json
{
  "name": "Megacorp",
  "logo": "hhttps://picsum.photos/200",
  "url": "https://www.vr-sunset.xyz",
  "about": "We sponsor code camps. With <em>html</em>.",
  "level": "Platinum",
  "eventId": "tccc24",
  "twitter": "@megacorp_socialz_lol"
}
```

## Current Event / No Event

To change or remove the currently featured event, modify the
`currentEventId` constant in the [_data/currentEvent.js](_data/currentEvent.js)
file.

For example, to set the current event to "TCCC 24":

```javascript
const currentEventId = "tccc24";
```

> Note: this assumes there is a corresponding "tccc24" `eventId` in the
> [_data/events/events.json](_data/events/events.json) file.

Or, if you want to clear the current event due to a worldwide pandemic,
just set the constant value to `null`:

```javascript
const currentEventId = null;
```

# Wait, how is each page created?

The main site pages are created from top-level 
[liquid templates](https://shopify.github.io/liquid/basics/introduction/):

| Page | Template |
| ---- | -------- |
| Home | index.liquid |
| Current Event Info | event-current.liquid |
| Current Sponsors | sponsors.liquid |
| Historic Event List | event-list.liquid |
| About | about.liquid |
| Code of Conduct | policies.liquid |
| Event Detail / List of Talks | event-detail.liquid |
| Talk Detail | talk.liquid |

The main site layout and partials/helpers are all located 
at [_includes](_includes).


# Bugs, Issues, etc

If something looks wrong, it probably is. Or maybe you are an expert
in Eleventy and see something that could be done more easily. 
Please help by submitting an issue or a pull request.

# Resources

- https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/
