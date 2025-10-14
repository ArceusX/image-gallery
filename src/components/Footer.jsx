import React, { useCallback } from 'react';
import GithubLink from './GithubLink';
import './css/Footer.css';

/**
 * @file Footer.jsx
 * @description A responsive footer component for the application.
 * @component
 * @description
 * Displays a three-column layout containing the app's icon and name,
 * author and contact information, and a link to the project's GitHub repository.
 * Clicking the left section scrolls the page to the top.
 * @param {string} icon - The icon to display on the left.
 * @param {string} appName - The name of the application.
 * @param {string} author - The name of the author.
 * @param {string} [contact=""] - The author's contact information.
 * @param {string} [link="https://github.com/facebook/react"] - URL for the GitHub repository.
 * @param {number} [size=40] - A base size in pixels to scale the footer elements.
 * @returns {JSX.Element}
 */
const Footer = ({ icon, appName, author, contact = "", github = "https://github.com/facebook/react", size = 60 }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Helper to check if the icon is a URL/path or an emoji
  const isImagePath = (icon) => typeof icon === 'string' && (icon.includes('/') || icon.includes('.'));

  return (
    <footer className="footer">
      <div className="footer-left" onClick={scrollToTop}>
        {icon && (
          isImagePath(icon)
            ? <img src={icon} alt={`${appName} logo`} className="footer-icon" style={{ height: `${size}px` }} />
            : <span className="footer-icon" style={{ fontSize: `${size}px` }}>{icon}</span>
        )}
        <span style={{ fontSize: `${size / 3}px` }}>
          {appName}
        </span>
      </div>
      <div className="footer-right">
        <div style={{ marginRight: '2rem', fontSize: `${size / 4}px`, textAlign: 'right' }}>
          <span className="author">Code By <b>{author}</b></span>
          <br />
          <span className="
            ">{contact}</span>
        </div>
        <GithubLink href={github} size={0.75 * size} />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
