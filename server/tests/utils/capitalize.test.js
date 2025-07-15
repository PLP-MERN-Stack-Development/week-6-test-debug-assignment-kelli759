//capitalize.test.js
const capitalize = require('../../utils/capitalize');

describe('capitalize()', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
