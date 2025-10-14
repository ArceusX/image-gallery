import React, { useMemo, useCallback } from 'react';
import { getColor } from '../utils/colors';
import useLanguageStore from '../store/languageStore';
import { formatDate } from '../utils/format';
import uiTranslations from '@content/uiTranslations';
import useFilterStore from '../store/filterStore';
import TagFilter from './TagFilter';
import './css/CardNavbar.css';

/**
 * A navigation bar for the media card list.
 * Allows users to jump to a specific card by date and filter by tags.
 * 
 * @param {object[]} items - The media items to be displayed in the card list.
 * @returns {JSX.Element} The rendered card navigation bar.
 */
const CardNavbar = ({ items }) => {
  const language = useLanguageStore((state) => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;
  const { filteredItems } = useFilterStore();

  const itemsWithAnchorIds = useMemo(() => {
    const dateCounts = {};
    return filteredItems.map(item => {
      const date = item.date;
      dateCounts[date] = (dateCounts[date] || 0) + 1;
      return {
        ...item,
        anchorId: `#card-${date}-${dateCounts[date]}`
      };
    });
  }, [filteredItems]);

  const handleSelect = useCallback((e) => {
    const anchorId = e.target.value;
    if (anchorId) {
      window.location.href = anchorId;
    }
  }, []);

  return (
    <div className="media-nav-bar">
      <div className="nav-wrapper">
        <div className="nav-section">
          <label htmlFor="date-select" className="nav-label">{translations.cardNavbar.goTo}</label>
          <select id="date-select" onChange={handleSelect} className="nav-select nav-input">
            <option value="">{translations.cardNavbar.selectDate}</option>
            {itemsWithAnchorIds.map((item, index) => (
              <option
                key={item.id}
                value={item.anchorId}
                style={{ backgroundColor: getColor(index), color: 'black' }}
              >
                {formatDate(item.date, language.code)}
              </option>
            ))}
          </select>
        </div>
        <TagFilter items={items} />
      </div>
    </div>
  );
};
export default React.memo(CardNavbar);