const { sum } = require('./math');

test('should sum a and b, 1 and 2 equal 3', () => {
  expect(sum(1, 2)).toBe(5);
});
