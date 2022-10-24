// harvest or repair
const repairerTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2

  if (sources) {
    let currentSource = sources[0];
    const repairers = helper.getCreepsByRole(role.REPAIRER, room.name);
    for (let i = 0; i < repairers.length; i++) {
      if (!task.withdraw(repairers[i]) && repairers[i].memory.action != action.REPAIR) {
        helper.changeAction(repairers[i], action.REPAIR);
      }
      if (!task.repair(repairers[i]) && repairers[i].memory.action != action.WITHDRAW) {
        helper.changeAction(repairers[i], action.WITHDRAW);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = repairerTask;
