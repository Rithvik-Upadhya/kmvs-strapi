const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const optimizeImages = async () => {
  const images = glob.sync(
    path.join(
      __dirname,
      "public/uploads/{large_,medium_,small_}*.{jpg,JPG,png,PNG,jpeg,JPEG}"
    )
  );

  for (let image of images) {
    try {
      const filename = path.basename(image, path.extname(image));
      const outputPath = path.join(
        __dirname,
        `public/uploads/webp/${filename}.webp`
      );

      if (fs.existsSync(outputPath)) continue;

      const originalFileSize = fs.statSync(image).size; // Get original file size

      const webpBuffer = await sharp(image).webp({ quality: 80 }).toBuffer(); // Convert to webp and get buffer

      if (webpBuffer.length < originalFileSize) {
        fs.writeFileSync(outputPath, webpBuffer); // Only write the webp file if it's smaller
      }
    } catch (err) {
      console.error(`Failed to optimize image ${image}:`, err);
    }
  }
};

const cleanupImages = () => {
  const webpImages = glob.sync(
    path.join(__dirname, "public/uploads/webp/*.webp")
  );

  for (let webpImage of webpImages) {
    try {
      const originalImageName = path.basename(webpImage, ".webp");
      const originalImagePath = path.join(
        __dirname,
        `public/uploads/${originalImageName}`
      );

      const originalImageExists = [
        ".jpg",
        ".JPG",
        ".png",
        ".PNG",
        ".jpeg",
        ".JPEG",
      ].some((ext) => fs.existsSync(originalImagePath + ext));

      if (!originalImageExists) {
        fs.unlinkSync(webpImage);
      }
    } catch (err) {
      console.error(`Failed to clean up image ${webpImage}:`, err);
    }
  }
};

module.exports = { optimizeImages, cleanupImages };
