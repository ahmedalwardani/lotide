const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      flattenedArray.push(array[i]);
    } else if (Array.isArray(array[i])) {
      flattenedArray.push(...array[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
// console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]));