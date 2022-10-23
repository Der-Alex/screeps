const helper = require('helper');
const s1 = Game.spawns['Spawn1'];

const roleUpgrader = {
    /** @param {Creep} creep **/
    run: (creep) => {
        if (!creep.memory.action) {
            creep.memory.action = 'upgrade';
	        creep.say('⬆');
        }

        if (creep.store.getFreeCapacity() <= 0) {
            creep.memory.action = 'upgrade';
            creep.say('⬆');
        }
        if (creep.store.getUsedCapacity() <= 0) {
            creep.memory.action = 'harvest';
            creep.say('⛏️');
        }
	    if (creep.memory.action == 'upgrade') {
            if(creep.room.controller) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
	    }
	    if (creep.memory.action == 'harvest') {
            const sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#f1c40f' }});
            }
	    }
    },
    create: () => {
        let created = s1.spawnCreep([WORK,CARRY,MOVE], helper.createName('upgrader'), { memory: { role: 'upgrader', action: 'harvest' } });
        console.log('create upgrader', created);
    }
}
module.exports = roleUpgrader;