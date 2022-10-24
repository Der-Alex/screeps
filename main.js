/**
 * GLOBAL MODULES loaded in specific order
 */
_ = require('lodash');
role = require('role');
action = require('action');
bodyParts = require('bodyParts');
sayText = require('sayText');
helper = require('helper');
task = require('task');
creepType = require('creepType');
creepFactory = require('creepFactory');
roomTask = require('roomTask');

/**
 * GLOBAL CONFIGS
 */

maxWorker = 2;
maxBuilders = 2;
maxUpgraders = 2;
maxRepairers = 1;

module.exports.loop = () => {
  for (const name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
  // find my rooms and run them
  for (const room in Game.rooms) {
    roomTask.run(Game.rooms[room]);
  }
};
