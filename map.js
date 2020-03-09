const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// const results1 = map(words, word => word[0]);
// console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));

// const results2 = map(words, word => word.length);
// console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

