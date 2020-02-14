'use strict';

//this module handles user prompts and game flow

const prompts = require('prompts');
const term = require('terminal-kit').terminal;
const utils = require('./utils');
const Puzzle = require('./puzzle_completion');
//const feedbackOptions = require('./dialogue');

let limit = 7; //change depending on difficulty setting
let activeCode = '';

let allGuesses = {};
let countdown = 10; //change depending on difficulty setting

const setupGame = () => {
  console.log('Welcome to Mastermind!');
  console.log('The computer has produced a 4 digit code. Try to break it in 10 guesses')
  generateCode()
    .then((data)=>{
      activeCode = data;
      promptUser();
      
    });

  
  
}

const promptUser = () => {
  
  if (countdown > 0) {
    (async () => {

      try {
        const response = await prompts({
      type: 'text',
      name: 'guess',
      message: `What's your guess?`,
      validate: value => (!utils.guessValidator(value, limit)) ? `Please guess a valid 4 digit combination` : true
      })

      response.guess = response.guess.trim();
      let code = await activeCode;
      code = code.trim().replace(/\t/g, '')


      let guess = utils.parseStrIntoNums(response.guess)
      let puzzle = utils.parseStrIntoNums(code)


      console.log('sanity', guess);
      console.log('double', puzzle);

      let puzzleObj = new Puzzle(puzzle, guess);
      let check = puzzleObj.checkGuess(allGuesses);

      if (check) {
        console.log('You win!');
        return;
      } else {
        countdown -= 1;
        console.log(allGuesses);
        console.log(`You have ${countdown} guesses remaining.`)
        promptUser();

      }
      

      } catch (error) {
        console.log('That did not go well.')
        throw error
      }
      

    })().catch(e => { console.error(e) }); 


  } else {
    
    console.log(`Sorry, you're out of guesses.`);
    console.log(`The code was ${activeCode}`);
    return;
  }
  
  return;
  

};


const generateCode = async () => {
  const code = await utils.randomCodeGenerator();
  return code;

}


setupGame();
 