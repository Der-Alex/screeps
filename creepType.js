const helper = require('helper');
const role = require('role');
const action = require('action');
const bodyParts = require('bodyParts');

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
  WORKER: {
    name: 'worker_',
    role: role.HARVESTER,
    action: action.HARVEST,
    bodyParts: bodyParts.WORKER,
  },
};

module.exports = creepType;
