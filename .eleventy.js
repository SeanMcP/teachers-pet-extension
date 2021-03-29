module.exports = (config) => {
  config.addPassthroughCopy({ "src/_includes/styles.css": "styles.css" });

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
