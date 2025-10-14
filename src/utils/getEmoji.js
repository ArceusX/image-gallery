const monthEmojis = [
  "❄️", // January
  "❤️", // February
  "🍀", // March
  "🌸", // April
  "🌷", // May
  "☀️", // June
  "🎆", // July
  "🏖️", // August
  "🍁", // September
  "🎃", // October
  "🦃", // November
  "🎄"  // December
];

const getEmoji = (dateString) => {
  const date = new Date(dateString.replaceAll('-', '/'));
  const month = date.getMonth();
  return monthEmojis[month];
};

export { getEmoji };
