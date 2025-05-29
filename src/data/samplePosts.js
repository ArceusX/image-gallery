import mediaFiles from '../utils/importMedia';

// Each entry in [] is post that contains various metadata and items []
// Each entry in items [] is any of 
//      A. text, paired with content,
//      B. image, paired with src file, alt text, and caption
//      C. video, pair with src and flag marking src as being local or web

const samplePosts = [
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
    date: "2025-25-25",
    title: "Beginner's Guide to Meditation",
    subtitle: "Start your mindfulness journey",
    tags: ["meditation"],
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

export default samplePosts;