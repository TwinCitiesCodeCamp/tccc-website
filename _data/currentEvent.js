const eventsFunc = require('./allEvents')
const currentEventId = 'tccc24';

module.exports = () => {
  return eventsFunc().find(e => e.eventId === currentEventId);
}