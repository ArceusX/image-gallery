import { useState } from 'react';

import './css/ContactForm.css';


// Form that allows viewer to send message to site admin
// sendEmail Netlify function handles request by using SendGrid
const ContactForm = ({address, siteName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
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
  };

  return (
    <>
    <h3>Contact Us At <div className="address">{address ? `${address}` : ''}</div></h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit">Send</button>

      {status && <p>{status}</p>}
    </form>
    </>
  );
};

export default ContactForm;
