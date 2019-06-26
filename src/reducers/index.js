import { NEW_NUMBER, UPDATE_ANSWER, RESET_ANSWER } from "../actions/types";
import { combineReducers } from "redux";

export const newNumberReducer = (state = '', action) => {
  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  if (action.type === NEW_NUMBER) {
    return randInt(action.payload.min, action.payload.max);
  }
  return state;
};

function resultReducer(state = '', action) {
  if (action.type === UPDATE_ANSWER) {
    return Number(action.payload);
  }
  if (action.type === RESET_ANSWER) {
    return '';
  }
  return state;
}

export default combineReducers({
  number1: newNumberReducer,
  number2: newNumberReducer,
  result: resultReducer
});
