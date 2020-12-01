import type { Subscriber } from '../types';
import type { Atom } from './atom';

class Reactor<T = any> {
  private atoms: Record<string, Atom<T>>;
  private subscribers: Subscriber<Record<string, T>>[];

  constructor() {
    this.atoms = {};
    this.subscribers = [];
  }

  async atom(name: string, atom: Atom<T>) {
    this.atoms[name] = atom;
    this.atoms[name].subscribe(async () => await this.onDispatch());
    return this;
  }

  async subscribe(subscriber: Subscriber<Record<string, T>>) {
    this.subscribers.push(subscriber);
    return this;
  }

  async val() {
    const atomsCopy: any = Object.assign({}, this.atoms);
    Object.keys(atomsCopy).forEach(async (key) => {
      atomsCopy[key] = await atomsCopy[key].val();
    });
    return atomsCopy;
  }

  private async onDispatch() {
    this.subscribers.forEach(async (subscriber) => {
      await subscriber(await this.val());
    });
  }
}

export { Reactor };
