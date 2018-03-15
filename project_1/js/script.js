//create an array of js objects to hold the information for the quotes
var quotes = [
  { quote: 'The only source of knowledge is experience.',
    source: 'Albert Einstein',
    tags: 'Education', },
  { quote: 'You can\'t depend on your eyes when your imagination is out of focus.',
    source: 'Mark Twain',
    tags: 'Imagination', },
  { quote: 'Absence of evidence is not evidence of absence!',
    source: 'Carl Sagan',
    tags: 'Evidence', },
  { quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    tags: 'Self motivation', },
  { quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West',
    tags: 'Self motivation', },
];

/*Create a random number function to select a random quote object from the array.
return the random quote*/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/* create a function that places the random quote in a variable. Create a string
that contains HTML formating. Place variable in string. Print the html formated string
that contains the quote. */
function printQuote() {
  var showQuote = getRandomQuote();
  var htmlFormat = '<p class= "quote"> ' + showQuote.quote + ' </p>';
  htmlFormat += '<p class= "source"> ' + showQuote.source + ', <span class = "tag">';
  htmlFormat += 'Tag:' + showQuote.tags + ' </span></p>';
  document.getElementById('quote-box').innerHTML = htmlFormat;

  //call the randomColor function to change the color of the background
  randomColor();
}

// random color generator displays randoms colors when another quote is displayed
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

//create a function to create a new random color. console.log to view created numbers rgb(x,y,z)
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  console.log(color);
  document.body.style.background = color;
}

/*Changes calls the printQuote every 30 seconds. The quote as well as a
random background color will be generated.*/
setInterval(printQuote, 30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
