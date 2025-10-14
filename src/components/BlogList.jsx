import React from 'react';
import { Fade } from 'react-awesome-reveal';
import BlogPost from "./BlogPost";

/**
 * Renders a list of blog post previews.
 * @param {Object[]} posts - An array of post objects to display.
 * @returns {JSX.Element} A list of blog posts.
 */
function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Fade key={post.id} cascade damping={0.1} triggerOnce duration={2000}>
          <BlogPost post={post} preview={true} />
        </Fade>
      ))}
    </div>
  );
}

export default React.memo(BlogList);