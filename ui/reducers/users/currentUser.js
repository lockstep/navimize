import * as actionCreators from '../../actions/authentications';
import * as currentUserActions from '../../actions/users/currentUser';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case actionCreators.LOGIN_SUCCESS:
      return setUserState(state, action);

    case actionCreators.LOGIN_FAILED:
    case actionCreators.LOGOUT:
    case currentUserActions.LOAD_USER_DATA_FAIL:
      return clearUserData(state, action);

    case currentUserActions.LOAD_USER_DATA_SUCCESS:
      return setCurrentUser(state, action);

    default:
      return state
  }
}

export default currentUser;

function setUserState(state, action) {
  return Object.assign({}, state, {
    id: action.user.id,
    username: action.user.username,
    email: action.user.email
  });
}

function clearUserData(state, action) {
  localStorage.removeItem('currentUser');
  return {};
}

function setCurrentUser(state, action) {
  return Object.assign({}, state, action.currentUser);
}
