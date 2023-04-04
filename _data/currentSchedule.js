const { parse, parseISO, setHours, setMinutes, format } = require("date-fns");
const currentEventFunc = require("./currentEvent");

const extraThings = [
  {
    hour: 8,
    title: "Check-in and Breakfast (requires a breakfast ticket)",
    isExtra: true,
  },
  {
    hour: 8.75,
    title: "Welcome and Opening Remarks (Garden Room)",
    isExtra: true,
  },
  {
    hour: 11.25,
    title: "Lunch Break",
    isExtra: true,
  },
  {
    hour: 15,
    title: "Closing Remarks and Prize Drawings (Garden Room)",
    isExtra: true,
  },
];

module.exports = () => {
  const currentEvent = currentEventFunc();
  if (!currentEvent) return [];

  const { talks } = currentEvent;
  const talksWithExtras = talks.concat(extraThings);

  const uniqueHours = talksWithExtras.reduce((acc, talk) => {
    const { hour } = talk;
    if (acc.includes(hour)) {
      return acc;
    }
    return acc.concat(hour);
  }, []);

  const hours = uniqueHours
    .map((hour) => {
      const hourTalks = talksWithExtras
        .filter((t) => t.hour === hour)
        .sort((a, b) => {
          return a.room < b.room ? -1 : 1;
        });

      const hourVal = Math.trunc(hour);
      const minuteVal = (hour % 1) * 60;

      const parsed = parseISO(currentEvent.dateTime, new Date());
      const withHours = setHours(parsed, hourVal);
      const withMinutes = setMinutes(withHours, minuteVal);
      const timeDisplay = format(withMinutes, "h:mm a");

      return {
        hour,
        timeDisplay,
        talks: hourTalks,
        isExtra: hourTalks[0].isExtra,
      };
    })
    .sort((a, b) => {
      return a.hour < b.hour ? -1 : 1;
    });

  const uniqueRooms = talks
    .reduce((acc, talk) => {
      const { room } = talk;
      if (acc.includes(room)) {
        return acc;
      }
      return acc.concat(room);
    }, [])
    .sort((a, b) => {
      return a < b ? -1 : 1;
    });

  return { hours, uniqueRooms, roomCount: uniqueRooms.length };
};
