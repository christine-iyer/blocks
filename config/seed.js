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
       { name: 'Lynne' }
       
     ]);
     



  await Haiku.deleteMany({});
  const haikus = await Haiku.create([
    [
        {
            "_id": "6604a8bb37ce42441733fa51",
            "author": "Chris",
            "one": "Did Bob. 3 new words. ",
            "two": "Giggle mug. Morbs. Tickety ",
            "three": "boo. Boo, I see you. ",
            "like": 0,
            "createdAt": "2024-03-27T23:16:11.722Z",
            "updatedAt": "2024-04-12T17:00:45.080Z",
            "__v": 0,
            "title": "Peach"
        },
        {
            "_id": "6604a8bb37ce42441733fa52",
            "author": "Laura",
            "one": "March. Birds make their nest:",
            "two": "sticks, vines in the kitchen eaves.",
            "three": "Busy! Welcome back.",
            "like": 0,
            "createdAt": "2024-03-27T23:16:11.722Z",
            "updatedAt": "2024-04-12T15:38:37.097Z",
            "__v": 0,
            "title": "Edithed in April"
        },
        {
            "_id": "6604a8bb37ce42441733fa54",
            "author": "Laura",
            "one": "Outside my window",
            "two": "Pink flowers slowly open ",
            "three": "Blooming just for me 🌸🌞",
            "like": 2,
            "createdAt": "2024-03-27T23:16:11.723Z",
            "updatedAt": "2024-04-01T14:10:12.511Z",
            "__v": 0
        },
        {
            "_id": "6604a8bb37ce42441733fa55",
            "author": "Leah",
            "one": "Today is the day",
            "two": "My job will be decided",
            "three": "By the SCOTUS folks",
            "like": 1,
            "createdAt": "2024-03-27T23:16:11.723Z",
            "updatedAt": "2024-04-01T14:10:14.431Z",
            "__v": 0
        },
        {
            "_id": "6604a8bb37ce42441733fa56",
            "author": "Laura",
            "one": "Challah loaf, size and",
            "two": "heft of a chubby toddler.",
            "three": "We can’t finish it.",
            "like": 5,
            "createdAt": "2024-03-27T23:16:11.723Z",
            "updatedAt": "2024-04-01T14:10:16.864Z",
            "__v": 0
        },
        {
            "_id": "6604a8bb37ce42441733fa4f",
            "author": "Laura",
            "one": "You're so funny and",
            "two": "A dramatic April wind?",
            "three": "I am a big fool!",
            "like": 0,
            "createdAt": "2024-03-27T23:16:11.722Z",
            "updatedAt": "2024-04-12T14:52:25.229Z",
            "__v": 0
        },
        {
            "_id": "6605d2a9b8f09a39f903f3c4",
            "author": "Chris",
            "one": "Snappy is the way",
            "two": "to make such a day happy.",
            "three": "Snap fingers. Say yeah.",
            "title": "Snappy Yeah",
            "color": "#ff38f8",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-28T20:27:21.004Z",
            "updatedAt": "2024-03-28T20:27:30.901Z",
            "__v": 0
        },
        {
            "_id": "6606e152daae4497587ee4fc",
            "author": "Chris",
            "one": "Pickle pickle ball   ",
            "two": "Ball pickle ball pickle ball ",
            "three": "Ball ball pickle ball",
            "title": "ESPN",
            "color": "#9effda",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-29T15:42:10.692Z",
            "updatedAt": "2024-03-29T15:42:17.766Z",
            "__v": 0
        },
        {
            "_id": "660720176a6c6a153fecd5fe",
            "author": "Leah",
            "one": "Folding laundry now",
            "two": "Yet still more to wash today",
            "three": "I am Sisyphus",
            "title": "I am Sisyphus",
            "color": "#665280",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-29T20:09:59.848Z",
            "updatedAt": "2024-03-31T15:28:11.709Z",
            "__v": 0
        },
        {
            "_id": "66072e1dc7071deedf4daa8e",
            "author": "Laura",
            "one": "While my successor",
            "two": "grovels as Trump's handmaiden ",
            "three": "here on Long Island. ",
            "title": "She quaked, not quacked.",
            "color": "#fd3030",
            "like": 1,
            "comment": "",
            "createdAt": "2024-03-29T21:09:49.899Z",
            "updatedAt": "2024-04-12T14:54:39.955Z",
            "__v": 0
        },
        {
            "_id": "660875418b27c8305b127969",
            "author": "Chris",
            "one": "roses are read, ya",
            "two": "violets are blue, ya ya",
            "three": "sugar is sweet? Duh",
            "title": "Violets",
            "color": "#c78df7",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-30T20:25:37.448Z",
            "updatedAt": "2024-03-30T20:29:12.521Z",
            "__v": 0
        },
        {
            "_id": "66097dbf6f9005c7611cbe4f",
            "author": "Laura",
            "one": "Search for connection",
            "two": "Is it discovered at church?",
            "three": "Maybe, maybe not.",
            "title": "The Church Connection Question",
            "color": "#6166ff",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-31T15:14:07.454Z",
            "updatedAt": "2024-03-31T15:24:48.015Z",
            "__v": 0
        },
        {
            "_id": "66097e546f9005c7611cbe53",
            "author": "Leah",
            "one": "It is Easter morn",
            "two": "Where will we find our breakfast?",
            "three": "Not good for the Jews",
            "title": "Not Good for the Jews",
            "color": "#f94e4e",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-31T15:16:36.110Z",
            "updatedAt": "2024-03-31T15:18:11.860Z",
            "__v": 0
        },
        {
            "_id": "66097ea56f9005c7611cbe55",
            "author": "Paul",
            "one": "I fell fast asleep",
            "two": "while meditating in bed",
            "three": "Blissful, sunlit dreams",
            "title": "Sunlit Dreams",
            "color": "#f5db38",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-31T15:17:57.503Z",
            "updatedAt": "2024-03-31T15:18:06.482Z",
            "__v": 0
        },
        {
            "_id": "66097f7b6f9005c7611cbe59",
            "author": "Chris",
            "one": "Ready? Set, YELLOW!",
            "two": "Go bounce on the trampoline.",
            "three": "If you want, I mean.",
            "title": "Yellow Trampoline",
            "color": "#ff6a1a",
            "like": 0,
            "comment": "",
            "createdAt": "2024-03-31T15:21:31.090Z",
            "updatedAt": "2024-03-31T15:21:39.824Z",
            "__v": 0
        },
        {
            "_id": "660abbe416a432784e54ef5b",
            "author": "Chris",
            "one": "Fear of missing out?",
            "two": "Find the joy in saying no.",
            "three": "How about fuck no!",
            "title": "FOMO",
            "color": "#f99595",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-01T13:51:32.459Z",
            "updatedAt": "2024-04-01T13:51:40.756Z",
            "__v": 0
        },
        {
            "_id": "660abfdb16a432784e54ef5e",
            "author": "Laura",
            "one": "The earth is massive.",
            "two": "so we stick to it as it",
            "three": "is held by the sun",
            "title": "",
            "color": "#e2f109",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-01T14:08:27.072Z",
            "updatedAt": "2024-04-01T14:08:34.111Z",
            "__v": 0
        },
        {
            "_id": "660ac02316a432784e54ef61",
            "author": "Chris",
            "one": "Wow, that is so good.",
            "two": "Alas, now I get physics.",
            "three": "Such staggering stuff.",
            "title": "Staggering sun",
            "color": "#ff6a38",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-01T14:09:39.959Z",
            "updatedAt": "2024-04-01T14:09:47.561Z",
            "__v": 0
        },
        {
            "_id": "660ac2d816a432784e54ef6b",
            "author": "Laura",
            "one": "12345 7777",
            "two": "with verve and penache, which I ",
            "three": "would struggle to match",
            "title": "To Chris, regarding physics of the ☀️",
            "color": "#d6f202",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-01T14:21:12.243Z",
            "updatedAt": "2024-04-13T19:42:50.065Z",
            "__v": 0
        },
        {
            "_id": "660c384003f65e7f576c0742",
            "author": "Leah",
            "one": "Steam dances above,",
            "two": "Dark elixir soothes the soul,",
            "three": "Morning's gift of life.",
            "title": "Brown Life Green Life",
            "color": "#6d3c37",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-02T16:54:24.237Z",
            "updatedAt": "2024-04-12T15:50:03.345Z",
            "__v": 0
        },
        {
            "_id": "660d774efc690124962931c1",
            "author": "Chris",
            "one": "Pick up one, slip two...",
            "two": "the Tunisian crochet",
            "three": "stitch in a nutshell",
            "title": "Nuts and Slips",
            "color": "#41c13e",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-03T15:35:42.560Z",
            "updatedAt": "2024-04-03T15:35:50.590Z",
            "__v": 0
        },
        {
            "_id": "660d7a1802dafbeedc29a919",
            "author": "Paul",
            "one": "Between chores, errands,",
            "two": "And our granddaughter all day,",
            "three": "Forgot about art.",
            "title": "Chores, errands, art, oh my!!",
            "color": "#f6e41e",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-03T15:47:36.298Z",
            "updatedAt": "2024-04-03T15:49:10.548Z",
            "__v": 0
        },
        {
            "_id": "660d7ac6dd6956bdf96e33ba",
            "author": "Laura",
            "one": "Poor old art, waiting",
            "two": "just outside the box office.",
            "three": "His friend never came.",
            "title": "She quaked, not quacked.",
            "color": "#6a78e2",
            "like": 2,
            "comment": "",
            "createdAt": "2024-04-03T15:50:30.068Z",
            "updatedAt": "2024-04-12T14:53:44.779Z",
            "__v": 0
        },
        {
            "_id": "660d7b47dd6956bdf96e33be",
            "author": "Leah",
            "one": "Today I am sure",
            "two": "I am not a mint farmer",
            "three": "need a new hobby.",
            "title": "Dead mint",
            "color": "#ff5252",
            "like": 3,
            "comment": "",
            "createdAt": "2024-04-03T15:52:39.036Z",
            "updatedAt": "2024-04-08T14:13:44.894Z",
            "__v": 0
        },
        {
            "_id": "660dbc37bbb3926ce51a1dd4",
            "author": "Laura",
            "one": "Spearmint sprouts outside.",
            "two": "The bossy weed takes over.",
            "three": "Crowds the other plants",
            "title": "Spearmintal Claustrophobia",
            "color": "#6deeb2",
            "like": 2,
            "comment": "",
            "createdAt": "2024-04-03T20:29:43.554Z",
            "updatedAt": "2024-04-03T20:33:14.230Z",
            "__v": 0
        },
        {
            "_id": "660dbcf0bbb3926ce51a1dda",
            "author": "Laura",
            "one": "Optimism, joy, ",
            "two": "gratitude, keen perception",
            "three": "from my coffee cup.",
            "title": "I'll take my coffee keen.",
            "color": "#6b3333",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-03T20:32:48.244Z",
            "updatedAt": "2024-04-08T14:13:37.721Z",
            "__v": 0
        },
        {
            "_id": "660dbdcdbbb3926ce51a1de4",
            "author": "Claire",
            "one": "My hair is in braids....",
            "two": "bec????ause it is quite greasy.",
            "three": "too lazy to wash.",
            "title": "2 Layzee 2 Warsh ",
            "color": "#9241c8",
            "like": 13,
            "comment": "",
            "createdAt": "2024-04-03T20:36:29.522Z",
            "updatedAt": "2024-04-15T14:25:39.853Z",
            "__v": 0
        },
        {
            "_id": "66101823d120b2e4e8a90652",
            "author": "Laura",
            "one": "The little dog barks",
            "two": "at the door as you walk by.",
            "three": "He thinks he has won.",
            "title": "Dog Wins",
            "color": "#d53434",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-05T15:26:27.567Z",
            "updatedAt": "2024-04-08T14:14:45.131Z",
            "__v": 0
        },
        {
            "_id": "661018b8d120b2e4e8a90655",
            "author": "Chris",
            "one": "It sounds upside down.",
            "two": "Microchimerism is",
            "three": "genes from babe to mom.",
            "title": "TALK ABOUT LIVING THROUGH YOUR KIDS",
            "color": "#7b6fd8",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-05T15:28:56.063Z",
            "updatedAt": "2024-04-08T14:13:07.098Z",
            "__v": 0
        },
        {
            "_id": "66101918d120b2e4e8a90657",
            "author": "Paul",
            "one": "A U.S. Passport,",
            "two": "Ticket to global priviledge, ",
            "three": "Mine arrived today",
            "title": "It's reall in the mail.",
            "color": "#b8f07f",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-05T15:30:32.613Z",
            "updatedAt": "2024-04-08T14:13:01.378Z",
            "__v": 0
        },
        {
            "_id": "661019b6d120b2e4e8a90659",
            "author": "Laura",
            "one": "A rumbling truck??????",
            "two": "A dramatic April wind?",
            "three": "The earth, she did shake.",
            "title": "She quaked, not quacked.",
            "color": "#e92020",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-05T15:33:10.803Z",
            "updatedAt": "2024-04-12T14:50:18.733Z",
            "__v": 0
        },
        {
            "_id": "661019eed120b2e4e8a9065b",
            "author": "Leah",
            "one": "I hear of a quake",
            "two": "from NYC to Philly",
            "three": "My kid missed it all.",
            "title": "I missed it too, Leah",
            "color": "#f06060",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-05T15:34:06.737Z",
            "updatedAt": "2024-04-08T14:15:02.473Z",
            "__v": 0
        },
        {
            "_id": "6613fe51e283724f6f8d95fa",
            "author": "Chris",
            "one": "What gives me hiccups?",
            "two": "Sourdough bread, raw carrots,",
            "three": "too much alcohol.",
            "title": "Haiku Hiccup",
            "color": "#f24a4a",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-08T14:25:21.399Z",
            "updatedAt": "2024-04-08T14:25:21.399Z",
            "__v": 0
        },
        {
            "_id": "66144b35063741dbd039ef82",
            "author": "Paul",
            "one": "Children are more fun",
            "two": "once they have learned to reason,",
            "three": "and enjoy whiskey.",
            "title": "xx",
            "color": "#e8f52e",
            "like": 5,
            "comment": "",
            "createdAt": "2024-04-08T19:53:25.187Z",
            "updatedAt": "2024-04-13T02:23:33.053Z",
            "__v": 0
        },
        {
            "_id": "66158ca7bb2862a41a2c3247",
            "author": "Chris",
            "one": "Where should I start. huh??",
            "two": "I did it all! All of it!",
            "three": "Before three o'clock!!!",
            "title": "",
            "color": "#d94545",
            "like": 4,
            "comment": "",
            "createdAt": "2024-04-09T18:44:55.315Z",
            "updatedAt": "2024-04-12T15:36:41.670Z",
            "__v": 0
        },
        {
            "_id": "6616a1c2ab8628e55759fef0",
            "author": "Chris",
            "one": "Today, I can say",
            "two": "I have gotten closer to",
            "three": "finishing the app.",
            "title": "Haiku App: Progress Update",
            "color": "#5a7104",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-10T14:27:14.848Z",
            "updatedAt": "2024-04-10T14:27:14.848Z",
            "__v": 0
        },
        {
            "_id": "661d33588e2804bae9f1d05d",
            "author": "Chris",
            "one": "Mononymously,",
            "two": " Crystal. But neénymously",
            "three": "Crystal Rita I. ",
            "title": "Neénymously Rita",
            "color": "",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-15T14:02:00.675Z",
            "updatedAt": "2024-04-15T14:07:28.416Z",
            "__v": 0
        },
        {
            "_id": "661d946e822466e756b37288",
            "author": "Chris",
            "one": "Star of Bethlehem",
            "two": "Scarlet tanager no crest",
            "three": "Glory of the Snow",
            "title": "Of No",
            "color": "#4e8df4",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-15T20:56:14.117Z",
            "updatedAt": "2024-04-15T21:04:26.694Z",
            "__v": 0
        },
        {
            "_id": "661ef88ec86cb762216be595",
            "author": "Leah",
            "one": "Every crochet stitch",
            "two": "Leads me away from chaos",
            "three": "And closer to peace",
            "title": "Crochet Chaos",
            "color": "#d14242",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-16T22:15:42.078Z",
            "updatedAt": "2024-04-17T14:36:52.090Z",
            "__v": 0
        },
        {
            "_id": "661fddf401cc676ee5ef52ce",
            "author": "Chris",
            "one": "I see and I want.",
            "two": "Shameless, shallow, and spoiled.",
            "three": "But no job, too bad.",
            "title": "Shallow Want",
            "color": "#ee7777",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T14:34:28.885Z",
            "updatedAt": "2024-04-17T14:42:38.399Z",
            "__v": 0
        },
        {
            "_id": "66202e103ba21b10a81f9b01",
            "author": "Paul",
            "one": "I like to fix things. ",
            "two": "Restore beauty and function, ",
            "three": "but I can't fix old.",
            "title": "",
            "color": "#f78282",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T20:16:16.311Z",
            "updatedAt": "2024-04-17T20:16:16.311Z",
            "__v": 0
        },
        {
            "_id": "66202e443ba21b10a81f9b03",
            "author": "Laura",
            "one": "When I meditate",
            "two": "I'm tapping out syllables",
            "three": "counting on fingers.",
            "title": "",
            "color": "#7f4ddb",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T20:17:08.390Z",
            "updatedAt": "2024-04-17T20:17:08.390Z",
            "__v": 0
        },
        {
            "_id": "66202e8d3ba21b10a81f9b05",
            "author": "Laura",
            "one": "Cherry Blossoms dance",
            "two": "Petals drift down, soft like snow",
            "three": "pink blanket for bugs.",
            "title": "",
            "color": "#f9a4a4",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T20:18:21.224Z",
            "updatedAt": "2024-04-17T20:18:21.224Z",
            "__v": 0
        },
        {
            "_id": "66202ebe3ba21b10a81f9b07",
            "author": "Laura",
            "one": "Tiny sprouts poke through",
            "two": "and so quick become fronds",
            "three": "stretching for the sun",
            "title": "",
            "color": "#bce52a",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T20:19:10.180Z",
            "updatedAt": "2024-04-17T20:19:10.180Z",
            "__v": 0
        },
        {
            "_id": "66202f003ba21b10a81f9b09",
            "author": "Chris",
            "one": "Love me a berry",
            "two": "bloated, bursting, you know it, ",
            "three": "jizzy,  jazzy, sleak.",
            "title": "",
            "color": "#3fde84",
            "like": 0,
            "comment": "",
            "createdAt": "2024-04-17T20:20:16.830Z",
            "updatedAt": "2024-04-17T20:20:16.830Z",
            "__v": 0
        },
        {
            "_id": "66213eefd4d33e6f47d120c6",
            "author": "Chris",
            "one": "I want to go home",
            "two": "is the refrain of the day",
            "three": "And I'm sick of it. ",
            "title": "",
            "color": "#f64c4c",
            "like": 7,
            "comment": "",
            "createdAt": "2024-04-18T15:40:31.529Z",
            "updatedAt": "2024-04-18T16:06:34.102Z",
            "__v": 0
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