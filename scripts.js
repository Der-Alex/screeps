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
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').UPGRADER)].memory.role = require('role').HARVESTER;
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.role = require('role').REPAIRER;

// give harvester priority structure transfer
Game.creeps[Object.keys(Game.creeps).find((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER)].memory.priority = STRUCTURE_TOWER;

// find by role
Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').HARVESTER).length;
Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').BUILDER).length;
Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').UPGRADER).length;
Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.role == require('role').REPAIRER).length;
Object.keys(Game.creeps).filter((creep) => Game.creeps[creep].memory.priority && Game.creeps[creep].memory.priority != null).length;
