/**
 * @file LanguageSelector.jsx
 * @description A dropdown component for selecting the application language.
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import siteInfo from '@content/siteInfo.js';
import useLanguageStore from '../store/languageStore.js';
import './css/LanguageSelector.css';

/**
 * A dropdown component that allows the user to switch the application's language.
 * @returns {JSX.Element} The rendered language selector.
 */
const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const dropdownRef = useRef(null);

  const handleSelect = useCallback((lang) => {
    setLanguage(lang);
    setIsOpen(false);
  }, [setLanguage]);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="language-selector-container" ref={dropdownRef}>
      <button className="language-selector-button" onClick={toggleOpen}>
        <img src={language.flag} alt={`${language.name} flag`} className="language-flag" />
        <span>{language.nativeName}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="language-selector-list">
          {siteInfo.languages.map((lang) => (
            <li key={lang.name} onClick={() => handleSelect(lang)}>
              <img src={lang.flag} alt={`${lang.name} flag`} className="language-flag" />
              <span>{lang.nativeName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(LanguageSelector);