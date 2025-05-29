import { useParams } from 'react-router-dom';
import BlogPost from "./BlogPost";

function FullBlogPost({ posts }) {

  // Extract id from path of Route defined in App
  // Get post for that id index, show full post (preview = {false})
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  return <>
    <h2>Blog Post</h2>
    {post ? (
      <BlogPost post={post} preview={false} />
    ) : (
      <h3>Post not found</h3>
    )}
  </>
}

export default FullBlogPost;