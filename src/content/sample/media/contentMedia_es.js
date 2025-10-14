/**
 * @file contentMedia_es.js
 * @description Spanish content for media items.
 */
import mediaFiles from '@utils/importMedia';

const contentMedia_es = [
  {
    id: 1,
    date: "2025-01-02",
    title: 'Elige tu árbol',
    files: [
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["red", "blue"],
    text: 'Usar más de un árbol para tu casa del árbol tiene ventajas: la casa del árbol puede ser más grande y tienes que usar menos refuerzos.'
  },
  {
    id: 2,
    date: "2025-02-01",
    title: 'Elabora un diseño',
    files: [
      { src: mediaFiles.draft, type: 'image' },
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["green", "bluegreen"],
    text: 'Usa soportes fuertes. Distribuye el peso de manera uniforme. Protégete del clima. Cosas a tener en cuenta.'
  },
  {
    id: 3,
    date: "2025-03-01",
    title: 'Construye la plataforma',
    files: [
      { src: "https://www.youtube.com/watch?v=6jSLH9CDPPQ", type: 'video' }
    ],
    tags: ["black", "red"],
    text: 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica.'
  },
  {
    id: 4,
    date: "2025-04-01",
    title: 'Construye las paredes y el techo',
    files: [
      { src: mediaFiles.sample, type: 'video' },
      { src: mediaFiles.tree, type: 'image' },
      { src: mediaFiles.draft, type: 'image' }
    ],
    tags: ["blue", "green"],
    text: 'Usa montantes de 2x4 y deja aberturas para ventanas y puertas. La madera y los materiales de construcción se entregan en camiones grúa para facilitar el suministro que debe subirse a mano por las escaleras.'
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

export default contentMedia_es;
