const getColor = (index) => {
  const colors = [
    'rgba(235, 200, 235, 0.2)',
    'rgba(128, 218, 255, 0.2)',
    'rgba(144, 238, 144, 0.2)',
    'rgba(255, 250, 200, 0.2)',
    'rgba(230, 215, 255, 0.2)',
  ];
  return colors[index % colors.length];
};

export { getColor };
