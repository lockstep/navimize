import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import RootReducer from './reducers/root';

const defaultState = {}

const store = createStore(
  RootReducer, defaultState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
