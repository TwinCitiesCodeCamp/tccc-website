module.exports = function () {
  let allTalks = [];

  require("fs")
    .readdirSync(`${__dirname}/talks`)
    .forEach(function (file) {
      if (!file.endsWith(".json")) return;

      try {
        const talks = require(`${__dirname}/talks/${file}`);
        allTalks = allTalks.concat(talks);
      } catch (err) {
        console.error("error reading talk json", file);
        throw err;
      }
    });

  const talksWithSlugs = allTalks.map((talk) => {
    try {
      const { eventId, title } = talk;

      const slug = title
        .replace(/\//g, "")
        .replace(/'/g, "")
        .replace(/#/g, "")
        .replace(/\?/g, "")
        .replace(/@/g, "")
        .replace(/\-/g, "")
        .replace(/\&/g, "")
        .replace(/\:/g, "")
        .replace(/\,/g, "")
        .replace(/\./g, "")
        .replace(/\;/g, "")
        .replace(/\+/g, "")
        .replace(/\n/g, "")
        .replace(/\t/g, "")
        .replace(/   /g, " ")
        .replace(/  /g, " ")
        .replace(/ /g, "-");

      const permalink = `/events/${eventId}/${slug}/index.html`;
      const hourParts = talk.hour.toString().split(".");
      const time = `${hourParts[0]}:${
        hourParts.length > 1
          ? ((+hourParts[1] / 100) * 60).toFixed(0).padEnd(2, "0")
          : "00"
      }`;

      return {
        ...talk,
        hasPicture: !!talk.pictureUrl && talk.pictureUrl.trim() !== "",
        slug,
        permalink,
        time,
      };
    } catch (err) {
      console.log("error on talk", talk);
      throw err;
    }
  });

  return talksWithSlugs;
};
