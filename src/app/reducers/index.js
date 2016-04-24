import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/ActionTypes';

function datas(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_VALUE:
      return [{...action.data}, ...state];
    default:
      return state;
  }
}

export default combineReducers({
  datas,
});
