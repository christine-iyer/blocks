require('dotenv').config();
require('./database');

const Haiku = require('../models/haiku');
const Author = require('../models/author');

(async function() {
     await Author.deleteMany({});
     const author = await Author.create([
       { name: 'Chris' },
       { name: 'Claire' },
       { name: 'Laura' },
       { name: 'Leah' },
       { name: 'Paul' },
       { name: 'Other' }
       
     ]);
     



  await Haiku.deleteMany({});
  const haikus = await Haiku.create([

[
     {
        _id: "6604a8bb37ce42441733fa4c",
         author: "Laura",
         one: "Starting tomorrow,",
         two: "We write one haiku a day,",
         three: "Share and celebrate!",
         like: 5
     },
     {
        _id: "6604a8bb37ce42441733fa4d",
         author: "Laura",
         one: "Tomorrow we write.",
         two: "Small sketches of whatever",
         three: "inspires, amuses.",
         like: 0,
         
     },
     {
        _id: "6604a8bb37ce42441733fa50",
         author: "Leah",
         one: "I'm in the bathroom",
         two: "And remember: Haiku Day!",
         three: "Good Morning my friends.",
         like: 2,
         
     },
     {
        _id: "6604a8bb37ce42441733fa51",
         author: "Chris",
         one: "Did Bob. 3 new words. ",
         two: "Giggle mug. Morbs. Tickety ",
         three: "boo. Boo, I see you. ",
         like: 0,
         
     },
     {
        _id: "6604a8bb37ce42441733fa52",
         author: "Laura",
         one: "March. Birds make their nest:",
         two: "sticks, vines in the kitchen eaves.",
         three: "Busy! Welcome back.",
         like: 0,
        
     },
     {
        _id: "6604a8bb37ce42441733fa53",
         author: "Paul",
         one: "Yesterday the sun",
         two: "Sparkled from diamond edges",
         three: "Much softer today",
         like: 2,
        
     },
     {
        _id: "6604a8bb37ce42441733fa54",
         author: "Laura",
         one: "Outside my window",
         two: "Pink flowers slowly open ",
         three: "Blooming just for me 🌸🌞",
         like: 2,
         
     },
     {
        _id: "6604a8bb37ce42441733fa55",
         author: "Leah",
         one: "Today is the day",
         two: "My job will be decided",
         three: "By the SCOTUS folks",
         like: 1,
        
     },
     {
        _id: "6604a8bb37ce42441733fa56",
         author: "Laura",
         one: "Challah loaf, size and",
         two: "heft of a chubby toddler.",
         three: "We can’t finish it.",
         like: 5,
         
     },
     {
        _id: "6604a8bb37ce42441733fa57",
         author: "Chris",
         one: "Leah's summer starts",
         two: "The murders over. Thank god.",
         three: "Let the games begin.",
         like: 0,
        
     },
     {
        _id: "6604a8bb37ce42441733fa58",
         author: "Paul",
         one: "Yall start too early",
         two: "Poetry needs more dreaming",
         three: "Its called beauty sleep",
         like: 0
     },
     {
        _id: "6604a8bb37ce42441733fa4e",
         author: "Paul",
         one: "I didn't learn how",
         two: "to write a proper haiku",
         three: "but I can read them",
         like: 0
     },
     {
        _id: "6604a8bb37ce42441733fa4f",
         author: "Laura",
         one: "You're so funny and",
         two: "I feel so dumb. Whoops! I say,",
         three: "I am a big fool!",
         like: 0
     },
     {
        _id: "6605a612b8f09a39f903f3c1",
         author: "Chris",
         one: "P-U, a haiku,",
         two: "rhyme, pine, fine wine, sublime you.",
         three: "Time is up. Beef stew.",
         "title": "Beef Stew",
         color: "#fbb6b6",
         like: 0
     },
     {
        _id: "6605d2a9b8f09a39f903f3c4",
         author: "Chris",
         one: "Snappy is the way",
         two: "to make such a day happy.",
         three: "Snap fingers. Say yeah.",
         "title": "Snappy Yeah",
         color: "#ff38f8",
         like: 0,
         "comment": ""
     },
     {
        _id: "6605e70bed7fc70ebcdad04c",
         author: "Chris",
         one: "One tow three four five",
         two: "six seven eight ni ne ten",
         three: "eleven thirteen",
         "title": "Test",
         color: "#e88c8c",
         like: 0,
         "comment": ""
     },
     {
        _id: "6606e152daae4497587ee4fc",
         author: "Chris",
         one: "Pickle pickle ball   ",
         two: "Ball pickle ball pickle ball ",
         three: "Ball ball pickle ball",
         "title": "ESPN",
         color: "#9effda",
         like: 0,
         "comment": ""
     },
     {
        _id: "660720176a6c6a153fecd5fe",
         author: "Leah",
         one: "Folding laundry now",
         two: "Yet still more to wash today",
         three: "I am Sisyphus",
         "title": "I am Sisyphus",
         color: "#665280",
         like: 0,
         "comment": ""
     },
     {
        _id: "660722d0a4b9555b04756b9a",
         author: "Leah",
         one: "Folding laundry now",
         two: "Yet still more to wash today",
         three: "I am Sisyphus",
         "title": "haiku.color,",
         color: "#f77373",
         like: 1,
         "comment": ""
     },
     {
        _id: "66072e1dc7071deedf4daa8e",
         author: "Laura",
         one: "While my successor",
         two: "grovels as Trump's handmaiden ",
         three: "here on Long Island. ",
         "title": "The Handmaster's Tail",
         color: "#fd3030",
         like: 1,
         "comment": ""
     },
     {
        _id: "660875418b27c8305b127969",
         author: "Chris",
         one: "roses are read, ya",
         two: "violets are blue, ya ya",
         three: "sugar is sweet? Duh",
         "title": "Violets",
         color: "#c78df7",
         like: 0,
         "comment": ""
     },
     {
        _id: "66097dbf6f9005c7611cbe4f",
         author: "Laura",
         one: "Search for connection",
         two: "Is it discovered at church?",
         three: "Maybe, maybe not.",
         "title": "The Church Connection Question",
         color: "#6166ff",
         like: 0,
         "comment": ""
     },
     {
        _id: "66097e546f9005c7611cbe53",
         author: "Leah",
         one: "It is Easter morn",
         two: "Where will we find our breakfast?",
         three: "Not good for the Jews",
         "title": "Not Good for the Jews",
         color: "#f94e4e",
         like: 0,
         "comment": ""
     },
     {
        _id: "66097ea56f9005c7611cbe55",
         author: "Paul",
         one: "I fell fast asleep",
         two: "while meditating in bed",
         three: "Blissful, sunlit dreams",
         "title": "Sunlit Dreams",
         color: "#f5db38",
         like: 0,
         "comment": ""
     },
     {
        _id: "66097f7b6f9005c7611cbe59",
         author: "Chris",
         one: "Ready? Set, YELLOW!",
         two: "Go bounce on the trampoline.",
         three: "If you want, I mean.",
         "title": "Yellow Trampoline",
         color: "#ff6a1a",
         like: 0,
         "comment": ""
     },
     {
        _id: "660abbe416a432784e54ef5b",
         author: "Chris",
         one: "Fear of missing out?",
         two: "Find the joy in saying no.",
         three: "How about fuck no!",
         "title": "FOMO",
         color: "#f99595",
         like: 0,
         "comment": ""
     },
     {
        _id: "660abfdb16a432784e54ef5e",
         author: "Laura",
         one: "The earth is massive.",
         two: "so we stick to it as it",
         three: "is held by the sun",
         "title": "",
         color: "#e2f109",
         like: 0,
         "comment": ""
     },
     {
        _id: "660ac02316a432784e54ef61",
         author: "Chris",
         one: "Wow, that is so good.",
         two: "Alas, now I get physics.",
         three: "Such staggering stuff.",
         "title": "Staggering sun",
         color: "#ff6a38",
         like: 0,
         "comment": ""
     },
     {
        _id: "660ac2d816a432784e54ef6b",
         author: "Laura",
         one: "You rounded it out",
         two: "with verve and penache, which I ",
         three: "would struggle to match",
         "title": "To Chris, regarding physics of the ☀️",
         color: "#d6f202",
         like: 0,
         "comment": ""
     },
     {
        _id: "660c384003f65e7f576c0742",
         author: "Leah",
         one: "Steam dances above,",
         two: "Dark elixir soothes the soul,",
         three: "Morning's gift of life.",
         "title": "Brown Life",
         color: "#6d3c37",
         like: 0,
         "comment": ""
     },
     {
        _id: "660d774efc690124962931c1",
         author: "Chris",
         one: "Pick up one, slip two...",
         two: "the Tunisian crochet",
         three: "stitch in a nutshell",
         "title": "Nuts and Slips",
         color: "#41c13e",
         like: 0,
         "comment": ""
     },
     {
        _id: "660d7a1802dafbeedc29a919",
         author: "Paul",
         one: "Between chores, errands,",
         two: "And our granddaughter all day,",
         three: "Forgot about art.",
         "title": "Chores, errands, art, oh my!!",
         color: "#f6e41e",
         like: 0,
         "comment": ""
     },
     {
        _id: "660d7ac6dd6956bdf96e33ba",
         author: "Laura",
         one: "Poor old art, waiting",
         two: "just outside the box office.",
         three: "His friend never came.",
         "title": "Art, alone",
         color: "#6a78e2",
         like: 2,
         "comment": ""
     },
     {
        _id: "660d7b47dd6956bdf96e33be",
         author: "leah",
         one: "Today I am sure",
         two: "I am not a mint farmer",
         three: "need a new hobby.",
         "title": "Dead mint",
         color: "#ff5252",
         like: 3,
         "comment": ""
     },
     {
        _id: "660dbc37bbb3926ce51a1dd4",
         author: "Laura",
         one: "Spearmint sprouts outside.",
         two: "The bossy weed takes over.",
         three: "Crowds the other plants",
         "title": "Spearmintal Claustrophobia",
         color: "#6deeb2",
         like: 2,
         "comment": ""
     },
     {
        _id: "660dbcf0bbb3926ce51a1dda",
         author: "laura",
         one: "Optimism, joy, ",
         two: "gratitude, keen perception",
         three: "from my coffee cup.",
         "title": "I'll take my coffee keen.",
         color: "#6b3333",
         like: 0,
         "comment": ""
     },
     {
        _id: "660dbdcdbbb3926ce51a1de4",
         author: "Claire",
         one: "My hair is in braids",
         two: "because it is quite greasy",
         three: "too lazy to wash",
         "title": "2 Layzee 2 Warsh",
         color: "#9241c8",
         like: 5,
         "comment": ""
     },
     {
        _id: "66101823d120b2e4e8a90652",
         author: "laura",
         one: "The little dog barks",
         two: "at the door as you walk by.",
         three: "He thinks he has won.",
         "title": "Dog Wins",
         color: "#d53434",
         like: 0,
         "comment": ""
     },
     {
        _id: "661018b8d120b2e4e8a90655",
         author: "chris",
         one: "It sounds upside down.",
         two: "Microchimerism is",
         three: "genes from babe to mom.",
         "title": "TALK ABOUT LIVING THROUGH YOUR KIDS",
         color: "#7b6fd8",
         like: 0,
         "comment": ""
     },
     {
        _id: "66101918d120b2e4e8a90657",
         author: "paul",
         one: "A U.S. Passport,",
         two: "Ticket to global priviledge, ",
         three: "Mine arrived today",
         "title": "It's reall in the mail.",
         color: "#b8f07f",
         like: 0,
         "comment": ""
     },
     {
        _id: "661019b6d120b2e4e8a90659",
         author: "laura",
         one: "A rumbling truck?",
         two: "A dramatic April wind?",
         three: "The earth, she did shake.",
         "title": "She quaked.",
         color: "#e92020",
         like: 0,
         "comment": ""
     },
     {
        _id: "661019eed120b2e4e8a9065b",
         author: "leah",
         one: "I hear of a quake",
         two: "from NYC to Philly",
         three: "My kid missed it all.",
         "title": "I missed it too, Leah",
         color: "#f06060",
         like: 0,
         "comment": ""
     },
     {
        _id: "66106d39fd130f64c3919b4e",
         author: "chris",
         one: "One tow three four five",
         two: "six seven eight ni ne ten",
         three: "eleven thirteen",
         "title": "m",
         color: "#cc2828",
         like: 0,
         "comment": ""
     }
 ]

     ]);

  console.log(haikus)

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