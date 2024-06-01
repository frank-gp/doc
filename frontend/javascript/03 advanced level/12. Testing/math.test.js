// math.test.js

const { add, subtract } = require('./math');

test('addition', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtraction', () => {
  expect(subtract(5, 3)).toBe(2);
});
