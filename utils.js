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
  if (numStr.length !== 4)  {
    return false;
  }

  for (let i = 0; i < numStr.length; i += 1) {
    if(numStr.charAt(i)>limit) {
      return false;
    }
  }

  return true;

}

const randomCodeGenerator = async () => {
  try {
    const response = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=4&base=10&format=plain&rnd=new');
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
  
};

const mapArrToCountObj = arr => {

  let mapObj = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (mapObj[arr[i]]===undefined) {
      mapObj[arr[i]] = 1;
    } else {
      mapObj[arr[i]] += 1;
    }
  }

  return mapObj;
}

const mastermindWin = (arr1, arr2) => {
    let loc = 0;
    let cor = 0;
    
    for (let i = 0; i < arr2.length; i += 1) {

      

      let mapPuzzle = mapArrToCountObj(arr1);
      console.log(loc, mapPuzzle);

      if (arr2[i]===arr1[i]) {
        console.log('hm', loc)
        loc += 1;
        mapPuzzle[arr2[i]] -= 1;
      } else if (arr2[i]!==arr1[i] && mapPuzzle[arr2[i]]!==undefined) {
        cor += 1;
        mapPuzzle[arr2[i]] -= 1;

      } else {
        continue;
      }
    }

    if(loc===4) {
      return true;
     }

    return false;
}



module.exports = {
  parseStrIntoNums,
  guessValidator,
  randomCodeGenerator,
  mapArrToCountObj,
  mastermindWin
}


