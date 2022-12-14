// create new Worker
require('creepFactory').createWorker(Game.spawns.Spawn1);
require('creepFactory').createBuilder(Game.spawns.Spawn1);
require('creepFactory').createHarvester(Game.spawns.Spawn1);
require('creepFactory').createUpgrader(Game.spawns.Spawn1);
require('creepFactory').createRepairer(Game.spawns.Spawn1);

// create new harvester with structure priority
require('creepFactory').createHarvester(Game.spawns.Spawn1, STRUCTURE_TOWER); // STRUCTURE_SPAWN, STRUCTURE_TOWER

// change role
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.role = require('role').BUILDER;
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.role = require('role').UPGRADER;
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.role = require('role').REPAIRER;
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').UPGRADER)].memory.role = require('role').HARVESTER;
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').BUILDER)].memory.role = require('role').HARVESTER;

// give harvester priority structure transfer
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.priority = STRUCTURE_TOWER;

// find by role
console.log('h', Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER).length,
'b', Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').BUILDER).length,
'u', Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').UPGRADER).length,
'r', Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').REPAIRER).length,
'h-p', Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.priority && Game.creeps[creep].memory.priority != null).length);
