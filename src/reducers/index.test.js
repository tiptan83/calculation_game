import { newNumberReducer } from "./index";
import { newNumber } from "../actions/index";

test("newNumberReducer should return value between min and max", () => {
  const testAction = newNumber(5, 5);
  const reducedTestAction = newNumberReducer([], testAction);
  expect(reducedTestAction === 5).toBeTruthy();
});

test("newNumberReducer at value 0", () => {
  const testAction = newNumber(0, 0);
  const reducedTestAction = newNumberReducer([], testAction);
  expect(reducedTestAction === 0).toBeTruthy();
});

test("newNumberReducer in a range", () => {
  for (let i = 0; i < 20; i++) {
    // Should fail!!!
    const testAction = newNumber(2, 5);
    const reducedTestAction = newNumberReducer([], testAction);
    expect(reducedTestAction <= 3 && reducedTestAction >= 2).toBeTruthy();
  }
});
