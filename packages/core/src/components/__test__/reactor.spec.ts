import { Atom } from '../atom';
import { Reactor } from '../reactor';

describe('Reactor', async () => {
  it('should allow you to register new atoms', async () => {
    const myAtom = new Atom(0);
    const myReactor = new Reactor();
    await myReactor.atom('myAtom', myAtom);
    expect(await myReactor.val()).toEqual({
      myAtom: 0,
    });
  });
  it('should subscribe properly', async () => {
    const myAtom = new Atom(0);
    const myReactor = new Reactor();
    //@ts-ignore
    const cb = jest.fn(async (data) => {});
    await myReactor.atom('myAtom', myAtom);
    await myReactor.subscribe(cb);
    await myAtom.dispatch(23);
    expect(cb.mock.calls[0][0]).toEqual({
      myAtom: 23,
    });
  });
});
