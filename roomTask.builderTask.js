// harvest or build
const builderTask = (room) => {
  const sources = room.find(FIND_SOURCES); // should be 2

  if (sources) {
    let currentSource = sources[0];
    const builders = helper.getCreepsByRole(role.BUILDER, room.name);
    for (let i = 0; i < builders.length; i++) {
      if (!task.withdraw(builders[i]) && builders[i].memory.action != action.BUILD) {
        helper.changeAction(builders[i], action.BUILD);
      }
      if (!task.build(builders[i]) && builders[i].memory.action != action.WITHDRAW) {
        helper.changeAction(builders[i], action.WITHDRAW);
      }
    }
  } else {
    sayText(room, 'NO SOURCE');
  }
};

module.exports = builderTask;
