import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import FullBlogPost from './components/FullBlogPost';
import ContactForm from './components/ContactForm';

import siteInfo, { address, fundraising } from './data/siteInfo';
import samplePosts from './data/samplePosts';
import sampleMedia from './data/sampleMedia';
import sampleAbout from './data/sampleAbout';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Top navbar to have logoText be name of
            website that that opens to homepage on click*/}
        <Navbar items={siteInfo.navbarItems} logoText={siteInfo.logoText} />
        <ProgressBar
          mission = {fundraising.mission}
          raised={fundraising.raised}
          goal={fundraising.goal}
          nDonors={fundraising.nDonors}
        />
        {/* For each Route, define URL and component/page to show */}
        <Routes>
          <Route path="/" element={<Home items={sampleMedia} />} />
          <Route path="/about" element={<About items={sampleAbout} />} />
          <Route path="/contact" element={<ContactForm
            address={address} siteName = {siteInfo.siteName} />} />
          <Route path="/blog" element={<Blog posts = {samplePosts} />} />
          <Route path="/blog/post/:id" element={<FullBlogPost posts={samplePosts} />} />
        </Routes>
        <Navbar
          items={siteInfo.navbarItems}
          logoText={`Coded by ${siteInfo.author}`}
          logoLink = {siteInfo.repoLink} />
      </div>
    </Router>
  );
};

export default App;
