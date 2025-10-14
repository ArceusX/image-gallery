/**
 * @file contentAbout_es.js
 * @description Spanish content for the About page.
 */
import mediaFiles from '@utils/importMedia';

const contentAbout_es = [
  {
    type: 'text',
    title: 'Nuestra Misión',
    content: 'Te ayudamos a construir casas en los árboles seguras y divertidas utilizando guías prácticas y conocimientos prácticos.'
  },
  {
    type: 'image',
    src: mediaFiles.tree,
    alt: 'Casa del árbol en construcción',
    caption: 'Construyendo una casa en el árbol desde cero'
  },
  {
    type: 'video',
    src: mediaFiles.sample,
    caption: 'Esto es genial'
  },
];

export default contentAbout_es;
