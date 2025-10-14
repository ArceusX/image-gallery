/**
 * @file contentPosts_cn.js
 * @description Chinese content for blog posts.
 */
import mediaFiles from '@utils/importMedia';

const contentPosts_cn = [
  {
    id: 1,
    author: "Jane Doe",
    date: "2025-05-20",
    title: "树屋建造入门",
    subtitle: "安全有趣建筑的初学者指南",
    tags: ["construction", "treehouse"],
    items: [
      {
        type: 'image',
        src: mediaFiles.tree,
        alt: "正在建造的树屋",
        caption: "从零开始建造树屋。",
      },
      {
        type: "text",
        content:
          "我们利用实用的指南和实践知识，帮助您建造安全有趣的树屋。",
      },
    ],
  },
{
    id: 2,
    author: "John Smith",
    date: "2025-05-22",
    title: "掌握时间管理",
    subtitle: "提高日常工作效率的技巧",
    tags: ["daily", "time management"],
    items: [
      {
        type: "text",
        content:
          "使用时间块将任务分配到特定时间，减少分心并提高注意力。",
      },
      {
        type: "image",
        src: mediaFiles.platform,
        alt: "带有时间块的计划表",
        caption: "可视化您的日程安排有助于您保持正轨。",
      },
    ],
  },
  {
    id: 3,
    author: "Emily Green",
    date: "2025-10-25",
    title: "冥想入门指南",
    subtitle: "开始您的正念之旅",
    tags: ["meditation"],
    items: [
      {
        type: "video",
        src: mediaFiles.sample,
        caption: "冥想可以改善心理状态",
      },
      {
        type: "image",
        src: mediaFiles.tree,
        alt: "日出时冥想的人",
        caption: "早晨的冥想为一天定下平静的基调。",
      },
    ],
  },
];

export default contentPosts_cn;
