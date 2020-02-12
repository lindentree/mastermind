'use strict';

const prompt = require('prompt');
const rng = require('./rng.js');

prompt.start();
 
  
prompt.get(['username'], function (err, result) {
    
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  rng.randomNumGenerator()
    .then(response => {
      console.log(response)
    })
  
  
    
});