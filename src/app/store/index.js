import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import reducer from '../reducers';

const middleware = [logger()];

export function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware));

  return store;
}
