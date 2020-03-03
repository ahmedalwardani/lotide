const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = function(array) {
  return array.slice(1);
};

const fullName = ["Ahmed", "Mohamed", "Alwardani"];
tail(fullName);
console.log(assertEqual(fullName.length, 3));

console.log(assertEqual([], 0));
<<<<<<< HEAD
console.log(assertEqual(["test"], 0));
=======
console.log(assertEqual(["test"], 0));
>>>>>>> 7675102ba7022495392c0e3cb82f30994b8175be
