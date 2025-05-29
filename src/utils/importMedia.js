// Get all image and video files in /assets, associate
// with name extracted from file's name, export for use

const mediaFiles = import.meta.glob('../assets/*.{mp4,jpg,jpeg,png,svg,webp,gif}', { eager: true });
const mediaMap = {};

for (const path in mediaFiles) {
  const name = path.match(/\/([\w-]+)\.(mp4|jpg|jpeg|png|svg|webp|gif)$/i)[1];
  mediaMap[name] = mediaFiles[path].default;
}

export default mediaMap;
