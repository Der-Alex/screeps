const helper = require('helper');
const s1 = Game.spawns['Spawn1'];
const action = require('action');

const roleHarvester = {
  /** @param {Creep} creep **/
  run: (creep) => {
    console.log('harvester running');
    if (!creep.memory.action) {
      creep.memory.action = action.HARVEST;
    }
    if (creep.store.getUsedCapacity() <= 0) {
      creep.memory.action = action.HARVEST;
      creep.say(action.HARVEST);
    }
    if (creep.store.getFreeCapacity() <= 0) {
      creep.memory.action = action.TRANSFER;
      creep.say(action.TRANSFER);
    }
    if (creep.memory.action == action.TRANSFER) {
      if (creep.transfer(s1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(s1, { visualizePathStyle: { stroke: '#3498db' } });
      }
    }
    if (creep.memory.action == action.HARVEST) {
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#f1c40f' } });
      }
    }
  },
};

module.exports = roleHarvester;

var roleHarvester = {
  /** @param {Creep} creep **/
  run: function (creep) {
    if (creep.store.getFreeCapacity() > 0) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    } else {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
          );
        },
      });
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
  },
};

module.exports = roleHarvester;
