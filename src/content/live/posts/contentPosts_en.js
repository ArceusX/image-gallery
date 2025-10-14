/**
 * @file contentPosts_en.js
 * @description English content for blog posts.
 *
 * This file defines the content for the blog posts in English.
 * The structure is an array of post objects. Each object represents a single blog post.
 *
 * Each post object has the following properties:
 *
 * - `id` (number): A unique identifier for the post.
 * - `author` (string): The name of the post's author.
 * - `date` (string): The publication date in "YYYY-MM-DD" format.
 * - `title` (string): The main title of the post.
 * - `subtitle` (string): The subtitle that appears below the main title.
 * - `tags` (string[]): An array of strings for filtering and categorization.
 * - `items` (object[]): An array of content blocks that make up the body of the post.
 *
 * The `items` array can contain objects of different types:
 *
 * 1. type: 'text'
 *    - Renders a paragraph of text.
 *    - `content` (string): The text content.
 *
 * 2. type: 'image'
 *    - Renders an image with a caption.
 *    - `src` (string): The image source from `mediaFiles`.
 *    - `alt` (string): The alternative text for the image.
 *    - `caption` (string): The caption displayed below the image.
 *
 * 3. type: 'video'
 *    - Renders a video player with a caption.
 *    - `src` (string): The video source (URL or local file).
 *    - `caption` (string): The caption displayed below the video.
 */
import mediaFiles from '@utils/importMedia';
const contentPosts_en = [
  {
    id: 1,
    author: "Jane Doe",
    date: "2025-05-20",
    title: "Building Treehouses 101",
    subtitle: "A beginner's guide to safe and fun structures",
    tags: ["construction", "treehouse"],
    items: [
      {
        type: 'image',
        src: mediaFiles.tree,
        alt: "Treehouse under construction",
        caption: "Building a treehouse from scratch.",
      },
      {
        type: "text",
        content:
          "We help you build safe and fun treehouses using practical guides and hands-on knowledge.",
      },
    ],
  },

{
    id: 2,
    author: "John Smith",
    date: "2025-05-22",
    title: "Mastering Time Management",
    subtitle: "Techniques to boost your daily productivity",
    tags: ["daily", "time management"],
    items: [
      {
        type: "text",
        content:
          "Use time blocking to assign tasks to specific hours, reducing distraction and improving focus.",
      },
      {
        type: "image",
        src: mediaFiles.platform,
        alt: "Planner with blocked time slots",
        caption: "Visualizing your schedule helps you stay on track.",
      },
    ],
  },
  {
    id: 3,
    author: "Emily Green",
    date: "2025-10-25",
    title: "Beginner's Guide to Meditation",
    subtitle: "Start your mindfulness journey",
    tags: ["meditation", ],
    items: [
      {
        type: "video",
        src: mediaFiles.sample,
        caption: "Meditation improves mental",
      },
      {
        type: "image",
        src: mediaFiles.tree,
        alt: "Person meditating at sunrise",
        caption: "Meditation in the morning sets a peaceful tone for the day.",
      },
    ],
  },
];

export default contentPosts_en;