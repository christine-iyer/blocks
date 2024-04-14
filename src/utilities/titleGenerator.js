// our string
const _ = require("lodash");
let A = "the red dog goes fast";
let B = "then the dog slows, then speeds up.";
let C = "Wow. That dog can go";

// splits every letter in string into an item in our array
// insert a space before last word in line one, and the last word on line 2.

let newArray = A.concat(B).concat(C);

console.log(newArray);
let gfg = _.sampleSize(newArray, 3);
console.log(gfg);
