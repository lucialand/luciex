import type { Action, Subscriber } from '../types';

class Atom<T> {
  private value: T;
  private subscribers: Subscriber<T>[];

  constructor(val: T) {
    this.value = val;
    this.subscribers = [];
  }

  async val() {
    return this.value;
  }

  async subscribe(subscriber: Subscriber<T>) {
    this.subscribers.push(subscriber);
    return this;
  }

  async dispatch(action: Action<T> | T) {
    this.value = typeof action === 'function' ? await (action as Action<T>)(this.value) : action;
    this.subscribers.forEach(async (subscriber) => {
      await subscriber(this.value);
    });
    return this;
  }
}

export { Atom };
