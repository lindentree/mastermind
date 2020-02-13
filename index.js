'use strict';

const prompts = require('prompts');
const rng = require('./rng.js');


let puzzle = null;
let countdown = 10;

const guess = null;
 
(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: `What's your guess?`,
    validate: value => (value >= 0 && value <= 7) ? `Thank you` : `Please guess between 0-7`
  });
  
  countdown -= 1;
  console.log(response);

})();