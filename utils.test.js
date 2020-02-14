const utils = require('./utils');

test(`The numString should become the correct array of integers`, () => {
  expect(utils.parseStrIntoNums('1234')).toEqual([1, 2, 3, 4]);
  expect(utils.parseStrIntoNums('1234')).not.toEqual([4, 3, 3, 1]);
});

test(`Users' guesses should be 4 valid digits`, () => {
  expect(utils.guessValidator('1234', 7)).toBe(true);
  expect(utils.guessValidator('6666', 6)).toBe(true);
  expect(utils.guessValidator('123', 7)).not.toBe(true);
  expect(utils.guessValidator('7779', 8)).not.toBe(true);
});

test(`The numArray should be mapped to a count object`, () => {
  expect(utils.mapArrToCountObj([1,2,2,4])).toEqual({1:1, 2:2, 4:1});
  
});


test(`Should validate correct guesses`, () => {
  expect(utils.mastermindWin([1,2,4,3], [1, 2, 4, 3])).toBe(true);
  expect(utils.mastermindWin([1,2,4,3], [1, 2, 4, 5])).toBe(false);
  
});

// test(`Should return correct counts`, () => {
//   expect(utils.mastermindWin([1,2,4,3], [1, 2, 4, 3])).toBe(true);
//   expect(utils.mastermindWin([1,2,4,3], [1, 2, 4, 5])).toBe(false);
  
// });