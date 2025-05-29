
// Format "2025-01-01" as Jan 01, 2025
export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  
  // month is 1-based, JS Date month is 0-based
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}