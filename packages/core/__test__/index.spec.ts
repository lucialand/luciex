import * as Luciex from '../src/index';

describe('Luciex', () => {
  it('should export functions', () => {
    expect(typeof Luciex.Atom).toBe('function');
  });
});
