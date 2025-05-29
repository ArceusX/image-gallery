
// Need to have run `npm install @sendgrid/mail`
const sgMail = require('@sendgrid/mail');

// Register with SendGrid, create API Key, and
// on the Netlify web GUI, add key to environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const { name, email, subject, message, siteName, address, sendGridAddress } = JSON.parse(event.body);

  const msg = {
    to: address,   // Inbox address to receive messages
    from: address, // Address registed with SendGrid to send emails
    subject: `Message for [${siteName}]`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
