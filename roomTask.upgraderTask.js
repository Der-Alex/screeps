// harvest or upgrade
const upgraderTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2

  if (sources) {
    let currentSource = sources[1];
    const upgraders = helper.getCreepsByRole(role.UPGRADER, room.name);
    for (let i = 0; i < upgraders.length; i++) {
      if (!task.harvest(upgraders[i], currentSource) && upgraders[i].memory.action != action.UPGRADE) {
        helper.changeAction(upgraders[i], action.UPGRADE);
      }
      if (!task.upgrade(upgraders[i]) && upgraders[i].memory.action != action.HARVEST) {
        helper.changeAction(upgraders[i], action.HARVEST);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = upgraderTask;
