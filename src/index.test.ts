import { helloWorld } from '../index.js';

test('given a test function return hello world', () => {
  expect(helloWorld()).toBe('hello world!');
});
