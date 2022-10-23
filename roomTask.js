createWorker = require('roomTask.createWorker');
harvesterTask = require('roomTask.harvesterTask');
builderTask = require('roomTask.builderTask');
upgraderTask = require('roomTask.upgraderTask');
repairerTask = require('roomTask.repairerTask');
towerTask = require('roomTask.towerTask');

const roomTask = {
  run: (room) => {
    // find sources in room
    // build breeper
    // give role until enough of same role
    // then change role
    // if enough creeper - stop
    createWorker(room);
    if (helper.getAmount(role.HARVESTER, room.name) > 0) {
      harvesterTask(room);
    }
    if (helper.getAmount(role.BUILDER, room.name) > 0) {
      builderTask(room);
    }
    if (helper.getAmount(role.UPGRADER, room.name) > 0) {
      upgraderTask(room);
    }
    if (helper.getAmount(role.REPAIRER, room.name) > 0) {
      repairerTask(room);
    }
    towerTask(room);
  },
};

module.exports = roomTask;
