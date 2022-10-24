const transfer = (creep) => {
  if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.TRANSFER) {
    let targets = null;
    if (creep.memory.priority && creep.memory.priority != null) {
      targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return structure.structureType == creep.memory.priority && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
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
            (structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
          );
        },
      });
    }
    if (targets.length > 0) {
      // todo: define targets
      const towerIndex = targets.findIndex((target) => target.structureType == STRUCTURE_TOWER);
      const extensionIndex = targets.findIndex((target) => target.structureType == STRUCTURE_EXTENSION);
      const spawnIndex = targets.findIndex((target) => target.structureType == STRUCTURE_SPAWN);
      let currentTarget = 0;
      if (spawnIndex > 0) {
        currentTarget = spawnIndex;
      } else if (towerIndex > 0) {
        currentTarget = towerIndex;
      } else if (extensionIndex > 0) {
        currentTarget = extensionIndex;
      }

      if (creep.transfer(targets[currentTarget], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[currentTarget], {
          reusePath: 50,
          noPathFinding: false,
          serializeMemory: true,
          visualizePathStyle: { stroke: '#00ff00' } });
      }
      if (
        creep.transfer(targets[currentTarget], RESOURCE_ENERGY) != OK &&
        creep.transfer(targets[currentTarget], RESOURCE_ENERGY) != ERR_NOT_IN_RANGE &&
        creep.transfer(targets[currentTarget], RESOURCE_ENERGY) != ERR_BUSY
      ) {
        console.log('-- TRANSFER GONE WRONG --', creep.transfer(targets[0], RESOURCE_ENERGY));
        return false;
      }
      creep.say(action.TRANSFER);
      return true;
    }
  }
  return false;
};

module.exports = transfer;
