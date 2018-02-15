var inquirer = require("inquirer");
var Word = require('./word2.js');

var wordArr = ["tali", "normandy", "earth", "reaper", "sovereign", "mordin", "garrus", "liara", "miranda", "jack", "joker", "vorcha", "biotic", "grunt"];
// var chosenWord = "";

var randArr;
var youWin = false
var join;

//function to pick a random word
// ===================================
function pickWord(){
  var word = wordArr[Math.floor(Math.random() * wordArr.length)]
  var wordChoice = word.split("");
//tells the variable letArr to hold the word in array format
    randArr = wordChoice;
    // console.log(randArr);
}

pickWord();

// ===================================

function finalWord(){
  var randomWord = new Word(randArr);
  //the below function comes attached to the new constructor

  randomWord.eachLetter();
  join = randomWord.wordArr.join("-");

//gonna have to set a variable that is continuously added to for each letter in a for loop?
};

finalWord();

//run the prompt each time until youWin = true. if it does equal true, end the game. doesnt appear to work. i am so close with this! whats going on?
var inqPrompt = function() {

console.log(join)

  inquirer.prompt([
{
  name: "character",
  message: "Enter a letter!"
}
]).then(function(){

  var wordAg = new Word(randArr);
  console.log(wordAg)
  var checkArr = wordAg.wordArr.length

      for (var p = 0; p < checkArr; p++){
          wordAg.updBool()
        }

      if (wordAg.solved = true){
        var youWin = true;
//the below console.log is working when it shouldnt be. youWin is coming up true.
        console.log("You Win!");
        console.log(youWin);
      }
      else {
        inqPrompt();
      }
    })
};

inqPrompt();
//add functionality that states if this.word under word2.js is no longer empty, run the eachLetter function as well as the updBool function.
// Random_Word.prototype.wordfilled = function() {
//   if (this.word != null){
//     eachLetter();
//   };
// };
