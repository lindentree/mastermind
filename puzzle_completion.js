//check guesses against puzzle
//output feedback, eg correct numbers, correct numbers and locations, completely wrong etc.
const utils = require('./utils');

function puzzleCheck(puzzle, guess) {//pass in arrays

  const feedbackOptions = {

    1: `You got ${x} of the numbers correct!`,
    2: `You got ${location} of the numbers in the right spot!`,
    3: `All the numbers you guessed were wrong.`,
    4: `You solved it! Congratulations`

  }

  this.puzzle = puzzle;
  let x = 1;
  let location = 0;
  let guessFeedback = '';
  this.allGuesses = {};

  this.checkGuess = function() {
    for (let i = 0; i < this.puzzle.length; i += 1) {
      if (guess[i]===this.puzzle[i]) {
        location += 1;
      }
    }

    this.allGuesses[guess] = guessFeedback;
  }

  this.showAllGuesses = function() {

  }

  this.constructFeedback = function() {

  }



  this.displayFeedback = function() {

  }

}

module.exports = puzzleCheck;