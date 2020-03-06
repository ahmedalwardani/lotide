const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)); // => true
console.log(assertEqual(eqObjects({ a: { s: 1, q: 2 }}, {  s: 1, q: 2 }), false)); // => true
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2, c: "hi" }, { a: { z: 1 }, b: 2 }), false)); // => false



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3"};

// console.log(assertEqual(eqObjects(ab, ba), true));
// console.log(assertEqual(eqObjects(ab, abc), true));


const students = { a: ["Ali", "Ahmed"], s: "steven", c: "1", d: ["2", 3] };
const dc = { s: "steven", c: "1", d: ["2", 3], a: ["Ali", "Ahmed"] };
// console.log(assertEqual(eqObjects(students, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd, cd2), true));
