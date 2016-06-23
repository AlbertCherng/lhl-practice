var assert = require("assert");

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(set){
  var xSquared = set.x * set.x;
  var ySquared = set.y * set.y;
  return Math.sqrt(xSquared + ySquared);
})




assert.deepEqual(result, [5, 13, 17]);