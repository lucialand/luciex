interface Subscriber<T> {
  (val: T): Promise<void> | void;
}

interface Action<T> {
  (val: T): Promise<T> | T;
}

export { Subscriber, Action };
