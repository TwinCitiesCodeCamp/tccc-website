const currentEventFunc = require('./currentEvent');

module.exports = () => {
  const currentEvent = currentEventFunc();
  if (!currentEvent) return [];
  const allTags = currentEvent.talks.reduce((all, talk) => {
    return all.concat(talk.tags);
  },[]);

  return [...(new Set(allTags))];

}