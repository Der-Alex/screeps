const harvest = (creep, source) => {
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
};

module.exports = harvest;
