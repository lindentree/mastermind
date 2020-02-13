const utils = require('./utils');

test(`The numString should become the correct array of integers`, () => {
  expect(utils.parseStrIntoNums('1234')).toEqual([1, 2, 3, 4]);
  expect(utils.parseStrIntoNums('1234')).not.toEqual([4, 3, 3, 1]);
});

test(`Users' guesses should be 4 valid digits`, () => {
  expect(utils.guessValidator('1234', 7)).toBe(true);
  expect(utils.guessValidator('6666', 6)).toBe(true);
  expect(utils.guessValidator('123', 7)).not.toBe(true);
  expect(utils.guessValidator('7778', 8)).not.toBe(true);
});