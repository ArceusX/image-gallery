import React from 'react';
import { Fade } from 'react-awesome-reveal';
import MediaItem from '../components/MediaItem';

import './css/About.css';

const AboutSection = React.memo(({ item }) => {
  if (item.type === 'text') {
    return (
      <section className="text-block">
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </section>
    );
  } else if (item.type === 'image') {
    return (
      <section className="image-block">
        <img src={item.src} alt={item.alt || ''} />
        {item.caption && <p>{item.caption}</p>}
      </section>
    );
  } else if (item.type === 'video') {
    return (
      <section className="video-block">
        <MediaItem item={item} />
        {item.caption && <p>{item.caption}</p>}
      </section>
    );
  }
  return null;
});

/**
 * The About page component.
 * Renders a series of sections based on the provided data items.
 * @param {Object[]} items - An array of content items for the About page.
 * @returns {JSX.Element} The rendered About page.
 */
function About({ items }) {
  return (
    <div className="about-page">
      <Fade cascade damping={0.1} triggerOnce>
        {items.map((item, index) => (
          <AboutSection key={index} item={item} />
        ))}
      </Fade>
    </div>
  );
}

export default React.memo(About);

