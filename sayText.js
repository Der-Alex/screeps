const sayText = (room, text) => {
  room.visual.text(text, 31, 49, {
    color: 'limegreen',
    align: 'left',
    font: '16px sans-serif',
  });
};

module.exports = sayText;
