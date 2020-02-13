//'use strict';
//check guesses against puzzle
//output feedback, eg correct numbers, correct numbers and locations, completely wrong etc.
const utils = require('./utils');

class Puzzle {//pass in arrays
  constructor(puzzle, guess) {
    this.puzzle = puzzle || [];
    this.guess = guess || [];
    this.correct = 0;
    this.location = 0;
    this.feedbackOptions = {

      1: `You got ${this.correct} of the numbers correct!`,
      2: `You got ${this.location} of the numbers correct in the right spots!`,
      3: `You got 1 number correct and ${this.location} of the numbers correct in the right spots!`,
      4: `You got ${this.correct} numbers correct and 1 number correct in the right spot!`,
      5: `You got ${this.correct} of the numbers correct and ${this.location} of the numbers correct in the right spots!`,
      6: `All the numbers you guessed were wrong.`,
      7: `You solved it! Congratulations!`

    }
    this.guessFeedback = '';
    

  }
  
  checkGuess (cache) {

  for (let i = 0; i < this.puzzle.length; i += 1) {

    this.guessFeedback = '';
    this.correct = 0;
    this.location = 0;
      let mapPuzzle = utils.mapArrToCountObj(this.puzzle);
      console.log(mapPuzzle);

      if (this.guess[i]===this.puzzle[i]) {
        this.location += 1;
        mapPuzzle[arr2[i]] -= 1;
      } else if (this.guess[[i]]!==this.puzzle[i] && mapPuzzle[this.guess[i]]!==undefined) {
        this.correct += 1;
        mapPuzzle[this.guess[i]] -= 1;

      } 
  }


    if(this.location===4) {
      return this.feedbackOptions[7];
    }
    

    console.log([this.correct, this.location]);
    this.constructFeedback();
    cache[this.guess] = this.guessFeedback; 
   
  }


  constructFeedback () {
    if (this.correct === 1 && this.location === 0) {
      this.guessFeedback = 'You got a number correct!';
    } else if (this.correct === 0 && this.location === 1) {
      this.guessFeedback = 'You got a number and its location correct!';
    } else if ((this.correct > 1) && this.location === 0) {
      this.guessFeedback = this.feedbackOptions[1];
    } else if (this.correct === 0 && this.location > 1) {
      this.guessFeedback = this.feedbackOptions[2];
    } else if (this.correct === 1 && this.location > 1){
      this.guessFeedback = this.feedbackOptions[3];
    } else if (this.correct > 1 && this.location === 1) {
      this.guessFeedback = this.feedbackOptions[4];
    } else if (this.correct > 1 && this.location > 1) {
      this.guessFeedback = this.feedbackOptions[5];
    } else {
      this.guessFeedback = this.feedbackOptions[6];
    }

}

  
}

module.exports = Puzzle;
