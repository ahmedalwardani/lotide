const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  
};

// assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
// assertObjectsEqual({a: "1", b: "1"}, {b: "2", a: "1"});
// assertObjectsEqual({a: "1", b: "1", c: "0"}, {b: "2", a: "1"});

module.exports = assertObjectsEqual;
