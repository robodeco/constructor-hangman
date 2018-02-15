var Letter = require('./letter.js')

var wordArr = ["tali", "normandy", "earth", "reaper", "sovereign", "mordin", "garrus", "liara", "miranda", "jack", "joker", "vorcha", "biotic", "grunt"];

var chosenWord = "";

//var newLetter is an array of new Letter objects, looking like this:
// Letter {
//   underLet: [ 'j', 'a', 'c', 'k' ],
//   guessedYet: false,
//   showLetter: [Function: showLetter],
//   checkLetter: [Function: checkLetter] }

var newLetter = new Letter(letArr);

//==============================
//holds the word in array format
var letArr;

//function to pick a random word
function pickWord(){
  word = wordArr[Math.floor(Math.random() * wordArr.length)]
  wordChoice = word.split("");
//tells the variable letArr to hold the word in array format
    letArr = wordChoice;
    console.log(letArr);

//joins the array into a string
  var togWord = wordChoice.join(" ");
  chosenWord = togWord;
  console.log(chosenWord);
}

pickWord();
//=============================

function TheWord() = {
  this.wordLets = newLetter

}


console.log(newLetter);
