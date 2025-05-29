import mediaFiles from '../utils/importMedia';

const sampleMedia= [
  {
    id: 1,
    date: "2025-01-02",
    title: 'Choose Your Tree',
    type: "image",
    src: mediaFiles.tree,
    text: 'There are advantages to using more than one tree for your treehouse - the treehouse can be bigger, and you have to use less bracing'
  },
  {
    id: 2,
    date: "2025-02-01",
    title: 'Draft A Design',
    type: "image",
    src: mediaFiles.draft,
    text: 'Use strong supports. Distribute the weight evenly. Protect against weather. Things to keep in mind'
  },
  {
    id: 3,
    date: "2025-03-01",
    title: 'Build The Platform',
    type: "video",
    src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ",
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    id: 4,
    date: "2025-04-01",
    title: 'Build The Walls & Roof',
    type: "video",
    src: mediaFiles.sample,
    text: 'Use 2x4 studs and leave openings for windows and doors. Lumber and building supplies are delivered by boom trucks to ease the supply that must be carried up by hand on ladders.'
  },
];

export default sampleMedia;