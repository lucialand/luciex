import { Atom } from '../atom';

describe('Atom', () => {
  it('should allow you to dispatch an action', async () => {
    const counter = new Atom(0);
    const increment = (count: any) => count + 1;
    await counter.dispatch(increment);
    expect(await counter.val()).toBe(1);
  });
  it('should subscribe properly', async () => {
    const counter = new Atom(0);
    //@ts-ignore
    const cb = jest.fn(async (val: number) => {})
    const result = await counter.subscribe(cb);
    expect(result).toEqual(counter);
    await counter.dispatch((count: number) => count + 1);
    expect(cb.mock.calls[0][0]).toBe(1);
  });
});
