//check guesses against puzzle
//output feedback, eg correct numbers, correct numbers and locations, completely wrong etc.
const utils = require('./utils');

const feedbackOptions = {

  1: `You got ${x} of the numbers correct!`,
  2: `You got ${location} of the numbers in the right spot!`,
  3: `All your guesses were wrong.`

}

function puzzleCheck(puzzle, guess) {

  this.feedback = {};
  this.puzzle = puzzle;
  let x = 1;
  let location = 0;
  let output = '';

  this.checkGuess = function() {
    for (let i = 0; i < puzzle.length; i += 1) {

    } 
  }

  this.displayFeedback = function() {
    
  }

}