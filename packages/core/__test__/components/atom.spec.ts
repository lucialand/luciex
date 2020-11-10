import { Atom } from '../../src/components/atom';

describe('Atom', () => {
  it('should allow you to dispatch an action', async () => {
    const counter = new Atom(0);
    const increment = (count: any) => count + 1;
    await counter.dispatch(increment);
    expect(await counter.val()).toBe(1);
  });
  it('should subscribe properly', async () => {
    const counter = new Atom(0);
    const result = await counter.subscribe(async (val: number) => {
      expect(val).toBe(1);
    });
    expect(result).toEqual(counter);
    counter.dispatch((count: number) => count + 1);
  });
});
