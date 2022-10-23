// harvest or transfer energy
const harvesterTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2

  if (sources) {
    let currentSource = sources[1];
    const harvesters = helper.getCreepsByRole(role.HARVESTER, room.name);
    for (let i = 0; i < harvesters.length; i++) {
      if (!task.harvest(harvesters[i], currentSource) && harvesters[i].memory.action != action.TRANSFER) {
        helper.changeAction(harvesters[i], action.TRANSFER);
      }
      if (!task.transfer(harvesters[i]) && harvesters[i].memory.action != action.HARVEST) {
        helper.changeAction(harvesters[i], action.HARVEST);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = harvesterTask;
