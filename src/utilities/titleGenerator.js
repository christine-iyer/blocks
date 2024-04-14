// our string
const _ = require("lodash");

let A = "While my successor ";
let B = "grovels as Trump's handmaiden  ";
let C = "here on Long Island.";

// splits every letter in string into an item in our array
// insert a space before last word in line one, and the last word on line 2.

let newArray = A.concat(B).concat(C);

// console.log(newArray.trim().split(""));
// var array1 = ["the red dog goes fast"];
// array1.split();
// var array2 = ["then the dog slows, then speeds up."];
// var array3 = ["Wow. That dog can go"];

// myArray = array1.concat(array2, array3);
// console.log(myArray[1]);
// newArray = myArray.split('');

// console.log(newArray);

// console.log(newArray);
// console.log(typeof newArray);
// let gfg = _.sampleSize(newArray, 7);
// // console.log([Math.floor(Math.random() * newArray.length)]);
// console.log(gfg);
const message = A;
// let result = message.split(" ");
function result(text) {
  return text.split(" ");
}

// console.log(result(newArray));

let gfg = _.sampleSize(result(newArray), 2);
console.log(_.upperFirst(gfg[0]), _.upperFirst(gfg[1]));
