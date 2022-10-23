const myRoom = require('myRoom');
const task = require('task');

module.exports.loop = () => {
  for (const name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
  // find my rooms and run them
  for (const room in Game.rooms) {
    myRoom.run(Game.rooms[room]);
  }
};
