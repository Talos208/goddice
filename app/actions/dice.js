// @flow
export const ROLL_DICE = 'ROLL_DICE';
export const UPDATE_PARAM = 'UPDATE_PARAM';
export const UPDATE_TYPE = 'UPDATE_TYPE';

export function roll() {
  return {
    type: ROLL_DICE
  };
}

export function updateCnt(value) {
  const v = parseInt(value.target.value, 10)
  return {
    type: UPDATE_PARAM,
    value: v
  };
}

export function updateType(value) {
  const v = parseInt(value.target.value, 10)
  return {
    type: UPDATE_TYPE,
    value: v
  };
}
