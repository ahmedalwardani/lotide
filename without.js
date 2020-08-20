const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const without = function(srcArray, itemsToRemoveArray) {
  const desiredArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    if (!itemsToRemoveArray.includes(srcArray[i])) {
      desiredArray.push(srcArray[i]);
    }
  }
  return desiredArray;
};

module.exports = without;
console.log(assertArraysEqual(without([1, 2, 3, 4, 5], [1, 5]), [2, 3, 4]));

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));