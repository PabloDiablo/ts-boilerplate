import { sayHello } from '.';

test('it says hello', () => {
  expect(sayHello('Bob')).toEqual('Hello Bob!');
});
