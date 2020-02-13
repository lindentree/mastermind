'use strict';

const prompts = require('prompts');
const term = require('terminal-kit').terminal;
const rng = require('./rng');
const utils = require('./utils');

//this module handles user prompts and game flow


let puzzle = null;
let limit = 7; //change depending on difficulty setting

let allGuesses = {};
let countdown = 10; //change depending on difficulty setting

const guess = null;


const displayGuessFunction = () => {
  console.log(JSON.stringify(allGuesses, null, 1));
}
 
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'guess',
    message: `What's your guess?`,
    validate: value => (utils.guessValidator(value, limit)) ? `Thank you` : `Please guess a valid 4 digit combination`
  });

  countdown -= 1;
  allGuesses[countdown] = response.guess
  displayGuessFunction();
  return;

})();


