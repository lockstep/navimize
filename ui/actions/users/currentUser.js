import CONFIG from '../../config';
export const LOAD_USER_DATA_SUCCESS = 'User.loadDataSuccess';
export const LOAD_USER_DATA_FAIL = 'User.loadDataFail';

export function loadLocalStorage() {
  let currentUser = {}
  const userData = localStorage.getItem('currentUser')
  if (userData !== null) {
    Object.assign(currentUser, JSON.parse(userData));
  }

  return {
    type: LOAD_USER_DATA_SUCCESS,
    currentUser
  }
}

export function loadRemoteData() {
  return dispatch => {
    fetch(CONFIG.api('/authentication/user'), CONFIG.fetchConfig()).then(response => {
      if (response.ok) {
        response.json().then(json => dispatch(onLoadRemoteDataSuccess(json)))
      }
      else {
        response.json().then(json => dispatch(onLoadRemoteDataFailed(json)))
      }
    }).catch(e => console.log(`Error: ${e}`))
  }
}

function onLoadRemoteDataSuccess(data) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    currentUser: data.user
  }
}

function onLoadRemoteDataFailed(data) {
  return {
    type: LOAD_USER_DATA_FAIL,
    data
  }
}
