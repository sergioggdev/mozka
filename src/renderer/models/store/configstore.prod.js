import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

// import rootReducer from './reducers';
// import initialState from './initialstore';

const middleware = composeWithDevTools(applyMiddleware(createLogger()));
export default createStore(rootReducer, initialState, middleware);
