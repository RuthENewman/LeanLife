const add = (a, b) => a + b;
const generateGreeting = (name = 'Stranger') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('should greet the name given', () => {
  const result = generateGreeting('Tom');

  expect(result).toBe('Hello Tom!');
})

test('should generate greeting even with no name', () => {
  const result = generateGreeting();

  expect(result).toBe('Hello Stranger!');
})
