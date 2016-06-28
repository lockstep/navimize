import * as actionCreators from '../actions/authentications';
import * as currentUserActions from '../actions/users/currentUser';

const authentication = (state = {}, action) => {
  switch (action.type) {
    case actionCreators.LOGIN_SUCCESS:
      return login(state, action);

    case actionCreators.LOGIN_FAILED:
    case actionCreators.LOGOUT:
    case currentUserActions.LOAD_USER_DATA_FAIL:
      return logout(state, action);

    default:
      return state;
  }
}

export default authentication;

function login(state, action) {
  return Object.assign({}, state, {
    token: action.token,
    isAuthenticated: true
  });
}

function logout(state, action) {
  localStorage.removeItem('token');
  return Object.assign({}, state, {
    token: undefined,
    isAuthenticated: false
  });
}
