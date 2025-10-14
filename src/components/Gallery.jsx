import React, {useState} from 'react';
import CardNavbar from './CardNavbar';
import CardList from './CardList';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import './css/Gallery.css';

/**
 * The Gallery page component.
 * 
 * @param {object[]} items - An array of media items to display.
 * @returns {JSX.Element} The rendered home page.
 */
function Gallery({ items }) {
  const language = useLanguageStore((state) => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;
  const [showMedia, setShowMedia] = useState(true);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>{translations.galleryTitle}</h2>
        <button
          className={`toggle-button ${showMedia ? "hide" : "show"}`}
          onClick={() => setShowMedia((prev) => !prev)}
        >
          {showMedia ? '−' : '+'}
        </button>
      </div>

      <CardNavbar items={items} />
      <CardList items={items} showMedia={showMedia} />
    </div>
  );
}

export default React.memo(Gallery);
