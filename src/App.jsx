/**
 * @file App.jsx
 * @description The main application component that sets up routing and global layout.
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLanguageStore from './store/languageStore';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Calendar = lazy(() => import('./pages/CalendarPage'));
const FullBlogPost = lazy(() => import('./components/FullBlogPost'));

import ContactInfo from './components/ContactInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import LanguageSelector from './components/LanguageSelector';

import siteInfo from '@content/siteInfo';
import contentPosts_en from '@content/posts/contentPosts_en';
import contentPosts_es from '@content/posts/contentPosts_es';
import contentPosts_cn from '@content/posts/contentPosts_cn';
import contentMedia_en from '@content/media/contentMedia_en';
import contentMedia_es from '@content/media/contentMedia_es';
import contentMedia_cn from '@content/media/contentMedia_cn';
import contentAbout_en from '@content/about/contentAbout_en';
import contentAbout_es from '@content/about/contentAbout_es';
import contentAbout_cn from '@content/about/contentAbout_cn';
import contentEvents_en from '@content/events/contentEvents_en';
import contentEvents_es from '@content/events/contentEvents_es';
import contentEvents_cn from '@content/events/contentEvents_cn';

import { sortByDateAndId, } from '@utils/sort';
import './App.css';

const App = () => {
  const language = useLanguageStore((state) => state.language);

  // Structure content by language
  const content = {
  posts: {
    en: [...contentPosts_en].sort(sortByDateAndId),
    es: [...contentPosts_es].sort(sortByDateAndId),
    cn: [...contentPosts_cn].sort(sortByDateAndId),
  },
  media: {
    en: [...contentMedia_en].sort(sortByDateAndId),
    es: [...contentMedia_es].sort(sortByDateAndId),
    cn: [...contentMedia_cn].sort(sortByDateAndId),
  },
    about: {
      en: contentAbout_en,
      es: contentAbout_es,
      cn: contentAbout_cn,
    },
    events: {
      en: contentEvents_en,
      es: contentEvents_es,
      cn: contentEvents_cn,
    },
  };

  const contentPosts = content.posts[language.code] || content.posts.en;
  const contentMedia = content.media[language.code] || content.media.en;
  const contentAbout = content.about[language.code] || content.about.en;
  const contentEvents = content.events[language.code] || content.events.en;

  return (
    <Router>
      <div className="app-wrapper">
        <LanguageSelector />
        {/* Top navbar to have appName logo
            that opens to homepage on click*/}
        <Navbar icon={siteInfo.meta.icon} items={siteInfo.navbarPaths} appName={siteInfo.meta.appName} />
        <ContactInfo 
          address={siteInfo.personal.address}
          email={siteInfo.personal.contactEmail}
        />
        {siteInfo.fundraising.active && (
          <ProgressBar
            mission={siteInfo.fundraising.mission}
            raised={siteInfo.fundraising.raised}
            goal={siteInfo.fundraising.goal}
            nDonors={siteInfo.fundraising.nDonors}
          />
        )}
        {/* For each Route, define URL and component/page to show */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <Home
                items={contentMedia}
                image={siteInfo.meta.bannerImage}
                text ={siteInfo.meta.bannerText}
              />
            } />
            <Route path="/about" element={<About items={contentAbout} />} />
            <Route path="/calendar" element={
              <Calendar events={contentEvents} localeMap={siteInfo.localeMap || { en: "en-US", }}  />} />
            <Route path="/blog" element={<Blog posts = {contentPosts} />} />
            <Route path="/contact" element={<Contact
              address={siteInfo.personal.contactEmail} siteName = {siteInfo.meta.siteName} />} />
            <Route path="/blog/post/:id" element={<FullBlogPost posts={contentPosts} />} />
          </Routes>
        </Suspense>

        <Footer
          icon={siteInfo.meta.icon}
          appName={siteInfo.meta.appName}
          author={siteInfo.personal.author}
          contact={siteInfo.personal.authorEmail}
          link={siteInfo.personal.github}
        />

      </div>
    </Router>
  );
};

export default App;
