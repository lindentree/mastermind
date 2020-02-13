//'use strict';
//check guesses against puzzle
//output feedback, eg correct numbers, correct numbers and locations, completely wrong etc.
const utils = require('./utils');



const Puzzle = function(puzzle, guess) {//pass in arrays

  this.puzzle = puzzle;
  this.guess = guess
  this.correct = 0;
  this.location = 0;
  this.guessFeedback = '';
  this.mapPuzzle = utils.mapArrToCountObj(this.puzzle);

  

  const feedbackOptions = {

    1: `You got ${this.correct} of the numbers correct!`,
    2: `You got ${this.location} of the numbers in the right spot!`,
    3: `All the numbers you guessed were wrong.`,
    4: `You solved it! Congratulations!`

  }

}

Puzzle.prototype.checkGuess = function() {
    
    for (let i = 0; i < this.puzzle.length; i += 1) {
      if (this.guess[i]===this.puzzle[i]) {
        this.location += 1;
        this.mapPuzzle[this.guess[i]] -= 1;
      } else if (this.guess[i]!==this.puzzle[i] && this.mapPuzzle[this.guess[i]]) {
        this.correct += 1;
        this.mapPuzzle[this.guess[i]] -= 1;

      }
    }

    console.log([this.correct, this.location]);
    return [this.correct, this.location];
}

Puzzle.prototype.showAllGuesses = function() {

}

Puzzle.prototype.constructFeedback = function() {

}

Puzzle.prototype.displayFeedback = function() {

}

let test = new Puzzle([1, 2, 3, 2], [2, 2, 2, 2]);

test.checkGuess();

module.exports = Puzzle;