const withdraw = (creep) => {
  if (creep.store.getFreeCapacity() > 0 && creep.memory.action == action.WITHDRAW) {
    const containers = creep.room.find(FIND_STRUCTURES, { filter: (structure) => structure.structureType = STRUCTURE_CONTAINER }); 
    const source = creep.pos.findClosestByPath(containers);

    if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {
        reusePath: 50,
        noPathFinding: false,
        serializeMemory: true,
        visualizePathStyle: { stroke: '#00ffff' } });
    }
    if (
      creep.withdraw(source, RESOURCE_ENERGY) != OK &&
      creep.withdraw(source, RESOURCE_ENERGY) != ERR_NOT_ENOUGH_ENERGY &&
      creep.withdraw(source, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE &&
      creep.withdraw(source, RESOURCE_ENERGY) != ERR_BUSY
    ) {
      return false;
    }
    creep.say(action.WITHDRAW);
    return true;
  }
  return false;
};

module.exports = upgrade;
