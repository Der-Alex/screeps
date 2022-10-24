const creepFactory = {
  createCreep: (spawn, creepType, creepRole = null, creepAction = null, priority = null) => {
    let name = creepType.name + Date.now();
    creepRole = creepRole || creepType.role;
    creepAction = creepAction || creepType.action;
    return spawn.spawnCreep(creepType.bodyParts, name, { memory: { role: creepRole, action: creepAction, priority } });
  },
  createDefender: (spawn) => {
    return creepFactory.createCreep(spawn, creepType.DEFENDER);
  },
  createFighter: (spawn) => {
    return creepFactory.createCreep(spawn, creepType.FIGHTER);
  },
  createHealer: (spawn) => {
    return creepFactory.createCreep(spawn, creepType.HEALER);
  },
  createScout: (spawn) => {
    return creepFactory.createCreep(spawn, creepType.SCOUT);
  },
  createBuilder: (spawn) => {
    console.log('creating builder', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.BUILDER, action.HARVEST);
  },
  createUpgrader: (spawn) => {
    console.log('creating updater', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.UPGRADER, action.HARVEST);
  },
  createWorker: (spawn, priority = null) => {
    console.log('creating worker', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.WORKER, action.HARVEST, priority);
  },
  createHarvester: (spawn, priority = null) => {
    console.log('creating harvester', spawn);
    return creepFactory.createCreep(spawn, creepType.HARVESTER, role.HARVESTER, action.HARVEST);
  },
  
  createRepairer: (spawn) => {
    console.log('creating repairer', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.REPAIRER, action.REPAIR);
  },
};
module.exports = creepFactory;
