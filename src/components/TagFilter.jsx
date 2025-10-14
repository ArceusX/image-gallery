import React, { useEffect, useState, useCallback } from 'react';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import useFilterStore from '../store/filterStore';
import './css/TagFilter.css';

/**
 * A component that provides a tag-based filtering UI.
 * Includes a search input with autocomplete suggestions and a list of selected tags.
 *
 * @param {object[]} items - The items to be filtered.
 * @returns {JSX.Element} The rendered tag filter component.
 */
const TagFilter = ({ items }) => {
  const language = useLanguageStore((state) => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;
  const {
    searchInput,
    setSearchInput,
    addTag,
    removeTag,
    selectedTags,
    suggestions,
    setItems,
  } = useFilterStore();
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);

  useEffect(() => {
    setItems(items);
  }, [items, setItems]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchInput(debouncedSearchInput);
    }, 200); // 200ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchInput, setSearchInput]);

  const handleInputChange = useCallback((e) => {
    setDebouncedSearchInput(e.target.value);
  }, []);

  const handleSuggestionClick = useCallback((suggestion) => {
    addTag(suggestion);
    setDebouncedSearchInput('');
  }, [addTag]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      addTag(suggestions[0]);
      setDebouncedSearchInput('');
    }
  }, [addTag, suggestions]);

  const handleRemoveTag = useCallback((tag) => {
    removeTag(tag);
  }, [removeTag]);

  return (
    <>
      <div className="tag-filter nav-section">
        <label htmlFor="tag-search" className="nav-label">{translations.cardNavbar.filterTags}</label>
        <div className="search-container">
          <input
            id="tag-search"
            type="text"
            value={debouncedSearchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="nav-select nav-input"
            placeholder={translations.cardNavbar.tagSearchPlaceholder}
          />
          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <div className="selected-tags">
          <label className="nav-label">&nbsp;</label>
          {selectedTags.map((tag, index) => (
            <div key={index} className="selected-tag" onClick={() => handleRemoveTag(tag)}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(TagFilter);
