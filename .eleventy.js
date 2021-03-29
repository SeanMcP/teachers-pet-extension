module.exports = (config) => {
  config.addPassthroughCopy({ "src/_includes/styles.css": "styles.css" });

  /**
   * Example: {% link 'group-maker/' %}Link to group maker{% endlink %}
   */
  config.addPairedShortcode(
    "link",
    (content, page) =>
      `<a href="/build/${page ? page : ""}index.html">${content}</a>`
  );

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
