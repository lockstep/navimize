import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authenticationActions from '../../actions/authentications';

const navBar = React.createClass({
  logout() {
    this.props.logout();
  },
  renderUserMenu() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            { this.props.currentUser.username } <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="javascript:void(0)" onClick={ this.logout }>Logout</a></li>
          </ul>
        </li>
      </ul>
    )
  },
  navBar() {
    return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">The App</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#">Link 1</a></li>
          </ul>
          { this.props.currentUser.id && this.renderUserMenu() }
        </div>
      </div>
    </nav>
    );
  },
  render() {
    return this.navBar();
  }
});

const NavBar = connect(mapStateToProps, mapDispatchToProps)(navBar)

export default NavBar;

function mapStateToProps(state) {
  const { currentUser } = state;
  return { currentUser }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authenticationActions, dispatch);
}
