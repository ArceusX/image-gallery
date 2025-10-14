/**
 * Sorts items by date (newest first), then by ID (highest first if same date)
 * @param {Object} a - First item
 * @param {Object} b - Second item
 * @returns {number} Sorting order value
 */
export const sortByDateAndId = (a, b) => {
  const dateDiff = new Date(b.date) - new Date(a.date);
  return dateDiff !== 0 ? dateDiff : b.id - a.id;
};