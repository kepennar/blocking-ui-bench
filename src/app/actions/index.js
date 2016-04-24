import * as ActionTypes from './ActionTypes';

export function addData(data) {

  let rand;
  for (let i = 0; i < 5000; i++) {
    rand = Math.random();
    console.log('Generate random value', rand);
  }

  return {
    type: ActionTypes.ADD_VALUE,
    data: data
  };
}
