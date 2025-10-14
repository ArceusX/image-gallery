import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useLanguageStore from '../store/languageStore';
import { formatDate } from "../utils/format";
import { getEmoji } from '../utils/getEmoji';
import uiTranslations from '@content/uiTranslations';
import MediaItem from './MediaItem';

import './css/BlogPost.css';

// Single item/section/paragraph element in Post
const PostContent = React.memo(({ item }) => {
    if (item.type === "text") {
        return (
        <div className="post-content">
            <p className="post-text">{item.content}</p>
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
});

/**
 * Renders a blog post with content, metadata, and a "Read More" button in preview mode.
 * 
 * @param {object} post - The post data to display.
 * @param {boolean} [props.preview=false] - Whether to display the post in preview mode.
 * @returns {JSX.Element} The rendered blog post.
 */
function BlogPost({ post, preview = false }) {
    const language = useLanguageStore((state) => state.language);
    const navigate = useNavigate();
    const translations = uiTranslations[language.code] || uiTranslations.en;

    const tags = [...new Set(post.tags)];

    const handleReadMore = useCallback(() => {
        navigate(`/blog/post/${post.id}`);
    }, [navigate, post.id]);
    
    return (
        <div className = "post">
        <h2 className="post-title">{post.title}</h2>
        <h3 className="post-subtitle">{post.subtitle}</h3>
        <div className="post-author-date">
            {getEmoji(post.date)} {translations.postMeta(post.author, formatDate(post.date, language.code))}
        </div>
        <div className="post-tags">
            {tags && tags.map(tag => (
                <span key={tag} className="tag-box">{tag}</span>
            ))}
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
            <button onClick={handleReadMore}>{translations.readMore}</button>
            </div>
        )}
        </div>
    );
}

export default React.memo(BlogPost);