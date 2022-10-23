// kill script
module.exports = () => {
  for (const creep in Game.creeps) {
    Game.creeps[creep].suicide();
  }
};
