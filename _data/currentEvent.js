const eventsFunc = require('./allEvents')
const currentEventId = null;

module.exports = () => {
  return eventsFunc().find(e => e.eventId === currentEventId);
}