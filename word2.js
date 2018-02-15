var Letter = require('./letter.js')

function Word(word) {
  this.word = word;
  this.solved = false;
  this.wordArr = [];

  this.eachLetter = function() {
//we are calling the object, 'Letter', for each letter of the word
    for (var j = 0; j < word.length; j++) {
      var newLetter = this.word[j];

      var letter = new Letter(newLetter);

      var evenNewerLetter = letter.showLetter(Letter.underLet);

      // console.log(letter.underLet);

      this.wordArr.push(evenNewerLetter);

    };
  };
//update boolean
  this.updBool = function() {

    for (var m = 0; m < wordArr.length; m++) {

      var newWordArr = this.wordArr[m];

      var letter2 = new Letter(newWordArr);

      letter2.checkLetter(newWordArr);

      var maybeTrue = letter2.guessedYet;

  //check every value of an array and if each object has a certain key equal to true, this.solved = true.
      newWordArr.every(function(){
        if (maybeTrue = true){
          this.solved = true
        }
      })
    }
  };
};


module.exports = Word;
