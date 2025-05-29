import MediaCard from './MediaCard';
import { useState, useEffect } from 'react';

import './css/CardList.css';

const CardList = ({ items }) => {
  // If null, no popout modal (ie zoomed-in window) is open
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          // Increment 1; if not possible, wrap to start
          prev < items.length - 1 ? prev + 1 : 0 // Wrap to start
        );
      }

      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          // Decrement 1; if not possible, wrap to end
          prev > 0 ? prev - 1 : items.length - 1
        );
      }
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        setActiveIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length]);

  return (
    <div className="media-list">
      {items.map((item, index) => (
        <MediaCard
          key={item.id}
          item={item}
          isModal={index === activeIndex}
          openModal={() => setActiveIndex(index)}
          closeModal={() => setActiveIndex(null)}
          onNext = {() => setActiveIndex(
            (prev) => prev < items.length - 1 ? prev + 1 : 0
          )}
          onPrev = {() => setActiveIndex(
            (prev) => prev > 0 ? prev - 1 : items.length - 1
          )}
        />
      ))}
    </div>
  );
};

export default CardList;
