import React from "react";
import "./css/ContactInfo.css";

const ContactInfo = ({ address, email, scrollDuration = 50 }) => {
  const items = [`📍 ${address}`, `✉️ ${email}`];

  return (
    <div className="contact-info-ticker">
      <div
        className="ticker-content"
        style={{
          animation: `scroll ${scrollDuration}s linear infinite`,
        }}
      >
        {items.map((item, index) => (
          <span className="ticker-item" key={index}>
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span className="ticker-item" key={`dup-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};


export default ContactInfo;
