const creepType = require('creepType');
const role = require('role');
const action = require('action');

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
  createWorker: (spawn) => {
    console.log('creating worker', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER);
  },
  createBuilder: (spawn) => {
    console.log('creating builder', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.BUILDER, action.HARVEST);
  },
  createUpgrader: (spawn) => {
    console.log('creating updater', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.UPGRADER, action.HARVEST);
  },
  createHarvester: (spawn, priority = null) => {
    console.log('creating harvester', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.UPGRADER, action.HARVEST, priority);
  },
  createRepairer: (spawn) => {
    console.log('creating repairer', spawn);
    return creepFactory.createCreep(spawn, creepType.WORKER, role.REPAIR, action.REPAIR);
  },
};
module.exports = creepFactory;
