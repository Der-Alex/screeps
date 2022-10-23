const creepFactory = require('creepFactory');
const helper = require('helper');
const role = require('role');
const action = require('action');
const task = require('task');
const tower = require('tower');

const maxHarvesters = 2;
const maxBuilders = 2;
const maxUpgraders = 10;
const maxWorkers = 16;
let currentRole = role.HARVESTER;
let sources = null;
const myRoom = {
  run: (room) => {
    // find sources in room
    sources = room.find(FIND_SOURCES); // should be 2
    // build breeper
    // give role until enough of same role
    // then change role
    // if enough creeper - stop
    if (helper.getCreepsByRoom(room.name).length < maxWorkers) {
      createWorker(room);
    } else {
      currentRole = role.HARVESTER;
      say(room, 'MAX WORKER REACHED');
    }
    harvesterWork(room);
    builderWork(room);
    upgraderWork(room);
    repairWork(room);
    tower.work(room);
  },
};

const createWorker = (room) => {
  const s1 = room.find(FIND_MY_SPAWNS)[0];
  if (!s1.spawning && room.energyAvailable >= 300) {
    console.log('available energy', room.energyAvailable);

    let r = Math.floor(Math.random() * 3);
    console.log('random', r);
    let res = null;
    switch (r) {
      case 0:
        res = creepFactory.createHarvester(s1);
        break;
      case 1:
        res = creepFactory.createBuilder(s1);
        break;
      case 2:
        res = creepFactory.createUpgrader(s1);
      default:
        break;
    }
    say(room, 'WORKER STATE: ' + res);
  }
  if (s1.spawning) {
    const spawningCreep = Game.creeps[s1.spawning.name];
    //helper.changeRole(spawningCreep, currentRole);
    s1.room.visual.text('🛠️:' + spawningCreep.memory.role + ':' + spawningCreep.name, s1.pos.x + 1, s1.pos.y, {
      align: 'left',
      opacity: 0.8,
    });
  }
};

const say = (room, text) => {
  room.visual.text(text, 0, 0, {
    align: 'left',
    opacity: 0.8,
  });
};

// harvest or transfer energy
const harvesterWork = (room) => {
  let priority = null;
  if (sources) {
    let currentSource = sources[1];
    const harvesters = helper.getCreepsByRole(role.HARVESTER, room.name);
    for (let i = 0; i < harvesters.length; i++) {
      if (!task.harvest(harvesters[i], currentSource) && harvesters[i].memory.action != action.TRANSFER) {
        helper.changeAction(harvesters[i], action.TRANSFER);
      }
      if (!task.transfer(harvesters[i]) && harvesters[i].memory.action != action.HARVEST) {
        helper.changeAction(harvesters[i], action.HARVEST);
      }
    }
  } else {
    say(room, 'NO SOURCE');
  }
};

// harvest or build
const builderWork = (room) => {
  if (sources) {
    let currentSource = sources[0];
    const builders = helper.getCreepsByRole(role.BUILDER, room.name);
    for (let i = 0; i < builders.length; i++) {
      if (!task.harvest(builders[i], currentSource) && builders[i].memory.action != action.BUILD) {
        helper.changeAction(builders[i], action.BUILD);
      }
      if (!task.build(builders[i]) && builders[i].memory.action != action.HARVEST) {
        helper.changeAction(builders[i], action.HARVEST);
      }
    }
  } else {
    say(room, 'NO SOURCE');
  }
};

// harvest or upgrade
const upgraderWork = (room) => {
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
    say(room, 'NO SOURCE');
  }
};

// harvest or repair
const repairWork = (room) => {
  if (sources) {
    let currentSource = sources[0];
    const repairers = helper.getCreepsByRole(role.REPAIR, room.name);
    for (let i = 0; i < repairers.length; i++) {
      if (!task.harvest(repairers[i], currentSource) && repairers[i].memory.action != action.REPAIR) {
        helper.changeAction(repairers[i], action.REPAIR);
      }
      if (!task.repair(repairers[i]) && repairers[i].memory.action != action.HARVEST) {
        helper.changeAction(repairers[i], action.HARVEST);
      }
    }
  } else {
    say(room, 'NO SOURCE');
  }
};

module.exports = myRoom;
