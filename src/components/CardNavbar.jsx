import { formatDate } from '../utils/format';

import './css/CardNavbar.css';

// Each item has anchorId named by date matching tanchorId
// in MediaCard. Allows scrolling to that MediaCard
const CardNavbar = ({ items }) => {
  return (
    <div className="media-nav-bar">
      {items.map((item, index) => {
        const anchorId = `#card-${item.date.replaceAll("-", "")}`;
        return (
          <a
            key={item.id}
            href={anchorId}
            className="nav-section"
            style={{ backgroundColor: getColor(index) }}
          >
            {formatDate(item.date)}
          </a>
        );
      })}
    </div>
  );
};

const getColor = (index) => {
  const colors = [
    'rgba(255, 140, 0, 0.8)',   
    'rgba(0, 191, 255, 0.8)',   
    'rgba(50, 205, 50, 0.8)',   
    'rgba(255, 105, 180, 0.8)',  
    'rgba(138, 43, 226, 0.8)'
  ];
  return colors[index % colors.length];
};

export default CardNavbar;