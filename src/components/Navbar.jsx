import React, { useState, useCallback, useRef, useEffect } from 'react';
import useLanguageStore from '../store/languageStore';
import navbarContent from '@content/navbarTranslations';
import './css/Navbar.css';

/**
 * A responsive navigation bar component.
 * 
 * @param {object[]} items - An array of navigation link objects.
 * @param {string} appName - The name of the application.
 * @param {string} [props.logoLink] - An optional external link for the logo.
 * @param {string} icon - The icon to display next to the app name.
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Navbar({ items, appName, logoLink, icon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useHamburger, setUseHamburger] = useState(false);
  const language = useLanguageStore((state) => state.language);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  // If logoLink is passed, open it in new tab. Else, go to homepage (/)
  const href = logoLink ?? '/';

  const translations = navbarContent[language.code] || navbarContent.en;

  useEffect(() => {
    const checkWidth = () => {
      if (navRef.current && logoRef.current && linksRef.current) {
        const navWidth = navRef.current.clientWidth;
        const logoWidth = logoRef.current.clientWidth;
        const linksWidth = linksRef.current.scrollWidth;
        const availableSpace = navWidth - logoWidth;
        
        // 40 is for the desired gap
        if (linksWidth > availableSpace - 40) {
          setUseHamburger(true);
        } else {
          setUseHamburger(false);
        }
      }
    };

    // Check on initial render and when dependencies change
    checkWidth();

    // Add event listener for window resize
    window.addEventListener('resize', checkWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [items, language]); // Rerun when items or language change

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Helper to check if the icon is a URL/path or an emoji
  const isImagePath = (icon) => typeof icon === 'string' && (icon.includes('/') || icon.includes('.'));

  return (
    <nav className="navbar" ref={navRef}>
      <a
        href={href}
        className="navbar-logo"
        target={logoLink ? '_blank' : '_self'}
        rel={logoLink ? 'noopener noreferrer' : undefined}
        ref={logoRef}
      >
        {icon && (
          isImagePath(icon)
            ? <img src={icon} alt={`${appName} logo`} className="navbar-icon" />
            : <span className="navbar-icon">{icon}</span>
        )}
        {appName}
      </a>

      <div className="menu-container">
        <button className={`hamburger-button ${useHamburger ? 'visible' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </button>

        <div ref={linksRef} className={`navbar-links ${useHamburger ? 'hamburger-mode' : ''} ${isMenuOpen ? 'open' : ''}`}>
          {items.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="navbar-link"
              onClick={closeMenu} // Close menu on link click
            >
              {translations[item.label]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
