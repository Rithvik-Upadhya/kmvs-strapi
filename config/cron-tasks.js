const { optimizeImages, cleanupImages } = require("../processImages");

module.exports = {
  optimizeImages: {
    task: async ({ strapi }) => {
      await optimizeImages();
    },
    options: {
      rule: "25 5 * * *",
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
