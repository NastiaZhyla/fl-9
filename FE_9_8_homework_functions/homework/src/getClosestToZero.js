let getClosestToZero = [-3, -9, 8, 16, 2],
goal = 0;
/*eslint no-magic-numbers: ["error", { "ignore": [0, -3, -9, 8, 16, 2]}]*/  
let result = getClosestToZero.reduce(function(prev, curr) {
  return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
});
console.log(result);
