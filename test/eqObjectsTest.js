const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjectsTest", () => {
  it("should return true when passed these equal objects: {firstName: 'Ahmed', lastName: 'Alwardani', age: 24} and {firstName: 'Ahmed', lastName: 'Alwardani', age: 24}", () => {
    assert.deepEqual(eqObjects({firstName: "Ahmed", lastName: "Alwardani", age: 24}, {firstName: "Ahmed", lastName: "Alwardani", age: 24}), true);
  });

  it("should return false when passed these equal objects: {firstName: 'Ahmed', lastName: 'Alwardani', age: 24} and {firstName: 'Mohamed', lastName: 'Alwardani', age: 56}", () => {
    assert.deepEqual(eqObjects({firstName: "Ahmed", lastName: "Alwardani", age: 24}, {firstName: "Mohamed", lastName: "Alwardani", age: 56}), false);
  });
});

