/**
 * @file uiTranslations.js
 * @description UI string translations for the site.
 *
 * This file contains translations for various UI elements across the application.
 * The top-level keys are language codes (e.g., "en", "es", "cn").
 * Each language object contains key-value pairs for different UI components and text elements.
 *
 * Some values are simple strings, while others are functions that allow for dynamic content,
 * such as inserting a name and date into a sentence.
 */
const uiTranslations = {
  en: {
    postMeta: (author, date) => `By ${author} on ${date}`,
    galleryTitle: "Gallery",
    blogTitle: "Blog",
    contactTitle: "Contact",
    contactForm: {
      namePlaceholder: "Lorem Ipsum",
      emailPlaceholder: "Dolor Sit Amet",
      subjectPlaceholder: "Consectetur Adipiscing",
      messagePlaceholder: "Elit Sed Do",
      sendButton: "Send",
    },
    cardNavbar: {
      goTo: "Go To",
      selectDate: "Select Date",
      filterTags: "Filter Tags",
      tagSearchPlaceholder: "Auto-complete",
    },
    readMore: "Read More",
    calendar: {
      calendarTitle: "Calendar",
      noEvents: "No events scheduled.",
    },
  },
  es: {
    postMeta: (author, date) => `Por ${author} el ${date}`,
    galleryTitle: "Galería",
    blogTitle: "Blog",
    contactTitle: "Contacto",
    contactForm: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Tu mensaje",
      sendButton: "Enviar",
    },
    cardNavbar: {
      goTo: "Ir a",
      selectDate: "Seleccione Fecha",
      filterTags: "Filtrar Etiquetas",
      tagSearchPlaceholder: "Autocompletar",
    },
    readMore: "Leer Más",
    calendar: {
      calendarTitle: "Calendario",
      noEvents: "No hay eventos programados.",
    },
  },
  cn: {
    postMeta: (author, date) => `${author} 于 ${date} 发布`,
    galleryTitle: "画廊",
    blogTitle: "画廊",
    contactTitle: "联系",
    contactForm: {
      namePlaceholder: "你的名字",
      emailPlaceholder: "你的邮件",
      subjectPlaceholder: "主题",
      messagePlaceholder: "你的留言",
      sendButton: "发送",
    },
    cardNavbar: {
      goTo: "前往",
      selectDate: "选择日期",
      filterTags: "筛选标签",
      tagSearchPlaceholder: "自动完成",
    },
    readMore: "阅读更多",
    calendar: {
      calendarTitle: "日历",
      noEvents: "沒有預定的活動。",
    },
  }
};

export default uiTranslations;
