module.exports = function () {
  let allSponsors = [];

  require("fs")
    .readdirSync(`${__dirname}/sponsors`)
    .forEach(function (file) {
      if (!file.endsWith(".json")) return;

      try {
        const sponsors = require(`${__dirname}/sponsors/${file}`);
        allSponsors = allSponsors.concat(sponsors);
      } catch (err) {
        console.error("error reading sponsor json", file);
        throw err;
      }
    });

  return allSponsors;
};
