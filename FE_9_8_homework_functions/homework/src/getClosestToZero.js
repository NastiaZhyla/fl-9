var getClosestToZero = [-3, -9, 8, 16, 2],
  goal = 0;

var getClosestToZero = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});
console.log(getClosestToZero);