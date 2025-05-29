import './css/MediaCard.css';

import MediaItem from './MediaItem';
import { formatDate } from '../utils/format';

const MediaCard = ({ item, isModal, openModal, closeModal, onNext, onPrev }) => {
  const anchorId = `card-${item.date.replaceAll("-", "")}`;

  return (
    <>
      {/* Main Card */}
      <div className="media-card" id={anchorId} onClick={openModal}>
        <MediaItem item={item} isModal={false} />
        <div className="card-text">
          <h2>📋 {formatDate(item.date)}</h2>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>

      {/* Modal. Overlayed over page */}
      {isModal && (
        <div className="media-overlay" onClick={closeModal}>
          <div className="media-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✕</button>
            <MediaItem item={item} isModal={true} />
            {item.type === 'image' && (
              <>
                <button
                  className="nav-prev-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                >
                  &lt;
                </button>
                <button
                  className="nav-next-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                >
                  &gt;
                </button>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default MediaCard;