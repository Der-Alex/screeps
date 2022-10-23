const helper = require('helper');
const s1 = Game.spawns['Spawn1'];

const roleBuilder = {
  /** @param {Creep} creep **/
  run: (creep) => {
    if (!creep.memory.action) {
      creep.memory.action = 'harvest';
    }
    const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
    if (target) {
      if (creep.store.getFreeCapacity() <= 0) {
        creep.memory.action = 'build';
        creep.say('🛠️');
      }
      if (creep.store.getUsedCapacity() <= 0) {
        creep.memory.action = 'harvest';
        creep.say('⛏️');
      }
      if (creep.memory.action == 'harvest') {
        const sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[1], { visualizePathStyle: { stroke: '#f1c40f' } });
        }
      }
      if (creep.memory.action == 'build') {
        if (creep.build(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target, { visualizePathStyle: { stroke: '#2ecc71' } });
        }
      }
    }
  },
  create: () => {
    let created = s1.spawnCreep([WORK, CARRY, MOVE], helper.createName('builder'), { memory: { role: 'builder', action: 'harvest' } });
    console.log('create builder', created);
  },
};
module.exports = roleBuilder;

var roleBuilder = {
  /** @param {Creep} creep **/
  run: function (creep) {
    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.building = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
      creep.memory.building = true;
      creep.say('🚧 build');
    }

    if (creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    }
  },
};

module.exports = roleBuilder;
