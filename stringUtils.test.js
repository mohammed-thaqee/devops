const reverseString = require('./stringUtils');
test('reverses "hello" to "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});
