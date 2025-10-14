import React from 'react';
import ReactPlayer from 'react-player';

import "./css/MediaItem.css";

/**
 * A wrapper component that displays either a video or an image.
 * 
 * @param {object} item - The media item to display.
 * @param {string} item.src - The source URL of the media.
 * @param {string} item.type - The type of media ('video' or 'image').
 * @param {string} item.title - The title or alt text for the media.
 * @returns {JSX.Element} The rendered media item.
 */
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

export default React.memo(MediaItem);
