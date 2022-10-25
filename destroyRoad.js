const destroyRoad = () => {
  const roads = Game.rooms["W1N7"].find(FIND_STRUCTURES, {
    filter: (i) => i.structureType == STRUCTURE_ROAD});
  for (const road of roads) {
    road.destroy();
  }
};

module.exports = destroyRoad();