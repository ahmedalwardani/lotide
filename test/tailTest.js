const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");


assertArraysEqual(tail(["Hi", "there", "guys"]), ["there", "guys"]);
assertArraysEqual(tail(["Ahmed", "Mohamed", "Alwardani"]), ["Mohamed", "Alwardani"]);
