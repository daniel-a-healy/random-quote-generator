/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Is an array that contains quote objects. Each quote has 2 required properties: quote and source
 * Optional properties are 'citation', 'year', and 'tags'
 * This array is accessed by the getRandomQuote() function
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
                 citation: 'Discourse on Voluntary Servitude',
                 year: '1576',
                 tags: ['civil rights', 'liberty', 'politics']}];

/***
 * `getRandomQuote` function
 * Takes the array length as an argument
 * Generates a random number between 0 and arrLength - 1 and stores in variable 'index'
 * Returns the quote object at quotes[index]
 * 
***/

function getRandomQuote(arrLength) {
  const index = Math.floor(Math.random() * Math.floor(arrLength)); //generates random index for quotes array
  return quotes[index];
}

/***
 * `printQuote` function
 * Grabs a random function from the quotes array, 
 * and builds appropriate HTML for display of each property 
 * associated with the quote object
 * After the HTML is built, it updates the quote box with the generated HTML string
***/

function printQuote() {
  quote = getRandomQuote(quotes.length);

  // html for required quote properties
  html = `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source} `;

  // check for each of the 3 optional quote properties
  if (Object.keys(quote).includes('citation')) {
     html += `<span class="citation"> ${quote.citation} </span>`;
  }

  if (Object.keys(quote).includes('year')) {
    html += `<span class="year"> ${quote.year} </span>`;
  }

  if (Object.keys(quote).includes('tags')) {
    html += `<br><br><span class="tags"> Tags: ${quote.tags} </span>`;
  }

  html += '</p>'; // close source paragraph tag after checking for optional properties
  document.getElementById('quote-box').innerHTML = html; // update quote box with generated quote HTML
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);