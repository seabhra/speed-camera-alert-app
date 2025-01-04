import { greet } from '../client/utils';

test('greet function', () => {
    expect(greet('John')).toBe('Hello, John! Welcome to the Speed Camera Alert App.');
});
