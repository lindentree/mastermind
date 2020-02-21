'use strict';

//this module handles user prompts and game flow

const prompts = require('prompts');
const term = require('terminal-kit').terminal;
const utils = require('./utils');
const Puzzle = require('./puzzle_completion');

let limit = 7; //change depending on difficulty setting
let activeCode = '';

let allGuesses = {};
let countdown = 10; //change depending on difficulty setting

const setupGame = () => {

  term.drawImage('./assets/logo.jpeg', {shrink:{ width: term.width/4, height: term.height / 2 }})
    .then(()=>{
      console.log('Welcome to Mastermind!');
      setDifficulty();
            

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
          validate: value => (!utils.guessValidator(value, limit)) ? `Please guess a valid 4 digit combination.` : true
        })

        response.guess = response.guess.trim();
        let code = await activeCode;
        code = code.trim().replace(/\t/g, '');

        let guess = utils.parseStrIntoNums(response.guess)
        let puzzle = utils.parseStrIntoNums(code)
        let puzzleObj = new Puzzle(puzzle, guess);
        let check = puzzleObj.checkGuess(allGuesses);

        if (check) {
          console.log(`You guessed ${code} correctly! You win!`)
          return;
        } else {
          countdown -= 1;
          console.dir(allGuesses);

          if (countdown===1) {
            console.log(`You have only one guess left! Make it count!`);
          } else {
            console.log(`You have ${countdown} guesses remaining.`);
          }
        
          promptUser();

        }
      

      } catch (error) {
        console.log('That did not go well.')
        throw error
      }
      
    })().catch(e => { console.error(e) }); 

  } else {
    
    activeCode = activeCode.trim().replace(/\t/g, '');
    console.log(`Sorry, you're out of guesses.`);
    console.log(`The code was ${activeCode}`);
    return;
  }
  
  return;
};

const setDifficulty = () => {

  (async () => {
    //console.log('inner')
    try {
      const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose a difficulty setting',
        choices: [
        { title: 'Normal', description: 'The default setting', value: 0 },
        { title: 'Hard', description: 'Harder code, fewer guesses', value: 1 },
        { title: 'Extreme', description: 'Good luck', value: 2 }
        ],
        initial: 0
      })

      if(response.value === 1) {
        limit = 8
        countdown = 8
      } else if (response.value === 2) {
        limit = 9
        countdown = 5
      }


     console.log(`The computer has produced a 4 digit code, each digit within the range 0-${limit}. Duplicate digits are possible. Try to solve it in ${countdown} guesses.`);
      generateCode(limit)
        .then((data)=>{
          activeCode = data;
          promptUser();
      
        });

    } catch (error) {
        console.log('That did not go well.')
      throw error
    }

  })().catch(e => { console.error(e) }); 
}

const generateCode = async (limit) => {

  const code = await utils.randomCodeGenerator(limit);
  return code;
}

setupGame();
 