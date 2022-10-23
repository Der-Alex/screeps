const action = require('action');
const task = {
  build: (creep) => {
    if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.BUILD) {
      const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length > 0) {
        // todo: find next target?
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
        if (creep.build(targets[0]) != ERR_NOT_IN_RANGE && creep.build(targets[0]) != OK && creep.build(targets[0]) != ERR_BUSY) {
          console.log('-- BUILD GONE WRONG --', creep.build(targets[0]));
          return false;
        }
        creep.say(action.BUILD);
        return true;
      }
    }
    return false;
  },
  harvest: (creep, source) => {
    if (creep.store.getFreeCapacity() > 0 && creep.memory.action == action.HARVEST) {
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
      }
      if (creep.harvest(source) != OK && creep.harvest(source) != ERR_NOT_IN_RANGE && creep.harvest(source) != ERR_BUSY) {
        console.log('-- HARVEST GONE WRONG --', creep.harvest(source));
        return false;
      }
      creep.say(action.HARVEST);
      return true;
    }
    return false;
  },
  transfer: (creep) => {
    if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.TRANSFER) {
      let targets = null;
      if (creep.memory.priority) {
        targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return structure.structureType == priority && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
          },
        });

        if (targets.length === 0) {
          creep.memory.priority = null;
        }
      }
      if (!creep.memory.priority) {
        targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (
              (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
              structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
            );
          },
        });
      }
      if (targets.length > 0) {
        // todo: define targets
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
        if (
          creep.transfer(targets[0], RESOURCE_ENERGY) != OK &&
          creep.transfer(targets[0], RESOURCE_ENERGY) != ERR_NOT_IN_RANGE &&
          creep.transfer(targets[0], RESOURCE_ENERGY) != ERR_BUSY
        ) {
          console.log('-- TRANSFER GONE WRONG --', creep.transfer(targets[0], RESOURCE_ENERGY));
          return false;
        }
        creep.say(action.TRANSFER);
        return true;
      }
    }
    return false;
  },
  upgrade: (creep) => {
    if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.UPGRADE && creep.room.controller) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#f1c40f' } });
      }
      if (
        creep.upgradeController(creep.room.controller) != OK &&
        creep.upgradeController(creep.room.controller) != ERR_NOT_IN_RANGE &&
        creep.upgradeController(creep.room.controller) != ERR_BUSY
      ) {
        console.log('-- UPGRADE GONE WRONG --', creep.transfer(targets[0], RESOURCE_ENERGY));
        return false;
      }
      creep.say(action.UPGRADE);
      return true;
    }
    return false;
  },
  repair: (creep) => {
    if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.REPAIR) {
      const closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax,
      });
      if (closestDamagedStructure) {
        if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
          creep.moveTo(closestDamagedStructure);
        }
        if (
          creep.repair(closestDamagedStructure) != OK &&
          creep.repair(closestDamagedStructure) != ERR_NOT_IN_RANGE &&
          creep.repair(closestDamagedStructure) != ERR_BUSY
        ) {
          console.log('-- REPAIR GONE WRONG --', creep.repair(closestDamagedStructure));
          return false;
        }
        return true;
      }
    }
    return false;
  },
};

module.exports = task;
