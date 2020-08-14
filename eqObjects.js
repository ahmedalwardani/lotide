const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1); //returns [an array of object1 keys]
  let object2Keys = Object.keys(object2); //returns [an array of object2 keys]
  let result = object1Keys.length === object2Keys.length; //check first if both objects have the same number of key-value pairs
  
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //if the value of the key is an array in both objects (both values in the two objects at that key are arrays)
      if (!(eqArrays(object1[key], object2[key]))) { //check if the arrays are not equal
        result = false; //if they are not equal, no need to continue
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") { //if the value of the key is an object in both objects (both values in the two objects at that key are objects)
      result = eqObjects(object1[key], object2[key]); //call the same function again using the appropriate objects
    } else if (object1[key] !== object2[key]) { //if the values are primitive values that are not equal
      result = false;
    }
  }
  return result;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);


module.exports = eqObjects;


