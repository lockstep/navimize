// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../actions/authentications'
// // import * as types from '../../constants/ActionTypes'
// import nock from 'nock'
// import expect from 'expect' // You can use any testing library

// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)

// var storageMock = (function() {
//   var store = {};
//   return {
//     getItem: function(key) {
//       return store[key];
//     },
//     setItem: function(key, value) {
//       store[key] = value.toString();
//     },
//     clear: function() {
//       store = {};
//     }
//   };
// })();

// Object.defineProperty(global, 'localStorage', {
//   value: storageMock,
// });

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })

//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     nock('/api/v1')
//       .post('/login', {
//         user: {
//           username: 'user',
//           password: 'password'
//         }
//       })
//       .reply(201, { token: 'randomString', user: { username: 'user' } })

//     const expectedActions = [
//       { type: actions.LOGIN_SUCCESS, token: 'randomString', user: { username: 'user' } }
//     ]
//     const store = mockStore({ currentUser: {} })

//     return store.dispatch(actions.login({ username: 'username', password: 'password' }))
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   })
// })
