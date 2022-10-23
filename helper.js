const helper = {
  createName: (creepRole) => {
    return creepRole + Date.now();
  },
  getAmount: (creepRole, roomName = null) => {
    if (roomName) {
      return helper.getCreepsByRoomAndRole(roomName, creepRole).length;
    }
    return helper.getCreepsByRole(creepRole).length;
  },
  getCreepsByRole: (creepRole, roomName = null) => {
    if (roomName) {
      return helper.getCreepsByRoomAndRole(roomName, creepRole);
    }
    return _.filter(Game.creeps, (creep) => creep.memory.role == creepRole);
  },
  getCreepsByRoom: (roomName) => {
    return _.filter(Game.creeps, (creep) => creep.room.name == roomName);
  },
  getCreepsByRoomAndRole: (roomName, creepRole) => {
    return helper.getCreepsByRoom(roomName).filter((creep) => creep.memory.role == creepRole);
  },
  changeRole: (creep, creepRole) => {
    creep.memory.role = creepRole;
  },
  changeAction: (creep, creepAction) => {
    creep.memory.action = creepAction;
  },
  setPriority: (creep, priority) => {
    creep.memory.priority = priority;
  },
};

module.exports = helper;
