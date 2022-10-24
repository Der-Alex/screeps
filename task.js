build = require('task.build');
harvest = require('task.harvest');
repair = require('task.repair');
transfer = require('task.transfer');
upgrade = require('task.upgrade');
withdraw = require('task.withdraw');

const task = {
  build,
  harvest,
  repair,
  transfer,
  upgrade,
  withdraw
};

module.exports = task;
