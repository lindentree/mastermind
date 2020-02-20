'use strict';

const axios = require('axios');

//this function takes in a numerical string and returns an array of integers

const parseStrIntoNums = (numStr) => {
  let numbers = [];
  
  for (let i = 0; i < numStr.length; i += 1) {
    let digit;

    digit = parseInt(numStr.charAt(i));
    numbers.push(digit);
  }

  return numbers;

}

//takes in a string

const guessValidator = (numStr, limit) => {
  if (numStr.length !== 4)  {
    return false;
  }

  for (let i = 0; i < numStr.length; i += 1) {
    let num = parseInt(numStr[i]);

    if (isNaN(num)) {
      return false;
    }
    

    if(numStr.charAt(i)>limit) {
      return false;
    }
  }

  return true;

}

const randomCodeGenerator = async (limit) => {

  try {
    const response = await axios.get(`https://www.random.org/integers/?num=4&min=0&max=${limit}&col=4&base=10&format=plain&rnd=new`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
  
};

// const mapArrToCountObj = arr => {

//   let mapObj = {};

//   for (let i = 0; i < arr.length; i += 1) {
//     if (mapObj[arr[i]]===undefined) {
//       mapObj[arr[i]] = 1;
//     } else {
//       mapObj[arr[i]] += 1;
//     }
//   }

//   return mapObj;
// }

module.exports = {
  parseStrIntoNums,
  guessValidator,
  randomCodeGenerator
}


