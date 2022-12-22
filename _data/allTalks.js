module.exports = function () {
  let allTalks = [];

  require("fs")
    .readdirSync(`${__dirname}/talks`)
    .forEach(function (file) {
      if (!file.endsWith('.json')) return;

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

      const slug =
        title
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

      const permalink = `/events/${eventId}/${slug}/index.html`

      return {
        ...talk,
        hasPicture: !!talk.pictureUrl && talk.pictureUrl.trim() !== '',
        slug,
        permalink
      };
    } catch (err) {
      console.log("error on talk", talk);
      throw err;
    }
  });

  return talksWithSlugs;
};
