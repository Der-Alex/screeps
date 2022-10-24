const upgrade = (creep) => {
  if (creep.store.getUsedCapacity() > 0 && creep.memory.action == action.UPGRADE && creep.room.controller) {
    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.room.controller, {
        reusePath: 50,
        noPathFinding: false,
        serializeMemory: true,
        visualizePathStyle: { stroke: '#00ffff' } });
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
};

module.exports = upgrade;
