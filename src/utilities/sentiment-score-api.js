const fetch = require('node-fetch');

const url = 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
    'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
  },
  body: {
    language: 'english',
    text: 'Steam dances above, dark elixir soothes the soul,morning\'s gift of life.'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}