const currentEventFunc = require("./currentEvent");

module.exports = () => {
  const currentEvent = currentEventFunc();
  if (!currentEvent) return [];
  const talks = currentEvent.talks;
  const urls = talks.reduce((all, talk) => {
    if (talk.hasPicture && !all.includes(talk.pictureUrl)) {
      return all.concat([talk.pictureUrl]);
    }
    return all;
  }, []);

  return urls.map((pictureUrl) => ({ pictureUrl }));
};
