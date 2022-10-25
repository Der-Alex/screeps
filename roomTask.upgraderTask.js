// harvest or upgrade
const upgraderTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2
  const containers = helper.getContainersByRoom(room);
  if (sources) {
    let currentSource = sources[1];
    
    const upgraders = helper.getCreepsByRole(role.UPGRADER, room.name);

    for (let i = 0; i < upgraders.length; i++) {
      if (!task.withdraw(upgraders[i]) && upgraders[i].memory.action != action.UPGRADE) {
        helper.changeAction(upgraders[i], action.UPGRADE);
      }
      if (!task.build(upgraders[i]) && upgraders[i].memory.action != nextAction) {
        helper.changeAction(upgraders[i], nextAction);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = upgraderTask;
