'use strict';

const axios = require('axios');

const parseStrIntoNums = (numStr) => {
  let numbers = [];
  
  for (let i = 0; i < numStr.length; i += 1) {
    let digit;

    digit = parseInt(numStr.charAt(i));
    numbers.push(digit);
  }

  return numbers;

}

const guessValidator = (numStr, limit) => {
  if (numStr.length < 4) {
    return false;
  }

  for (let i = 0; i < numStr.length; i += 1) {
    if(numStr.charAt(i)>limit) {
      return false;
    }
  }

  return true;

}

const randomNumGenerator = async () => {
  try {
    const response = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');
    const data = response.data;
    return data
  } catch (error) {
    console.log(error);
  }
  
};


module.exports = {
  parseStrIntoNums,
  guessValidator,
  randomNumGenerator
}


