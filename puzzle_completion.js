'use strict';
//check guesses against puzzle
//output feedback, eg correct numbers, correct numbers and locations, completely wrong etc.
const utils = require('./utils');

class Puzzle {//pass in arrays

  constructor(puzzle, guess) {
    this.puzzle = puzzle || [];
    this.guess = guess || [];
    this.correctVal = 0;
    this.exactMatch = 0;
  }
    
  checkGuess (cache) {

    let mapPuzzle = JSON.parse(JSON.stringify(this.puzzle));
    let mapGuess = JSON.parse(JSON.stringify(this.guess));
    let curIndex = null;

    for (let i = mapGuess.length - 1; i >= 0; i-=1) {//find the location/value matches first, filter them out
      if(mapGuess[i] === mapPuzzle[i]) {
        this.exactMatch += 1;
        mapGuess.splice(i, 1);
        mapPuzzle.splice(i, 1);
      }    
    }

    for(let i = 0; i < mapGuess.length; i+=1) {//find any left over values not in the right spot
      curIndex = mapPuzzle.indexOf(mapGuess[i]);
      if(curIndex !== -1) {
        this.correctVal+= 1;
        mapPuzzle.splice(curIndex, 1); //remove the matched value
      }
    }

    if(this.exactMatch === 4) {
      return true; 
    }


    this.constructFeedback();

    if(cache[this.guess]) {
      cache['null'] = `You guessed ${this.guess} again.`
    } else {
      cache[this.guess] = this.guessFeedback; 
    }

    this.correctVal = 0;
    this.exactMatch = 0;
    this.guessFeedback = '';
    return false;
  }

  constructFeedback () {

    if (this.correctVal === 1 && this.exactMatch === 1) {
      this.guessFeedback = 'You got one number correct and another in its exact spot!';
    } else if (this.correctVal === 1 && this.exactMatch === 0) {
      this.guessFeedback = 'You got a number correct!';
    } else if (this.correctVal === 0 && this.exactMatch === 1) {
      this.guessFeedback = 'You got a number and its location correct!';
    } else if ((this.correctVal > 1) && this.exactMatch === 0) {
      this.guessFeedback = `You got ${this.correctVal} of the numbers correct!`
    } else if (this.correctVal === 0 && this.exactMatch > 1) {
      this.guessFeedback = `You got ${this.exactMatch} of the numbers correct in their exact spots!`
    } else if (this.correctVal === 1 && this.exactMatch > 1){
      this.guessFeedback = `You got a number correct and ${this.exactMatch} of the numbers correct in their exact spots!`
    } else if (this.correctVal > 1 && this.exactMatch === 1) {
      this.guessFeedback = `You got ${this.correctVal} of the numbers correct and a number correct in its exact spot!`
    } else if (this.correctVal > 1 && this.exactMatch > 1) {
      this.guessFeedback = `You got ${this.correctVal} of the numbers correct and ${this.exactMatch} of the numbers correct in their exact spots!`
    } else {
      this.guessFeedback = `You got none of the numbers or locations correct!`;
    }

  }
}

module.exports = Puzzle;
