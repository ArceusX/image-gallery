// Set values for parameters below to customize site

// navbarItems, logoText, author, repoLink are used in site-wide navbars
// logoText is used in top bar; author, repoLink used in bottom bar
// siteName is put in subject of emails that views send to
// site admin thru the contact page
const siteInfo = {
    navbarItems: ["About", "Contact", "Blog"],
    logoText: "Treehouse Guide 🏠",
    author: "Triet Lieu",
    repoLink: "https://github.com/ArceusX?tab=repositories",
    siteName: "Image Gallery Site",
};

// Email address you register with SendGrid to send emails
// Also used as address that receives contact messages from viewers
// Best to create a new address only for the app so your
// real everyday email won't be inundated with spam
// Of course, registered and recipient addresses can be different
// Passed to ContactForm Component in App.jsx
export const address = "PUT_YOUR_OWN_EMAIL@gmail.com";

// Parameters passed to ProgressBar to show fundraising
export const fundraising = {
    mission: "To build a community treehouse",
    raised: 5000,
    goal: 10000,
    nDonors: 26,
};

export default siteInfo;