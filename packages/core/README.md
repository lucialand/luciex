<h1 align="center">
    <p align="center">Luciex</p>
</h1>

## Introduction

Luciex is a simplistic state management library.

- **Simple To Start**

> Luciex has a simple interface making it as easy as possible to get right in.

## Installation

```
$ npm install luciex
# Or with yarn
$ yarn add luciex
```

## Try It Out

You can create a simple store (or as we call it, an `atom`) for a counter app in only a couple lines.

```typescript
import { Atom } from 'luciex';

const counterAtom = new Atom(0);

const increase = (count: number) => count + 1;
const decrease = (count: number) => count - 1;

await counterAtom.dispatch(increase);
await counterAtom.dispatch(decrease);
```
