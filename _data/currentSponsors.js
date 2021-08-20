const currentEventFunc = require("./currentEvent");
const allSponsorsFunc = require("./allSponsors");

module.exports = () => {
  const currentEvent = currentEventFunc();
  if (!currentEvent) return null;
  const { eventId } = currentEvent;

  const currentSponsors = allSponsorsFunc().filter(
    (s) => s.eventId === eventId
  );


  return {
    diamond: currentSponsors.filter((s) => s.level === "Diamond"),
    platinum: currentSponsors.filter((s) => s.level === "Platinum"),
    gold: currentSponsors.filter((s) => s.level === "Gold"),
    silver: currentSponsors.filter((s) => s.level === "Silver"),
    bronze: currentSponsors.filter((s) => s.level === "Bronze"),
  };
};
