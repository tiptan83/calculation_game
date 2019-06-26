import { newNumber } from './index'

test('actionCreator-test at newNumber', () =>{
  const testAction = newNumber(1,2)
  expect(testAction.payload.min===1).toBeTruthy();
  expect(testAction.payload.max===2).toBeTruthy();
})