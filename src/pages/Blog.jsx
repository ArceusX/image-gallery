import BlogList from '../components/BlogList';

import "./css/Blog.css";

// Shows previews of posts rather than full contents
export default function Blog({posts}) {
  return (
    <div>
      <h2>Blog</h2>
      <BlogList posts={posts} />
    </div>
  );
};