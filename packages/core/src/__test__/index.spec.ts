import * as Luciex from '../index';

describe('Luciex', () => {
  it('should export functions', () => {
    expect(typeof Luciex.Atom).toBe('function');
  });
});
