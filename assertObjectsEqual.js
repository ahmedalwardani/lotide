const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  let result = object1Keys.length === object2Keys.length;

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

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        result = false;
      }
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  // console.log(`Example label: ${inspect(actual)}`);
};

assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
assertObjectsEqual({a: "1", b: "1"}, {b: "2", a: "1"});
assertObjectsEqual({a: "1", b: "1", c: "0"}, {b: "2", a: "1"});
