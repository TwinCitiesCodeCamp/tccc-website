module.exports = {
  eleventyComputed: {
    pageTitle: {
      title: data => {
       return data.talk.title
      }
    }
  }
}