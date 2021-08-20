const events = require("./events/events");
const allTalksFunc = require("./allTalks");

module.exports = () => {
  const allTalks = allTalksFunc();

  return events.map((event) => {
    return {
      ...event,
      talks: allTalks.filter((talk) => talk.eventId === event.eventId),
    };
  });
};
