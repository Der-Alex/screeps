const build = (creep) => {
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
};

module.exports = build;
