const creepType = {
  DEFENDER: {
    name: 'defender_',
    role: role.DEFENDER,
    action: action.WAIT,
    bodyParts: bodyParts.DEFENDER,
  },
  FIGHTER: {
    name: 'fighter_',
    role: role.FIGHTER,
    action: action.WAIT,
    bodyParts: bodyParts.FIGHTER,
  },
  HEALER: {
    name: 'healer_',
    role: role.HEALER,
    action: action.WAIT,
    bodyParts: bodyParts.HEALER,
  },
  SCOUT: {
    name: 'scout_',
    role: role.SCOUT,
    action: action.WAIT,
    bodyParts: bodyParts.SCOUT,
  },
  HARVESTER: {
    name: 'HARVESTER_',
    role: role.HARVESTER,
    action: action.HARVEST,
    bodyParts: bodyParts.HARVESTER,
  },
  WORKER: {
    name: 'worker_',
    role: role.HARVESTER,
    action: action.HARVEST,
    bodyParts: bodyParts.WORKER,
  },
};

module.exports = creepType;
