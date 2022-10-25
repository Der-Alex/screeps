const repair = (creep) => {
  if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.REPAIR) {
    const closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => structure.hits < structure.hitsMax,
    });
    if (closestDamagedStructure) {
      if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
        creep.moveTo(closestDamagedStructure, {
          reusePath: 50,
          noPathFinding: false,
          serializeMemory: true,
          visualizePathStyle: { stroke: '#bb0000' } });
      }
      if (
        creep.repair(closestDamagedStructure) != OK &&
        creep.repair(closestDamagedStructure) != ERR_NOT_IN_RANGE &&
        creep.repair(closestDamagedStructure) != ERR_BUSY
      ) {
        console.log('-- REPAIR GONE WRONG --', creep.repair(closestDamagedStructure));
        return false;
      }
      creep.say(action.REPAIR);
      return true;
    }
  }
  return false;
};

module.exports = repair;
