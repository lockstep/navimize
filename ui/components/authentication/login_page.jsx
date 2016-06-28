import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/authentications';
import '../../stylesheets/login_page.scss';

const loginPage = React.createClass({
  login(e) {
    e.preventDefault();
    this.props.login({
      username: this.refs.username.value,
      password: this.refs.password.value
    });
  },
  render() {
    return (
    <form className="form-signin" onSubmit={ this.login }>
      <h2 className="form-signin-heading">Please sign in</h2>

      <label for="inputEmail" className="sr-only">Username</label>
      <input type="text" ref="username" className="form-control" placeholder="Username" required autofocus />

      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" ref="password" className="form-control" placeholder="Password" required />

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
    );
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(loginPage);

export default LoginPage;
