const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  let result = object1Keys.length === object2Keys.length;
  
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        result = false;
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      result = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
};

module.exports = eqObjects;
