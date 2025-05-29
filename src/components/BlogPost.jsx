import { useNavigate } from 'react-router-dom';
import { formatDate } from "../utils/format";
import MediaItem from './MediaItem';

import './css/BlogPost.css';

function BlogPost({ post, preview = false }) {

    // Single item/section/paragraph element in Post
    function PostContent({ item }) {
        if (item.type === "text") {
            return (
            <div className="post-content">
                <p>{item.content}</p>
            </div>
            );
        } else if (item.type === "image") {
            return (
            <div className="post-content">
                <section className="image-block">
                    <img src={item.src} alt={item.alt} />
                    <p>{item.caption}</p>
                </section>
            </div>
            );
        } else if (item.type === "video") {
            return (
            <div className="post-content">
                <section className="video-block">
                    <MediaItem item={item} />               
                    <p>{item.caption}</p>
                </section>
            </div>
            );
        }
        return null;
    }

    // onClick, take user to Route for target path (named by post.id)
    const navigate = useNavigate();
    return (
        <div className = "post">
        <h2 className="post-title">{post.title}</h2>
        <h3 className="post-subtitle">{post.subtitle}</h3>
        <div className="post-author-date">
            By {post.author} on {formatDate(post.date)}
        </div>
        {/* If preview, show only first item/section in post
            and "Read More" button to go to full post */}
        <div>
            {(preview ? post.items.slice(0, 1) : post.items).map((item, index) => (
            <PostContent key={index} item={item} />
            ))}
        </div>
        {preview && (
            <div className = "read-more">
            <button onClick={() => navigate(`/blog/post/${post.id}`)}>Read More</button>
            </div>
        )}
        </div>
    );
}

export default BlogPost;