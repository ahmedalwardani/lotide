const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length !== arr2.length) {
    isEqual = false;
    return isEqual;
  }
  for (let i = 0; i < arr1.length; i++) {
    //if individual entries are arrays in themselves
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      return eqArrays(arr1[i], arr2[i]);
    }
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


module.exports = eqArrays;


