require('dotenv').config();
require('./database');

const Haiku = require('../models/haiku');

(async function() {



  await Haiku.deleteMany({});
  const items = await Haiku.create([

     {
          author: "Laura",
          one: "Starting tomorrow,",
          two: "We write one haiku a day,",
          three: "Share and celebrate!"
     },
     {
          author: "Laura",
          one: "Tomorrow we write.",
          two: "Small sketches of whatever",
          three: "inspires, amuses."
     },
     {
          author: "Paul",
          one: "I didn't learn how",
          two: "to write a proper haiku",
          three: "but I can read them"
     },

     {
          author: "Laura",
          one: "You're so funny and",
          two: "I feel so dumb. Whoops! I say,",
          three: "I am a big fool!"
     },
     {
          author: "Leah",
          one: "I'm in the bathroom",
          two: "And remember: Haiku Day!",
          three: "Good Morning my friends."
     },
     {
          author: "Chris",
          one: "Did Bob. 3 new words. ",
          two: "Giggle mug. Morbs. Tickety ",
          three: "boo. Boo, I see you. "
     },
     {
          author: "Laura",
          one: "March. Birds make their nest:",
          two: "sticks, vines in the kitchen eaves.",
          three: "Busy! Welcome back."
     },
     {
          author: "Paul",
          one: "Yesterday the sun",
          two: "Sparkled from diamond edges",
          three: "Much softer today"
     },
     {
          author: "Claire",
          one: "Outside my window",
          two: "Pink flowers slowly open ",
          three: "Blooming just for me 🌸🌞"
     },
     {
          author: "Leah",
          one: "Today is the day",
          two: "My job will be decided",
          three: "By the SCOTUS folks"
     },
     {
          author: "Laura",
          one: "Challah loaf, size and",
          two: "heft of a chubby toddler.",
          three: "We can’t finish it."
     },
     {
          author: "Chris",
          one: "Leah's summer starts",
          two: "The murders over. Thank god.",
          three: "Let the games begin."
     },
     {
          author: "Paul",
          one: "Yall start too early",
          two: "Poetry needs more dreaming",
          three: "Its called beauty sleep"
     }

     ]);

  console.log(items)

  process.exit();

})();













//  const haiku = [
//      {
//           author: "Laura",
//           one: "Starting tomorrow,",
//           two: "We write one haiku a day,",
//           three: "Share and celebrate!"
//      },
//      {
//           author: "Laura",
//           one: "Tomorrow we write.",
//           two: "Small sketches of whatever",
//           three: "inspires, amuses."
//      },
//      {
//           author: "Paul",
//           one: "I didn't learn how",
//           two: "to write a proper haiku",
//           three: "but I can read them"
//      },

//      {
//           author: "Laura",
//           one: "You're so funny and",
//           two: "I feel so dumb. Whoops! I say,",
//           three: "I am a big fool!"
//      },
//      {
//           author: "Leah",
//           one: "I'm in the bathroom",
//           two: "And remember: Haiku Day!",
//           three: "Good Morning my friends."
//      },
//      {
//           author: "Chris",
//           one: "Did Bob. 3 new words. ",
//           two: "Giggle mug. Morbs. Tickety ",
//           three: "boo. Boo, I see you. "
//      },
//      {
//           author: "Laura",
//           one: "March. Birds make their nest:",
//           two: "sticks, vines in the kitchen eaves.",
//           three: "Busy! Welcome back."
//      },
//      {
//           author: "Paul",
//           one: "Yesterday the sun",
//           two: "Sparkled from diamond edges",
//           three: "Much softer today"
//      },
//      {
//           author: "Claire",
//           one: "Outside my window",
//           two: "Pink flowers slowly open ",
//           three: "Blooming just for me 🌸🌞"
//      },
//      {
//           author: "Leah",
//           one: "Today is the day",
//           two: "My job will be decided",
//           three: "By the SCOTUS folks"
//      },
//      {
//           author: "Laura",
//           one: "Challah loaf, size and",
//           two: "heft of a chubby toddler.",
//           three: "We can’t finish it."
//      },
//      {
//           author: "Chris",
//           one: "Leah's summer starts",
//           two: "The murders over. Thank god.",
//           three: "Let the games begin."
//      },
//      {
//           author: "Paul",
//           one: "Yall start too early",
//           two: "Poetry needs more dreaming",
//           three: "Its called beauty sleep"
//      }


// ]