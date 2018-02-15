function Letter(underLet) {
  //key to store the letter
  this.underLet = underLet;
  //key stating whether its been guessed correctly yet
  this.guessedYet = false;
  //key containing method to change the letter from "_" to the letter itself when guessed
  this.showLetter = function(underLet){

    for(var i = 0; i < this.underLet.length; i++){

      if (this.guessedYet == false){
        this.underLet = "_";

      } else {
        return this.underLet;
      }

    };
};
//key containing method processing whether the argument equals the underlying letter. dont know if im passing the argument correctly.
  this.checkLetter = function(){
    if (process.argv[2] === underLet){
      this.guessedYet = true;
    }
  }
};

module.exports = Letter;
