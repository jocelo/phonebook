import { applyMiddleware, compose, createStore } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const storeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  allReducers,
  {},
  storeEnhancers
);

export default store;