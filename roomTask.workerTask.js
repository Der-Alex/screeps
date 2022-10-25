// tiny harvester task harvest or transfer energy
const workerTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2

  if (sources) {
    let currentSource = sources[1];
    const worker = helper.getCreepsByRole(role.WORKER, room.name);
    for (let i = 0; i < worker.length; i++) {
      if (!task.harvest(worker[i], currentSource) && worker[i].memory.action != action.TRANSFER) {
        helper.changeAction(worker[i], action.TRANSFER);
      }
      if (!task.transfer(worker[i]) && worker[i].memory.action != action.HARVEST) {
        helper.changeAction(worker[i], action.HARVEST);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = workerTask;
