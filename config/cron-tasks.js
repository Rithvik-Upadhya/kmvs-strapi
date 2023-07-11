// run custom image processing pipeline
const { optimizeImages, cleanupImages } = require("../processImages");

module.exports = {
  optimizeImages: {
    task: async ({ strapi }) => {
      await optimizeImages();
    },
    options: {
      rule: "0 2 * * *",
      tz: "Asia/Kolkata",
    },
  },
  cleanupImages: {
    task: async ({ strapi }) => {
      await cleanupImages();
    },
    options: {
      rule: "0 4 * * *",
      tz: "Asia/Kolkata",
    },
  },
};
