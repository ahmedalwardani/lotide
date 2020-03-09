const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, "ahmed", 3], [1, "ahmed", 3]);
assertArraysEqual([1, 0, 3], [1, "ahmed", 3]);