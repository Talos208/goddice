import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type diceStateType = {
  +count: number,
  +type: number,
  +total: number,
  +each: Array<number>,
  +dirty: boolean
};

export type Action = {
  +type: string
};

export type GetState = () => diceStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
