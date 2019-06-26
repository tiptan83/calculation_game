import { NEW_NUMBER, UPDATE_ANSWER } from '../actions/types'
import { combineReducers } from "redux";

export const newNumberReducer = (state = 0, action) => {
  const randInt= (min,max) => {
    return(
      Math.floor(Math.random() * (max-min+1)) + min
    )
  }
  if (action.type === NEW_NUMBER) {
    return randInt(action.payload.min, action.payload.max) ;
  }
  return state;
}

function resultReducer(state = 0, action) {
  if (action.type === UPDATE_ANSWER) {
    return Number(action.payload);
  }
  return state;
}

export default combineReducers({
  number1: newNumberReducer,
  number2: newNumberReducer,
  result: resultReducer
});
