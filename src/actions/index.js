import { NEW_NUMBER, UPDATE_ANSWER, RESET_ANSWER } from './types'

export const newNumber = (min=11, max=99) => {

  const ranges = { min: min, max: max };
  return { type: NEW_NUMBER, payload: ranges };
};

export const changeResult = result => {
  return { type: UPDATE_ANSWER, payload: result };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER }
}
