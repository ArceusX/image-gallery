/**
 * @file contentPosts_es.js
 * @description Spanish content for blog posts.
 */
import mediaFiles from '@utils/importMedia';

const contentPosts_es = [
  {
    id: 1,
    author: "Jane Doe",
    date: "2025-05-20",
    title: "Construcción de casas en los árboles 101",
    subtitle: "Una guía para principiantes para estructuras seguras y divertidas",
    tags: ["construction", "treehouse"],
    items: [
      {
        type: 'image',
        src: mediaFiles.tree,
        alt: "Casa del árbol en construcción",
        caption: "Construyendo una casa en el árbol desde cero.",
      },
      {
        type: "text",
        content:
          "Te ayudamos a construir casas en los árboles seguras y divertidas utilizando guías prácticas y conocimientos prácticos.",
      },
    ],
  },

{
    id: 2,
    author: "John Smith",
    date: "2025-05-22",
    title: "Dominar la gestión del tiempo",
    subtitle: "Técnicas para aumentar tu productividad diaria",
    tags: ["daily", "time management"],
    items: [
      {
        type: "text",
        content:
          "Usa el bloqueo de tiempo para asignar tareas a horas específicas, reduciendo la distracción y mejorando el enfoque.",
      },
      {
        type: "image",
        src: mediaFiles.platform,
        alt: "Planificador con franjas horarias bloqueadas",
        caption: "Visualizar tu horario te ayuda a mantenerte en el buen camino.",
      },
    ],
  },
  {
    id: 3,
    author: "Emily Green",
    date: "2025-10-25",
    title: "Guía de meditación para principiantes",
    subtitle: "Comienza tu viaje de atención plena",
    tags: ["meditation"],
    items: [
      {
        type: "video",
        src: mediaFiles.sample,
        caption: "La meditación mejora la salud mental",
      },
      {
        type: "image",
        src: mediaFiles.tree,
        alt: "Persona meditando al amanecer",
        caption: "La meditación por la mañana establece un tono pacífico para el día.",
      },
    ],
  },
];

export default contentPosts_es;
