const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const fullName = ["Ahmed", "Mohamed", "Alwardani"];
tail(fullName);
assertEqual(fullName.length, 3);

assertEqual([], 0);
assertEqual(["test"], 0);