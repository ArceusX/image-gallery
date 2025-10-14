/**
 * @file contentMedia_cn.js
 * @description Chinese content for media items.
 */
import mediaFiles from '@utils/importMedia';

const contentMedia_cn = [
  {
    id: 1,
    date: "2025-01-02",
    title: '选择你的树',
    files: [
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["red", "blue"],
    text: '为您的树屋使用多棵树有几个优点——树屋可以更大，而且您需要使用的支撑更少。'
  },
  {
    id: 2,
    date: "2025-02-01",
    title: '起草设计',
    files: [
      { src: mediaFiles.draft, type: 'image' },
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["green", "bluegreen"],
    text: '使用强有力的支撑。均匀分配重量。防范恶劣天气。需要牢记的事项。'
  },
  {
    id: 3,
    date: "2025-03-01",
    title: '搭建平台',
    files: [
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["black", "red"],
    text: 'Lorem Ipsum 只是印刷和排版行业的虚拟文本。'
  },
  {
    id: 4,
    date: "2025-04-01",
    title: '建造墙壁和屋顶',
    files: [
      { src: mediaFiles.sample, type: 'video' },
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["blue", "green"],
    text: '使用 2x4 的立柱，并为门窗留出开口。木材和建筑用品由吊臂卡车运送，以减少必须用手通过梯子搬运的供应品。'
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

export default contentMedia_cn;
