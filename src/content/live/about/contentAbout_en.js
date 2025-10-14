/**
 * @file contentAbout_en.js
 * @description English content for the About page.
 *
 * This file defines the content for the "About" page in English.
 * The structure is an array of objects, where each object represents a section on the page.
 *
 * The `type` property of each object determines the kind of content to be rendered.
 *
 * Supported types and their properties:
 *
 * 1. type: 'text'
 *    - Renders a text block with a heading and a paragraph.
 *    - `title` (string): The heading for the section.
 *    - `content` (string): The main text content of the paragraph.
 *
 * 2. type: 'image'
 *    - Renders an image with an optional caption.
 *    - `src` (string): The image source, typically imported from `mediaFiles`.
 *    - `alt` (string): The alternative text for the image, for accessibility.
 *    - `caption` (string, optional): A caption to be displayed below the image.
 *
 * 3. type: 'video'
 *    - Renders a video player with an optional caption.
 *    - `src` (string): The video source, which can be a local file (from `mediaFiles`) or a URL.
 *    - `caption` (string, optional): A caption to be displayed below the video.
 */
import mediaFiles from '@utils/importMedia';
const contentAbout_en = [
  {
    type: 'text',
    title: 'Our Mission',
    content: 'We help you build safe and fun treehouses using practical guides and hands-on knowledge.'
  },
  {
    type: 'image',
    src: mediaFiles.tree,
    alt: 'Treehouse under construction',
    caption: 'Building a treehouse from scratch'
  },
  {
    type: 'video',
    src: mediaFiles.sample,
    caption: 'This is cool'
  },
];

export default contentAbout_en;