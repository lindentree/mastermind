'use strict';

const axios = require('axios');

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
  randomNumGenerator
}

