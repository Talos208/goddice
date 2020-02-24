// @flow
// eslint-disable-next-line import/extensions
import { ROLL_DICE, UPDATE_PARAM, UPDATE_TYPE } from '../actions/dice.js';
import type { Action, diceStateType } from './types';

export default function dice(state: diceStateType, action: Action) {
  // console.log(state)
  const next = {}
  Object.assign(next, state)
  switch (action.type) {
    case ROLL_DICE: {
      // console.log(next)
      next.total = 0;
      next.each = [];
      for (let i = 0; i < next.count; i++) {
        const v = Math.floor(Math.random() * next.type) + 1;
        // console.log(v)
        next.each.push(v);
        next.total += v;
        next.dirty = false;
      }
      // console.log(next.each)
      // console.log(next.total)
      return next;
    }
    case UPDATE_PARAM: {
      console.log(action)
      if (!next.dirty) {
        next.total = 0;
        next.each = [];
        next.dirty = true;
      }
      next.count = action.value

      return next;
    }
    case UPDATE_TYPE: {
      if (!next.dirty) {
        next.total = 0;
        next.each = [];
        next.dirty = true;
      }
      next.type = action.value

      return next;
    }
    default:
      return {
        count: 1,
        type: 10,
        total: 0,
        each: [],
        dirty: false
      };
  }
}
