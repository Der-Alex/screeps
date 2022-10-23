const tower = {
  work: (room) => {
    const towers = room.find(FIND_MY_STRUCTURES, {
      filter: (structure) => structure.structureType == STRUCTURE_TOWER,
    });

    for (const tower of towers) {
      if (tower) {
        const closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: (structure) => structure.hits < structure.hitsMax,
        });
        if (closestDamagedStructure) {
          tower.repair(closestDamagedStructure);
        }

        const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
          tower.attack(closestHostile);
        }

        const damagedCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, {
          filter: (creep) => creep.hits < creep.hitsMax,
        });
      }
    }
  },
};

module.exports = tower;
