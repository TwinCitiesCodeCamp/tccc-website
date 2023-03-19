module.exports = {
  eleventyComputed: {
    pageTitle: {
      title: data => {
       return data.event.seasonYear
      }
    }
  }
}