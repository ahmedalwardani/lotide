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

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]));