/**
 * @file contentMedia_en.js
 * @description English content for media items.
 *
 * This file defines content for the Gallery home page in English.
 * The structure is an array of objects, where each object represents a media card.
 *
 * Each object has the following properties:
 *
 * - `id` (number): A unique identifier for the media item.
 * - `date` (string): The date associated with the item, in "YYYY-MM-DD" format.
 * - `title` (string): The title displayed on the media card.
 * - `type` (string): The type of media. Can be 'image' or 'video'.
 * - `src` (string): The source of the media. This can be a URL or a locally imported file
 *   from the `mediaFiles` object (see `src/utils/importMedia.js`).
 * - `tags` (string[]): An array of strings representing tags for filtering.
 * - `text` (string): The descriptive text that appears on the media card.
 */
import mediaFiles from '@utils/importMedia';
const contentMedia_en = [
  {
    id: 1,
    date: "2025-01-02",
    title: 'Choose Your Tree',
    files: [
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["red", "blue", ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    date: "2025-02-01",
    title: 'Draft A Design',
    files: [
      { src: mediaFiles.draft, type: 'image' },
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["green", "bluegreen"],
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    date: "2025-03-01",
    title: 'Build The Platform',
    files: [
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["black", "red"],
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 4,
    date: "2025-04-01",
    title: 'Build The Walls & Roof',
    files: [
      { src: mediaFiles.sample, type: 'video' },
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["blue", "green"],
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 5,
    date: "2025-05-02",
    title: '选择你的树',
    files: [
      { src: mediaFiles.tree, type: 'image' }
    ],
    tags: ["red", "black"],
    text: '为您的树屋使用多棵树有几个优点——树屋可以更大，而且您需要使用的支撑更少。'
  },
];

export default contentMedia_en;
