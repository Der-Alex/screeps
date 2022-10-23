const createWorker = (room) => {
  const s1 = room.find(FIND_MY_SPAWNS)[0];
  if (!s1.spawning && room.energyAvailable >= 300) {
    console.log('available energy', room.energyAvailable);
    //console.log('r', helper.getAmount(role.REPAIRER, room.name), helper.getAmount(role.HARVESTER, room.name) < maxHarvesters);
    let res = null;
    if (helper.getAmount(role.HARVESTER, room.name) < maxHarvesters) {
      res = creepFactory.createHarvester(s1);
    } else if (helper.getAmount(role.BUILDER, room.name) < maxBuilders) {
      res = creepFactory.createBuilder(s1);
    } else if (helper.getAmount(role.UPGRADER, room.name) < maxUpgraders) {
      res = creepFactory.createUpgrader(s1);
    } else if (helper.getAmount(role.REPAIRER, room.name) < maxRepairers) {
      res = creepFactory.createRepairer(s1);
    } else {
      // enough for now
    }
    sayText(room, 'WORKER STATE: ' + res);
  }
  if (s1.spawning) {
    const spawningCreep = Game.creeps[s1.spawning.name];
    //helper.changeRole(spawningCreep, currentRole);
    s1.room.visual.text('🛠️: ' + spawningCreep.memory.role, s1.pos.x + 2, s1.pos.y, {
      align: 'left',
      opacity: 0.8,
      font: '16px sans-serif',
      backgroundColor: '#000000',
      backgroundPadding: 0.5,
    });
  }
};

module.exports = createWorker;
