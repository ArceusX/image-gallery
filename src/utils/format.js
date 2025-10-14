
// Formats date string based on language
export function formatDate(dateStr, langCode = 'en') {
  const [year, month, day] = dateStr.split("-");
  const date = new Date(year, month - 1, day);

  const locales = {
    en: 'en-US',
    es: 'es-ES',
    cn: 'zh-CN',
  };

  const locale = locales[langCode] || 'en-US';

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date);
}