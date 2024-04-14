export default function countSyllables(x) {
     var syllableCount = x.match(/[aeiouy]{1,2}/gi).length;
   
     return syllableCount;
   }