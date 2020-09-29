/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [{quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.', 
                 source: 'Marcus Aurelius', 
                 citation: 'Meditations'}, 
                {quote: 'The way to get started is to quit talking and begin doing.', 
                 source: 'Walt Disney', }, 
                {quote: 'Life can only be understood backwards; but it must be lived forwards.', 
                 source: 'Søren Kierkegaard'}, 
                {quote: 'People demand freedom of speech as a compensation for the freedom of thought which they seldom use.', 
                 source: 'Søren Kierkegaard'}, 
                {quote: 'Resolve to serve no more, and you are at once freed. I do not ask that you place hands \
                         upon the tyrant to topple him over, but simply that you support him no longer; then \
                         you will behold him, like a great Colossus whose pedestal has been pulled away, fall \
                         of his own weight and break in pieces.', 
                 source: 'Estienne de La Boétie',
                 year: '1576'}];


/***
 * `getRandomQuote` function
 * 
***/

function getRandomQuote(arrLength) {
  const index = Math.floor(Math.random() * Math.floor(arrLength)); //generates random index for quotes array
  return quotes[index];
}




/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);