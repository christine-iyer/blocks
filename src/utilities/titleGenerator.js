// our string
const _ = require("lodash");

let A = "While my successor ";
let B = "grovels as Trump's handmaiden  ";
let C = "here on Long Island.";

// splits every letter in string into an item in our array
// insert a space before last word in line one, and the last word on line 2.

let newArray = A.concat(B).concat(C);

const message = A;
// let result = message.split(" ");
function result(text) {
  return text.split(" ");
}

let gfg = _.sampleSize(result(newArray), 2);
console.log(_.upperFirst(gfg[0]), _.upperFirst(gfg[1]));
