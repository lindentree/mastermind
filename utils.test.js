const utils = require('./utils');

test('numString should become the correct integer', () => {
  expect(utils.parseNumStr('1234')).toBe(1234);
});