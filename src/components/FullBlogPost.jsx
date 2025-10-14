import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from "./BlogPost";

/**
 * Renders a full blog post by retrieving the post ID from the URL parameters.
 * 
 * @param {object[]} posts - An array of all blog posts.
 * @returns {JSX.Element} The rendered full blog post or a "not found" message.
 */
function FullBlogPost({ posts }) {

  // Extract id from path of Route defined in App
  // Get post for that id index, show full post (preview = {false})
  const { id } = useParams();
  const post = useMemo(() => posts.find(p => p.id === Number(id)), [id, posts]);

  return <>
    <h2>Blog Post</h2>
    {post ? (
      <BlogPost post={post} preview={false} />
    ) : (
      <h3>Post not found</h3>
    )}
  </>
}

export default React.memo(FullBlogPost);