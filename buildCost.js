var body = [Game.ATTACK, Game.MOVE, Game.WORK, Game.CARRY, Game.MOVE];
var buildCost = 0;
for (var bodypart in body) {
  var bodymodule = body[bodypart];
  switch (bodymodule) {
    case Game.MOVE:
    case Game.CARRY:
      buildCost += 50;
      break;
    case Game.WORK:
      buildCost += 20;
      break;
    case Game.HEAL:
      buildCost += 200;
      break;
    case Game.TOUGH:
      buildCost += 5;
      break;
    case Game.ATTACK:
      buildCost += 100;
      break;
    case Game.RANGED_ATTACK:
      buildCost += 150;
      break;
  }
}
console.log(body + ' costs ' + buildCost);
