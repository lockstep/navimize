import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers for each state
import authentication from './authentication';
import currentUser    from './users/currentUser.js';

const RootReducer = combineReducers({
  routing: routerReducer,
  authentication,
  currentUser
});

export default RootReducer;
