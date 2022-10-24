const createWorker = (room) => {
  const s1 = room.find(FIND_MY_SPAWNS)[0];
  if (!s1.spawning && room.energyAvailable >= 300) {
    console.log('available energy', room.energyAvailable);
    //console.log('r', helper.getAmount(role.REPAIRER, room.name), helper.getAmount(role.HARVESTER, room.name) < maxHarvesters);
    let res = null;
    // We need as much miner as sources. here we place containers and let the miners mine into the containers
    const containers = room.find(FIND_STRUCTURES, { filter: {structureType : STRUCTURE_CONTAINER }});

    if (helper.getAmount(role.HARVESTER, room.name) < room.find(FIND_SOURCES).length && containers.length > 0) {
      res = creepFactory.createHarvester(s1);
    } else if (helper.getAmount(role.WORKER, room.name) < maxWorker) {
      creepFactory.createWorker(s1);
    } else if (helper.getAmount(role.BUILDER, room.name) < maxBuilders && room.find(FIND_MY_CONSTRUCTION_SITES).length > 0) {
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
