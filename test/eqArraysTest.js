const eqArrays = require("../eqArrays");

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));