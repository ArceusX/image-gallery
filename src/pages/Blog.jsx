import React, { useEffect } from 'react';
import BlogList from '../components/BlogList';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import TagFilter from '../components/TagFilter';
import useFilterStore from '../store/filterStore';
import "./css/Blog.css";

/**
 * The Blog page component.
 * 
 * @param {object[]} posts - An array of blog posts to display.
 * @returns {JSX.Element} The rendered blog page.
 */
function Blog({posts}) {
  const language = useLanguageStore((state) => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;
  const { filteredItems, setItems } = useFilterStore();

  useEffect(() => {
    setItems(posts);
  }, [posts, setItems]);

  return (
    <div>
      <h2>{translations.blogTitle}</h2>
      <div className="blog-filter-container">
        <TagFilter items={posts} />
      </div>
      <BlogList posts={filteredItems} />
    </div>
  );
};

export default React.memo(Blog);