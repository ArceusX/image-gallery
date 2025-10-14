import React, { useState, useCallback } from 'react';
import useLanguageStore from '../store/languageStore';
import './css/MediaCard.css';
import MediaItem from './MediaItem';
import { formatDate } from '../utils/format';
import { getColor } from '../utils/colors';
import { getEmoji } from '../utils/getEmoji';

/**
 * A card for displaying media content. Includes an expandable description and a modal for a larger view.
 * 
 * @param {object} item - The media item to display.
 * @param {number} index - The index of the card, used for styling.
 * @param {string} anchorId - The ID for the card's anchor link.
 * @param {boolean} isModal - Whether the card is currently in modal view.
 * @param {function} openModal - Function to open the modal.
 * @param {function} closeModal - Function to close the modal.
 * @param {function} onNext - Function to navigate to the next item in the modal.
 * @param {function} onPrev - Function to navigate to the previous item in the modal.
 * @returns {JSX.Element} The rendered media card.
 */

const MediaCard = ({ item, index, anchorId, openModal, showMedia }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const language = useLanguageStore((state) => state.language);

  const tags = [...new Set(item.tags)];

  const toggleText = useCallback((e) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="media-card" id={anchorId} onClick={openModal}>
      {/* Use first file as thumbnail */}
      {(showMedia || isExpanded) &&
      <MediaItem item={item.files[0]} isModal={false} />}

      <div className="card-text">
        <h2 style={{ backgroundColor: getColor(index) }}>
          {getEmoji(item.date)} {formatDate(item.date, language.code)}
        </h2>
        <div className="title-line">
          <h1>{item.title}</h1>
          <button onClick={toggleText} className="toggle-text-button">
            {isExpanded ? '−' : '+'}
          </button>
        </div>
        {isExpanded && <p>{item.text}</p>}
      </div>

      <div className="media-tags">
        {tags && tags.map((tag) => (
          <span key={tag} className="tag-box">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MediaCard);
