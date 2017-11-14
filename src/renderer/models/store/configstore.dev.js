import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import initialState from './initialstore';

const logger = createLogger({
    collapsed: true,
  });

const middleware = composeWithDevTools( applyMiddleware(logger) );
export default createStore(rootReducer, initialState, middleware);
