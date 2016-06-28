import { browserHistory } from 'react-router';
import CONFIG from '../config';
export const LOGIN_SUCCESS = 'Authentication.success';
export const LOGIN_FAIL    = 'Authentication.fail';
export const LOGOUT = 'Authentication.logout';

export function onLoginSuccess(response) {
  localStorage.setItem('currentUser', JSON.stringify(response.user))
  localStorage.setItem('token', response.token)
  browserHistory.push('/');

  return {
    type: LOGIN_SUCCESS,
    token: response.token,
    user: response.user
  }
}

export function onLoginFailed(response) {
  return {
    type: LOGIN_FAIL,
    errors: response.errors
  }
}

export function login(credentials) {
  let postData = {
    user: {
      username: credentials.username,
      password: credentials.password
    }
  }

  let config = CONFIG.fetchConfig({ method: 'POST', body: JSON.stringify(postData) })

  return dispatch => {
    fetch(CONFIG.api('/login'), config).then(response => {
      if (response.ok) {
        response.json().then(json => dispatch(onLoginSuccess(json)))
      }
      else {
        response.json().then(json => dispatch(onLoginFailed(json)))
      }
    }).catch(e => console.log(`Error: ${e}`))
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
