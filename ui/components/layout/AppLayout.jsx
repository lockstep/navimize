import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadRemoteData } from '../../actions/users/currentUser';
import NavBar from './navbar';

const appLayout = React.createClass({
  componentDidMount() {
    this.props.loadUserData();
  },
  render() {
    return(
      <div>
        <NavBar />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
});

const AppLayout = connect(() => ({}), mapDispatchToProps)(appLayout);
export default AppLayout;

function mapDispatchToProps(dispatch) {
  return {
    loadUserData() {
      dispatch(loadRemoteData());
    }
  }
}
