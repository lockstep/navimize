import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './components/authentication/login_page';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ AppLayout }>
        <Route path="/login" component={ LoginPage }></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("react_app_wrapper"))
