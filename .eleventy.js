module.exports = (config) => {
  config.addPassthroughCopy({
    "src/_includes/styles.css": "styles.css",
    "src/_includes/js/": "js/",
  });

  /**
   * A filter for building extension, x, URLs
   * @example 'group-maker' | xUrl
   */
  config.addFilter('xUrl', page => {
    if (page === '/') return '/build/index.html'
    return `/build/${page}/index.html`
  })

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
