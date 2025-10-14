/**
 * @file siteInfo.js
 * @description Site configuration.
 * This file contains the configuration data for the application.
 * Customize these values to configure the site's metadata, navigation, internationalization, and features for a production environment.
 */
import appIcon from '../../assets/appIcon.png';
import banner from '../../assets/banner.jpeg';

const siteInfo = {
  /**
   * @property {object} meta - General site metadata.
   * @property {string} meta.appName - The name of the application, displayed in the navbar and footer.
   * @property {string} meta.siteName - The full name of the site, used in email subjects.
   * @property {string} meta.icon - The site's icon, displayed in the navbar and footer.
   */
  meta: {
    appName: "Cao Dai",
    siteName: "Image Gallery Site",
    icon: appIcon,
    bannerImage: banner,
    bannerText: "Welcome To Thánh Thất Cao Đài",
  },

  /**
   * @property {object} personal - Personal and contact information.
   * @property {string} personal.author - Name, displayed in the footer.
   * @property {string} personal.authorEmail - Email, displayed in the footer.
   * @property {string} personal.github - A link to the author's GitHub profile.
   * @property {string} personal.contactEmail - The recipient email for the contact form.
   *   This address should be registered with an email service like SendGrid to handle form submissions.
   */
  personal: {
    author: "Triet Lieu",
    authorEmail: "trielieu@gmail.com",
    github: "https://github.com/ArceusX",
    address: "8791 Orangewood Ave, Garden Grove, CA 92841",
    contactEmail: "PUT_OWN__EMAIL@gmail.com",
  },

  /**
   * @property {object[]} navbarPaths - Defines the links in the main navigation bar.
   * @property {string} navbarPaths[].path - The URL path for the link (e.g., "/about").
   * @property {string} navbarPaths[].label - The key for the link's text, used for translation.
   */
  navbarPaths: [
    { path: "/about", label: "About" },
    { path: "/calendar", label: "Calendar" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ],
  localeMap: {
    en: "en-US",
    es: "es-ES",
    cn: "zh-CN",
  },

  /**
   * @property {object[]} languages - Defines the languages available in the language selector.
   * @property {string} languages[].code - The ISO 639-1 language code (e.g., "en").
   * @property {string} languages[].name - The English name of the language.
   * @property {string} languages[].nativeName - The name of the language in its native script.
   * @property {string} languages[].flag - A URL to an image of the language's flag.
   */
  languages: [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "https://flagcdn.com/w40/gb.png"
    },
    {
      code: "es",
      name: "Spanish",
      nativeName: "Español",
      flag: "https://flagcdn.com/w40/es.png"
    },
    {
      code: "cn",
      name: "Chinese",
      nativeName: "中文",
      flag: "https://flagcdn.com/w40/cn.png"
    }
  ],

  /**
   * @property {object} fundraising - Configuration for the fundraising progress bar.
   * @property {boolean} fundraising.active - Set to true to display the progress bar.
   * @property {string} fundraising.mission - The fundraising mission statement.
   * @property {number} fundraising.raised - The total amount raised.
   * @property {number} fundraising.goal - The fundraising goal.
   * @property {number} fundraising.nDonors - The number of donors.
   */
  fundraising: {
    active: false,
    mission: "To build a community treehouse",
    raised: 5000,
    goal: 10000,
    nDonors: 26,
  },
};

export default siteInfo;
