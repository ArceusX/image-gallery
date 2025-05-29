import MediaItem from '../components/MediaItem';

import './css/About.css';

// For each item, create section based on item.type
export default function About({ items }) {
  return (
    <div className="about-page">
      {items.map((item, index) => {
        if (item.type === 'text') {
          return (
            <section key={index} className="text-block">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </section>
          );
        } else if (item.type === 'image') {
          return (
            <section key={index} className="image-block">
              <img src={item.src} alt={item.alt || ''} />
              {item.caption && <p>{item.caption}</p>}
            </section>
          );
        } else if (item.type === 'video') {
            return (<section key={index} className="video-block">
              <MediaItem item={item} /> 
              {item.caption && <p>{item.caption}</p>}
            </section>);
        }
        return null;
      })}
    </div>
  );
}

