import React from 'react';

/**
 * @file GithubLink.jsx
 * @description A component that renders a clickable GitHub icon.
 * @component
 * @description
 * Displays the GitHub logo as an SVG icon wrapped in an anchor tag.
 * It links to the provided URL and includes accessibility attributes.
 * @param {string} href - The URL for the link's destination.
 * @param {number} [size=24] - The width and height of the icon in pixels.
 * @returns {JSX.Element}
 */
function GithubLink({ href , size = 24 }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open GitHub"
      title="GitHub"
      style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.95-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.64.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
      </svg>
    </a>
  );
}

export default React.memo(GithubLink);
