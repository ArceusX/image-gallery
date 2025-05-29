import "./css/Navbar.css";

// Items is string []. Each item should be paired with Route
// placed in App that goes to associated page or component
export default function Navbar ({items, logoText, logoLink }) {

  // If logoLink is passed, open it in new tab. Else, go to homepage (/)
  const href = logoLink ?? "/";

  return (
    <nav className="navbar">
      <a
        href={href}
        className="navbar-logo"
        target={ logoLink ? "_blank" : "_self"}
        rel={ logoLink ? "noopener noreferrer" : undefined} >
        {logoText}
      </a>
      <div className="navbar-links">
        {/* Regex to convert to proper url. eg "Contact-Us" --> "contact-us"*/ }
        {items.map((item) => (
          <a key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="navbar-link">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
