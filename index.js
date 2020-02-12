'use strict';

const prompt = require('prompt');

prompt.start();
 
  
prompt.get(['username'], function (err, result) {
    
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
    
});