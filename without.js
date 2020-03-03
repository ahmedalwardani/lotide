const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const without = function(srcArray, itemsToRemoveArray) {
  const desiredArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    if (!itemsToRemoveArray.includes(srcArray[i])) {
      desiredArray.push(srcArray[i]);
    }
  }
  return desiredArray;
};

console.log(without([1, 2, 3, 4, 5], [1, 5]));

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));