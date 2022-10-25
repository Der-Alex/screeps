// harvest or transfer energy
const harvesterTask = (room) => {
  const containers = room.find(FIND_STRUCTURES, {
    filter: {
      structureType: STRUCTURE_CONTAINER 
    }
  }); 
  const harvesters = helper.getCreepsByRole(role.HARVESTER, room.name);
  for (let i = 0; i < harvesters.length; i++) {
    let container = null;
    if (containers[i]) {
      container = containers[i];
    }
    if (container && harvesters[i].pos.getRangeTo(container) == 0) {
      const source = harvesters[i].pos.findClosestByPath(FIND_SOURCES);
      harvesters[i].harvest(source);
    } else {
      harvesters[i].moveTo(container);
    }
  }

};

module.exports = harvesterTask;
