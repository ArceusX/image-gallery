# React Image Gallery Scrolldown App

Your everyday gallery, that you can adopt to a variety of uses: as a "How To" guide,
a photo blog, or portfolio showcase. Video is supported and interface is mobile-friendly.

Everything is coded as a **React** component, so you can easily add new images with one line of code.

Other pages & functionalities facilitate a full blog. See **Features** 

## How to Use

This repository contains an extended version of the original application, with a focus on content customization. The majority of the JSX code is reusable and does not need to be modified.

### Content Customization

The primary area for customization is the `src/content` directory. Inside, you will find two folders:

*   **`live`**: This folder contains the content that is currently displayed on the live version of the application. You should update the files in this directory to reflect your own content.
*   **`sample`**: This folder serves as a reference, providing example content to guide you. It is recommended to keep this folder as is for future reference.

### Running Different Content Versions

You can run the application with either the `live` or `sample` content. The `package.json` file includes scripts to facilitate this:

*   `npm run dev`: This command will run the application with the content from the `live` directory.
*   `npm run dev:sample`: This command will run the application with the content from the `sample` directory.

This setup allows you to test and view your changes with the sample content before deploying the live version.

## Pages

The application is divided into several pages, each serving a distinct purpose:

*   **Home**: The main gallery page, displaying a filterable list of media cards.
*   **About**: A page to share information about yourself or your project, supporting text, images, and videos.
*   **Blog**: A blog section with a list of posts that can be filtered by tags. Each post can contain text, images, and videos.
*   **Contact**: A contact form that allows users to send messages to a specified email address.

## Features

This application comes with a rich set of features to enhance the user experience:

*   **Interactive Media Gallery**:
    *   **Modal View**: Clicking on a media card opens a modal for a larger view.
    *   **Keyboard Navigation**: Navigate between items in the modal using the left and right arrow keys. Close the modal with the `Esc` or `Space` key.
    *   **Expandable Descriptions**: Media card descriptions can be expanded and collapsed.
*   **Filtering and Navigation**:
    *   **Tag-Based Filtering**: Filter media items and blog posts by tags.
    *   **Date Navigation**: The gallery page has a navigation bar that allows you to jump to a specific media card by its date.
*   **Multilingual Support**:
    *   **Language Selector**: A dropdown menu allows users to switch between different languages.
*   **Blog**:
    *   **Post Previews**: The blog page displays a list of post previews.
    *   **Full Post View**: Clicking "Read More" on a preview takes you to the full blog post.
*   **Contact Form**:
    *   **Email Integration**: The contact form is integrated with SendGrid to send emails via a Netlify serverless function.
*   **Responsive Design**:
    *   **Mobile-Friendly**: The application is designed to be responsive and work well on mobile devices.
    *   **Responsive Footer**: The footer includes the app's name, author information, and a link to the GitHub repository.

## Key Features Explained

### Tag System and Filtering

The application features a robust tagging system to organize and filter content on the **Home** and **Blog** pages.

*   **How it Works**: You can add an array of tags to any media item or blog post within your content files (e.g., `contentMedia_en.js`). The `TagFilter` component then uses these tags to provide a powerful filtering interface.
*   **Interactive Filtering**: The filter bar includes a search input with autocomplete, suggesting available tags as you type. You can click a suggestion or press `Enter` to add it as a filter.
*   **Real-Time Results**: The list of media cards or blog posts updates instantly, showing only the items that match **all** of the selected tags.
*   **Managing Filters**: Selected tags are clearly displayed. To remove a filter, simply click on the tag you wish to remove.

### Quick Navigation on Home Page

To enhance navigation within the media gallery, the Home page includes a special scrolldown feature.

*   **"Go To" Dropdown**: Located in the navigation bar above the media cards, this dropdown menu is populated with the dates of all the media items in the gallery.
*   **Instant Scrolling**: When you select a date from the dropdown, the page automatically and smoothly scrolls to the corresponding media card. This is achieved using anchor links, providing a seamless user experience, especially for galleries with many items.

### Multi-Language Support

The application is designed to be fully multilingual, allowing you to provide content and a user interface in multiple languages.

*   **Switching Languages**: A language selector dropdown is available in the application, allowing users to switch between supported languages on the fly.

*   **Adding New Languages**: To add a new language, you need to:
    1.  **Add Content Files**: In the `src/content/live` subdirectories (`about`, `media`, `posts`), create new files for your desired language, following the existing naming convention (e.g., `contentMedia_fr.js` for French).
    2.  **Add UI Translations**:
        *   In `src/content/live/navbarTranslations.js`, add a new entry for your language (e.g., `fr: { home: 'Accueil', ... }`).
        *   In `src/content/live/uiTranslations.js`, add a new entry for your language with all the necessary translations for the user interface.
    3.  **Register the New Language**: In `src/content/live/siteInfo.js`, add a new language object to the `languages` array. This object should include the language's `name`, `code`, `nativeName`, and a path to its `flag` icon.

*   **State Management with Zustand**:
    *   The application uses **Zustand**, a lightweight state management library, to handle the global language state.
    *   The `languageStore` (`src/store/languageStore.js`) creates a global store that holds the currently selected language.
    *   When a user selects a new language from the `LanguageSelector` component, the `setLanguage` action is called, updating the language in the store.
    *   Any component that uses the `useLanguageStore` hook (e.g., `const language = useLanguageStore(state => state.language);`) will automatically re-render whenever the language changes. This makes it easy to display the correct content and translations throughout the application without needing to pass the language state down through multiple component layers (prop drilling).
    *   The store also uses `persist` middleware to save the user's language preference in local storage, so it is remembered across sessions.

## Live Demo

View the app live here: [React Image Gallery](https://image-gallery-14.netlify.app/)

## Libraries Used

- **react-router-dom**: adsf
- **sendgrid/mail**:
- **react-player**:

## Start


1. **Setup Netlify (For Hosting & Serving Requests)**
    A. Create an account at Netlify.
	B. Create a new project and link it to your chosen repo on GitHub for deployment.
	C. In `[project]/[app_name]/netlify/functions` folder, create sendEmail.js. In that file, import `@sendgrid/mail` and  write `exports.handler = async (event)` that calls `await sgMail.send(msg)`

2. **Setup SendGrid (To Send Emails On Netlify Request)**
	A. Create your SendGrid Account
	B. Register your email to use the service
	C. Create a `SENDGRID_API_KEY`. Add key in SendGrid > Project Configuration > Environment variables
	D. In `siteInfo.js` file, edit `export const address` to be the email you registered with SendGrid 
	
3. **Build & Run App**
    A. Download this repo, cd into it, and run ...
    B.  `npm install`, `npm run dev` to build local
    C. To build a hosted version, simply push changes to this app's repo on Github. Netlify will
        automatically see the changes and build your app