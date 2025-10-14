import React, { useState, useCallback, useEffect, useMemo } from 'react';
import useFilterStore from '../store/filterStore';
import MediaCard from './MediaCard';
import MediaItem from './MediaItem';
import { Fade } from 'react-awesome-reveal';
import './css/CardList.css';

const CardList = ({ showMedia }) => {
  const { filteredItems } = useFilterStore();
  const [activeIndex, setActiveIndex] = useState(null);
  const [fileIndex, setFileIndex] = useState(0); // index of current file in modal

  // Handle global key events
  const handleKeyDown = useCallback(
    (e) => {
      if (activeIndex === null) return;

      const currentItem = filteredItems[activeIndex];
      const fileCount = currentItem.files?.length || 1;

      if (e.key === 'ArrowRight' && fileCount > 1) {
        setFileIndex((prev) => (prev + 1) % fileCount);
      }

      if (e.key === 'ArrowLeft' && fileCount > 1) {
        setFileIndex((prev) => (prev - 1 + fileCount) % fileCount);
      }

      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        setActiveIndex(null);
        setFileIndex(0);
      }
    },
    [activeIndex, filteredItems]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const itemsWithAnchorIds = useMemo(() => {
    const dateCounts = {};
    return filteredItems.map((item) => {
      const date = item.date;
      dateCounts[date] = (dateCounts[date] || 0) + 1;
      return {
        ...item,
        anchorId: `card-${date}-${dateCounts[date]}`,
      };
    });
  }, [filteredItems]);

  const openModal = useCallback((index) => {
    setActiveIndex(index);
    setFileIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    setFileIndex(0);
  }, []);

  const onNextFile = useCallback(() => {
    const current = filteredItems[activeIndex];
    if (!current) return;
    const fileCount = current.files?.length || 1;
    if (fileCount > 1) setFileIndex((prev) => (prev + 1) % fileCount);
  }, [activeIndex, filteredItems]);

  const onPrevFile = useCallback(() => {
    const current = filteredItems[activeIndex];
    if (!current) return;
    const fileCount = current.files?.length || 1;
    if (fileCount > 1) setFileIndex((prev) => (prev - 1 + fileCount) % fileCount);
  }, [activeIndex, filteredItems]);

  if (itemsWithAnchorIds.length === 0) {
    return <div className="no-items-message">No items match the current filter.</div>;
  }

  const currentItem = activeIndex !== null ? filteredItems[activeIndex] : null;
  const fileCount = currentItem?.files?.length || 1;

  return (
    <>
      <div className="card-list">
        {itemsWithAnchorIds.map((item, index) => (
          <Fade key={item.id} cascade damping={0.1} triggerOnce duration={2000}>
            <MediaCard
              item={item}
              index={index}
              anchorId={item.anchorId}
              openModal={() => openModal(index)}
              showMedia={showMedia}
            />
          </Fade>
        ))}
      </div>

      {/* Shared Modal */}
      {currentItem && (
        <div className="media-overlay" onClick={closeModal}>
          <div className="media-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✕</button>

            {/* Display current file */}
            <MediaItem
              item={currentItem.files[fileIndex]}
              isModal={true}
            />

            {/* Show arrows only if more than one file */}
            {fileCount > 1 && (
              <>
                <button className="nav-prev-button" onClick={onPrevFile}>&lt;</button>
                <button className="nav-next-button" onClick={onNextFile}>&gt;</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
