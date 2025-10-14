import React, { useState, useCallback } from 'react';
import { Fade } from 'react-awesome-reveal';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import './css/Contact.css';

/**
 * A contact form component that sends an email to the site administrator.
 * 
 * @param {string} address - The email address to display.
 * @param {string} siteName - The name of the site, used in the email subject.
 * @returns {JSX.Element} The rendered contact form.
 */
const Contact = ({address, siteName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const language = useLanguageStore((state) => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Wrap message's content and metadata in object to be
    // passed to sendEmail Netlify function as JSON object
    const data = { name, email, subject, message, siteName, address};

    // Send request to Netlify server, to be handled by sendEmail
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('An error occurred. Please try again.');
    }
  }, [name, email, subject, message, siteName, address]);

  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleSubjectChange = useCallback((e) => setSubject(e.target.value), []);
  const handleMessageChange = useCallback((e) => setMessage(e.target.value), []);

  return (
    <Fade triggerOnce>
      <div className="contact-header">
        <h2>{translations.contactTitle}</h2>
        <div className="address">{address ? `${address}` : ''}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={translations.contactForm.namePlaceholder}
          value={name}
          onChange={handleNameChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder={translations.contactForm.emailPlaceholder}
          value={email}
          onChange={handleEmailChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder={translations.contactForm.subjectPlaceholder}
          value={subject}
          onChange={handleSubjectChange}
          required
        />

        <textarea
          name="message"
          placeholder={translations.contactForm.messagePlaceholder}
          value={message}
          onChange={handleMessageChange}
          required
        />

        <button type="submit">{translations.contactForm.sendButton}</button>

        {status && <p>{status}</p>}
      </form>
    </Fade>
  );
};

export default React.memo(Contact);
