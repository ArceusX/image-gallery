import mediaFiles from '../utils/importMedia';

const sampleAbout = [
  {
    type: 'text',
    title: 'Our Mission',
    content: 'We help you build safe and fun treehouses using practical guides and hands-on knowledge.'
  },
  {
    type: 'image',
    src: mediaFiles.tree,
    alt: 'Treehouse under construction',
    caption: 'Building a treehouse from scratch.'
  },
  {
    type: 'video',
    src: mediaFiles.sample,
    caption: 'This is cool'
  },
];

export default sampleAbout;