const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length !== arr2.length) {
    isEqual = false;
    return isEqual;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      return eqArrays(arr1[i], arr2[i]);
    }
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};


module.exports = eqArrays;


