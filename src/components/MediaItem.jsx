import ReactPlayer from 'react-player';

import "./css/MediaItem.css";

// Wrapper for video or image, depending on item.type
const MediaItem = ({ item: { src, type, title } }) => (
  <div className="media-container">
    {type === "video" ? (
      <ReactPlayer
        url={src}
        controls
        playing={false}
        muted={false}
        className="media-video"
      />
    ) : type === "image" ? (
      <img src={src} alt={title} className="media-image" />
    ) : null}
  </div>
);

export default MediaItem;
