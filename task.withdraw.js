const withdraw = (creep, currentSource = null) => {
  if (creep.store.getFreeCapacity() > 0 && creep.memory.action == action.WITHDRAW) {
    const containers = helper.getContainersByRoom(creep.room);
    let source = creep.pos.findClosestByPath(containers);
    currentSource = currentSource || source;

    if (currentSource) {
      if (creep.pos.getRangeTo(currentSource) == 1) {
        source = creep.pos.findClosestByPath(containers);
        creep.withdraw(source, RESOURCE_ENERGY);
      } else {
        if (creep.memory.pos && creep.memory.pos[0] == creep.pos.x && creep.memory.pos[1] == creep.pos.y) {
          creep.move(TOP_LEFT);
        } else {
        creep.memory.pos = [creep.pos.x, creep.pos.y];
        creep.moveTo(currentSource, {
          reusePath: 50,
          noPathFinding: false,
          serializeMemory: true,
          visualizePathStyle: { stroke: '#00ffff' } });
        }
      }
      creep.say(action.WITHDRAW);
      return true;
    }
  }
  return false;
}

module.exports = withdraw;
